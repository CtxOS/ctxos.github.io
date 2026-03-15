import { Box, GridProps, Pagination, useMediaQuery, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'

import { PostType } from '../../../types'

import Post from 'components/Post'
import { StyledPostGrid, StyledPostWrapper } from 'components/Post/index.styles'
/*
import NewsletterSection from 'containers/HomeContainers/NewsletterSection'
*/

type PostSectionProps = {
  allPosts: PostType[]
} & GridProps

const PostsSection = ({ allPosts }: PostSectionProps) => {
  const allPostsRendered = useMemo(
    () =>
      allPosts.map((post, i) => (
        <Box key={`post-box-${i}`}>
          <Post
            key={`post-${i}`}
            description={post.description}
            title={post.title}
            author={post.author}
            date={post.date}
            image={post.image}
            slug={post.slug}
          />
        </Box>
      )),
    [allPosts]
  )

  const router = useRouter()

  const [page, setPage] = useState(1)
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    router.push(`/blog/?page=${value}`, undefined, { shallow: true })
  }

  const contentPerPage = 6
  const lastIndex = page * contentPerPage
  const firstIndex = lastIndex - contentPerPage
  const count = Math.ceil(allPosts.length / contentPerPage)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <StyledPostWrapper>
      <StyledPostGrid>{allPostsRendered.slice(firstIndex, lastIndex)}</StyledPostGrid>
      <Box sx={{ marginTop: theme.spacing(6), display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={count}
          page={page}
          variant="outlined"
          color="primary"
          size={isMobile ? 'medium' : 'large'}
          onChange={handleChange}
        />
      </Box>
    </StyledPostWrapper>
  )
}

export default PostsSection
