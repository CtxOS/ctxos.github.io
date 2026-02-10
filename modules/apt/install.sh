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
    
    if [ -f "files/sources.list.ctxos" ]; then
        log "Configuring system sources.list"
        if [ ! -f /etc/apt/sources.list.bak ] && [ -f /etc/apt/sources.list ]; then
            log "Backing up original sources.list to sources.list.bak"
            mv /etc/apt/sources.list /etc/apt/sources.list.bak
        fi
        install_file "files/sources.list.ctxos" /etc/apt/sources.list
    fi
fi

if [ -f "files/apt-ctxos" ]; then
    log "Installing apt-ctxos wrapper"
    install_file "files/apt-ctxos" /usr/local/bin/apt-ctxos 755
fi

if [ -f "files/ctxos-upgrade" ]; then
    log "Installing ctxos-upgrade tool"
    install_file "files/ctxos-upgrade" /usr/local/bin/ctxos-upgrade 755
fi


