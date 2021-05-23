import Head from 'next/head'
import Layout from '@components/Layout'

import { speakers } from '../constants/speakers.json'

export default function Speakers() {
  return (
    <Layout>
      <Head>
        <title>Speakers | MagnoliaJS</title>
      </Head>
      <h1>Speakers</h1>
      {speakers.map(speaker => (
        <div className="speaker-area">
          <div className="speaker">
            <img src={`/speakers/${speaker.headshot}`} alt={`${speaker.name}'s headshot.`} />
            <div className="speaker-info">
              <h2>{speaker.twitter ? <a href={`https://twitter.com/${speaker.twitter}`}>{speaker.name}</a> : speaker.name}</h2>
              <small><strong>{speaker.pronouns}</strong></small><br />
              <small>{speaker.title}</small>
              {speaker.bio ? <p>{speaker.bio}</p> : null}
            </div>
          </div>
        </div>
      ))}
    </Layout>
  )
}
