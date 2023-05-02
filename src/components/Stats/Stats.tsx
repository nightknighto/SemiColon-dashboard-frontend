import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import DropDown from '../UI/DropDown/DropDown'
import classes from './Stats.module.css'

const Stats = (props: { tracks?: Array<string> }) => {
  const onChangeStatsHandler = (value: string) => {
    fetch(`/api/${value}`).then((data) => console.log(data))
  }
  return (
    <Card>
      <Card>
        <h1>Hi</h1>
      </Card>
      {props.tracks && (
        <DropDown onChange={onChangeStatsHandler} choices={props.tracks} />
      )}
      <Button>Submit</Button>
    </Card>
  )
}

export default Stats
