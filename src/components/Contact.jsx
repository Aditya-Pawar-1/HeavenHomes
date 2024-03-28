import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundImg from "../assets/images/BackgroundImg.jpg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='w-[80%] mx-auto flex flex-col items-center justify-center gap-10"'>
        <img src={BackgroundImg} alt="Backgroung Image" />
        <h2 className="w-fit px-5 rounded-md uppercase text-[5vw] text-secondary bg-primary">
          Contact HeavenHomes
        </h2>
        <div className='w-[70%] my-10'>
          <p className='mb-10'>
            We’re thrilled to connect with you! At Heaven Homes, we value open communication and are here to assist you. Feel free to reach out through any of the following channels:
          </p>

          <ol className='list-decimal'>
            <li>
              <strong>Phone: </strong>You can call us at +91 1234 5678. Our friendly team is ready to answer your queries and guide you through your real estate journey.
            </li>
            <li>
              <strong>Email: </strong>For written inquiries, drop us an email at info@havenhomes.com We’ll promptly respond to your messages.
            </li>
            <li>
              <strong>Visit Our Office: </strong> If you prefer a face-to-face interaction, visit our office located at Property No 514/515, Main Street, Nashik, Maharashtra 410401. Our dedicated staff will be happy to assist you.
            </li>
          </ol>

          <p className='mt-10'>
            Remember, at Heaven Homes, we’re not just about properties; we’re about making your real estate journey heavenly.
          </p>
        </div>
      </div >

      <Footer />
    </div >
  )
}

export default Contact