import Head from 'next/head'
import Layout from '@components/Layout'

export default function Speakers() {
  return (
    <Layout>
      <Head>
        <title>Schedule | MagnoliaJS</title>
      </Head>
      <h1>Schedule</h1>
      <h2>Tuesday, May 25, 2021</h2>
      <table>
        <thead>
          <tr>
            <th>Start Time <br /><small>(Central Daylight Time UTC-05:00)</small></th>
            <th>Title</th>
            <th>Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9:00AM</td>
            <td>Welcome</td>
            <td>Kenneth LaFrance (Emcee)</td>
          </tr>
          <tr>
            <td>9:15AM</td>
            <td>Mississippi Coding Academies Panel</td>
            <td>Herbert Brown and Bryce Mullican</td>
          </tr>
          <tr>
            <td>9:40AM</td>
            <td>BREAK</td>
            <td></td>
          </tr>
          <tr>
            <td>9:45AM</td>
            <td>Speaking in Code: Hands-Free Input with Talon</td>
            <td>Blake Watson</td>
          </tr>
          <tr>
            <td>10:10AM</td>
            <td>BREAK</td>
            <td></td>
          </tr>
          <tr>
            <td>10:30AM</td>
            <td>Web2 to Web3</td>
            <td>Nader Dabit</td>
          </tr>
          <tr>
            <td>11:00AM</td>
            <td>LUNCH</td>
            <td>Virtual Coffee</td>
          </tr>
          <tr>
            <td>12:35PM</td>
            <td>Welcome Back</td>
            <td>Kenneth LaFrance (Emcee)</td>
          </tr>
          <tr>
            <td>1:00PM</td>
            <td>GraphQL in the Enterprise</td>
            <td>Dustin Goodman and Tracy Lee</td>
          </tr>
          <tr>
            <td>1:25PM</td>
            <td>BREAK</td>
            <td></td>
          </tr>
          <tr>
            <td>1:30PM</td>
            <td>Cows and the Art of Software Engineering</td>
            <td>Sara McCombs</td>
          </tr>
          <tr>
            <td>1:55PM</td>
            <td>BREAK</td>
            <td></td>
          </tr>
          <tr>
            <td>2:00PM</td>
            <td>Women of React Panel</td>
            <td>Tracy Lee (Moderator), Debbie O'Brien, Rachel Nabors, Jen Luker, Kayla Sween</td>
          </tr>
          <tr>
            <td>2:30PM</td>
            <td>BREAK</td>
            <td></td>
          </tr>
          <tr>
            <td>2:50PM</td>
            <td>Building the Dream UI Component Library</td>
            <td>Ava Gaiety Wroten</td>
          </tr>
          <tr>
            <td>3:15PM</td>
            <td>BREAK</td>
            <td></td>
          </tr>
          <tr>
            <td>3:20PM</td>
            <td>The Joy of Dev Life: A Bob Ross Guide</td>
            <td>Bekah Hawrot Weigel</td>
          </tr>
          <tr>
            <td>3:45PM</td>
            <td>Wrap Day 1 (Giveaways, afterparty announcement)</td>
            <td>Kenneth LaFrance (Emcee)</td>
          </tr>
        </tbody>
      </table>

      <h2>Wednesday, May 26, 2021</h2>
      <table>
        <thead>
          <tr>
            <th>Start Time <br /><small>(Central Daylight Time UTC-05:00)</small></th>
            <th>Title</th>
            <th>Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9:00AM</td>
            <td>Welcome Day 2</td>
            <td>Kenneth LaFrance (Emcee)</td>
          </tr>
          <tr>
            <td>9:15AM</td>
            <td>Making Something Cool</td>
            <td>Gant Laborde</td>
          </tr>
          <tr>
            <td>9:40AM</td>
            <td>BREAK</td>
            <td></td>
          </tr>
          <tr>
            <td>9:45AM</td>
            <td>Making Communication Accessible for All</td>
            <td>Dijah McDonald</td>
          </tr>
          <tr>
            <td>10:10AM</td>
            <td>BREAK</td>
            <td></td>
          </tr>
          <tr>
            <td>10:30AM</td>
            <td>React Ecosystem Panel</td>
            <td>Tracy Lee (Moderator), Kent C. Dodds, Shawn "Swyx" Wang, Dacey Nolan, Hunter Miller</td>
          </tr>
          <tr>
            <td>11:00AM</td>
            <td>LUNCH</td>
            <td>Virtual Coffee</td>
          </tr>
          <tr>
            <td>12:35PM</td>
            <td>Welcome Back</td>
            <td>Kenneth LaFrance (Emcee)</td>
          </tr>
          <tr>
            <td>1:00PM</td>
            <td>Join the Indie Web with Eleventy and Webmentions</td>
            <td>Sia Karamalegos</td>
          </tr>
          <tr>
            <td>1:25PM</td>
            <td>BREAK</td>
            <td></td>
          </tr>
          <tr>
            <td>1:30PM</td>
            <td>AWS for Frontend Developers</td>
            <td>Michael Liendo</td>
          </tr>
          <tr>
            <td>1:55PM</td>
            <td>BREAK</td>
            <td></td>
          </tr>
          <tr>
            <td>2:00PM</td>
            <td>Continuing Technical Education</td>
            <td>Kassian Wren</td>
          </tr>
          <tr>
            <td>2:25PM</td>
            <td>BREAK</td>
            <td></td>
          </tr>
          <tr>
            <td>2:45PM</td>
            <td>Talk to Your Users</td>
            <td>Richard Sween</td>
          </tr>
          <tr>
            <td>3:10PM</td>
            <td>BREAK</td>
            <td></td>
          </tr>
          <tr>
            <td>3:15PM</td>
            <td>Doing as Little Work as Possible</td>
            <td>Ken Wheeler</td>
          </tr>
          <tr>
            <td>3:40PM</td>
            <td>Wrap Day 2 (Giveaways)</td>
            <td>Kenneth LaFrance (Emcee)</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}
