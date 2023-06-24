import { useContext, useEffect, useState } from 'react'
import Card from '../UI/Card/Card'
import AllPars from './AllPars'
import DataContext from '../../context/data-context'
import classes from './Participants.module.css'
import ParDetails from './ParDetails'
import { Participant, StatusEnum } from '../../types/Participant'
import { authHeader } from '../../helpers/auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Participants = () => {
  const nav = useNavigate()
  useEffect(() => {
    const r = authHeader()
    if (!r) {
      nav('/login')
    }
  }, [])

  const { data, fetchData } = useContext(DataContext)
  const [chosenPar, setChosenPar] = useState<Participant>({
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

  const statusChangeHandler = async (phone: string, status: StatusEnum) => {
    try {
      const headers = authHeader()
      if (headers) {
        await axios.patch(
          'https://semicolon-registration-backend.onrender.com/participants/status',
          {
            phone,
            status,
          },
          {
            headers,
          }
        )
        fetchData()
        setChosenPar({ ...chosenPar, acceptanceStatus: status })
      } else {
        nav('/login')
      }
    } catch (err) {
      alert(`Error occured: ${err}`)
    }
  }

  let output
  if (data.length > 0) {
    output = data[0] && (
      <>
        <AllPars onChoose={onChoose} data={data} chosenPar={chosenPar} />{' '}
        <ParDetails par={chosenPar} statusChangeHandler={statusChangeHandler} />
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
