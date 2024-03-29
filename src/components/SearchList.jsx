import { useEffect } from 'react';
import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";


const SearchList = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <Navbar />
            <Footer />
        </div>
    )
}

export default SearchList