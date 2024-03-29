import React from "react"

const SearchCard = ({ images }) => {

    return (
        <div className='w-full flex items-center justify-between overflow-hidden'>
            {images.map((img, index) => (
                <img key={index} src={img} className='border-2 mt-5 w-[20vw]' />
            ))}
        </div>
    )
}

export default SearchCard