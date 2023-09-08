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
import { useEffect, useState } from 'react'
import PieChart from './PieChart'
import { BarChart } from './BarChart'
import { Participant } from '../types/Participant'
import { tracks } from '../../../common/types/tracks'
import Card from '../../../common/components/Card/Card'
import DropDown from '../../../common/components/DropDown/DropDown'
import { useAppSelector } from '../../../app/typings'
import { selectAllParticipants } from '../participantSlice'

Chart.register([
  CategoryScale,
  ArcElement,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
])

interface ChartItemProps {
  id: string
  type: 'PIE' | 'BAR'
  pieNums?: number[]
  pieLabels?: string[]
  title: string
  barNumbersHandler?: (filteredData: Participant[]) => number[]
  labelMappingHandler?: (data: Participant) => string
}

const ChartItem = ({
  id,
  type,
  pieNums = [],
  pieLabels = [],
  title,
  barNumbersHandler,
  labelMappingHandler,
}: ChartItemProps) => {
  const data = useAppSelector(selectAllParticipants)
  const [filteredData, setFilteredData] = useState<Participant[]>([])
  const [barNumbers, setBarNumbers] = useState<number[]>([])
  const [barSubtitle, setBarSubtitle] = useState<string>('All')

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  useEffect(() => {
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
    setBarSubtitle(chosenTrack)
  }

  return (
    <Card className={classes['chart-item']}>
      {type === 'PIE' && (
        <PieChart id={id} nums={pieNums} labels={pieLabels} title={title} />
      )}
      {type === 'BAR' && labelMappingHandler && (
        <>
          <BarChart
            id={id}
            chartData={filteredData}
            nums={barNumbers}
            title={title}
            subtitle={barSubtitle}
            labelMappingHandler={labelMappingHandler}
          />
          <DropDown onChange={onChoiceChangeHandler} choices={tracks} />
        </>
      )}
    </Card>
  )
}

export default ChartItem
