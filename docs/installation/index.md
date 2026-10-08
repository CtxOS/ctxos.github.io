# Installation

## 1. Download

Download a release ISO:

https://ctxos.github.io/iso/

## 2. Verify

Verify the ISO checksum:

```bash
sha256sum -c SHA256SUMS
```

Verify the release signature where a signed checksum file is provided.

## 3. Create bootable media

Example:

```bash
sudo dd \
    if=ctxos.iso \
    of=/dev/sdX \
    bs=4M \
    status=progress \
    conv=fsync
```

Replace `/dev/sdX` with the correct USB device.

## 4. Boot

Boot the machine from the CtxOS USB device and follow the installer.
