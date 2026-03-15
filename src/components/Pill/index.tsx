import { Box, Typography } from '@mui/material'

interface PillProps {
  pillText: string
}

const Pill = (props: PillProps) => {
  const { pillText } = props

  return (
    <Box
      sx={{
        padding: '.5rem 1rem',
        borderRadius: '30px',
        border: '.5px solid #00B8DB4D',
        width: 'fit-content'
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          color: '#00D3F2'
        }}
      >
        {pillText}
      </Typography>
    </Box>
  )
}

export default Pill
