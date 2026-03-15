import { Box, styled, Typography } from '@mui/material'

export const StyledGetStartedTitle = styled(Typography)(() => ({
  lineHeight: '3rem',
  textAlign: 'center'
}))

export const StyledGetStartedDesc = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4)
}))

export const StyledGetStartedWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(2)
}))

export const StyledGetStartedStepWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    gap: theme.spacing(2)
  }
}))
