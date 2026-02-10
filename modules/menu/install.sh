#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Installing menu module"
if [ -s packages.txt ]; then
    xargs -a packages.txt apt-get install -y
fi

if [ -d "files" ] && [ "$(ls -A files)" ]; then
    if [ -f "build-icons.py" ] && [ -d "menu-icons/hicolor/256x256/apps" ]; then
        log "Generating and installing menu icons"
        python3 build-icons.py || warn "Failed to generate icons"
        
        if [ -d "menu-icons/hicolor" ]; then
            mkdir -p /usr/share/icons/hicolor
            cp -r menu-icons/hicolor/* /usr/share/icons/hicolor/
            if command -v gtk-update-icon-cache &> /dev/null; then
                gtk-update-icon-cache -f -t /usr/share/icons/hicolor || true
            fi
        fi
    fi

    if [ -f "files/90-ctxos-menu" ]; then
        log "Installing GNOME app-folder configuration"
        # Ensure dconf profile exists
        if [ -f "files/user" ]; then
            install_file "files/user" /etc/dconf/profile/user
        fi
        
        # Install database keyfile
        mkdir -p /etc/dconf/db/local.d
        install_file "files/90-ctxos-menu" /etc/dconf/db/local.d/90-ctxos-menu
        
        # Update dconf database
        if command -v dconf &> /dev/null; then
            dconf update
        else
            warn "dconf command not found. GNOME settings may not be applied until installed."
        fi
    fi
    
    if [ -d "files/desktop-directories" ]; then
        log "Installing custom desktop directories"
        mkdir -p /usr/share/desktop-directories
        cp files/desktop-directories/*.directory /usr/share/desktop-directories/
    fi
fi
