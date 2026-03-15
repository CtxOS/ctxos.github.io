import { Grid, SvgIcon, Typography, useTheme } from '@mui/material'

import DownloadIcon from '../../Header/assets/downloadicon.svg'

import Star from './assets/staricon.svg'
import {
  StyledReleaseNote,
  StyledWelcomeSectionResponsiveGrid,
  StyledWelcomeSectionSbutitle
} from './index.styles'
import TypeWriter from './typewriter'

import PButton from 'components/PButton'

const WelcomeSection = () => {
  const theme = useTheme()

  return (
    <Grid
      item
      container
      xs={10}
      justifyContent="center"
      alignItems="center"
      direction="column"
      wrap="nowrap"
      gap={'32px'}
    >
      <StyledReleaseNote>
        <SvgIcon component={Star} />
        <Typography
          component="a"
          href="https://ctxos.github.io/blog/2026-02-11-ctx-7.1-release-notes"
          target="_blank"
          rel="noopener noreferrer"
          variant="body2"
          sx={{
            [theme.breakpoints.down('sm')]: {
              fontSize: '.9rem !important'
            }
          }}
        >
          CtxOS 7.1 is officially out!
        </Typography>
      </StyledReleaseNote>
      <TypeWriter />
      <StyledWelcomeSectionSbutitle variant="body1" align="center">
        The ultimate framework for your Cyber Security operations
      </StyledWelcomeSectionSbutitle>

      <StyledWelcomeSectionResponsiveGrid container item xs={12} sm={6} justifyContent="center">
        <PButton
          variant="contained"
          to="/download"
          gradient
          endIcon={<SvgIcon component={DownloadIcon} />}
          style={{
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.secondary.main,
            fontSize: '16px',
            fontWeight: 600
          }}
        >
          Download
        </PButton>
      </StyledWelcomeSectionResponsiveGrid>
    </Grid>
  )
}

export default WelcomeSection
