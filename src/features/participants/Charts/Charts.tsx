import ChartItem from './ChartItem'
import classes from './Charts.module.css'
import { tracks } from '../../../common/types/tracks'
import { Participant } from '../types/Participant'
import Card from '../../../common/components/Card/Card'
import { useAppSelector } from '../../../app/typings'
import { selectAllParticipants } from '../participantSlice'

const Charts = () => {
  const participants = useAppSelector(selectAllParticipants)

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
  let output
  if (participants.length > 0) {
    for (const track of tracks) {
      tracksNumbers.push(
        participants.filter((par) => par.firstPreference === track).length
      )
    }

    output = (
      <>
        <ChartItem
          id="first"
          type="PIE"
          pieNums={tracksNumbers}
          pieLabels={tracks}
          title="Tracks"
        />
        <ChartItem
          id="second"
          type="BAR"
          title="Registration Dates"
          labelMappingHandler={datesMappingHandler}
          barNumbersHandler={datesNumbersHandler}
        />
        <ChartItem
          id="second"
          type="BAR"
          title="Academic Year"
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
