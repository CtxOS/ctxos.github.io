import { Paper } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

export enum OSIconVariant {
  Docker = 'docker',
  Debian = 'debian',
  WSL = 'wsl',
  Core = 'core',
  Live = 'live',
  Virtual = 'virtual',
  IoT = 'iot',
  Home = 'home',
  Security = 'security',
  Cloud = 'cloud',
  Architect = 'architect',
  Raspberry = 'raspberry',
  HackTheBox = 'hackthebox'
}

export const iconGradientMap: Record<OSIconVariant, string> = {
  [OSIconVariant.Docker]: 'linear-gradient(99deg, rgba(29,3,130,0.82) 0%, rgba(0,91,204,1) 0%)',
  [OSIconVariant.Debian]:
    'linear-gradient(99deg, #00FF87 0%, rgba(61,203,34,1) 0%, rgba(0,204,155,1) 100%)',
  [OSIconVariant.WSL]: 'linear-gradient(90deg, #FFFFFF 58%, #EAEAEA 99%)',
  [OSIconVariant.Core]: 'linear-gradient(180deg, #020024 0%, #030329 55%, #000013 100%)',
  [OSIconVariant.Live]: 'linear-gradient(99.16deg, #C6FFDD 24.01%, #FBD786 81.75%)',
  [OSIconVariant.Virtual]: 'linear-gradient(99.16deg, #2193b0 24.01%, #6dd5ed 81.75%)',
  [OSIconVariant.IoT]: 'linear-gradient(99.16deg, #FF7E5F 24.01%, #FEB47B 81.75%)',
  [OSIconVariant.Home]: 'linear-gradient(153.43deg, #00B2FF 16.67%, #0028FF 100%)',
  [OSIconVariant.Security]: 'linear-gradient(153.43deg, #FF9800 16.67%, #EC4F00 100%)',
  [OSIconVariant.Cloud]: 'linear-gradient(180deg, #E806FF 10%, #B505CC 90%)',
  [OSIconVariant.Architect]: 'linear-gradient(180deg, #B0B0B0 18%, #999999 91%)',
  [OSIconVariant.Raspberry]: 'linear-gradient(90deg, #960E32 58%, #BD0D3B 99%)',
  [OSIconVariant.HackTheBox]: 'linear-gradient(180deg, #9FEF00 10%, #98D521 90%)'
}

export const OSCardIconHolder = styled(Box)<{ variant?: OSIconVariant }>(({ variant }) => ({
  width: 64,
  height: 64,
  borderRadius: 6,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 21,
  background: variant ? iconGradientMap[variant] : 'transparent'
}))

export const StyledIconWrapper = styled('span')(() => ({
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    width: '100%',
    height: '100%'
  }
}))

export const StyledOSCardPaper = styled(Paper)<{ selected?: boolean }>(({ theme, selected }) => ({
  borderColor: selected ? theme.palette.primary.main : 'none',
  borderWidth: selected ? 2 : 0,
  borderStyle: selected ? 'solid' : 'none',

  padding: 32,
  height: '100%',
  display: 'flex',
  flexFlow: 'column',
  cursor: 'pointer',
  transition: 'box-shadow 0.3s ease-in-out',
  ...(theme.palette.mode === 'dark'
    ? {
        '&:hover': {
          boxShadow: '0 0 30px 10px #2c2981'
        }
      }
    : {})
}))
