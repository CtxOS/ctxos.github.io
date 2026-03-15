import { Box, Button, MenuItem, styled, Typography } from '@mui/material'

export const StyledDropdownBox = styled(Box)(() => ({
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(180deg, #00FFF0 0%, #69E1EE 100%)',
  borderRadius: '.5rem',
  cursor: 'pointer'
}))

export const StyledTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  borderRight: '1px solid #00000033',
  padding: theme.spacing(2)
}))

export const StyledMenuItemIconBox = styled(Box)(({ theme }) => ({
  alignSelf: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(1),
  background: 'linear-gradient(135deg, rgba(0, 211, 242, 0.2) 0%, rgba(43, 127, 255, 0.2) 100%)',
  border: '1px solid #00D3F24D',
  borderRadius: '0.625rem'
}))

export const StyledMenuItemTextBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}))

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  borderRadius: '.5rem',
  transition: 'background-color .3s ease'
}))

export const StyledDropdownBtn = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2)
}))

export const StyledDropdownText = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  color: '#000000',
  textTransform: 'capitalize'
}))

export const StyledMenuItemTitle = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  color: 'white',
  textTransform: 'capitalize'
}))

export const StyledMenuItemSubtitle = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: '.75rem',
  lineHeight: '1.25rem',
  color: '#99A1AF',
  textTransform: 'capitalize'
}))
