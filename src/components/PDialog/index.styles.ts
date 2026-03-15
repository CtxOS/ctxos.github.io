import { DialogTitle, IconButton } from '@mui/material'
import { styled } from '@mui/styles'

export const StyledPDialogIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2.5),
  fill: theme.palette.mode === 'dark' ? '#FFFFFF' : '#06043E'
}))

export const StyledPDialogTitle = styled(DialogTitle)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2)
}))
