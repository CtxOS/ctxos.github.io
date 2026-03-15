import { GridProps } from '@mui/material'

import senior from './seniorCorsairs'

import seniorCorsair from 'components/Timeline/assets/senior.png'
import UserCard from 'components/UserCard'
import ContributorsSection from 'containers/TeamContainers/ContributorsSection'

const SeniorData = senior.map(i => (
  <UserCard variant="background" key={`id-${i}`} name={i.name} nickname={i.nickname} />
))

const SeniorCorsairs = (props: GridProps) => {
  return (
    <ContributorsSection
      title="Senior Corsairs"
      imageSrc={seniorCorsair.src}
      subtitle="Achieving this will grant you the Senior Corsair status, along with HTB Monthly VIP access as a reward, thanks to our collaboration with Hack The Box."
      {...props}
    >
      {SeniorData}
    </ContributorsSection>
  )
}

export default SeniorCorsairs
