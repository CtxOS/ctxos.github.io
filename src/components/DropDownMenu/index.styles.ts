import { Button, Link, styled } from '@mui/material'

export const StyledDropDownButton = styled(Button)(({ theme }) => ({
  fontSize: 16,
  fontFamily: 'museo-sans',
  borderRadius: theme.shape.borderRadius,
  textDecoration: 'none',
  transition: '.2s ease-in 0s',
  backgroundColor: 'none',
  color: theme.palette.mode === 'dark' ? '#FFF' : 'rgba(0, 0, 0, 0.5)',
  border: '1px solid transparent',
  padding: theme.spacing(1),
  margin: 0,
  outline: 'none',
  '&:hover': {
    background: 'linear-gradient(135deg,rgba(0, 255, 240, 0.14) 0%,rgba(0, 255, 240, 0.02) 100%)',
    border: '1px solid #00B8DB33'
  },
  '&:focus': {
    textDecoration: 'none'
  },
  [theme.breakpoints.down('lg')]: {
    paddingLeft: 0
  },
  '&:active': {
    background: 'linear-gradient(135deg,rgba(0, 255, 240, 0.14) 0%,rgba(0, 255, 240, 0.02) 100%)'
  }
}))

export const StyledDropDownMenuLink = styled(Link)(({ theme }) => ({
  fontSize: 16,
  fontFamily: 'museo-sans',
  textDecoration: 'none',
  transition: '.2s ease-in 0s',
  backgroundColor: 'none',
  color: theme.palette.mode === 'dark' ? '#FFF' : 'rgba(0, 0, 0, 0.5)',
  '&:hover': {
    textDecoration: 'none',
    color: '#05EEFF'
  },
  '&:focus': {
    textDecoration: 'none'
  },
  [theme.breakpoints.down('lg')]: {
    paddingLeft: 0
  }
}))
