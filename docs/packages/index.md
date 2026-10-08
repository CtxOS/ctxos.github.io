# Packages and APT

The CtxOS package repository is:

https://deb.ctxos.github.io/

The repository contains CtxOS-specific Debian packages.

## APT source

```deb822
Types: deb
URIs: https://deb.ctxos.github.io
Suites: noble
Components: main
Architectures: amd64 arm64
Signed-By: /usr/share/keyrings/ctxos-archive-keyring.gpg
```

## Update

```bash
sudo apt update
```

## Install

```bash
sudo apt install ctxos-base
```
