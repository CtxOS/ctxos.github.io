import { Grid, Typography, useTheme } from '@mui/material'

import SocialsSection from 'containers/CommunityContainers/CommunitySection'
import GetInvolvedSection from 'containers/ContributeContainers/GetInvolvedSection'
import { NextPageExtended } from 'src/types'

const Community: NextPageExtended = () => {
  const theme = useTheme()
  return (
    <Grid
      container
      sx={{
        marginTop: '100px !important',
        maxWidth: theme.breakpoints.values.xl,
        margin: '0 auto'
      }}
      justifyContent="center"
    >
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        alignItems="center"
        direction="column"
        wrap="nowrap"
      >
        <Typography variant="h1" align="center" paragraph>
          Join the Ctx Community
        </Typography>
        <Typography
          sx={{
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(6.5)
          }}
          variant="subtitle2Semi"
          align="center"
        >
          Meet cybersecurity enthusiasts united by privacy and open source
        </Typography>
      </Grid>
      <SocialsSection />
      <GetInvolvedSection />
    </Grid>
  )
}

Community.hideEllipses = true

export default Community
