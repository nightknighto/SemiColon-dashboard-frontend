import Track from './Track'
import Card from '../../../common/components/Card/Card'
import { useAppSelector } from '../../../app/hooks'
import { selectAllParticipants } from '../participantSlice'

const Stats = ({ tracks }: { tracks: string[] }) => {

  const participants = useAppSelector(selectAllParticipants)
  const tracksStats = []

  let output
  let total = 0
  if (participants.length > 0) {
    for (const track of tracks) {
      const numPars = participants.filter((par) => par.firstPreference === track).length
      tracksStats.push({
        name: track,
        numParticipants: numPars,
      })
      total = total + numPars
    }
    tracksStats[0].numParticipants = total
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
      </>
    )
  } else {
    output = <h2>No data found.</h2>
  }
  return <Card>{output}</Card>
}

export default Stats
