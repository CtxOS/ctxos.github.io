# CtxOS Archive Signing Key

The repository must be signed with a dedicated CtxOS archive key.

Generate a key in a secure environment:

```bash
gpg --full-generate-key
```

Recommended:

- RSA 4096
- signing capability
- dedicated CtxOS archive identity
- long expiration or managed rotation

Export the public key:

```bash
gpg \
  --armor \
  --export YOUR_KEY_ID \
  > ctxos-archive-keyring.asc
```

Convert to a binary keyring:

```bash
gpg \
  --dearmor \
  < ctxos-archive-keyring.asc \
  > ctxos-archive-keyring.gpg
```

The private key must be stored outside GitHub Pages.

Use the `CTXOS_ARCHIVE_PRIVATE_KEY` GitHub Actions secret or a
dedicated signing environment.
