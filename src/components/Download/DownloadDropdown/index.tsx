import { Menu, useTheme } from '@mui/material'
import { useState } from 'react'

import MagnetLink from '../assets/magnet.svg'
import ArrowRight from '../ComponentIcons/ArrowRight'

import DownloadIcon from './downloadIcon'
import {
  StyledDropdownBox,
  StyledDropdownBtn,
  StyledDropdownText,
  StyledMenuItem,
  StyledMenuItemIconBox,
  StyledMenuItemSubtitle,
  StyledMenuItemTextBox,
  StyledMenuItemTitle,
  StyledTextBox
} from './index.styles'

import { openInSameTab } from 'src/utils/openInNewTab'

interface DownloadDropdownProps {
  buttonText?: string
  directLink?: string
  torrentLink?: string
}

const DownloadDropdown = (props: DownloadDropdownProps) => {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const { buttonText, directLink, torrentLink } = props

  const handleClick = () => {
    const real_btn = document.getElementById('basic-button')
    setAnchorEl(real_btn)
  }
  const handleClose = (link?: string | undefined) => {
    if (link) openInSameTab(link)
    setAnchorEl(null)
  }

  return (
    <StyledDropdownBox>
      <StyledTextBox onClick={handleClick}>
        <DownloadIcon color="black" width="16" height="16" />
        <StyledDropdownText>{buttonText}</StyledDropdownText>
      </StyledTextBox>
      <div>
        <StyledDropdownBtn
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          disableRipple
        >
          <ArrowRight
            width="16"
            height="16"
            color="#000000"
            style={{
              transform: !anchorEl ? '' : 'rotate(90deg)',
              transition: ' transform .2s ease-in-out'
            }}
          />
        </StyledDropdownBtn>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => handleClose()}
          sx={{
            marginTop: theme.spacing(1),
            '& .MuiPaper-root': {
              background: 'linear-gradient(180deg, #1A1A2E 0%, #16213E 100%)',
              border: '1px solid #00B8DB4D',
              borderRadius: '0.625rem',
              padding: theme.spacing(1)
            },
            '& .MuiList-root': {
              padding: 0
            }
          }}
          slotProps={{}}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <StyledMenuItem onClick={() => handleClose(directLink)}>
            <StyledMenuItemIconBox>
              <DownloadIcon color={theme.palette.primary.main} width="20" height="20" />
            </StyledMenuItemIconBox>
            <StyledMenuItemTextBox>
              <StyledMenuItemTitle>Direct Download</StyledMenuItemTitle>
              <StyledMenuItemSubtitle>Fast HTTP/HTTPS download</StyledMenuItemSubtitle>
            </StyledMenuItemTextBox>
          </StyledMenuItem>
          <StyledMenuItem onClick={() => handleClose(torrentLink)}>
            <StyledMenuItemIconBox>
              <MagnetLink />
            </StyledMenuItemIconBox>
            <StyledMenuItemTextBox>
              <StyledMenuItemTitle>Torrent Download</StyledMenuItemTitle>
              <StyledMenuItemSubtitle>P2P distributed download</StyledMenuItemSubtitle>
            </StyledMenuItemTextBox>
          </StyledMenuItem>
        </Menu>
      </div>
    </StyledDropdownBox>
  )
}

export default DownloadDropdown
