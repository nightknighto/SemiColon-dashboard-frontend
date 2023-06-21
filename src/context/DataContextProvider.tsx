import { useState } from 'react'
import DataContext from './data-context'
import { parDataTypes } from '../interfaces/parDataTypes'
import authHeader from '../helpers/authHeader'
import axios from 'axios'

const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<parDataTypes[]>([])
  const fetchParticipants = async () => {
    try {
      //'https://semicolon-registration-backend.onrender.com/participants/getAll',
      // const res = await fetch(
      //   'https://semicolon-registration-backend.onrender.com/participants/getAll'
      // )

      const res = await axios.get(
        'https://semicolon-registration-backend.onrender.com/participants/getAll',
        { headers: authHeader() }
      )

      const participants = res.data
      if (participants.status === 'failure') {
        throw new Error('You are not logged in')
      }
      return participants.data
    } catch (err: unknown) {
      const { message } = err as { message: string }
      console.log(message)
      return []
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
