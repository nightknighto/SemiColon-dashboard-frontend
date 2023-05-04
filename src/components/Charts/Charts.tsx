import { useContext, useEffect } from 'react'
import Card from '../UI/Card/Card'
import ChartItem from './ChartItem'
import classes from './Charts.module.css'
import DataContext from '../../context/data-context'

const Charts = () => {
  const { data, fetchData } = useContext(DataContext)

  useEffect(() => {
    fetchData()
  }, [])

  const tracks = [
    'webDev1',
    'webDev2',
    'Embedded Track-Basic',
    'Embedded Track-Advanced',
  ]

  const numbers: number[] = []
  if (tracks) {
    for (const track of tracks) {
      let num = 0
      for (const part of data) {
        if (part.firstPreference === track) {
          num++
        }
      }
      numbers.push(num)
    }
  }

  return (
    <Card className={classes.charts}>
      <ChartItem id="first" type="PIE" numbers={numbers} />
      <ChartItem id="second" type="BAR" numbers={numbers} />
    </Card>
  )
}

export default Charts
