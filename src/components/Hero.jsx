import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/images/HeroImg.jpg";


const Hero = () => {
  const navigate = useNavigate();
  const handleClick = (component) => {
    console.log(component);
    navigate(`${"/" + component}`);
  }
  return (
    <div className="w-full h[85vh] flex items-center justify-between px-16 py-24">
      <div className=" w-[45%] text-primary ">
        <h1 className="text-6xl mb-3 uppercase font-bold ">heavenHomes</h1>
        <h3 className="text-xl mb-6">Bringing Heaven to Your Doorstep.</h3>
        <p className="font-medium text-lg  w-[92%] mb-5">
          “HavenHomes is a comprehensive real estate portal that caters to every
          aspect of the consumers’ needs in the property market. It provides an
          online platform where buyers, sellers, and real estate professionals
          can exchange information quickly, effectively, and affordably.
          HavenHomes offers a wide range of services including property
          listings, property search, and the latest news and trends in the real
          estate industry. ”
        </p>
        <div className="flex gap-5">
          <Button handleClick={handleClick} component={"search"} title="Search Now" />
          <Button handleClick={handleClick} component={"contact"} title="Contact Us" type={"secondary"} />
        </div>
      </div>
      <img className="w-[45%]" src={HeroImg} alt="" />
    </div>
  );
};

export default Hero;
