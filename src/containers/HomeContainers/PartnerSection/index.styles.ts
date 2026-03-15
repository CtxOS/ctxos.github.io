import { Box } from '@mui/material'
import { styled, Theme } from '@mui/material/styles'

import HTB from '../HTBSection/assets/htbLogo.svg'

import Bunnycdn from './assets/bunnycdn.svg'
import Caido from './assets/caido.svg'
import Jetbrains from './assets/jetbrains.svg'

const sharedStyles = (theme: Theme) => ({
  width: '100%',
  height: '100%',
  maxHeight: theme.spacing(6),
  margin: 'auto',
  transition: 'transform .4s ease',
  fill: theme.palette.mode === 'dark' ? 'white' : 'inherit',
  '& #linode-block': { fill: '#03232E' },
  '& #linode-text': { fill: theme.palette.mode === 'light' ? '#03232E' : '#FFF' },
  '& #bunny-text': { fill: theme.palette.mode === 'light' ? '#03232E' : '#FFF' },
  '&:hover': {
    transform: 'scale(1.03)'
  }
})

export const StyledHTBImage = styled(HTB)(({ theme }) => ({ ...sharedStyles(theme) }))
export const StyledBunnyCdnImage = styled(Bunnycdn)(({ theme }) => ({ ...sharedStyles(theme) }))
export const StyledJetbrainsImage = styled(Jetbrains)(({ theme }) => ({ ...sharedStyles(theme) }))
export const StyledCaidoImage = styled(Caido)(({ theme }) => ({
  ...sharedStyles(theme),
  maxHeight: theme.spacing(8)
}))

export const StyledImageWrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(3.14deg, rgba(0,255,240,0.1) 0%, rgba(2,171,181,0.1) 100%)',
  borderRadius: '.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  aspectRatio: '16 / 13.75',
  width: '100%',
  maxWidth: '16rem',
  flexShrink: 0,
  cursor: 'pointer',
  [theme.breakpoints.down(400)]: {
    maxWidth: 'none'
  }
}))

export const StyledImageBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
}))
