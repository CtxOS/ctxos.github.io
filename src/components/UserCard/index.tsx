import {
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  GridProps,
  Link,
  useTheme
} from '@mui/material'

import { StyledEmail, StyledGithub, StyledLinkedIn, StyledTwitter } from './index.styles'

type UserCardProps = {
  role?: string
  noAvatar?: boolean
  nickname?: string
  name?: string
  socials?: {
    github: string
    twitter: string
    linkedIn: string
    email: string
  }
  variant?: 'paper' | 'background'
} & GridProps

const UserCard = ({
  name,
  nickname,
  role,
  noAvatar = false,
  socials,
  variant = 'paper',
  ...props
}: UserCardProps) => {
  const theme = useTheme()

  return (
    <Grid {...props} item xs={12} md={4} justifyContent="center">
      <Card
        elevation={0}
        sx={{
          backgroundColor: variant === 'background' ? theme.palette.background.default : '',
          height: '100%'
        }}
      >
        <CardContent
          sx={{
            padding: theme.spacing(4),
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
          }}
        >
          {!noAvatar && (
            <Avatar
              sx={{
                width: theme.spacing(7),
                height: theme.spacing(7),
                marginBottom: theme.spacing(3)
              }}
              src={`/assets/avatars/${nickname}.jpg`}
            />
          )}
          {name && (
            <Typography variant="h5" paragraph={!nickname}>
              {name}
            </Typography>
          )}

          {nickname && (
            <Typography
              sx={{
                color: '#05EEFF',
                opacity: 1
              }}
              paragraph
            >
              {nickname}
            </Typography>
          )}
          <Typography variant="body1Semi">{role}</Typography>
          {socials && (
            <Grid
              sx={{ marginTop: theme.spacing(3) }}
              container
              direction="row"
              alignItems="center"
              spacing={2}
            >
              {socials.github && (
                <Grid item>
                  <Link href={socials.github}>
                    <IconButton size="small">
                      <StyledGithub />
                    </IconButton>
                  </Link>
                </Grid>
              )}
              {socials.twitter && (
                <Grid item>
                  <Link href={socials.twitter}>
                    <IconButton size="small">
                      <StyledTwitter />
                    </IconButton>
                  </Link>
                </Grid>
              )}
              {socials.linkedIn && (
                <Grid item>
                  <Link href={socials.linkedIn}>
                    <IconButton size="small">
                      <StyledLinkedIn />
                    </IconButton>
                  </Link>
                </Grid>
              )}
              {socials.email && (
                <Grid item>
                  <Link href={socials.email}>
                    <IconButton size="small">
                      <StyledEmail />
                    </IconButton>
                  </Link>
                </Grid>
              )}
            </Grid>
          )}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default UserCard
