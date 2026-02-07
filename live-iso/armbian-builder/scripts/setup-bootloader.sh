#!/usr/bin/env bash
# setup-bootloader.sh - Configure boot for specific architectures
set -e

ARCH=$1
ROOTFS_DIR=$2

log() { echo -e "\033[0;33m[BOOTLOADER]\033[0m $1"; }

case "$ARCH" in
    "aarch64")
        if [ -d "$ROOTFS_DIR/boot" ]; then
            log "Configuring Generic AArch64 / Raspberry Pi boot files..."
            # For Pi, we need to ensure firmware and config.txt are present
            # Normally these are provided by the base images or a specific package
            apt-get install -y raspi-firmware linux-image-raspi || true
        fi
        ;;
    "riscv64")
        log "Configuring RISC-V bootloader (u-boot/opensbi)..."
        apt-get install -y u-boot-menu || true
        ;;
    *)
        log "Using default GRUB/systemd-boot for $ARCH"
        ;;
esac
