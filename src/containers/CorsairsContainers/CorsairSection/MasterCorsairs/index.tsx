import { GridProps } from '@mui/material'

import masters from './masterCorsairs'

import masterCorsair from 'components/Timeline/assets/master.png'
import UserCard from 'components/UserCard'
import ContributorsSection from 'containers/TeamContainers/ContributorsSection'

const MasterData = masters.map(i => (
  <UserCard variant="background" key={`id-${i}`} />
  // name={data.name} nickname={data.nickname}
))

const MasterCorsairs = (props: GridProps) => {
  return (
    <ContributorsSection
      title="Master Corsairs"
      imageSrc={masterCorsair.src}
      subtitle="The pinnacle of achievement within our community, the Master Corsair tier is reserved for individuals handpicked by the Ctx team, based on exceptional contributions."
      {...props}
    >
      {MasterData}
    </ContributorsSection>
  )
}

export default MasterCorsairs
