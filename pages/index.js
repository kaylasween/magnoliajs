import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import Layout from '@components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | MagnoliaJS</title>
      </Head>
      <h1>MagnoliaJS 2021</h1>
      <div className="about">
        <img src="/magnoliajs-2019-26.jpg" alt="Ken Wheeler giving a talk at MagnoliaJS 2019 while attendees watch." />
        <div>
          <p>Join us May 25-26 for MagnoliaJS 2021! This is our last year fully virtual, so we’re going out with a bang!</p>
          <p>Great speakers, giveaways, and even SWAG BAGS! <a href="https://ti.to/magnoliajs/2021" target="_blank" rel="noreferrer">Register for MagnoliaJS</a> today to get a swag bag with stickers and other cool stuff from our sponsors. You may even get a mystery item!</p>
          <p>Check out our <a href="https://twitter.com/MagnoliaJSConf" target="_blank" rel="noreferrer">Twitter</a> to get the latest updates!</p>
        </div>
      </div>
      <div className="cta-row">
        <a href="https://ti.to/magnoliajs/2021" className="cta-btn">Register for MagnoliaJS <FontAwesomeIcon icon={faExternalLinkAlt} /><span className="visually-hidden">External Link</span></a>
      </div>
    </Layout>
  )
}
