import Head from 'next/head'
import Layout from '@components/Layout'

import ThisDotLogo from '../public/Logo-ThisDot.svg'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sponsors | MagnoliaJS</title>
      </Head>
      <h1>Sponsors</h1>
      <p className="center-text">Thank you so much to our sponsors for helping make MagnoliaJS 2021 a success!</p>
      <p className="center-text"><small>If your company is interested in sponsoring MagnoliaJS, shoot us an email at <a href="mailto:sponsors@magnoliajs.com">sponsors@magnoliajs.com</a>!</small></p>
      <h2>Platinum Sponsor</h2>
      <div className="sponsors">
        <a href="https://www.thisdot.co" target="_blank" rel="noreferrer"><ThisDotLogo /> <span className="visually-hidden">This Dot</span></a>
      </div>
      {/* <h2>Giveaway Sponsors</h2>

      <h2>Swag Sponsors</h2> */}

    </Layout>
  )
}
