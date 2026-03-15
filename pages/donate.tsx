import { Grid, Typography, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { SnackbarProvider } from 'notistack'

import DonateSection from 'containers/DonateContainers/DonateSection'
import { NextPageExtended } from 'src/types'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  headingSubTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6.5)
  },
  donate: {
    marginTop: 88,
    [theme.breakpoints.down('md')]: {
      marginTop: 50
    }
  },
  snackbar: {
    background: 'linear-gradient(99.16deg, #05EEFF 24.01%, #00FFF0 81.75%)',
    color: theme.palette.text.primary,
    borderRadius: 16
  }
}))

const Donate: NextPageExtended = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <SnackbarProvider preventDuplicate classes={{ variantSuccess: classes.snackbar }}>
      <Grid
        container
        className={classes.root}
        justifyContent="center"
        sx={{
          margin: '0 auto',
          maxWidth: theme.breakpoints.values.xl
        }}
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
            Buy Us A Coffee
          </Typography>
          <Typography className={classes.headingSubTitle} variant="subtitle2Semi" align="center">
            Level up your karma and make developers do a happy dance! <br />
            your donation helps directly the project&apos;s sustainability and help ensure its
            long-term viability
          </Typography>
        </Grid>
        <DonateSection className={classes.donate} />
      </Grid>
    </SnackbarProvider>
  )
}

Donate.hideEllipses = true

export default Donate
