import { Dialog, DialogContent, DialogProps, Fade, Grid } from '@mui/material'
import { PropsWithChildren } from 'react'

import { StyledPDialogIconButton, StyledPDialogTitle } from '../index.styles'

import CloseIcon from 'containers/TeamContainers/PastContributorsSection/assets/Close.svg'

type UsersDialogProps = PropsWithChildren<
  {
    title: string
    onClose: () => void
  } & DialogProps
>

const UsersDialog = ({ title, onClose, children, ...rest }: UsersDialogProps) => {
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
        <Grid container justifyContent="center" spacing={3}>
          {children}
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default UsersDialog
