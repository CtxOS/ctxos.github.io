import { Grid, Typography, Link } from '@mui/material'
import { useTheme } from '@mui/styles'
import { Prism, SyntaxHighlighterProps } from 'react-syntax-highlighter'
import { a11yLight, a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { NextPageExtended } from 'src/types'

const SyntaxHighlighter = Prism as unknown as React.FC<SyntaxHighlighterProps>

const Warrant: NextPageExtended = () => {
  const theme = useTheme()

  const codeStyle = (mode: 'light' | 'dark') =>
    mode === 'light'
      ? {
          ...a11yLight,
          ...{ hljs: { ...a11yLight.hljs, backgroundColor: theme.palette.background.paper } }
        }
      : {
          ...a11yDark,
          ...{ hljs: { ...a11yDark.hljs, backgroundColor: theme.palette.background.paper } }
        }

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        maxWidth: theme.breakpoints.values.xl,
        margin: '0 auto'
      }}
    >
      <Grid item xs={10} md={8} lg={6}>
        <Typography variant="h1" align="center" paragraph>
          Warrant Canary
        </Typography>
        <Typography variant="h5" paragraph>
          Signed with:
        </Typography>
        <SyntaxHighlighter language="plaintext" style={codeStyle(theme.palette.mode)}>
          {`Lorenzo "Palinuro" Faletra
GPG ID: B350 5059 3C2F 7656 40E6  DDDB 97CA A129 F4C6 B9A4
GPG KEY: https://deb.ctx.sh/mirrors/ctx/misc/canary/key/palinuro-2024.gpg
GPG KEY MIRROR: https://ctx.mirror.garr.it/ctx/misc/canary/key/palinuro-2024.gpg
GPG KEY MIRROR: https://mirrors.mit.edu/ctx/misc/canary/key/palinuro-2024.gpg
GPG KEY MIRROR: https://mirrors.tuna.tsinghua.edu.cn/ctx/misc/canary/key/palinuro-2024.gpg

Ctx Archive Keyring (2021-2024) [discontinued]
GPG ID: 8B40 60CA 69A9 7356 B2DC  F551 823B F07C EB5C 469B
GPG KEY: https://deb.ctx.sh/mirrors/ctx/misc/canary/key/ctx-2021.gpg
GPG KEY MIRROR: https://ctx.mirror.garr.it/ctx/misc/canary/key/ctx-2021.gpg
GPG KEY MIRROR: https://mirrors.mit.edu/ctx/misc/canary/key/ctx-2021.gpg
GPG KEY MIRROR: https://mirrors.tuna.tsinghua.edu.cn/ctx/misc/canary/key/ctx-2021.gpg

Ctx Archive Keyring (2024-2026) [new]
GPG ID: B711 8223 4655 2E4D 92DA  02DF 7A82 86AF 0E81 EE4A
GPG KEY: https://deb.ctx.sh/mirrors/ctx/misc/canary/key/ctx-2024.gpg
GPG KEY MIRROR: https://ctx.mirror.garr.it/ctx/misc/canary/key/ctx-2024.gpg
GPG KEY MIRROR: https://mirrors.mit.edu/ctx/misc/canary/key/ctx-2024.gpg
GPG KEY MIRROR: https://mirrors.tuna.tsinghua.edu.cn/ctx/misc/canary/key/ctx-2024.gpg
`}
        </SyntaxHighlighter>
        <Typography variant="h5" paragraph>
          Warrant Canary, November 04 2024
        </Typography>
        <SyntaxHighlighter language="plaintext" style={codeStyle(theme.palette.mode)}>
          {`-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512


Signed Warrant Canary n.6: no incidents or warrants as of November 04 2024


This page is to inform users that Ctx Security has NOT been served with a
secret government subpoena for its servers (Ctx Project, Ctx Security CIC,
Lorenzo Faletra or other directly involved partners), software
(Ctx OS and its official derivatives), or directly owned services
(community portals, git platform, email service, cryptpad service,
cloud platform, CDN nodes, hosted portals etc).

If a new warrant canary has not been updated in the time period specified by
Ctx Security, or if this page disappears, users are to assume that Ctx Project
has indeed been served with a secret subpoena.

The intention is to allow Ctx Security to warn users of the existence of a
subpoena passively, without disclosing to others that the government has sought
or obtained access to information or records under a secret subpoena.

Warrant Canaries have been found to be legal by the United States Justice Department,
so long as they are passive in their notifications.

This message is signed with the GPG keys of the Ctx OS archive keyring and
the Team Leader (and actual legal holder) of Ctx Security.

Every new canary update since July 10 2019 will be digitally signed, and older
versions of the canary will be made available in a public archive.



Special notes for canary n.6:
This canary is being released during a new project key rollout, which means that
the current repository key is up to expire and the new one has not been released
yet on the current ctx release. for this reason, this canary will be signed
with both the old key and the new one.

To better support key rollout, all key files will be given a new URL to take
their creation date into account and allow us to provide all versions of them
without further confusion.
All keys will be moved to the key folder and the year of creation will be appended
to the file name.


signed with:

Lorenzo "Palinuro" Faletra
GPG ID: B350 5059 3C2F 7656 40E6  DDDB 97CA A129 F4C6 B9A4
GPG KEY: https://deb.ctx.sh/mirrors/ctx/misc/canary/key/palinuro-2024.gpg
GPG KEY MIRROR: https://ctx.mirror.garr.it/ctx/misc/canary/key/palinuro-2024.gpg
GPG KEY MIRROR: https://mirrors.mit.edu/ctx/misc/canary/key/palinuro-2024.gpg
GPG KEY MIRROR: https://mirrors.tuna.tsinghua.edu.cn/ctx/misc/canary/key/palinuro-2024.gpg

Ctx Archive Keyring (2021-2024) [discontinued]
GPG ID: 8B40 60CA 69A9 7356 B2DC  F551 823B F07C EB5C 469B
GPG KEY: https://deb.ctx.sh/mirrors/ctx/misc/canary/key/ctx-2021.gpg
GPG KEY MIRROR: https://ctx.mirror.garr.it/ctx/misc/canary/key/ctx-2021.gpg
GPG KEY MIRROR: https://mirrors.mit.edu/ctx/misc/canary/key/ctx-2021.gpg
GPG KEY MIRROR: https://mirrors.tuna.tsinghua.edu.cn/ctx/misc/canary/key/ctx-2021.gpg

Ctx Archive Keyring (2024-2026) [new]
GPG ID: B711 8223 4655 2E4D 92DA  02DF 7A82 86AF 0E81 EE4A
GPG KEY: https://deb.ctx.sh/mirrors/ctx/misc/canary/key/ctx-2024.gpg
GPG KEY MIRROR: https://ctx.mirror.garr.it/ctx/misc/canary/key/ctx-2024.gpg
GPG KEY MIRROR: https://mirrors.mit.edu/ctx/misc/canary/key/ctx-2024.gpg
GPG KEY MIRROR: https://mirrors.tuna.tsinghua.edu.cn/ctx/misc/canary/key/ctx-2024.gpg


-----BEGIN PGP SIGNATURE-----

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
b4WYGbH3DjM34zq1RyB4/Vvv
=Mhkg
-----END PGP SIGNATURE-----`}
        </SyntaxHighlighter>
        <Typography variant="body1">
          <Link href="https://deb.ctx.sh/mirrors/ctx/misc/canary/warrant-canary-0.txt">
            Warrant Canary n.0
          </Link>
          {' - '}
          <Link href="https://cdn.palinuro.dev/canary/warrant-canary-0.txt">Mirror 1</Link>{' '}
          <Link href="https://palinuro.eu-central-1.linodeobjects.com/canary/warrant-canary-0.txt">
            Mirror 2
          </Link>{' '}
        </Typography>
        <Typography variant="body1">
          <Link href="https://deb.ctx.sh/mirrors/ctx/misc/canary/warrant-canary-1.txt">
            Warrant Canary n.1
          </Link>
          {' - '}
          <Link href="https://cdn.palinuro.dev/canary/warrant-canary-1.txt">Mirror 1</Link>{' '}
          <Link href="https://palinuro.eu-central-1.linodeobjects.com/canary/warrant-canary-1.txt">
            Mirror 2
          </Link>{' '}
        </Typography>
        <Typography variant="body1">
          <Link href="https://deb.ctx.sh/mirrors/ctx/misc/canary/warrant-canary-2.txt">
            Warrant Canary n.2
          </Link>
          {' - '}
          <Link href="https://cdn.palinuro.dev/canary/warrant-canary-2.txt">Mirror 1</Link>{' '}
          <Link href="https://palinuro.eu-central-1.linodeobjects.com/canary/warrant-canary-2.txt">
            Mirror 2
          </Link>{' '}
        </Typography>
        <Typography variant="body1">
          <Link href="https://deb.ctx.sh/mirrors/ctx/misc/canary/warrant-canary-3.txt">
            Warrant Canary n.3
          </Link>
          {' - '}
          <Link href="https://cdn.palinuro.dev/canary/warrant-canary-3.txt">Mirror 1</Link>{' '}
          <Link href="https://palinuro.eu-central-1.linodeobjects.com/canary/warrant-canary-3.txt">
            Mirror 2
          </Link>{' '}
        </Typography>
        <Typography variant="body1">
          <Link href="https://deb.ctx.sh/mirrors/ctx/misc/canary/warrant-canary-4.txt">
            Warrant Canary n.4
          </Link>
          {' - '}
          <Link href="https://cdn.palinuro.dev/canary/warrant-canary-4.txt">Mirror 1</Link>{' '}
          <Link href="https://palinuro.eu-central-1.linodeobjects.com/canary/warrant-canary-4.txt">
            Mirror 2
          </Link>{' '}
        </Typography>
        <Typography variant="body1">
          <Link href="https://deb.ctx.sh/mirrors/ctx/misc/canary/warrant-canary-5.txt">
            Warrant Canary n.5
          </Link>
          {' - '}
        </Typography>
        <Typography variant="body1">
          <Link href="https://deb.ctx.sh/ctx/misc/canary/warrant-canary-6.txt">
            Warrant Canary n.6
          </Link>
          {' - '}
          <Link href="https://ctx.mirror.garr.it/ctx/misc/canary/warrant-canary-6.txt">
            Mirror 1
          </Link>{' '}
          <Link href="https://mirrors.mit.edu/ctx/misc/canary/warrant-canary-6.txt">Mirror 2</Link>{' '}
          <Link href="https://mirrors.tuna.tsinghua.edu.cn/ctx/misc/canary//warrant-canary-6.txt">
            Mirror 3
          </Link>{' '}
        </Typography>
      </Grid>
    </Grid>
  )
}

Warrant.hideEllipses = true

export default Warrant
