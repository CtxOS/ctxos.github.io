# CtxOS Development

## Project architecture

```text
Ubuntu
  │
  ├── Ubuntu packages
  │
  ▼
CtxOS packages
  │
  ├── ctxos-base
  ├── ctxos-branding
  ├── ctxos-desktop
  └── ctxos-installer
  │
  ▼
CtxOS ISO
```

## Repository infrastructure

The CtxOS package repository uses:

* Debian packages
* APT metadata
* InRelease
* Release
* Release.gpg
* archive signing
* GitHub Actions
* GitHub Pages

## Build

See the ISO build repository and package build workflows.
