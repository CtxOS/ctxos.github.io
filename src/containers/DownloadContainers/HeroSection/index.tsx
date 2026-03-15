import { Typography, useMediaQuery, useTheme } from '@mui/material'

import CheckIcon from './assets/hero-icon-check.svg'
import LightningIcon from './assets/hero-icon-lightning.svg'
import ShieldIcon from './assets/hero-icon-shield.svg'
import {
  StyledHeroBox,
  StyledHeroDesc,
  StyledHeroTitle,
  StyledIconTextBox,
  StyledIconTextWrapperBox
} from './index.styles'

const HeroSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <StyledHeroBox>
      <StyledHeroTitle variant="h1">
        Download
        <span style={{ color: theme.palette.primary.main }}> CtxOS</span>
      </StyledHeroTitle>
      <StyledHeroDesc>
        Choose the perfect edition for your needs. Free, open-source, and trusted by{' '}
        {isMobile ? '' : <br />} security professionals worldwide.
      </StyledHeroDesc>
      <StyledIconTextWrapperBox>
        <StyledIconTextBox>
          <CheckIcon />
          <Typography variant="body3">Latest: v7.1</Typography>
        </StyledIconTextBox>
        <StyledIconTextBox>
          <ShieldIcon />
          <Typography variant="body3">100% Free & Open Source</Typography>
        </StyledIconTextBox>
        <StyledIconTextBox>
          <LightningIcon />
          <Typography variant="body3">Rolling Updates</Typography>
        </StyledIconTextBox>
      </StyledIconTextWrapperBox>
    </StyledHeroBox>
  )
}

export default HeroSection
