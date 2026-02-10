#!/usr/bin/env bash
set -e
source ../../scripts/lib.sh

log "Removing core configuration files"
rm -f /etc/sysctl.d/99-core.conf
rm -f /etc/security/limits.d/99-core.conf
rm -f /etc/sddm.conf.d/99-core.conf
rm -f /etc/skel/.zshrc
rm -f /root/.zshrc
