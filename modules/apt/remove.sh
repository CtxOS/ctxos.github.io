#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Removing apt module configurations"

if [ -f "/usr/local/bin/apt-ctxos" ]; then
    log "Removing apt-ctxos wrapper"
    rm -f "/usr/local/bin/apt-ctxos"
fi

if [ -f "/usr/local/bin/ctxos-upgrade" ]; then
    log "Removing ctxos-upgrade tool"
    rm -f "/usr/local/bin/ctxos-upgrade"
fi

if [ -f "/etc/apt/sources.list.d/ctxos.list" ]; then
    log "Removing CtxOS repository list"
    rm -f "/etc/apt/sources.list.d/ctxos.list"
fi

if [ -f "/usr/share/keyrings/ctxos.gpg" ]; then
    log "Removing CtxOS keyring"
    rm -f "/usr/share/keyrings/ctxos.gpg"
fi

if [ -f "/etc/apt/sources.list.bak" ]; then
    log "Restoring original sources.list"
    mv -f "/etc/apt/sources.list.bak" "/etc/apt/sources.list"
fi
