import { CategoryScale, ArcElement, BarElement, LinearScale } from 'chart.js'
import Card from '../UI/Card/Card'
import classes from './ChartItem.module.css'
import { Chart } from 'chart.js'
import { useState } from 'react'
import PieChart from './PieChart'
import DropDown from '../UI/DropDown/DropDown'
import { BarChart } from './BarChart'

Chart.register(CategoryScale)
Chart.register(ArcElement)
Chart.register(BarElement)
Chart.register(LinearScale)

const ChartItem = ({ id, type }: { id: string; type: "PIE" | "BAR" }) => {
  const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
      track: 'Web Track-Basic',
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
      track: 'Web Track-Advanced',
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
      track: 'Web Track-Advanced',
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
      track: 'Embedded Track-Basic',
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      track: 'Embedded Track-Advanced',
    },
  ]

  const [chartData, setChartData] = useState(Data)

  const onChoiceChangeHandler = (chosenTrack: string) => {
    if (chosenTrack === 'All') {
      setChartData(Data)
      return
    }
    setChartData(Data.filter((user) => user.track === chosenTrack))
  }

  return (
    <Card className={classes['chart-item']}>
      {type === 'PIE' && <PieChart id={id} chartData={chartData} />}
      {type === 'BAR' && (
        <>
          <BarChart id={id} chartData={chartData} />
          <DropDown
            onChange={onChoiceChangeHandler}
            choices={[
              'All',
              'Web Track-Basic',
              'Web Track-Advanced',
              'Embedded Track-Basic',
              'Embedded Track-Advanced',
            ]}
          />
        </>
      )}
    </Card>
  )
}

export default ChartItem
