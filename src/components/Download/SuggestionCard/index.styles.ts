import { Box, Button, styled } from '@mui/material'

import { BaseCard } from '../InfoCard/index.styles'

export const StyledSuggestionCardWrapper = styled(BaseCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}))

export const StyledSuggestionCardHeroWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2)
}))

export const StyledSuggestionCardTextWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column'
}))

export const StyledSuggestionCardButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'capitalize',
  textAlign: 'start',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '.875rem',
  '&:hover': {
    background: 'rgba(128, 128, 128, 0.05)'
  }
}))
