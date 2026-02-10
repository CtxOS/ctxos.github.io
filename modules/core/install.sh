#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Installing core packages"
# Update is handled by apt module, but we do a quick refresh if needed
apt-get update -o Acquire::Retries=1 -o Acquire::http::Timeout="5" || warn "Standard repository update failed. Continuing anyway..."
if [ -s packages.txt ]; then
    while read -r pkg; do
        [ -z "$pkg" ] && continue
        log "  + $pkg"
        apt-get install -y "$pkg" || warn "Failed to install $pkg (skipping)"
    done < packages.txt
fi

if [ -d "files" ]; then
    for f in files/*; do
        if [ -f "$f" ]; then
            case $(basename "$f") in
                sysctl.conf)
                    install_file "$f" /etc/sysctl.d/99-core.conf
                    ;;
                limits.conf)
                    install_file "$f" /etc/security/limits.d/99-core.conf
                    ;;
                kde_settings.conf)
                    mkdir -p /etc/sddm.conf.d
                    install_file "$f" /etc/sddm.conf.d/99-core.conf
                    ;;
                zshrc)
                    install_file "$f" /etc/skel/.zshrc
                    install_file "$f" /root/.zshrc
                    ;;
            esac
        fi
    done
fi

if [ -d "files/apparmor" ]; then
    log "Installing AppArmor profiles"
    mkdir -p /etc/apparmor.d
    for p in files/apparmor/*; do
        if [ -f "$p" ]; then
            install_file "$p" "/etc/apparmor.d/$(basename "$p")"
        fi
    done
    if command -v apparmor_parser &> /dev/null; then
        log "Enabling AppArmor profiles..."
        for p in /etc/apparmor.d/*; do
            if [ -f "$p" ]; then
                apparmor_parser -r "$p" || true
            fi
        done
    fi
fi
