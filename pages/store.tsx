import { Grid, useTheme } from '@mui/material'

import StoreSection from 'containers/StoreContainers/StoreSection'
import { NextPageExtended } from 'src/types'

const Store: NextPageExtended = () => {
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
      <StoreSection />
    </Grid>
  )
}

Store.hideEllipses = true

export default Store
