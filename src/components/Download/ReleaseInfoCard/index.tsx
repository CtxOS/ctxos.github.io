import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import { Box, Divider, Typography } from '@mui/material'

import CredentialsMenu from '../CredentialsMenu'

import {
  StyledReleaseInfoBox,
  StyledReleaseInfoItemBox,
  SyledReleaseArchitecture,
  SyledReleaseArchitectureBox,
  SyledReleaseCardContainer,
  SyledReleaseCardTitle,
  SyledReleaseInfoTitle,
  SyledReleaseVersion
} from './index.styles'

import { ReleaseInfo } from 'src/types'

type ReleaseCardProps = {
  release_info: ReleaseInfo
}

const ReleaseInfoCard = (props: ReleaseCardProps) => {
  const { release_info } = props

  return (
    <SyledReleaseCardContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <SyledReleaseCardTitle variant="body4" sx={{ color: '#FFFFFF' }}>
          Release Information
        </SyledReleaseCardTitle>
        <CredentialsMenu />
      </Box>
      <StyledReleaseInfoBox>
        <StyledReleaseInfoItemBox>
          <SyledReleaseInfoTitle variant="body1">Version</SyledReleaseInfoTitle>
          <SyledReleaseVersion>{release_info.version}</SyledReleaseVersion>
        </StyledReleaseInfoItemBox>
        <StyledReleaseInfoItemBox>
          <SyledReleaseInfoTitle variant="body1">Released</SyledReleaseInfoTitle>
          <Typography variant="body2">{release_info.release_date}</Typography>
        </StyledReleaseInfoItemBox>
        <StyledReleaseInfoItemBox>
          <SyledReleaseInfoTitle variant="body1">Size</SyledReleaseInfoTitle>
          <Typography variant="body2">{release_info.size}</Typography>
        </StyledReleaseInfoItemBox>
        <StyledReleaseInfoItemBox>
          <SyledReleaseInfoTitle variant="body1">Check Hashes</SyledReleaseInfoTitle>
          <a
            target="_blank"
            href="https://deb.ctx.sh/ctx/iso/7.1/signed-hashes.txt"
            rel="noopener noreferrer"
          >
            <OpenInNewRoundedIcon sx={{ color: '#99A1AF', fontSize: '1rem' }} fontSize="small" />
          </a>
        </StyledReleaseInfoItemBox>
      </StyledReleaseInfoBox>
      <Divider sx={{ background: '#00B8DB33' }} />
      <SyledReleaseArchitectureBox>
        <SyledReleaseInfoTitle variant="body1">Architecture</SyledReleaseInfoTitle>
        <Box>
          {release_info.architecture_tags.map((tag: string, index: number) => (
            <SyledReleaseArchitecture key={index}>{tag}</SyledReleaseArchitecture>
          ))}
        </Box>
      </SyledReleaseArchitectureBox>
    </SyledReleaseCardContainer>
  )
}

export default ReleaseInfoCard
