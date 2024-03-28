import React from "react";
import TestimonialCard from "./TestimonialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import T1 from "../assets/images/T-1.jpg";
import T2 from "../assets/images/T-2.jpg";
import T3 from "../assets/images/T-3.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Testimonials = () => {
  const data = [
    {
      image: T1,
      description:
        "“I’ve been using this website for a few weeks now and I’m quite impressed. The property listings are comprehensive and the search and filter options are very helpful. I especially appreciate the interactive location maps. However, I wish the website was a bit faster. Overall, a great tool for property search.”",
      name: "-by Rahul",
    },
    {
      image: T2,
      description:
        "“I love how easy it is to navigate through the website. The property comparisons and agent profiles are very useful. I also appreciate the security measures taken to protect my personal information. However, I would like to see more information about the neighbourhoods of the listed properties. Overall, a good website for both buyers and sellers.”",
      name: "-by Priya",
    },
    {
      image: T3,
      description:
        "“This website has made my property search so much easier. The detailed property listings with high-quality images and the option to schedule viewings online are fantastic features. The website is user-friendly and the customer service is excellent. Highly recommended for anyone in the real estate market.”",
      name: "-by Amit",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };

  return (
    <div className="w-full h-screen flex flex-col items-center relative overflow-hidden">
      <h1 className="text-3xl h-[10vh] mt-[5vh]">
        Don’t Take Our Word For It, Listen To Our Users
      </h1>
      <Carousel
        // showDots={true}
        responsive={responsive}
        infinite={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="h-[80vh] px-[5%]"
        customRightArrow={
          <IoIosArrowForward
            size="8vw"
            className="absolute top-2.5/3 right-0 max-w-16 cursor-pointer text-primary"
          />
        }
        customLeftArrow={
          <IoIosArrowBack
            size="8vw"
            className="absolute top-2.5/3 left-0 max-w-16 cursor-pointer text-primary"
          />
        }
      >
        {data.map((elem, index) => {
          return <TestimonialCard element={elem} key={index} />;
        })}
      </Carousel>
    </div>
  );
};

export default Testimonials;
