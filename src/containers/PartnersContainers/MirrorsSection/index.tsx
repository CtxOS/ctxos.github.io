import { Grid, Typography, useTheme } from '@mui/material'
import dynamic from 'next/dynamic'

import PButton from 'components/PButton'

const MirrorsSection = () => {
  const theme = useTheme()

  /* Prevent SSR to avoid ReferenceError */
  const MapMirrors = dynamic(() => import('../../../components/Map'), {
    ssr: false
  })

  return (
    <Grid container item xs={12} md={9} sx={{ paddingTop: theme.spacing(5) }}>
      <Grid container item md={8}>
        <MapMirrors />
      </Grid>
      <Grid container item md={4} justifyContent="center" alignItems="center" direction="column">
        <Typography variant="h4">Mirrors</Typography>
        <Typography paragraph sx={{ margin: theme.spacing(3) }}>
          The software in the Ctx archive is delivered in form of deb packages, and these packages
          are served through a vast network of mirror servers that provide the same set of packages
          distributed all around the world for faster software delivery.
        </Typography>
        <PButton
          sx={{
            margin: theme.spacing(3),
            padding: `${theme.spacing(2, 10)} !important`,
            border: `1px solid ${
              theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.5) !important'
                : 'rgba(3, 35, 46, 0.5) !important'
            }`,
            borderRadius: '24px !important',
            '&:hover': {
              border: `1px solid ${theme.palette.primary.main} !important`
            }
          }}
          variant="outlined"
          to="https://ctxos.github.io/docs/mirrors-list.html"
        >
          Our mirrors
        </PButton>
      </Grid>
    </Grid>
  )
}

export default MirrorsSection
