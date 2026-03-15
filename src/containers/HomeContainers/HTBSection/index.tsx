import { Box, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

import htbScreenshot from './assets/htbScreenshot.webp'
import { StyledHTBSectionLogo } from './index.styles'

const HTBSection = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        position: 'relative',
        width: '60%',
        height: '36rem',
        [theme.breakpoints.down('sm')]: {
          width: '90%',
          height: 'auto'
        },
        zIndex: 1000
      }}
    >
      <Box
        sx={{
          background:
            'linear-gradient(93.14deg, rgba(0,255,240,0.1) -341.74%, rgba(2,171,181,0.1) -241.74%)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          clipPath: 'polygon(0 0, 85% 0, 100% 45%, 100% 100%, 0 100%)',
          [theme.breakpoints.down('lg')]: {
            clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)'
          },
          [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-start',
            justifyContent: 'normal',
            minHeight: '30rem'
          },
          width: '100%',
          overflow: 'visible',
          minHeight: '36rem'
        }}
      >
        <Link href="https://www.hackthebox.com/">
          <StyledHTBSectionLogo />
        </Link>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '25rem',
            overflow: 'visible',
            margin: '0 auto 0 0',
            [theme.breakpoints.down('lg')]: {
              margin: '0 auto 0 0'
            },
            [theme.breakpoints.down('md')]: {
              margin: '0 auto 0 0'
            },
            zIndex: 1000
          }}
        >
          <Typography variant="h2">
            Ctx OS now <br /> web-based
          </Typography>
          <Typography variant="body1">
            Pwnbox is a completely browser accessible virtual hacking distro including everything a
            hacker’s operating system should have.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '526px',
          height: '470px',
          position: 'absolute',
          right: -70,
          top: 80,
          borderRadius: '.25rem',
          display: 'block',
          border: `2px solid ${theme.palette.primary.main}`,
          [theme.breakpoints.down('lg')]: {
            display: 'none'
          },
          [theme.breakpoints.between(1280, 1496)]: {
            right: -200,
            top: 80
          }
        }}
      ></Box>
      <Box
        sx={{
          width: '526px',
          height: '470px',
          position: 'absolute',
          right: -100,
          top: 50,
          display: 'block',
          [theme.breakpoints.down('lg')]: {
            display: 'none'
          },
          [theme.breakpoints.between(1280, 1496)]: {
            right: -230,
            top: 50
          }
        }}
      >
        <img src={htbScreenshot.src} alt="Screenshot of Pwnbox" />
      </Box>
    </Box>
  )
}

export default HTBSection
