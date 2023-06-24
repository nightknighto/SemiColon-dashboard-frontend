import classes from './StackedBtn.module.css'

const StackedBtn = () => {
  return (
    <button className={classes['stacked-btn']}>
      <span className={classes.stack}></span>
      <span className={classes.stack}></span>
      <span className={classes.stack}></span>
    </button>
  )
}

export default StackedBtn
