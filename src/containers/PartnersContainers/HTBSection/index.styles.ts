import { CardActionArea, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'

import HTBWallpaper from 'assets/partners/hackthebox/htb-wallpaper.png'

export const StyledHTBMainSponsorPaper = styled(Paper)(({ theme }) => ({
  color: '#FFFFFF',
  minHeight: '45vh',
  padding: theme.spacing(4),
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url('${HTBWallpaper.src}')`
}))

export const StyledHTBMainSponsorTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2)
  }
}))

export const StyledHTBMainSponsorCard = styled(CardActionArea)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(2)
}))
