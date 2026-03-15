import { Grid, Typography, GridProps, Box, Paper, useTheme } from '@mui/material'
import { styled } from '@mui/system'
import { Children, useState } from 'react'

import PButton from 'components/PButton'
import UsersDialog from 'src/components/PDialog/Users'

export const StyledContributorsSectionImg = styled('img')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: 100,
  paddingBottom: theme.spacing(2),
  margin: 'auto'
}))

type ContributorsSectionProps = {
  heading?: string
  title: string
  subtitle: string
  imageSrc?: string
} & GridProps

const ContributorsSection = ({
  heading,
  title,
  subtitle,
  imageSrc,
  children,
  ...rest
}: ContributorsSectionProps) => {
  const theme = useTheme()

  const [open, setOpen] = useState(false)

  const btnStyles = {
    marginTop: theme.spacing(3),
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
  }

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Grid
      {...rest}
      sx={{ marginTop: theme.spacing(10) }}
      container
      item
      xs={12}
      md={9}
      justifyContent="center"
    >
      <Grid item xs={10}>
        <Box
          sx={{
            textTransform: 'uppercase',
            marginBottom: 20
          }}
          fontWeight={700}
          color="#05EEFF"
          letterSpacing="0.1em"
          textAlign="center"
        >
          <span style={{ fontWeight: 'bold' }}>{heading}</span>
        </Box>
        {imageSrc && <StyledContributorsSectionImg src={imageSrc} />}
        <Typography
          sx={{
            marginTop: 0,
            marginBottom: 5
          }}
          variant="h1"
          align="center"
        >
          {title}
        </Typography>
        <Typography
          sx={{ marginTop: theme.spacing(3) }}
          variant="subtitle2Semi"
          component="div"
          align="center"
        >
          {subtitle}
        </Typography>
      </Grid>
      <Grid
        sx={{ marginTop: theme.spacing(7) }}
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
      >
        <Paper sx={{ padding: theme.spacing(5) }} elevation={0}>
          <Grid container justifyContent="center" spacing={3}>
            {Children.toArray(children).slice(0, 6)}
          </Grid>
          <Grid container justifyContent="center">
            <PButton sx={{ ...btnStyles }} variant="outlined" onClick={handleClickOpen}>
              View All Contributors
            </PButton>
          </Grid>
          <UsersDialog open={open} onClose={handleClose} fullWidth={true} title={title}>
            {children}
          </UsersDialog>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ContributorsSection
