import { useContext, useEffect, useState } from 'react'
import Card from '../UI/Card/Card'
import AllPars from './AllPars'
import DataContext from '../../context/data-context'
import classes from './Participants.module.css'
import ParDetails from './ParDetails'
import { parDataTypes } from '../../interfaces/parDataTypes'

const Participants = () => {
  const { data } = useContext(DataContext)
  const [chosenPar, setChosenPar] = useState<parDataTypes>({
    _id: '',
    createdAt: '',
    email: '',
    __v: 0,
    firstPreference: '',
    firstPrefKnowledge: '',
    firstPrefReason: '',
    name: '',
    pastExperience: '',
    secondPreference: '',
    secondPrefReason: '',
    phone: '',
  })

  const onChoose = (id: string) => {
    for (const par of data) {
      if (par._id === id) {
        setChosenPar(par)
        return
      }
    }
  }

  return (
    <Card className={classes['par-container']}>
      {data[0] && (
        <>
          <AllPars onChoose={onChoose} data={data} />{' '}
          <ParDetails par={chosenPar} />
        </>
      )}
      {!data && <h2>No data found</h2>}
    </Card>
  )
}

export default Participants
