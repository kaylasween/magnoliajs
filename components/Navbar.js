import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="/" style={{ flex: 1 }}>
        <img src="/pinkBackgroundLong.png" alt="Magnolia JS logo" className={styles.logo} />
      </a>
      <ul>
        <li>
          <a href="/">
            Schedule
          </a>
        </li>
        <li>
          <a href="/">
            Speakers
          </a>
        </li>
        <li>
          <a href="/">
            Sponsors
          </a>
        </li>
      </ul>
    </nav>
  )
} 