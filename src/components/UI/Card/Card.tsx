import classes from './Card.module.css'

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const divClass = `${classes.card} ${className ? className : ''}`
  return <div className={divClass}>{children}</div>
}

export default Card
