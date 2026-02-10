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

        if [ -d "menu-icons/ctxos-common" ]; then
            log "Installing CtxOS common icons"
            mkdir -p /usr/share/icons/ctxos-common
            cp -r menu-icons/ctxos-common/* /usr/share/icons/ctxos-common/
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

    if [ -d "files/desktop-files" ] && [ "$(ls -A files/desktop-files)" ]; then
        log "Installing custom desktop files"
        mkdir -p /usr/share/applications
        cp files/desktop-files/*.desktop /usr/share/applications/
    fi
    if [ -f "files/menuexec" ]; then
        log "Installing menuexec wrapper"
        install_file "files/menuexec" /usr/local/bin/menuexec 755
    fi
    
    if [ -f "files/menuexecg" ]; then
        log "Installing menuexecg wrapper"
        install_file "files/menuexecg" /usr/local/bin/menuexecg 755
    fi
    
    if [ -f "files/servicexc" ]; then
        log "Installing servicexc wrapper"
        install_file "files/servicexc" /usr/local/bin/servicexc 755
    fi
    
    if [ -f "files/error_exit" ]; then
        log "Installing error_exit utility"
        install_file "files/error_exit" /usr/local/bin/error_exit 755
    fi
    
    if [ -f "files/ctxos-exec" ]; then
        log "Installing ctxos-exec wrapper"
        install_file "files/ctxos-exec" /usr/local/bin/ctxos-exec 755
    fi
    
    if [ -f "files/ctxos-ls" ]; then
        log "Installing ctxos-ls utility"
        install_file "files/ctxos-ls" /usr/local/bin/ctxos-ls 755
    fi
    
    if [ -f "files/launcher-updater" ]; then
        log "Installing launcher-updater"
        install_file "files/launcher-updater" /usr/local/bin/launcher-updater 755
    fi
fi

# Run launcher-updater to refresh desktop environment
if [ -f "/usr/local/bin/launcher-updater" ]; then
    log "Refreshing desktop environment..."
    /usr/local/bin/launcher-updater || warn "Failed to update launcher caches"
fi
