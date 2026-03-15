import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

import { StyledInnerShape, StyledOuterShape, StyledStatDesc } from './index.styles'

const StatsSection = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down(568))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#stats-section-wrapper',
        start: 'top 70%',
        toggleActions: 'play none pause pause'
      }
    })

    tl.fromTo(
      '#stats-section-wrapper',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'expoScale(0.5,7,none)'
      }
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <Box sx={{ marginTop: '4rem' }} id="stats-section-wrapper">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography gutterBottom variant="h2" sx={{ textAlign: isSmall ? 'center' : '' }}>
          The Ctx Project
        </Typography>
        <Typography sx={{ paddingBottom: theme.spacing(5) }} variant="body1" align="center">
          Over 50 million downloads worldwide and a decade of continuous development{' '}
          {!isSmall && <br />}
          make Ctx one of the most trusted security platforms.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '1.25rem',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <StyledOuterShape>
          <StyledInnerShape>
            <Typography variant="h4" sx={{ fontSize: 'min(35px)' }}>
              <span style={{ color: theme.palette.primary.main }}>+50M</span> <br /> Ctx OS
              downloads
            </Typography>
            <StyledStatDesc variant="body1">
              More new people download and update the system daily. This OS is made to respect your
              freedom, so share it, read the source code, and configure it as you like!
            </StyledStatDesc>
          </StyledInnerShape>
        </StyledOuterShape>
        <StyledOuterShape>
          <StyledInnerShape>
            <Typography variant="h4" sx={{ fontSize: 'min(35px)' }}>
              <span style={{ color: theme.palette.primary.main }}>+95.5k</span> <br /> Community{' '}
              <br /> members
            </Typography>
            <StyledStatDesc variant="body1">
              A worldwide network of passionate users collaborating, learning, and building
              together.
            </StyledStatDesc>
          </StyledInnerShape>
        </StyledOuterShape>
        <StyledOuterShape>
          <StyledInnerShape>
            <Typography variant="h4" sx={{ fontSize: 'min(35px)' }}>
              <span style={{ color: theme.palette.primary.main }}>+60</span> <br /> Worldwide
              partners
            </Typography>
            <StyledStatDesc variant="body1">
              CtxOS continues to grow thanks to its collaborations with various universities,
              organizations, companies, and more.
            </StyledStatDesc>
          </StyledInnerShape>
        </StyledOuterShape>
      </Box>
    </Box>
  )
}

export default StatsSection
