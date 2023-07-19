import classes from './ParItem.module.css'

const ParItem = ({
  name,
  onChoose,
  chosen,
}: {
  name: string
  onChoose: () => void
  chosen: boolean
}) => {
  return (
    <div
      className={`${classes.item} ${chosen ? classes.chosen : ''}`}
      onClick={onChoose}
    >
      <h3>{name}</h3>
    </div>
  )
}

export default ParItem
