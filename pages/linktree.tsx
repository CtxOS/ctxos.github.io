import { Grid, Typography, useTheme } from '@mui/material'

import PButton from 'components/PButton'
import Socials from 'containers/Linktree/linktree/social'
import { NextPageExtended } from 'src/types'

const Linktree: NextPageExtended = () => {
  const theme = useTheme()

  const socialData = Socials.map((data, i) => (
    <PButton
      key={`id-${i}`}
      style={{
        marginTop: theme.spacing(3)
      }}
      variant="contained"
      gradient
      to={data.link}
    >
      {data.name}
    </PButton>
  ))

  return (
    <Grid
      container
      sx={{
        marginTop: theme.spacing(5)
      }}
      justifyContent="center"
    >
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        alignItems="center"
        direction="column"
        wrap="nowrap"
      >
        <Typography variant="h1" align="center" paragraph>
          Linktree
        </Typography>
        {socialData}
      </Grid>
    </Grid>
  )
}

Linktree.hideEllipses = true

export default Linktree
