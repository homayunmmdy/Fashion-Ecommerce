import React from 'react'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Subscription from './components/Subscription'
import Categories from './components/Categories'

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Categories />
      <Subscription />
    </div>
  )
}

export default Home