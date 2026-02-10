#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Installing firefox wrapper module"

# Ensure zenity is installed for the error dialog
if [ -s packages.txt ]; then
    xargs -a packages.txt apt-get install -y
fi

if [ -f "files/firefox" ]; then
    install_file files/firefox /usr/local/bin/firefox 755
fi
