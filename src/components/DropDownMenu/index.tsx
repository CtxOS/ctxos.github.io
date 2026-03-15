import ExpandMore from '@mui/icons-material/ExpandMore'
import { Menu, MenuItem, useTheme } from '@mui/material'
import { useState, MouseEvent } from 'react'

import { StyledDropDownButton, StyledDropDownMenuLink } from './index.styles'

type DropDownMenuProps = {
  menuItems: MenuItemProp[]
  buttonLabel: string
  buttonColor?: 'inherit' | 'primary' | 'secondary'
  buttonVariant?: 'contained' | 'outlined' | 'text'
  active?: boolean
}

type MenuItemProp = {
  label: string
  href: string
}
function DropdownMenu({
  menuItems,
  buttonLabel,
  buttonColor,
  buttonVariant,
  active
}: DropDownMenuProps) {
  const theme = useTheme()
  const [dropdownAnchor, setDropdownAnchor] = useState<null | HTMLElement>(null)

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setDropdownAnchor(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setDropdownAnchor(null)
  }

  return (
    <div>
      <StyledDropDownButton
        aria-haspopup="true"
        onClick={handleOpenMenu}
        variant={buttonVariant || 'contained'}
        color={buttonColor || 'primary'}
        endIcon={<ExpandMore />}
        sx={{
          textTransform: 'none',
          background:
            dropdownAnchor || active
              ? 'linear-gradient(135deg,rgba(0, 255, 240, 0.14) 0%,rgba(0, 255, 240, 0.02) 100%)'
              : 'transparent',
          border: dropdownAnchor || active ? '1px solid #00B8DB33' : '1px solid transparent'
        }}
      >
        {buttonLabel}
      </StyledDropDownButton>
      <Menu
        anchorEl={dropdownAnchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(dropdownAnchor)}
        onClose={handleCloseMenu}
        sx={{ marginTop: theme.spacing(0.5) }}
      >
        {menuItems.map((option, index) => {
          return (
            <StyledDropDownMenuLink key={index} href={option.href}>
              <MenuItem
                onClick={handleCloseMenu}
                sx={{
                  width: '200px',
                  '&:hover': { background: theme.palette.secondary.light, color: '#fff' }
                }}
              >
                {option.label}
              </MenuItem>
            </StyledDropDownMenuLink>
          )
        })}
      </Menu>
    </div>
  )
}

export default DropdownMenu
