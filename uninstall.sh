#!/usr/bin/env bash
set -e
source scripts/require-root.sh
source scripts/log.sh

PROFILE="${1:-base}"
PROFILE_FILE="profiles/$PROFILE.mk"

if [ ! -f "$PROFILE_FILE" ]; then
    error "Unknown profile: $PROFILE"
    exit 1
fi

log "Starting Debian Base Kit Uninstallation (Profile: $PROFILE)"

# Load profile
# shellcheck disable=SC1090
source "$PROFILE_FILE"

# Removal order (reverse of installation)
for m in $(echo "${MODULES}" | tr ' ' '\n' | tac); do
  if [ -d "modules/$m" ] && [ -f "modules/$m/remove.sh" ]; then
    log "▶ Removing module: $m"
    (cd "modules/$m" && bash ./remove.sh)
  fi
done

log "Uninstallation complete!"
