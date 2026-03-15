import { Grid, Card, CardContent, Typography } from '@mui/material'
import { useState } from 'react'

import careers from './careers'

import JobItem from 'components/JobItem'

const JobsSection = () => {
  const [openDialogs, setOpenDialogs] = useState<string[]>([])

  const handleClickOpen = (title: string) => {
    setOpenDialogs((prevOpenDialogs: string[]) => [...prevOpenDialogs, title])
  }

  const handleClose = (title: string) => {
    setOpenDialogs((prevOpenDialogs: string[]) =>
      prevOpenDialogs.filter((dialogTitle: string) => dialogTitle !== title)
    )
  }

  let careersData

  if (careers.length === 0) {
    careersData = <Typography variant="body1">No positions available.</Typography>
  } else {
    careersData = careers.map((data, i) => (
      <JobItem
        key={i}
        data={data}
        openDialogs={openDialogs}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    ))
  }

  return (
    <Grid container alignItems="center" direction="column" justifyContent="center" wrap="nowrap">
      <Card>
        <CardContent>{careersData}</CardContent>
      </Card>
    </Grid>
  )
}

export default JobsSection
