import Masonry from '@mui/lab/Masonry'
import { Grid, Typography, useTheme } from '@mui/material'

import products from './products'

import PButton from 'components/PButton'
import CommunitySection from 'containers/CommunityContainers/SocialsSection'

const StoreSection = () => {
  const theme = useTheme()

  return (
    <>
      <Grid container item xs={12} md={9} spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h1" align="center" paragraph>
            Ctx Security Store
          </Typography>
          <Typography
            sx={{
              marginTop: theme.spacing(1),
              marginBottom: theme.spacing(1)
            }}
            variant="subtitle2Semi"
            align="center"
            paragraph
          >
            Custom swag for the cyber security enthusiasts. Express your geekness!
          </Typography>
        </Grid>
        <Grid item>
          <PButton variant="outlined" to={'https://hackthebox.store/collections/ctx-swags'}>
            Check our Store
          </PButton>
        </Grid>
        <Grid item xs={12}>
          <Masonry columns={{ xs: 1, sm: 2 }} spacing={1}>
            {products.map((article, index) => (
              <div key={index}>
                <img
                  src={`${article.src}`}
                  srcSet={`${article.src}`}
                  loading="lazy"
                  style={{
                    borderRadius: 24,
                    display: 'block',
                    width: '100%'
                  }}
                />
              </div>
            ))}
          </Masonry>
        </Grid>
      </Grid>
      <>
        <CommunitySection />
      </>
    </>
  )
}

export default StoreSection
