#!/usr/bin/env bash
set -e
source ../scripts/log.sh

log "### System Health Check ###"

log "--- Disk Usage ---"
df -h /

log "--- Failed Services ---"
systemctl list-units --state=failed

log "--- Boot Log Errors ---"
journalctl -p 3 -xb | head -n 10

log "--- Network Status ---"
ip addr show | grep 'state UP' -A 2
