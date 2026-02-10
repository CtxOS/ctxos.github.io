#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Removing menu module configurations"
if [ -f "/etc/dconf/db/local.d/90-ctxos-menu" ]; then
    log "Removing GNOME app-folder configuration"
    rm -f "/etc/dconf/db/local.d/90-ctxos-menu"
    
    if command -v dconf &> /dev/null; then
        dconf update
    fi
fi

if [ -f "/usr/share/desktop-directories/01-01-dns-analysis.directory" ]; then
    log "Removing custom desktop directories"
    rm -f "/usr/share/desktop-directories/01-01-dns-analysis.directory"
fi
