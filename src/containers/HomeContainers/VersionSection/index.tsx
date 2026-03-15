import { Box, Typography, useTheme } from '@mui/material'

import PAccordion from './Accordion'

const VersionSection = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 1rem',
        border: '2px solid #D4D4D41A',
        borderRadius: '1rem',
        padding: '4rem',
        [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(2)
        },
        marginTop: '7rem',
        background: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(2.2px)',
        webkitBackdropFilter: 'blur(2.2px)'
      }}
    >
      <Box>
        <Typography variant="h2">Ctx editions</Typography>
        <Typography variant="body1" align="left">
          Different versions for different players, role your need and play freely.
        </Typography>
      </Box>
      <Box
        sx={{
          borderRadius: '12px',
          gap: '3.5rem',
          display: 'flex',
          flexBasis: '100%',
          maxWidth: theme.spacing(120),
          minHeight: 0
        }}
      >
        <PAccordion />
      </Box>
    </Box>
  )
}

export default VersionSection
