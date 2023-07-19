import classes from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
  className?: string
}

const Button = ({
  children,
  onClick,
  disabled,
  type,
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.btn} ${className}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
