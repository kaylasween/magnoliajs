import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Head>
        <title>Code of Conduct | MagnoliaJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Code of Conduct" />
        <p className="description">
          https://confcodeofconduct.com
        </p>
      </main>

      <Footer />
    </div>
  )
}

