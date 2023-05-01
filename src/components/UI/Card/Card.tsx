import classes from './Card.module.css'

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className={classes.card}>{children}</div>
}

export default Card
