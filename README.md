# CtxOS

Modular Linux Framework, Installer, and Distro Toolkit.

## Features
- **Modular Framework**: Build modern distributions from pre-engineered modules.
- **Enterprise-Grade Software Center**: DBus-backed management for APT, Profiles, and Flatpaks.
- **Self-Documenting & Product-Ready**: Includes a premium project portal to showcase your distro.
- **Meta-packages**: Turn modules into installable `.deb` packages.
- **Recovery Tools**: Built-in rescue and snapshot management scripts.

## Getting Started

### 🌐 Project Showcase
CtxOS provides a premium landing page template for your distribution.
To view the showcase, simply open `website/index.html` in your browser. It includes:
- Modern glassmorphism design.
- Animated feature showcases.
- Documentation and release orchestration highlights.

### Installation
To install the default (**base**) profile:
```bash
sudo make install
```

To install a specific profile (e.g., **server**, **desktop**, **rescue**):
```bash
sudo make install PROFILE=server
```

To uninstall a specific profile:
```bash
sudo make uninstall PROFILE=server
```

To install just a specific module:
```bash
sudo make module-core
```

### Building the ISO
Requires `live-build`:
```bash
make iso
```

### Creating Packages
```bash
make debs
```

## Repository Structure
- `docs/`: Detailed documentation.
- `modules/`: Individual system components (APT, Core, UI, etc.).
- `live-iso/`: OS build environment.
- `packaging/`: Logic for building meta-packages.
- `recovery/`: System check, rescue tools, and snapshot utilities.
- `scripts/`: Shared library functions for hunters.

## License
MIT
