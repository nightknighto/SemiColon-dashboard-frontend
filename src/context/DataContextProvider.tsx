import { useState } from 'react'
import DataContext from './data-context'
import { parDataTypes } from '../interfaces/parDataTypes'

const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<parDataTypes[]>([])

  const fetchParticipants = async () => {
    try {
      const res = await fetch('http://localhost:9100/participants/getAll')

      const participants = await res.json()
      console.log(participants)
      return participants.data
    } catch (err: unknown) {
      const { message } = err as { message: string }
      console.log(message)
    }
  }

  const fetchItemsHandler = async () => {
    const pars = await fetchParticipants()
    setData(pars)
  }

  const dataContext = {
    data: data,
    fetchData: fetchItemsHandler,
  }

  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  )
}

export default DataContextProvider
