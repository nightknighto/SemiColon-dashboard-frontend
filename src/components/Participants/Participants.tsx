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
    acceptanceStatus: '',
    year: '',
    collegeId: '',
    emailedStatus: false,
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

  const onAcceptHandler = (phone: string) => {
    const x = phone
    console.log(x[0])
    return
  }

  const onRejectHandler = (phone: string) => {
    const x = phone
    console.log(x[0])
    return
  }

  let output
  if (data.length > 0) {
    output = data[0] && (
      <>
        <AllPars onChoose={onChoose} data={data} />{' '}
        <ParDetails
          par={chosenPar}
          onAcceptHandler={onAcceptHandler}
          onRejectHandler={onRejectHandler}
        />
      </>
    )
  } else {
    output = (
      <h2 style={{ marginLeft: 'auto', marginRight: 'auto' }}>No data found</h2>
    )
  }

  return <Card className={classes['par-container']}>{output}</Card>
}

export default Participants
