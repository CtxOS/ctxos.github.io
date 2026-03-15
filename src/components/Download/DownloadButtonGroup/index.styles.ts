import { Box, Button, styled, Typography } from '@mui/material'

export const StyledButtonText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: 'rgba(255, 255, 255, 1)',
  textTransform: 'capitalize',
  [theme.breakpoints.down('sm')]: {
    fontSize: '.75rem'
  },
  [theme.breakpoints.down(365)]: {
    fontSize: '.75rem'
  }
}))

export const StyledDownloadButtonGroupBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  border: '1px solid #00B8DB33',
  padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
  borderRadius: '.875rem',
  background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.8) 100%)',
  gap: '.5rem',
  [theme.breakpoints.down(455)]: {
    gap: '.2rem'
  },
  [theme.breakpoints.down(400)]: {
    padding: `${theme.spacing(1)} ${theme.spacing(0.4)}`
  },
  [theme.breakpoints.down(365)]: {
    gap: 0
  }
}))

interface StyledGroupButtonProps {
  active?: boolean
}

export const StyledGroupButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'active' && prop !== 'variantType'
})<StyledGroupButtonProps>(({ theme, active }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '.875rem',
  padding: `${theme.spacing(1.5)} ${theme.spacing(11)}`,
  background: active
    ? 'linear-gradient(135deg, rgba(0, 184, 219, 0.2) 0%, rgba(43, 127, 255, 0.2) 100%)'
    : 'transparent',

  '&:hover': {
    background: active
      ? 'linear-gradient(135deg, rgba(0, 184, 219, 0.2) 0%, rgba(43, 127, 255, 0.2) 100%)'
      : 'rgba(128, 128, 128, 0.10)'
  },
  // For transitions its better to use boxshadow instead of border
  boxShadow: active ? 'inset 0 0 0 1px #00D3F280' : 'inset 0 0 0 1px transparent',
  transition: 'background .35s ease, box-shadow .35s ease',
  [theme.breakpoints.down('lg')]: {
    padding: `${theme.spacing(1.5)} ${theme.spacing(7)}`
  },
  [theme.breakpoints.down('md')]: {
    padding: `${theme.spacing(1.5)} ${theme.spacing(4)}`
  },
  [theme.breakpoints.down(710)]: {
    padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`
  },
  [theme.breakpoints.down(640)]: {
    padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`
  },
  [theme.breakpoints.down(505)]: {
    padding: `${theme.spacing(1.5)} ${theme.spacing(1.5)}`
  },
  [theme.breakpoints.down(471)]: {
    padding: `${theme.spacing(1.5)} ${theme.spacing(1.2)}`
  },
  [theme.breakpoints.down(455)]: {
    padding: `${theme.spacing(1)} ${theme.spacing(0.7)}`
  },
  [theme.breakpoints.down(420)]: {
    padding: `${theme.spacing(1)} ${theme.spacing(0.5)}`
  },
  [theme.breakpoints.down(400)]: {
    padding: `${theme.spacing(1)} 0`
  }
}))
