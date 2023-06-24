import classes from './MobileNav.module.css'
import StackedBtn from '../StackedBtn/StackedBtn'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const MobileNav = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const onModalShow = () => {
    dialogRef.current?.showModal()
    setDialogOpen(true)
  }

  const onModalClose = () => {
    dialogRef.current?.close()
    setDialogOpen(false)
  }

  return (
    <nav className={classes['mobile-nav']}>
      <StackedBtn onClick={onModalShow} />
      <dialog ref={dialogRef} className={classes['dia']}>
        <ul className={classes['dia-elements']}>
          <li>
            <Link to="/stats" onClick={onModalClose}>
              Stats
            </Link>
          </li>
          <li>
            <Link to="/participants" onClick={onModalClose}>
              Participants
            </Link>
          </li>
        </ul>
        <div>
          <Link to="/login" onClick={onModalClose}>
            Logout <FontAwesomeIcon icon={faRightFromBracket} color="red" />
          </Link>
        </div>
      </dialog>
    </nav>
  )
}

export default MobileNav
