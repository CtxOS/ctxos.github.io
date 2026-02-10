# CtxOS Modules

Modules are self-contained components that can be installed independently.

## Module Structure

Each module in `modules/` must have:

```
module-name/
├── module.yaml          # Metadata and dependencies
├── packages.txt         # Package list (one per line)
├── install.sh           # Installation script
├── remove.sh            # Removal script (optional)
├── test.sh              # Test script (optional)
└── files/               # Configuration templates
    ├── config-file      # Config to deploy
    └── apparmor/        # Security profiles
```

## module.yaml Format

```yaml
name: module-name
version: "1.0.0"
description: "What does this module do?"
maintainer: "Your Name <email@example.com>"

# Installation
order: 10                # Lower = install earlier
required: false          # Essential to profile?
conflicts: []            # Module names that conflict
depends: [core]          # Required modules (must install first)
provides: [service]      # What this module provides

# Features
config:
  interactive: false     # Ask user questions?
  autoload: true         # Auto-load on boot?

test:
  enabled: true
  script: test.sh
```

## Creating a Module

1. Copy template:
   ```bash
   cp -r modules/module-template modules/my-module
   ```

2. Edit `module.yaml`
3. List packages in `packages.txt`
4. Implement `install.sh`:
   ```bash
   #!/usr/bin/env bash
   set -e
   source ../../scripts/lib.sh
   source ../../scripts/lib-errors.sh

   log "Installing $(basename "$(pwd)")"

   set_error_context "module:install"
   require_command "apt-get"

   apt-get update
   apt-get install -y $(cat packages.txt)

   # Deploy configs
   [[ -d files ]] && for f in files/*; do
       install_file "$f" "/etc/$(basename "$f")"
   done
   ```

5. Implement `remove.sh`:
   ```bash
   #!/usr/bin/env bash
   set -e
   source ../../scripts/lib.sh

   log "Removing $(basename "$(pwd)")"
   apt-get remove -y $(cat packages.txt)
   ```

## Testing Your Module

```bash
cd modules/my-module
bash ./test.sh
```

## Validation

Ensure module.yaml is valid:
```bash
./scripts/validate-module.sh modules/my-module
```

## Module Dependencies

Modules can depend on other modules. The installation order is determined by:

1. **Explicit order** - The `order` field (lower numbers install first)
2. **Dependencies** - Modules listed in `depends` install before this module
3. **Conflicts** - Modules in `conflicts` cannot be installed together

Example dependency chain:
```
core (order: 1)
  ↓
networking (order: 10, depends: [core])
  ↓
web-server (order: 20, depends: [networking])
```

## Best Practices

### 1. Keep Modules Focused
Each module should do one thing well. Don't combine unrelated functionality.

**Good:** `python-dev` module installs Python development tools
**Bad:** `dev-tools` module installs Python, Node.js, Go, Rust, etc.

### 2. Declare All Dependencies
If your module needs another module, declare it in `depends`:

```yaml
depends: [core, networking]
```

### 3. Use Descriptive Names
Module names should be clear and follow conventions:
- Use lowercase with hyphens: `web-server`, not `WebServer`
- Be specific: `nginx-server`, not just `server`
- Avoid abbreviations unless standard: `ssh` is OK, `ws` is not

### 4. Test Thoroughly
Always implement `test.sh` to verify installation:

```bash
#!/usr/bin/env bash
set -e

# Check packages installed
dpkg -l | grep -q python3 || exit 1

# Check services running
systemctl is-active --quiet nginx || exit 1

# Check config files exist
[[ -f /etc/nginx/nginx.conf ]] || exit 1

echo "✓ All tests passed"
```

### 5. Handle Errors Gracefully
Use the error handling library:

```bash
source ../../scripts/lib-errors.sh

set_error_context "module:my-module:install"
require_command "apt-get"
require_file "packages.txt"

if ! apt-get update; then
    error_exit "$EXIT_NETWORK" "Failed to update package list"
fi
```

## Module Lifecycle

### Installation
1. Validate `module.yaml`
2. Check dependencies are installed
3. Check for conflicts
4. Run `install.sh`
5. Run `test.sh` (if enabled)
6. Mark module as installed

### Removal
1. Check if other modules depend on this one
2. Run `remove.sh`
3. Clean up configuration files
4. Mark module as removed

### Update
1. Run `remove.sh` (if exists)
2. Run `install.sh` with new version
3. Run `test.sh`

## Troubleshooting

### Module won't install
- Check `depends` are all installed
- Verify no `conflicts` are installed
- Check package names in `packages.txt` are correct
- Run `apt-cache search <package>` to verify availability

### Tests failing
- Check service status: `systemctl status <service>`
- Check logs: `journalctl -u <service>`
- Verify config files deployed: `ls -la /etc/`

### Dependency errors
- Ensure `order` values are correct
- Check circular dependencies
- Verify all dependencies exist

## Advanced Features

### Interactive Configuration
Set `interactive: true` in module.yaml and prompt user:

```bash
#!/usr/bin/env bash
source ../../scripts/lib.sh

if [[ "${INTERACTIVE:-false}" == "true" ]]; then
    read -p "Enter domain name: " DOMAIN
    sed -i "s/DOMAIN_PLACEHOLDER/$DOMAIN/g" files/config
fi
```

### Conditional Installation
Skip packages based on architecture or OS:

```bash
ARCH=$(dpkg --print-architecture)
if [[ "$ARCH" == "amd64" ]]; then
    apt-get install -y package-amd64
else
    apt-get install -y package-arm64
fi
```

### Post-Install Hooks
Run commands after installation:

```bash
# Enable and start service
systemctl enable my-service
systemctl start my-service

# Create user
useradd -r -s /bin/false myservice

# Set permissions
chown -R myservice:myservice /var/lib/myservice
```

## Contributing Modules

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines on contributing new modules to CtxOS.

## Examples

See existing modules for reference:
- `modules/core/` - Essential system packages
- `modules/networking/` - Network tools
- `modules/security/` - Security tools
- `modules/development/` - Development tools
