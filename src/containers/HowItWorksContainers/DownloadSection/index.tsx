import { SvgIcon, useTheme } from '@mui/material'

import DownloadIcon from '../../Header/assets/downloadicon.svg'

import {
  StyledDownloadButtonWrapper,
  StyledDownloadSectionDesc,
  StyledDownloadSectionTitle,
  StyledDownloadSectionWrapper
} from './index.styles'

import PButton from 'components/PButton'

const DownloadSection = () => {
  const theme = useTheme()
  return (
    <StyledDownloadSectionWrapper>
      <StyledDownloadSectionTitle variant="h4">Ready to Get Started?</StyledDownloadSectionTitle>
      <StyledDownloadSectionDesc variant="body1">
        Join thousands of security professionals, researchers, and enthusiasts who trust CtxOS for
        their security operations.
      </StyledDownloadSectionDesc>
      <StyledDownloadButtonWrapper>
        <PButton
          variant="contained"
          to="/download"
          gradient
          startIcon={<SvgIcon component={DownloadIcon} />}
          style={{
            borderRadius: theme.shape.borderRadius + 6,
            color: theme.palette.secondary.main,
            fontSize: '16px',
            fontWeight: 600,
            background: 'linear-gradient(180deg, #00B8DB 0%, #2B7FFF 100%)'
          }}
        >
          Download CtxOS
        </PButton>
        <PButton
          variant="contained"
          to="/docs"
          gradient
          style={{
            borderRadius: theme.shape.borderRadius + 6,
            color: 'white',
            fontSize: '16px',
            fontWeight: 600,
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            border: '1px solid #00B8DB80'
          }}
        >
          View Documentation
        </PButton>
      </StyledDownloadButtonWrapper>
    </StyledDownloadSectionWrapper>
  )
}

export default DownloadSection
