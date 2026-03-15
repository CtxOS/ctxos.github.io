import { Card, Grid, useTheme } from '@mui/material'

import contribute from './perks'

import PFeatureBlock from 'components/PFeatureBlock'

const GetInvolvedSection = () => {
  const theme = useTheme()

  return (
    <Grid container item xs={12} md={9} spacing={4} justifyContent="center">
      {contribute.map((data, i) => (
        <Grid item sm={12} lg={6} key={`card-${i}`}>
          <Card sx={{ borderRadius: theme.spacing(3), height: '100%' }}>
            <PFeatureBlock title={data.title} Icon={data.icon}>
              {data.description}
            </PFeatureBlock>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default GetInvolvedSection
