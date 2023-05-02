import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import DropDown from '../UI/DropDown/DropDown'
import classes from './Stats.module.css'
import Track from './Track'

const Stats = (props: { tracks: Array<string> }) => {
  const tracksStats = props.tracks.map((track) => {
    return {
      name: track,
      numParticipants: Math.floor(Math.random() * 100),
    }
  })
  return (
    <Card>
      <h1>Tracks</h1>
      {tracksStats.map((track) => (
        <Track name={track.name} numParticipants={track.numParticipants} />
      ))}
    </Card>
  )
}

export default Stats
