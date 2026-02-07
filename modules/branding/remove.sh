#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Removing distro branding (reverting to generic)"

# Revert to a basic Debian os-release if possible, else just remove
if [ -f /usr/lib/os-release ]; then
    cp /usr/lib/os-release /etc/os-release
else
    rm -f /etc/os-release
fi

rm -f /etc/issue
rm -f /etc/issue.net
rm -f /etc/default/grub.d/99-branding.cfg

if command -v update-grub &> /dev/null; then
    update-grub || true
fi
