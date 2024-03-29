import { React, useEffect } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";

const Support = () => {
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

export default Support