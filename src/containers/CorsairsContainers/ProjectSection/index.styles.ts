import { Grid, styled, Typography } from '@mui/material'

export const StyledProjectSectionGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

export const StyledProjectSectionResponsiveGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}))

export const StyledProjectSectionTypography = styled(Typography)(() => ({
  opacity: 0.5
}))
