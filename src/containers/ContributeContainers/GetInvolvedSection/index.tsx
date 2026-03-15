import { Grid, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

import contribute from './contribute'
import { StyledGetInvlovedCardActionArea } from './index.styles'

import PFeatureBlock from 'components/PFeatureBlock'

const GetInvolvedSection = () => {
  const theme = useTheme()

  return (
    <Grid container item xs={12} md={9} spacing={4} justifyContent="center">
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        alignItems="center"
        direction="column"
        wrap="nowrap"
        sx={{ marginTop: 19 }}
      >
        <Typography variant="h2" align="center" paragraph>
          Contribute to the Ctx Project
        </Typography>
        <Typography
          sx={{
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(6.5)
          }}
          variant="subtitle2Semi"
          align="center"
        >
          CtxOS was born as a fully open source project, anyone can see what is inside.
        </Typography>
      </Grid>
      {contribute.map((data, i) => (
        <Grid item sm={12} lg={6} key={`card-${i}`}>
          <Link href={data.url} passHref legacyBehavior>
            <StyledGetInvlovedCardActionArea>
              <PFeatureBlock title={data.title} Icon={data.icon}>
                {data.description}
              </PFeatureBlock>
            </StyledGetInvlovedCardActionArea>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default GetInvolvedSection
