import { Typography } from '@mui/material'
import { styled } from '@mui/system'

import { CardType } from './Card'

interface StyledContributeSectionTitleProps {
  type?: CardType
}

export const StyledContributeCardTitle = styled(Typography, {
  shouldForwardProp: prop => prop !== 'type' // prevent 'type' from being passed to DOM
})<StyledContributeSectionTitleProps>(({ type }) => ({
  marginTop: type === CardType.Primary ? '.5rem' : '.5rem',
  marginBottom: type === CardType.Primary ? '1rem' : '0rem'
}))

export const StyledContributeSectionTitle = styled(Typography)(() => ({
  fontSize: '3.5rem',
  fontWeight: 700,
  backgroundImage:
    'linear-gradient(90deg, #FFFFFF 0%, #00D3F2 100%), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));',
  color: 'transparent',
  backgroundClip: 'text',
  lineHeight: '4.5rem',
  marginBottom: '1.4rem'
}))
