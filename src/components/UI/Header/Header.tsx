import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import { onLogout } from '../../../helpers/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Header = () => {
  const [dropBarShow, setDropBarShow] = useState<boolean>(false)

  const onBarToggle = () => {
    setDropBarShow(!dropBarShow)
  }

  return (
    <header>
      <nav className={classes['main-nav']} onClick={onBarToggle}>
        <div className={classes['user-d']}>
          <FontAwesomeIcon
            icon={faUserCircle}
            className={classes['usrCircle']}
          />
          <FontAwesomeIcon icon={faCaretDown} rotation={270} />
        </div>
        {dropBarShow && (
          <ul className={classes['logout-dropdown']}>
            <li>
              <Link to="/login" onClick={onLogout}>
                Logout
              </Link>
            </li>
          </ul>
        )}
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
