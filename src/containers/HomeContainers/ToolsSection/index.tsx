import { Grid, GridProps } from '@mui/material'

import aircrackScreenshot from './assets/aircrack.webp'
import johnnyScreenshot from './assets/johnny.webp'
import niktoScreenshot from './assets/nikto.webp'
import ophcrackScreenshot from './assets/ophcrack.webp'
import vscodiumScreenshot from './assets/vscodium.webp'
import wiresharkScreenshot from './assets/wireshark.webp'
import { StyledToolsCarouselImg, StyledToolsPaper } from './index.styles'

import Carousel from 'components/Carousel'

const ToolsSection = (rest: GridProps) => {
  const screenshots = [
    aircrackScreenshot,
    johnnyScreenshot,
    niktoScreenshot,
    ophcrackScreenshot,
    vscodiumScreenshot,
    wiresharkScreenshot
  ]

  return (
    <>
      <Grid {...rest} container item xs={12} md={9} sx={{ zIndex: 10 }}>
        <StyledToolsPaper elevation={0}>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Grid container justifyContent="center">
              <Grid item xs={11}>
                <Carousel>
                  {screenshots.map((image, i) => (
                    <StyledToolsCarouselImg
                      src={image.src}
                      alt={`screenshot-${i}`}
                      key={`screenshot-${i}`}
                    />
                  ))}
                </Carousel>
              </Grid>
            </Grid>
          </Grid>
        </StyledToolsPaper>
      </Grid>
    </>
  )
}

export default ToolsSection
