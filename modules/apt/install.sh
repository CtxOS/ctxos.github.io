#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

# Repository configuration
REPO_DOMAIN="ctxos.github.io"
REPO_URL="https://${REPO_DOMAIN}"
KEY_URL="${REPO_URL}/ctxos.asc"

log "Installing apt module"
if [ -s packages.txt ]; then
    xargs -a packages.txt apt-get install -y
fi

# Skip repo setup in rescue profile
if [ "${PROFILE:-base}" != "rescue" ]; then
    log "Configuring CtxOS repository keys"
    if [ -f "files/keyrings/ctxos.gpg" ]; then
        install_file "files/keyrings/ctxos.gpg" /usr/share/keyrings/ctxos.gpg
    fi

    if [ -f "files/ctxos.list" ]; then
        # Try to reach the repository before adding it
        log "Verifying CtxOS repository connectivity..."
        if curl -Isf --connect-timeout 2 "$REPO_URL" > /dev/null; then
            install_file "files/ctxos.list" /etc/apt/sources.list.d/ctxos.list
            apt-get update -o Acquire::Retries=1 -o Acquire::http::Timeout="5" || warn "Repository update failed."
        else
            warn "CtxOS repository ($REPO_URL) is unreachable. Skipping repository activation."
            warn "You can manually enable it later by running: curl -sSL $KEY_URL | sudo bash"
        fi
    fi
fi

