import React from 'react'
import SearchBox from './SearchBox'
import Navbar from './Navbar'
import Footer from './Footer'

const Search = () => {
  return (
    <div className='w-full h-fit'>
      <Navbar />
      <SearchBox />
      <Footer />
    </div>
  )
}

export default Search