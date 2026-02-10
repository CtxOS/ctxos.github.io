# CI/CD Pipeline Documentation

## Overview

The CtxOS project uses GitHub Actions for continuous integration and deployment. The pipeline includes automated testing, security scanning, code quality checks, and coverage reporting.

---

## Workflows

### 1. **CI Workflow** (`.github/workflows/ci.yml`)

Runs on every push and pull request to `main` and `develop` branches.

**Jobs:**

#### Python Tests
- Runs on Python 3.9, 3.10, and 3.11
- Executes pytest with coverage
- Uploads coverage to Codecov
- Runs pylint, flake8, and mypy

#### ShellCheck
- Lints all shell scripts
- Checks script permissions
- Ensures executable scripts have proper shebangs

#### Security Scan
- Runs Trivy vulnerability scanner
- Runs Bandit security linter for Python
- Uploads results to GitHub Security tab

#### Dependency Check
- Checks for vulnerable dependencies with Safety
- Audits packages with pip-audit
- Reports outdated packages

#### Build Packages
- Builds Debian packages
- Verifies package integrity
- Uploads build artifacts

#### Validate Modules
- Validates all `module.yaml` files
- Checks module structure
- Ensures required files exist

#### Documentation Checks
- Lints markdown files
- Checks for broken links

#### Quality Gate
- Summary job that depends on all checks
- Fails if any check fails

---

### 2. **Security Audit** (`.github/workflows/security-audit.yml`)

Runs weekly on Mondays at 9 AM UTC, or manually via workflow_dispatch.

**Jobs:**

#### Dependency Audit
- Runs Safety and pip-audit
- Generates JSON reports
- Uploads audit artifacts

#### Container Scan
- Builds Docker image
- Scans with Trivy
- Uploads results to GitHub Security

#### CodeQL Analysis
- Analyzes Python and JavaScript code
- Detects security vulnerabilities
- Uploads findings to Security tab

#### SBOM Generation
- Generates Software Bill of Materials
- Scans SBOM for vulnerabilities
- Uploads SBOM artifact

#### Secret Scan
- Runs Gitleaks for secret detection
- Runs TruffleHog for credential scanning
- Scans full git history

---

### 3. **Coverage Report** (`.github/workflows/coverage.yml`)

Runs on push to `main`/`develop` and on pull requests.

**Jobs:**

#### Coverage
- Runs tests with coverage
- Generates HTML and XML reports
- Creates coverage badges
- Comments coverage on PRs
- Enforces 70% minimum threshold

---

## Pre-commit Hooks

Install pre-commit hooks locally:

```bash
# Install pre-commit
pip install pre-commit

# Install hooks
pre-commit install

# Run manually
pre-commit run --all-files
```

**Hooks:**
- Trailing whitespace removal
- End-of-file fixer
- YAML validation
- Large file check
- Merge conflict detection
- Black code formatting
- Flake8 linting
- Import sorting (isort)
- ShellCheck
- YAML linting
- Markdown linting
- Bandit security checks
- Secret detection

---

## Coverage Requirements

**Minimum Coverage:** 70%

**Current Coverage:** Check latest CI run or:
```bash
source .venv/bin/activate
pytest --cov=. --cov-report=term-missing
```

**Coverage Reports:**
- Terminal: Shows missing lines
- HTML: `htmlcov/index.html`
- XML: `coverage.xml` (for CI tools)

---

## Security Scanning

### Trivy
Scans for:
- OS package vulnerabilities
- Python package vulnerabilities
- Container image vulnerabilities

### Bandit
Scans Python code for:
- Hardcoded passwords
- SQL injection risks
- Command injection
- Insecure functions

### Safety
Checks Python dependencies against:
- Known vulnerability database
- CVE database

### CodeQL
Advanced semantic analysis for:
- Security vulnerabilities
- Code quality issues
- Best practice violations

### Gitleaks & TruffleHog
Scans git history for:
- API keys
- Passwords
- Tokens
- Credentials

---

## Artifact Retention

**Build Artifacts:** 7 days
- Debian packages (`.deb` files)

**Security Reports:** 90 days (default)
- Trivy results
- Bandit reports
- Dependency audit reports
- SBOM files

**Coverage Reports:** 30 days
- HTML coverage reports
- Coverage badges

---

## Status Badges

Add to README.md:

```markdown
![CI](https://github.com/CtxOS/CtxOS/workflows/CI/badge.svg)
![Security Audit](https://github.com/CtxOS/CtxOS/workflows/Security%20Audit/badge.svg)
![Coverage](https://img.shields.io/codecov/c/github/CtxOS/CtxOS)
```

---

## Triggering Workflows

### Automatic Triggers
- **CI:** Every push and PR to main/develop
- **Security Audit:** Weekly on Mondays
- **Coverage:** Every push to main/develop and PRs

### Manual Triggers
```bash
# Via GitHub UI: Actions → Select workflow → Run workflow

# Via GitHub CLI
gh workflow run ci.yml
gh workflow run security-audit.yml
gh workflow run coverage.yml
```

---

## Debugging Failed Workflows

### View Logs
```bash
# List recent runs
gh run list

# View specific run
gh run view <run-id>

# Download logs
gh run download <run-id>
```

### Common Issues

#### Python Tests Failing
```bash
# Run locally
source .venv/bin/activate
pytest -v
```

#### ShellCheck Errors
```bash
# Run locally
shellcheck scripts/*.sh
```

#### Coverage Below Threshold
```bash
# Check current coverage
pytest --cov=. --cov-report=term-missing

# Add more tests to increase coverage
```

#### Security Vulnerabilities
```bash
# Check dependencies
safety check --file requirements-prod.txt

# Update vulnerable packages
pip install --upgrade <package>
```

---

## Best Practices

### Before Committing
1. Run pre-commit hooks: `pre-commit run --all-files`
2. Run tests locally: `pytest -v`
3. Check coverage: `pytest --cov=.`
4. Lint code: `flake8 software-center/backend/`

### Before Merging PR
1. Ensure all CI checks pass
2. Review security scan results
3. Check coverage hasn't decreased
4. Review code quality metrics

### Weekly Maintenance
1. Review security audit results
2. Update vulnerable dependencies
3. Check for outdated packages
4. Review SBOM for supply chain risks

---

## Performance Optimization

### Caching
- Pip packages cached between runs
- Reduces installation time by ~50%

### Matrix Strategy
- Python tests run in parallel across versions
- Reduces total runtime

### Artifact Uploads
- Only essential artifacts uploaded
- Reduces storage costs

---

## Future Enhancements

1. **Performance Testing**
   - Add benchmark tests
   - Track performance over time
   - Alert on regressions

2. **Integration Testing**
   - Test full system in containers
   - Test module installation
   - Test profile switching

3. **Release Automation**
   - Automatic version bumping
   - Changelog generation
   - GitHub release creation

4. **Deployment**
   - Auto-deploy to staging
   - Manual approval for production
   - Rollback capability

---

## Metrics Dashboard

Track these metrics over time:
- Test coverage percentage
- Number of security vulnerabilities
- Build success rate
- Average build time
- Code quality score

**Tools:**
- GitHub Insights
- Codecov dashboard
- Security tab
- Actions usage

---

## Support

**Issues with CI/CD?**
1. Check workflow logs in GitHub Actions
2. Review this documentation
3. Open an issue with `ci/cd` label
4. Contact DevOps team

**Security Alerts?**
1. Review Security tab in GitHub
2. Check Dependabot alerts
3. Review security-audit workflow results
4. Follow security response process
