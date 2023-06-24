import DesktopNav from './DesktopNav'
import classes from './Header.module.css'
import MobileNav from './MobileNav'

const Header = () => {

  return (
    <header className={classes.header}>
      <DesktopNav />
      <MobileNav />
    </header>
  )
}

export default Header
