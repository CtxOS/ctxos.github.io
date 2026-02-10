# Module Template

This is a template for creating new CtxOS modules.

## Quick Start

1. Copy this directory: `cp -r module-template my-module`
2. Edit `module.yaml` with your module details
3. List packages in `packages.txt`
4. Customize `install.sh` if needed
5. Add tests to `test.sh`
6. Test your module: `cd my-module && bash test.sh`

## Files

- **module.yaml** - Module metadata and configuration
- **packages.txt** - List of packages to install (one per line)
- **install.sh** - Installation script
- **remove.sh** - Removal script
- **test.sh** - Test script
- **files/** - Configuration files to deploy

## Example

For a Python development module:

```yaml
# module.yaml
name: python-dev
version: "1.0.0"
description: "Python development tools"
maintainer: "CtxOS Team <team@ctxos.org>"
order: 20
depends: [core]
```

```
# packages.txt
python3
python3-dev
python3-pip
python3-venv
```

See [docs/modules/README.md](../../docs/modules/README.md) for complete documentation.
