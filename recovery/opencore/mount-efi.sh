#!/usr/bin/env bash
# mount-efi.sh - Find and mount EFI partition

DEVICE=${1:-/dev/nvme0n1p1}
MOUNT_POINT=${2:-/mnt/efi}

if [ ! -b "$DEVICE" ]; then
    echo "Error: Device $DEVICE not found."
    exit 1
fi

mkdir -p "$MOUNT_POINT"
mount "$DEVICE" "$MOUNT_POINT"
echo "EFI partition ($DEVICE) mounted at $MOUNT_POINT"
ls -F "$MOUNT_POINT"
