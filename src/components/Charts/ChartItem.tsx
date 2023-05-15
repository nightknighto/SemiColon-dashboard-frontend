import {
  CategoryScale,
  ArcElement,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import Card from '../UI/Card/Card'
import classes from './ChartItem.module.css'
import { Chart } from 'chart.js'
import { useContext, useEffect, useState } from 'react'
import PieChart from './PieChart'
import DropDown from '../UI/DropDown/DropDown'
import { BarChart } from './BarChart'
import { parDataTypes } from '../../interfaces/parDataTypes'
import DataContext from '../../context/data-context'
import { tracks } from '../../interfaces/tracks'

Chart.register([
  CategoryScale,
  ArcElement,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
])
// Chart.register(ArcElement)
// Chart.register(BarElement)
// Chart.register(LinearScale)

interface ChartItemProps {
  id: string
  type: 'PIE' | 'BAR'
  pieNums?: number[]
  pieLabels?: string[]
  pieTitle?: string
  barNumbersHandler?: (filteredData: parDataTypes[]) => number[]
  labelMappingHandler?: (data: parDataTypes) => string
}

const ChartItem = ({
  id,
  type,
  pieNums = [],
  pieLabels = [],
  pieTitle,
  barNumbersHandler,
  labelMappingHandler,
}: ChartItemProps) => {
  const { data } = useContext(DataContext)
  const [filteredData, setFilteredData] = useState<parDataTypes[]>([])
  const [barNumbers, setBarNumbers] = useState<number[]>([])
  const [barTitle, setBarTitle] = useState<string>('All')

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  useEffect(() => {
    // const dateNums: { createdAt: string; num: number }[] = []
    // for (const par of filteredData) {
    //   const createdAt = dateNums.map((val) => val.createdAt)
    //   const parCreatedAt = par.createdAt.split('T')[0]
    //   if (createdAt.indexOf(parCreatedAt) !== -1) {
    //     dateNums[createdAt.indexOf(parCreatedAt)].num += 1
    //   } else {
    //     dateNums.push({ createdAt: parCreatedAt, num: 1 })
    //   }
    // }
    if (barNumbersHandler) {
      const nums = barNumbersHandler(filteredData)
      setBarNumbers(nums)
    }
  }, [filteredData])

  const onChoiceChangeHandler = (chosenTrack: string) => {
    if (chosenTrack === 'All') {
      setFilteredData(data)
      return
    }
    setFilteredData(data.filter((user) => user.firstPreference === chosenTrack))
    setBarTitle(chosenTrack)
  }

  let bar = <></>
  if (type === 'BAR' && labelMappingHandler) {
    bar = filteredData[0] && (
      <BarChart
        id={id}
        chartData={filteredData}
        nums={barNumbers}
        title={barTitle}
        labelMappingHandler={labelMappingHandler}
      />
    )
  }

  return (
    <Card className={classes['chart-item']}>
      {type === 'PIE' && (
        <PieChart id={id} nums={pieNums} labels={pieLabels} title={pieTitle} />
      )}
      {type === 'BAR' && (
        <>
          {bar}
          <DropDown onChange={onChoiceChangeHandler} choices={tracks} />
        </>
      )}
    </Card>
  )
}

export default ChartItem
