#!/usr/bin/env bash
# lib.sh - General helper functions for ctxos

SCRIPTS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPTS_DIR/log.sh"
source "$SCRIPTS_DIR/require-root.sh"

install_file() {
    local src="$1"
    local dest="$2"
    local perms="${3:-644}"

    log "Installing $src to $dest"
    mkdir -p "$(dirname "$dest")"
    cp "$src" "$dest"
    chmod "$perms" "$dest"
}

check_pkg() {
    dpkg -l "$1" &> /dev/null
}
