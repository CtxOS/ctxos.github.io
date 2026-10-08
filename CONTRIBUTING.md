# Contributing to CtxOS

Thank you for your interest in contributing to CtxOS.

## Getting Started

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Run tests and linting
5. Open a pull request

## Development Setup

```bash
git clone https://github.com/CtxOS/ctxos.github.io.git
cd ctxos.github.io
```

### Required Tools

- `shellcheck` for shell script linting
- `reprepro` for APT repository management
- `debhelper` for package builds
- `lintian` for package linting

## Code Style

- Shell scripts must pass `shellcheck`
- Packages must pass `lintian` with no errors
- Documentation is written in Markdown
- HTML must validate (W3C)

## Pull Requests

- Keep PRs focused on a single change
- Describe the motivation and approach
- Ensure CI passes before requesting review
- All commits must be signed off (`git commit -s`)

## Package Contributions

See `docs/development/` for package development guidelines.

## Security

See `SECURITY.md` for the vulnerability disclosure process.
