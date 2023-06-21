import classes from './InputBar.module.css'
import { ChangeEvent, ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

const InputBar = ({
  type,
  placeholder,
  onChange,
}: {
  type: HTMLInputTypeAttribute
  placeholder?: string
  onChange?: (value: string) => void
}) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <input
      type={type}
      className={classes['in-bar']}
      placeholder={placeholder}
      onChange={onChangeInputHandler}
    />
  )
}

export default InputBar
