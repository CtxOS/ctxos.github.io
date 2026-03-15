import { Typography } from '@mui/material'

import CheckIcon from '../assets/check.svg'
import CoreIcon from '../assets/core.svg'

import { StyledIncludesCardBox, StyledIncludesItemBox, StyledIncludesUtilBox } from './index.styles'

interface InlcudesCardProps {
  item_list: string[]
}

const IncludesCard = (props: InlcudesCardProps) => {
  const { item_list } = props
  return (
    <StyledIncludesCardBox>
      <StyledIncludesUtilBox>
        <CoreIcon />
        <Typography variant="h6">What&apos;s Included</Typography>
      </StyledIncludesUtilBox>
      <StyledIncludesItemBox>
        {item_list.map((item: string, index: number) => (
          <StyledIncludesUtilBox key={index}>
            <CheckIcon />
            <Typography variant="body3" sx={{ color: '#D1D5DC' }}>
              {item}
            </Typography>
          </StyledIncludesUtilBox>
        ))}
      </StyledIncludesItemBox>
    </StyledIncludesCardBox>
  )
}

export default IncludesCard
