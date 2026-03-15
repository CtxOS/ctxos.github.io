import { Box, styled, Typography } from '@mui/material'

export const StyledDownloadSectionWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(3),
  background: 'linear-gradient(180deg, rgba(0, 184, 219, 0.1) 0%, rgba(43, 127, 255, 0.1) 100%)',
  border: '1px solid #00B8DB4D',
  borderRadius: theme.shape.borderRadius + 6,
  padding: `${theme.spacing(6)} ${theme.spacing(8)}`,
  margin: ` 0 ${theme.spacing(2)}`,
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`
  },
  [theme.breakpoints.down(400)]: {
    padding: `${theme.spacing(2)} ${theme.spacing(2)}`
  }
}))

export const StyledDownloadButtonWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap'
  }
}))

export const StyledDownloadSectionDesc = styled(Typography)(({ theme }) => ({
  maxWidth: theme.spacing(80),
  textAlign: 'center'
}))

export const StyledDownloadSectionTitle = styled(Typography)(() => ({
  textAlign: 'center'
}))
