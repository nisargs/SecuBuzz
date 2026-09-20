export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T | null>;
  run<T = unknown>(): Promise<{ success: boolean; meta: unknown }>;
  all<T = unknown>(): Promise<{ results: T[] }>;
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

export interface Env {
  DB: D1Database;
  PUSH_ADMIN_SECRET?: string;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-admin-key',
};

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

function errorResponse(message: string, status = 400): Response {
  return jsonResponse({ success: false, error: message }, status);
}

function isValidExpoPushToken(token: unknown): boolean {
  if (typeof token !== 'string') return false;
  // Expo push tokens have format ExponentPushToken[...] or ExpoPushToken[...]
  return (
    (token.startsWith('ExponentPushToken[') || token.startsWith('ExpoPushToken[')) &&
    token.endsWith(']')
  );
}

function isAuthorized(request: Request, env: Env): boolean {
  if (!env.PUSH_ADMIN_SECRET) {
    // If no secret configured in worker env, allow internal operations during development
    return true;
  }
  const authHeader = request.headers.get('Authorization');
  const customKey = request.headers.get('x-admin-key');

  if (customKey === env.PUSH_ADMIN_SECRET) {
    return true;
  }
  if (authHeader && authHeader === `Bearer ${env.PUSH_ADMIN_SECRET}`) {
    return true;
  }
  return false;
}

import { PRIVACY_POLICY_HTML } from './privacyHtml';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: CORS_HEADERS,
      });
    }

    try {
      // Public Landing & Privacy Policy Page (Google Play Store compliance & domain root)
      if (url.pathname === '/' || url.pathname === '/privacy' || url.pathname === '/privacy.html') {
        return new Response(PRIVACY_POLICY_HTML, {
          status: 200,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
            ...CORS_HEADERS,
          },
        });
      }

      // 1. Health check
      if (url.pathname === '/health' || url.pathname === '/api/health') {
        return jsonResponse({
          status: 'ok',
          service: 'secubuzz-push-worker',
          timestamp: new Date().toISOString(),
        });
      }

      // 2. Register / Update Device Push Token (Called by Mobile App)
      // POST /api/push-tokens
      if (
        (url.pathname === '/api/push-tokens' || url.pathname === '/push-tokens') &&
        request.method === 'POST'
      ) {
        let body: any;
        try {
          body = await request.json();
        } catch {
          return errorResponse('Invalid JSON body');
        }

        const { token, platform, appVersion } = body ?? {};

        if (!isValidExpoPushToken(token)) {
          return errorResponse('Invalid Expo push token format');
        }

        const validPlatform =
          platform === 'ios' || platform === 'android' ? platform : 'android';
        const now = new Date().toISOString();
        const safeVersion = typeof appVersion === 'string' ? appVersion.slice(0, 32) : '1.0.0';

        // Idempotent UPSERT into Cloudflare D1
        await env.DB.prepare(
          `INSERT INTO push_tokens (token, platform, app_version, created_at, last_seen_at, is_active)
           VALUES (?, ?, ?, ?, ?, 1)
           ON CONFLICT(token) DO UPDATE SET
             last_seen_at = excluded.last_seen_at,
             app_version = excluded.app_version,
             is_active = 1;`
        )
          .bind(token, validPlatform, safeVersion, now, now)
          .run();

        return jsonResponse({
          success: true,
          message: 'Token registered successfully',
        });
      }

      // 3. Get Active Tokens (Called by scripts/ingest.mjs during 6-hour cron)
      // GET /api/push-tokens
      if (
        (url.pathname === '/api/push-tokens' || url.pathname === '/push-tokens') &&
        request.method === 'GET'
      ) {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized', 401);
        }

        const { results } = await env.DB.prepare(
          `SELECT token FROM push_tokens WHERE is_active = 1 ORDER BY last_seen_at DESC;`
        ).all<{ token: string }>();

        const tokens = (results ?? []).map((row: { token: string }) => row.token);

        return jsonResponse({
          success: true,
          count: tokens.length,
          tokens,
        });
      }

      // 4. Deactivate Invalid Tokens (Called by scripts/ingest.mjs if Expo returns DeviceNotRegistered)
      // POST /api/push-tokens/deactivate
      if (
        url.pathname === '/api/push-tokens/deactivate' &&
        request.method === 'POST'
      ) {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized', 401);
        }

        let body: any;
        try {
          body = await request.json();
        } catch {
          return errorResponse('Invalid JSON body');
        }

        const { tokens } = body ?? {};
        if (Array.isArray(tokens) && tokens.length > 0) {
          const placeholders = tokens.map(() => '?').join(',');
          await env.DB.prepare(
            `UPDATE push_tokens SET is_active = 0 WHERE token IN (${placeholders});`
          )
            .bind(...tokens)
            .run();
        }

        return jsonResponse({ success: true, message: 'Tokens deactivated' });
      }

      // 5. Check if notification was already sent for an article (Duplicate Prevention)
      // GET /api/notifications/sent?articleId=...
      if (
        url.pathname === '/api/notifications/sent' &&
        request.method === 'GET'
      ) {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized', 401);
        }

        const articleId = url.searchParams.get('articleId');
        if (!articleId) {
          return errorResponse('Missing articleId parameter');
        }

        const record = await env.DB.prepare(
          `SELECT article_id, sent_at FROM sent_notifications WHERE article_id = ?;`
        )
          .bind(articleId)
          .first();

        return jsonResponse({
          success: true,
          alreadySent: Boolean(record),
          record,
        });
      }

      // 6. Record sent notification
      // POST /api/notifications/sent
      if (
        url.pathname === '/api/notifications/sent' &&
        request.method === 'POST'
      ) {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized', 401);
        }

        const body: any = await request.json();
        const { articleId, headline, recipientCount } = body ?? {};

        if (!articleId) {
          return errorResponse('Missing articleId');
        }

        await env.DB.prepare(
          `INSERT INTO sent_notifications (article_id, headline, sent_at, recipient_count)
           VALUES (?, ?, ?, ?)
           ON CONFLICT(article_id) DO NOTHING;`
        )
          .bind(
            articleId,
            headline ?? '',
            new Date().toISOString(),
            Number(recipientCount ?? 0)
          )
          .run();

        return jsonResponse({ success: true, message: 'Recorded sent notification' });
      }

      return errorResponse('Not found', 404);
    } catch (error) {
      console.error('Worker error:', error);
      return errorResponse(
        error instanceof Error ? error.message : 'Internal server error',
        500
      );
    }
  },
};
