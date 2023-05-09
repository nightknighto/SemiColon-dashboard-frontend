import { Link } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header>
      <nav className={classes['main-nav']}>
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
