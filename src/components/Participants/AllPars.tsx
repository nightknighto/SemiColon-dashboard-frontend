import { useState } from 'react'
import { Participant } from '../../types/Participant'
import { tracks } from '../../types/tracks'
import DropDown from '../UI/DropDown/DropDown'
import classes from './AllPars.module.css'
import ParItem from './ParItem'
import InputBar from '../UI/InputBar/InputBar'

const AllPars = ({
  data,
  onChoose,
}: {
  data: Participant[]
  onChoose: (id: string) => void
}) => {
  const [filteredData, setFilteredData] = useState<Participant[]>(data)
  const [chosenTrack, setChosenTrack] = useState<string>('All')
  const [searchPhone, setSearchPhone] = useState<string>('')

  let output

  useEffect(() => {
    if (chosenTrack === 'All') {
      setFilteredData(data)
    } else {
      setFilteredData(data.filter((par) => par.firstPreference === chosenTrack))
    }
  }, [chosenTrack, data])

  const onTrackChangeHandler = (track: string) => {
    if (track === 'All') {
      setChosenTrack('All')
    } else {
      setChosenTrack(track)
    }
    setSearchPhone('')
  }

  const onSearchHandler = (phoneInput: string) => {
    setSearchPhone(phoneInput)
    setFilteredData(
      data.filter(
        (par) =>
          par.phone.includes(phoneInput) &&
          (chosenTrack === 'All' || par.firstPreference === chosenTrack)
      )
    )
  }

  if (data[0]) {
    output = (
      <div>
        <InputBar
          type="number"
          placeholder="search by phone"
          onChange={onSearchHandler}
          value={searchPhone}
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
