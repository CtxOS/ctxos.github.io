# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.x     | Yes       |
| < 1.0   | No        |

## Reporting a Vulnerability

Please report security vulnerabilities privately.

**Do not open a public issue.**

Use GitHub's private vulnerability reporting or contact the security team at:

```
security@ctxos.github.io
```

Include:

- Description of the vulnerability
- Steps to reproduce
- Affected versions
- Potential impact

## Response Timeline

- Acknowledgment: within 72 hours
- Initial assessment: within 7 days
- Fix or mitigation: as soon as practicable

## Scope

- CtxOS operating system
- CtxOS APT repository (`deb.ctxos.github.io`)
- CtxOS website (`ctxos.github.io`)
- CtxOS packages and ISO images

## Out of Scope

- Third-party packages not maintained by CtxOS
- Issues in upstream Ubuntu packages
- Physical access attacks

## Archive Key Compromise

If the CtxOS archive signing key is compromised:

1. Revoke the compromised key immediately
2. Generate a new key
3. Publish the new keyring package
4. Sign all repository metadata with the new key
5. Publish a security advisory
6. Notify users through all channels
