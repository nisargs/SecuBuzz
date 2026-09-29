import type { Advisory } from '../types/advisory';

export const advisories: Advisory[] = [
  {
    "cve": "CVE-2026-88772",
    "slug": "cve-2026-88772",
    "vendor": "Citrix",
    "product": "NetScaler",
    "name": "Citrix NetScaler Improper Restriction of Operations within the Bounds of a Memory Buffer Vulnerability",
    "dateAdded": "2026-09-27",
    "dueDate": "2026-09-30",
    "cvss": 9.8,
    "severity": "Critical",
    "cwe": "CWE: CWE-119",
    "ransomware": false,
    "description": "Citrix NetScaler ADC and NetScaler Gateway contain an improper restriction of operations within the bounds of a memory buffer vulnerability that could allow for remote code execution or denial of service",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://community.citrix.com/techzone-blogs/110_security-updates/netscaler-adc-and-netscaler-gateway-security-bulletin-for-cve-2026-88771-through-cve-2026-88778"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-88772"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-88771",
    "slug": "cve-2026-88771",
    "vendor": "Citrix",
    "product": "NetScaler",
    "name": "Citrix NetScaler Improper Input Validation Vulnerability",
    "dateAdded": "2026-09-27",
    "dueDate": "2026-09-30",
    "cvss": 9.8,
    "severity": "Critical",
    "cwe": "CWE: CWE-119",
    "ransomware": false,
    "description": "Citrix NetScaler ADC and NetScaler Gateway contain an improper input validation vulnerability that could allow an unauthenticated attacker to execute arbitrary commands.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://community.citrix.com/techzone-blogs/110_security-updates/netscaler-adc-and-netscaler-gateway-security-bulletin-for-cve-2026-88771-through-cve-2026-88778"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-88771"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-67279",
    "slug": "cve-2026-67279",
    "vendor": "MikroTik",
    "product": "RouterOS",
    "name": "Mikrotik RouterOS Improper Enforcement of Behavioral Workflow Vulnerability",
    "dateAdded": "2026-09-25",
    "dueDate": "2026-09-28",
    "cvss": 9.8,
    "severity": "Critical",
    "cwe": "CWE: CWE-841",
    "ransomware": false,
    "description": "Mikrotik RouterOS contains an improper enforcement of behavioral workflow vulnerability that could allow an unauthenticated client to open a session channel and send an exec request. This vulnerability can be chained to achieve unauthenticated exploitation of CVE-2026-86060.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://mikrotik.com/supportsec/september-2026-vulnerability/?utm_source=chatgpt.com"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-67279"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-65660",
    "slug": "cve-2026-65660",
    "vendor": "Microsoft",
    "product": "SharePoint",
    "name": "Microsoft SharePoint Code Injection Vulnerability",
    "dateAdded": "2026-09-25",
    "dueDate": "2026-09-28",
    "cvss": 9.8,
    "severity": "Critical",
    "cwe": "CWE: CWE-94",
    "ransomware": false,
    "description": "Microsoft SharePoint contains a code injection vulnerability which could allow an authorized attacker to execute code over a network.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-65660"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-65660"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-87902",
    "slug": "cve-2026-87902",
    "vendor": "WordPress",
    "product": "Core",
    "name": "WordPress Core Remote File Inclusion Vulnerability",
    "dateAdded": "2026-09-25",
    "dueDate": "2026-09-28",
    "cvss": 9.8,
    "severity": "Critical",
    "cwe": "CWE: CWE-98",
    "ransomware": false,
    "description": "WordPress Core contains a remote file inclusion vulnerability which could allow an unauthenticated attacker to make page-template resolution include a chosen readable local `.php` file outside the active theme directories, leading to remote code execution.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://github.com/WordPress/wordpress-develop/security/advisories/GHSA-7hp8-65ch-5whp"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-87902"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-5430",
    "slug": "cve-2026-5430",
    "vendor": "WSO2",
    "product": "Multiple Products",
    "name": "WSO2 Multiple Products Path Traversal Vulnerability ",
    "dateAdded": "2026-09-24",
    "dueDate": "2026-09-27",
    "cvss": 9.8,
    "severity": "Critical",
    "cwe": "CWE: CWE-347",
    "ransomware": false,
    "description": "WSO2 API Control Plane, API Manager, Traffic Manager & Universal Gateway contain a path traversal vulnerability that could allow for unrestricted file upload and lead to remote code execution. ",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://security.docs.wso2.com/en/latest/security-announcements/security-advisories/2026/WSO2-2026-5328/"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-5430"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-71362",
    "slug": "cve-2026-71362",
    "vendor": "Adobe",
    "product": "Commerce and Magento ",
    "name": "Adobe Commerce and Magento Incorrect Authorization Vulnerability ",
    "dateAdded": "2026-09-24",
    "dueDate": "2026-09-27",
    "cvss": 9.8,
    "severity": "Critical",
    "cwe": "CWE: CWE-863",
    "ransomware": false,
    "description": "Adobe Commerce and Magento contains an incorrect authorization vulnerability that could allow an attacker to leverage this vulnerability to gain elevated access to sensitive resources without any user interaction. ",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://helpx.adobe.com/security/products/magento/apsb26-92.html"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-71362"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-93952",
    "slug": "cve-2026-93952",
    "vendor": "Arista",
    "product": "VeloCloud Orchestrator",
    "name": "Arista VeloCloud Orchestrator Improper Input Validation Vulnerability",
    "dateAdded": "2026-09-22",
    "dueDate": "2026-09-25",
    "cvss": 9.8,
    "severity": "Critical",
    "cwe": "CWE: CWE-20",
    "ransomware": false,
    "description": "Arista VeloCloud Orchestrator (VCO) on-prem contains an improper input validation vulnerability that may allow a remote attacker to access privileged internal functionality and impact the VCO host. Successful exploitation may compromise the confidentiality, integrity, and availability of the orchestrator and data managed by the orchestrator.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://www.arista.com/en/support/advisories-notices/security-advisory/24765-security-advisory-0183"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-93952"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-94127",
    "slug": "cve-2026-94127",
    "vendor": "F5",
    "product": "BIG-IP APM",
    "name": "F5 BIG-IP APM Heap-based Buffer Overflow Vulnerability",
    "dateAdded": "2026-09-22",
    "dueDate": "2026-09-25",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE: CWE-122",
    "ransomware": false,
    "description": "F5 BIG-IP APM contains a heap-based buffer overflow vulnerability when access policy and an OAuth profile are configured on a virtual server. This vulnerability could allow an unauthenticated attacker to perform remote code execution.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://my.f5.com/manage/s/article/K000162605"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-94127"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-93616",
    "slug": "cve-2026-93616",
    "vendor": "Check Point",
    "product": "Multiple Products",
    "name": "Check Point Multiple Products Path Traversal Vulnerability",
    "dateAdded": "2026-09-22",
    "dueDate": "2026-09-25",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE: CWE-22",
    "ransomware": false,
    "description": "Check Point Security Management Server, Multi-Domain Security Management Server, Log Server, Multi-Domain Log Server, and SmartEvent contain a path traversal vulnerability that allows an unauthenticated attacker to upload and execute arbitrary scripts.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://support.checkpoint.com/results/sk/sk1000171/"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-93616"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-85102",
    "slug": "cve-2026-85102",
    "vendor": "Check Point",
    "product": "Multiple Products",
    "name": "Check Point Multiple Products Improper Certificate Validation Vulnerability",
    "dateAdded": "2026-09-22",
    "dueDate": "2026-09-25",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE: CWE-295",
    "ransomware": false,
    "description": "Check Point Security Gateway and Check Point Spark Firewall using Site to Site VPN or Remote Access VPN contain an improper certificate validation vulnerability which could allow an unauthenticated remote attacker to execute arbitrary code on the Gateway.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://support.checkpoint.com/results/sk/sk1000117"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-85102"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-7273",
    "slug": "cve-2026-7273",
    "vendor": "Zyxel",
    "product": "GS1900 Series Switches",
    "name": "Zyxel GS1900 Series Switches Stack-Based Buffer Overflow Vulnerability",
    "dateAdded": "2026-09-21",
    "dueDate": "2026-09-24",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE: CWE-121",
    "ransomware": false,
    "description": "Zyxel GS1900 series switches contain a stack-based buffer overflow vulnerability in the CGI program which could allow a LAN-based, unauthenticated attacker to exploit the flaw and potentially execute OS commands via a crafted HTTP request.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://www.zyxel.com/global/en/support/security-advisories/zyxel-security-advisory-for-stack-based-buffer-overflow-vulnerability-in-gs1900-series-switches-06-16-2026"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-7273"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2025-39964",
    "slug": "cve-2025-39964",
    "vendor": "Linux",
    "product": "Kernel",
    "name": "Linux Kernel Race Condition Vulnerability",
    "dateAdded": "2026-09-18",
    "dueDate": "2026-09-21",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE: CWE-362",
    "ransomware": false,
    "description": "Linux Kernel contains a race condition vulnerability which allows concurrent writes to the same AF_ALG socket causing data to be unpredictably interleaved and creating inconsistencies in the socket's internal state.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://git.kernel.org/stable/c/0f28c4adbc4a97437874c9b669fd7958a8c6d6ce"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-39964"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-53266",
    "slug": "cve-2026-53266",
    "vendor": "Linux",
    "product": "Kernel",
    "name": "Linux Kernel Out-of-Bounds Write Vulnerability",
    "dateAdded": "2026-09-18",
    "dueDate": "2026-09-21",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE: CWE-787",
    "ransomware": false,
    "description": "Linux Kernel contains an out-of-bounds write vulnerability in the ebtables SNAT target which allows an ARP sender hardware address rewrite to write directly into a nonlinear socket-buffer fragment backed by a splice-imported file page. The impacted product(s) could be end-of-life (EoL) and/or end-of-service (EoS). Users are advised to discontinue use and/or transition to a supported version.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://git.kernel.org/stable/c/bf84ad7c7a9ede46e31afaa41a1ba06a159e8c87"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-53266"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2025-39682",
    "slug": "cve-2025-39682",
    "vendor": "Linux",
    "product": "Kernel",
    "name": "Linux Kernel Improper Check for Unusual or Exceptional Conditions Vulnerability",
    "dateAdded": "2026-09-18",
    "dueDate": "2026-09-21",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE: CWE-754",
    "ransomware": false,
    "description": "Linux Kernel contains an improper check for unusual or exceptional conditions vulnerability in the TLS receive path which allows a zero-length record retrieved from the rx_list to bypass the intended recvmsg() record-type handling, potentially causing subsequent TLS records to be processed using incorrect zero-copy and queuing assumptions. The impacted product(s) could be end-of-life (EoL) and/or end-of-service (EoS). Users are advised to discontinue use and/or transition to a supported version.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://git.kernel.org/stable/c/2902c3ebcca52ca845c03182000e8d71d3a5196f"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-39682"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-58704",
    "slug": "cve-2026-58704",
    "vendor": "Google",
    "product": "Pixel",
    "name": "Google Pixel Improper Authorization Vulnerability",
    "dateAdded": "2026-09-16",
    "dueDate": "2026-09-19",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE: CWE-693",
    "ransomware": false,
    "description": "Google Pixel devices contain an improper authorization vulnerability in the cellular modem. A logic error may allow an attacker to bypass permission checks and escalate privileges.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://source.android.com/docs/security/bulletin/pixel/2026/2026-09-01"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-58704"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-76460",
    "slug": "cve-2026-76460",
    "vendor": "Cisco",
    "product": "Identity Services Engine",
    "name": "Cisco Identity Services Engine Incorrect Use of Privileged APIs Vulnerability",
    "dateAdded": "2026-09-16",
    "dueDate": "2026-09-19",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE: CWE-648",
    "ransomware": false,
    "description": "Cisco Identity Services Engine (ISE) and Cisco ISE Passive Identity Connector (ISE-PIC) contain an incorrect use of privileged APIs vulnerability that could allow an unauthenticated, remote attacker to gain unauthorized access to the affected device by bypassing the web-based management interface.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-ISE-ABP-VNSW7Tn5"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-76460"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-87886",
    "slug": "cve-2026-87886",
    "vendor": "Acronis",
    "product": "Backup",
    "name": "Acronis Backup Incorrect Default Permissions Vulnerability",
    "dateAdded": "2026-09-16",
    "dueDate": "2026-09-19",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE: CWE-276",
    "ransomware": false,
    "description": "Acronis Backup plugin for cPanel & WHM and extension for Plesk contains an incorrect default permissions vulnerability that could allow for privilege escalation.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://security-advisory.acronis.com/advisories/SEC-10986"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-87886"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-76461",
    "slug": "cve-2026-76461",
    "vendor": "Cisco",
    "product": "Secure Email Gateway",
    "name": "Cisco Secure Email Gateway SQL Injection Vulnerability",
    "dateAdded": "2026-09-14",
    "dueDate": "2026-09-17",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE: CWE-89",
    "ransomware": false,
    "description": "Cisco AsyncOS software for Cisco Secure Email Gateway (SEG) contains a SQL injection vulnerability that could allow an unauthenticated, remote attacker to execute arbitrary commands with root privileges on the underlying operating system.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-inj-2bLVGmhX"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-76461"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-84869",
    "slug": "cve-2026-84869",
    "vendor": "ConnectWise",
    "product": "ScreenConnect",
    "name": "ConnectWise ScreenConnect Improper Privilege Management and Missing Authorization Vulnerability",
    "dateAdded": "2026-09-11",
    "dueDate": "2026-09-14",
    "cvss": 8.8,
    "severity": "High",
    "cwe": "CWE: CWE-269",
    "ransomware": false,
    "description": "ConnectWise ScreenConnect contains both an improper privilege management and missing authorization vulnerability that may allow an attacker to transfer and execute files through an active remote session without authorization or host confirmation.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://www.connectwise.com/company/trust/security-bulletins/2026-09-08-screenconnect-bulletin"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-84869"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-42016",
    "slug": "cve-2026-42016",
    "vendor": "JFrog",
    "product": "Artifactory",
    "name": "JFrog Artifactory Incorrect Authorization Vulnerability",
    "dateAdded": "2026-09-11",
    "dueDate": "2026-09-25",
    "cvss": 7.5,
    "severity": "Medium",
    "cwe": "CWE: CWE-863",
    "ransomware": false,
    "description": "JFrog Artifactory contains an incorrect authorization vulnerability that leads to a privilege escalation attack due to a validation check of the token signature/issuer and not the token’s scope.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://docs.jfrog.com/releases/docs/jfrog-security-advisories"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-42016"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-42018",
    "slug": "cve-2026-42018",
    "vendor": "JFrog",
    "product": "Artifactory",
    "name": "JFrog Artifactory Improper Authentication Vulnerability",
    "dateAdded": "2026-09-11",
    "dueDate": "2026-09-25",
    "cvss": 7.5,
    "severity": "Medium",
    "cwe": "CWE: CWE-287",
    "ransomware": false,
    "description": "JFrog Artifactory contains an improper authentication vulnerability that could return an internal anonymous-user token to an unauthenticated caller when anonymous access is disabled, potentially exposing sensitive resources.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://docs.jfrog.com/releases/docs/jfrog-security-advisories"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-42018"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-85706",
    "slug": "cve-2026-85706",
    "vendor": "GitLab",
    "product": "Community Edition and Enterprise Edition",
    "name": "GitLab Community Edition and Enterprise Edition Path Traversal Vulnerability",
    "dateAdded": "2026-09-11",
    "dueDate": "2026-09-14",
    "cvss": 7.5,
    "severity": "Medium",
    "cwe": "CWE: CWE-35",
    "ransomware": false,
    "description": "GitLab Community Edition and Enterprise Edition contains a path traversal vulnerability that allows an unauthenticated user to read arbitrary files due to an improper path confinement and missing authentication enforcement in the repository commits API.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-3-2-released/"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-85706"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-86060",
    "slug": "cve-2026-86060",
    "vendor": "MikroTik",
    "product": "RouterOS",
    "name": "MikroTik RouterOS Improper Neutralization of Argument Delimiters in a Command Vulnerability",
    "dateAdded": "2026-09-10",
    "dueDate": "2026-09-13",
    "cvss": 7.5,
    "severity": "Medium",
    "cwe": "CWE: CWE-88",
    "ransomware": false,
    "description": "MikroTik RouterOS contains an improper neutralization of argument delimiters in a command vulnerability which allows an attacker to change the trusted RouterOS policy mask, leading to privilege escalation.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://mikrotik.com/supportsec/september-2026-vulnerability"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-86060"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-67277",
    "slug": "cve-2026-67277",
    "vendor": "MikroTik",
    "product": "RouterOS",
    "name": "MikroTik RouterOS Missing Authentication for Critical Function Vulnerability",
    "dateAdded": "2026-09-10",
    "dueDate": "2026-09-13",
    "cvss": 7.5,
    "severity": "Medium",
    "cwe": "CWE: CWE-306",
    "ransomware": false,
    "description": "MikroTik RouterOS contains a missing authentication for critical function vulnerability which allows kernel memory disclosure and denial of service in the btest service.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://mikrotik.com/supportsec/september-2026-vulnerability/"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-67277"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-19490",
    "slug": "cve-2026-19490",
    "vendor": "Citrix",
    "product": "NetScaler",
    "name": "Citrix NetScaler Authentication Bypass Using an Alternate Path or Channel Vulnerability",
    "dateAdded": "2026-09-09",
    "dueDate": "2026-09-12",
    "cvss": 7.5,
    "severity": "Medium",
    "cwe": "CWE: CWE-288",
    "ransomware": false,
    "description": "Citrix NetScaler ADC and NetScaler Gateway contain an authentication-bypass vulnerability involving an alternate path or channel. When the NetScaler appliance is configured as an AAA virtual server or as a Gateway (SSL VPN, ICA Proxy, CVPN, or RDP Proxy), an unauthenticated remote threat actor may be able to bypass authentication.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://support.citrix.com/external/article/CTX696939/netscaler-adc-and-netscaler-gateway-secu.html"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-19490"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2025-25249",
    "slug": "cve-2025-25249",
    "vendor": "Fortinet",
    "product": "Multiple Products",
    "name": "Fortinet Multiple Products Heap-based Buffer Overflow Vulnerability",
    "dateAdded": "2026-09-09",
    "dueDate": "2026-09-12",
    "cvss": 7.5,
    "severity": "Medium",
    "cwe": "CWE: CWE-122",
    "ransomware": false,
    "description": "Fortinet FortiOS, FortiSwitchManager, and FortiSASE contain a heap-based buffer overflow vulnerability that allows an attacker to execute unauthorized code or commands via specially crafted packets.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://fortiguard.fortinet.com/psirt/FG-IR-25-084"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-25249"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-87491",
    "slug": "cve-2026-87491",
    "vendor": "Google",
    "product": "Chromium V8",
    "name": "Google Chromium V8 Out of Bounds Write Vulnerability",
    "dateAdded": "2026-09-09",
    "dueDate": "2026-09-23",
    "cvss": 7.5,
    "severity": "Medium",
    "cwe": "CWE: CWE-787",
    "ransomware": false,
    "description": "Google Chromium V8 contains an out of bounds write vulnerability that allows a remote attacker to execute arbitrary code inside the sandbox via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://chromereleases.googleblog.com/2026/09/stable-channel-update-for-desktop_0808145027.html"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-87491"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-20079",
    "slug": "cve-2026-20079",
    "vendor": "Cisco",
    "product": "Secure Firewall Management Center (FMC) and Security Cloud Control (SCC) Firewall Management",
    "name": "Cisco Firewall Management Center Authentication Bypass Using an Alternate Path or Channel Vulnerability",
    "dateAdded": "2026-09-09",
    "dueDate": "2026-09-12",
    "cvss": 7.5,
    "severity": "Medium",
    "cwe": "CWE: CWE-288",
    "ransomware": false,
    "description": "Cisco Secure Firewall Management Center (FMC) Software and Cisco Security Cloud Control (SCC) Firewall Management contain an authentication Bypass using an alternate path or channel vulnerability that could allow an unauthenticated, remote attacker to bypass authentication and execute script files on an affected device to obtain root access to the underlying operating system.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-onprem-fmc-authbypass-5JPp45V2"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-20079"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  },
  {
    "cve": "CVE-2026-75650",
    "slug": "cve-2026-75650",
    "vendor": "Adobe",
    "product": "Commerce and Magento",
    "name": "Adobe Commerce and Magento Improper Neutralization of Special Elements Used in a Template Engine Vulnerability",
    "dateAdded": "2026-09-08",
    "dueDate": "2026-09-11",
    "cvss": 7.5,
    "severity": "Medium",
    "cwe": "CWE: CWE-1336",
    "ransomware": false,
    "description": "Adobe Commerce and Magento Open Source contain an improper neutralization of special elements used in a template engine vulnerability that could allow an attacker to execute arbitrary code.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "references": [
      {
        "label": "Vendor advisory / bulletin",
        "url": "https://helpx.adobe.com/security/products/magento/apsb26-146.html"
      },
      {
        "label": "NVD CVE entry",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-75650"
      },
      {
        "label": "CISA KEV catalog",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ]
  }
];
