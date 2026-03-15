import { Box, Card, CardContent, styled } from '@mui/material'

export const StyledPostCardContent = styled(CardContent)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexFlow: 'column',
  padding: theme.spacing(2)
}))

export const StyledPostCardActionArea = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '100%'
}))

export const StyledPostCard = styled(Card)(() => ({
  background: 'rgba(255, 255, 255, 0.05)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(2.2px)',
  webkitBackdropFilter: 'blur(2.2px)',
  border: '1px solid #D4D4D41A',
  maxWidth: '22rem',
  height: 420,
  transition: 'border-color .4s ease',
  '&:hover': {
    borderColor: 'rgba(212, 212, 212, 0.34)'
  }
}))

export const StyledPostGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  bakcground: 'red',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: theme.spacing(2),
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr'
  },
  [theme.breakpoints.down(670)]: {
    gridTemplateColumns: '1fr',
    justifyItems: 'center'
  }
}))

export const StyledPostWrapper = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.xl,
  margin: '0 auto'
}))
