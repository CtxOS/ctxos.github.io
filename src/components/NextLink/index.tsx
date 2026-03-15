import { LinkProps as MuiLinkProps } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Link, { LinkProps } from 'next/link'

type NextLinkProps = Omit<MuiLinkProps, 'href' | 'classes'> &
  Pick<LinkProps, 'href' | 'as' | 'prefetch'>

const useStyles = makeStyles(() => ({
  nextLink: {
    color: '#05EEFF',
    textDecoration: 'underline',
    textDecorationColor: 'rgba(5, 238, 255, 0.4)',
    '&:hover': {
      textDecorationColor: '#05EEFF'
    }
  }
}))

const NextLink = ({ href, as, prefetch, ...props }: NextLinkProps) => {
  const classes = useStyles()
  const className = typeof props.className === 'string' ? props.className : classes.nextLink
  return (
    <Link href={href} as={as} prefetch={prefetch} className={className} passHref>
      {props.children}
    </Link>
  )
}
export default NextLink
