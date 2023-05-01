import classes from './Button.module.css'

const Button = ({
  children,
  onClick,
  disabled,
}: {
  children: any
  onClick: any
  disabled: boolean
}) => {
  return (
    <button onClick={onClick} className={classes.btn} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
