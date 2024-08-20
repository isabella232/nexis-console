import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import HeroCards from '@/components/HeroCards'
import Nav from '@/components/Nav'
import React from 'react'

function Home() {
  return (
    <>
    <Nav/>
    <HeroSection/>
    <HeroCards/>
    <Footer/>
    </>
  )
}

export default Home