#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PUBLIC="${ROOT}/public"
DIST="${DIST:-noble}"

if ! command -v reprepro >/dev/null 2>&1; then
    echo "error: reprepro is required"
    echo
    echo "Install with:"
    echo "  sudo apt install reprepro"
    exit 1
fi

mkdir -p "${PUBLIC}"
cp -a "${ROOT}/conf" "${PUBLIC}/"

cd "${PUBLIC}"

echo "Creating CtxOS APT repository..."

for deb in "${ROOT}"/build/*.deb; do
    [ -f "${deb}" ] || continue

    echo "Including: ${deb}"

    reprepro \
        -b "${PUBLIC}" \
        includedeb "${DIST}" "${deb}"
done

echo
echo "Repository generated:"
find "${PUBLIC}/dists" -maxdepth 3 -type f | sort
