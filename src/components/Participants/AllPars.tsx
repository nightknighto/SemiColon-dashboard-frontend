import { useState } from 'react'
import { parDataTypes } from '../../interfaces/parDataTypes'
import { tracks } from '../../interfaces/tracks'
import DropDown from '../UI/DropDown/DropDown'
import classes from './AllPars.module.css'
import ParItem from './ParItem'
import InputBar from '../UI/InputBar/InputBar'

const AllPars = ({
  data,
  onChoose,
}: {
  data: parDataTypes[]
  onChoose: (id: string) => void
}) => {
  const [filteredData, setFilteredData] = useState<parDataTypes[]>(data)

  let output

  const onTrackChangeHandler = (track: string) => {
    if (track === 'All') {
      setFilteredData(data)
    } else {
      setFilteredData(data.filter((par) => par.firstPreference === track))
    }
  }

  const onSearchHandler = (phoneInput: string) => {
    setFilteredData(
      filteredData.filter((par) => par.phone.includes(phoneInput))
    )
  }

  if (data[0]) {
    output = (
      <div>
        <InputBar
          type="number"
          placeholder="search by phone"
          onChange={onSearchHandler}
        />
        <DropDown choices={tracks} onChange={onTrackChangeHandler} />
        {filteredData.map((item) => (
          <ParItem
            key={item.phone}
            name={item.name}
            onChoose={onChoose.bind(null, item._id)}
          />
        ))}
      </div>
    )
  }
  return <div className={classes['all-pars']}>{output}</div>
}

export default AllPars
