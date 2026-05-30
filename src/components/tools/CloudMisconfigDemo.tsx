'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

type Severity = 'Critical' | 'High' | 'Medium' | 'Low';
type Platform = 'AWS' | 'Azure' | 'GCP' | 'Terraform' | 'Kubernetes';

interface Finding {
  id: string;
  platform: Platform;
  severity: Severity;
  title: string;
  description: string;
  risk: string;
  remediation: string;
  code?: string;
  fixedCode?: string;
}

const FINDINGS: Finding[] = [
  // ── AWS ──────────────────────────────────────────────────────────────────
  {
    id: 'aws-1',
    platform: 'AWS',
    severity: 'Critical',
    title: 'S3 Bucket Publicly Accessible',
    description: 'An S3 bucket with the name "company-data-prod" has public read access enabled via a permissive bucket policy.',
    risk: 'Any internet user can list and download all objects in the bucket, including potentially sensitive customer data, PII, or intellectual property.',
    remediation: 'Remove the public access policy, enable S3 Block Public Access at the account level, and enable server-side encryption (SSE-S3 or SSE-KMS).',
    code: `// VULNERABLE — Bucket Policy
{
  "Effect": "Allow",
  "Principal": "*",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::company-data-prod/*"
}`,
    fixedCode: `// FIXED — Block Public Access + Private Policy
aws s3api put-public-access-block \\
  --bucket company-data-prod \\
  --public-access-block-configuration \\
  "BlockPublicAcls=true,IgnorePublicAcls=true,\\
   BlockPublicPolicy=true,RestrictPublicBuckets=true"`,
  },
  {
    id: 'aws-2',
    platform: 'AWS',
    severity: 'High',
    title: 'IAM Root Account Has Active Access Keys',
    description: 'The AWS root account has programmatic access keys created and potentially in use.',
    risk: 'Root access keys have unrestricted access to all AWS services. Compromise means full account takeover.',
    remediation: 'Delete root access keys immediately. Use IAM roles and least-privilege policies for all programmatic access. Enable MFA on the root account.',
    code: `// AWS CLI — Check for root keys
aws iam get-account-summary | grep AccountAccessKeysPresent
// If output: "AccountAccessKeysPresent": 1 — VULNERABLE`,
    fixedCode: `// Delete root access keys via Console:
// IAM → Security credentials → Access keys → Delete
// Then enforce MFA:
aws iam enable-mfa-device --user-name <root> ...`,
  },
  {
    id: 'aws-3',
    platform: 'AWS',
    severity: 'High',
    title: 'Security Group Allows SSH From 0.0.0.0/0',
    description: 'EC2 security group sg-0abc123 allows inbound SSH (port 22) from all IP addresses.',
    risk: 'Exposes SSH to brute force and credential stuffing attacks from anywhere on the internet.',
    remediation: 'Restrict SSH to specific corporate IP ranges or use AWS Systems Manager Session Manager to eliminate inbound SSH entirely.',
    code: `// VULNERABLE — Security Group Rule
{
  "IpProtocol": "tcp",
  "FromPort": 22,
  "ToPort": 22,
  "IpRanges": [{"CidrIp": "0.0.0.0/0"}]
}`,
    fixedCode: `// FIXED — Restrict to corporate CIDR
{
  "IpProtocol": "tcp",
  "FromPort": 22,
  "ToPort": 22,
  "IpRanges": [{"CidrIp": "203.0.113.0/24",
    "Description": "Corporate VPN"}]
}`,
  },
  // ── Azure ──────────────────────────────────────────────────────────────────
  {
    id: 'az-1',
    platform: 'Azure',
    severity: 'Critical',
    title: 'Storage Account Allows Public Blob Access',
    description: 'Azure Storage Account "stgprodeastus" has AllowBlobPublicAccess set to true.',
    risk: 'Blobs can be accessed publicly without authentication, potentially exposing sensitive files.',
    remediation: 'Set AllowBlobPublicAccess to false at the storage account level and use SAS tokens or Azure AD for authenticated access.',
    code: `// VULNERABLE — ARM template snippet
"properties": {
  "allowBlobPublicAccess": true,
  "supportsHttpsTrafficOnly": false
}`,
    fixedCode: `// FIXED
"properties": {
  "allowBlobPublicAccess": false,
  "supportsHttpsTrafficOnly": true,
  "minimumTlsVersion": "TLS1_2"
}`,
  },
  {
    id: 'az-2',
    platform: 'Azure',
    severity: 'High',
    title: 'Azure AD MFA Not Required for Admins',
    description: 'Conditional Access policy does not enforce MFA for users with Global Administrator or Privileged Role Administrator roles.',
    risk: 'Admin accounts can be compromised through phishing or credential stuffing with no second factor required.',
    remediation: 'Create a Conditional Access policy requiring MFA for all privileged roles. Use Azure AD Privileged Identity Management (PIM) for just-in-time access.',
    code: `// Missing Conditional Access Policy for admins
// No policy found requiring MFA for:
// - Global Administrator
// - Security Administrator
// - Privileged Role Administrator`,
    fixedCode: `// FIXED — Conditional Access via PowerShell
$conditions = New-Object -TypeName Microsoft.Open.MSGraph.Model.ConditionalAccessConditionSet
$conditions.Users.IncludeRoles = @("62e90394-69f5-4237-9190-012177145e10") # Global Admin
$controls = New-Object -TypeName Microsoft.Open.MSGraph.Model.ConditionalAccessGrantControls
$controls.BuiltInControls = @("mfa")`,
  },
  {
    id: 'az-3',
    platform: 'Azure',
    severity: 'Medium',
    title: 'Azure SQL Database Audit Logging Disabled',
    description: 'Azure SQL Server "sql-prod-001" does not have auditing enabled, meaning database queries are not being logged.',
    risk: 'Cannot detect unauthorized access, data exfiltration, or SQL injection attempts. Fails compliance requirements for SOC 2, PCI DSS, and HIPAA.',
    remediation: 'Enable Azure SQL Auditing and send logs to a Log Analytics workspace. Retain logs for a minimum of 90 days.',
    code: `// VULNERABLE — Auditing state
az sql server audit-policy show \\
  --resource-group rg-prod \\
  --name sql-prod-001
// Output: "state": "Disabled"`,
    fixedCode: `// FIXED
az sql server audit-policy update \\
  --resource-group rg-prod \\
  --name sql-prod-001 \\
  --state Enabled \\
  --storage-account stgauditlogs \\
  --retention-days 90`,
  },
  // ── GCP ──────────────────────────────────────────────────────────────────
  {
    id: 'gcp-1',
    platform: 'GCP',
    severity: 'Critical',
    title: 'GCS Bucket is World-Writable',
    description: 'Cloud Storage bucket "gs://prod-uploads-12345" grants allUsers WRITE access.',
    risk: 'Anyone on the internet can upload, overwrite, or delete files — including using the bucket to host malware or exfiltrate data.',
    remediation: 'Remove allUsers and allAuthenticatedUsers IAM bindings. Use signed URLs or service account keys for authorized uploads.',
    code: `// VULNERABLE — Bucket IAM
gsutil iam get gs://prod-uploads-12345
// Returns:
{
  "role": "roles/storage.objectCreator",
  "members": ["allUsers"]
}`,
    fixedCode: `// FIXED — Remove public access
gsutil iam ch -d allUsers:objectCreator \\
  gs://prod-uploads-12345
// Enable uniform bucket-level access
gsutil uniformbucketlevelaccess set on \\
  gs://prod-uploads-12345`,
  },
  {
    id: 'gcp-2',
    platform: 'GCP',
    severity: 'High',
    title: 'GKE Cluster Has Legacy ABAC Enabled',
    description: 'Google Kubernetes Engine cluster "gke-prod-cluster" has Legacy Attribute-Based Access Control (ABAC) enabled.',
    risk: 'Legacy ABAC provides broader permissions than RBAC and can allow unauthorized access to Kubernetes resources.',
    remediation: 'Disable Legacy ABAC and enforce RBAC. Review and tighten all RBAC role bindings.',
    code: `// VULNERABLE — GKE cluster config
gcloud container clusters describe gke-prod-cluster \\
  --zone us-central1-a \\
  | grep legacyAbac
// Returns: enabled: true`,
    fixedCode: `// FIXED — Disable legacy ABAC
gcloud container clusters update gke-prod-cluster \\
  --zone us-central1-a \\
  --no-enable-legacy-authorization`,
  },
  // ── Terraform ──────────────────────────────────────────────────────────────
  {
    id: 'tf-1',
    platform: 'Terraform',
    severity: 'Critical',
    title: 'Hardcoded AWS Credentials in Terraform Config',
    description: 'AWS access key and secret found hardcoded in main.tf committed to version control.',
    risk: 'Credentials in source code will be exposed in git history, CI/CD logs, and to any developer with repo access. Can lead to full account compromise.',
    remediation: 'Remove credentials immediately. Rotate the exposed keys. Use IAM roles, environment variables, or AWS Secrets Manager. Use git-secrets or truffleHog to scan for secrets.',
    code: `// VULNERABLE — main.tf
provider "aws" {
  region     = "us-east-1"
  access_key = "AKIAIOSFODNN7EXAMPLE"
  secret_key = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
}`,
    fixedCode: `// FIXED — Use IAM role or env variables
provider "aws" {
  region = "us-east-1"
  # Credentials from environment:
  # AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
  # Or assume an IAM role
}`,
  },
  {
    id: 'tf-2',
    platform: 'Terraform',
    severity: 'High',
    title: 'RDS Instance Publicly Accessible',
    description: 'aws_db_instance resource has publicly_accessible = true and no VPC security group restrictions.',
    risk: 'Database is reachable from the public internet. Exposed to brute force, SQL injection, and data exfiltration.',
    remediation: 'Set publicly_accessible = false. Place the RDS instance in a private subnet. Use VPC security groups to restrict access to application tier only.',
    code: `// VULNERABLE — main.tf
resource "aws_db_instance" "prod" {
  publicly_accessible = true
  vpc_security_group_ids = []
  ...
}`,
    fixedCode: `// FIXED
resource "aws_db_instance" "prod" {
  publicly_accessible    = false
  db_subnet_group_name   = aws_db_subnet_group.private.name
  vpc_security_group_ids = [aws_security_group.app_to_db.id]
  storage_encrypted      = true
}`,
  },
  // ── Kubernetes ──────────────────────────────────────────────────────────────
  {
    id: 'k8s-1',
    platform: 'Kubernetes',
    severity: 'Critical',
    title: 'Container Running as Root',
    description: 'Pod specification does not set securityContext.runAsNonRoot = true, allowing containers to run as UID 0.',
    risk: 'If the container is compromised, the attacker has root privileges and may be able to escape the container sandbox and compromise the host node.',
    remediation: 'Set runAsNonRoot: true and runAsUser to a non-zero UID in the pod and container securityContext. Use a read-only root filesystem where possible.',
    code: `# VULNERABLE — deployment.yaml
spec:
  containers:
  - name: api
    image: myapp:latest
    # No securityContext defined`,
    fixedCode: `# FIXED
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    fsGroup: 2000
  containers:
  - name: api
    image: myapp:latest
    securityContext:
      readOnlyRootFilesystem: true
      allowPrivilegeEscalation: false`,
  },
  {
    id: 'k8s-2',
    platform: 'Kubernetes',
    severity: 'High',
    title: 'Kubernetes Dashboard Exposed Externally',
    description: 'The Kubernetes Dashboard service is exposed via a LoadBalancer service type without authentication.',
    risk: 'The dashboard provides full cluster management capabilities. Public exposure allows any attacker to enumerate and control cluster resources.',
    remediation: 'Change the service type to ClusterIP. Access the dashboard only via kubectl proxy or through an authenticated ingress with RBAC. Consider disabling the dashboard entirely.',
    code: `# VULNERABLE — dashboard-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: kubernetes-dashboard
spec:
  type: LoadBalancer
  ports:
  - port: 443`,
    fixedCode: `# FIXED — ClusterIP only, proxy access
apiVersion: v1
kind: Service
metadata:
  name: kubernetes-dashboard
spec:
  type: ClusterIP
  ports:
  - port: 443
# Access via: kubectl proxy
# Then: localhost:8001/api/v1/namespaces/...`,
  },
];

