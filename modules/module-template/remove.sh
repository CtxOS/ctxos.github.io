#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh
source ../../scripts/lib-errors.sh

MODULE_NAME="$(basename "$(pwd)")"
set_error_context "module:$MODULE_NAME:remove"

log "Removing $MODULE_NAME"

if [ -s packages.txt ]; then
    log "Removing packages..."
    while read -r pkg; do
        [ -z "$pkg" ] && continue
        [[ "$pkg" =~ ^#.*$ ]] && continue

        log "  - $pkg"
        apt-get remove -y "$pkg" || warn "Failed to remove $pkg"
    done < packages.txt
fi

log "✓ $MODULE_NAME removed"
