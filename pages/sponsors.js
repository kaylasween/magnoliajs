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
      <p className="center-text">If your company is interested in sponsoring MagnoliaJS, shoot us an email at <a href="mailto:sponsors@magnoliajs.com">sponsors@magnoliajs.com</a>!</p>
      <h2>Platinum Sponsors</h2>
      <div className="platinum-sponsors">
        <ThisDotLogo />
      </div>
      {/* <h2>Giveaway Sponsors</h2>

      <h2>Swag Sponsors</h2> */}

    </Layout>
  )
}
