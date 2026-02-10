#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Removing menu module configurations"
if [ -f "/etc/dconf/db/local.d/90-ctxos-menu" ]; then
    log "Removing GNOME app-folder configuration"
    rm -f "/etc/dconf/db/local.d/90-ctxos-menu"

    if command -v dconf &> /dev/null; then
        dconf update
    fi
fi

if [ -d "/usr/share/desktop-directories" ]; then
    log "Removing custom desktop directories"
    # Remove all ctxos-related directory files
    rm -f /usr/share/desktop-directories/01-*.directory
    rm -f /usr/share/desktop-directories/02-*.directory
    rm -f /usr/share/desktop-directories/03-*.directory
    rm -f /usr/share/desktop-directories/04-*.directory
    rm -f /usr/share/desktop-directories/05-*.directory
    rm -f /usr/share/desktop-directories/06-*.directory
    rm -f /usr/share/desktop-directories/07-*.directory
    rm -f /usr/share/desktop-directories/08-*.directory
    rm -f /usr/share/desktop-directories/09-*.directory
    rm -f /usr/share/desktop-directories/10-*.directory
    rm -f /usr/share/desktop-directories/11-*.directory
    rm -f /usr/share/desktop-directories/12-*.directory
    rm -f /usr/share/desktop-directories/13-*.directory
    rm -f /usr/share/desktop-directories/14-*.directory
    rm -f /usr/share/desktop-directories/Ctxos.directory
    rm -f /usr/share/desktop-directories/anon-surf.directory
    rm -f /usr/share/desktop-directories/cryptography.directory
    rm -f /usr/share/desktop-directories/ctxos-controllers.directory
    rm -f /usr/share/desktop-directories/privacy.directory
    rm -f /usr/share/desktop-directories/sandbox.directory
    rm -f /usr/share/desktop-directories/serv-*.directory
    rm -f /usr/share/desktop-directories/services.directory
    rm -f /usr/share/desktop-directories/top10.directory
fi

if [ -f "/usr/local/bin/menuexec" ]; then
    log "Removing menuexec wrapper"
    rm -f "/usr/local/bin/menuexec"
fi

if [ -f "/usr/local/bin/menuexecg" ]; then
    log "Removing menuexecg wrapper"
    rm -f "/usr/local/bin/menuexecg"
fi

if [ -f "/usr/local/bin/servicexc" ]; then
    log "Removing servicexc wrapper"
    rm -f "/usr/local/bin/servicexc"
fi

if [ -f "/usr/local/bin/error_exit" ]; then
    log "Removing error_exit utility"
    rm -f "/usr/local/bin/error_exit"
fi

if [ -f "/usr/local/bin/ctxos-exec" ]; then
    log "Removing ctxos-exec wrapper"
    rm -f "/usr/local/bin/ctxos-exec"
fi

if [ -f "/usr/local/bin/ctxos-ls" ]; then
    log "Removing ctxos-ls utility"
    rm -f "/usr/local/bin/ctxos-ls"
fi

if [ -f "/usr/local/bin/launcher-updater" ]; then
    log "Removing launcher-updater"
    rm -f "/usr/local/bin/launcher-updater"
fi

if [ -d "/usr/share/applications" ]; then
    log "Removing custom desktop files"
    # Remove all ctxos-related desktop files
    rm -f /usr/share/applications/ctxos-*.desktop
    rm -f /usr/share/applications/native-*.desktop
    rm -f /usr/share/applications/serv-*.desktop
fi
