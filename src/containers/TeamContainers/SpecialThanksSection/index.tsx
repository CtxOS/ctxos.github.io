import { Grid, Typography, GridProps, useTheme } from '@mui/material'

import specialthanks from './specialthanks'

import UserCard from 'components/UserCard'

const specialThanksData = specialthanks.map((data, i) => (
  <UserCard key={`id-${i}`} name={data.name} role={data.role} noAvatar={data.avatar} />
))

const SpecialThanks = (props: GridProps) => {
  const theme = useTheme()

  return (
    <Grid
      {...props}
      sx={{ marginTop: theme.spacing(15) }}
      container
      item
      xs={10}
      md={9}
      justifyContent="space-between"
    >
      <Grid item xs={12} md={3}>
        <Typography variant="h1" sx={{ marginBottom: theme.spacing(5) }}>
          Special Thanks
        </Typography>
        <Typography variant="subtitle2Semi" component="div" sx={{ marginBottom: theme.spacing(5) }}>
          CtxOS has also grown thanks to the important contributions of some people.
        </Typography>
      </Grid>
      <Grid container item xs={12} md={8} direction="row" spacing={3}>
        {specialThanksData}
      </Grid>
    </Grid>
  )
}

export default SpecialThanks
