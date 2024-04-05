import React from 'react'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Subscription from './components/Subscription'
import Categories from './components/Categories'
import Features from './components/Features'

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Features />
      <Categories />
      <Subscription />
    </div>
  )
}

export default Home