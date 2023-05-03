import Card from '../UI/Card/Card'
import Track from './Track'

const Stats = ({ tracks, numbers }: { tracks: string[]; numbers: number[] }) => {
  const tracksStats = []

  for (let i = 0; i < tracks.length; i++) {
    tracksStats.push({
      name: tracks[i],
      numParticipants: numbers[i]
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
