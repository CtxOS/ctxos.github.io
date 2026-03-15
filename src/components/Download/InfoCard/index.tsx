import { Typography } from '@mui/material'

import Code from '../assets/code.svg'
import Container from '../assets/container.svg'
import Core from '../assets/core.svg'
import Cursor from '../assets/cursor.svg'
import Hackthebox from '../assets/htb-cube.svg'
import Power from '../assets/power.svg'
import VirtualMachine from '../assets/vm.svg'
import Cloud from '../ComponentIcons/Cloud'
import Home from '../ComponentIcons/Home'
import Raspberry from '../ComponentIcons/Raspberry'
import Security from '../ComponentIcons/Security'
import Special from '../ComponentIcons/Special'

import { StyledIconBox, StyledInfoCard, StyledTextBox } from './index.styles'

import { EditionInfo } from 'src/types'

type InfoCardProps = {
  info: EditionInfo
  id: string
}

export const renderIcon = (key: string) => {
  switch (key) {
    case 'core':
      return <Core />
    case 'home':
      return <Home width="20" height="20" color="#00FFF0" />
    case 'security':
      return <Security width="20" height="20" color="#00FFF0" />
    case 'cloud':
      return <Cloud width="20" height="20" color="#00FFF0" />
    case 'vm':
      return <VirtualMachine />
    case 'container':
      return <Container />
    case 'power':
      return <Power />
    case 'cursor':
      return <Cursor />
    case 'hackthebox':
      return <Hackthebox />
    case 'special':
      return <Special width="20" height="20" color="#00FFF0" />
    case 'code':
      return <Code />
    case 'raspberry':
      return <Raspberry width="20" height="20" color="#00FFF0" />
    default:
      return null
  }
}

const InfoCard = (props: InfoCardProps) => {
  const { info, id } = props
  return (
    <StyledInfoCard id={id}>
      <StyledIconBox>{renderIcon(info.iconName)}</StyledIconBox>
      <StyledTextBox>
        <Typography variant="body2">{info.title}</Typography>
        <Typography variant="body3">{info.subtitle}</Typography>
      </StyledTextBox>
    </StyledInfoCard>
  )
}

export default InfoCard
