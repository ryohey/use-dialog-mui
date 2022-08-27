# use-dialog-mui

React alternative to window.alert() using MUI

## Installation

```sh
npm install use-dialog-mui
```

## Setup

```js
<DialogProvider>
  <App />
</DialogProvider>
```

## useDialog

```jsx
const ExampleButton = () => {
  const dialog = useDialog()
  return <button onClick={async () =>
    const result = await dialog.show({
      title: "Do you want to save your changes?",
      actions: [
        { title: localized("yes", "Yes"), key: "yes" },
        { title: localized("no", "No"), key: "no" },
        { title: localized("cancel", "Cancel"), key: "cancel" },
      ]
    }) // returns "yes" | "no" | "cancel" | null
    if (result === "yes") {
      console.log("yay")
    }
  }>
    Push me
  </button>
}
```

## API

### show<T>(options: DialogOptions<T>): Promise<T | null>

```ts
interface DialogOptions<Keys extends string> {
  title: string
  message?: string
  actions: DialogAction<Keys>[]
}

interface DialogAction<Key extends string> {
  title: string
  key: Key
}
```
