import { Box, Paper, styled } from '@mui/material'
import { ComponentType } from 'react'

export function withStyledFill<T extends object>(SvgComponent: ComponentType<T>) {
  return styled(SvgComponent)(({ theme }) => ({
    fill: theme.palette.mode === 'dark' ? '#FFFFFF' : '#06043E'
  }))
}

export const StyledSocialSectionPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(8),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4)
  }
}))

export const StyledSocialSectionBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  gap: theme.spacing(4)
}))
