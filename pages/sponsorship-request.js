import Head from 'next/head'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Head>
        <title>Sponsorship Information Request | MagnoliaJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Sponsorship Information Request</h1>
        <p className="description">If you'd like information on how to sponsor MagnoliaJS, please fill out this form and we'll contact you ASAP!</p>
        <form>
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label for="companyName">Company Name</label>
            <input type="text" id="companyName" />
          </div>
          <div>
            <label for="email">Email Address</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label for="message">Message</label>
            <textarea id="message"></textarea>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  )
}
