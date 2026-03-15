import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { IconButton, Menu, MenuProps, styled, Typography } from '@mui/material'
import { useState } from 'react'

import { SyledCredentialsContainer, SyledCredentialsSpan } from './index.styles'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    border: '1px solid #00B8DB33',
    background: 'linear-gradient(135deg, rgba(26, 26, 46, 1) 0%, rgba(22, 33, 62, 1) 100%)',
    borderRadius: '0.875rem',
    padding: theme.spacing(2),
    transition: 'border-color .5s ease'
  }
}))

const CredentialsMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <InfoOutlinedIcon fontSize="small" color="primary" />
      </IconButton>
      <StyledMenu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <SyledCredentialsContainer>
          <Typography variant="body4" sx={{ color: '#ffffff' }}>
            Default Credentials:
          </Typography>
          <Typography variant="body1">
            user: <SyledCredentialsSpan>user</SyledCredentialsSpan>
          </Typography>
          <Typography variant="body1">
            password: <SyledCredentialsSpan>ctx</SyledCredentialsSpan>
          </Typography>
        </SyledCredentialsContainer>
      </StyledMenu>
    </div>
  )
}

export default CredentialsMenu
