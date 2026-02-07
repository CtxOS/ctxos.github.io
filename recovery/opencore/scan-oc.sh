#!/usr/bin/env bash
# scan-oc.sh - Scan for OpenCore installations

MOUNT_POINT=${1:-/mnt/efi}

if [ ! -d "$MOUNT_POINT/EFI/OC" ]; then
    echo "No OpenCore installation found at $MOUNT_POINT/EFI/OC"
    exit 1
fi

echo "OpenCore found at $MOUNT_POINT/EFI/OC"
echo "--- Drivers ---"
ls "$MOUNT_POINT/EFI/OC/Drivers"
echo "--- Kexts ---"
ls "$MOUNT_POINT/EFI/OC/Kexts"
echo "--- ACPI ---"
ls "$MOUNT_POINT/EFI/OC/ACPI"
