import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Layout from '@components/Layout'

import ThisDotLogo from '../public/logos/Logo-ThisDot.svg'
import CloudinaryLogo from '../public/logos/cloudinary_logo_blue_0720_svg.svg'
import Sponsor from '@components/Sponsor'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | MagnoliaJS</title>
      </Head>
      <h1>MagnoliaJS 2021</h1>
      <div className="about">
        <div>
          <img src="/magnoliajs-2019-26.jpg" alt="Ken Wheeler giving a talk at MagnoliaJS 2019 while attendees watch." />
        </div>
        <div>
          <p>Join us May 25-26 for MagnoliaJS 2021! This is our last year fully virtual, so we’re going out with a bang!</p>
          <p>Great speakers, giveaways, and even SWAG BAGS! <a href="https://ti.to/magnoliajs/2021" target="_blank" rel="noreferrer">Register for MagnoliaJS</a> today to get a swag bag with stickers and other cool stuff from our sponsors. You may even get a mystery item!</p>
          <p>Check out our <a href="https://twitter.com/MagnoliaJSConf" target="_blank" rel="noreferrer">Twitter</a> to get the latest updates!</p>
        </div>
      </div>
      <div className="cta-row">
        <a href="https://ti.to/magnoliajs/2021" className="cta-btn">Register for MagnoliaJS <FontAwesomeIcon icon={faExternalLinkAlt} /><span className="visually-hidden">External Link</span></a>
      </div>
      <h2>Giveaways</h2>
      <div className="sponsors">
        <div className="giveaway">
          <img src="/hypnocube.png" alt="a Hypnocube." />
          Courtesy of
          <Sponsor link="https://infinite.red" name="Infinite Red">
            <img src="/logos/InfiniteRedLogo.png" alt="Infinite Red's logo." className="sponsor-logo" />
          </Sponsor>
        </div>
      </div>
      <h2>Sponsors</h2>
      <h3>Platinum Sponsor</h3>
      <div className="sponsors">
        <Sponsor link="https://www.thisdot.co" name="This Dot">
          <ThisDotLogo />
        </Sponsor>
      </div>
      <h3>Gold Sponsor</h3>
      <div className="sponsors">
        <Sponsor link="https://cloudinary.rocks/mpx" name="Cloudinary">
          <CloudinaryLogo />
        </Sponsor>
      </div>
    </Layout>
  )
}
