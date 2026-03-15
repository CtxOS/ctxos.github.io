import { Typography } from '@mui/material'

import BaseIcon from './assets/base.svg'
import SystemIcon from './assets/system.svg'
import ToolsIcon from './assets/tools.svg'
import {
  StyledArchLayersWrapper,
  StyledArchTitle,
  StyledArchWrapper,
  StyledLayerTitleIconWrapper,
  StyledLayerTitleText,
  StyledLayerWrapper,
  StyledStepContentWrapper,
  StyledStepNumber,
  StyledStepTextContent,
  StyledStepTitle,
  StyledStepWrapper
} from './index.styles'

import Security from 'components/Download/ComponentIcons/Security'

interface Step {
  title: string
  desc: string
  url?: string
}

interface Layer {
  icon: JSX.Element
  title: string
  subTitle: string
}

interface StepProps {
  number: number
  step: Step
}

interface LayerProps {
  layer: Layer
}

const steps: Step[] = [
  {
    title: 'Debian Foundation',
    desc: "Built on Debian's stable and reliable foundation with custom optimizations for security workflows."
  },
  {
    title: 'Custom Kernel',
    desc: 'Hardened Linux kernel with additional security patches and wireless injection support.'
  },
  {
    title: 'Security Arsenal',
    desc: 'Curated collection of 800+ security tools, regularly updated and tested by the community.'
  },
  {
    title: 'Privacy by Default',
    desc: 'Automatic sandboxing, encrypted storage options, and privacy-focused configurations out of the box.'
  }
]

const layers: Layer[] = [
  {
    icon: <Security width="20" height="20" color="#00FFF0" />,
    title: 'Security Layer',
    subTitle: 'AppArmor, Firejail, Flatpak and more'
  },
  {
    icon: <ToolsIcon />,
    title: 'Tools Layer',
    subTitle: '800+ Security & Development Tools'
  },
  {
    icon: <SystemIcon />,
    title: 'System Layer',
    subTitle: 'Custom Kernel & Optimizations'
  },
  {
    icon: <BaseIcon />,
    title: 'Base Layer',
    subTitle: 'Debian Stable Foundation'
  }
]

const Step = (props: StepProps) => {
  const { number, step } = props

  return (
    <StyledStepWrapper>
      <StyledStepNumber>{number}</StyledStepNumber>
      <StyledStepTextContent>
        <StyledStepTitle variant="body2">{step.title}</StyledStepTitle>
        <Typography variant="body1">{step.desc}</Typography>
      </StyledStepTextContent>
    </StyledStepWrapper>
  )
}

const Layer = (props: LayerProps) => {
  const { layer } = props

  return (
    <StyledLayerWrapper>
      <StyledLayerTitleIconWrapper>
        {layer.icon}
        <StyledLayerTitleText>{layer.title}</StyledLayerTitleText>
      </StyledLayerTitleIconWrapper>
      <Typography variant="subtitle2">{layer.subTitle}</Typography>
    </StyledLayerWrapper>
  )
}

const ArchitectureSection = () => {
  return (
    <StyledArchWrapper>
      <StyledStepContentWrapper>
        <StyledArchTitle variant="h4">System Architecture</StyledArchTitle>
        {steps.map((step: Step, index: number) => {
          return <Step number={index + 1} key={index} step={step} />
        })}
      </StyledStepContentWrapper>
      <StyledArchLayersWrapper>
        {layers.map((layer: Layer, index: number) => {
          return <Layer layer={layer} key={index} />
        })}
      </StyledArchLayersWrapper>
    </StyledArchWrapper>
  )
}

export default ArchitectureSection
