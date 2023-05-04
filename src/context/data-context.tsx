import React from 'react'
import { parDataTypes } from '../interfaces/parDataTypes'

interface DataCtxTypes {
  data: parDataTypes[]
  fetchData: () => Promise<void>
}

const defaultData: DataCtxTypes = {
  data: [],
  fetchData: async () => {return},
}

const DataContext = React.createContext<DataCtxTypes>(defaultData)

export default DataContext
