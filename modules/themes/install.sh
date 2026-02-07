#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Installing themes module"
if [ -s packages.txt ]; then
    apt-get install -y $(cat packages.txt)
fi

if [ -d "files" ] && [ "$(ls -A files)" ]; then
    log "Installing files for themes"
    # Add custom installation logic here
fi
