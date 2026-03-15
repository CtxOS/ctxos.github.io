import { Box } from '@mui/material'
import { useTheme } from '@mui/styles'

// import Wallpaper from 'assets/lorikeet.gif'

interface CtxBGProps {
  backgroundImage: string
}

const CtxBG = ({ backgroundImage }: CtxBGProps) => {
  const {
    palette: { mode }
  } = useTheme()

  return mode === 'dark' ? (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        opacity: 0.3,
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${backgroundImage}')`
      }}
    />
  ) : null
}

export default CtxBG
