import Announcement from '@/components/Announcement'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Slider from '@/components/Slider'
import React from 'react'

const index = () => {
  return (
    <div>
      <Announcement />
      <Slider />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default index
