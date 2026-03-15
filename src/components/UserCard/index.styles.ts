import { styled } from '@mui/material'

import Email from './assets/Email.svg'
import Github from './assets/Github.svg'
import LinkedIn from './assets/LinkedIn.svg'
import Twitter from './assets/Twitter.svg'

export const StyledTwitter = styled(Twitter)(({ theme }) => ({
  display: 'block',
  margin: 'auto',
  fill: theme.palette.mode === 'light' ? 'white' : 'inherit',

  '& #twitter': {
    stroke: theme.palette.mode === 'light' ? '#06043E' : '#FFF',
    fill: theme.palette.mode === 'light' ? '#06043E' : '#FFF'
  }
}))

export const StyledGithub = styled(Github)(({ theme }) => ({
  display: 'block',
  margin: 'auto',
  fill: theme.palette.mode === 'light' ? 'white' : 'inherit',

  '& #github': {
    stroke: theme.palette.mode === 'light' ? '#06043E' : '#FFF',
    fill: theme.palette.mode === 'light' ? '#06043E' : '#FFF'
  }
}))

export const StyledLinkedIn = styled(LinkedIn)(({ theme }) => ({
  display: 'block',
  margin: 'auto',
  fill: theme.palette.mode === 'light' ? 'white' : 'inherit',

  '& #linkedin': {
    stroke: theme.palette.mode === 'light' ? '#06043E' : '#FFF',
    fill: theme.palette.mode === 'light' ? '#06043E' : '#FFF'
  }
}))

export const StyledEmail = styled(Email)(({ theme }) => ({
  display: 'block',
  margin: 'auto',
  fill: theme.palette.mode === 'light' ? 'white' : 'inherit',

  '& #email': {
    stroke: theme.palette.mode === 'light' ? '#06043E' : '#FFF',
    fill: theme.palette.mode === 'light' ? '#06043E' : '#FFF'
  }
}))
