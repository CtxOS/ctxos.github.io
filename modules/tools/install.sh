#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Installing tools module"
if [ -s packages.txt ]; then
    for pkg in $(cat packages.txt); do
        apt-get install -y "$pkg" || warn "Failed to install $pkg, skipping"
    done
fi

if [ -d "files" ] && [ "$(ls -A files)" ]; then
    log "Installing files for tools"
    # Add custom installation logic here
fi
