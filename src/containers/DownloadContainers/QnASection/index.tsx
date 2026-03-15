import { Box, Typography } from '@mui/material'

import { StyledQnATitle, StyledQnAWrapper } from './index.styles'

import FaqAccordion from 'components/Download/FaqAccordion'
import { Question } from 'src/types'

type QnASectionProps = {
  questions: Question[]
}

const QnsASection = (props: QnASectionProps) => {
  const { questions } = props
  return (
    <StyledQnAWrapper>
      <Box>
        <StyledQnATitle variant="h4" sx={{ fontWeight: 400 }}>
          Questions & Answers
        </StyledQnATitle>
        <Typography variant="body1" align="center">
          Common questions about downloading and using CtxOS
        </Typography>
      </Box>
      <FaqAccordion questions={questions} />
    </StyledQnAWrapper>
  )
}

export default QnsASection
