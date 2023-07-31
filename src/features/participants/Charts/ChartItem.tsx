import {
  CategoryScale,
  ArcElement,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import classes from './ChartItem.module.css'
import { Chart } from 'chart.js'
import { useContext, useEffect, useState } from 'react'
import PieChart from './PieChart'
import { BarChart } from './BarChart'
import { Participant } from '../../../common/types/Participant'
import DataContext from '../../../common/context/data-context'
import { tracks } from '../../../common/types/tracks'
import Card from '../../../common/components/Card/Card'
import DropDown from '../../../common/components/DropDown/DropDown'

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
  barNumbersHandler?: (filteredData: Participant[]) => number[]
  labelMappingHandler?: (data: Participant) => string
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
  const [filteredData, setFilteredData] = useState<Participant[]>([])
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
