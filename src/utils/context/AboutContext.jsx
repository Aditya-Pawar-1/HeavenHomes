import React, { useState, useContext } from "react";
import { createContext } from "react";
import About from "../../components/About"

export const AboutDataContext = createContext(null);

const AboutDataProvider = (props) => {
  const [aboutData, setaboutData] = useState([
    {
      title: "Who We Are",
      description: {
        para: "Heaven Homes is more than just a real estate platform. Launched with passion and expertise, we cater to every aspect of your realty needs. Our online forum brings together buyers, sellers, and brokers, creating a seamless exchange of information. Here’s what sets us apart:",
        listItems: [
          {
            subtiltle: "Comprehensive Listings: ",
            subdescription:
              "Explore a vast array of properties across diverse locations. From cozy apartments to sprawling villas, we’ve got it all",
          },
          {
            subtiltle: "Property Microsites: ",
            subdescription:
              "your property like never before. Our customizable microsites allow you to highlight unique features and attract potential buyers.",
          },
          {
            subtiltle: "Stay Informed: ",
            subdescription:
              "Keep yourself updated with the latest trends and news in the real estate sector. We believe informed decisions lead to successful transactions.",
          },
        ],
      },
    },
    {
      title: "Why Choose Heaven Homes?",
      description: {
        listItems: [
          {
            subtiltle: "Extensive Reach: ",
            subdescription:
              "With listings spanning over 600+ cities in India, we connect you to a wide network of properties.",
          },
          {
            subtiltle: "Client-Centric Approach: ",
            subdescription:
              "Our commitment to clients goes beyond listings. We offer personalized services, ensuring your real estate journey is smooth and rewarding.",
          },
          {
            subtiltle: "Advertising Solutions: ",
            subdescription:
              "Boost your property’s visibility with our advertisement stints. From eye-catching banners to project pages, we enhance your brand",
          },
          {
            subtiltle: "Smart Search: ",
            subdescription:
              "Our user-friendly platform simplifies property search. Find your dream home or investment property quickly and efficiently.",
          },
        ],
      },
    },
  ]);
  return (
    <AboutDataContext.Provider value={[aboutData, setaboutData]}>
      {props.children}
    </AboutDataContext.Provider>
  );
};
export default AboutDataProvider;
