import React, { useState } from 'react'
import SearchBox from './SearchBox'
import Navbar from './Navbar'
import Footer from './Footer'
import SearchCards from './SearchCards'
import i from '../assets/images/Img1.png';

const Search = () => {
  const [images, setImages] = useState([
    "/HeavenHomes/src/assets/images/Img1.png",
    "/HeavenHomes/src/assets/images/Img1.png",
    "/HeavenHomes/src/assets/images/Img1.png",
  ])

  console.log({i})
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