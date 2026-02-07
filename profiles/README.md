# Profiles

Profiles define the "personality" of the system by selecting specific modules to install.

## Available Profiles

- **base**: Minimal core system with basic tools and Zsh.
- **server**: Base + storage management and auto-updaters.
- **desktop**: Base + UI components, themes, and menu systems.
- **rescue**: Bare minimum for system recovery.

## Usage

To install a specific profile:
```bash
sudo make install PROFILE=server
```

To create an ISO based on a profile (planned):
```bash
PROFILE=desktop make iso
```
