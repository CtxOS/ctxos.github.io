import { Link, Typography, Grid, useMediaQuery } from '@mui/material'
import { Stack, useTheme } from '@mui/system'

import OSCard from 'components/OSCard'
import { OSIconVariant } from 'components/OSCard/index.styles'
import Debian from 'containers/HomeContainers/OSSection/assets/debian.svg'
import Docker from 'containers/HomeContainers/OSSection/assets/docker.svg'
import RISCV from 'containers/HomeContainers/OSSection/assets/RISC-V_ Stacked_Color.svg'
import WSL from 'containers/HomeContainers/OSSection/assets/wsl.svg'

export const AlternativeDownloadBlock = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <Typography variant="h3" align="center" sx={{ marginBottom: theme.spacing(5) }}>
        Alternative installation methods
      </Typography>

      <Grid item xs={12} md={9}>
        <Stack direction={isMobile ? 'column' : 'row'} spacing={4}>
          <OSCard
            Icon={Docker}
            iconVariant={OSIconVariant.Docker}
            title="Docker"
            link="https://ctx.run"
            isLinkCard
            buttonText="Link"
          >
            Pre-packaged Docker image of the Ctx operating system. Core and Security editions
            available.
          </OSCard>
          <OSCard
            Icon={Debian}
            iconVariant={OSIconVariant.Debian}
            title="Debian Conversion Script"
            link="https://github.com/ctxos/project/debian-conversion-script"
            isLinkCard
            buttonText="Link"
          >
            Quick script to convert an existing Debian installation to Ctx (all editions).
          </OSCard>
          <OSCard
            Icon={WSL}
            iconVariant={OSIconVariant.WSL}
            title="WSL"
            link="https://deb.ctx.sh/direct/ctx/iso/7.0/ctx-core_7.0.wsl.zip"
            isLinkCard
            buttonText="Download"
          >
            Feel the full power of our operating system running under Windows!{' '}
            <Link
              href="https://ctxos.github.io/docs/installation/install-with-wsl"
              underline="none"
            >
              Check out the documentation to learn more
            </Link>
            .
          </OSCard>
          <OSCard
            Icon={RISCV}
            iconVariant={OSIconVariant.WSL}
            title="RISC-V"
            link="https://deb.ctx.sh/ctx/iso/7.0/Ctx-core-7.0_riscv64.tar.xz"
            isLinkCard
            buttonText="Download"
          >
            The CtxOS rootfs in the Core Edition version, but for RISC‑V, enabling experimentation
            with this promising architecture.
          </OSCard>
        </Stack>
      </Grid>
    </>
  )
}
