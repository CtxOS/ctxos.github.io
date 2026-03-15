import { AppBar, Box } from '@mui/material'
import { styled } from '@mui/system'
import Link from 'next/link'

import Logo from './assets/logo.svg'

export const StyledHeaderAppBar = styled(AppBar)(() => ({
  paddingTop: '2rem',
  paddingBottom: '2rem'
}))

export const StyledLogo = styled(Logo)(() => ({
  width: 64,
  height: 64
}))

export const StyledDownloadBtnHolder = styled('div')(({ theme }) => ({
  flex: 1,
  justifyContent: 'flex-end',
  display: 'flex',
  [theme.breakpoints.down('lg')]: {
    flex: 0,
    marginTop: 'auto'
  }
}))

interface StyledHeaderLinkProps {
  active?: boolean
}

export const StyledHeaderLink = styled(Link, {
  shouldForwardProp: prop => prop !== 'active' && prop !== 'variantType'
})<StyledHeaderLinkProps>(({ theme, active }) => ({
  padding: theme.spacing(1.2),
  fontSize: 16,
  fontFamily: 'museo-sans',
  textDecoration: 'none',
  borderRadius: theme.shape.borderRadius,
  transition: '.2s ease-in 0s',
  fontWeight: 'normal',
  color: theme.palette.mode === 'dark' ? '#FFF' : 'rgba(0, 0, 0, 0.5)',
  border: active ? '1px solid #00B8DB33' : '1px solid transparent',
  background: active
    ? 'linear-gradient(135deg,rgba(0, 255, 240, 0.14) 0%,rgba(0, 255, 240, 0.02) 100%)'
    : 'transparent',
  '&:hover': {
    background: 'linear-gradient(135deg,rgba(0, 255, 240, 0.14) 0%,rgba(0, 255, 240, 0.02) 100%)',
    border: '1px solid #00B8DB33'
  },
  '&:focus': {
    textDecoration: 'none'
  },
  '&:active': {
    color: theme.palette.primary.main,
    background: 'linear-gradient(135deg,rgba(0, 255, 240, 0.14) 0%,rgba(0, 255, 240, 0.06) 100%)'
  },
  [theme.breakpoints.down('lg')]: {
    paddingLeft: 0
  }
}))

export const StyledMobileLink = styled(StyledHeaderLink, {
  shouldForwardProp: prop => prop !== 'active' && prop !== 'variantType'
})<StyledHeaderLinkProps>(({ theme, active }) => ({
  border: 'none',
  background: 'transparent',
  color: active ? theme.palette.primary.main : 'white',
  '&:active': {
    color: theme.palette.primary.main,
    background: 'transparent',
    border: 'none'
  }
}))

export const StyledHeaderNav = styled('nav')(() => ({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  gap: '24px',
  whiteSpace: 'nowrap'
}))

export const StyledDropdownBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  padding: theme.spacing(2)
}))
