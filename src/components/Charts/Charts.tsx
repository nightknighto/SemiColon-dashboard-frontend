import { useContext, useEffect } from 'react'
import Card from '../UI/Card/Card'
import ChartItem from './ChartItem'
import classes from './Charts.module.css'
import DataContext from '../../context/data-context'
import { tracks } from '../../interfaces/tracks'

const Charts = () => {
  const { data, fetchData } = useContext(DataContext)

  useEffect(() => {
    fetchData()
  }, [])

  const numbers: number[] = []
  let output
  if (data) {
    for (const track of tracks) {
      let num = 0
      for (const part of data) {
        if (part.firstPreference === track) {
          num++
        }
      }
      numbers.push(num)
    }
    output = (
      <>
        <ChartItem id="first" type="PIE" numbers={numbers} />
        <ChartItem id="second" type="BAR" numbers={numbers} />
      </>
    )
  } else {
    output = <h2>No data found.</h2>
  }

  return <Card className={classes.charts}>{output}</Card>
}

export default Charts
