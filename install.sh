#!/bin/bash
set -e

echo "Setting up CTX OS Repository..."

# Install dependencies
sudo apt-get update && sudo apt-get install -y curl gpg

# Download and install the GPG key
curl -sL https://ctxos.github.io/ctxos-archive-key.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/ctxos-archive-key.gpg > /dev/null

# Add the sources list
echo "deb [signed-by=/usr/share/keyrings/ctxos-archive-key.gpg] https://ctxos.github.io/debian bookworm main" | sudo tee /etc/apt/sources.list.d/ctx.list

# Update and install
sudo apt-get update
sudo apt-get install -y ctxos-core

echo "CTX OS Core Layer successfully installed!"
