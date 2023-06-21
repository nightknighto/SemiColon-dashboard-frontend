import classes from './InputBar.module.css'
import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  LegacyRef,
  forwardRef,
} from 'react'

const InputBar = forwardRef(
  ({
    type,
    placeholder,
    onChange,
    value,
  }: {
    type: HTMLInputTypeAttribute
    placeholder?: string
    onChange?: (value: string) => void
    value?: string
  }, ref: LegacyRef<HTMLInputElement>) => {
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
        ref={ref}
        value={value}
      />
    )
  }
)

export default InputBar
