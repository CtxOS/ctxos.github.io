import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const StyledFeatItem = styled(Box)(({ theme }) => ({
  border: '2px solid #038297',
  borderRadius: theme.shape.borderRadius,
  padding: '.5rem 1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  width: '600px',
  [theme.breakpoints.down(648)]: {
    width: 'auto',
    flexDirection: 'column'
  },
  transition: 'border-color .3s ease',
  '&:hover': {
    borderColor: 'rgb(0, 190, 204)'
  }
}))

export const StyledFeatItemRow = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.5rem'
}))

export const StyledKeyword = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 700,
  color: theme.palette.primary.main
}))

export const StyledKeywordDesc = styled(Typography)(() => ({
  fontSize: '1rem',
  fontWeight: 400,
  display: 'block'
}))
