import { styled, SnackbarContent } from '@mui/material'

export const StyledSnackbar = styled(SnackbarContent)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.snackbar,
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  padding: '1rem 1rem !important',
  boxShadow: '0 -2px 5px rgba(5, 10, 64, 0.1)'
}))
