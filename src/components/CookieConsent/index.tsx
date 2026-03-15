import { Snackbar, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import { StyledSnackbar } from './index.styles'

import PButton from 'components/PButton'

const CookieConsentBanner = () => {
  const [open, setOpen] = useState(true)

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (localStorage.getItem('cookieConsent') === 'true') {
      setOpen(false)
    }
  }, [])

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={open}
      onClose={handleClose}
    >
      <StyledSnackbar
        message={
          <Typography>
            This website is a safe place, we respect your privacy enough to skip the cookies and go
            straight to the content.
          </Typography>
        }
        action={
          <PButton
            variant="contained"
            color="primary"
            size="medium"
            onClick={handleAccept}
            style={{ borderRadius: '.25rem' }}
          >
            Accept
          </PButton>
        }
      />
    </Snackbar>
  )
}

export default CookieConsentBanner
