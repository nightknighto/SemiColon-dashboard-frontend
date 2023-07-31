import { useContext, useEffect, useState } from 'react'
import AllPars from './AllPars'
import DataContext from '../../../common/context/data-context'
import classes from './Participants.module.css'
import ParDetails from './ParDetails'
import { Participant, StatusEnum } from '../../../common/types/Participant'
import { authHeader } from '../../../common/helpers/auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Card from '../../../common/components/Card/Card'

const Participants = () => {
  const nav = useNavigate()
  useEffect(() => {
    const r = authHeader()
    if (!r) {
      nav('/login')
    }
  }, [])

  const { data, fetchData } = useContext(DataContext)
  const [chosenPar, setChosenPar] = useState<Participant>()

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    // refresh chosen participant when data changes
    setChosenPar(data.find((par) => par._id === chosenPar?._id))
  }, [data])

  const onChoose = (id: string) => {
    for (const par of data) {
      if (par._id === id) {
        setChosenPar(par)
        return
      }
    }
  }

  const statusChangeHandler = async (_id: string, status: StatusEnum) => {
    if (!chosenPar) return
    try {
      const headers = authHeader()
      if (headers) {
        await axios.patch(
          'https://semicolon-registration-backend.onrender.com/participants/status',
          {
            _id,
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
        {chosenPar && (
          <ParDetails
            par={chosenPar}
            statusChangeHandler={statusChangeHandler.bind(null, chosenPar._id)}
          />
        )}
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
