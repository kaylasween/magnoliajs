import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import ActiveLink from './ActiveLink'

import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="/">
        <img src="/magnoliajs.png" alt="Magnolia JS logo" className={styles.logo} />
      </a>
      <ul>
        <li>
          <ActiveLink activeClassName="active" href="/conduct">
            <a>Code of Conduct</a>
          </ActiveLink>
        </li>
        {/* <li>
          <ActiveLink href="/schedule">
            Schedule
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/speakers">
            Speakers
          </ActiveLink>
        </li> */}
        <li>
          <ActiveLink activeClassName="active" href="/sponsors">
            <a>Sponsors</a>
          </ActiveLink>
        </li>
        {/* <li>
          <ActiveLink href="/" target="_blank" rel="noreferrer">
            Tickets <FontAwesomeIcon icon={faExternalLinkAlt} />
          </ActiveLink>
        </li> */}
      </ul>
    </nav>
  )
}