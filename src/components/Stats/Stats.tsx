import Card from '../UI/Card/Card'
import classes from './Stats.module.css'

const Stats = (props: { specs?: Array<string> }) => {
  return (
    <Card>
      <h1>Hello</h1>
      {props.specs && <h2>Hi</h2>}
    </Card>
  )
}

export default Stats
