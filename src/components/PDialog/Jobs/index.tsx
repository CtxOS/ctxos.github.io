import { Dialog, DialogContent, DialogProps, Fade, Grid, Box } from '@mui/material'
import { PropsWithChildren } from 'react'

import { StyledPDialogIconButton, StyledPDialogTitle } from '../index.styles'

import CloseIcon from 'containers/TeamContainers/PastContributorsSection/assets/Close.svg'

type JobDialogProps = PropsWithChildren<
  {
    title: string
    onClose: () => void
  } & DialogProps
>

const JobDialog = ({ title, onClose, children, ...rest }: JobDialogProps) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth="lg"
      TransitionComponent={Fade}
      transitionDuration={500}
      {...rest}
    >
      <StyledPDialogTitle>
        {title}
        {onClose ? (
          <StyledPDialogIconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </StyledPDialogIconButton>
        ) : null}
      </StyledPDialogTitle>
      <DialogContent>
        <Grid container justifyContent="center" alignItems="center" spacing={3} xs={12}>
          <Box sx={{ p: 5 }}>{children}</Box>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default JobDialog
