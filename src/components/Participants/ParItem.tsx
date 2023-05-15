import classes from './ParItem.module.css'

const ParItem = ({
  name,
  onChoose,
}: {
  name: string
  onChoose: () => void
}) => {
  return (
    <div className={classes.item} onClick={onChoose}>
      <h3>{name}</h3>
    </div>
  )
}

//hello

export default ParItem
