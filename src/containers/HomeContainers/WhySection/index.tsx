import { Box, Typography, useTheme } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

import AutorenewIcon from './assets/autorenew.svg'
import BeenhereIcon from './assets/beenhere.svg'
import CloudIcon from './assets/cloud_done.svg'
import DiscoverIcon from './assets/discover_tune.svg'
import HistoryEduIcon from './assets/history_edu.svg'
import { StyledFeatItem, StyledFeatItemRow, StyledKeyword } from './index.styles'

const WhySection = () => {
  const theme = useTheme()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#why-ctx-animation-wrapper',
        start: 'top 80%',
        toggleActions: 'play none pause pause'
      }
    })

    tl.fromTo(
      '#why-ctx-animation-wrapper .step',
      { xPercent: 10, opacity: 0 }, // initial state
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'expoScale(0.5,7,none)',
        stagger: 0.2
      }
    )

    return () => {
      tl.kill()
    }
  }, [])
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '5rem',
        justifyContent: 'center',
        width: '100%',
        flexWrap: 'wrap'
      }}
      id="why-ctx-animation-wrapper"
    >
      <Box>
        <Typography variant="h2" sx={{ marginBottom: theme.spacing(2) }}>
          Why Ctx?
        </Typography>
        <Box sx={{ width: '21rem' }}>
          <Typography variant="body1" align="left" sx={{ fontSize: '1rem' }}>
            Over 50 million downloads worldwide and a decade of continuous development make Ctx one
            of the most trusted security platforms. It’s used daily by penetration testers,
            researchers, students, and enterprises who need a reliable environment for cybersecurity
            and privacy.​​​​​​​
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem', flexWrap: 'wrap' }}>
        <StyledFeatItem className="step">
          <StyledFeatItemRow>
            <HistoryEduIcon />
            <StyledKeyword>Lightweight</StyledKeyword>
          </StyledFeatItemRow>
          <Typography variant="body2">Efficient even on older hardware</Typography>
        </StyledFeatItem>
        <StyledFeatItem className="step">
          <StyledFeatItemRow>
            <DiscoverIcon />
            <StyledKeyword>Modular</StyledKeyword>
          </StyledFeatItemRow>
          <Typography variant="body2">Select and install only what you need</Typography>
        </StyledFeatItem>
        <StyledFeatItem className="step">
          <StyledFeatItemRow>
            <AutorenewIcon />
            <StyledKeyword>Up-to-date</StyledKeyword>
          </StyledFeatItemRow>
          <Typography variant="body2">Rolling updates keep you current and secure</Typography>
        </StyledFeatItem>
        <StyledFeatItem className="step">
          <StyledFeatItemRow>
            <CloudIcon />
            <StyledKeyword>Cloud ready</StyledKeyword>
          </StyledFeatItemRow>
          <Typography variant="body2">Optimized for cloud and virtual environments</Typography>
        </StyledFeatItem>
        <StyledFeatItem className="step">
          <StyledFeatItemRow>
            <BeenhereIcon />
            <StyledKeyword>Secure</StyledKeyword>
          </StyledFeatItemRow>
          <Typography variant="body2">Strong privacy and anonymity features</Typography>
        </StyledFeatItem>
      </Box>
    </Box>
  )
}

export default WhySection
