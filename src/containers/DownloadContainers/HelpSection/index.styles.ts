import { Box, Link, styled } from '@mui/material'

export const StylesHelpSectionWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2)
}))

export const StylesHelpSectionInnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2)
}))

export const StylesHelpSectionItemBox = styled(StylesHelpSectionInnerBox)(({ theme }) => ({
  gap: theme.spacing(0.5)
}))

export const StylesHelpSectionLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  },
  color: theme.palette.primary.main
}))
