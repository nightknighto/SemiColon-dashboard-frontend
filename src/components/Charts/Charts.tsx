import Card from '../UI/Card/Card'
import ChartItem from './ChartItem'
import classes from './Charts.module.css'

const Charts = () => {
  return (
    <Card className={classes.charts}>
      <ChartItem id="first" type="PIE" />
      <ChartItem id="second" type="BAR" />
    </Card>
  )
}

export default Charts
