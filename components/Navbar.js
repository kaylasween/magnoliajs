import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="/">
        <img src="/magnoliajs.png" alt="Magnolia JS logo" className={styles.logo} />
      </a>
      <ul>
        <li>
          <a href="/conduct">
            Code of Conduct
          </a>
        </li>
        {/* <li>
          <a href="/schedule">
            Schedule
          </a>
        </li>
        <li>
          <a href="/speakers">
            Speakers
          </a>
        </li> */}
        <li>
          <a href="/sponsors">
            Sponsors
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noreferrer">
            Tickets <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </li>
      </ul>
    </nav>
  )
}