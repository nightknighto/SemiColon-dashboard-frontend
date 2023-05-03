import Card from '../UI/Card/Card'
import ChartItem from './ChartItem'
import classes from './Charts.module.css'
import { parDataTypes } from '../../interfaces/parDataTypes'

const Charts = ({
  data,
  numbers,
}: {
  data: parDataTypes[]
  numbers: number[]
}) => {
  return (
    <Card className={classes.charts}>
      <ChartItem id="first" type="PIE" data={data} numbers={numbers} />
      <ChartItem id="second" type="BAR" data={data} numbers={numbers} />
    </Card>
  )
}

export default Charts
