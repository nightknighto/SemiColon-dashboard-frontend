import { useContext } from 'react'
import Card from '../UI/Card/Card'
import AllPars from './AllPars'
import DataContext from '../../context/data-context'
import classes from './Participants.module.css'
import ParDetails from './ParDetails'

const Participants = () => {
  const { data } = useContext(DataContext)

  return (
    <Card className={classes['par-container']}>
      {data[0] && (
        <>
          <AllPars data={data} /> <ParDetails par={data[0]} />
        </>
      )}
      {!data && <h2>No data found</h2>}
    </Card>
  )
}

export default Participants
