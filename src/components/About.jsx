import React, { useContext, useEffect } from "react";
import { AboutDataContext } from "../utils/context/AboutContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Info from "./Info";
import BackgroundImg from "../assets/images/BackgroundImg.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [item] = useContext(AboutDataContext);
  return (
    <div>
      <Navbar />
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-10">
        <img src={BackgroundImg} alt="" />
        <h2 className="w-fit px-5 rounded-md uppercase text-[5vw] text-secondary bg-primary">
          about HeavenHomes
        </h2>
        <p className="w-[70%]">
          Welcome to Heaven Homes, your trusted partner in real estate.
          Established with a vision to transform dreams into reality, we are
          committed to providing exceptional services to our valued clients.
          Whether you’re buying, selling, or renting, we’re here to guide you
          every step of the way.
        </p>

        {item.map((i, index) => (
          <Info key={index} index={index} />
        ))}

      </div>
      <Footer />
    </div>
  );
};

export default About;
