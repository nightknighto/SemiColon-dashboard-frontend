import { useEffect, useState } from 'react'
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
  const [search, setSearch] = useState<string>('')

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
    setSearch('')
  }

  const onSearchHandler = (Input: string) => {
    setSearch(Input)
    if (!isNaN(parseInt(Input))) {
      setFilteredData(
        data.filter(
          (par) =>
            par.phone.includes(Input) &&
            (chosenTrack === 'All' || par.firstPreference === chosenTrack)
        )
      )
    } else {
      setFilteredData(
        data.filter(
          (par) =>
            par.name.toLowerCase().includes(Input.toLowerCase()) &&
            (chosenTrack === 'All' || par.firstPreference === chosenTrack)
        )
      )
    }
  }

  if (data[0]) {
    output = (
      <div>
        <InputBar
          type="text"
          placeholder="Phone or Name"
          onChange={onSearchHandler}
          value={search}
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
