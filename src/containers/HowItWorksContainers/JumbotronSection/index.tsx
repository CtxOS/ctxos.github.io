import { StyledJumbotronBox, StyledJumbotronDesc, StyledJumbotronTitle } from './index.styles'

import Pill from 'components/Pill'

const JumbotronSection = () => {
  return (
    <StyledJumbotronBox>
      <Pill pillText="HOW IT WORKS" />
      <StyledJumbotronTitle>Understanding CtxOS</StyledJumbotronTitle>
      <StyledJumbotronDesc variant="body1">
        The ultimate framework for your Cyber Security operations. Learn how CtxOS works, explore
        different editions, and discover what makes it the choice of security professionals
        worldwide.
      </StyledJumbotronDesc>
    </StyledJumbotronBox>
  )
}

export default JumbotronSection
