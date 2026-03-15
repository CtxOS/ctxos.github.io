import { styled } from '@mui/styles'

export const StyledPIconLinkAnchor = styled('a')(() => ({
  display: 'flex',
  borderRadius: 6,
  boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.25)'
}))

const commonIconStyles = {
  background: '#FFF',
  borderRadius: 6
}

export const SmallStyledIcon = styled('span')({
  ...commonIconStyles,
  padding: 5,
  width: 64,
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
})

export const LargeStyledIcon = styled('span')(({ theme }) => ({
  ...commonIconStyles,
  padding: 16,
  width: 84,
  height: 84,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.25)',
  [theme.breakpoints.down('md')]: {
    width: 64,
    height: 64
  }
}))
