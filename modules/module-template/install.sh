#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh
source ../../scripts/lib-errors.sh

MODULE_NAME="$(basename "$(pwd)")"
set_error_context "module:$MODULE_NAME:install"

log "Installing $MODULE_NAME"

# Update package list
require_command "apt-get"
apt-get update -qq || error_exit "$EXIT_NETWORK" "Failed to update package list"

# Install packages from packages.txt
if [ -s packages.txt ]; then
    log "Installing dependencies..."
    while read -r pkg; do
        [ -z "$pkg" ] && continue
        [[ "$pkg" =~ ^#.*$ ]] && continue  # Skip comments

        log "  + $pkg"
        apt-get install -y "$pkg" || error_exit "$EXIT_DEPENDENCY" \
            "Failed to install: $pkg" \
            "Check package name and repository configuration"
    done < packages.txt
fi

# Deploy configuration files
if [ -d "files" ]; then
    log "Deploying configuration files..."
    for f in files/*; do
        if [ -f "$f" ]; then
            target="/etc/$(basename "$f")"
            log "  → $target"
            install_file "$f" "$target"
        fi
    done
fi

log "✓ $MODULE_NAME installed successfully"
