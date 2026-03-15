import { Button, SvgIcon, Typography, TypographyProps } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'

import ArrowIcon from '../VersionSection/assets/arrow_forward.svg'

import ArrowNoLineIcon from './assets/arrow.svg'
import { StyledContributeCardTitle } from './index.styles'

import PButton from 'components/PButton'

export enum ButtonType {
  Outlined = 'outlined',
  Contained = 'contained'
}

export enum CardType {
  Primary = 'primary',
  Secondary = 'secondary'
}

interface CardProps {
  type: CardType
  icon: React.ReactNode
  titleTextVariant: TypographyProps['variant']
  descTextVariant: TypographyProps['variant']
  title: string
  description: string
  buttonText: string
  buttonType: ButtonType
  styles: object
  link: string
  id?: string
}

const ContributeCard = (props: CardProps) => {
  return (
    <Box sx={props.styles} id={props.id}>
      <Box>
        {props.icon}
        <StyledContributeCardTitle variant={props.titleTextVariant} type={props.type}>
          {props.title}
        </StyledContributeCardTitle>
      </Box>
      <Typography variant={props.descTextVariant}>{props.description}</Typography>
      {props.buttonType === ButtonType.Contained ? (
        <PButton
          variant="contained"
          to={props.link}
          endIcon={<SvgIcon component={ArrowIcon} />}
          style={{
            borderRadius: '.25rem',
            fontSize: '1rem',
            fontWeight: 600,
            background: 'linear-gradient(90deg, #052E5C 35.1%, #045879 100%)',
            color: '#f4f4f4',
            width: 'fit-content',
            marginTop: '2rem'
          }}
        >
          {props.buttonText}
        </PButton>
      ) : (
        <Link href={props.link}>
          <Button
            endIcon={<ArrowNoLineIcon />}
            sx={{
              justifyContent: 'flex-start',
              lineHeight: '1rem',
              padding: '.25rem 0 0 0',
              '&:hover': { background: 'none', textDecoration: 'underline' },
              width: 'fit-content',
              marginTop: '1rem',
              textTransform: 'capitalize'
            }}
          >
            {props.buttonText}
          </Button>
        </Link>
      )}
    </Box>
  )
}

export default ContributeCard
