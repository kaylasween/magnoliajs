import { Head } from 'blitz'

import Footer from './Footer'
import Navbar from './Navbar'

export default function Home(props) {
  return (
    <div className="container">
      <Navbar />
      <Head>
        <title>MagnoliaJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{props.children}</main>

      <Footer />
    </div>
  )
}
