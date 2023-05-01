import classes from './Button.module.css'

const Button = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  disabled?: boolean
}) => {
  return (
    <button onClick={onClick} className={classes.btn} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
