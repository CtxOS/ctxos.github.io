import { Button, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledPFeatureBlockPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: 32,
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
}))

export const StyledPFeatureBlockIconWrapper = styled('div')(({ theme }) => ({
  width: 64,
  height: 64,
  padding: 16,
  background: theme.palette.mode === 'light' ? '#03232E' : '#FFFFFF',
  borderRadius: 6,
  marginBottom: 20
}))

export const StyledPFeatureBlockBody = styled(Typography)(() => ({
  display: 'block',
  marginTop: 20,
  marginBottom: 24
}))

export const StyledPFeatureBlockButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.mode === 'light' ? '#03232E' : '#05EEFF',
  paddingLeft: 16,
  paddingRight: 16,
  marginLeft: -16,
  borderRadius: 10,
  marginTop: 'auto'
}))

export const ThemedIcon = styled('svg')(({ theme }) => ({
  fill: theme.palette.mode === 'light' ? '#FFFFFF' : '#06043E',
  width: 32,
  height: 32
}))
