import { useContext, useEffect } from 'react'
import Track from './Track'
import DataContext from '../../../common/context/data-context'
import { useNavigate } from 'react-router-dom'
import { authHeader } from '../../../common/helpers/auth'
import Card from '../../../common/components/Card/Card'

const Stats = ({ tracks }: { tracks: string[] }) => {
  const nav = useNavigate()
  useEffect(() => {
    const r = authHeader()
    if (!r) {
      nav('/login')
    }
  }, [])

  const { data } = useContext(DataContext)
  const tracksStats = []

  let output
  let total = 0
  if (data.length > 0) {
    for (const track of tracks) {
      const numPars = data.filter((par) => par.firstPreference === track).length
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
