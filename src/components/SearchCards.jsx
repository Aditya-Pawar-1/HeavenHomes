import React from 'react'
import Button from './Button'
import SearchCard from './SearchCard'

const SearchCards = ({ images }) => {


  return (
    <div className='max-w-screen-lg mx-auto h-[40vh] text-primary my-5 flex flex-col'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl'>Explore Nashik’s Finest Properties</h1>
        <Button component={"contact"} title="View More" type={"tertiary"} />
      </div>
      <div className='flex flex-col items-center justify-between'>
        <SearchCard images={images} />
      </div>

    </div>
  )
}

export default SearchCards