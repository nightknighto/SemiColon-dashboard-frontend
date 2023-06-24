import classes from './MobileNav.module.css'
import StackedBtn from '../StackedBtn/StackedBtn'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const MobileNav = () => {
  const mobileDialogRef = useRef(null)
  return (
    <nav className={classes['mobile-nav']}>
      <StackedBtn />
      <dialog ref={mobileDialogRef}>
        <ul>
          <li>
            <Link to="/stats">Stats</Link>
          </li>
          <li>
            <Link to="/participants">Participants</Link>
          </li>
        </ul>
      </dialog>
    </nav>
  )
}

export default MobileNav
