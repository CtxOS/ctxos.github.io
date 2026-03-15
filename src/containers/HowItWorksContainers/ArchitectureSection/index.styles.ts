import { Box, styled, Typography } from '@mui/material'

export const StyledArchTitle = styled(Typography)(({ theme }) => ({
  lineHeight: '3rem',
  [theme.breakpoints.down(445)]: {
    textAlign: 'center'
  }
}))

export const StyledStepTitle = styled(Typography)(() => ({
  fontSize: '1.125rem',
  lineHeight: '1.125rem'
}))

export const StyledStepNumber = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  display: 'grid',
  placeItems: 'center',
  minWidth: theme.spacing(4),
  minHeight: theme.spacing(4),
  alignSelf: 'flex-start',
  fontWeight: 700,
  color: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius + 6,
  background: theme.palette.primary.main
}))

export const StyledStepWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2)
}))

export const StyledStepTextContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  maxWidth: '31rem'
}))

export const StyledStepContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  gap: theme.spacing(2)
}))

export const StyledArchWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  border: '0.56px solid #FFFFFF1A',
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
  borderRadius: theme.shape.borderRadius + 6,
  margin: theme.spacing(2),
  padding: theme.spacing(6.125),
  [theme.breakpoints.down(1000)]: {
    flexWrap: 'wrap',
    width: 'fit-content',
    margin: theme.spacing(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(2)
  },
  [theme.breakpoints.down(500)]: {
    padding: theme.spacing(2)
  }
}))

export const StyledArchLayersWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  gap: theme.spacing(2),
  padding: `${theme.spacing(4.25)}`,
  border: '2px solid #038297',
  borderRadius: theme.shape.borderRadius + 6,
  background: 'linear-gradient(180deg, #052E5C 0%, #045879 100%)',
  [theme.breakpoints.down(445)]: {
    padding: theme.spacing(2)
  }
}))

export const StyledLayerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: `${theme.spacing(2)}`,
  border: '1px solid #00FFF04D',
  borderRadius: theme.shape.borderRadius + 6,
  background: theme.palette.secondary.main,
  width: '31rem',
  [theme.breakpoints.down(1170)]: {
    width: '28rem'
  },
  [theme.breakpoints.down(1070)]: {
    width: '25rem'
  },
  [theme.breakpoints.down('sm')]: {
    width: '20rem'
  },
  [theme.breakpoints.down(500)]: {
    width: '20rem'
  },
  [theme.breakpoints.down(400)]: {
    width: '17rem'
  }
}))

export const StyledLayerTitleIconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2)
}))

export const StyledLayerTitleText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 700,
  color: theme.palette.primary.main
}))
