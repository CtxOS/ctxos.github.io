import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import { Typography, useMediaQuery, useTheme } from '@mui/material'

import { StyledStepBox, StyledStepNumber, StyledStepTitle, StyledStepWrapper } from './index.styles'

interface StepProps {
  stepNumber: string
  stepTitle: string
  stepDesc: string
  showStepIcon: boolean
}

const Step = (props: StepProps) => {
  const theme = useTheme()
  const { stepNumber, stepTitle, stepDesc, showStepIcon } = props
  const isNotLg = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <StyledStepWrapper className="step">
      <StyledStepBox>
        <StyledStepNumber>{stepNumber}</StyledStepNumber>
        <StyledStepTitle variant="h6">{stepTitle}</StyledStepTitle>
        <Typography variant="body1">{stepDesc}</Typography>
      </StyledStepBox>

      {showStepIcon && !isNotLg && <KeyboardArrowRightRoundedIcon color="primary" />}
    </StyledStepWrapper>
  )
}

export default Step
