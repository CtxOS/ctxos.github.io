import { Box, styled, Typography } from '@mui/material'

import { BaseCard } from '../InfoCard/index.styles'

export const SyledRequirementsCardContainer = styled(BaseCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, rgba(0, 184, 219, 0.1) 0%, rgba(43, 127, 255, 0.1) 100%)',
  border: '1px solid #00D3F24D'
}))

export const StyledHelpItemWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1)
}))

export const StyledHelpItemWText = styled('a')(({ theme }) => ({
  fontSize: '.875rem',
  fontWeight: 400,
  color: theme.palette.primary.main,
  '&:hover': {
    textDecoration: 'underline'
  }
}))

export const SyledHelpTitle = styled(Typography)(() => ({
  color: '#FFFFFF'
}))
