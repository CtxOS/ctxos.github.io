import { Box, useTheme } from '@mui/material'
import dynamic from 'next/dynamic'

import { LeftEllipse, RightEllipse } from 'components/GradientBG'
import VersionSection from 'containers/HomeContainers/VersionSection'
import { NextPageExtended } from 'src/types'

const JumbotronSection = dynamic(() => import('containers/HowItWorksContainers/JumbotronSection'))
const AboutSection = dynamic(() => import('containers/HowItWorksContainers/AboutSection'))
const GetStartedSection = dynamic(() => import('containers/HowItWorksContainers/GetStartedSection'))
const DownloadSection = dynamic(() => import('containers/HowItWorksContainers/DownloadSection'))
const ArchitectureSection = dynamic(
  () => import('containers/HowItWorksContainers/ArchitectureSection')
)

const HowItWorks: NextPageExtended = () => {
  const theme = useTheme()

  return (
    <>
      <RightEllipse />
      <LeftEllipse />
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: theme.spacing(14),
          margin: '0 auto',
          marginTop: theme.spacing(10),
          maxWidth: theme.breakpoints.values.xl
        }}
      >
        <JumbotronSection />
        <AboutSection />
        <GetStartedSection />
        <VersionSection />
        <ArchitectureSection />
        <DownloadSection />
      </Box>
    </>
  )
}

HowItWorks.hideEllipses = true

export default HowItWorks
