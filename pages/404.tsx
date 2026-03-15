import { Alert, Button, Grid } from '@mui/material'
import Link from 'next/link'

import { NextPageExtended } from 'src/types'

const Page404: NextPageExtended = () => (
  <Grid container justifyContent="center">
    <Grid item xs={10} md={9}>
      <Alert
        severity="error"
        action={
          <Link href="/">
            <Button color="inherit" size="small" sx={{ textTransform: 'none' }}>
              Go Home
            </Button>
          </Link>
        }
      >
        <b>404 - Oh no&apos;s! We couldn&apos;t find that page :(</b>
      </Alert>
    </Grid>
  </Grid>
)

Page404.hideEllipses = true

export default Page404
