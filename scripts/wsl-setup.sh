#!/usr/bin/env bash
# wsl-setup.sh - Bootstrap the Debian Base Kit inside a WSL distribution
set -e

log() { echo -e "\033[0;32m[WSL-SETUP]\033[0m $1"; }

# 1. Check if running inside WSL
if ! grep -qi microsoft /proc/version; then
    echo "Warning: This script is intended for WSL. Running anyway..."
fi

# 2. Install dependencies
log "Installing dependencies..."
sudo apt-get update
sudo apt-get install -y \
    python3-all \
    python3-gi \
    python3-pydbus \
    python3-webview \
    libadwaita-1-0 \
    flatpak \
    dbus \
    policykit-1 \
    build-essential \
    devscripts \
    debhelper \
    pciutils

# 3. Handle systemd/dbus requirement
log "Configuring DBus for WSL..."
# In many WSL setups, systemd is not active. We ensure dbus can start manually.
sudo service dbus start || true

# 4. Install Software Center
log "Installing Software Center..."
cd software-center
sudo make install

# 5. GUI Guidance
log "✅ WSL Setup Complete!"
log ""
log "To run the Software Center GUI in WSL:"
log "1. Ensure you have WSLg (Windows 11) or an X Server like VcXsrv (Windows 10) installed."
log "2. Run: software-center-webview"
log ""
log "Note: System snapshots (Timeshift/Snapper) may require manual WSL disk management."
