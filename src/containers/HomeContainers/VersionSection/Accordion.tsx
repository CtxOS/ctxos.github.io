import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, SvgIcon } from '@mui/material'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import * as React from 'react'

import ArrowIcon from './assets/arrow_forward.svg'

import PButton from 'components/PButton'

interface VERSION {
  version: string
  description: string
}

interface RENDERACCORDIONPROPS {
  versions: VERSION[]
  handleChange: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void
  expanded: string | boolean
}

const ctxVersions: VERSION[] = [
  {
    version: 'Home Edition',
    description:
      'Home edition is designed for daily use, privacy and software development. Ctx Tools can be manually installed to assemble a custom and lightweight pentesting environment.'
  },
  {
    version: 'Security Edition',
    description:
      'Security Edition is a special purpose operating system designed for Penetration Testing and Red Team operations. It contains a full arsenal of ready-to use pentesting tools.'
  },
  // {
  //   version: 'HTB Edition',
  //   description:
  //     'Security Edition is a special purpose operating system designed for Penetration Testing and Red Team operations. It contains a full arsenal of ready-to use pentesting tools.'
  // },
  {
    version: 'IoT Edition',
    description:
      'Ctx OS is also compatible with Raspberry Pi devices up to the latest version available, in all its editions.'
  },
  {
    version: 'Docker Images',
    description:
      'Pre-packaged Docker image of the Ctx operating system. Core and Security editions available.'
  },
  {
    version: 'Debian Conversion Script',
    description:
      'Debian Conversion Script is an installer script for CtxOS. This project stands as a replacement for the alternate-install which is no longer maintained. It is updated to the latest Ctx release.'
  },
  {
    version: 'WSL Edition',
    description:
      'Experience the full power of our operating system running under Windows! Compatible with Windows 10 and 11 (x86_64).'
  }
]

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  },
  backgroundColor: 'transparent',
  flexBasis: '100%',
  width: '100%'
}))

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  padding: '1rem 0 1rem 0',
  borderBottom: '1px solid #8799B5',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)'
  },
  '&.Mui-expanded': {
    borderBottom: 'none',
    padding: '1rem 0 0 0'
  },

  '&.Mui-expanded .MuiTypography-root': {
    color: theme.palette.primary.main
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  borderBottom: `1px solid #8799B5`,
  display: 'flex',
  flexDirection: 'column',
  padding: '0rem 0rem 1.5rem 0rem',
  gap: '2rem'
}))

const RenderAccordion = (props: RENDERACCORDIONPROPS) => {
  const { versions, handleChange, expanded } = props

  return (
    <Box>
      {versions.map((item: VERSION, index: number) => (
        <Accordion
          key={`accordion-item-${index}`}
          expanded={expanded === item.version}
          onChange={handleChange(item.version)}
        >
          <AccordionSummary
            aria-controls={`${item.version}-content`}
            id={item.version}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body2">{item.version}</Typography>
          </AccordionSummary>
          <AccordionDetails id={item.version}>
            <Typography variant="body1">{item.description}</Typography>
            <PButton
              variant="contained"
              to="/download"
              endIcon={<SvgIcon component={ArrowIcon} />}
              style={{
                borderRadius: '.25rem',
                fontSize: '1rem',
                fontWeight: 600,
                background: 'linear-gradient(90deg, #052E5C 35.1%, #045879 100%)',
                color: '#f4f4f4',
                width: 'fit-content'
              }}
            >
              Download
            </PButton>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}

export default function PAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>(ctxVersions[0].version)

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return <RenderAccordion versions={ctxVersions} handleChange={handleChange} expanded={expanded} />
}
