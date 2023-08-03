import AllPars from './AllPars'
import classes from './Participants.module.css'
import ParDetails from './ParDetails'
import Card from '../../../common/components/Card/Card'
import { useAppSelector } from '../../../app/hooks'
import { selectAllParticipants } from '../participantSlice'

const Participants = () => {

  const participants = useAppSelector(selectAllParticipants)
  const loading = useAppSelector((state) => state.participants.loading)

  if(loading) {
    return <h2 style={{ marginLeft: 'auto', marginRight: 'auto' }}>Loading...</h2>
  }

  return (
    <Card className={classes['par-container']}>
      {
        participants.length > 0 ? (
          <>
            <AllPars />{' '}
            <ParDetails />
          </>
        ) : (
          <h2 style={{ marginLeft: 'auto', marginRight: 'auto' }}>No data found</h2>
        )
      }
    </Card>
  )
}

export default Participants
