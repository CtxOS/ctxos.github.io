import { Box, styled, Typography } from '@mui/material'

interface StatProps {
  stat: string
  subtext: string
}

export const StyledStatBox = styled(Box)(({ theme }) => ({
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
  border: '0.56px solid #FFFFFF1A',
  borderRadius: '1rem',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 'fit-content',
  minWidth: '11.6rem',
  [theme.breakpoints.down(498)]: {
    width: '100%'
  },
  transition: 'border-color .3s ease',
  '&:hover': {
    borderColor: 'rgba(255, 255, 255, 0.2)'
  }
}))

export const StyledStat = styled(Typography)(({ theme }) => ({
  fontSize: '1.87rem',
  fontWeight: 700,
  color: theme.palette.primary.main
}))

const Stat = (props: StatProps) => {
  const { stat, subtext } = props

  return (
    <StyledStatBox>
      <StyledStat>{stat}</StyledStat>
      <Typography variant="body1">{subtext}</Typography>
    </StyledStatBox>
  )
}

export default Stat
