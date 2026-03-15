import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

import BugIcon from './assets/bug.svg'
import DocIcon from './assets/doc.svg'
import FinIcon from './assets/fin.svg'
import Github from './assets/github.svg'
import Gitlab from './assets/gitlab.svg'
import ContributeCard, { ButtonType, CardType } from './Card'
import { StyledContributeSectionTitle } from './index.styles'

import Pill from 'components/Pill'

const ContributeSection = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down(568))

  const PrimaryCardStyles = {
    background:
      'linear-gradient(93.14deg, rgba(0,255,240,0.1) -341.74%, rgba(2,171,181,0.1) -241.74%)',
    borderRadius: '0.375rem',
    padding: '2rem',
    maxWidth: '29.9rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }

  const SecondaryCardStyles = {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
    border: '0.56px solid #FFFFFF1A',
    borderRadius: '1rem',
    padding: '2rem',
    maxWidth: isSmall ? '29.9rem' : '18.3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'border-color .3s ease',
    '&:hover': {
      borderColor: 'rgba(255, 255, 255, 0.3)'
    }
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contribute-section-wrapper',
        start: 'top 70%',
        toggleActions: 'play none pause pause'
      }
    })

    tl.fromTo(
      '#contribute-section-wrapper',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: 'expoScale(0.5,7,none)'
      }
    )
    tl.fromTo(
      '#contribute-section-repo-wrapper',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'expoScale(0.5,7,none)',
        delay: 0.1
      }
    )
    tl.fromTo(
      '#contribute-section-repo-left-card',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'expoScale(0.5,7,none)'
      }
    )
    tl.fromTo(
      '#contribute-section-repo-middle-card',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'expoScale(0.5,7,none)'
      },
      '<'
    )
    tl.fromTo(
      '#contribute-section-repo-right-card',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'expoScale(0.5,7,none)'
      },
      '<'
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}
      id="contribute-section-wrapper"
    >
      <Pill pillText="GET INVOLVED" />
      <Box sx={{ textAlign: 'center' }}>
        <StyledContributeSectionTitle>
          Contribute to the <br /> Ctx Project
        </StyledContributeSectionTitle>
        <Typography
          variant="body1"
          sx={{
            [theme.breakpoints.down('sm')]: {
              padding: '0rem .5rem'
            }
          }}
        >
          Join our global community of contributors and help make Ctx OS <br /> better for everyone
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '3.5rem',
          flexWrap: 'wrap',
          [theme.breakpoints.down('lg')]: {
            justifyContent: 'center',
            padding: '1rem'
          }
        }}
        id="contribute-section-repo-wrapper"
      >
        <ContributeCard
          type={CardType.Primary}
          icon={<Github />}
          titleTextVariant="h5"
          descTextVariant="body1"
          title="GitHub - backup mirror"
          description="The repository where we keep a copy of the most important code in case our servers are down."
          buttonText="View GitHub"
          buttonType={ButtonType.Contained}
          styles={PrimaryCardStyles}
          link="https://github.com/ctxos"
        />
        <ContributeCard
          type={CardType.Primary}
          icon={<Gitlab />}
          title="GitLab"
          titleTextVariant="h5"
          descTextVariant="body1"
          description="The platform where the source code of the ctx packages is hosted. Join it to contribute to our source code and improve the system."
          buttonText="View GitLab"
          buttonType={ButtonType.Contained}
          styles={PrimaryCardStyles}
          link="https://github.com/ctxos"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '6.5rem',
          justifyContent: 'space-between',
          [theme.breakpoints.down('lg')]: {
            justifyContent: 'space-evenly',
            gap: '4.5rem',
            padding: '1rem'
          },
          [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            gap: '4.5rem'
          },
          flexWrap: 'wrap',
          marginTop: '1rem'
        }}
      >
        <ContributeCard
          type={CardType.Secondary}
          icon={<BugIcon />}
          title="Bug Reporting"
          titleTextVariant="h6"
          descTextVariant="subtitle2"
          description="Report issues, test releases, and help improve stability"
          buttonText="Report Bug"
          buttonType={ButtonType.Outlined}
          styles={SecondaryCardStyles}
          link="https://github.com/ctxos"
          id="contribute-section-repo-left-card"
        />
        <ContributeCard
          type={CardType.Secondary}
          icon={<FinIcon />}
          title="Financial Support"
          titleTextVariant="h6"
          descTextVariant="subtitle2"
          description="Support the project through donations and sponsorships"
          buttonText="Donate"
          buttonType={ButtonType.Outlined}
          styles={SecondaryCardStyles}
          link="https://github.com/ctxos"
          id="contribute-section-repo-middle-card"
        />
        <ContributeCard
          type={CardType.Secondary}
          icon={<DocIcon />}
          title="Documentation"
          titleTextVariant="h6"
          descTextVariant="subtitle2"
          description="Help improve guides, tutorials, and technical documentation"
          buttonText="Write Docs"
          buttonType={ButtonType.Outlined}
          styles={SecondaryCardStyles}
          link="https://github.com/ctxos"
          id="contribute-section-repo-right-card"
        />
      </Box>
    </Box>
  )
}

export default ContributeSection
