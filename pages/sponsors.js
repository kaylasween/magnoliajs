import Head from 'next/head'
import Layout from '@components/Layout'
import Sponsor from '@components/Sponsor'

import ThisDotLogo from '../public/logos/Logo-ThisDot.svg'
import KopisLogo from '../public/logos/kopis_red_w_words.svg'
import VirtualCoffeeLogo from '../public/logos/virtual-coffee-full.svg'
import CloudinaryLogo from '../public/logos/cloudinary_logo_blue_0720_svg.svg'
import EchobindLogo from '../public/logos/eb-gradient-black.svg'
import MCALogo from '../public/logos/MCA.svg'
import BeanPathLogo from '../public/logos/BeanPathGreen.svg'

export default function Sponsors() {
  return (
    <Layout>
      <Head>
        <title>Sponsors | MagnoliaJS</title>
      </Head>
      <h1>Sponsors</h1>
      <p className="center-text">Thank you so much to our sponsors for helping make MagnoliaJS 2021 a success!</p>
      <p className="center-text"><small>If your company is interested in sponsoring MagnoliaJS, shoot us an email at <a href="mailto:sponsors@magnoliajs.com">sponsors@magnoliajs.com</a>!</small></p>
      <h2>Platinum Sponsor</h2>
      <div className="sponsors">
        <Sponsor link="https://www.thisdot.co" name="This Dot">
          <ThisDotLogo />
        </Sponsor>
      </div>
      <h2>Gold Sponsor</h2>
      <div className="sponsors">
        <Sponsor link="https://cloudinary.rocks/mpx" name="Cloudinary">
          <CloudinaryLogo />
        </Sponsor>
      </div>
      <h2>Giveaway Sponsors</h2>
      <div className="sponsors">
        <Sponsor link="https://infinite.red" name="Infinite Red">
          <img src="/logos/InfiniteRedLogo.png" alt="Infinite Red's logo." className="conf-sponsor-logo" />
        </Sponsor>
        <Sponsor link="https://www.jetbrains.com" name="JetBrains">
          <img src="/logos/jetbrains.png" alt="JetBrains's logo." className="conf-sponsor-logo" />
        </Sponsor>
      </div>
      <h2>Swag Sponsors</h2>
      <div className="sponsors community-sponsors">
        <Sponsor link="https://infinite.red" name="Infinite Red">
          <img src="/logos/InfiniteRedLogo.png" alt="Infinite Red's logo." className="conf-sponsor-logo" />
        </Sponsor>
        <Sponsor link="https://kopismobile.com" name="Kopis Mobile">
          <KopisLogo />
        </Sponsor>
        <Sponsor link="https://mscoding.org" name="Mississippi Coding Academies">
          <MCALogo />
        </Sponsor>
        <Sponsor link="https://echobind.com" name="Echobind">
          <EchobindLogo />
        </Sponsor>
        <Sponsor link="https://thebeanpath.org" name="The Bean Path">
          <BeanPathLogo />
        </Sponsor>
      </div>
      <h2>Community Sponsors</h2>
      <div className="sponsors community-sponsors">
        <Sponsor link="https://virtualcoffee.io" name="Virtual Coffee">
          <VirtualCoffeeLogo />
        </Sponsor>
      </div>
    </Layout>
  )
}
