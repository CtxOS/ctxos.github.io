import { Box, useTheme } from '@mui/material'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const ContributeSection = dynamic(() => import('containers/HomeContainers/ContributeSection'))
const HTBSection = dynamic(() => import('containers/HomeContainers/HTBSection'))
const ToolsSection = dynamic(() => import('containers/HomeContainers/ToolsSection'))
const VersionSection = dynamic(() => import('containers/HomeContainers/VersionSection'))
const TrustSection = dynamic(() => import('containers/HomeContainers/PartnerSection'))
const StatsSection = dynamic(() => import('containers/HomeContainers/StatsSection'))
const WelcomeSection = dynamic(() => import('containers/HomeContainers/WelcomeSection'))
const WhySection = dynamic(() => import('containers/HomeContainers/WhySection'))

const Index: NextPage = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        marginTop: `${theme.spacing(6)} !important`,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '9rem',
        maxWidth: theme.breakpoints.values.xl,
        margin: '0 auto'
      }}
    >
      <WelcomeSection />
      <ToolsSection />
      <WhySection />
      <StatsSection />
      <VersionSection />
      <ContributeSection />
      <HTBSection />
      <TrustSection />
    </Box>
  )
}

export default Index
