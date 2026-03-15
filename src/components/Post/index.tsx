import { Avatar, Box, CardMedia, CardProps, Typography } from '@mui/material'
import RouterLink from 'next/link'

import { PostType } from '../../types'

import { StyledPostCard, StyledPostCardActionArea, StyledPostCardContent } from './index.styles'

type PostProps = Omit<PostType, 'content'> & CardProps

const Post = ({ title, description, date, image, slug, author }: PostProps) => {
  return (
    <StyledPostCard>
      <RouterLink href={`/blog/${slug}`}>
        <StyledPostCardActionArea>
          <CardMedia
            image={image}
            component="img"
            alt={title}
            sx={{
              width: '100%',
              height: 250
            }}
          />
          <StyledPostCardContent>
            <Typography
              variant="h5"
              paragraph
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {title}
            </Typography>
            {description && (
              <Typography variant="body1" paragraph>
                {description}
              </Typography>
            )}
            <Box display="flex" alignItems="center" justifyContent="space-between" marginTop="auto">
              <Box display="flex" alignItems="center" style={{ gap: 8 }}>
                <Avatar src={`/assets/avatars/${author}.jpg`} />
                <Typography variant="body1" color="primary" style={{ opacity: 1 }}>
                  {author}
                </Typography>
              </Box>
              <Typography variant="body1">{date}</Typography>
            </Box>
          </StyledPostCardContent>
        </StyledPostCardActionArea>
      </RouterLink>
    </StyledPostCard>
  )
}

export default Post
