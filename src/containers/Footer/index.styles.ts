import { Box, Grid, GridProps, Typography } from '@mui/material'
import { styled } from '@mui/system'
import Link from 'next/link'

import Logo from './assets/logo.svg'
export const StyledFooterWrapper = styled(Box)(() => ({
  maxWidth: 1980,
  margin: '0 auto',
  width: '100%'
}))
export const StyledFooterGridContainer = styled(Grid)<GridProps>(() => ({
  marginTop: 154,
  width: '100%'
}))

export const StyledCtxLogo = styled(Logo)(() => ({
  width: '2rem',
  height: '2rem',
  display: 'inline-block'
}))

export const StyledLogoTitle = styled(Typography)(() => ({
  fontSize: '2rem',
  fontWeight: 700,
  display: 'inline-block',
  color: '#FFFFFF'
}))

export const LightSpan = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main
}))

export const StyledFooterSectionText = styled(Typography)(({ theme }) => ({
  textDecoration: 'none',
  transition: '.2s ease-in 0s',
  '&:hover': {
    textDecoration: 'none',
    color: theme.palette.primary.main
  },
  '&:focus': {
    textDecoration: 'none'
  }
}))

export const StyledFooterLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  transition: '.2s ease-in 0s',
  fontSize: '.8rem',
  fontWeight: 300,
  '&:hover': {
    textDecoration: 'none',
    color: theme.palette.primary.main
  },
  '&:focus': {
    textDecoration: 'none'
  },
  color: '#FFFFFF80'
}))

export const StyledSocialLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: 'color 0.4s ease',
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

export const StyledLinkBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '.2rem'
}))

export const StyledPrivacy = styled(Typography)(() => ({
  color: '#FFFFFF80',
  fontWeight: 300,
  fontSize: '.8rem'
}))
