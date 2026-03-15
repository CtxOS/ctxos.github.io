import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

import {
  StyledGetStartedDesc,
  StyledGetStartedStepWrapper,
  StyledGetStartedTitle,
  StyledGetStartedWrapper
} from './index.styles'

import Step from 'components/Step'

const GetStartedSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#animation-wrapper',
        start: 'top 70%',
        toggleActions: 'play none pause pause'
      }
    })

    tl.fromTo(
      '#animation-wrapper .step',
      { scale: 0.5, opacity: 0 }, // initial state
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'expoScale(0.5,7,none)',
        stagger: 0.1
      }
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <StyledGetStartedWrapper id="animation-wrapper">
      <StyledGetStartedTitle variant="h3">Getting Started</StyledGetStartedTitle>
      <StyledGetStartedDesc variant="body1">
        Follow these simple steps to start using CtxOS
      </StyledGetStartedDesc>
      <StyledGetStartedStepWrapper>
        <Step
          stepNumber="01"
          stepTitle="Choose Your Edition"
          stepDesc="Select the CtxOS edition that matches your needs - from daily use to advanced penetration testing."
          showStepIcon={true}
        />
        <Step
          stepNumber="02"
          stepTitle="Download & Verify"
          stepDesc="Download your chosen ISO image and verify its integrity using the provided checksums and GPG signatures."
          showStepIcon={true}
        />
        <Step
          stepNumber="03"
          stepTitle="Install or Run Live"
          stepDesc="Boot from USB for a live session to test without installation, or install to your system for persistent use."
          showStepIcon={true}
        />
        <Step
          stepNumber="04"
          stepTitle="Customize & Update"
          stepDesc="Personalize your environment, install additional tools, and keep everything up-to-date with our rolling updates."
          showStepIcon={false}
        />
      </StyledGetStartedStepWrapper>
    </StyledGetStartedWrapper>
  )
}

export default GetStartedSection
