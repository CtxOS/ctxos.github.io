import { Typography, useTheme } from '@mui/material'

import ArrowRight from '../ComponentIcons/ArrowRight'

import {
  StyledSuggestionCardButton,
  StyledSuggestionCardHeroWrapper,
  StyledSuggestionCardTextWrapper,
  StyledSuggestionCardWrapper
} from './index.styles'

import { Suggestion } from 'src/types'
import { openInSameTab } from 'src/utils/openInNewTab'

type SuggestionCardProps = {
  suggestion: Suggestion
}

const SuggestionCard = (props: SuggestionCardProps) => {
  const theme = useTheme()
  const { suggestion } = props

  return (
    <StyledSuggestionCardWrapper>
      <StyledSuggestionCardHeroWrapper>
        {suggestion.icon}
        <StyledSuggestionCardTextWrapper>
          <Typography variant="body2">{suggestion.title}</Typography>
          <Typography variant="body3">{suggestion.subtitle}</Typography>
        </StyledSuggestionCardTextWrapper>
      </StyledSuggestionCardHeroWrapper>
      <StyledSuggestionCardButton disableRipple onClick={() => openInSameTab(suggestion.link)}>
        View Downloads <ArrowRight width="16" height="16" color={theme.palette.primary.main} />
      </StyledSuggestionCardButton>
    </StyledSuggestionCardWrapper>
  )
}

export default SuggestionCard
