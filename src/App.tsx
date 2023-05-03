import Header from './components/UI/Header/Header'
import Stats from './components/Stats/Stats'
import Charts from './components/Charts/Charts'
import { useEffect, useState } from 'react'
import { parDataTypes } from './interfaces/parDataTypes'

function App() {
  const [parData, setParData] = useState([])

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const res = await fetch('http://localhost:9100/participants/getAll')

        const participants = await res.json()
        console.log(participants.data[0].firstPreference)
        setParData(participants.data)
      } catch (err: unknown) {
        const { message } = err as { message: string }
        console.log(message)
      }
    }

    fetchParticipants()
  }, [])

  useEffect(() => {
    console.log(parData)
  }, [parData])

  const tracks = [
    'webDev1',
    'Web Track-Advanced',
    'Embedded Track-Basic',
    'Embedded Track-Advanced',
  ]

  const numbers: number[] = []
  if (tracks) {
    for (const track of tracks) {
      let num = 0
      for (const part of parData) {
        console.log(track, part)
        if (part.firstPreference === track) {
          num++
        }
      }
      numbers.push(num)
    }
  }

  return (
    <>
      <Header />
      <Charts data={parData} numbers={numbers} />
      <Stats tracks={tracks} numbers={numbers} />
    </>
  )
}

export default App
