import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/images/FooterLogo.jpg";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-[50vh] flex flex-col items-center border-t-2 pt-5">
      <div className="part1 w-full h-[50vh] flex pt-5">
        <div className="basis-[30%] flex flex-col items-center">
          <img className="w-[60%] mb-5" src={FooterLogo} alt="Footer Logo" />
          <p className="w-[60%]">
            HeavenHomes is a leading real estate agency that helps you find your
            dream home. We offer personalized service, expert advice, and a wide
            range of properties to suit your needs and budget.
          </p>
        </div>
        <div className="basis-[30%] flex flex-col items-center justify-start">
          <h4 className="text-3xl">Quick Links</h4>
          <div className="flex flex-col text-lg mt-5 text-left">
            <Link className="mb-2" to="/blogs">
              blogs
            </Link>
            <Link className="mb-2" to="/about">
              About
            </Link>
            <Link className="mb-2" to="/contact">
              Contact
            </Link>
            <Link className="mb-2" to="/support">
              Support
            </Link>
            <Link className="mb-2" to="/TermsOfUse">
              Terms of Use
            </Link>
            <Link className="mb-2" to="/PrivacyPolicy">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="basis-[40%] ">
          <div className="newsletter mb-5">
            <h4 className="text-lg font-semibold">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-base">
              Get the latest news, tips, and offers from HeavenHomes.
            </p>
            <div className="mt-5">
              <input
                className="h-10 w-[25vw] p-5 rounded-l-full border-y-2 border-l-2 border-primary"
                type="email"
                name="email"
                id="email"
                placeholder="abc@mail.com"
              />
              <button
                className="px-5 py-2.5 rounded-r-full bg-primary text-secondary"
                type="submit"
              >
                Subscribe
              </button>
            </div>
            <div></div>
          </div>
          <div className="SocialMedia">
            <h4 className="text-lg font-semibold mb-2">Follow us on</h4>
            <div className="icons flex gap-5 items-center">
              <AiFillFacebook className="size-[2.2vw] fill-primary" />
              <AiFillTwitterSquare className="size-[2.2vw] fill-primary" />
              <AiOutlineInstagram className="size-[2.2vw] fill-primary" />
              <AiFillLinkedin className="size-[2.2vw] fill-primary" />
              <AiFillYoutube className="size-[2.2vw] fill-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="part2">
        <h2 className="font-semibold text-base text-primary">© 2024 HeavenHomes All Rights reserved</h2>
      </div>
    </div>
  );
};

export default Footer;
