import React from 'react'
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Bnb from '../components/Bnb';
import Footer from '../components/Footer';
function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Cards/>
      <Bnb/>
      <Footer/>
    </div>
  )
}

export default Home