import Head from 'next/head'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Head>
        <title>MagnoliaJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>MagnoliaJS 2021</h1>
        <p className="center-text">MagnoliaJS 2021 is going virtual! Join us May 25-26 for great speakers, giveaways, and even SWAG!</p>
      </main>

      <Footer />
    </div>
  )
}
