import classes from './StackedBtn.module.css'

const StackedBtn = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button className={classes['stacked-btn']} onClick={onClick}>
      <span className={classes.stack}></span>
      <span className={classes.stack}></span>
      <span className={classes.stack}></span>
    </button>
  )
}

export default StackedBtn
