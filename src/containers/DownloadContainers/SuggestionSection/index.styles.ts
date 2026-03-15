import { Box, styled } from '@mui/material'

export const StyledSuggestionWrapper = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  borderTop: '1px solid #00B8DB1A',
  paddingTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.down('lg')]: {
    alignSelf: 'stretch'
  },
  [theme.breakpoints.down(365)]: {
    alignSelf: 'center',
    padding: '1rem'
  }
}))

export const StyledSuggestionCardWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: theme.spacing(2),

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr ',
    margin: '0 auto'
  },
  [theme.breakpoints.down(1015)]: {
    gridTemplateColumns: '1fr',
    justifyItems: 'stretch'
  }
}))
