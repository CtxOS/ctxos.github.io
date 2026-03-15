import { Grid, Stack, Typography, useTheme } from '@mui/material'

import {
  StyledSponsorBunnyLogo,
  StyledSponsorCaidoLogo,
  StyledSponsorCard,
  StyledSponsorPaper
} from './index.styles'

import { StyledJetbrainsImage } from 'containers/HomeContainers/PartnerSection/index.styles'
import { openInNewTab } from 'src/utils/openInNewTab'

const SponsorSection = () => {
  const theme = useTheme()

  return (
    <Grid container item xs={12} md={9}>
      {/* BunnyCDN */}
      <Grid container item xs={12} alignItems="center" justifyContent="center" wrap="nowrap">
        <Stack direction="row" spacing={2}>
          <Grid item xs={12} justifyContent="center">
            <StyledSponsorCard onClick={() => openInNewTab('https://bunny.net?ref=ppalfbefw3')}>
              <StyledSponsorPaper elevation={0}>
                <Typography variant="h4" gutterBottom>
                  BunnyCDN
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Typography variant="subtitle2">
                    BunnyCDN is a private and fast content distribution network used to boost the
                    download of the Ctx system. Go faster than the fastest with the next-generation
                    CDN, edge storage, and optimization service.
                  </Typography>
                  <StyledSponsorBunnyLogo />
                </Stack>
              </StyledSponsorPaper>
            </StyledSponsorCard>
          </Grid>
        </Stack>
      </Grid>
      {/* Caido */}
      <Grid
        container
        item
        xs={12}
        alignItems="center"
        justifyContent="center"
        wrap="nowrap"
        sx={{ marginTop: theme.spacing(2) }}
      >
        <Stack direction="row" spacing={2}>
          <Grid item xs={12} justifyContent="center">
            <StyledSponsorCard onClick={() => openInNewTab('https://caido.io/')}>
              <StyledSponsorPaper elevation={0}>
                <Typography variant="h4" gutterBottom>
                  Caido
                </Typography>
                <Stack direction="row" spacing={10}>
                  <Typography variant="subtitle2">
                    A lightweight web security auditing toolkit. Caido aims to help security
                    professionals and enthusiasts audit web applications with efficiency and ease.
                  </Typography>
                  <StyledSponsorCaidoLogo />
                </Stack>
              </StyledSponsorPaper>
            </StyledSponsorCard>
          </Grid>
        </Stack>
      </Grid>
      <Grid
        container
        item
        xs={12}
        alignItems="center"
        justifyContent="center"
        wrap="nowrap"
        sx={{ marginTop: theme.spacing(2) }}
      >
        <Stack direction="row" spacing={2}>
          <Grid item xs={12} justifyContent="center">
            <StyledSponsorCard onClick={() => openInNewTab('https://www.jetbrains.com/')}>
              <StyledSponsorPaper elevation={0}>
                <Typography variant="h4" gutterBottom>
                  JetBrains
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Typography variant="subtitle2">
                    JetBrains is a leading software development company known for creating
                    intelligent, productivity-boosting tools for developers. Their popular IDEs,
                    like IntelliJ IDEA and PyCharm, streamline coding across multiple languages and
                    platforms.
                  </Typography>
                  <StyledJetbrainsImage />
                </Stack>
              </StyledSponsorPaper>
            </StyledSponsorCard>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default SponsorSection
