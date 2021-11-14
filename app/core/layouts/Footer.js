import styles from "./styles/Footer.module.css"

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <a href="https://twitter.com/MagnoliaJSConf" target="_blank" rel="noreferrer">
            <img src="/icons/twitter.svg" alt="" />
            <span className="visually-hidden">Twitter</span>
          </a>
        </div>
        <div>&copy; 2021 MagnoliaJS</div>
      </footer>
    </>
  )
}
