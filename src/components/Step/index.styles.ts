import { Box, styled, Typography } from '@mui/material'

export const StyledStepNumber = styled(Typography)(() => ({
  fontSize: '3.75rem',
  fontWeight: 700,
  color: '#00FFF033'
}))

export const StyledStepTitle = styled(Typography)(() => ({
  fontWeight: 700
}))

export const StyledStepBox = styled(Box)(({ theme }) => ({
  maxWidth: '17.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius + 6,
  border: '0.56px solid #FFFFFF1A',
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
  [theme.breakpoints.down(500)]: {
    maxWidth: '100%'
  },
  transition: 'border-color .3s ease',
  '&:hover': {
    borderColor: 'rgba(255, 255, 255, 0.2)'
  }
}))

export const StyledStepWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5)
}))
