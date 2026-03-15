import { Paper } from '@mui/material'
import { styled } from '@mui/styles'

export const StyledSelectButtonPaper = styled(Paper)(({ theme }) => ({
  '& li:first-child': {
    borderTopLeftRadius: theme.spacing(2),
    borderTopRightRadius: theme.spacing(2)
  },
  '& li:last-child': {
    borderBottomLeftRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2)
  },
  '& li:first-child > .MuiTouchRipple-root': {
    borderTopLeftRadius: theme.spacing(2),
    borderTopRightRadius: theme.spacing(2)
  },
  '& li:last-child > .MuiTouchRipple-root': {
    borderBottomLeftRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2)
  }
}))
