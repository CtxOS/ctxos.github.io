#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Installing apt module"
if [ -s packages.txt ]; then
    xargs -a packages.txt apt-get install -y
fi

# Skip repo setup in rescue profile
if [ "${PROFILE:-base}" != "rescue" ]; then
    log "Configuring CtxOS repository"
    if [ -f "files/keyrings/ctxos.gpg" ]; then
        install_file "files/keyrings/ctxos.gpg" /usr/share/keyrings/ctxos.gpg
    fi
    if [ -f "files/ctxos.list" ]; then
        install_file "files/ctxos.list" /etc/apt/sources.list.d/ctxos.list
    fi
    apt-get update
fi

