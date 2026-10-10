-- Database schema for SecuBuzz Push Notification Service (Cloudflare D1)

CREATE TABLE IF NOT EXISTS push_tokens (
  token TEXT PRIMARY KEY,
  platform TEXT NOT NULL,
  app_version TEXT,
  created_at TEXT NOT NULL,
  last_seen_at TEXT NOT NULL,
  is_active INTEGER DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_push_tokens_active ON push_tokens(is_active);

-- Tracking of sent notifications to guarantee idempotent article broadcasts
CREATE TABLE IF NOT EXISTS sent_notifications (
  article_id TEXT NOT NULL PRIMARY KEY,
  headline TEXT,
  sent_at TEXT NOT NULL,
  recipient_count INTEGER DEFAULT 0
);

-- Tracking of Google Play App install clicks & referrals
CREATE TABLE IF NOT EXISTS install_clicks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  visitor_id TEXT,
  source TEXT NOT NULL,
  is_repeat INTEGER DEFAULT 0,
  country TEXT,
  referer TEXT,
  user_agent TEXT,
  clicked_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_install_clicks_date ON install_clicks(clicked_at);
CREATE INDEX IF NOT EXISTS idx_install_clicks_visitor ON install_clicks(visitor_id);

