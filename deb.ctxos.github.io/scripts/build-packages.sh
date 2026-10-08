#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="${ROOT}/build"

mkdir -p "${OUT}"

echo "Building CtxOS Debian packages..."

for package_dir in "${ROOT}"/packages/*; do
    [ -d "${package_dir}" ] || continue

    package="$(basename "${package_dir}")"

    echo
    echo "==> ${package}"

    # dpkg-deb requires sane directory permissions
    find "${package_dir}" -type d -exec chmod 755 {} +
    find "${package_dir}/DEBIAN" -maxdepth 1 -type f -exec chmod 644 {} +

    dpkg-deb --build \
        "${package_dir}" \
        "${OUT}/${package}.deb"
done

echo
echo "Packages:"
ls -lh "${OUT}"/*.deb 2>/dev/null || true
