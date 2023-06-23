import { useEffect, useState } from 'react'
import { Participant } from '../../types/Participant'
import { tracks } from '../../types/tracks'
import { states } from '../../types/participants-states'
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
  const [parState, setParState] = useState<string>('All')

  let output

  useEffect(() => {
    if (chosenTrack === 'All' && parState === 'All') {
      setFilteredData(data)
    } else if (chosenTrack === 'All' && parState !== 'All') {
      setFilteredData(data.filter((par) => par.acceptanceStatus === parState))
    } else if (chosenTrack !== 'All' && parState === 'All') {
      setFilteredData(data.filter((par) => par.firstPreference === chosenTrack))
    } else if (chosenTrack !== 'All' && parState !== 'All') {
      setFilteredData(
        data.filter(
          (par) =>
            par.firstPreference === chosenTrack &&
            par.acceptanceStatus === parState
        )
      )
    }
  }, [chosenTrack, parState, data])

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

  const onStateChangeHandler = (state: string) => {
    if (state === 'All') {
      setParState('All')
    } else {
      setParState(state)
    }
  }

  if (data[0]) {
    output = (
      <div>
        <div className={classes['sidebar-header']}>
          <InputBar
            type="text"
            placeholder="Phone or Name"
            onChange={onSearchHandler}
            value={search}
          />
          <DropDown choices={tracks} onChange={onTrackChangeHandler} />
          <DropDown choices={states} onChange={onStateChangeHandler} />
          <p className={classes['total']}>Total: {filteredData.length} Participant</p>
        </div>
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
