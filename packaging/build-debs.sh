#!/usr/bin/env bash
set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/../scripts/log.sh"

PACKAGES=("debian-base-core" "debian-base-desktop" "debian-base-tools" "ctxos-keyring" "ctxos-repos" "ctxos-release")

mkdir -p build/debs

for pkg in "${PACKAGES[@]}"; do
    log "▶ Building $pkg..."
    if [ -d "$SCRIPT_DIR/deb/$pkg" ]; then
        if [ ! -f "$SCRIPT_DIR/deb/$pkg/DEBIAN/control" ]; then
            warn "No control file for $pkg, skipping."
            continue
        fi

        if [ -f "$SCRIPT_DIR/deb/$pkg/DEBIAN/postinst" ]; then
            chmod 755 "$SCRIPT_DIR/deb/$pkg/DEBIAN/postinst"
        fi

        dpkg-deb --build "$SCRIPT_DIR/deb/$pkg" "$SCRIPT_DIR/build/debs/${pkg}_1.0.0_all.deb"
    else
        warn "Directory deb/$pkg not found."
    fi
done

echo "Done! Packages are in build/debs/"
