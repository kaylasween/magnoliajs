import Head from 'next/head'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Head>
        <title>Sponsors | MagnoliaJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Sponsors Announced Soon!</h1>
        {/* <h2>Platinum Sponsors</h2>
        <h2>Gold Sponsors</h2>
        <h2>Silver Sponsors</h2>
        <h2>Giveaway Sponsors</h2>
        <h2>Sticker Sponsors</h2> */}
      </main>

      <Footer />
    </div>
  )
}
