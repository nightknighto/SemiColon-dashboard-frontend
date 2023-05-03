import classes from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
}

const Button = ({ children, onClick, disabled, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classes.btn}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
