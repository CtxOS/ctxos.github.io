import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Typography, useTheme } from '@mui/material'
import { useState } from 'react'

import {
  StyledFaqAccordion,
  StyledFaqAccordionDetails,
  StyledFaqAccordionQuestion,
  StyledFaqAccordionSummary
} from './index.styles'

import { Question } from 'src/types'

type FaqAccordionProps = {
  questions: Question[]
}

const FaqAccordion = (props: FaqAccordionProps) => {
  const theme = useTheme()
  const { questions } = props

  const [expanded, setExpanded] = useState<string | false>('q0')

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      {questions.map((question: Question, index: number) => (
        <StyledFaqAccordion
          expanded={expanded === `q${index}`}
          onChange={handleChange(`q${index}`)}
          elevation={0}
          key={index}
        >
          <StyledFaqAccordionSummary
            aria-controls={`q${index}-content`}
            id={`q${index}-header`}
            expandIcon={
              <ExpandMoreIcon
                sx={{ color: expanded === `q${index}` ? theme.palette.primary.main : '#99A1AF' }}
              />
            }
          >
            <StyledFaqAccordionQuestion expanded={expanded === `q${index}`}>
              {question.question}
            </StyledFaqAccordionQuestion>
          </StyledFaqAccordionSummary>
          <StyledFaqAccordionDetails>
            <Typography variant="body1">{question.answer}</Typography>
          </StyledFaqAccordionDetails>
        </StyledFaqAccordion>
      ))}
    </div>
  )
}

export default FaqAccordion
