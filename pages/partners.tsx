import { Grid, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/system'

import GetInvolvedSection from 'containers/ContributeContainers/GetInvolvedSection'
import CollaborationSection from 'containers/PartnersContainers/CollaborationsSection'
import HTBSection from 'containers/PartnersContainers/HTBSection'
import MirrorsSection from 'containers/PartnersContainers/MirrorsSection'
import SponsorSection from 'containers/PartnersContainers/SponsorSection'
import { NextPageExtended } from 'src/types'

const StyledHeadingSubTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: 18,
  [theme.breakpoints.down('md')]: {
    fontSize: 16
  },
  marginBottom: theme.spacing(6.5)
}))

const Partners: NextPageExtended = () => {
  const theme = useTheme()

  return (
    <Grid
      container
      sx={{
        marginTop: '100px',

        maxWidth: theme.breakpoints.values.xl,
        margin: '0 auto'
      }}
      justifyContent="center"
    >
      <Grid
        container
        direction="column"
        sx={{ paddingBottom: '20px' }}
        item
        xs={12}
        justifyContent="center"
      >
        <Typography variant="h1" align="center" paragraph>
          Our Partners
        </Typography>
        <StyledHeadingSubTitle variant="subtitle2Semi" align="center">
          All companies and organizations that have decided to invest in the project.
        </StyledHeadingSubTitle>
      </Grid>
      <HTBSection />
      <SponsorSection />
      <CollaborationSection />
      <MirrorsSection />
      <GetInvolvedSection />
    </Grid>
  )
}

Partners.hideEllipses = true

export default Partners
