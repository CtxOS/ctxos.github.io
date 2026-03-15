import { Divider, Grid, Hidden, Stack, Typography } from '@mui/material'

import collaborations from './collaborations'
import {
  StyledCollaborationsSectionCard,
  StyledCollaborationsSectionDescGrid,
  StyledCollaborationsSectionGrid,
  StyledCollaborationsSectionImg,
  StyledCollaborationsSectionPaper
} from './index.styles'

import Carousel from 'components/Carousel'
import { openInNewTab } from 'src/utils/openInNewTab'

const CollaborationSection = () => {
  return (
    <StyledCollaborationsSectionGrid container item xs={12} md={9}>
      <Grid container item xs={12} justifyContent="center">
        <Typography variant="h3" gutterBottom>
          Collaborations
        </Typography>
      </Grid>
      <Hidden smDown>
        <StyledCollaborationsSectionPaper elevation={0}>
          <Stack direction="column">
            {collaborations.map(data => (
              <div key={data.id}>
                <StyledCollaborationsSectionCard
                  key={data.name}
                  onClick={() => openInNewTab(data.url)}
                >
                  <StyledCollaborationsSectionPaper elevation={0}>
                    <Grid container item md={12} direction="row">
                      <StyledCollaborationsSectionDescGrid container item md={8}>
                        <Typography variant="h4" gutterBottom>
                          {data.name}
                        </Typography>
                        <Typography paragraph>{data.description}</Typography>
                      </StyledCollaborationsSectionDescGrid>
                      <Grid container item md={4}>
                        <StyledCollaborationsSectionImg src={data.image} alt={data.name} />
                      </Grid>
                    </Grid>
                  </StyledCollaborationsSectionPaper>
                </StyledCollaborationsSectionCard>
                {data.id !== collaborations.length ? <Divider variant="middle" /> : null}
              </div>
            ))}
          </Stack>
        </StyledCollaborationsSectionPaper>
      </Hidden>
      <Hidden mdUp>
        <StyledCollaborationsSectionPaper elevation={0}>
          <Carousel>
            {collaborations.map((data, i) => (
              <StyledCollaborationsSectionCard
                key={`data-${i}`}
                onClick={() => openInNewTab(data.url)}
              >
                <StyledCollaborationsSectionPaper elevation={0}>
                  <Grid container item md={12} direction="row">
                    <StyledCollaborationsSectionDescGrid container item md={8}>
                      <Typography variant="h4" gutterBottom>
                        {data.name}
                      </Typography>
                      <Typography paragraph>{data.description}</Typography>
                    </StyledCollaborationsSectionDescGrid>
                    <Grid container item md={4}>
                      <StyledCollaborationsSectionImg src={data.image} alt={data.name} />
                    </Grid>
                  </Grid>
                </StyledCollaborationsSectionPaper>
              </StyledCollaborationsSectionCard>
            ))}
          </Carousel>
        </StyledCollaborationsSectionPaper>
      </Hidden>
    </StyledCollaborationsSectionGrid>
  )
}

export default CollaborationSection
