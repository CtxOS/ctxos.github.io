#!/usr/bin/env bash

set -euo pipefail

VERSION="${1:?version required}"

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "Preparing CtxOS repository release ${VERSION}"

mkdir -p "${ROOT}/releases"

cat > "${ROOT}/releases/${VERSION}.json" <<JSON
{
  "project": "CtxOS",
  "version": "${VERSION}",
  "repository": "https://deb.ctxos.github.io/",
  "distribution": "noble",
  "architectures": [
    "amd64",
    "arm64"
  ]
}
JSON

echo "Created releases/${VERSION}.json"
