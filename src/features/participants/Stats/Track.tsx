import Card from '../../../common/components/Card/Card'
import classes from './Track.module.css'

const Track = ({
  name,
  numParticipants,
}: {
  name: string
  numParticipants: number
}) => {
  return (
    <Card className={classes.track}>
      <div>
        <h3>{name}</h3>
      </div>
      <Card className={classes.number}>{numParticipants}</Card>
    </Card>
  )
}

export default Track
