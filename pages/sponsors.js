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
        <p className="center-text">If your company is interested in sponsoring MagnoliaJS, shoot us an email at <a href="mailto:sponsors@magnoliajs.com">sponsors@magnoliajs.com</a>!</p>
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
