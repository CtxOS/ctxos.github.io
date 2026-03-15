import { Grid, GridProps, Typography } from '@mui/material'
import { ElementType } from 'react'

import {
  OSCardIconHolder,
  OSIconVariant,
  StyledIconWrapper,
  StyledOSCardPaper
} from './index.styles'

import PButton from 'components/PButton'

type OSCardProps = {
  Icon?: ElementType
  iconVariant?: OSIconVariant
  title?: string
  link?: string
  selected?: boolean
  onClick?: () => void
  isLinkCard?: boolean
  buttonText?: string
} & GridProps

const OSCard = ({
  Icon,
  iconVariant,
  title,
  link,
  selected,
  onClick,
  isLinkCard,
  buttonText,
  children,
  ...rest
}: OSCardProps) => {
  return (
    <Grid item xs={12} md={4} onClick={onClick} {...rest}>
      <StyledOSCardPaper elevation={0} selected={selected}>
        {Icon && (
          <OSCardIconHolder variant={iconVariant}>
            <StyledIconWrapper>
              <Icon />
            </StyledIconWrapper>
          </OSCardIconHolder>
        )}
        <Typography variant="h5" paragraph>
          {title}
        </Typography>
        <Typography variant="body1Semi" paragraph>
          {children}
        </Typography>
        {isLinkCard && link && buttonText && (
          <PButton
            variant="contained"
            color="primary"
            href={link}
            target="_blank"
            // style={{ marginTop: 16, maxWidth: 177 }}
          >
            {buttonText}
          </PButton>
        )}
      </StyledOSCardPaper>
    </Grid>
  )
}

export default OSCard
