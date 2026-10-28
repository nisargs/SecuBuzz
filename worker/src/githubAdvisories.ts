export const GITHUB_ADVISORIES = [
  {
    "cve": "CVE-2026-118255",
    "slug": "cve-2026-118255",
    "vendor": "npm",
    "product": "@highcharts/dashboards",
    "name": "Highcharts Grid: `javascript:` URL in credits.href runs script on click",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 8.4,
    "severity": "High",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "An attacker who controls the Grid configuration can set credits.href to a javascript: URL. The value is not validated against an allowed-scheme list before it is applied to the credits link, so activating that link runs attacker-supplied script in the origin of the page hosting the Grid.",
    "requiredAction": "Upgrade @highcharts/dashboards to version 4.0.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-6hgp-fmhr-mrg4"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118255"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118254",
    "slug": "cve-2026-118254",
    "vendor": "npm",
    "product": "@highcharts/grid-lite",
    "name": "Highcharts Grid parses pagination language options as HTML",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 8.6,
    "severity": "High",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "The pagination language strings are written into the DOM as markup rather than as text. An attacker who controls those language options can supply elements carrying event handlers, and those handlers execute in the origin of the page hosting the Grid when the pagination controls render.",
    "requiredAction": "Upgrade @highcharts/grid-lite to version 3.2.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-r5wg-q8fc-p6w2"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118254"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118253",
    "slug": "cve-2026-118253",
    "vendor": "npm",
    "product": "@highcharts/dashboards",
    "name": "Highcharts Dashboards parses fullscreen labels as HTML",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 8.4,
    "severity": "High",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "The edit mode fullscreen labels are parsed as HTML when the corresponding control is rendered. An attacker who controls the Dashboards language options can supply markup carrying event handlers, which then execute in the origin of the page hosting the dashboard. Exploitation requires that untrusted data reach the Dashboards language configuration and that the affected control be rendered.",
    "requiredAction": "Upgrade @highcharts/dashboards to version 4.2.3 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-58g7-7f52-h92c"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118253"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118252",
    "slug": "cve-2026-118252",
    "vendor": "npm",
    "product": "@highcharts/dashboards",
    "name": "Highcharts Dashboards parses sidebar component labels as HTML",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 8.4,
    "severity": "High",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "The component language strings shown in the edit mode sidebar are parsed as HTML rather than inserted as text. An attacker who controls those language options can supply markup carrying event handlers, which execute in the origin of the page hosting the dashboard once the sidebar renders the affected labels.",
    "requiredAction": "Upgrade @highcharts/dashboards to version 4.2.3 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-rcqf-f6h2-ccg9"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118252"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118251",
    "slug": "cve-2026-118251",
    "vendor": "npm",
    "product": "highcharts",
    "name": "Highcharts: `javascript:` URL in credits.href runs script on click",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 8.4,
    "severity": "High",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "A credits.href value beginning with javascript: is assigned to the window location when the credits label is clicked, without being checked against an allowed-scheme list. An attacker who controls the chart configuration can therefore run script in the origin of the page hosting the chart.",
    "requiredAction": "Upgrade highcharts to version 11.4.9 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-5793-x2q3-c3q7"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118251"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118250",
    "slug": "cve-2026-118250",
    "vendor": "npm",
    "product": "highcharts",
    "name": "Highcharts: dotted series.keys paths write to Object.prototype",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 7.2,
    "severity": "High",
    "cwe": "CWE-1321",
    "ransomware": false,
    "description": "A dot-separated key path taken from series.keys is followed without filtering the individual segments. An attacker who controls series.keys and the matching point data can use a path such as proto.polluted to set arbitrary properties on Object.prototype. The resulting properties are visible to all JavaScript running in the page, not only to the chart.",
    "requiredAction": "Upgrade highcharts to version 12.6.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-rmqc-xvr3-v46c"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118250"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118249",
    "slug": "cve-2026-118249",
    "vendor": "npm",
    "product": "highcharts",
    "name": "Highcharts: series column construction writes to Object.prototype",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 7.1,
    "severity": "High",
    "cwe": "CWE-1321",
    "ransomware": false,
    "description": "When series columns are built from point objects, the point option keys are used directly as data column ids, so the write that populates a column reaches Object.prototype and the Object constructor.",
    "requiredAction": "Upgrade highcharts to version 13.1.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-gfvx-2c2g-38wq"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118249"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118246",
    "slug": "cve-2026-118246",
    "vendor": "npm",
    "product": "highcharts",
    "name": "Highcharts Core: `breadcrumbs.style` keys become SVG event-handler attributes",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 8.4,
    "severity": "High",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "The breadcrumbs style option is applied to the breadcrumb button as SVG attributes rather than as CSS, and the attribute names are not filtered. An attacker who controls the chart configuration can supply keys under breadcrumbs.style that name event handlers, and those keys become live handlers on the breadcrumb button, so the attacker's script runs in the origin of the page hosting the chart.",
    "requiredAction": "Upgrade highcharts to version 11.4.9 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-35rr-xwfh-x789"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118246"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116797",
    "slug": "cve-2026-116797",
    "vendor": "npm",
    "product": "@highcharts/grid-pro",
    "name": "Highcharts Grid Pro: cell-renderer `attributes` map written with raw `setAttribute`",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 8.5,
    "severity": "High",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "The input-type cell renderers copy every entry of the renderer's attributes option onto the input or select element they create, without checking the attribute names.",
    "requiredAction": "Upgrade @highcharts/grid-pro to version 3.2.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-5ghw-9mgr-jvx2"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116797"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118242",
    "slug": "cve-2026-118242",
    "vendor": "npm",
    "product": "@highcharts/grid-lite",
    "name": "Highcharts Grid: custom icon definition objects written with raw `setAttribute` on `<path>`",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 8.5,
    "severity": "High",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "A custom icon supplied under rendering.icons as an icon definition object is built by creating an SVG path for each of its child entries and setting every key of that entry as an attribute of the path, without filtering the attribute names; only the string form of the option is passed through the markup allow-list.",
    "requiredAction": "Upgrade @highcharts/grid-lite to version 3.2.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-6g3c-p4fg-xv47"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118242"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118245",
    "slug": "cve-2026-118245",
    "vendor": "npm",
    "product": "@highcharts/dashboards",
    "name": "Highcharts Dashboards: `chartConstructor` is an unchecked lookup into the Highcharts namespace",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 8.6,
    "severity": "High",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "The Highcharts component uses the value of chartConstructor to select a function from the Highcharts namespace and invokes it with the component's container element and its chartOptions, without checking the value against the supported chart constructors.",
    "requiredAction": "Upgrade @highcharts/dashboards to version 4.2.2 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-grj7-r4jv-pw9j"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118245"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118247",
    "slug": "cve-2026-118247",
    "vendor": "npm",
    "product": "@highcharts/dashboards",
    "name": "Highcharts Dashboards / Grid Pro: `DataTable.setCell` and column writers treat `__proto__` as an existing column.",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 6.9,
    "severity": "Medium",
    "cwe": "CWE-1321",
    "ransomware": false,
    "description": "When a single cell value is written to a data table, the column id is used as a key on the table's column collection without filtering, so a column id of proto resolves to Object.prototype, is taken for an existing column, and the write lands at the row index on Object.prototype; a column id of constructor writes onto the Object constructor in the same way.",
    "requiredAction": "Upgrade @highcharts/dashboards to version 4.2.2 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-c75x-9x9h-28rm"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118247"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118243",
    "slug": "cve-2026-118243",
    "vendor": "npm",
    "product": "@highcharts/dashboards",
    "name": "Highcharts Dashboards: `__proto__` data table id writes sync listeners to `Object.prototype`",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-1321",
    "ransomware": false,
    "description": "The data cursor keeps its listener and state bookkeeping in plain objects keyed by data table id, so a table id of proto supplied in the dataPool connector configuration resolves to Object.prototype when a sync registers its listeners, and the registration creates a property on Object.prototype named after the sync state and holding the internal listener array.",
    "requiredAction": "Upgrade @highcharts/dashboards to version 4.2.2 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-jqgh-w3cc-7jqw"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118243"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118244",
    "slug": "cve-2026-118244",
    "vendor": "npm",
    "product": "highcharts",
    "name": "Highcharts Core: HTML text parsing falls back to unfiltered `innerHTML` during printing",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 7.2,
    "severity": "High",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "When the HTML text parser cannot obtain a document from DOMParser because the call throws, it falls back to assigning the raw markup to the innerHTML of an element created in the hosting document, and the allow-list is applied only to the resulting DOM afterwards.",
    "requiredAction": "Upgrade highcharts to version 12.6.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-65hg-cf3f-5m39"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118244"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116796",
    "slug": "cve-2026-116796",
    "vendor": "npm",
    "product": "highcharts",
    "name": "Highcharts Core: `javascript:` URL in an `xlink:href` attribute survives text filtering and reaches exported charts",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 7.2,
    "severity": "High",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "The filter applied to markup in text options checks href, src and a few similar attributes against an allowed-scheme list, but accepts xlink:href without that check, so an SVG anchor whose xlink:href is a javascript: URL passes the filter, whether or not the option is rendered with useHTML.",
    "requiredAction": "Upgrade highcharts to version 11.4.9 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-mw4f-gj5x-6xr4"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116796"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118650",
    "slug": "cve-2026-118650",
    "vendor": "Go",
    "product": "echo (v5) · labstack",
    "name": "Echo's middleware.Static: `%2F`-encoded path bypasses route/group middleware guarding a statically-served path",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-177",
    "ransomware": false,
    "description": "When middleware.Static is mounted globally (e.Use(middleware.Static(...))) and an application relies on a route- or group-level middleware guard to restrict a path that also falls under the served static root, a %2F-encoded request bypasses that guard while the file is still served.",
    "requiredAction": "Upgrade echo (v5) · labstack to version 5.4.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-375p-5qhx-8wq4"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118650"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118652",
    "slug": "cve-2026-118652",
    "vendor": "Go",
    "product": "echo (v5) · labstack",
    "name": "Echo vulnerable to Reflected Cross-Site Scripting (XSS) via unsanitized JSONP callback in Context.JSONP / Context.JSONPBlob",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 6.1,
    "severity": "Medium",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "The Context.JSONP, Context.JSONPBlob, and internal jsonPBlob helper in context.go directly concatenate the caller-supplied callback parameter into a JavaScript response without any validation, escaping, or allow-listing. This creates a high-impact reflected XSS that can be triggered by any route passing attacker-controlled data (query string, form, header, path param, etc.) into the callback.",
    "requiredAction": "Upgrade echo (v5) · labstack to version 5.4.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-h9g5-28mm-hx3g"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118652"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118653",
    "slug": "cve-2026-118653",
    "vendor": "Go",
    "product": "echo (v5) · labstack",
    "name": "Echo has Rate Limiter Bypass via Spoofed X-Forwarded-For Header in Default Configuration",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-290",
    "ransomware": false,
    "description": "When echo.New() is used without explicitly setting Echo#IPExtractor, the RealIP() method falls back to reading the client-supplied X-Forwarded-For (or X-Real-IP) header without any proxy-origin validation.",
    "requiredAction": "Upgrade echo (v5) · labstack to version 5.1.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-246p-cpwv-v3jq"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118653"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118266",
    "slug": "cve-2026-118266",
    "vendor": "Go",
    "product": "echo (v5) · labstack",
    "name": "Echo has CSRF Protection Bypass via MethodOverride Rewriting POST to Safe Method",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-352",
    "ransomware": false,
    "description": "The MethodOverride middleware accepts any non-empty string as the override target method — including safe methods (GET, HEAD, OPTIONS, TRACE) — when rewriting a POST request. When MethodOverride is registered before CSRF in the post-routing middleware chain (e.Use()), it rewrites the request method to a safe method before CSRF evaluates it.",
    "requiredAction": "Upgrade echo (v5) · labstack to version 5.4.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-r7w9-592q-9vg4"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118266"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-118651",
    "slug": "cve-2026-118651",
    "vendor": "Go",
    "product": "echo (v5) · labstack",
    "name": "Echo: Reverse Proxy Forwards Attacker-Supplied X-Real-IP to Upstream by Default",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-346",
    "ransomware": false,
    "description": "The Echo proxy middleware (middleware/proxy.go) preserves an incoming X-Real-IP header verbatim and forwards it to the upstream service when Echo#IPExtractor is not configured — which is the default.",
    "requiredAction": "Upgrade echo (v5) · labstack to version 5.4.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-99jh-6h7p-pp36"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118651"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "GHSA-4mfg-r38w-w8fg",
    "slug": "ghsa-4mfg-r38w-w8fg",
    "vendor": "npm",
    "product": "mcp-sanitizer",
    "name": "mcp-sanitizer: URL sanitizer allows localhost/IPv6 loopback SSRF bypass via explicit port or bracketed IPv6",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 8.2,
    "severity": "High",
    "cwe": "CWE-918",
    "ransomware": false,
    "description": "mcp-sanitizer v1.3.3 fails to block Server-Side Request Forgery (SSRF) targets when a localhost URL includes an explicit port (e.g., or when an IPv6 loopback/link-local address is expressed in bracketed notation (e.g., Because the library is explicitly designed to gate MCP tool parameters such as web_fetch and web_scraper` before outbound HTTP requests are made, a bypass here directly enables an...",
    "requiredAction": "Upgrade mcp-sanitizer to version 1.4.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-4mfg-r38w-w8fg"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "GHSA-7w82-6f9j-v9jp",
    "slug": "ghsa-7w82-6f9j-v9jp",
    "vendor": "npm",
    "product": "mcp-sanitizer",
    "name": "mcp-sanitizer: File Path Sanitizer Permits Arbitrary User-Home Absolute Paths",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-22",
    "ransomware": false,
    "description": "mcp-sanitizer v1.3.3 explicitly whitelists /home/ and /Users/ as allowed absolute path prefixes in its file path validation logic (src/utils/validation-utils.js:188-196). As a result, paths such as /home/alice/.ssh/id_rsa and /home/alice/.aws/credentials pass through sanitizer.sanitize() with blocked=false, even though they point to highly sensitive files outside any configured safe root.",
    "requiredAction": "Upgrade mcp-sanitizer to version 1.4.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-7w82-6f9j-v9jp"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-58273",
    "slug": "cve-2026-58273",
    "vendor": "Pip",
    "product": "rucio",
    "name": "rucio has an Authorization Bypass on REST API endpoint for signing URLs",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE-639",
    "ransomware": false,
    "description": "The /credentials/signurl endpoint decides authorization from the client-supplied X-Rucio-Account HTTP header instead of the authenticated token's account.",
    "requiredAction": "Upgrade rucio to version 35.9.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-5j9r-fx4x-rpvg"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-58273"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "GHSA-473q-m89c-ghf8",
    "slug": "ghsa-473q-m89c-ghf8",
    "vendor": ".NET (NuGet)",
    "product": "MySqlConnector",
    "name": "MySqlConnector: Account password disclosed to a man-in-the-middle in zero-configuration TLS mode (clear-text password sent before certificate is verified)",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 6.9,
    "severity": "Medium",
    "cwe": "CWE-200",
    "ransomware": false,
    "description": "With SslMode set to VerifyCA or VerifyFull with no configured CA certificate, an unvalidated TLS connection is treated as secure and a clear-text password can be sent before the certificate is checked. This can occur when relying on the password to validate a self-signed cert, e.g., MariaDB's zero-configuration TLS.",
    "requiredAction": "Upgrade MySqlConnector to version 2.6.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-473q-m89c-ghf8"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-55458",
    "slug": "cve-2026-55458",
    "vendor": "Go",
    "product": "caddy (v2) · caddyserver",
    "name": "Caddy has an RFC 7230 §6.1 compliance issue / Hop-by-hop headers that leak through",
    "dateAdded": "2026-10-28",
    "dueDate": "",
    "cvss": 2.9,
    "severity": "Low",
    "cwe": "CWE-444",
    "ransomware": false,
    "description": "Caddy's reverse proxy fails to strip RFC 7230 hop-by-hop headers from upstream responses when handling WebSocket upgrades (HTTP 101 Switching Protocols). Headers including Alt-Svc, Keep-Alive, Proxy-Authenticate, Transfer-Encoding, or Trailer, which Caddy actually correctly strips for normal HTTP responses, pass through unfiltered to the client during protocol upgrades.",
    "requiredAction": "Upgrade caddy (v2) · caddyserver to version 2.11.5 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-8qx7-j2v2-x6q5"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-55458"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116690",
    "slug": "cve-2026-116690",
    "vendor": "Pip",
    "product": "mlflow",
    "name": "MLflow vulnerable to arbitrary file read on unauthenticated servers via prompt model version source",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-22",
    "ransomware": false,
    "description": "On MLflow tracking servers running without authentication, which is the default for mlflow server, a remote attacker can read arbitrary files from the server’s filesystem by creating a model version tagged as a prompt whose source is a schemeless local path.",
    "requiredAction": "Upgrade mlflow to version 3.17.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-m65p-9j7q-6w33"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116690"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116691",
    "slug": "cve-2026-116691",
    "vendor": "Pip",
    "product": "mlflow",
    "name": "MLflow CrewAI autologging records LLM provider API keys in logged trace spans",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 6.5,
    "severity": "Medium",
    "cwe": "CWE-200",
    "ransomware": false,
    "description": "mlflow.crewai.autolog() leaks CrewAI LLM provider API keys into MLflow trace telemetry. When a CrewAI Agent is instrumented with MLflow autologging, MLflow serializes the agent's dict and converts its fields to strings. The llm field contains the CrewAI LLM object, whose string representation includes its api_key in plaintext.",
    "requiredAction": "Upgrade mlflow to version 3.17.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-j7qq-vr8c-xvw3"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116691"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116692",
    "slug": "cve-2026-116692",
    "vendor": "Pip",
    "product": "mlflow",
    "name": "MLflow vulnerable to remote code execution on unauthenticated servers via third-party scorer deserialization importing caller-placed artifact modules",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 9.8,
    "severity": "Critical",
    "cwe": "CWE-94",
    "ransomware": false,
    "description": "MLflow 3.12.0 introduced registration and deserialization support for third-party scorers in OSS MLflow. During scorer deserialization, the server accepts a request-controlled Python module path beneath one of four allowed package prefixes, imports that module, obtains a request-controlled class, and instantiates it synchronously.",
    "requiredAction": "Upgrade mlflow to version 3.17.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-26p8-2jq9-3vq9"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116692"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116693",
    "slug": "cve-2026-116693",
    "vendor": "npm",
    "product": "dd-trace",
    "name": "dd-trace: ReDOS in URL query string obfuscation",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 8.7,
    "severity": "High",
    "cwe": "CWE-1333",
    "ransomware": false,
    "description": "A regular expression used to obfuscate URL query strings can consume excessive CPU when processing certain attacker-controlled input. This can stall request processing and cause denial of service in applications using affected HTTP tracing integrations.",
    "requiredAction": "Upgrade dd-trace to version 5.131.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-x94g-w73q-hpcw"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116693"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116675",
    "slug": "cve-2026-116675",
    "vendor": "npm",
    "product": "tinymce",
    "name": "TinyMCE Cross-Site Scripting (XSS) vulnerability using media plugin `data-mce-object` serialization",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 8.5,
    "severity": "High",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "Stored XSS vulnerability in the media plugin. Attackers can inject malicious scripts via elements crafted through the data-mce-object attribute, which are created and executed before sanitization. Impacts users of TinyMCE with the media plugin enabled.",
    "requiredAction": "Upgrade tinymce to version 8.9.3 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-mf2p-h6hf-fcwm"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116675"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116684",
    "slug": "cve-2026-116684",
    "vendor": "Pip",
    "product": "mcp",
    "name": "Model Context Protocol Python SDK: Server bearer-token authentication accepts tokens issued for a different resource server",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 6.8,
    "severity": "Medium",
    "cwe": "CWE-863",
    "ransomware": false,
    "description": "In affected versions, the SDK's server-side bearer authentication had no way to check that a token was issued for your server (its audience). Where one authorization server issues tokens for several services, a valid token for another service was also accepted by your MCP server.",
    "requiredAction": "Upgrade mcp to version 2.2.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-w4fh-qvv9-3v23"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116684"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116694",
    "slug": "cve-2026-116694",
    "vendor": "Pip",
    "product": "opentelemetry-propagator-jaeger",
    "name": "OpenTelemetry Python: Unbounded memory allocation in Jaeger baggage propagation",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 6.3,
    "severity": "Medium",
    "cwe": "CWE-770",
    "ransomware": false,
    "description": "JaegerPropagator.extract() in opentelemetry-propagator-jaeger did not enforce limits when extracting inbound uberctx-* baggage headers. Attacker-controlled baggage could cause unnecessary CPU work and short-lived heap allocations while processing more data than the propagator should accept.",
    "requiredAction": "Upgrade opentelemetry-propagator-jaeger to version 1.45.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-f5m9-jfrj-jjj7"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116694"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116685",
    "slug": "cve-2026-116685",
    "vendor": "Pip",
    "product": "mcp",
    "name": "Model Context Protocol Python SDK: HTTP client transports followed cross-origin redirects carrying custom headers and bodies",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 5.9,
    "severity": "Medium",
    "cwe": "CWE-200",
    "ransomware": false,
    "description": "In affected versions, the SDK's Streamable HTTP and SSE client transports followed HTTP redirects to any host. If the configured MCP endpoint answered with a redirect to a different origin: - custom headers set on the client (for example an X-API-Key credential) were sent to that origin, and - on a 307 or 308 redirect the request body was re-sent there too.",
    "requiredAction": "Upgrade mcp to version 2.2.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-5h93-6whr-6q8j"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116685"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116686",
    "slug": "cve-2026-116686",
    "vendor": "Pip",
    "product": "mcp",
    "name": "Model Context Protocol Python SDK: Client fetched server-chosen $ref URLs while validating tool results against output schemas",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 6.5,
    "severity": "Medium",
    "cwe": "CWE-918",
    "ransomware": false,
    "description": "In affected versions, when a connected MCP server declared an outputSchema for a tool, the SDK's client validated each call_tool result with jsonschema's default resolver, which fetches any $ref it cannot resolve locally by opening the URL.",
    "requiredAction": "Upgrade mcp to version 2.2.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-rwrf-2pqf-9j8j"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116686"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116687",
    "slug": "cve-2026-116687",
    "vendor": "npm",
    "product": "ckeditor5",
    "name": "CKEditor: Cross-site scripting (XSS) in the engine package",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 3.1,
    "severity": "Low",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "A Cross-Site Scripting (XSS) vulnerability has been discovered in the CKEditor 5 engine. This vulnerability could be triggered by inserting specially crafted markup under a specific General HTML Support configuration that allows inserting objects, leading to unauthorized JavaScript code execution in a browser context isolated from the origin of the application embedding the editor.",
    "requiredAction": "Upgrade ckeditor5 to version 47.7.4 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-v6mg-96c6-gmpq"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116687"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116688",
    "slug": "cve-2026-116688",
    "vendor": "npm",
    "product": "ckeditor5",
    "name": "CKEditor: Cross-site scripting (XSS) in the engine package",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 8.1,
    "severity": "High",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "A Cross-Site Scripting (XSS) vulnerability has been discovered in the CKEditor 5 engine. This vulnerability is caused by a prototype pollution issue in the es-toolkit library used in the CKEditor 5 codebase. This vulnerability could lead to unauthorized JavaScript code execution when the editor processes incoming style attribute values.",
    "requiredAction": "Upgrade ckeditor5 to version 47.7.4 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-rh54-vffm-5fvp"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116688"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116679",
    "slug": "cve-2026-116679",
    "vendor": "Go",
    "product": "neko (server) · m1k1o",
    "name": "Neko: Authorization bypass in legacy WebRTC input handling",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 5.4,
    "severity": "Medium",
    "cwe": "CWE-863",
    "ransomware": false,
    "description": "When legacy mode is enabled and session.implicit_hosting is enabled, the legacy WebRTC data channel incorrectly authorizes input events due to a logic error in LegacyIsHost().",
    "requiredAction": "Upgrade neko (server) · m1k1o to version 0.0.0-20260805142851-395ca1a6f62b or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-5cp7-fp4j-wwcv"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116679"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116676",
    "slug": "cve-2026-116676",
    "vendor": "Go",
    "product": "atlantis · runatlantis",
    "name": "Atlantis: OS command injection through PR-controlled Terraform workspace enables RCE during plan",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE-78",
    "ransomware": false,
    "description": "Atlantis passes the Terraform workspace value from a pull request's atlantis.yaml into a shell command without quoting or escaping it. A contributor whose pull request is eligible for an Atlantis plan can include shell metacharacters in the workspace name and execute arbitrary commands as the Atlantis service account.",
    "requiredAction": "Upgrade atlantis · runatlantis to version 0.47.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-rjh2-4xgw-p2hj"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116676"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116682",
    "slug": "cve-2026-116682",
    "vendor": "Go",
    "product": "filebrowser (backend) · gtsteffaniak",
    "name": "FileBrowser: Symlink following escapes user scope allowing arbitrary file read outside the served directory",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 8.6,
    "severity": "High",
    "cwe": "CWE-22",
    "ransomware": false,
    "description": "File read paths resolve symbolic links with filepath.EvalSymlinks and then operate on the resolved target without re-checking that the target still lies inside the user's source/scope.",
    "requiredAction": "Upgrade filebrowser (backend) · gtsteffaniak to version 0.0.0-20260814233832-4126edeb07a0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-mgqf-5mf5-prfj"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116682"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-109829",
    "slug": "cve-2026-109829",
    "vendor": "npm",
    "product": "undici",
    "name": "undici vulnerable to cache poisoning and cross-user disclosure via cross-origin redirects",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 7.4,
    "severity": "High",
    "cwe": "CWE-346",
    "ransomware": false,
    "description": "When an originless Agent composes the redirect and cache interceptors as compose(redirect(), cache()) with a shared cache (type: 'shared'), the cache builds its key from the original request URL before the redirect handler changes the origin. The response produced after a redirect is then stored under the original key, even when the redirect crossed to a different origin.",
    "requiredAction": "Upgrade undici to version 7.30.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-4w7w-5xrc-9h26"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-109829"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-109383",
    "slug": "cve-2026-109383",
    "vendor": "npm",
    "product": "undici",
    "name": "undici vulnerable to TLS certificate validation bypass via dropped tls options in Agent",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 7.4,
    "severity": "High",
    "cwe": "CWE-295",
    "ransomware": false,
    "description": "undici's Agent passes its constructor options through a JSON-based deep clone (JSON.parse(JSON.stringify(...))) before forwarding them to each per-origin Pool. JSON cannot represent functions, so a caller-supplied tls option containing a checkServerIdentity callback is silently dropped before it reaches the TLS layer.",
    "requiredAction": "Upgrade undici to version 6.29.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-2m5v-pch6-74hx"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-109383"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-87018",
    "slug": "cve-2026-87018",
    "vendor": "npm",
    "product": "undici",
    "name": "undici vulnerable to Denial of Service via TLS 1.2 certificate-changing renegotiation",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-248",
    "ransomware": false,
    "description": "undici crashes the client process when a TLS 1.2 server renegotiates after the connection is established and presents a different, CA-trusted certificate whose hostname does not match the requested host. Node.js re-runs hostname verification on the renegotiated handshake and destroys the socket with ERR_TLS_CERT_ALTNAME_INVALID.",
    "requiredAction": "Upgrade undici to version 6.29.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-qrxm-fqhp-jwvm"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-87018"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-109932",
    "slug": "cve-2026-109932",
    "vendor": "npm",
    "product": "undici",
    "name": "undici WebSocket client vulnerable to Denial of Service via unbounded automatic PONG buffering",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 5.9,
    "severity": "Medium",
    "cwe": "CWE-400",
    "ransomware": false,
    "description": "undici's WebSocket client (including Node.js's bundled globalThis.WebSocket) can be driven to exhaust process memory by a malicious or compromised WebSocket server.",
    "requiredAction": "Upgrade undici to version 6.29.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-9fm3-97px-rjf6"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-109932"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-87029",
    "slug": "cve-2026-87029",
    "vendor": "npm",
    "product": "undici",
    "name": "undici vulnerable to Denial of Service via unhandled exception in the decompress interceptor",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 5.9,
    "severity": "Medium",
    "cwe": "CWE-248",
    "ransomware": false,
    "description": "undici's decompress interceptor forwards decompressed response data to the downstream handler from zlib stream event callbacks without catching exceptions those callbacks may throw. undici's engine converts a synchronous throw from a downstream handler into a per-request failure, but that protection is not in place when the throw happens asynchronously from a zlib callback.",
    "requiredAction": "Upgrade undici to version 7.30.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-55wc-3pg8-jfw6"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-87029"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "GHSA-f897-62hf-6gxq",
    "slug": "ghsa-f897-62hf-6gxq",
    "vendor": "npm",
    "product": "@modelcontextprotocol/sdk",
    "name": "MCP TypeScript SDK: HTTP server transports and handlers did not limit request body size or JSON-RPC batch length",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-770",
    "ransomware": false,
    "description": "In affected versions, MCP servers reachable over HTTP put no limit on the size of a POST body or on the number of messages in a JSON-RPC batch. Large requests could exhaust the server's memory, and one long batch could block it from serving anyone else. No credentials were needed, unless your application authenticates requests before they reach the SDK.",
    "requiredAction": "Upgrade @modelcontextprotocol/sdk to version 1.30.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-f897-62hf-6gxq"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-109413",
    "slug": "cve-2026-109413",
    "vendor": "Composer",
    "product": "symfony/symfony",
    "name": "Symfony: Unbounded Recursion in the YAML Inline Lexer Lets a Single Document Crash the Process",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 8.7,
    "severity": "High",
    "cwe": "CWE-674",
    "ransomware": false,
    "description": "Yaml\\Parser::lexInlineStructure() recursed through lexInlineMapping() and lexInlineSequence() for every { and [ of an inline collection, without entering the nesting level that the rest of the parser bounds with maxNestingLevel.",
    "requiredAction": "Upgrade symfony/symfony to version 5.4.54 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-2v3c-qxhr-7vpv"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-109413"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-108082",
    "slug": "cve-2026-108082",
    "vendor": "Composer",
    "product": "symfony/http-foundation",
    "name": "Symfony: ReDoS in HeaderUtils::split() Reachable Through the Cache-Control Request Header",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 8.7,
    "severity": "High",
    "cwe": "CWE-1333",
    "ransomware": false,
    "description": "HeaderUtils::split() parsed header values with a pattern whose token alternative also matched whitespace, followed by a (?<!\\s) lookbehind. A run of whitespace placed before a separator could be divided among the iterations of the enclosing repetition in exponentially many ways, and the engine tried all of them before settling.",
    "requiredAction": "Upgrade symfony/http-foundation to version 6.4.46 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-r925-mgvr-h9cc"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-108082"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116587",
    "slug": "cve-2026-116587",
    "vendor": "Go",
    "product": "go-jose (v4) · go-jose",
    "name": "Go JOSE: DoS when parsing JWKs that contain RSA keys",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-407",
    "ransomware": false,
    "description": "A crafted RSA key inside a JWK can cause operations that parse JWKs to consume excess CPU.",
    "requiredAction": "Upgrade go-jose (v4) · go-jose to version 4.1.6 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-mgcc-cww5-fp2q"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116587"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "CVE-2026-116683",
    "slug": "cve-2026-116683",
    "vendor": "Go",
    "product": "terraform-provider-ctfd · ctfer-io",
    "name": "CTFer.io's CTFd Terraform Provider allows a local or remote attacker to read team passwords in state as non sensitive values",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 7.1,
    "severity": "High",
    "cwe": "CWE-522",
    "ransomware": false,
    "description": "CTFer.io's CTFd Terraform Provider stores ctfd_team.password as non-sensitive values (CWE-522). A local or remote attacker, who can have access to the Terraform state, can read team passwords without the need for the state password for decryption. Patched in v2.8.2.",
    "requiredAction": "No patched release available yet. Check advisory mitigations and workarounds.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-vg84-c5mg-76xh"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116683"
      }
    ],
    "source": "GITHUB"
  },
  {
    "cve": "GHSA-wf6j-7hvr-gr93",
    "slug": "ghsa-wf6j-7hvr-gr93",
    "vendor": "Pip",
    "product": "hydra-core",
    "name": "Hydra legacy target blacklist permits unsafe PyYAML loading",
    "dateAdded": "2026-10-27",
    "dueDate": "",
    "cvss": 7.8,
    "severity": "High",
    "cwe": "CWE-184",
    "ransomware": false,
    "description": "Hydra's legacy target blacklist omits PyYAML's unsafe loading surfaces. If an application passes attacker-controlled targets and arguments to instantiate(), a target such as yaml.unsafe_load can execute Python code through a config-controlled YAML stream containing Python object-construction tags.",
    "requiredAction": "Upgrade hydra-core to version 1.3.8 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-wf6j-7hvr-gr93"
      }
    ],
    "source": "GITHUB"
  }
];
