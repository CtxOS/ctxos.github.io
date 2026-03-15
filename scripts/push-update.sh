#!/bin/bash
# CTX OS Build & GitHub Deploy Automation

REPO_DIR="/path/to/your/local/ctxos.github.io/repo" # Your local git clone
CODENAME="bookworm"

set -e

echo "📦 Step 1: Building the package..."
debuild -us -uc

DEB_FILE=$(ls -t ../ctxos-core*_all.deb | head -n 1)

echo "📥 Step 2: Adding to local repo via reprepro..."
# This signs the metadata using the GPG key you set up earlier
reprepro -b "$REPO_DIR/debian" includedeb "$CODENAME" "$DEB_FILE"

echo "📝 Step 3: Updating package index version..."
NEW_VERSION=$(dpkg-parsechangelog -S Version)
sed -i "s/ctxos-core_.*_all.deb/ctxos-core_${NEW_VERSION}_all.deb/g" "$REPO_DIR/packages/index.html"

echo "📤 Step 4: Pushing to GitHub Pages..."
cd "$REPO_DIR"
git add .
git commit -m "Update ctxos-core to version $(dpkg-parsechangelog -S Version)"
git push origin main

echo "✅ Success! Update is now live at https://ctxos.github.io/debian"
