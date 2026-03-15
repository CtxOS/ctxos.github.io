import { Box, Divider, Stack, SvgIcon, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

import DownloadIcon from '../Header/assets/downloadicon.svg'

import DiscordIcon from './assets/discord.svg'
import FacebookIcon from './assets/facebook.svg'
import InstagramIcon from './assets/instagram.svg'
import LinkedinIcon from './assets/linkedin.svg'
import TelegramIcon from './assets/telegram.svg'
import WarrantCanary from './assets/warrant-canary.svg'
import XIcon from './assets/x.svg'
import FooterAccordion from './footerAccordion'
import {
  LightSpan,
  StyledFooterGridContainer,
  StyledLogoTitle,
  StyledCtxLogo,
  StyledFooterLink,
  StyledPrivacy,
  StyledLinkBox,
  StyledFooterWrapper,
  StyledFooterSectionText,
  StyledSocialLink
} from './index.styles'

import PButton from 'components/PButton'

const Footer = () => {
  const theme = useTheme()
  return (
    <StyledFooterWrapper>
      <StyledFooterGridContainer justifyContent="center" component="footer">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            marginBottom: '1rem',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
              alignItems: 'flex-start'
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: 'fit-content',
              marginBottom: '1rem',
              padding: '1rem',
              [theme.breakpoints.down('md')]: {
                marginBottom: '0'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <StyledCtxLogo />
              <StyledLogoTitle>
                Ctx
                <LightSpan>Sec</LightSpan>
              </StyledLogoTitle>
            </Box>
            <Typography variant="body1">
              The ultimate framework for your Cyber <br />
              Security operations
            </Typography>
            <PButton
              variant="contained"
              gradient
              to="/download"
              endIcon={<SvgIcon component={DownloadIcon} />}
              style={{
                borderRadius: '.25rem',
                color: theme.palette.secondary.main,
                fontSize: '16px',
                fontWeight: 600,
                width: 'fit-content',
                marginTop: '1rem'
              }}
            >
              Download
            </PButton>
          </Box>
          <Box
            sx={{
              display: 'none',
              [theme.breakpoints.down('md')]: {
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              },
              padding: '1rem',
              width: '100%'
            }}
          >
            <Divider />
            <FooterAccordion />
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '5rem',
              marginRight: '5rem',
              [theme.breakpoints.down('md')]: {
                display: 'none'
              }
            }}
          >
            <StyledLinkBox>
              <Typography variant="body2">Editions</Typography>
              <Link href="/download">
                {' '}
                <StyledFooterSectionText variant="body1">Home</StyledFooterSectionText>
              </Link>
              <Link href="/download">
                <StyledFooterSectionText variant="body1">Security</StyledFooterSectionText>
              </Link>
              <Link href="/download">
                {' '}
                <StyledFooterSectionText variant="body1">Hack The Box</StyledFooterSectionText>
              </Link>
              <Link href="/download">
                {' '}
                <StyledFooterSectionText variant="body1">WSL</StyledFooterSectionText>
              </Link>
              <Link href="/download">
                {' '}
                <StyledFooterSectionText variant="body1">
                  Debian Conversion Script
                </StyledFooterSectionText>
              </Link>
              <Link href="/download">
                {' '}
                <StyledFooterSectionText variant="body1">Docker Images</StyledFooterSectionText>
              </Link>
              <Link href="/download">
                {' '}
                <StyledFooterSectionText variant="body1">
                  Reaspberry Pi Images
                </StyledFooterSectionText>
              </Link>
            </StyledLinkBox>
            <StyledLinkBox>
              <Typography variant="body2">Resources</Typography>
              <Link href="/blog">
                {' '}
                <StyledFooterSectionText variant="body1">Blog</StyledFooterSectionText>
              </Link>
              <Link href="/community">
                <StyledFooterSectionText variant="body1">Community</StyledFooterSectionText>
              </Link>
              <Link href="/docs">
                {' '}
                <StyledFooterSectionText variant="body1">Documentation</StyledFooterSectionText>
              </Link>
              <Link href="/how-it-works">
                {' '}
                <StyledFooterSectionText variant="body1">How it works</StyledFooterSectionText>
              </Link>
            </StyledLinkBox>
            <StyledLinkBox>
              <Typography variant="body2">About us</Typography>
              <Link href="/team">
                {' '}
                <StyledFooterSectionText variant="body1">Team</StyledFooterSectionText>
              </Link>
              <Link href="/partners">
                <StyledFooterSectionText variant="body1">Partners</StyledFooterSectionText>
              </Link>
              <Link href="/donate">
                {' '}
                <StyledFooterSectionText variant="body1">Donate</StyledFooterSectionText>
              </Link>
            </StyledLinkBox>
          </Box>
        </Box>
        <Divider variant="middle" />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '1rem',
            padding: '0 1rem',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column-reverse',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '.5rem'
            }
          }}
        >
          <StyledPrivacy>
            © {new Date().getFullYear()} Ctx Security. All rights reserved.
          </StyledPrivacy>
          <Stack direction="row" spacing={2}>
            <StyledFooterLink href="/warrant">
              <Stack direction="row">
                <WarrantCanary
                  style={{ marginRight: theme.spacing(1), opacity: '50%' }}
                  width={21}
                  height={21}
                />
                Warrant Canary
              </Stack>
            </StyledFooterLink>
            <StyledFooterLink href="/privacy">Privacy Policy</StyledFooterLink>
          </Stack>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <StyledSocialLink href={'https://discord.com/invite/j7QTaCzAsm'}>
              <DiscordIcon />
            </StyledSocialLink>
            <StyledSocialLink href={'https://www.facebook.com/CtxOS/'}>
              <FacebookIcon />
            </StyledSocialLink>
            <StyledSocialLink href={'https://www.instagram.com/ctxproject/ '}>
              <InstagramIcon />
            </StyledSocialLink>
            <StyledSocialLink href={'https://www.linkedin.com/company/ctxos'}>
              <LinkedinIcon />
            </StyledSocialLink>
            <StyledSocialLink href={'https://t.me/ctxosgroup'}>
              <TelegramIcon />
            </StyledSocialLink>
            <StyledSocialLink href={'https://x.com/ctxos'}>
              <XIcon />
            </StyledSocialLink>
          </Box>
        </Box>
      </StyledFooterGridContainer>
    </StyledFooterWrapper>
  )
}

export default Footer
