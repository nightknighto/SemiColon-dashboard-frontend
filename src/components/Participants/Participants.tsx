import { useContext, useEffect, useState } from 'react'
import Card from '../UI/Card/Card'
import AllPars from './AllPars'
import DataContext from '../../context/data-context'
import classes from './Participants.module.css'
import ParDetails from './ParDetails'
import { parDataTypes } from '../../interfaces/parDataTypes'

const Participants = () => {
  const { data, fetchData } = useContext(DataContext)
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
    status: '',
  })

  useEffect(() => {
    fetchData()
  }, [])

  const onChoose = (id: string) => {
    for (const par of data) {
      if (par._id === id) {
        setChosenPar(par)
        return
      }
    }
  }

  let output
  if (data) {
    output = data[0] && (
      <>
        <AllPars onChoose={onChoose} data={data} />{' '}
        <ParDetails par={chosenPar} />
      </>
    )
  } else {
    output = <h2>No data found</h2>
  }

  return <Card className={classes['par-container']}>{output}</Card>
}

export default Participants
