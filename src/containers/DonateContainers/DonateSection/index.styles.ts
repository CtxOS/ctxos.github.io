import { Box, Paper, styled, Typography } from '@mui/material'

export const StyledDonateSectionIconHolder = styled('div')(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  borderRadius: theme.spacing(8),
  backgroundColor: theme.palette.background.default,
  marginRight: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center'
}))

export const StyledDonateSectionLink = styled('div')(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.mode === 'light' ? '#03232E' : '#05EEFF',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  marginLeft: -theme.spacing(2),
  borderRadius: 10
}))

export const StyledDonateSectionTypography = styled(Typography)(() => ({
  opacity: 1
}))

export const StyledDonateSectionPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  wordBreak: 'break-word',
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column'
  },
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

export const StyledDonateSectionBitcoinBox = styled(Box)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  borderRadius: theme.spacing(4),
  backgroundColor: theme.palette.background.default
}))
