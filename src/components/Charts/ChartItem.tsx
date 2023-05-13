import { CategoryScale, ArcElement, BarElement, LinearScale } from 'chart.js'
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

Chart.register(CategoryScale)
Chart.register(ArcElement)
Chart.register(BarElement)
Chart.register(LinearScale)

interface ChartItemProps {
  id: string
  type: 'PIE' | 'BAR'
  numbers: number[]
}

const ChartItem = ({ id, type, numbers }: ChartItemProps) => {
  const { data } = useContext(DataContext)
  const [filteredData, setFilteredData] = useState<parDataTypes[]>([])

  useEffect(() => {
    setFilteredData(data)
  }, [data])
  useEffect(() => {
    setFilteredData(data)
  }, [data])

  const onChoiceChangeHandler = (chosenTrack: string) => {
    if (chosenTrack === 'All') {
      setFilteredData(data)
      setFilteredData(data)
      return
    }
    setFilteredData(data.filter((user) => user.firstPreference === chosenTrack))
  }

  return (
    <Card className={classes['chart-item']}>
      {type === 'PIE' && <PieChart id={id} nums={numbers} />}
      {type === 'BAR' && (
        <>
          {filteredData[0] && (
            <BarChart id={id} chartData={filteredData} nums={numbers} />
          )}
          <BarChart id={id} chartData={filteredData} nums={numbers} />
          <DropDown
            onChange={onChoiceChangeHandler}
            choices={tracks}
          />
        </>
      )}
    </Card>
  )
}

export default ChartItem
