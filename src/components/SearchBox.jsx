import React from 'react'
import { Link } from 'react-router-dom';
import { BsSearch, BsMicFill } from "react-icons/bs";
import Button from './Button';

const SearchBox = () => {
    var category = [
        "Buy", "Rent", "PG", "Commercial", "Plot/Land"
    ];

    return (
        <div className='max-w-screen-lg mx-auto h-[15vh] my-10 border-2 border-primary rounded-2xl overflow-hidden flex flex-col'>
            <div className='basis-1/2 bg-primary text-secondary h-full w-full flex items-center justify-around font-medium text-lg'>
                {category.map((category, index) => (
                    <Link key={index} to={{ category }}>{category}</Link>
                ))}
            </div>
            <div className='basis-1/2 text-primary text-lg flex items-center justify-around mx-[2%]'>
                <div className='flex items-center justify-start gap-2 basis-[48%]'>
                    <BsSearch size={"1.5rem"} />
                    <input type="text" name="search" id="search" placeholder='Search' className='mt-1 block w-full px-3 py-2 bg-secondary border-0 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none invalid:text-pink-600 focus:invalid:ring-pink-500' />
                </div>
                <div className='flex items-center justify-end gap-2 basis-[48%]'>
                    <BsMicFill />
                    <Button component={"contact"} title="search" type={"tertiary"} />
                </div>
            </div>
        </div>
    )
}

export default SearchBox