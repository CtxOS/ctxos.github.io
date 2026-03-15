import { emphasize, styled, Tooltip, TooltipProps, useTheme } from '@mui/material'

export type PTooltipProps = TooltipProps

const StyledTooltip = styled<typeof Tooltip>(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))``

const PTooltip = (props: PTooltipProps) => {
  const theme = useTheme()

  return (
    <StyledTooltip
      {...props}
      arrow
      sx={{
        '& .MuiTooltip-tooltip': {
          backgroundColor: emphasize(theme.palette.background.paper, 0.1),
          color: theme.palette.text.primary,
          fontSize: 14,
          boxShadow:
            '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)'
        },
        '& .MuiTooltip-arrow': {
          color: emphasize(theme.palette.background.paper, 0.1)
        }
      }}
    />
  )
}

export default PTooltip
