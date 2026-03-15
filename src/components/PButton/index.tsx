import { Button, ButtonProps } from '@mui/material'
import { makeStyles } from '@mui/styles'
import cls from 'classnames'
import RouterLink from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 85,
    minWidth: 165,
    textTransform: 'none',
    fontSize: 14,
    fontWeight: 700,
    paddingTop: 11,
    paddingBottom: 11,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12
    }
  },
  outlined: {
    color: theme.palette.text.primary,
    borderColor: theme.palette.mode === 'dark' ? 'white' : 'black',
    '&:hover': {
      color: theme.palette.primary.main,
      '& svg': {
        fill: theme.palette.primary.main
      }
    }
  },
  text: {},
  contained: {
    color: theme.palette.mode === 'dark' ? '#03232E' : '#FFFFFF',
    background: theme.palette.mode === 'light' ? '#03232E' : '#FFFFFF'
  },
  gradient: {
    background:
      'linear-gradient(90deg, #00FFF0 0%, #02ABB5 100%), linear-gradient(107.09deg, rgba(255, 255, 255, 0) 23.71%, rgba(255, 255, 255, 0.05) 55.01%, rgba(255, 255, 255, 0.15) 86.31%)',
    transition: 'box-shadow 0.3s ease-in-out',
    ...(theme.palette.mode === 'light'
      ? {
          '&:hover': {
            boxShadow: 'none'
          }
        }
      : {}),
    color: '#03232E'
  }
}))

type PButtonProps = {
  gradient?: boolean
  to?: string
  children: string
  target?: string
} & Omit<ButtonProps, 'children'>

const PButton = ({
  className,
  children,
  gradient = false,
  variant = 'outlined',
  startIcon,
  to,
  target,
  style,
  size,
  ...rest
}: PButtonProps) => {
  const classes = useStyles()
  return to ? (
    <Button
      component={RouterLink}
      href={to}
      className={cls(
        classes.root,
        className,
        classes[variant],
        ...(gradient ? [classes.gradient] : [])
      )}
      startIcon={startIcon}
      variant={variant}
      style={style}
      size={size}
      disableElevation
      target={target}
      {...rest}
    >
      {children}
    </Button>
  ) : (
    <Button
      className={cls(
        classes.root,
        className,
        classes[variant],
        ...(gradient ? [classes.gradient] : [])
      )}
      startIcon={startIcon}
      variant={variant}
      style={style}
      size={size}
      disableElevation
      {...rest}
    >
      {children}
    </Button>
  )
}

export default PButton
