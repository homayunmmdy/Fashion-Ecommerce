import Announcement from '@/components/Announcement'
import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Products from '@/components/Products'
import SingleProduct from '@/components/SingleProduct'
import Slider from '@/components/Slider'
import React from 'react'

const index = () => {
  return (
    <div>
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <SingleProduct />
      <Footer />
    </div>
  )
}

export default index
