import { Link } from "blitz"
import Image from "next/image"

import ActiveLink from "../components/ActiveLink"
import styles from "./styles/Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <Image src="/magnoliajs.png" alt="Magnolia JS logo" className={styles.logo} />
        </a>
      </Link>
      <ul>
        <ActiveLink activeClassName="active" href="/conduct">
          <a>Code of Conduct</a>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/covid">
          <a>COVID Policy</a>
        </ActiveLink>
      </ul>
    </nav>
  )
}
