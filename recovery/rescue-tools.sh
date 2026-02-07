#!/usr/bin/env bash
set -e
source ../scripts/log.sh

log "Installing rescue tools..."
apt-get update
apt-get install -y \
  efibootmgr \
  os-prober \
  grub-efi \
  btrfs-progs \
  cryptsetup \
  gparted \
  testdisk \
  ddrescue
