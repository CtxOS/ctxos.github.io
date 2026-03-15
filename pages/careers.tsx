import { Grid, Typography, useTheme } from '@mui/material'

import JobsSection from 'containers/CareersContainers/JobsSection'
import PerksSection from 'containers/CareersContainers/PerksSection'
import GetInvolvedSection from 'containers/ContributeContainers/GetInvolvedSection'
import { NextPageExtended } from 'src/types'

const Careers: NextPageExtended = () => {
  const theme = useTheme()

  const headingSubTitle: object = {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6.5)
  }
  return (
    <Grid container sx={{ marginTop: '100px' }} justifyContent="center">
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
          Careers at CtxOS
        </Typography>
        <Typography sx={{ ...headingSubTitle }} variant="subtitle2Semi" align="center">
          Ctx Security (CtxOS) is a 10 years old Free and Open source GNU/Linux distribution based
          on <strong>Debian Stable</strong>. The system is designed to be familiar for the security
          expert and easy to use for the new entry student. To date, the operating system has more
          than 400.000 active users.
        </Typography>
        <Typography sx={{ ...headingSubTitle }} variant="h4" align="center" paragraph>
          Perks of working for an Open Source Project
        </Typography>
        <PerksSection />
        <Typography
          sx={{
            marginBlock: theme.spacing(8),
            [theme.breakpoints.down('md')]: {
              marginBlock: 50
            }
          }}
          variant="h2"
          align="center"
          paragraph
        >
          Open positions
        </Typography>
      </Grid>
      <JobsSection />
      <GetInvolvedSection />
    </Grid>
  )
}

Careers.hideEllipses = true

export default Careers
