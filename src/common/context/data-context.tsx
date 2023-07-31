import React from 'react'
import { Participant } from '../../features/participants/types/Participant'

interface DataCtxTypes {
  data: Participant[]
  fetchData: () => Promise<void>
}

const defaultData: DataCtxTypes = {
  data: [],
  fetchData: async () => {
    return
  },
}

const DataContext = React.createContext<DataCtxTypes>(defaultData)

export default DataContext
