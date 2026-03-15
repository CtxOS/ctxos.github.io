import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import { useTheme } from '@mui/material'
import { useState } from 'react'

import Container from '../assets/container.svg'
import Core from '../assets/core.svg'
import Debian from '../assets/debian.svg'
import Enlightenment from '../assets/enlightenment.svg'
import MagnetIcon from '../assets/magnet.svg'
import VirtualMachine from '../assets/vm.svg'
import Cloud from '../ComponentIcons/Cloud'
import Home from '../ComponentIcons/Home'
import Lxqt from '../ComponentIcons/Lxqt'
import Mate from '../ComponentIcons/Mate'
import Security from '../ComponentIcons/Security'
import DownloadIcon from '../DownloadDropdown/downloadIcon'
import { StyledMenuItemIconBox, StyledMenuItemTextBox } from '../DownloadDropdown/index.styles'

import {
  StyledAccordionItemSubtitle,
  StyledAccordionItemTitle,
  StyledDownloadAccordion,
  StyledDownloadAccordionBox,
  StyledDownloadAccordionDetails,
  StyledDownloadAccordionItemButton,
  StyledDownloadAccordionItemIconTextBox,
  StyledDownloadAccordionItemTextBox,
  StyledDownloadAccordionSummary,
  StyledDownloadAccordionSummaryBox
} from './index.styles'

import { DownloadItem, Edition } from 'src/types'
import { openInSameTab } from 'src/utils/openInNewTab'

interface DownloadAccordionProps {
  edition: Edition
}

interface AccordionItemProps {
  item: DownloadItem
}

const renderIcon = (key: string) => {
  switch (key) {
    case 'core':
      return <Core />
    case 'home':
      return <Home width="20" height="20" color="#69E1EE" />
    case 'security':
      return <Security width="20" height="20" color="#69E1EE" />
    case 'cloud':
      return <Cloud width="20" height="20" color="#69E1EE" />
    case 'vm':
      return <VirtualMachine />
    case 'container':
      return <Container />
    case 'mate':
      return <Mate width="20" height="20" color="" />
    case 'lxqt':
      return <Lxqt width="20" height="20" color="" />
    case 'enlightenment':
      return <Enlightenment />
    case 'debian':
      return <Debian />
    default:
      return null
  }
}

const AccordionItem = (props: AccordionItemProps) => {
  const { item } = props

  return (
    <StyledDownloadAccordionItemButton onClick={() => openInSameTab(item.link)} disableRipple>
      <StyledDownloadAccordionItemIconTextBox>
        {renderIcon(item.key)}
        <StyledDownloadAccordionItemTextBox>
          <StyledAccordionItemTitle variant="body2"> {item.title}</StyledAccordionItemTitle>
          <StyledAccordionItemSubtitle variant="body3">{item.subtitle}</StyledAccordionItemSubtitle>
        </StyledDownloadAccordionItemTextBox>
      </StyledDownloadAccordionItemIconTextBox>
      <OpenInNewRoundedIcon sx={{ color: '#99A1AF', transform: 'scale(.7)' }} fontSize="small" />
    </StyledDownloadAccordionItemButton>
  )
}

const DownloadAccordion = (props: DownloadAccordionProps) => {
  const theme = useTheme()
  const { edition } = props

  const direct_download_items = edition.accordionOptions?.direct
  const torrent_download_items = edition.accordionOptions?.torrent

  const [expanded, setExpanded] = useState<string | false>('')

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <StyledDownloadAccordionBox>
      <StyledDownloadAccordion
        elevation={0}
        square
        expanded={expanded === 'direct-panel'}
        onChange={handleChange('direct-panel')}
      >
        <StyledDownloadAccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
          aria-controls="direct-panel-content"
          id="direct-panel-header"
        >
          <StyledDownloadAccordionSummaryBox>
            <StyledMenuItemIconBox>
              <DownloadIcon color={theme.palette.primary.main} width="20" height="20" />
            </StyledMenuItemIconBox>
            <StyledMenuItemTextBox>
              <StyledAccordionItemTitle variant="body2">
                {edition.accordionOptions?.buttonText}
              </StyledAccordionItemTitle>
              <StyledAccordionItemSubtitle variant="body3">
                Direct Download - Choose your edition
              </StyledAccordionItemSubtitle>
            </StyledMenuItemTextBox>
          </StyledDownloadAccordionSummaryBox>
        </StyledDownloadAccordionSummary>
        <StyledDownloadAccordionDetails>
          {direct_download_items?.map((item: DownloadItem, index: number) => (
            <AccordionItem item={item} key={index + 'direct'} />
          ))}
        </StyledDownloadAccordionDetails>
      </StyledDownloadAccordion>

      {torrent_download_items?.length !== 0 && (
        <StyledDownloadAccordion
          elevation={0}
          square
          expanded={expanded === 'torrent-panel'}
          onChange={handleChange('torrent-panel')}
        >
          <StyledDownloadAccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
            aria-controls="torrent-panel-content"
            id="torrent-panel-header"
          >
            <StyledDownloadAccordionSummaryBox>
              <StyledMenuItemIconBox>
                <MagnetIcon />
              </StyledMenuItemIconBox>
              <StyledMenuItemTextBox>
                <StyledAccordionItemTitle variant="body2">
                  {edition.accordionOptions?.buttonText}
                </StyledAccordionItemTitle>
                <StyledAccordionItemSubtitle variant="body3">
                  Torrent Download - P2P distributed download
                </StyledAccordionItemSubtitle>
              </StyledMenuItemTextBox>
            </StyledDownloadAccordionSummaryBox>
          </StyledDownloadAccordionSummary>
          <StyledDownloadAccordionDetails>
            {torrent_download_items?.map((item: DownloadItem, index: number) => (
              <AccordionItem item={item} key={index + 'torrent'} />
            ))}
          </StyledDownloadAccordionDetails>
        </StyledDownloadAccordion>
      )}
    </StyledDownloadAccordionBox>
  )
}

export default DownloadAccordion
