import { Box, styled, Typography } from '@mui/material'

export const StyledAboutTitle = styled(Typography)(({ theme }) => ({
  lineHeight: '3rem',
  [theme.breakpoints.down(445)]: {
    textAlign: 'center'
  }
}))

export const StyledAboutDesc = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down(445)]: {
    textAlign: 'center'
  },
  maxWidth: '36.5rem'
}))

export const StyledAboutTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}))

export const StyledAboutWrapperBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(10),
  [theme.breakpoints.down(1200)]: {
    padding: theme.spacing(2),
    flexWrap: 'wrap',
    gap: theme.spacing(2)
  }
}))

export const StyledAboutStatBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: 0,
    flexWrap: 'wrap',
    gap: theme.spacing(2)
  }
}))

export const StyledAboutImageBox = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(4.25)}`,
  border: '2px solid #038297',
  borderRadius: theme.shape.borderRadius + 6,
  background: 'linear-gradient(180deg, #052E5C 0%, #045879 100%)',
  [theme.breakpoints.down(445)]: {
    padding: theme.spacing(2)
  }
}))
