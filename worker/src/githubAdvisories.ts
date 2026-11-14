export const GITHUB_ADVISORIES = [
  {
    "cve": "GHSA-gpwc-27cw-rh9r",
    "slug": "ghsa-gpwc-27cw-rh9r",
    "vendor": "Pip",
    "product": "nltk",
    "name": "NLTK: Quadratic CPU exhaustion in LegalitySyllableTokenizer.tokenize via unguarded onset reversal loop",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-400",
    "ransomware": false,
    "description": "LegalitySyllableTokenizer.tokenize in the NLTK tokenizer package contains an unguarded O(n^2) processing loop. When the method is called on a single token that consists of a long run of vowels (for example \"a\" * n), it consumes CPU time proportional to the square of the token length.",
    "requiredAction": "Upgrade nltk to version 3.10.4 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-gpwc-27cw-rh9r"
      }
    ],
    "source": "GITHUB",
    "cveID": "GHSA-gpwc-27cw-rh9r"
  },
  {
    "cve": "CVE-2026-126300",
    "slug": "cve-2026-126300",
    "vendor": "Pip",
    "product": "nltk",
    "name": "NLTK: Quadratic CPU exhaustion in TreebankWordTokenizer.span_tokenize via list.pop(0) in quote-restore loop",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-400",
    "ransomware": false,
    "description": "TreebankWordTokenizer.span_tokenize in the NLTK tokenizer package contains an unguarded O(n^2) processing loop in its quote-restoration step.",
    "requiredAction": "Upgrade nltk to version 3.10.4 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-ffr9-mgrr-wcvr"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126300"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126300"
  },
  {
    "cve": "CVE-2026-126303",
    "slug": "cve-2026-126303",
    "vendor": "Pip",
    "product": "nltk",
    "name": "NLTK: Unbounded CPU consumption in SteppingRecursiveDescentParser.parse() with ambiguous or self-embedding grammars",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-400",
    "ransomware": false,
    "description": "nltk.parse.recursivedescent.SteppingRecursiveDescentParser.parse() performs an unbounded top-down search over ambiguous or self-embedding context-free grammars with no wall-clock or step limit. An actor who can influence the grammar and supply a short input to a caller that uses this parser can force a single parse() call to pin a CPU core indefinitely, producing a denial of service.",
    "requiredAction": "Upgrade nltk to version 3.10.4 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-8fx7-8jr8-84rv"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126303"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126303"
  },
  {
    "cve": "CVE-2026-126304",
    "slug": "cve-2026-126304",
    "vendor": "Pip",
    "product": "nltk",
    "name": "NLTK: Symlink escape in YCOECorpusReader lets a psd/pos directory symlink read files outside the corpus root within the data sandbox",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-59",
    "ransomware": false,
    "description": "YCOECorpusReader builds two nested corpus sub-readers whose roots are derived from self.root.join(\"psd\") and self.root.join(\"pos\") (nltk/corpus/reader/ycoe.py).",
    "requiredAction": "Upgrade nltk to version 3.10.4 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-qg35-44qx-7vrr"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126304"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126304"
  },
  {
    "cve": "CVE-2026-128117",
    "slug": "cve-2026-128117",
    "vendor": "npm",
    "product": "@sveltejs/kit",
    "name": "SvelteKit: adapter-node crashes with an unhandled URIError when `reroute` rewrites malformed pathnames",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 5.9,
    "severity": "Medium",
    "cwe": "CWE-248",
    "ransomware": false,
    "description": "When reroute turned an invalid percent-encoded path into a valid path, it could potentially trigger a comparison that would crash the server.",
    "requiredAction": "Upgrade @sveltejs/kit to version 3.1.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-mw6w-2fmv-pvw3"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128117"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128117"
  },
  {
    "cve": "CVE-2026-128121",
    "slug": "cve-2026-128121",
    "vendor": "npm",
    "product": "@sveltejs/adapter-vercel",
    "name": "SvelteKit: Prerendered paths are interpreted as regular expressions in Vercel route config generated by @sveltejs/adapter-vercel and @sveltejs/adapter-static",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 5.9,
    "severity": "Medium",
    "cwe": "CWE-116",
    "ransomware": false,
    "description": "If an attacker could influence a link that was crawled during the prerender phase, that link could later be interpreted as a regex in the Vercel routing configuration.",
    "requiredAction": "Upgrade @sveltejs/adapter-vercel to version 6.3.5 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-jf9x-2fg2-hx4w"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128121"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128121"
  },
  {
    "cve": "CVE-2026-128122",
    "slug": "cve-2026-128122",
    "vendor": "npm",
    "product": "@sveltejs/adapter-cloudflare",
    "name": "SvelteKit: Prerendered redirect paths can inject arbitrary rules into the `_redirects` file generated by `@sveltejs/adapter-cloudflare`",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 5.9,
    "severity": "Medium",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "If an attacker can influence the links crawled during prerendering, they can influence the redirects entries that are added to the Cloudflare platform redirects generated during the adapt phase of the build.",
    "requiredAction": "Upgrade @sveltejs/adapter-cloudflare to version 7.2.10 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-5wg4-q3ww-283h"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128122"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128122"
  },
  {
    "cve": "CVE-2026-128123",
    "slug": "cve-2026-128123",
    "vendor": "npm",
    "product": "@sveltejs/adapter-node",
    "name": "SvelteKit: `@sveltejs/adapter-node` crashes when proxying certain requests via `fetch`",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 5.9,
    "severity": "Medium",
    "cwe": "CWE-248",
    "ransomware": false,
    "description": "In affected versions, @sveltejs/adapter-node can attempt to add a header to an immutable request in a context that causes the server to crash, denying service to any other requests routed to that server.",
    "requiredAction": "Upgrade @sveltejs/adapter-node to version 5.5.8 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-rqw3-x7hx-mm3p"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128123"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128123"
  },
  {
    "cve": "CVE-2026-126347",
    "slug": "cve-2026-126347",
    "vendor": "Pip",
    "product": "tornado",
    "name": "Tornado: Open redirect via triple-slash redirect paths",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 3.1,
    "severity": "Low",
    "cwe": "CWE-601",
    "ransomware": false,
    "description": "Due to differences in the way browsers and Python's urllib parse urls, browsers treat a string starting with three or more slashes as a protocol-level redirect, while urllib does not. This means that the 6.6.0 fix for the RedirectHandler open redirect (CVE-2026-116578, commit cc75ab0e) is incomplete.",
    "requiredAction": "Upgrade tornado to version 6.6.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-5cjw-f85j-cv6r"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126347"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126347"
  },
  {
    "cve": "CVE-2026-128089",
    "slug": "cve-2026-128089",
    "vendor": "Pip",
    "product": "dnspython",
    "name": "dnspython has excessive memory and CPU use",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-400",
    "ransomware": false,
    "description": "A maliciously crafted zone file could use a WKS record to consume excessive memory and CPU, possibly causing the process to exit due to memory exhaustion.",
    "requiredAction": "Upgrade dnspython to version 2.9.2 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-vvf4-9x63-8xvv"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128089"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128089"
  },
  {
    "cve": "CVE-2026-128077",
    "slug": "cve-2026-128077",
    "vendor": "npm",
    "product": "@nuxt/nitro-server",
    "name": "Nuxt: Incomplete fix for GHSA-9v7c-q64q-vv33: a leading `//` in the request path bypasses `server/middleware` path checks and server route rules on page routes",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 6.5,
    "severity": "Medium",
    "cwe": "CWE-436",
    "ransomware": false,
    "description": "Since 4.6.0, Nuxt parses a request path that starts with // as a URL with a host before rendering a page, so //x/admin renders the page at /admin. Nitro's routing, Nitro's route rules and server/middleware see the path as //x/admin, so server-side checks keyed on /admin do not apply. The fix for GHSA-9v7c-q64q-vv33 in 4.6.3 covered dot segments but not this form.",
    "requiredAction": "Upgrade @nuxt/nitro-server to version 4.6.4 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-r99w-jh2x-3mg9"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128077"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128077"
  },
  {
    "cve": "CVE-2026-128080",
    "slug": "cve-2026-128080",
    "vendor": "npm",
    "product": "@opentelemetry/instrumentation-http",
    "name": "OpenTelemetry JavaScript: Insertion of Sensitive Information into Log File and Exposure of Sensitive Information to an Unauthorized Actor in @opentelemetry/instrumentation-http",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 5.8,
    "severity": "Medium",
    "cwe": "CWE-200",
    "ransomware": false,
    "description": "@opentelemetry/instrumentation-http redacts sensitive URL query parameters on outgoing (client) spans but not on incoming (server) spans.",
    "requiredAction": "Upgrade @opentelemetry/instrumentation-http to version 0.222.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-3v2p-hm54-8qcq"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128080"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128080"
  },
  {
    "cve": "CVE-2026-128082",
    "slug": "cve-2026-128082",
    "vendor": ".NET (NuGet)",
    "product": "AutoMapper",
    "name": "AutoMapper: Uncontrolled Recursion with Constructor Parameters",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-674",
    "ransomware": false,
    "description": "MaxDepth, whether set explicitly or applied by default (64) to self-referential type maps, was not enforced when the recursion goes through constructor parameters. Mapping a deeply nested source to a destination built through its constructor, such as a positional record, recurses without bound and throws a StackOverflowException. That exception can't be caught and terminates the process.",
    "requiredAction": "Upgrade AutoMapper to version 16.3.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-6vhm-j9h7-f9gh"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128082"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128082"
  },
  {
    "cve": "CVE-2026-128087",
    "slug": "cve-2026-128087",
    "vendor": "Rust (Cargo)",
    "product": "russh",
    "name": "russh kex_done: Shared-secret callback runs before server host-key verification",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 3.7,
    "severity": "Low",
    "cwe": "CWE-696",
    "ransomware": false,
    "description": "A malicious SSH server whose host key is rejected can still cause russh's client::Handler::kex_done() callback to execute with the raw key-exchange shared secret. Applications using the callback for its documented protocol-bridging purpose may derive keys, initialize a secondary data channel, or perform another externally visible action before russh calls check_server_key() and rejects the server.",
    "requiredAction": "Upgrade russh to version 0.65.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-9264-jvgf-6w2f"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128087"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128087"
  },
  {
    "cve": "CVE-2026-128088",
    "slug": "cve-2026-128088",
    "vendor": "Rust (Cargo)",
    "product": "russh",
    "name": "russh try_sign: asynchronous confirmation can sign after agent lock",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 2.2,
    "severity": "Low",
    "cwe": "CWE-367",
    "ransomware": false,
    "description": "In russh 0.65.0, a sign request for a confirmation-constrained key can retain and use the private key after another connection locks the agent. try_sign() snapshots an Arc<PrivateKey> before awaiting Agent::confirm() and does not revalidate the shared lock state after the await.",
    "requiredAction": "Upgrade russh to version 0.65.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-736f-c93q-9fwx"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128088"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128088"
  },
  {
    "cve": "CVE-2026-128086",
    "slug": "cve-2026-128086",
    "vendor": "Go",
    "product": "go.opentelemetry.io/otel/baggage",
    "name": "OpenTelemetry-Go: Eager W3C baggage-property materialization causes bounded memory-allocation amplification",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-400",
    "ransomware": false,
    "description": "OpenTelemetry Go eagerly materializes W3C baggage metadata into property objects during parsing. Slice growth, serialization, and copying into the internal representation cause bounded but disproportionate memory-allocation amplification for a valid, densely populated header.",
    "requiredAction": "Upgrade go.opentelemetry.io/otel/baggage to version 1.47.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-rrfc-gjm9-cgrj"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128086"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128086"
  },
  {
    "cve": "CVE-2026-128085",
    "slug": "cve-2026-128085",
    "vendor": "Go",
    "product": "go.opentelemetry.io/otel/sdk",
    "name": "opentelemetry-go: AttributeValueLengthLimit is fully bypassed by attribute values composed of valid U+FFFD runes",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-135",
    "ransomware": false,
    "description": "The AttributeValueLengthLimit span/log-record limit can be bypassed entirely with attribute values that consist of valid U+FFFD (REPLACEMENT CHARACTER) runes.",
    "requiredAction": "Upgrade go.opentelemetry.io/otel/sdk to version 1.47.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-q7gw-24fr-5p69"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128085"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128085"
  },
  {
    "cve": "CVE-2026-128084",
    "slug": "cve-2026-128084",
    "vendor": "RubyGems",
    "product": "sqlite3",
    "name": "sqlite3-ruby: Possible SQL query truncation when a string is 4 GiB or larger",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 4.8,
    "severity": "Medium",
    "cwe": "CWE-681",
    "ransomware": false,
    "description": "sqlite3-ruby cast Ruby string lengths (long) to int before passing them to SQLite. On 64-bit platforms, a string of 4 GiB (2^32 bytes) or larger had its length wrap, so SQLite saw only the first length mod 2^32 bytes. An attacker who controls the length of a SQL string could truncate the query, for example dropping a trailing WHERE clause.",
    "requiredAction": "Upgrade sqlite3 to version 2.10.2 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-4fqr-96q8-xrfx"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128084"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128084"
  },
  {
    "cve": "CVE-2026-128083",
    "slug": "cve-2026-128083",
    "vendor": "Composer",
    "product": "laravel/framework",
    "name": "Laravel: Task Output Injection - Concurrency Process",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 2.3,
    "severity": "Low",
    "cwe": "CWE-502",
    "ransomware": false,
    "description": "If a concurrency task prints user-controlled text, an attacker can forge the framework's internal result message and achieve remote code execution in certain conditions",
    "requiredAction": "Upgrade laravel/framework to version 12.71.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-63hm-g96r-2m2q"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128083"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128083"
  },
  {
    "cve": "CVE-2026-128081",
    "slug": "cve-2026-128081",
    "vendor": ".NET (NuGet)",
    "product": "AutoMapper",
    "name": "AutoMapper: Denial of Service via uncontrolled recursion that bypasses MaxDepth",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-674",
    "ransomware": false,
    "description": "The default and explicit MaxDepth limits added for CVE-2026-32933 don't apply to several mapping paths. Mapping a deeply nested source through any of them recurses without bound and throws a StackOverflowException, which can't be caught and terminates the process.",
    "requiredAction": "Upgrade AutoMapper to version 16.3.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-gpwp-5797-mjff"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128081"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128081"
  },
  {
    "cve": "CVE-2026-126361",
    "slug": "cve-2026-126361",
    "vendor": "npm",
    "product": "astro",
    "name": "Astro: XSS via attribute injection in dynamic tag names",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 2.3,
    "severity": "Low",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "When a dynamic tag (const Tag = ...; <Tag />) resolves to a string, Astro renders it as a raw HTML element name. The name was filtered to remove characters that could inject attributes, but the filter did not handle /. Because HTML parsers treat / inside a tag as an attribute separator, a tag name such as img/src/onerror=alert(1) was rendered as an element with an onerror attribute.",
    "requiredAction": "Upgrade astro to version 7.4.5 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-mh32-jxcr-mh9f"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126361"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126361"
  },
  {
    "cve": "CVE-2026-126364",
    "slug": "cve-2026-126364",
    "vendor": "npm",
    "product": "@astrojs/node",
    "name": "Astro: Image endpoint in @astrojs/node can read files from a case-variant sibling of the output directory on case-sensitive filesystems",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 6.3,
    "severity": "Medium",
    "cwe": "CWE-22",
    "ransomware": false,
    "description": "The /_image endpoint used by the @astrojs/node adapter checks that a requested local image is inside the build output directory before reading it from disk. That check compared paths case-insensitively. On case-sensitive filesystems (such as Linux), a directory whose path differs from the output directory only by letter case is a different directory, but it passed the check.",
    "requiredAction": "No patched release available yet. Check advisory mitigations and workarounds.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-r3h5-4585-7x3w"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126364"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126364"
  },
  {
    "cve": "CVE-2026-128070",
    "slug": "cve-2026-128070",
    "vendor": "npm",
    "product": "@nuxt/schema",
    "name": "Nuxt dev server serves files from a parent directory with a stray lockfile or workspace file",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 5.9,
    "severity": "Medium",
    "cwe": "CWE-552",
    "ransomware": false,
    "description": "Nuxt can pick a parent directory that does not declare a workspace as its default workspaceDir: the farthest directory with a lockfile when the project is not inside a git repository, or the farthest directory with a pnpm-workspace.yaml or deno.json file, even one that only holds settings. The Vite dev server allows /_nuxt/@fs/ requests for any file under workspaceDir.",
    "requiredAction": "Upgrade @nuxt/schema to version 4.6.4 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-mjrq-cffv-q4qc"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128070"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128070"
  },
  {
    "cve": "CVE-2026-128069",
    "slug": "cve-2026-128069",
    "vendor": "RubyGems",
    "product": "rails-html-sanitizer",
    "name": "rails-html-sanitizer: Possible XSS via shared scrubber state in concurrent calls",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 4.7,
    "severity": "Medium",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "Rails::HTML::SafeListSanitizer (both the HTML4 and HTML5 variants) shares one Rails::HTML::PermitScrubber across every sanitize call on the same instance, assigning its tags and attributes on each call without synchronization. Two concurrent sanitize calls with different tags: or attributes: options can interleave, so one call is scrubbed with the other call's allowlist.",
    "requiredAction": "Upgrade rails-html-sanitizer to version 1.7.2 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-h7wh-q2qr-458c"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128069"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128069"
  },
  {
    "cve": "CVE-2026-128079",
    "slug": "cve-2026-128079",
    "vendor": "Pip",
    "product": "envd",
    "name": "envd: Host file disclosure through requirements path traversal and TOCTOU",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 6.8,
    "severity": "Medium",
    "cwe": "CWE-22",
    "ransomware": false,
    "description": "envd’s install.python_packages(requirements=...) could read files outside the build context on the host. Content interpreted as dependency entries could appear in build logs and build-step metadata. Commit f576c92, released in v1.3.5, added path containment validation but left a time-of-check/time-of-use (TOCTOU) race between symlink resolution and opening the requirements file.",
    "requiredAction": "Upgrade envd to version 1.3.6 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-jv6m-48w5-5rpr"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128079"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128079"
  },
  {
    "cve": "CVE-2026-128068",
    "slug": "cve-2026-128068",
    "vendor": "RubyGems",
    "product": "rails-html-sanitizer",
    "name": "rails-html-sanitizer: Possible regular expression denial of service with certain configurations",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-400",
    "ransomware": false,
    "description": "Rails::HTML::PermitScrubber restricts the href and xlink:href attributes of SVG reference elements to local references. That check matched the attribute value against /^\\s[^#\\s]./m. In Ruby ^ anchors to every line start and \\s matches newlines, so an all-whitespace value made the engine rescan the value from each of its line starts, taking time quadratic in its length.",
    "requiredAction": "Upgrade rails-html-sanitizer to version 1.7.2 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-cpgf-5mjf-73p7"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128068"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128068"
  },
  {
    "cve": "CVE-2026-126360",
    "slug": "cve-2026-126360",
    "vendor": "Pip",
    "product": "opentelemetry-api",
    "name": "OpenTelemetry Python API: Denial of service through quadratic-time traceparent parsing",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-1333",
    "ransomware": false,
    "description": "TraceContextTextMapPropagator.extract() in opentelemetry-api is vulnerable to regular expression denial of service (ReDoS) when processing a specially crafted traceparent value. A malformed value containing a trace-context prefix followed by a long whitespace sequence and an embedded newline triggers quadratic-time regex backtracking.",
    "requiredAction": "Upgrade opentelemetry-api to version 1.45.2 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-mf5v-w3w3-f6cg"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126360"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126360"
  },
  {
    "cve": "CVE-2026-126191",
    "slug": "cve-2026-126191",
    "vendor": "Pip",
    "product": "soupsieve",
    "name": "Soup Sieve: Exponential ReDoS in selector compilation via \\9-run in CSS_ESCAPES/IDENTIFIER",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-1333",
    "ransomware": false,
    "description": "The IDENTIFIER/CSS_ESCAPES regex (css_parser.py:119-124) exhibits exponential backtracking on a run of ambiguous digit-escapes (\\9) in an attribute-name or tag position of an otherwise well-formed selector. It fires at compile time (before the SELECTOR_LIMIT guard) via the public soupsieve.compile() and BeautifulSoup .select().",
    "requiredAction": "Upgrade soupsieve to version 3.0.2 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-6655-6qjp-jx7x"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126191"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126191"
  },
  {
    "cve": "CVE-2026-126193",
    "slug": "cve-2026-126193",
    "vendor": "Pip",
    "product": "soupsieve",
    "name": "Soup Sieve: Uncontrolled recursion in CSS parser lets nested pseudo-class selectors exhaust the Python call stack",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-674",
    "ransomware": false,
    "description": "The Soup Sieve CSS selector parser recurses once per level of nested pseudo-class selector (:is(), :not(), :where(), :has()) without any limit on nesting depth.",
    "requiredAction": "Upgrade soupsieve to version 3.0.2 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-7g44-g9rc-x53w"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126193"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126193"
  },
  {
    "cve": "GHSA-rg32-vgf9-927c",
    "slug": "ghsa-rg32-vgf9-927c",
    "vendor": "Pip",
    "product": "nltk",
    "name": "Duplicate Advisory: Quadratic CPU exhaustion in TreebankWordTokenizer.span_tokenize via list.pop(0) in quote-restore loop",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 6.9,
    "severity": "Medium",
    "cwe": "CWE-407",
    "ransomware": false,
    "description": "This advisory has been withdrawn because it is a duplicate of GHSA-ffr9-mgrr-wcvr. This link is maintained to preserve external references. NLTK from 3.2.5 before 3.10.4 contains an algorithmic complexity vulnerability in TreebankWordTokenizer.span_tokenize that allows remote attackers to cause quadratic CPU consumption through repeated list.pop(0) calls.",
    "requiredAction": "No patched release available yet. Check advisory mitigations and workarounds.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-rg32-vgf9-927c"
      }
    ],
    "source": "GITHUB",
    "cveID": "GHSA-rg32-vgf9-927c"
  },
  {
    "cve": "GHSA-7r4r-6ppg-7ff8",
    "slug": "ghsa-7r4r-6ppg-7ff8",
    "vendor": "Pip",
    "product": "nltk",
    "name": "Duplicate Advisory: Symlink escape in YCOECorpusReader lets a psd/pos directory symlink read files outside the corpus root within the data sandbox",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 8.7,
    "severity": "High",
    "cwe": "CWE-59",
    "ransomware": false,
    "description": "This advisory has been withdrawn because it is a duplicate of GHSA-qg35-44qx-7vrr. This link is maintained to preserve external references. NLTK from 3.10.0 before 3.10.4 contains a symlink escape vulnerability in YCOECorpusReader that allows attackers to read files outside the corpus root by planting psd or pos directory symlinks.",
    "requiredAction": "No patched release available yet. Check advisory mitigations and workarounds.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-7r4r-6ppg-7ff8"
      }
    ],
    "source": "GITHUB",
    "cveID": "GHSA-7r4r-6ppg-7ff8"
  },
  {
    "cve": "GHSA-4hvg-fv5c-9936",
    "slug": "ghsa-4hvg-fv5c-9936",
    "vendor": "Pip",
    "product": "nltk",
    "name": "Duplicate Advisory: Unbounded CPU consumption in NLTK SteppingRecursiveDescentParser.parse() with ambiguous or self-embedding grammars",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 8.7,
    "severity": "High",
    "cwe": "CWE-400",
    "ransomware": false,
    "description": "This advisory has been withdrawn because it is a duplicate of GHSA-8fx7-8jr8-84rv. This link is maintained to preserve external references. NLTK before 3.10.4 contains an uncontrolled resource consumption vulnerability in SteppingRecursiveDescentParser.parse() that lacks any max_time deadline or step limit.",
    "requiredAction": "No patched release available yet. Check advisory mitigations and workarounds.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-4hvg-fv5c-9936"
      }
    ],
    "source": "GITHUB",
    "cveID": "GHSA-4hvg-fv5c-9936"
  },
  {
    "cve": "GHSA-g5wx-957h-f4wj",
    "slug": "ghsa-g5wx-957h-f4wj",
    "vendor": "Pip",
    "product": "nltk",
    "name": "Duplicate Advisory: Path Traversal in save_maxent_params / load_maxent_params Allow Arbitrary File READ/WRITE",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 6.3,
    "severity": "Medium",
    "cwe": "CWE-73",
    "ransomware": false,
    "description": "This advisory has been withdrawn because it is a duplicate of GHSA-59f9-gqg8-mqpj. This link is maintained to preserve external references. NLTK before 3.10.4 contains a path traversal vulnerability in save_maxent_params() and load_maxent_params() that bypasses the pathsec filesystem restriction mechanism.",
    "requiredAction": "No patched release available yet. Check advisory mitigations and workarounds.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-g5wx-957h-f4wj"
      }
    ],
    "source": "GITHUB",
    "cveID": "GHSA-g5wx-957h-f4wj"
  },
  {
    "cve": "CVE-2026-100397",
    "slug": "cve-2026-100397",
    "vendor": "Pip",
    "product": "rucio",
    "name": "Rucio: Unauthenticated administrator impersonation through SSH challenge tokens",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 9.8,
    "severity": "Critical",
    "cwe": "CWE-287",
    "ransomware": false,
    "description": "SSH challenge tokens are mistakenly accepted as valid credentials during the authentication token validation process. While an SSH challenge token is intended as a short-lived nonce for use in a subsequent SSH key exchange, the function to validate authentication tokens does not differentiate between these and actual authentication tokens.",
    "requiredAction": "Upgrade rucio to version 35.9.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-x585-4vv8-2mh2"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-100397"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-100397"
  },
  {
    "cve": "CVE-2026-126190",
    "slug": "cve-2026-126190",
    "vendor": "Pip",
    "product": "soupsieve",
    "name": "Soup Sieve: Polynomial-time denial of service in the descendant combinator",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-407",
    "ransomware": false,
    "description": "Matching a selector that uses the descendant combinator (a b) takes time that grows polynomially with how deeply the document is nested, and each extra descendant combinator in the selector raises the degree by one. A selector with k descendant combinators takes O(n^(k+1)) time on a chain of n nested elements.",
    "requiredAction": "Upgrade soupsieve to version 4.0.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-mmhr-3c5m-f64f"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126190"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126190"
  },
  {
    "cve": "CVE-2026-126192",
    "slug": "cve-2026-126192",
    "vendor": "Pip",
    "product": "soupsieve",
    "name": "Soup Sieve: General sibling combinator inside :has() matches untrusted HTML in quadratic time",
    "dateAdded": "2026-11-13",
    "dueDate": "",
    "cvss": 6.3,
    "severity": "Medium",
    "cwe": "CWE-400",
    "ransomware": false,
    "description": "Matching a selector that puts a general-sibling combinator inside :has(), such as div:has(a ~ b), against untrusted HTML runs in O(n²) time in the number of sibling elements. A single small document with a few thousand siblings ties the process up for a minute of CPU, so an application that runs a fixed selector of this shape over HTML it doesn't control can be stalled by one request.",
    "requiredAction": "Upgrade soupsieve to version 2.10.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-4j63-6c4x-wfg4"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126192"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126192"
  },
  {
    "cve": "CVE-2026-122006",
    "slug": "cve-2026-122006",
    "vendor": "RubyGems",
    "product": "activestorage",
    "name": "Active Storage: Possible arbitrary file write and read in image analysis",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 9.8,
    "severity": "Critical",
    "cwe": "CWE-1188",
    "ransomware": false,
    "description": "A Rails application that processes attachments with ImageMagick may allow an unauthenticated attacker to write arbitrary files on the server and, when attachments are stored with the Disk service, to read arbitrary files readable by the application process.",
    "requiredAction": "Upgrade activestorage to version 8.1.4.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-f3w6-w445-fwh9"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-122006"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-122006"
  },
  {
    "cve": "CVE-2026-126072",
    "slug": "cve-2026-126072",
    "vendor": "RubyGems",
    "product": "actionpack",
    "name": "Action Pack: Possible DoS vulnerability in Action Controller Live streaming",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 5.9,
    "severity": "Medium",
    "cwe": "CWE-833",
    "ransomware": false,
    "description": "ActionController::Live::Buffer#close pushes its end-of-stream marker onto the response's bounded queue while it holds the buffer's monitor. When the client has stopped reading and the queue is full, the push blocks, and Buffer#abort, which runs when the client disconnects or a write times out, waits indefinitely for the same monitor.",
    "requiredAction": "Upgrade actionpack to version 8.1.4.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-rwvh-fw6r-pwvp"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126072"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126072"
  },
  {
    "cve": "CVE-2026-126077",
    "slug": "cve-2026-126077",
    "vendor": "RubyGems",
    "product": "actionpack",
    "name": "Action Pack: Possible sensitive session information leak in Active Storage proxy mode",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 6.8,
    "severity": "Medium",
    "cwe": "CWE-200",
    "ransomware": false,
    "description": "When ActionDispatch::Cookies reads a signed or encrypted cookie that was written under a rotated secret (config.action_dispatch.cookies_rotations) or in the format that a :hybrid cookie serializer migrates from, it writes the cookie back to the response in the current format, and that write ignores request.session_options[:skip].",
    "requiredAction": "Upgrade actionpack to version 8.1.4.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-x6mj-8jx9-qhqv"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126077"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126077"
  },
  {
    "cve": "CVE-2026-126078",
    "slug": "cve-2026-126078",
    "vendor": "RubyGems",
    "product": "actionview",
    "name": "Action View: Possible XSS vulnerability in highlight helper",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 6.1,
    "severity": "Medium",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "ActionView::Helpers::TextHelper#highlight substitutes each matched phrase into the :highlighter string without escaping it and returns the result marked HTML-safe.",
    "requiredAction": "Upgrade actionview to version 8.1.4.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-v6rj-xm57-3p59"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126078"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126078"
  },
  {
    "cve": "CVE-2026-126070",
    "slug": "cve-2026-126070",
    "vendor": "RubyGems",
    "product": "actionview",
    "name": "Action View: Possible XSS vulnerability in strip_tags",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 6.1,
    "severity": "Medium",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "strip_tags in Action View returns its sanitized output marked html_safe, but the underlying sanitizer encodes only &, < and >, leaving \" and ' unencoded. Because ERB does not escape a string marked html_safe, untrusted input passed through strip_tags and rendered inside a quoted HTML attribute value could close the attribute and add new attributes, possibly leading to XSS.",
    "requiredAction": "Upgrade actionview to version 8.1.4.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-rq8q-p985-fjq7"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126070"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126070"
  },
  {
    "cve": "CVE-2026-126079",
    "slug": "cve-2026-126079",
    "vendor": "RubyGems",
    "product": "actionview",
    "name": "Action View: Possible XSS vulnerability in text helpers",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 6.1,
    "severity": "Medium",
    "cwe": "CWE-79",
    "ransomware": false,
    "description": "With the HTML5 sanitizer (Rails::HTML5::Sanitizer, the default vendor on CRuby for applications using load_defaults 7.1 or later), Nokogiri before 1.19.5 serializes < and > unescaped inside attribute values.",
    "requiredAction": "Upgrade actionview to version 8.1.4.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-2p2f-4rq4-gjwc"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126079"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126079"
  },
  {
    "cve": "CVE-2026-126084",
    "slug": "cve-2026-126084",
    "vendor": "RubyGems",
    "product": "activestorage",
    "name": "Active Storage: Unsigned Content-Type in GCS direct uploads with cache_control",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 4.7,
    "severity": "Medium",
    "cwe": "CWE-345",
    "ransomware": false,
    "description": "When a GCS service is configured with the cache_control option, ActiveStorage::Service::GCSService#url_for_direct_upload signs direct-upload URLs with V4, and the V4 signature covers only the Cache-Control and Host headers. A direct-upload client can therefore send a Content-Type of its choosing, and can omit the declared Content-MD5, without invalidating the URL.",
    "requiredAction": "Upgrade activestorage to version 8.1.4.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-3w93-6hmw-whh4"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126084"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126084"
  },
  {
    "cve": "CVE-2026-126081",
    "slug": "cve-2026-126081",
    "vendor": "RubyGems",
    "product": "actionpack",
    "name": "Action Pack: Possible Strong Parameters Bypass in Parameters#each_key",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 7.5,
    "severity": "High",
    "cwe": "CWE-915",
    "ransomware": false,
    "description": "ActionController::Parameters#each_key delegates to the internal ActiveSupport::HashWithIndifferentAccess that holds the request parameters, so when called with a block it returns that hash instead of the Parameters instance. The hash does not respond to permitted?, so Active Model mass assignment (new, assign_attributes, update) accepts it without raising ActiveModel::ForbiddenAttributesError.",
    "requiredAction": "Upgrade actionpack to version 8.1.4.1 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-wm3x-v3qw-4jh3"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126081"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126081"
  },
  {
    "cve": "CVE-2026-128066",
    "slug": "cve-2026-128066",
    "vendor": "Pip",
    "product": "Pillow",
    "name": "Pillow: Memory DoS in TIFF and EXIF IFD parsing via overlapping tag data",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 0,
    "severity": "Medium",
    "cwe": "CWE-770",
    "ransomware": false,
    "description": "A small, crafted image file can make Pillow use thousands of times its own size in memory while the file is only being opened, which lets anyone who can submit an image crash or stall the process handling it. A 144 KB TIFF makes Image.open() return normally while holding 1.6 GiB of memory.",
    "requiredAction": "Upgrade Pillow to version 13.0.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-wqgw-9xfh-qf2g"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128066"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128066"
  },
  {
    "cve": "CVE-2026-128067",
    "slug": "cve-2026-128067",
    "vendor": "Pip",
    "product": "Pillow",
    "name": "Pillow: Heap buffer overflow saving TIFF with libtiff when tags override image size",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 8.4,
    "severity": "High",
    "cwe": "CWE-787",
    "ransomware": false,
    "description": "When Pillow saves an image as a compressed TIFF, size information taken from the image's metadata can make the encoder read past the end of a heap buffer. Someone who uploads an image can use this to get the server process's memory, including pointers, copied into the saved file, or to crash the process.",
    "requiredAction": "Upgrade Pillow to version 13.0.0 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-xcvg-w56q-r89m"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128067"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-128067"
  },
  {
    "cve": "CVE-2026-126355",
    "slug": "cve-2026-126355",
    "vendor": "npm",
    "product": "hono",
    "name": "Hono: `csrf()` does not check requests sent by hyperlink auditing (`text/ping`)",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-352",
    "ransomware": false,
    "description": "csrf() validates a request only when its Content-Type is one of the three types an HTML form can send. Chromium's hyperlink auditing ( ) sends a cross-origin POST with the user's cookies and the content type text/ping, which is not in that list. The middleware does not look at Origin or Sec-Fetch-Site for such a request, so it is passed to the handler.",
    "requiredAction": "Upgrade hono to version 4.13.16 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-46wx-v44x-9hh2"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126355"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126355"
  },
  {
    "cve": "CVE-2026-126356",
    "slug": "cve-2026-126356",
    "vendor": "npm",
    "product": "hono",
    "name": "Hono: `validator('form')` skips validation for `multipart/form-data` requests with extra parameters",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-20",
    "ransomware": false,
    "description": "validator('form') only recognizes a multipart/form-data Content-Type that carries nothing but a single boundary parameter. A request with another legal parameter, such as charset, or with extra whitespace after the ; is not recognized as a form. The validation callback then receives an empty object, while c.req.parseBody() still parses the body as a form.",
    "requiredAction": "Upgrade hono to version 4.13.16 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-4h7h-rv7c-7m2v"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126356"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126356"
  },
  {
    "cve": "CVE-2026-126357",
    "slug": "cve-2026-126357",
    "vendor": "npm",
    "product": "hono",
    "name": "Hono: `mount()` and `app.mount()` can forward a path that bypasses middleware scoped inside the mount prefix",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-288",
    "ransomware": false,
    "description": "mount() and app.mount() remove the mount prefix from the request path and forward the rest to the mounted application. Two mistakes in that step let a crafted request reach a route of the mounted application that the outer application protects with path-scoped middleware, such as an authentication check on /app/admin/*.",
    "requiredAction": "Upgrade hono to version 4.13.16 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-4m76-xfj5-7975"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126357"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126357"
  },
  {
    "cve": "CVE-2026-126358",
    "slug": "cve-2026-126358",
    "vendor": "npm",
    "product": "hono",
    "name": "Hono: RegExpRouter skips wildcard middleware for some route sets and for paths with an encoded line terminator",
    "dateAdded": "2026-11-12",
    "dueDate": "",
    "cvss": 5.3,
    "severity": "Medium",
    "cwe": "CWE-863",
    "ransomware": false,
    "description": "RegExpRouter, which the default SmartRouter selects for most applications, skipped wildcard middleware in three cases, so a route handler ran without the middleware registered for it: 1. Middleware whose parameter is written with the explicit default pattern, such as /api/:tenant{[^/]+}/admin/, was not applied to a route written as /api/:tenant/admin/:id. (since 4.13.0) 2.",
    "requiredAction": "Upgrade hono to version 4.13.16 or later.",
    "references": [
      {
        "label": "GitHub Advisory",
        "url": "https://github.com/advisories/GHSA-h7mg-cq63-vhpq"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126358"
      }
    ],
    "source": "GITHUB",
    "cveID": "CVE-2026-126358"
  }
];
