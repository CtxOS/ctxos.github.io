import { Grid, Typography } from '@mui/material'

import {
  StyledHTBMainSponsorCard,
  StyledHTBMainSponsorPaper,
  StyledHTBMainSponsorTitle
} from './index.styles'

import HTBCube from 'assets/partners/hackthebox/htb-cube.svg'
import { openInNewTab } from 'src/utils/openInNewTab'

const HTBSection = () => {
  return (
    <Grid container item xs={12} md={9} alignItems="center" justifyContent="center" wrap="nowrap">
      <StyledHTBMainSponsorCard onClick={() => openInNewTab('https://www.hackthebox.com/')}>
        <StyledHTBMainSponsorPaper elevation={0}>
          <Typography variant="h5">Main sponsor</Typography>
          <Grid container>
            <Grid container item sm={6} xs={12}>
              <StyledHTBMainSponsorTitle variant="h2">Hack The Box</StyledHTBMainSponsorTitle>
              <Typography variant="body1">
                Hack The Box is an online platform providing labs and challenges for cyber security
                training. Users can improve their penetration testing skills and exchange ideas and
                methodologies with thousands of people in the security field. By employing several
                social and gamification elements Hack The Box makes the learning experience fun and
                rewarding.
              </Typography>
            </Grid>
            <Grid container item sm={6} xs={12}>
              <HTBCube />
            </Grid>
          </Grid>
        </StyledHTBMainSponsorPaper>
      </StyledHTBMainSponsorCard>
    </Grid>
  )
}

export default HTBSection
