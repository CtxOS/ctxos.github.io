#!/usr/bin/env bash
# fix-boot.sh - Re-register OpenCore in UEFI boot entries

DEVICE=${1:-/dev/nvme0n1}
PARTITION=${2:-1}
LABEL=${3:-"OpenCore"}

if ! command -v efibootmgr &> /dev/null; then
    echo "Error: efibootmgr not found."
    exit 1
fi

echo "Registering $LABEL on $DEVICE partition $PARTITION..."
efibootmgr -c -d "$DEVICE" -p "$PARTITION" -L "$LABEL" -l '\EFI\OC\OpenCore.efi'
