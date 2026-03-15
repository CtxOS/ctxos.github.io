import { Box, styled } from '@mui/material'

import { BaseCard } from '../InfoCard/index.styles'

export const StyledIncludesItemBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: theme.spacing(1),
  [theme.breakpoints.down(740)]: {
    gridTemplateColumns: '1fr'
  }
}))

export const StyledIncludesCardWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}))

export const StyledIncludesUtilBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1)
}))

export const StyledIncludesCardBox = styled(BaseCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(4)
}))
