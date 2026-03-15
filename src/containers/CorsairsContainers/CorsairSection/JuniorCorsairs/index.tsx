import { GridProps } from '@mui/material'

import junior from './juniorCorsairs'

import juniorCorsair from 'components/Timeline/assets/junior.png'
import UserCard from 'components/UserCard'
import ContributorsSection from 'containers/TeamContainers/ContributorsSection'

const JuniorData = junior.map((data, i) => (
  <UserCard variant="background" key={`id-${i}`} name={data.name} nickname={data.nickname} />
))

const JuniorCorsairs = (props: GridProps) => {
  return (
    <ContributorsSection
      title="Junior Corsairs"
      imageSrc={juniorCorsair.src}
      subtitle="Your journey begins with your first five successful commits on GitLab, earning you the title of Junior Corsair."
      {...props}
    >
      {JuniorData}
    </ContributorsSection>
  )
}

export default JuniorCorsairs
