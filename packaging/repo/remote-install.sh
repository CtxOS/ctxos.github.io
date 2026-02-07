#!/usr/bin/env bash
# remote-install.sh - One-line installer for users
set -e

# --- Configuration (User should update these) ---
REPO_DOMAIN="repo.debian-base-kit.org"
KEY_URL="https://${REPO_DOMAIN}/debian-base-kit.asc"
REPO_URL="https://${REPO_DOMAIN}"
DISTRO="bookworm"
COMPONENT="main"
# ------------------------------------------------

log() { echo -e "\033[0;32m[INSTALL]\033[0m $1"; }

if [[ $EUID -ne 0 ]]; then
   echo "Please run as root (sudo)"
   exit 1
fi

log "Downloading distribution GPG key..."
curl -fsSL "$KEY_URL" | gpg --dearmor -o /usr/share/keyrings/debian-base-kit.gpg

log "Adding repository to sources..."
echo "deb [signed-by=/usr/share/keyrings/debian-base-kit.gpg] $REPO_URL $DISTRO $COMPONENT" \
    > /etc/apt/sources.list.d/debian-base-kit.list

log "Updating package lists..."
apt-get update

log "✅ Debian Base Kit repository is now active."
log "You can now run: apt install debian-base-core"
