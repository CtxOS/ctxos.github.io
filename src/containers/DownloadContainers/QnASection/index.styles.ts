import { Box, styled, Typography } from '@mui/material'

export const StyledQnAWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(10),
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(15)
}))

export const StyledQnATitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  lineHeight: '2.5rem'
}))
