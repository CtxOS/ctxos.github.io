import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  styled,
  Typography
} from '@mui/material'

export const StyledDownloadAccordion = styled(Accordion)(() => ({
  maxWidth: '41rem',
  background: 'transparent',
  borderRadius: '0.625rem',
  border: '1px solid #00B8DB4D',
  margin: 0,

  '&.Mui-expanded': {
    margin: 0
  },
  '&::before': {
    display: 'none'
  }
}))

export const StyledDownloadAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
  background: 'linear-gradient(90deg, rgba(0, 184, 219, 0.1) 0%, rgba(43, 127, 255, 0.1) 100%)',

  minHeight: 'auto',

  '&.Mui-expanded': {
    minHeight: 'auto'
  },

  '& .MuiAccordionSummary-content': {
    margin: 0
  },

  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: 0
  }
}))

export const StyledDownloadAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  background: ' #0000004D',
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column'
}))

export const StyledDownloadAccordionSummaryBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2)
}))

export const StyledAccordionItemTitle = styled(Typography)(() => ({
  lineHeight: '1.25rem',
  textTransform: 'capitalize',
  textAlign: 'start'
}))

export const StyledAccordionItemSubtitle = styled(Typography)(() => ({
  lineHeight: '1.25rem',
  textTransform: 'capitalize',
  textAlign: 'start'
}))

export const StyledDownloadAccordionItemButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid #00B8DB33',
  borderRadius: '0.625rem',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`
}))

export const StyledDownloadAccordionItemIconTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2)
}))

export const StyledDownloadAccordionItemTextBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column'
}))

export const StyledDownloadAccordionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}))
