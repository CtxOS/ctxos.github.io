import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { PaperProps, Typography, useTheme } from '@mui/material'
import { ElementType, ReactNode } from 'react'

import {
  StyledPFeatureBlockBody,
  StyledPFeatureBlockButton,
  StyledPFeatureBlockIconWrapper,
  StyledPFeatureBlockPaper,
  ThemedIcon
} from './PFeatureBlock.styles'

import { openInNewTab } from 'src/utils/openInNewTab'

type PFeatureBlockProps = {
  Icon: ElementType
  title: string
  outLink?: boolean
  buttonLink?: string
} & (
  | {
      CustomFooter: ReactNode
      buttonText?: never
    }
  | {
      CustomFooter?: never
      buttonText?: string
    }
) &
  PaperProps

const PFeatureBlock = ({
  children,
  Icon,
  title,
  buttonText,
  buttonLink,
  CustomFooter,
  outLink,
  ...rest
}: PFeatureBlockProps) => {
  const theme = useTheme()

  const handleClick = () => {
    if (buttonLink) {
      if (outLink) {
        openInNewTab(buttonLink)
      } else {
        window.location.href = buttonLink
      }
    }
  }

  return (
    <StyledPFeatureBlockPaper elevation={0} {...rest}>
      <StyledPFeatureBlockIconWrapper>
        <ThemedIcon as={Icon} />
      </StyledPFeatureBlockIconWrapper>
      <Typography variant="h5">{title}</Typography>
      <StyledPFeatureBlockBody variant="body1Semi">{children}</StyledPFeatureBlockBody>
      {CustomFooter ??
        (!buttonText ? null : (
          <StyledPFeatureBlockButton onClick={handleClick}>
            {buttonText}
            <ArrowForwardIcon
              sx={{ fill: theme.palette.mode === 'light' ? '#03232E' : '#05EEFF', marginLeft: 1 }}
            />
          </StyledPFeatureBlockButton>
        ))}
    </StyledPFeatureBlockPaper>
  )
}

export default PFeatureBlock
