import { Box, styled, Typography } from '@mui/material'

import { BaseCard } from '../InfoCard/index.styles'

export const SyledReleaseCardContainer = styled(BaseCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(4)
}))

export const StyledReleaseInfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}))

export const StyledReleaseInfoItemBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}))

export const SyledReleaseCardTitle = styled(Typography)(() => ({
  fontSize: '1.125rem',
  fontWeight: 400
}))

export const SyledReleaseInfoTitle = styled(Typography)(() => ({
  color: '#99A1AF'
}))

export const SyledReleaseVersion = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  padding: `.125rem ${theme.spacing(1)}`,
  background: 'linear-gradient(180deg, #00FFF0 0%, #69E1EE 100%)',
  borderRadius: theme.spacing(1),
  fontWeight: 500,
  color: '#000000'
}))

export const SyledReleaseArchitecture = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 500,
  padding: `.125rem ${theme.spacing(1)}`,
  border: '1px solid #00B8DB4D',
  borderRadius: theme.spacing(1),
  width: 'fit-content',
  color: '#00D3F2',
  display: 'inline',
  marginRight: theme.spacing(1)
}))

export const SyledReleaseArchitectureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}))
