import { useContext } from 'react'
import Card from '../UI/Card/Card'
import AllPars from './AllPars'
import DataContext from '../../context/data-context'

const Participants = () => {
  const dataCtx = useContext(DataContext)
  
  return (
    <Card>
      <AllPars data={dataCtx.data} />
      <h1>Hello</h1>
    </Card>
  )
}

export default Participants
