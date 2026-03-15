import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/styles'
import { ReactNode } from 'react'

import juniorCorsair from './assets/junior.png'
import masterCorsair from './assets/master.png'
import seniorCorsair from './assets/senior.png'

interface CustomTimelineDotProps {
  children?: ReactNode
}

const CustomTimelineDot = ({ children }: CustomTimelineDotProps) => {
  const theme = useTheme()

  return (
    <TimelineDot
      variant="outlined"
      color="primary"
      sx={{
        width: theme.spacing(12),
        height: theme.spacing(12),
        backgroundImage: `url(${juniorCorsair})`
      }}
    >
      {children}
    </TimelineDot>
  )
}

const PTimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <EmojiEventsIcon fontSize="medium" color="action" />
          <EmojiEventsIcon fontSize="medium" color="secondary" />
          <EmojiEventsIcon fontSize="medium" color="secondary" />
          <Typography>
            You will receive the Ctx Swag Starter Pack, which includes a hoodie, T-shirt, and
            sticker sheet.
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <CustomTimelineDot>
            <img src={juniorCorsair.src} />
          </CustomTimelineDot>
          <TimelineConnector sx={{ bgcolor: '#A77632' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '28px', px: 2 }}>
          <Typography variant="h6" component="span">
            Junior Corsair
          </Typography>
          <Typography>
            Your journey begins with your first five successful commits on GitLab, earning you the
            title of Junior Corsair.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
          <EmojiEventsIcon fontSize="medium" color="action" />
          <EmojiEventsIcon fontSize="medium" color="action" />
          <EmojiEventsIcon fontSize="medium" color="secondary" />
          <Typography>
            Achieving this will grant you the Senior Corsair status, along with HTB Monthly VIP
            access as a reward.
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: '#A77632' }} />
          <CustomTimelineDot>
            <img src={seniorCorsair.src} />
          </CustomTimelineDot>
          <TimelineConnector sx={{ bgcolor: '#8D9291' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '32px', px: 2 }}>
          <Typography variant="h6" component="span">
            Senior Corsair
          </Typography>
          <Typography>
            The next step is maintaining active and successful contributions for six months, with at
            least one commit every two weeks.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
          <EmojiEventsIcon fontSize="medium" color="action" />
          <EmojiEventsIcon fontSize="medium" color="action" />
          <EmojiEventsIcon fontSize="medium" color="action" />
          <Typography>
            This prestigious recognition comes with HTB Monthly ProLabs access.
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: '#8D9291' }} />
          <CustomTimelineDot>
            <img src={masterCorsair.src} />
          </CustomTimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '14px', px: 2 }}>
          <Typography variant="h6" component="span">
            Master Corsair
          </Typography>
          <Typography>
            The pinnacle of achievement within our community, the Master Corsair tier is reserved
            for individuals handpicked by the Ctx team, based on exceptional contributions.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default PTimeline
