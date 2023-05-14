import { useContext } from 'react'
import Card from '../UI/Card/Card'
import Track from './Track'
import DataContext from '../../context/data-context'

const Stats = ({ tracks }: { tracks: string[] }) => {
  const { data } = useContext(DataContext)
  const tracksStats = []

  let output
  let total = 0
  if (data.length > 0) {
    for (const track of tracks) {
      const numPars = data.filter((par) => par.firstPreference === track).length
      tracksStats.push({
        name: track,
        numParticipants: data.filter((par) => par.firstPreference === track)
          .length,
      })
      total = total + numPars
    }
    output = (
      <>
        <h1>Tracks</h1>
        {tracksStats.map((track) => (
          <Track
            key={track.name}
            name={track.name}
            numParticipants={track.numParticipants}
          />
        ))}
        <Track key="total" name="Total" numParticipants={total} />
      </>
    )
  } else {
    output = <h2>No data found.</h2>
  }
  return <Card>{output}</Card>
}

export default Stats
