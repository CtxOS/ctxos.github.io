import Groups2Icon from '@mui/icons-material/Groups2'
import { Dispatch, SetStateAction } from 'react'

import Home from '../ComponentIcons/Home'
import Raspberry from '../ComponentIcons/Raspberry'
import Security from '../ComponentIcons/Security'
import Special from '../ComponentIcons/Special'

import { StyledButtonText, StyledDownloadButtonGroupBox, StyledGroupButton } from './index.styles'

import { Editions } from 'src/types'

type DownloadButtonGroupProps = {
  edition: string
  setEdition: Dispatch<SetStateAction<Editions>>
}

type Edition = {
  key: Editions
  button_text: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const editions: Edition[] = [
  {
    key: 'security',
    button_text: 'Security',
    Icon: () => <Security width="16" height="16" color="#69E1EE" />
  },
  { key: 'home', button_text: 'Home', Icon: () => <Home width="16" height="16" color="#69E1EE" /> },
  // { key: 'hackthebox', button_text: 'Hack The Box', Icon: HackTheBox },
  {
    key: 'spins',
    button_text: 'Spins',
    Icon: () => <Groups2Icon sx={{ color: '#9FEF00', width: 18, height: 18 }} />
  },
  {
    key: 'raspberry',
    button_text: 'Raspberry',
    Icon: () => <Raspberry height="16" width="16" color="#C51A4A" />
  },
  {
    key: 'special',
    button_text: 'Special',
    Icon: () => <Special height="16" width="16" color="#FF6B9D" />
  }
]

const DownloadButtonGroup = (props: DownloadButtonGroupProps) => {
  const { edition, setEdition } = props

  const handleEditionChange = (edition: Editions) => {
    setEdition(edition)
  }

  return (
    <StyledDownloadButtonGroupBox>
      {editions.map(({ key, button_text, Icon }: Edition, index: number) => (
        <StyledGroupButton
          active={edition === key}
          onClick={() => handleEditionChange(key)}
          key={index}
          disableRipple
        >
          <Icon />
          <StyledButtonText variant="body3">{button_text}</StyledButtonText>
        </StyledGroupButton>
      ))}
    </StyledDownloadButtonGroupBox>
  )
}

export default DownloadButtonGroup
