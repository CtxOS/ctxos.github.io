#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "Verifying CtxOS packages..."

for deb in "${ROOT}"/build/*.deb; do
    [ -f "${deb}" ] || continue

    echo
    echo "==> ${deb}"

    dpkg-deb --info "${deb}"
    dpkg-deb --contents "${deb}" >/dev/null
done

echo
echo "Verification complete."
