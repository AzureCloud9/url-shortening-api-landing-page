import React from 'react'
import Hero from '../components/Hero'
import UrlShortener from '../components/UrlShortener'
import InfoSection from '../components/InfoSection'
import FooterHero from '../components/FooterHero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Hero/>
        <UrlShortener/>
        <InfoSection/>
        <FooterHero/>
        <Footer/>
    </div>
  )
}
