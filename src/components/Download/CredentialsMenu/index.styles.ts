import { Box, styled } from '@mui/material'

export const SyledCredentialsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  background: 'trasparent'
}))

export const SyledCredentialsSpan = styled('span')(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.primary.main
}))
