#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Removing firefox wrapper module"
rm -f /usr/local/bin/firefox
