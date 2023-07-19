import React from 'react'
import Hero from '../components/Hero'
import UrlShortener from '../components/UrlShortener'
import InfoSection from '../components/InfoSection'

export default function Home() {
  return (
    <div>
        <Hero/>
        <UrlShortener/>
        <InfoSection/>
    </div>
  )
}
