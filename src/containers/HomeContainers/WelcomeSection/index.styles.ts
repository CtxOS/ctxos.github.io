import { Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'

import gradientOffset from 'lib/gradient'

export const StyledWelcomeSectionSbutitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 15.3
  }
}))

export const StyledReleaseNote = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  padding: '.5rem 1rem',
  [theme.breakpoints.down('sm')]: {
    padding: '.5rem',
    gap: '.2rem'
  }
}))

export const StyledWelcomeSectionHackers = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  [theme.breakpoints.up(1245)]: {
    backgroundImage: `linear-gradient(99.16deg, ${
      theme.palette.primary.main
    } 24.01%, ${gradientOffset(theme.palette.primary.main)} 81.75%)`,
    backgroundSize: '100%',
    backgroundRepeat: 'repeat',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-moz-background-clip': 'text',
    '-moz-text-fill-color': 'transparent'
  }
}))

export const StyledWelcomeSectionCursor = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 100,
  marginLeft: '-0.1rem',
  [theme.breakpoints.up(1350)]: {
    color: gradientOffset(theme.palette.primary.main)
  }
}))

export const StyledWelcomeSectionResponsiveGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}))

export const StyledWelcomeSectionRunningText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    minHeight: 255,
    margin: 0
  },
  [theme.breakpoints.down('md')]: {
    minHeight: 268
  },
  [theme.breakpoints.down('lg')]: {
    minHeight: 225
  },
  [theme.breakpoints.down(1350)]: {
    minHeight: 252
  }
}))
