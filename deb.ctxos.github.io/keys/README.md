# CtxOS Archive Signing Key

## Current Key

- **Fingerprint:** `9B408D5C45A2F0A3D310A58DD331A9616D78B67E`
- **Key ID:** `34D17F82D77F597D`
- **Type:** RSA 4096 (signing)
- **Identity:** CtxOS Archive Signing <archive@ctxos.github.io>
- **Expires:** 2028-10-08

## Files

- `ctxos-archive-keyring.asc` — ASCII-armored public key
- `ctxos-archive-keyring.gpg` — Binary keyring (installed by `ctxos-keyring` package)

## Private Key

The private key is stored as the `CTXOS_ARCHIVE_PRIVATE_KEY` GitHub Actions secret.
It is never committed to this repository.

## Key Rotation

1. Generate a new key with signing capability
2. Publish the new public key in `ctxos-keyring`
3. Sign repository metadata with both keys during transition
4. Remove old key after all clients have updated
5. Publish a security advisory
