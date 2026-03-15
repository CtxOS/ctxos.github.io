import { Box } from '@mui/material'

import desktopImage from './assets/ctx7.webp'
import {
  StyledAboutDesc,
  StyledAboutImageBox,
  StyledAboutStatBox,
  StyledAboutTextBox,
  StyledAboutTitle,
  StyledAboutWrapperBox
} from './index.styles'

import Stat from 'components/Stat'

const AboutSection = () => {
  return (
    <StyledAboutWrapperBox>
      <StyledAboutTextBox>
        <StyledAboutTitle variant="h3">What is CtxOS?</StyledAboutTitle>
        <StyledAboutDesc variant="body1">
          CtxOS is a GNU/Linux distribution based on Debian and designed with Security, Privacy, and
          Development in mind. It includes a full portable laboratory for all kinds of cyber
          security operations, from pentesting to digital forensics and reverse engineering, but it
          also includes everything you need to develop your own software or keep your data secure.
        </StyledAboutDesc>
        <StyledAboutDesc variant="body1">
          With over 50 million downloads worldwide and a decade of continuous development, CtxOS has
          become one of the most trusted security platforms used by professionals, researchers, and
          students.
        </StyledAboutDesc>
        <StyledAboutStatBox>
          <Stat stat="50M+" subtext="Downloads" />
          <Stat stat="95.5K+" subtext="Community Members" />
          <Stat stat="12+" subtext="Years Active" />
        </StyledAboutStatBox>
      </StyledAboutTextBox>
      <StyledAboutImageBox>
        <Box sx={{ display: 'inline-block', maxWidth: '40rem' }}>
          <img style={{ borderRadius: '10px' }} src={desktopImage.src} alt="ctx-os-desktop" />
        </Box>
      </StyledAboutImageBox>
    </StyledAboutWrapperBox>
  )
}

export default AboutSection
