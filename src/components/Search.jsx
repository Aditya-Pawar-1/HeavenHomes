import React, { useState } from 'react'
import SearchBox from './SearchBox'
import Navbar from './Navbar'
import Footer from './Footer'
import SearchCards from './SearchCards'

const Search = () => {
  const [images, setImages] = useState([
    "/assets/images/Img1.png",
    "/assets/images/Img1.png",
    "/assets/images/Img1.png",
  ])

  return (
    <div className='w-full h-fit'>
      <Navbar />
      <SearchBox />
      <SearchCards images={images} />
      <Footer />
    </div>
  )
}

export default Search