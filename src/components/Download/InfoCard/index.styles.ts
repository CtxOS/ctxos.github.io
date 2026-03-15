import { Box, styled } from '@mui/material'

import { StyledMenuItemIconBox } from '../DownloadDropdown/index.styles'

export const BaseCard = styled(Box)(({ theme }) => ({
  border: '1px solid #00B8DB33',
  background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.5) 0%, rgba(22, 33, 62, 0.5) 100%)',
  borderRadius: '0.875rem',
  padding: theme.spacing(2),
  transition: 'border-color .5s ease',

  '&:hover': {
    borderColor: '#00B8DB70'
  }
}))

export const StyledInfoCard = styled(BaseCard)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  scale: 0.9,
  opacity: 0
}))

export const BaseCardStyles = styled(Box)(() => ({
  border: '1px solid #00B8DB33',
  background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.5) 0%, rgba(22, 33, 62, 0.5) 100%)',
  borderRadius: '0.875rem'
}))

export const StyledIconBox = styled(StyledMenuItemIconBox)(() => ({
  alignSelf: 'center'
}))

export const StyledTextBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column'
}))
