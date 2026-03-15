import { Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'

import gradientOffset from 'lib/gradient'

export const StyledStatsSectionPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(10),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5)
  },
  ...(theme.palette.mode === 'light'
    ? {
        background: `linear-gradient(99.16deg, ${
          theme.palette.primary.main
        } 24.01%, ${gradientOffset(theme.palette.primary.main)} 81.75%)`
      }
    : {})
}))

export const StyledStatsSectionContent = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingRight: theme.spacing(3),
    margin: 0
  }
}))

export const StyledOuterShape = styled(Grid)(() => ({
  width: '335px',
  height: '306px',
  background: '#00FFF0',
  opacity: '1',
  clipPath: 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 0 100%)'
}))

export const StyledInnerShape = styled(Grid)(() => ({
  background: '#06184C',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '1rem',
  height: '100%',
  width: '100%',
  clipPath: 'polygon(.5% .5%, 69.5% .5%, 99.5% 30.5%, 99.5% 99.5%, .5% 99.5%)'
}))

export const StyledStatTitle = styled(Typography)(() => ({
  fontSize: '2.6rem',
  lineHeight: '2.8rem',
  fontWeight: 700
}))

export const StyledStatDesc = styled(Typography)(() => ({
  fontSize: '.8rem',
  fontWeight: 400,
  wordBreak: 'break-word'
}))
