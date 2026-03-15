import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Typography } from '@mui/material'

import Doc from '../../../components/Download/assets/doc.svg'

import {
  StylesHelpSectionInnerBox,
  StylesHelpSectionItemBox,
  StylesHelpSectionLink,
  StylesHelpSectionWrapper
} from './index.styles'

const HelpSection = () => {
  return (
    <StylesHelpSectionWrapper sx={{}}>
      <Typography variant="body1">Need more help?</Typography>
      <StylesHelpSectionInnerBox>
        <StylesHelpSectionItemBox>
          <Doc />
          <StylesHelpSectionLink href="/docs/">Documentation</StylesHelpSectionLink>
        </StylesHelpSectionItemBox>
        <StylesHelpSectionItemBox>
          <InfoOutlinedIcon sx={{ fontSize: 18 }} color="primary" />
          <StylesHelpSectionLink href="/docs">Community Forum</StylesHelpSectionLink>
        </StylesHelpSectionItemBox>
      </StylesHelpSectionInnerBox>
    </StylesHelpSectionWrapper>
  )
}

export default HelpSection
