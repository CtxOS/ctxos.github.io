import { Grid } from '@mui/material'

import { PostType } from '../../../types'

import Carousel from 'components/Carousel'

type FeaturedSectionProps = {
  featuredPosts: PostType[]
}

const FeaturedSection = ({ featuredPosts }: FeaturedSectionProps) => {
  return (
    <Grid item container xs={12} md={10} justifyContent="center">
      <Carousel swipe animation="slide" navButtonsAlwaysInvisible>
        {featuredPosts.map((post, i) => (
          <div key={`featured-post-${i}`}>
            <img style={{ display: 'block', margin: 'auto' }} src={post.image} alt="Post image" />
          </div>
        ))}
      </Carousel>
    </Grid>
  )
}

export default FeaturedSection
