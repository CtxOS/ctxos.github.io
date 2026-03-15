import { CardActionArea, Grid, Paper } from '@mui/material'
import { styled } from '@mui/system'

export const StyledCollaborationsSectionCard = styled(CardActionArea)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(2),
  height: '100%'
}))

export const StyledCollaborationsSectionGrid = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(10)
}))
export const StyledCollaborationsSectionDescGrid = styled(Grid)(({ theme }) => ({
  paddingRight: theme.spacing(5)
}))

export const StyledCollaborationsSectionPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3)
}))

export const StyledCollaborationsSectionImg = styled('img')(({ theme }) => ({
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: theme.spacing(1)
}))
