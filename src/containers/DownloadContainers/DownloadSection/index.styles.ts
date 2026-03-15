import { styled } from '@mui/material'
import Box from '@mui/system/Box'

export const StyledInfoCardBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: theme.spacing(2),
  [theme.breakpoints.down(740)]: {
    gridTemplateColumns: '1fr'
  }
}))

export const StyledDownloadGridWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '3fr 2fr',
  gap: theme.spacing(4),
  alignItems: 'start',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr',
    margin: '0 auto',
    gap: theme.spacing(4)
  },
  transform: 'translateY(0)',
  animation: 'slideIn 900ms ease',
  '@keyframes slideIn': {
    from: { opacity: 0, transform: 'translateY(8px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  }
}))

export const StyledDownloadLeftSection = styled(Box)(({ theme }) => ({
  maxWidth: '44.675rem',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}))

export const StyledDownloadRightSection = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4)
}))
