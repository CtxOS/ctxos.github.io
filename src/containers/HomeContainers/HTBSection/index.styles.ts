import { styled } from '@mui/system'

import HTBLogo from './assets/htbLogo.svg'

export const StyledHTBSectionLogo = styled(HTBLogo)(({ theme }) => ({
  marginRight: 'auto',
  marginBottom: 31,
  width: '100%',
  height: 'auto',
  maxWidth: 249,
  maxHeight: 49,
  fill: theme.palette.mode === 'light' ? '#141D2B' : '#FFFFFF'
}))
