import { Box, Typography, useTheme } from '@mui/material'

import {
  StyledBunnyCdnImage,
  StyledCaidoImage,
  StyledHTBImage,
  StyledImageBox,
  StyledImageWrapper,
  StyledJetbrainsImage
} from './index.styles'

import { openInNewTab } from 'src/utils/openInNewTab'

const TrustSection = () => {
  const theme = useTheme()

  const handleClick = (url: string) => {
    openInNewTab(url)
  }

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1080px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem'
      }}
    >
      <Typography
        variant="h4"
        sx={{
          alignSelf: 'flex-start',
          [theme.breakpoints.down(1070)]: {
            alignSelf: 'center'
          }
        }}
      >
        In partnership with
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100%',
          [theme.breakpoints.down(400)]: {
            padding: `0 ${theme.spacing(2)}`
          }
        }}
      >
        <StyledImageWrapper onClick={() => handleClick('https://www.hackthebox.com/')}>
          <StyledImageBox>
            <StyledHTBImage sx={{ maxWidth: '80%', height: 'auto' }} />
          </StyledImageBox>
        </StyledImageWrapper>
        <StyledImageWrapper onClick={() => handleClick('https://bunny.net?ref=ppalfbefw3')}>
          <StyledImageBox>
            <StyledBunnyCdnImage sx={{ maxWidth: '80%', height: 'auto' }} />
          </StyledImageBox>
        </StyledImageWrapper>
        <StyledImageWrapper onClick={() => handleClick('https://caido.io/')}>
          <StyledImageBox>
            <StyledCaidoImage sx={{ maxWidth: '80%', height: 'auto' }} />
          </StyledImageBox>
        </StyledImageWrapper>
        <StyledImageWrapper onClick={() => handleClick('https://www.jetbrains.com/?var=')}>
          <StyledImageBox>
            <StyledJetbrainsImage sx={{ maxWidth: '80%', height: 'auto' }} />
          </StyledImageBox>
        </StyledImageWrapper>
      </Box>
    </Box>
  )
}

export default TrustSection
