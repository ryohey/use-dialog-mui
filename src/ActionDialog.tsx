import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material"
import { FC, useContext } from "react"
import { DialogContext, DialogProps } from "./useDialog.js"

export const ActionDialog: FC<DialogProps<any>> = (props) => {
  const { setDialog } = useContext(DialogContext)

  const close = (key: any) => {
    props.callback(key)
    setDialog(null)
  }

  return (
    <Dialog
      open={true}
      onClose={() => close(null)}
      keepMounted={false}
      maxWidth="xs"
    >
      <DialogTitle>{props.title}</DialogTitle>
      {props.message && <DialogContent>{props.message}</DialogContent>}
      <DialogActions>
        {props.actions.map((action) => (
          <Button onClick={() => close(action.key)}>{action.title}</Button>
        ))}
      </DialogActions>
    </Dialog>
  )
}
