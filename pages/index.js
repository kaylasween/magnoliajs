import Head from 'next/head'
import Header from '@components/Header'
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
        <Header title="MagnoliaJS 2021 Information Coming Soon!" />
        <p className="description">
          In the meantime, you can find us on <a href="https://twitter.com/MagnoliaJSConf" target="_blank" rel="noreferrer">Twitter</a>!
        </p>
      </main>

      <Footer />
    </div>
  )
}
