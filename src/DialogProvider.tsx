import { FC, ReactNode, useState } from "react"
import { ActionDialog } from "./ActionDialog.js"
import { DialogContext, DialogProps } from "./useDialog.js"

export const DialogProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [dialog, setDialog] = useState<DialogProps<any> | null>(null)

  return (
    <DialogContext.Provider value={{ setDialog }}>
      {children}
      {dialog !== null && <ActionDialog {...dialog} />}
    </DialogContext.Provider>
  )
}
