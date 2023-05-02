import classes from './Card.module.css'

const Card = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) => {
  const divClass = `${classes.card} ${className ? className : ''}`
  return (
    <div id={id} className={divClass}>
      {children}
    </div>
  )
}

export default Card
