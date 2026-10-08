# CtxOS APT Repository

Official Debian/Ubuntu package repository for CtxOS.

Repository:

https://deb.ctxos.github.io/

## APT

```deb822
Types: deb
URIs: https://deb.ctxos.github.io
Suites: noble
Components: main
Architectures: amd64 arm64
Signed-By: /usr/share/keyrings/ctxos-archive-keyring.gpg
```

## Packages

- ctxos-base
- ctxos-branding
- ctxos-desktop
- ctxos-installer

## Structure

- `conf/`: reprepro configuration
- `packages/`: Debian package skeletons
- `scripts/`: package, repository and release tooling
- `build/`: built `.deb` artifacts (gitignored)
- `public/`: published APT repository (gitignored)

## Security

Repository metadata is signed using the CtxOS archive signing key.
Private signing keys must never be committed to this repository.

## Repository split

This directory is a complete, standalone APT repository. To publish
it as its own GitHub Pages site, move it to a dedicated
`deb.ctxos.github.io` repository. The workflows in
`.github/workflows/` activate automatically once they live at the
repository root, and the deploy job runs only when the repository
name is `CtxOS/deb.ctxos.github.io`.
