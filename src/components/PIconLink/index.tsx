import { CSSProperties, ElementType } from 'react'

import { LargeStyledIcon, SmallStyledIcon, StyledPIconLinkAnchor } from './index.styles'

import PTooltip, { PTooltipProps } from 'components/Tooltip'

type PIconLinkProps = {
  href?: string
  style?: CSSProperties
  Icon: ElementType
  children: PTooltipProps['title']
  large?: boolean
} & Omit<PTooltipProps, 'title'>

const PIconLink = ({ style, href, Icon, children, large, ...rest }: PIconLinkProps) => {
  const IconWrapper = large ? LargeStyledIcon : SmallStyledIcon

  return (
    <PTooltip title={children} {...rest}>
      <StyledPIconLinkAnchor href={href} style={style}>
        <IconWrapper>
          <Icon style={{ width: '100%', height: '100%' }} />
        </IconWrapper>
      </StyledPIconLinkAnchor>
    </PTooltip>
  )
}

export default PIconLink
