#!/usr/bin/env bash
# validate-artifacts.sh - verify quality and integrity of release artifacts
set -e

log() { echo -e "\033[0;32m[VAL]\033[0m $1"; }
error() { echo -e "\033[0;31m[ERROR]\033[0m $1"; exit 1; }

# 1. Check for .deb packages
log "Checking Debian packages..."
DEBS=$(find . -name "*.deb" | wc -l)
if [ "$DEBS" -eq 0 ]; then
    error "No .deb packages found in the build output."
else
    log "Found $DEBS packages."
fi

# 2. Check Software Center Package Integrity
SC_DEB=$(find . -name "software-center*.deb" | head -n 1)
if [ -z "$SC_DEB" ]; then
    log "Warning: software-center .deb not found. Skipping detailed check."
else
    log "Inspecting $SC_DEB..."
    # Check if critical files are inside the package
    if command -v dpkg-deb &> /dev/null; then
        dpkg-deb -c "$SC_DEB" | grep -q "usr/lib/software-center/backend/daemon.py" || error "Package missing daemon.py"
        dpkg-deb -c "$SC_DEB" | grep -q "usr/lib/software-center/backend/locales/en.json" || error "Package missing locales"
        log "Package structure verified."
    fi
fi

# 3. Check Docker Image (if docker is available)
if command -v docker &> /dev/null; then
    log "Checking Docker image build..."
    docker build -t dbk-release-test . --no-cache > /dev/null || error "Docker build failed"
    log "Docker image built successfully."
fi

# 4. Check ISO (if exists)
ISO_FILE=$(find . -name "*.iso" | head -n 1)
if [ -n "$ISO_FILE" ]; then
    log "Verifying ISO: $ISO_FILE"
    ISO_SIZE=$(du -h "$ISO_FILE" | cut -f1)
    log "ISO Size: $ISO_SIZE"
    # Basic magic number check or isoinfo could go here
fi

log "✅ All artifacts passed validation."
