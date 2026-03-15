import Groups2Icon from '@mui/icons-material/Groups2'
import { Box, Typography, useTheme } from '@mui/material'

import HackTheBox from '../assets/htb-cube.svg'
import Home from '../ComponentIcons/Home'
import Raspberry from '../ComponentIcons/Raspberry'
import Security from '../ComponentIcons/Security'
import Special from '../ComponentIcons/Special'
import DownloadAccordion from '../DownloadAccordion'
import DownloadDropdown from '../DownloadDropdown'

import {
  StyledCardDescription,
  StyledCardTitle,
  StyledCardTitleBox,
  StyledCardWrapperBox
} from './index.styles'

import { Edition, Editions } from 'src/types'

type EditionCardProps = {
  edition: Edition
}

type IconData = {
  border: string
  background: string
  icon: JSX.Element
}

type IconsType = Record<Editions, IconData>

const icons: IconsType = {
  security: {
    border: '2px solid #69E1EE60',
    background:
      'linear-gradient(135deg, rgba(105, 225, 238, 0.19) 0%, rgba(105, 225, 238, 0.063) 100%)',
    icon: <Security width="32" height="32" color="#69E1EE" />
  },
  home: {
    border: '2px solid #00FFF060',
    background:
      'linear-gradient(135deg, rgba(0, 255, 240, 0.19) 0%, rgba(0, 255, 240, 0.063) 100%)',
    icon: <Home width="32" height="32" color="#00FFF0" />
  },
  hackthebox: {
    border: '2px solid #9FEF0060',
    background:
      'linear-gradient(135deg, rgba(159, 239, 0, 0.19) 0%, rgba(159, 239, 0, 0.063) 100%)',
    icon: <HackTheBox width={32} height={32} />
  },
  spins: {
    border: '2px solid #9FEF0060',
    background:
      'linear-gradient(135deg, rgba(159, 239, 0, 0.19) 0%, rgba(159, 239, 0, 0.063) 100%)',
    icon: <Groups2Icon sx={{ color: '#9FEF00', width: 32, height: 32 }} />
  },
  raspberry: {
    border: '2px solid #C51A4A60',
    background:
      'linear-gradient(135deg, rgba(197, 26, 74, 0.19) 0%, rgba(197, 26, 74, 0.063) 100%)',
    icon: <Raspberry width="32" height="32" color="#C51A4A" />
  },
  special: {
    border: '2px solid #FF6B9D60',
    background:
      'linear-gradient(135deg, rgba(255, 107, 157, 0.19) 0%, rgba(255, 107, 157, 0.063) 100%)',
    icon: <Special width="32" height="32" color="#FF6B9D" />
  }
}

const renderIcon = (key: Editions) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        background: icons[key].background,
        borderRadius: '16px',
        border: icons[key].border,
        width: 'fit-content',
        display: 'grid',
        placeItems: 'center',
        padding: theme.spacing(2)
      }}
    >
      {icons[key].icon}
    </Box>
  )
}

const EditionCard = (props: EditionCardProps) => {
  const { edition } = props
  const theme = useTheme()
  return (
    <StyledCardWrapperBox
      sx={{
        backgroundImage: `
      radial-gradient(rgba(128, 128, 128, 0.1) 1px, transparent 0),
      ${edition.background}
    `,
        backgroundRepeat: 'repeat, no-repeat',
        backgroundSize: '30px 30px, cover',
        backgroundPosition: '-500px 0, 0 0'
      }}
    >
      <StyledCardTitleBox>
        {renderIcon(edition.key)}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: theme.spacing(1) }}>
          <StyledCardTitle variant="h5">{edition.title}</StyledCardTitle>
          <Typography variant="body4">{edition.subtitle}</Typography>
        </Box>
      </StyledCardTitleBox>
      <StyledCardDescription variant="body4">{edition.description}</StyledCardDescription>
      {edition.type === 'menu' && (
        <DownloadDropdown
          buttonText={edition.downloadOptions?.buttonText}
          directLink={edition.downloadOptions?.direct}
          torrentLink={edition.downloadOptions?.torrent}
        />
      )}
      {edition.type === 'accordion' && <DownloadAccordion edition={edition} />}
    </StyledCardWrapperBox>
  )
}

export default EditionCard
