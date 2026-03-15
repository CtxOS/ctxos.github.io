import { Grid, IconButton, Typography, useTheme } from '@mui/material'

import Discord from './assets/discord.svg'
import Facebook from './assets/facebook.svg'
import Instagram from './assets/instagram.svg'
import LinkedIn from './assets/linkedin.svg'
import Mastodon from './assets/mastodon.svg'
import Reddit from './assets/reddit.svg'
import Twitter from './assets/twitter.svg'
import YouTube from './assets/youtube.svg'
import { StyledSocialSectionPaper, StyledSocialSectionBox, withStyledFill } from './index.styles'

const SocialsSection = () => {
  const theme = useTheme()

  const InstagramIcon = withStyledFill(Instagram)
  const DiscordIcon = withStyledFill(Discord)
  const FacebookIcon = withStyledFill(Facebook)
  const LinkedInIcon = withStyledFill(LinkedIn)
  const TwitterIcon = withStyledFill(Twitter)
  const YouTubeIcon = withStyledFill(YouTube)

  return (
    <>
      <Grid item container xs={12} md={9}>
        <StyledSocialSectionPaper elevation={0}>
          <Grid container alignItems="center" direction="column">
            <Typography variant="h5" paragraph>
              Join Us On Social Media
            </Typography>
            <Typography variant="subtitle2Semi">
              Choose the channel that you are most active in and let’s stay connected!
            </Typography>
          </Grid>
          <StyledSocialSectionBox display="flex" justifyContent="center" flexWrap="wrap">
            <IconButton href="https://www.instagram.com/ctxproject/">
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://twitter.com/ctxos">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com/CtxOS/">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://discord.gg/j7QTaCzAsm">
              <DiscordIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com/company/ctxos/about/">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://www.youtube.com/@CtxOSurity/featured">
              <YouTubeIcon />
            </IconButton>
            <IconButton href="https://www.reddit.com/r/CtxOSurity/">
              <Reddit style={{ fill: theme.palette.mode === 'dark' ? '#06043E' : '#06043E' }} />
            </IconButton>
            <IconButton href="https://mastodon.social/@ctxos">
              <Mastodon style={{ fill: theme.palette.mode === 'dark' ? '#06043E' : '#06043E' }} />
            </IconButton>
          </StyledSocialSectionBox>
        </StyledSocialSectionPaper>
      </Grid>
    </>
  )
}

export default SocialsSection
