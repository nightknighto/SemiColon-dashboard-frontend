import { ChangeEvent, useState } from 'react'
import classes from './DropDown.module.css'

const DropDown = ({
  choices,
  onChange,
}: {
  choices: string[]
  onChange?: (event: string) => void
}) => {
  const [track, setTrack] = useState(choices[0])

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setTrack(event.target.value)
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <div>
      <select
        className={classes.select}
        value={track}
        onChange={onChangeHandler}
      >
        {choices.map((choice) => (
          <option key={choice}>{choice}</option>
        ))}
      </select>
    </div>
  )
}

export default DropDown
