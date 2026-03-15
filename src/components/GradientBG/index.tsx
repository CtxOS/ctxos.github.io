import { Box } from '@mui/material'

import LeftGradient from '../../containers/HomeContainers/ToolsSection/assets/leftEllipse.png'
import BottomRightGradient from '../../containers/HomeContainers/ToolsSection/assets/rightBottomEllipse.png'
import RightGradient from '../../containers/HomeContainers/ToolsSection/assets/rightEllipse.png'

export const RightEllipse = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        right: 0,
        top: 300,
        zIndex: -10,
        backgroundImage: `url(${RightGradient.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'top right',
        overflow: 'visible'
      }}
    />
  )
}

export const LeftEllipse = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 1400,
        zIndex: -10,
        backgroundImage: `url(${LeftGradient.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        overflow: 'visible'
      }}
    />
  )
}

export const BottomEllipse = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        right: 0,
        top: 5400,
        zIndex: -10,
        backgroundImage: `url(${BottomRightGradient.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'top right',
        overflow: 'visible'
      }}
    />
  )
}
