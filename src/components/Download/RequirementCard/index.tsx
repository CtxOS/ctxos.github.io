import { useTheme } from '@mui/material'

import Raspberry from '../ComponentIcons/Raspberry'

import {
  SyledRequirementsCardContainer,
  SyledRequirementsCardSpecsWrapper,
  SyledRequirementsCardTitleWrapper,
  SyledRequirementSpec,
  SyledRequirementSpecValue,
  SyledRequirementTitle
} from './index.styles'

import { Requirements } from 'src/types'

type RequirementCardProps = {
  requirements: Requirements
}

const RequirementCard = (props: RequirementCardProps) => {
  const theme = useTheme()
  const { requirements } = props

  return (
    <SyledRequirementsCardContainer>
      <SyledRequirementsCardTitleWrapper>
        <Raspberry width="20" height="20" color={theme.palette.primary.main} />
        <SyledRequirementTitle>System Requirements</SyledRequirementTitle>
      </SyledRequirementsCardTitleWrapper>
      <SyledRequirementsCardSpecsWrapper>
        <SyledRequirementSpec>Processor</SyledRequirementSpec>
        <SyledRequirementSpecValue variant="body3">
          {requirements.processor}
        </SyledRequirementSpecValue>
      </SyledRequirementsCardSpecsWrapper>
      <SyledRequirementsCardSpecsWrapper>
        <SyledRequirementSpec>Memory</SyledRequirementSpec>
        <SyledRequirementSpecValue variant="body3">{requirements.memory}</SyledRequirementSpecValue>
      </SyledRequirementsCardSpecsWrapper>
      <SyledRequirementsCardSpecsWrapper>
        <SyledRequirementSpec>Storage</SyledRequirementSpec>
        <SyledRequirementSpecValue variant="body3">
          {requirements.storage}
        </SyledRequirementSpecValue>
      </SyledRequirementsCardSpecsWrapper>
      <SyledRequirementsCardSpecsWrapper>
        <SyledRequirementSpec>Graphics</SyledRequirementSpec>
        <SyledRequirementSpecValue variant="body3">
          {requirements.graphics}
        </SyledRequirementSpecValue>
      </SyledRequirementsCardSpecsWrapper>
      <SyledRequirementsCardSpecsWrapper>
        <SyledRequirementSpec>Network</SyledRequirementSpec>
        <SyledRequirementSpecValue variant="body3">
          {requirements.network}
        </SyledRequirementSpecValue>
      </SyledRequirementsCardSpecsWrapper>
    </SyledRequirementsCardContainer>
  )
}

export default RequirementCard
