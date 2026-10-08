#!/usr/bin/env bash

set -euo pipefail

PACKAGE="${1:?package name required}"
VERSION="${2:-1.0.0}"
ARCH="${3:-all}"

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PKG="${ROOT}/packages/${PACKAGE}"

rm -rf "${PKG}"
mkdir -p "${PKG}/DEBIAN" "${PKG}/usr/share/doc/${PACKAGE}"

cat > "${PKG}/DEBIAN/control" <<CONTROL
Package: ${PACKAGE}
Version: ${VERSION}
Section: base
Priority: optional
Architecture: ${ARCH}
Maintainer: CtxOS Team <maintainers@ctxos.github.io>
Description: ${PACKAGE}
 CtxOS package: ${PACKAGE}.
CONTROL

cat > "${PKG}/usr/share/doc/${PACKAGE}/README" <<README
${PACKAGE}

CtxOS package.
README

echo "Created ${PACKAGE} ${VERSION} ${ARCH}"
