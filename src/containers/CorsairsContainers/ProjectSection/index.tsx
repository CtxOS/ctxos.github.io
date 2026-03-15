import { Grid, Typography, Paper, useTheme } from '@mui/material'

import Milestone from './assets/milestone.png'
import {
  StyledProjectSectionGrid,
  StyledProjectSectionResponsiveGrid,
  StyledProjectSectionTypography
} from './index.styles'

import PButton from 'components/PButton'
import PTimeline from 'components/Timeline'

const ProjectSection = () => {
  const theme = useTheme()

  return (
    <>
      <Grid container item xs={12} md={9} spacing={4}>
        <Paper sx={{ marginTop: 12 }} elevation={0}>
          <Grid container item xs justifyContent="space-between">
            <StyledProjectSectionGrid container item xs={12} lg={4} direction="column">
              <Typography variant="h3" paragraph>
                Be part of the crew
              </Typography>
              <StyledProjectSectionTypography variant="body1" paragraph>
                Ever wondered how much one person can really impact an open-source project? At
                CtxOS, we know it&apos;s not just about the code; it&apos;s about the people who
                work on it day in, day out.
              </StyledProjectSectionTypography>
              <StyledProjectSectionTypography variant="body1" paragraph>
                Becoming a CtxOS Corsair isn&apos;t just a fancy title. It&apos;s your chance to
                join a community, make a difference in something you care about, and get rewarded
                for your work.
              </StyledProjectSectionTypography>
              <PButton
                variant="outlined"
                to="/blog/2024-05-02-ctx-corsairs-announcement/"
                style={{ maxWidth: 165 }}
              >
                Read more
              </PButton>
            </StyledProjectSectionGrid>
            <Grid
              container
              item
              xs={12}
              lg
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <img src={Milestone.src} alt="CtxOS Milestone" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid container item xs={12} md={9} spacing={4} justifyContent="center">
        <Typography
          variant="h2"
          align="center"
          paragraph
          sx={{
            marginTop: theme.spacing(14),
            paddingBottom: theme.spacing(4)
          }}
        >
          How to Become a Corsair: Tiers and Rewards
        </Typography>
        <PTimeline />
        <Paper elevation={0} sx={{ padding: 4 }}>
          <Typography variant="h4" align="center" paragraph sx={{ marginTop: 5 }}>
            How can you get involved?
          </Typography>
          <StyledProjectSectionTypography sx={{ textAlign: 'center' }} variant="body1" paragraph>
            We have made available to the community a board dedicated to the issues and problems we
            generally encounter with the OS and its sub-projects. It can be viewed in our GitLab
            Milestone, and from there we keep track of everyone&apos;s contributions.
          </StyledProjectSectionTypography>
          <Grid container item xs={12} spacing={2} sx={{ marginBottom: 4 }}>
            <StyledProjectSectionResponsiveGrid
              container
              item
              xs={12}
              sm={6}
              justifyContent="flex-end"
            >
              <PButton
                variant="contained"
                to="https://gitlab.com/groups/ctxos/-/milestones/1#tab-issues"
                gradient
              >
                GitLab Milestone
              </PButton>
            </StyledProjectSectionResponsiveGrid>
            <StyledProjectSectionResponsiveGrid container item xs={12} sm={6}>
              <PButton variant="outlined" to="/blog/2024-05-02-ctx-corsairs-announcement/">
                Read more
              </PButton>
            </StyledProjectSectionResponsiveGrid>
          </Grid>
        </Paper>
      </Grid>
    </>
  )
}

export default ProjectSection
