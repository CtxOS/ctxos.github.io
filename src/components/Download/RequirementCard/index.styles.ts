import { Box, styled, Typography } from '@mui/material'

import { BaseCard } from '../InfoCard/index.styles'
import { SyledReleaseCardTitle, SyledReleaseInfoTitle } from '../ReleaseInfoCard/index.styles'

export const SyledRequirementsCardContainer = styled(BaseCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(4)
}))

export const SyledRequirementsCardTitleWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1)
}))

export const SyledRequirementsCardSpecsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}))

export const SyledRequirementTitle = styled(SyledReleaseCardTitle)(() => ({}))
export const SyledRequirementSpec = styled(SyledReleaseInfoTitle)(() => ({}))
export const SyledRequirementSpecValue = styled(Typography)(() => ({
  color: '#FFFFFF'
}))
