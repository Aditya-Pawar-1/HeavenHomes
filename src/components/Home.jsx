import { React, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
