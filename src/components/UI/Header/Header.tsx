import classes from './Header.module.css'

const Header = () => {
  return (
    <header>
      <nav className={classes['main-nav']}>
        <ul>
          <li>
            <a href="/stats">Stats</a>
          </li>
          <li>
            <a href="/participants">Participants</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
