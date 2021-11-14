import { Head } from 'blitz'

import Layout from '../core/layouts/Layout'

export default function COVID() {
  return (
    <Layout>
      <Head>
        <title>COVID Policy | MagnoliaJS</title>
      </Head>

      <h1>COVID Policy</h1>
      <div className="description">
        <p>
          The safety of our attendees, volunteers, speakers, staff, and sponsors are of the utmost
          priority. We will be continuously updating this policy, so keep an eye on this page and{" "}
          <a href="https://twitter.com/magnoliajsconf">our Twitter account</a> for updates.
        </p>
        {/* <h2>Vaccinations</h2>
        <p>All staff, speakers, attendees, and sponsors will be required to show proof of vaccination or provide a negative PCR test from at least 72 hours before the event. If this offends your sensibilities, we invite you to stream the conference from the comfort of your own home.</p>
        <h2>Masks</h2>
        <p>We know masks suck but bear with us.</p>
        <p>Masks will be required throughout the event when not actively eating or drinking. Watching a talk and need to grab a sip of water? Take the mask off, take your sip, and replace the mask.</p>
        <p>Each person will be given two disposable masks at pick-up, one for each day of the conference.</p>
        <h2>Refunds</h2>
        <p>We understand things happen. If you need a refund, we'll provide that to you no questions asked until two weeks prior to the event. After that point, we'll move your ticket to MagnoliaJS 2023.</p>
        <p><strong>Failure to comply with any of these policies will result in removal from the event without refund.</strong></p>

        <h2>(Presumed) Frequently Asked Questions</h2>
        <h3>I don't feel comfortable attending in-person events yet. Can I still participate?</h3>
        <p>Yes! The current plan is to also stream MagnoliaJS live this year. We're working out the logistics of this and will provide more information as it becomes available.</p>
        <h3>What if I am sick?</h3>
        <p>If you get sick (COVID or not), please don't come to the event. Email us, let us know what's going on, and we can work together to determine whether a refund or assign your ticket to next year.</p> */}
      </div>
    </Layout>
  )
}
