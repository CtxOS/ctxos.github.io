import { Box, styled, Typography } from '@mui/material'

export const StyledJumbotronTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3.75rem',
  fontWeight: 700,
  textAlign: 'center',
  backgroundImage:
    'linear-gradient(180deg, #FFFFFF 0%, #00D3F2 100%), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
  color: 'transparent',
  backgroundClip: 'text',
  lineHeight: '4.5rem',
  [theme.breakpoints.down(435)]: {
    fontSize: '3rem',
    textAlign: 'center',
    lineHeight: '3.75rem'
  }
}))

export const StyledJumbotronDesc = styled(Typography)(() => ({
  maxWidth: '42rem',
  textAlign: 'center'
}))

export const StyledJumbotronBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  [theme.breakpoints.down(400)]: {
    padding: `0 ${theme.spacing(2)}`
  }
}))
