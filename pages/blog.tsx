import { Box, Grid, Typography, useTheme } from '@mui/material'

import { getAllPosts } from '../lib/api'
import { NextPageExtended, PostType } from '../src/types'

import PostsSection from 'containers/BlogContainers/PostsSection'
import Github from 'containers/HomeContainers/ContributeSection/assets/github.svg'
import Gitlab from 'containers/HomeContainers/ContributeSection/assets/gitlab.svg'
import ContributeCard, {
  ButtonType,
  CardType
} from 'containers/HomeContainers/ContributeSection/Card'
import generateRssFeed from 'src/utils/rss'

type BlogProps = { allPosts: PostType[]; featuredPosts: PostType[] }

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

const Blog: NextPageExtended = ({ allPosts }: BlogProps) => {
  const theme = useTheme()
  return (
    <Grid
      container
      sx={{
        marginTop: '100px !important',
        maxWidth: theme.breakpoints.values.xl,
        margin: '0 auto',
        padding: `0 ${theme.spacing(2)}`
      }}
      justifyContent="center"
    >
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        alignItems="center"
        direction="column"
        wrap="nowrap"
      >
        <Typography
          variant="h2"
          sx={{
            [theme.breakpoints.down(440)]: {
              fontSize: '2.5rem'
            }
          }}
        >
          Ctx OS Blog
        </Typography>
        <Typography
          sx={{ marginTop: theme.spacing(1), marginBottom: theme.spacing(6.5) }}
          variant="subtitle2Semi"
          align="center"
        >
          Latest Posts
        </Typography>
      </Grid>
      <PostsSection allPosts={allPosts} />
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: theme.spacing(2),
            marginTop: theme.spacing(24)
          }}
        >
          <Typography variant="h2" align="center">
            Contribute to the Ctx Project
          </Typography>
          <Typography variant="body1" align="center">
            CtxOS was born as a fully open source project, anyone can see what is inside.
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: theme.spacing(12),
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
      </Box>
    </Grid>
  )
}
Blog.hideEllipses = true

export default Blog

export const getStaticProps = async () => {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'author',
    'image',
    'description',
    'content',
    'slug'
  ])

  generateRssFeed(allPosts)

  /* const featuredPosts = await Promise.all(
    ['ctx-4.11-release-notes.md', '2020-05-08-ctx-hackthebox.md'].map(slug =>
      getPostBySlug(slug, ['title', 'image', 'date', 'description'], true)
    )
  )*/

  return { props: { allPosts } }
}
