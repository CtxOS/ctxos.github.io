import { Typography } from '@mui/material'

import { StyledSuggestionCardWrapper, StyledSuggestionWrapper } from './index.styles'

import SuggestionCard from 'components/Download/SuggestionCard'
import { Suggestion } from 'src/types'

type SuggestionSectionProps = {
  suggestions: Suggestion[]
}
const SuggestionSection = (props: SuggestionSectionProps) => {
  const { suggestions } = props

  return (
    <StyledSuggestionWrapper>
      <Typography
        variant="h6"
        sx={{
          fontSize: '1.5rem !important'
        }}
      >
        Also Available
      </Typography>
      <StyledSuggestionCardWrapper>
        {suggestions.map((suggestion: Suggestion, index: number) => (
          <SuggestionCard suggestion={suggestion} key={index} />
        ))}
      </StyledSuggestionCardWrapper>
    </StyledSuggestionWrapper>
  )
}
export default SuggestionSection
