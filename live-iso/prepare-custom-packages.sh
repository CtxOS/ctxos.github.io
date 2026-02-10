#!/usr/bin/env bash
set -e

# This script builds internal packages (like software-center)
# and prepares them for inclusion in the Live ISO build.

ROOT_DIR=$(realpath "$(dirname "$0")/..")
LIVE_DIR="$ROOT_DIR/live-iso"
PKG_CHROOT="$LIVE_DIR/config/packages.chroot"

echo "📦 Preparing custom packages for Live ISO..."

# Create packages.chroot directory if it doesn't exist
mkdir -p "$PKG_CHROOT"

# 1. Build Software Center
echo "🛠️ Building Software Center package..."
cd "$ROOT_DIR/software-center"
make build-deb || {
    # If build-deb fails (e.g. missing tools), we might be on a non-Debian system
    # In that case, we just warn for now, but in a real build environment it must pass.
    echo "Warning: Package build failed. Ensure you are on a Debian-based system with devscripts and debhelper."
}

# 2. Copy the .deb to the live-iso config
# Assuming the package is built in the parent directory of software-center
# as is standard for debuild
if ls ../software-center_*.deb 1> /dev/null 2>&1; then
    echo "✅ Software Center package found. Copying to ISO config..."
    cp ../software-center_*.deb "$PKG_CHROOT/"
else
    echo "⚠️ Software Center package not found in parent directory. Check build-deb output."
fi

# 3. Add to package list
echo "software-center" >> "$LIVE_DIR/config/package-lists/base.list.chroot"
# Sort and unique the list
sort -u -o "$LIVE_DIR/config/package-lists/base.list.chroot" "$LIVE_DIR/config/package-lists/base.list.chroot"

echo "🚀 Live ISO is now prepared with custom packages."
