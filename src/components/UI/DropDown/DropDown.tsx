import { ChangeEvent, useState } from 'react'
import classes from './DropDown.module.css'

const DropDown = ({ choices }: { choices: Array<string> }) => {
  const [track, setTrack] = useState('')

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    setTrack(event.target.value)
  }

  let key = 0
  return (
    <div>
      <select
        className={classes.select}
        value={track}
        onChange={onChangeHandler}
      >
        {choices.map((choice) => (
          <option key={key++}>{choice}</option>
        ))}
      </select>
    </div>
  )
}

export default DropDown