const PLATFORMS: Platform[] = ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes'];

const severityConfig: Record<Severity, { color: string; bg: string; border: string }> = {
  Critical: { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
  High: { color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  Medium: { color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
  Low: { color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' },
};

const platformColors: Record<Platform, string> = {
  AWS: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
  Azure: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  GCP: 'text-green-400 border-green-500/30 bg-green-500/10',
  Terraform: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
  Kubernetes: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
};

export default function CloudMisconfigDemo() {
  const [activePlatform, setActivePlatform] = useState<Platform | 'All'>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showFix, setShowFix] = useState<Record<string, boolean>>({});

  const filtered = activePlatform === 'All' ? FINDINGS : FINDINGS.filter(f => f.platform === activePlatform);

  const toggle = (id: string) => setExpandedId(expandedId === id ? null : id);
  const toggleFix = (id: string) => setShowFix(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950/40 to-black py-20">
      <div className="container-custom max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-primary-400 font-semibold text-xs uppercase tracking-widest mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
            Live Demo
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Cloud Misconfiguration Demo</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real-world misconfigurations we find across AWS, Azure, GCP, Terraform, and Kubernetes — with expert remediation steps.
          </p>
        </motion.div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {(['Critical', 'High', 'Medium', 'Low'] as Severity[]).map(s => {
            const count = FINDINGS.filter(f => f.severity === s).length;
            const cfg = severityConfig[s];
            return (
              <div key={s} className={`rounded-xl border ${cfg.border} ${cfg.bg} p-4 text-center`}>
                <div className={`text-2xl font-extrabold ${cfg.color}`}>{count}</div>
                <div className="text-white/50 text-xs mt-1">{s}</div>
              </div>
            );
          })}
        </div>

        {/* Platform filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(['All', ...PLATFORMS] as (Platform | 'All')[]).map(p => (
            <button
              key={p}
              onClick={() => setActivePlatform(p)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all
                ${activePlatform === p
                  ? 'bg-primary-500 border-primary-500 text-white'
                  : 'border-white/20 text-white/60 hover:text-white hover:border-white/40'
                }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Findings list */}
        <div className="space-y-4">
          <AnimatePresence>
            {filtered.map((finding) => {
              const sev = severityConfig[finding.severity];
              const isOpen = expandedId === finding.id;
              return (
                <motion.div
                  key={finding.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="glass-effect-lg rounded-xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggle(finding.id)}
                    className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className={`shrink-0 px-2.5 py-0.5 rounded text-xs font-bold border ${sev.bg} ${sev.border} ${sev.color}`}>
                      {finding.severity}
                    </span>
                    <span className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${platformColors[finding.platform]}`}>
                      {finding.platform}
                    </span>
                    <span className="flex-1 font-semibold text-white text-sm">{finding.title}</span>
                    <span className="text-white/40 text-xs">{isOpen ? '▲' : '▼'}</span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 border-t border-white/10 pt-4 space-y-4">
                          <div>
                            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Description</p>
                            <p className="text-white/75 text-sm">{finding.description}</p>
                          </div>
                          <div>
                            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Risk</p>
                            <p className="text-orange-300/80 text-sm">{finding.risk}</p>
                          </div>
                          <div>
                            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Remediation</p>
                            <p className="text-green-300/80 text-sm">{finding.remediation}</p>
                          </div>
                          {finding.code && (
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <button
                                  onClick={() => toggleFix(finding.id)}
                                  className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all ${showFix[finding.id] ? 'bg-green-500/20 border-green-500/40 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-400'}`}
                                >
                                  {showFix[finding.id] ? '✓ Showing Fix' : '⚠ Showing Vulnerable Code — Click for Fix'}
                                </button>
                              </div>
                              <pre className="bg-slate-950/80 border border-white/10 rounded-xl p-4 text-xs text-white/70 overflow-x-auto font-mono leading-relaxed">
                                {showFix[finding.id] ? finding.fixedCode : finding.code}
                              </pre>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-12 glass-effect-lg rounded-2xl p-8 text-center border border-primary-500/20">
          <h3 className="text-2xl font-bold text-white mb-3">Found in Your Cloud?</h3>
          <p className="text-white/60 mb-6">Our cloud security assessments identify these and hundreds more misconfigurations across your real environment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors">
              Request a Cloud Assessment
            </a>
            <a href="/cyber-risk-score" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors">
              Take the Risk Score Quiz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
