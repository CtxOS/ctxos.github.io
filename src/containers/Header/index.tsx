import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Accordion,
  AccordionSummary,
  Box,
  Divider,
  Drawer,
  IconButton,
  SvgIcon,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import DownloadIcon from './assets/downloadicon.svg'
import {
  StyledDownloadBtnHolder,
  StyledHeaderAppBar,
  StyledHeaderLink,
  StyledHeaderNav,
  StyledLogo,
  StyledMobileLink
} from './index.styles'

import DropdownMenu from 'components/DropDownMenu'
import PButton from 'components/PButton'
import { LightSpan, StyledLogoTitle, StyledCtxLogo } from 'containers/Footer/index.styles'

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 .5rem'
}))

const TEAM: string[] = ['team', 'partners', 'corsairs']
const SUPPORT: string[] = ['store', 'donate']

const Header = () => {
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const router = useRouter()
  const pathname: string = router.pathname.replace('/', '')

  const drawer = (
    <Box
      sx={{
        padding: '2.6rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        height: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          width: '100%'
        }}
      >
        <StyledCtxLogo />
        <StyledLogoTitle>
          Ctx
          <LightSpan>Sec</LightSpan>
        </StyledLogoTitle>

        <IconButton
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          style={{ marginLeft: 'auto' }}
        >
          <CloseRoundedIcon sx={{ color: 'rgba(255,255,255,.8)', margin: '0 auto' }} />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <StyledMobileLink
          active={pathname === 'community'}
          onClick={() => handleDrawerToggle()}
          href="/community"
        >
          Community
        </StyledMobileLink>
        <Divider />
        <StyledMobileLink onClick={() => handleDrawerToggle()} href="/docs">
          Documentation
        </StyledMobileLink>
        <Divider />
        <StyledMobileLink
          active={pathname === 'how-it-works'}
          onClick={() => handleDrawerToggle()}
          href="/how-it-works"
        >
          How it works
        </StyledMobileLink>
        <Divider />
        <Accordion elevation={0} sx={{ backgroundColor: theme.palette.secondary.main }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="teamPanel-content"
            id="teamPanel-header"
            sx={{
              padding: 0
            }}
          >
            <Typography component="span">Team</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <StyledMobileLink
              active={pathname === 'team'}
              onClick={() => handleDrawerToggle()}
              href="/team"
            >
              Team
            </StyledMobileLink>
            <StyledMobileLink
              active={pathname === 'partners'}
              onClick={() => handleDrawerToggle()}
              href="/partners"
            >
              Partners
            </StyledMobileLink>
            <StyledMobileLink
              active={pathname === 'corsairs'}
              onClick={() => handleDrawerToggle()}
              href="/corsairs"
            >
              Corsairs
            </StyledMobileLink>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <StyledMobileLink
          active={pathname === 'blog'}
          onClick={() => handleDrawerToggle()}
          href="/blog"
        >
          Blog
        </StyledMobileLink>
        <Divider />
        <StyledMobileLink
          active={pathname === 'donate'}
          onClick={() => handleDrawerToggle()}
          href="/donate"
        >
          Donate
        </StyledMobileLink>
        <Divider />
        <StyledMobileLink
          active={pathname === 'store'}
          onClick={() => handleDrawerToggle()}
          href="/store"
        >
          Store
        </StyledMobileLink>
        <Divider />
      </Box>
      <StyledDownloadBtnHolder>
        <PButton
          variant="contained"
          gradient
          onClick={handleDrawerToggle}
          to="/download"
          endIcon={<SvgIcon component={DownloadIcon} />}
          style={{
            borderRadius: '.25rem',
            color: theme.palette.secondary.main,
            fontSize: '1rem',
            fontWeight: 600,
            width: '100%'
          }}
        >
          Download
        </PButton>
      </StyledDownloadBtnHolder>
    </Box>
  )

  return (
    <StyledHeaderAppBar color="transparent" position="static" elevation={0}>
      <Toolbar
        sx={{
          display: 'flex',
          gap: '129px',
          alignItems: 'center',
          justifyContent: { xs: 'space-around', lg: 'center' }
        }}
      >
        <Link href="/">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <StyledLogo />
          </Box>
        </Link>
        <Box sx={{ display: { lg: 'none', xs: 'flex' } }}>
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            style={{ marginLeft: 'auto' }}
          >
            {!mobileOpen && (
              <MenuIcon
                style={{
                  color: 'rgba(255,255,255,.8)'
                }}
              />
            )}
          </IconButton>
        </Box>
        <Box sx={{ display: { lg: 'flex', xs: 'none', gap: '24px', alignItems: 'center' } }}>
          <StyledHeaderNav>
            <StyledHeaderLink href="/docs">Documentation</StyledHeaderLink>
            <StyledHeaderLink active={pathname === 'community'} href="/community">
              Community
            </StyledHeaderLink>
            <StyledHeaderLink active={pathname === 'how-it-works'} href="/how-it-works">
              How it works
            </StyledHeaderLink>
            <DropdownMenu
              active={TEAM.includes(pathname)}
              menuItems={[
                { label: 'About us', href: '/team' },
                { label: 'Partners', href: '/partners' },
                { label: 'Corsairs', href: '/corsairs' }
              ]}
              buttonLabel="Team"
              buttonColor="inherit"
              buttonVariant="text"
            />
            <StyledHeaderLink active={pathname === 'blog'} href="/blog">
              Blog
            </StyledHeaderLink>
            <DropdownMenu
              active={SUPPORT.includes(pathname)}
              menuItems={[
                { label: 'Store', href: '/store' },
                { label: 'Donate', href: '/donate' }
              ]}
              buttonLabel="Support us"
              buttonColor="inherit"
              buttonVariant="text"
            />
          </StyledHeaderNav>
          <StyledDownloadBtnHolder>
            <PButton
              variant="contained"
              gradient
              to="/download"
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
          </StyledDownloadBtnHolder>
        </Box>
      </Toolbar>
      <nav>
        <Drawer
          open={mobileOpen}
          elevation={0}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            '& .MuiDrawer-paper': {
              height: '100%',
              boxSizing: 'border-box',
              width: '100%',
              backgroundColor: theme.palette.secondary.main
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </StyledHeaderAppBar>
  )
}

export default Header
