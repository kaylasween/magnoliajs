import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <a href="https://twitter.com/MagnoliaJSConf"><FontAwesomeIcon icon={faTwitter} /><span className="visually-hidden">Twitter</span></a>
        </div>
        <div>
          &copy; 2021 MagnoliaJS
        </div>
      </footer>
    </>
  )
}
