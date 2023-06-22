import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import { onLogout } from '../../../helpers/auth'

const Header = () => {
  return (
    <header>
      <nav className={classes['main-nav']}>
        <Link to="/login" className={classes['logout']} onClick={onLogout}>
          Logout
        </Link>
        <ul>
          <li>
            <Link to="/stats">Stats</Link>
          </li>
          <li>
            <Link to="/participants">Participants</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
