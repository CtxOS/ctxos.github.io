import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import { Box } from '@mui/material'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses
} from '@mui/material/AccordionSummary'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useState } from 'react'

import { StyledLinkBox } from './index.styles'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  background: 'linear-gradient(3.14deg, rgba(0,255,240,0.1) 0%, rgba(2,171,181,0.1) 100%)',
  borderRadius: '.25rem',
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&::before': {
    display: 'none'
  },
  border: '.58px solid #FFFFFF1A'
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  border: 0,
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)'
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: 0,
  background: 'transparent'
}))

const FooterAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <Accordion expanded={expanded === 'editions'} onChange={handleChange('editions')}>
        <AccordionSummary aria-controls="editionsd-content" id="editionsd-header">
          <Typography component="span">Editions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StyledLinkBox>
            <Link href="/download">
              {' '}
              <Typography>Home</Typography>
            </Link>
            <Link href="/download">
              <Typography>Security</Typography>
            </Link>
            <Link href="/download">
              {' '}
              <Typography>Hack The Box</Typography>
            </Link>
            <Link href="/download">
              {' '}
              <Typography>WSL</Typography>
            </Link>
            <Link href="/download">
              {' '}
              <Typography>Debian Conversion Script</Typography>
            </Link>
            <Link href="/download">
              {' '}
              <Typography>Docker Images</Typography>
            </Link>
            <Link href="/download">
              {' '}
              <Typography>Reaspberry Pi Images</Typography>
            </Link>
          </StyledLinkBox>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'resources'} onChange={handleChange('resources')}>
        <AccordionSummary aria-controls="resourcesd-content" id="resourcesd-header">
          <Typography component="span">Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StyledLinkBox>
            <Link href="/blog">
              {' '}
              <Typography>Blog</Typography>
            </Link>
            <Link href="/community">
              <Typography>Community</Typography>
            </Link>
            <Link href="/docs">
              {' '}
              <Typography>Documentation</Typography>
            </Link>
            <Link href="/how-it-works">
              {' '}
              <Typography>How it works</Typography>
            </Link>
          </StyledLinkBox>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'about'} onChange={handleChange('about')}>
        <AccordionSummary aria-controls="aboutd-content" id="aboutd-header">
          <Typography component="span">About us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StyledLinkBox>
            <Link href="/team">
              {' '}
              <Typography>Team</Typography>
            </Link>
            <Link href="/partners">
              <Typography>Partners</Typography>
            </Link>
            <Link href="/donate">
              {' '}
              <Typography>Donate</Typography>
            </Link>
          </StyledLinkBox>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FooterAccordion
