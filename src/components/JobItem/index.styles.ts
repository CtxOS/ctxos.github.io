import { Paper, styled, Typography } from '@mui/material'

export const StyledJobItemPaper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2),
  color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
  padding: theme.spacing(4),
  width: 'auto'
}))

export const StyledJobItemText = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)',
  paddingBlock: theme.spacing(1.5)
}))
