import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { useEffect } from 'react'

import {
  StyledWelcomeSectionCursor,
  StyledWelcomeSectionHackers,
  StyledWelcomeSectionRunningText
} from './index.styles'

const TypeWriter = () => {
  gsap.registerPlugin(TextPlugin)

  const typeData: string[] = [
    'Hackers',
    'Security specialists',
    'Developers',
    'Sysadmins',
    'Network engineers'
  ]

  const typeWritterAnimation = () => {
    gsap.to('.cursor', {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: 'power2.inOut'
    })

    const timelineMaster = gsap.timeline({ repeat: -1 })

    typeData.forEach(word => {
      const timelineText = gsap.timeline({ repeat: 1, yoyo: true })

      timelineText.to('.animated', { duration: 2, text: word })
      timelineText.to({}, { duration: 1 })
      timelineMaster.add(timelineText)
    })
  }

  useEffect(() => {
    typeWritterAnimation()
  }, [])

  return (
    <StyledWelcomeSectionRunningText variant="h1" align="center" paragraph>
      The operating <br /> system for{' '}
      <StyledWelcomeSectionHackers className="animated"></StyledWelcomeSectionHackers>
      <StyledWelcomeSectionCursor>|</StyledWelcomeSectionCursor>
    </StyledWelcomeSectionRunningText>
  )
}

export default TypeWriter
