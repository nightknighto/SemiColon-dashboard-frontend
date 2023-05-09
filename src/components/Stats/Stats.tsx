import { useContext } from 'react'
import Card from '../UI/Card/Card'
import Track from './Track'
import DataContext from '../../context/data-context'

const Stats = ({ tracks }: { tracks: string[] }) => {
  const { data } = useContext(DataContext)
  const tracksStats = []

  let output
  if (data) {
    for (const track of tracks) {
      tracksStats.push({
        name: track,
        numParticipants: data.filter((par) => par.firstPreference === track)
          .length,
      })
    }
    output = tracksStats.map((track) => (
      <>
        <h1>Tracks</h1>
        <Track
          key={track.name}
          name={track.name}
          numParticipants={track.numParticipants}
        />
      </>
    ))
  } else {
    output = <h2>No data found.</h2>
  }
  return <Card>{output}</Card>
}

export default Stats
