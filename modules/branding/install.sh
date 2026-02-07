#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Installing distro branding"

# Install OS identification files
install_file files/os-release /etc/os-release
install_file files/issue /etc/issue
install_file files/issue.net /etc/issue.net

# GRUB branding
if [ -d /etc/default/grub.d ]; then
    log "Applying GRUB branding"
    install_file files/grub/branding.cfg /etc/default/grub.d/99-branding.cfg
    if command -v update-grub &> /dev/null; then
        update-grub || true
    fi
elif [ -f /etc/default/grub ]; then
    log "Applying GRUB branding (legacy)"
    mkdir -p /etc/default/grub.d
    install_file files/grub/branding.cfg /etc/default/grub.d/99-branding.cfg
    if command -v update-grub &> /dev/null; then
        update-grub || true
    fi
fi
