#!/usr/bin/env bash
# customize-rootfs.sh - Run inside the chroot to setup CtxOS
set -e

log() { echo -e "\033[0;32m[CHROOT]\033[0m $1"; }

# 1. Update and install basic tools
log "Installing basic utilities..."
apt-get update
apt-get install -y \
    python3-all python3-pydbus python3-webview \
    libadwaita-1-0 flatpak dbus policykit-1 \
    network-manager pciutils lsb-release sudo

# 2. Install CtxOS packages
log "Installing Software Center and Core tools..."
dpkg -i /tmp/*.deb || apt-get install -f -y

# 3. Configure branding
log "Applying OEM branding..."
# (Assuming branding files were copied)

# 4. Cleanup
log "Cleaning up..."
apt-get clean
rm -rf /var/lib/apt/lists/*
rm /tmp/*.deb
rm /tmp/customize-rootfs.sh
