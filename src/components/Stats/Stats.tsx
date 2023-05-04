import { useContext } from 'react'
import Card from '../UI/Card/Card'
import Track from './Track'
import DataContext from '../../context/data-context'

const Stats = ({ tracks }: { tracks: string[] }) => {
  const { data } = useContext(DataContext)
  const tracksStats = []

  for (const track of tracks) {
    tracksStats.push({
      name: track,
      numParticipants: data.filter((par) => par.firstPreference === track)
        .length,
    })
  }

  return (
    <Card>
      <h1>Tracks</h1>
      {tracksStats.map((track) => (
        <Track
          key={track.name}
          name={track.name}
          numParticipants={track.numParticipants}
        />
      ))}
    </Card>
  )
}

export default Stats
