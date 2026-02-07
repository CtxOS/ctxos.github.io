#!/usr/bin/env bash
set -e
source ../scripts/log.sh

PACKAGES=("debian-base-core" "debian-base-desktop" "debian-base-tools")

mkdir -p build/debs

for pkg in "${PACKAGES[@]}"; do
    log "▶ Building $pkg..."
    if [ -d "deb/$pkg" ]; then
        # Ensure DEBIAN/control exists
        if [ ! -f "deb/$pkg/DEBIAN/control" ]; then
            warn "No control file for $pkg, skipping."
            continue
        fi
        
        # Ensure correct permissions for maintenance scripts
        if [ -f "deb/$pkg/DEBIAN/postinst" ]; then
            chmod 755 "deb/$pkg/DEBIAN/postinst"
        fi
        
        # Build the package
        dpkg-deb --build "deb/$pkg" "build/debs/${pkg}_1.0.0_all.deb"
    else
        warn "Directory deb/$pkg not found."
    fi
done

echo "Done! Packages are in build/debs/"
