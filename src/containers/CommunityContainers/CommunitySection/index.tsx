import Telegram from '@mui/icons-material/Telegram'
import { Grid, GridProps, useTheme } from '@mui/material'

import Forum from './assets/forum.svg'
import HackTheBox from './assets/hackthebox.svg'

import PFeatureBlock from 'components/PFeatureBlock'
import CommunitySection from 'containers/CommunityContainers/SocialsSection'

const SocialsSection = (props: GridProps) => {
  const theme = useTheme()

  return (
    <>
      <Grid
        {...props}
        container
        item
        xs={12}
        md={9}
        spacing={4}
        justifyContent="center"
        sx={{
          marginTop: '88px',
          [theme.breakpoints.down('md')]: {
            marginTop: 50
          }
        }}
      >
        <Grid item sm={12} lg={4}>
          <PFeatureBlock
            title="Forum"
            Icon={Forum}
            buttonText="Explore Forum"
            buttonLink="https://community.ctxos.github.io"
            outLink
          >
            An awesome community is one click away. Receive assistence, share ideas and follow the
            development of the project.
          </PFeatureBlock>
        </Grid>
        <Grid item sm={12} lg={4}>
          <PFeatureBlock
            title="Ctx + HTB"
            Icon={HackTheBox}
            buttonText="Explore Collab"
            buttonLink="https://hacktheboxltd.sjv.io/jrvNmP"
            outLink
          >
            Hackers love Pwnbox and Ctx OS. More and more people are using the free Debian
            Linux-based cybersecurity and penetration testing operating systems every day.
          </PFeatureBlock>
        </Grid>
        <Grid item sm={12} lg={4}>
          <PFeatureBlock
            title="Telegram"
            Icon={Telegram}
            buttonText="Join Telegram"
            buttonLink="https://t.me/ctxosgroup"
            outLink
          >
            The Ctx Project is a community-driven opensource project, and a gateway to spread
            innovative ideas born inside it&apos;s community. Join in our official Telegram Group!
          </PFeatureBlock>
        </Grid>
      </Grid>
      <CommunitySection />
    </>
  )
}

export default SocialsSection
