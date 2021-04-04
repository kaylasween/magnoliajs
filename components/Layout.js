import Head from 'next/head'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

export default function Home(props) {
  return (
    <div className="container">
      <Navbar />
      <Head>
        <title>MagnoliaJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {props.children}
      </main>

      <Footer />
    </div>
  )
}
