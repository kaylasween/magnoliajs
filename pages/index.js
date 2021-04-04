import Head from 'next/head'
import Layout from '@components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | MagnoliaJS</title>
      </Head>
      <h1>MagnoliaJS 2021</h1>
      <p className="center-text">MagnoliaJS 2021 is going virtual! Join us May 25-26 for great speakers, giveaways, and even SWAG!</p>
    </Layout>
  )
}
