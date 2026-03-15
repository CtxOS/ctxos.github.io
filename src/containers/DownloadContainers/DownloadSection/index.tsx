import { Fade } from '@mui/material'
import gsap from 'gsap'
import { Dispatch, SetStateAction, useEffect } from 'react'

import {
  StyledDownloadGridWrapper,
  StyledDownloadLeftSection,
  StyledDownloadRightSection,
  StyledInfoCardBox
} from './index.styles'

import DownloadButtonGroup from 'components/Download/DownloadButtonGroup'
import EditionCard from 'components/Download/EditionCard'
import HelpCard from 'components/Download/HelpCard'
import IncludesCard from 'components/Download/IncludesCard'
import InfoCard from 'components/Download/InfoCard'
import ReleaseInfoCard from 'components/Download/ReleaseInfoCard'
import RequirementCard from 'components/Download/RequirementCard'
import { Edition, EditionInfo, Editions } from 'src/types'

type DownloadSectionProps = {
  edition: Editions
  setEdition: Dispatch<SetStateAction<Editions>>
  selectedEdition: Edition | undefined
}

const DownloadSection = (props: DownloadSectionProps) => {
  const { edition, setEdition, selectedEdition } = props

  useEffect(() => {
    const tl = gsap.timeline()

    tl.delay(0.15)
    tl.to('#info0', { duration: 0.15, ease: 'expoScale(0.5,7,none)', scale: 1, opacity: 1 })
      .to('#info1', { duration: 0.15, ease: 'expoScale(0.5,7,none)', scale: 1, opacity: 1 })
      .to('#info2', { duration: 0.15, ease: 'expoScale(0.5,7,none)', scale: 1, opacity: 1 })
      .to('#info3', { duration: 0.15, ease: 'expoScale(0.5,7,none)', scale: 1, opacity: 1 })

    tl.play()
  }, [selectedEdition])

  return (
    <>
      <DownloadButtonGroup edition={edition} setEdition={setEdition} />
      {selectedEdition && (
        <Fade in key={selectedEdition.key}>
          <StyledDownloadGridWrapper>
            <StyledDownloadLeftSection>
              {selectedEdition && <EditionCard edition={selectedEdition} />}
              <StyledInfoCardBox>
                {selectedEdition?.info.map((info: EditionInfo, index: number) => (
                  <InfoCard info={info} key={index} id={'info' + index} />
                ))}
              </StyledInfoCardBox>
              {selectedEdition && <IncludesCard item_list={selectedEdition?.includes_list} />}
            </StyledDownloadLeftSection>
            <StyledDownloadRightSection>
              {selectedEdition && <ReleaseInfoCard release_info={selectedEdition.release_info} />}
              {selectedEdition && (
                <RequirementCard requirements={selectedEdition.system_requirements} />
              )}
              <HelpCard />
            </StyledDownloadRightSection>
          </StyledDownloadGridWrapper>
        </Fade>
      )}
    </>
  )
}

export default DownloadSection
