import { useContext, useEffect } from 'react'
import Card from '../UI/Card/Card'
import ChartItem from './ChartItem'
import classes from './Charts.module.css'
import DataContext from '../../context/data-context'
import { tracks } from '../../types/tracks'
import { Participant } from '../../types/Participant'

const Charts = () => {
  const { data, fetchData } = useContext(DataContext)

  useEffect(() => {
    fetchData()
  }, [])

  const datesMappingHandler = (val: Participant) => val.createdAt.split('T')[0]
  const yearMappingHandler = (val: Participant) => val.year

  const datesNumbersHandler = (filteredData: Participant[]) => {
    const dateNums: { createdAt: string; num: number }[] = []
    for (const par of filteredData) {
      const createdAt = dateNums.map((val) => val.createdAt)
      const parCreatedAt = par.createdAt.split('T')[0]
      if (createdAt.indexOf(parCreatedAt) !== -1) {
        dateNums[createdAt.indexOf(parCreatedAt)].num += 1
      } else {
        dateNums.push({ createdAt: parCreatedAt, num: 1 })
      }
    }
    return dateNums.map((val) => val.num)
  }

  const yearNumbersHandler = (filteredData: Participant[]) => {
    const parYears: { year: string; num: number }[] = []
    for (const par of filteredData) {
      const years = parYears.map((val) => val.year)
      const parYear = par.year.trim()
      if (years.indexOf(parYear) !== -1) {
        parYears[years.indexOf(parYear)].num += 1
      } else {
        parYears.push({ year: parYear, num: 1 })
      }
    }
    return parYears.map((val) => val.num)
  }

  const tracksNumbers: number[] = []
  const secondPrefNumbers: number[] = []
  let output
  if (data.length > 0) {
    for (const track of tracks) {
      // let num = 0
      // for (const part of data) {
      //   if (part.firstPreference === track) {
      //     num++
      //   }
      // }
      tracksNumbers.push(
        data.filter((par) => par.firstPreference === track).length
      )
      secondPrefNumbers.push(
        data.filter((par) => par.secondPreference === track).length
      )
    }

    output = (
      <>
        <ChartItem
          id="first"
          type="PIE"
          pieNums={tracksNumbers}
          pieLabels={tracks}
          pieTitle="First Preference"
        />
        <ChartItem
          id="second"
          type="BAR"
          labelMappingHandler={datesMappingHandler}
          barNumbersHandler={datesNumbersHandler}
        />
        <ChartItem
          id="first"
          type="PIE"
          pieNums={secondPrefNumbers}
          pieLabels={tracks}
          pieTitle="Second Preference"
        />
        <ChartItem
          id="second"
          type="BAR"
          labelMappingHandler={yearMappingHandler}
          barNumbersHandler={yearNumbersHandler}
        />
      </>
    )
  } else {
    output = <h2>No data found.</h2>
  }

  return <Card className={classes.charts}>{output}</Card>
}

export default Charts
