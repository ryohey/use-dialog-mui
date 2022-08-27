import { createContext, useContext } from "react"

export interface DialogOptions<Keys extends string> {
  title: string
  message?: string
  actions: DialogAction<Keys>[]
}

export interface DialogAction<Key extends string> {
  title: string
  key: Key
}

export type DialogProps<Keys extends string> = DialogOptions<Keys> & {
  callback: (key: Keys | null) => void
}

export const DialogContext = createContext<{
  setDialog: (props: DialogProps<any> | null) => void
}>(null as never)

export const useDialog = () => {
  const { setDialog } = useContext(DialogContext)

  return {
    async show<Keys extends string>(
      options: DialogOptions<Keys>
    ): Promise<Keys> {
      return new Promise((resolve, _reject) => {
        setDialog({
          ...options,
          callback: (key) => resolve(key),
        })
      })
    },
  }
}
