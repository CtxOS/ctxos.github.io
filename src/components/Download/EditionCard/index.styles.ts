import { Box, styled, Typography } from '@mui/material'

export const StyledCardWrapperBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  borderRadius: '.875rem',
  width: 'fit-content',
  border: '1px solid #00B8DB4D'
}))

export const StyledCardTitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2)
}))

export const StyledCardTitle = styled(Typography)(() => ({
  fontSize: '1.875rem !important',
  fontWeight: 400,
  lineHeight: '2.25rem'
}))

export const StyledCardDescription = styled(Typography)(() => ({
  maxWidth: '41rem',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.625rem'
}))
