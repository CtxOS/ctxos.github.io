import { Grid, Typography, Link, useTheme } from '@mui/material'
import { styled } from '@mui/system'

import UserCard from 'components/UserCard'
import data from 'components/UserCard/team'
import GetInvolvedSection from 'containers/ContributeContainers/GetInvolvedSection'
import ActiveContributors from 'containers/TeamContainers/ActiveContributorsSection'
import PastContributors from 'containers/TeamContainers/PastContributorsSection'
import SpecialThanks from 'containers/TeamContainers/SpecialThanksSection'
import { NextPageExtended } from 'src/types'

const StyledHeadingSubtitle = styled(Typography)(({ theme }) => ({
  marginTop: 27,
  fontSize: 18,
  [theme.breakpoints.down('md')]: {
    fontSize: 16
  },
  marginBottom: theme.spacing(4)
}))

const StyledEmail = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontSize: 18,
  [theme.breakpoints.down('md')]: {
    fontSize: 16
  },
  marginBottom: theme.spacing(1)
}))

const teamData = data.map((data, i) => {
  return (
    <UserCard
      key={`team-card-${i}`}
      name={data.name}
      nickname={data.nickname}
      role={data.role}
      socials={{
        github: data.github,
        twitter: data.twitter,
        linkedIn: data.linkedIn,
        email: data.email
      }}
    />
  )
})

const Team: NextPageExtended = () => {
  const theme = useTheme()
  return (
    <Grid
      container
      sx={{
        marginTop: 3.5,
        maxWidth: theme.breakpoints.values.xl,
        margin: '0 auto'
      }}
      justifyContent="center"
    >
      <Grid
        container
        item
        xs={12}
        md={9}
        direction="column"
        sx={{
          marginTop: 10,
          paddingBottom: 2.5
        }}
        justifyContent="center"
      >
        <Typography variant="h1" align="center" paragraph>
          The Team <br /> behind CtxOS
        </Typography>
        <StyledHeadingSubtitle variant="subtitle2Semi" align="center">
          The Ctx Project is a community-driven project. In this page we list contributors and
          members, past and present, who have contributed significantly to the project.
        </StyledHeadingSubtitle>
        <StyledEmail variant="inherit" align="center">
          Board of Directors:{' '}
          <Link underline="none" href={`mailto:director@ctxos.github.io`}>
            director@ctxos.github.io
          </Link>
        </StyledEmail>
        <StyledEmail variant="inherit" align="center">
          Ctx Team:{' '}
          <Link underline="none" href={`mailto:team@ctxos.github.io`}>
            team@ctxos.github.io
          </Link>
        </StyledEmail>
      </Grid>
      <Grid container item xs={12} md={9} spacing={4}>
        {teamData}
      </Grid>
      <ActiveContributors />
      <SpecialThanks />
      <PastContributors />
      <GetInvolvedSection />
    </Grid>
  )
}

Team.hideEllipses = true

export default Team
