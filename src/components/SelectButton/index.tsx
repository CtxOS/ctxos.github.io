import { ArrowDropDown } from '@mui/icons-material'
import {
  ButtonProps,
  MenuItem,
  MenuItemProps,
  ClickAwayListener,
  Grow,
  MenuList,
  Popper
} from '@mui/material'
import { createContext, ReactNode, useContext, useRef, useState } from 'react'

import { StyledSelectButtonPaper } from './index.style'

import PButton from 'components/PButton'

type SelectButtonProps = {
  label: string
  children: ReactNode
} & ButtonProps

const SelectButtonContext = createContext(() => {
  console.log('yikes')
})

export const SelectButtonItem = ({ onClick, children, ...rest }: Omit<MenuItemProps, 'button'>) => {
  const handleClose = useContext(SelectButtonContext)
  return (
    <MenuItem
      onClick={e => {
        if (onClick) onClick(e)
        handleClose()
      }}
      {...rest}
    >
      {children}
    </MenuItem>
  )
}

const SelectButton = ({ children, label, ...buttonProps }: SelectButtonProps) => {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<SVGSVGElement>(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  const handleMenuItemClick = () => {
    setOpen(false)
  }

  return (
    <>
      <div>
        <PButton
          onClick={handleToggle}
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          fullWidth
          endIcon={
            <ArrowDropDown
              sx={{
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: theme =>
                  theme.transitions.create('transform', {
                    duration: theme.transitions.duration.short
                  })
              }}
              ref={anchorRef}
            />
          }
          {...buttonProps}
        >
          {label}
        </PButton>
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 2000 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <StyledSelectButtonPaper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  <SelectButtonContext.Provider value={handleMenuItemClick}>
                    {children}
                  </SelectButtonContext.Provider>
                </MenuList>
              </ClickAwayListener>
            </StyledSelectButtonPaper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default SelectButton
