import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import ActiveLink from './ActiveLink'

import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <img src="/magnoliajs.png" alt="Magnolia JS logo" className={styles.logo} />
        </a>
      </Link>
      <ul>
        <ActiveLink activeClassName="active" href="/conduct">
          <a>Code of Conduct</a>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/covid">
          <a>COVID Information</a>
        </ActiveLink>
      </ul>
    </nav>
  )
}