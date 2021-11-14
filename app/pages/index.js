import { Head } from "blitz"

import Layout from "../core/layouts/Layout"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | MagnoliaJS</title>
      </Head>

      <h1>See ya in 2022!</h1>
      <div className="about">
        <div>
          <img
            src="/magnoliajs-2019-26.jpg"
            alt="Ken Wheeler giving a talk at MagnoliaJS 2019 while attendees watch."
          />
        </div>
        <div>
          <p>
            We are getting ready for MagnoliaJS 2022! Follow us on{" "}
            <a href="https://twitter.com/MagnoliaJSConf" target="_blank" rel="noreferrer">
              Twitter
            </a>{" "}
            to get the latest updates.
          </p>
        </div>
      </div>
      <div className="cta-row">
        <a
          href="https://www.youtube.com/channel/UCiP-LfJJjBMANN8JXySXCDA/videos"
          className="cta-btn"
        >
          Check out the 2021 talks on YouTube
          {/* <FontAwesomeIcon icon={faExternalLinkAlt} /><span className="visually-hidden">External Link</span> */}
        </a>
      </div>
    </Layout>
  )
}
