import { Stack, Typography, Box, useTheme } from '@mui/material'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import { StyledJobItemPaper, StyledJobItemText } from './index.styles'

import PButton from 'components/PButton'
import JobsDialog from 'src/components/PDialog/Jobs'

const JobItem = ({
  data,
  openDialogs,
  handleClickOpen,
  handleClose
}: {
  data: {
    title: string
    location: string
    link: string
    content: string
  }
  openDialogs: string[]
  handleClickOpen: (title: string) => void
  handleClose: (title: string) => void
}) => {
  const theme = useTheme()

  const [markdownContent, setMarkdownContent] = useState<string | null>(null)

  const fetchMarkdownContent = async () => {
    try {
      const response = await fetch(data.content)
      const content = await response.text()
      setMarkdownContent(content)
    } catch (error) {
      console.error('Error fetching Markdown file:', error)
    }
  }

  useEffect(() => {
    fetchMarkdownContent()
  }, [data.content])

  return (
    <StyledJobItemPaper elevation={0}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 24 }}>
        <StyledJobItemText variant="subtitle2" align="center">
          <strong>{data.title}</strong>
        </StyledJobItemText>
        <Box display="flex" flexGrow={1}>
          <Box flexGrow={1} />
          {data.link !== '' ? (
            <>
              <StyledJobItemText variant="subtitle2" align="center">
                {data.location}
              </StyledJobItemText>
              <PButton
                sx={{ marginLeft: theme.spacing(20) }}
                variant="outlined"
                color="primary"
                size="medium"
                onClick={() => handleClickOpen(data.title)}
              >
                Apply
              </PButton>
            </>
          ) : (
            <PButton variant="contained" color="primary" disabled>
              Apply
            </PButton>
          )}
        </Box>
        {openDialogs.includes(data.title) && (
          <JobsDialog
            open={true}
            onClose={() => handleClose(data.title)}
            fullWidth={true}
            title={data.title}
          >
            {markdownContent ? (
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            ) : (
              <p>Loading Markdown content...</p>
            )}
            <Box sx={{ paddingY: 3 }}>
              <Typography gutterBottom>
                {data.link.includes('mailto')
                  ? 'If you are interested please send us an email attaching your CV.'
                  : 'If you are interested please fill out the required fields at the following form.'}
              </Typography>
              <PButton variant="contained" color="primary" to={data.link}>
                {data.link.includes('mailto') ? 'Send CV' : 'Apply'}
              </PButton>
            </Box>
          </JobsDialog>
        )}
      </Stack>
    </StyledJobItemPaper>
  )
}

export default JobItem
