import { Avatar, Box, Button, Divider, Grid, Typography, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ErrorPage from 'next/error'
import Head from 'next/head'
import RouterLink from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import {
  TwitterShareButton,
  RedditShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  TelegramIcon
} from 'react-share'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import { NextPageExtended, PostType } from '../../src/types'

import Left from 'assets/Left.svg'

const useStyles = makeStyles(theme => ({
  heading: {
    marginBottom: theme.spacing(4)
  },
  img: {
    borderRadius: 6,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  arrow: {
    verticalAlign: 'middle',
    fill: theme.palette.text.secondary
  },
  crumb: {
    textTransform: 'none',
    color: theme.palette.text.secondary,
    opacity: 0.5
  },
  gridHr: {
    marginTop: theme.spacing(3)
  }
}))

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post: NextPageExtended = ({ post /*, morePosts, preview*/ }: Props) => {
  const router = useRouter()
  const [Content, setContent] = useState<ReactNode>(null)
  const theme = useTheme()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  useEffect(() => {
    ;(async () => {
      setContent(await markdownToHtml(post.content ?? ''))
    })()
  }, [])
  const classes = useStyles()
  const postUrl = `https://ctxos.github.io/blog/${post.slug}`

  const quote = encodeURIComponent(post.title)

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    postUrl
  )}&quote=${quote}`

  return router.isFallback ? (
    <>Loading</>
  ) : (
    <div
      style={{
        padding: `0 ${theme.spacing(2)}`
      }}
    >
      <article>
        <Head>
          <title>{post.title}</title>
        </Head>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10}>
            <RouterLink href="/blog">
              <Button
                startIcon={<Left className={classes.arrow} fill="textSecondary" />}
                className={classes.crumb}
              >
                Back
              </Button>
            </RouterLink>
          </Grid>
          <Grid className={classes.gridHr} item xs={12} md={10}>
            <Divider variant="fullWidth" />
          </Grid>
        </Grid>
        <Grid className={classes.gridHr} container justifyContent="center">
          <Grid container item direction="column" alignItems="center">
            <Grid className={classes.heading} item xs={12} md={10} lg={6}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  [theme.breakpoints.down(440)]: {
                    fontSize: '2.1rem'
                  }
                }}
              >
                {post.title}
              </Typography>
              {post.description && (
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    fontWeight: 400
                  }}
                >
                  {post.description}
                </Typography>
              )}
              <Box display="flex" marginTop={3} alignItems="center" style={{ gap: 8 }}>
                <Avatar src={`/assets/avatars/${post.author}.jpg`} />
                <Typography variant="body1" color="primary" style={{ opacity: 1 }}>
                  {post.author}
                </Typography>
                <Typography variant="body1">{post.date}</Typography>
              </Box>
              <img className={classes.img} src={post.image} alt="Post image" />
            </Grid>
          </Grid>
          <Grid item xs={12} md={10} lg={6}>
            {Content}
          </Grid>
          <Box width="100%" display="flex" justifyContent="center" style={{ gap: 16 }}>
            <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
              <FacebookIcon size={32} round />
            </a>
            <TwitterShareButton url={postUrl} title={post.title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <RedditShareButton
              url={postUrl}
              title={post.title}
              windowWidth={660}
              windowHeight={460}
            >
              <RedditIcon size={32} round />
            </RedditShareButton>
            <TelegramShareButton url={postUrl} title={post.title}>
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </Box>
        </Grid>
      </article>
    </div>
  )
}

Post.hideEllipses = true
export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  return {
    props: {
      post: await getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'image',
        'description'
      ])
    }
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts(['slug'])

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug
        }
      }
    }),
    fallback: false
  }
}
