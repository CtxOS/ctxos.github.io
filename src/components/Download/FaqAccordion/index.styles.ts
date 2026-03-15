import { Accordion, AccordionDetails, AccordionSummary, styled, Typography } from '@mui/material'

export const StyledFaqAccordion = styled(Accordion)(() => ({
  background: 'transparent',
  borderRadius: '0 !important',
  borderBottom: '1px solid #00B8DB1A',
  margin: 0,
  maxWidth: '44rem',
  '&.Mui-expanded': {
    margin: 0
  },
  '&::before': {
    display: 'none'
  }
}))

export const StyledFaqAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: `${theme.spacing(3)} ${theme.spacing(3)}`,
  transition: 'background-color .3s ease',
  minHeight: 'auto',

  '&.Mui-expanded': {
    minHeight: 'auto',
    backgroundColor: '#00B8DB0D'
  },

  '&.Mui-expanded:hover': {
    minHeight: 'auto',
    backgroundColor: '#00B8DB0D'
  },

  '&:hover': {
    backgroundColor: '#00B8DB05'
  },

  '& .MuiAccordionSummary-content': {
    margin: 0
  },

  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: 0
  }
}))

export const StyledFaqAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: ` 0 ${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(3)}`,
  background: '#00B8DB0D',
  color: '#99A1AF'
}))

interface StyledTypographyProps {
  expanded?: boolean
}

export const StyledFaqAccordionQuestion = styled(Typography, {
  shouldForwardProp: prop => prop !== 'expanded' && prop !== 'variantType'
})<StyledTypographyProps>(({ theme, expanded }) => ({
  color: expanded ? theme.palette.primary.main : 'white',
  fontSize: '1.125rem'
}))
