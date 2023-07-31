import { useState } from 'react'
import DataContext from './data-context'
import { Participant } from '../../features/participants/types/Participant'
import { authHeader } from '../helpers/auth'
import axios, { AxiosError } from 'axios'
import { onLogout } from '../helpers/auth'
import { useNavigate } from 'react-router-dom'

const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<Participant[]>([])
  const nav = useNavigate()
  const fetchParticipants = async () => {
    try {
      const hdrs = authHeader()
      if (hdrs) {
        const res = await axios.get(
          'https://semicolon-registration-backend.onrender.com/participants/getAll',
          { headers: hdrs }
        )
        const participants = res.data
        if (res.status !== 200) {
          throw new Error('Could not connect to database')
        }
        return participants.data
      }
    } catch (_err) {
      const err = _err as AxiosError<{ data: string }>
      console.log(err.response)
      if (err.response?.status === 401) {
        onLogout()
        nav('/login')
      } else {
        alert(err.response?.data?.data ?? err.message)
      }
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
