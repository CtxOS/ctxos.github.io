import { Box, styled, Typography } from '@mui/material'

export const StyledHeroBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: `${theme.spacing(15)} ${theme.spacing(2)}`,
  background:
    'radial-gradient(80% 180.81% at 50% 180%, rgba(0, 255, 238, 0.2) 0.07%, rgba(0, 0, 0, 0) 100%)',
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(8)} ${theme.spacing(2)}`
  }
}))

export const StyledIconTextWrapperBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing(2)
  }
}))

export const StyledIconTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1)
}))

export const StyledHeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  [theme.breakpoints.down(640)]: {
    fontSize: '2.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.875rem'
  }
}))

export const StyledHeroDesc = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: '#D1D5DC',
  fontWeight: 400,
  fontSize: '1.25rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1'
  }
}))
