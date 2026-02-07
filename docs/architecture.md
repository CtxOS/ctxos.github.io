# Architecture of Debian Base Kit

The toolkit is designed as a modular framework for building and maintaining Debian-based systems.

## Component Overview

### 1. Modules (`modules/`)
Each module is a standalone directory that handles a specific aspect of the system (e.g., networking, desktop environment, development tools).
- `packages.txt`: List of dependencies.
- `install.sh`: Logic to install packages and apply configurations.
- `remove.sh`: Logic to revert changes.
- `files/`: Configuration templates.

### 2. Live ISO Pipeline (`live-iso/`)
Uses Debian's `live-build` to generate custom images. Modules can be injected into the `config/includes.chroot` directory to pre-configure the live environment.

### 3. Packaging (`packaging/`)
Converts modular configurations into Debian meta-packages. This allows users to manage their custom distribution additions via `apt`.

### 4. Recovery & Rescue (`recovery/`)
Specialized scripts for system troubleshooting, focusing on modern UEFI and OpenCore environments.
