import { Grid, Paper } from '@mui/material'
import { styled } from '@mui/system'

export const StyledToolsPaper = styled(Paper)(({ theme }) => ({
  background: 'none',
  paddingTop: 75,
  width: '100%',
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 75,
  [theme.breakpoints.down('sm')]: {
    padding: ' 0 1rem'
  }
}))

export const StyledToolsCarouselImg = styled('img')(() => ({
  display: 'block',
  margin: 'auto'
}))

export const StyledToolsResponsiveGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}))
