#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Installing layout-switcher module"
if [ -s packages.txt ]; then
    apt-get install -y $(cat packages.txt)
fi

if [ -d "files" ] && [ "$(ls -A files)" ]; then
    log "Installing files for layout-switcher"
    # Add custom installation logic here
fi
