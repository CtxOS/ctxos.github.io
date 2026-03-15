import DocIcon from '../assets/doc.svg'
import PlayIcon from '../assets/play.svg'

import {
  StyledHelpItemWrapper,
  StyledHelpItemWText,
  SyledHelpTitle,
  SyledRequirementsCardContainer
} from './index.styles'

const HelpCard = () => {
  return (
    <SyledRequirementsCardContainer>
      <SyledHelpTitle variant="body4">Need Help?</SyledHelpTitle>
      <StyledHelpItemWrapper>
        <PlayIcon />
        <StyledHelpItemWText href="/docs/installation/installation-ctx">
          Installation Tutorial
        </StyledHelpItemWText>
      </StyledHelpItemWrapper>
      <StyledHelpItemWrapper>
        <DocIcon />
        <StyledHelpItemWText href="/docs">Documentation</StyledHelpItemWText>
      </StyledHelpItemWrapper>
    </SyledRequirementsCardContainer>
  )
}
export default HelpCard
