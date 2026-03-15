import { Grid, Typography, useTheme } from '@mui/material'

import JuniorCorsairs from 'containers/CorsairsContainers/CorsairSection/JuniorCorsairs'
import MasterCorsairs from 'containers/CorsairsContainers/CorsairSection/MasterCorsairs'
import SeniorCorsairs from 'containers/CorsairsContainers/CorsairSection/SeniorCorsairs'
import ProjectSection from 'containers/CorsairsContainers/ProjectSection'
import { NextPageExtended } from 'src/types'

const Corsairs: NextPageExtended = () => {
  const theme = useTheme()

  return (
    <Grid
      container
      sx={{
        marginTop: '100px !important',
        maxWidth: theme.breakpoints.values.xl,
        margin: '0 auto'
      }}
      justifyContent="center"
    >
      <Grid
        container
        item
        xs={12}
        md={9}
        direction="column"
        sx={{
          marginTop: '10px',
          paddingBottom: '20px'
        }}
        justifyContent="center"
      >
        <Typography variant="h1" align="center" paragraph>
          Ctx Corsairs
        </Typography>
        <Typography
          sx={{
            marginTop: '27px',
            fontSize: 18,
            [theme.breakpoints.down('md')]: {
              fontSize: 16
            },
            marginBottom: theme.spacing(4)
          }}
          variant="subtitle2Semi"
          align="center"
        >
          At CtxOS, we believe the strength of our project lies not just in the code itself but in
          the community that supports and improves it every day. The more you contribute, the more
          you are rewarded.
        </Typography>
      </Grid>
      <ProjectSection />
      <JuniorCorsairs />
      <SeniorCorsairs />
      <MasterCorsairs />
    </Grid>
  )
}

Corsairs.hideEllipses = true

export default Corsairs
