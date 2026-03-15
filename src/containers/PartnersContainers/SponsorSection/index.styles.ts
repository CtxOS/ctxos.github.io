import { CardActionArea, Paper, Theme } from '@mui/material'
import { styled } from '@mui/system'

import BunnyLogo from 'containers/HomeContainers/PartnerSection/assets/bunnycdn.svg'
import CaidoLogo from 'containers/HomeContainers/PartnerSection/assets/caido.svg'

export const StyledSponsorCard = styled(CardActionArea)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(2),
  height: '100%'
}))

export const StyledSponsorPaper = styled(Paper)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(4)
}))

const sharedStyles = (theme: Theme) => ({
  width: '100%',
  backgroundSize: 'cover',
  display: 'block',
  margin: 'auto',
  fill: theme.palette.mode === 'dark' ? 'white' : 'inherit',
  '& #linode-block': {
    fill: '#03232E'
  },
  '& #linode-text': {
    fill: theme.palette.mode === 'light' ? '#03232E' : '#FFF'
  },
  '& #bunny-text': {
    fill: theme.palette.mode === 'light' ? '#03232E' : '#FFF'
  }
})

export const StyledSponsorBunnyLogo = styled(BunnyLogo)(({ theme }) => ({
  ...sharedStyles(theme)
}))

export const StyledSponsorCaidoLogo = styled(CaidoLogo)(({ theme }) => ({
  ...sharedStyles(theme),
  maxHeight: theme.spacing(16)
}))
