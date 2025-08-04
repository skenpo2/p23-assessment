import React from 'react';
import logo from '../assets/logo.png';
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { WhiteIconWrapper } from './IconWrapper.jsx';

const Navbar = () => {
  return (
    <nav>
      <div className="bg-white h-4"></div>
      <div className="bg-[#0D4036] flex justify-between gap-6 items-center py-10 px-40">
        <div className="flex gap-30 items-center">
          <div>
            <img src={logo} />
          </div>
          <div>
            <ul className="flex gap-12 capitalize items-center text-white  text-md font-normal font-sans">
              <li>Who we are</li>
              <li>What we do</li>
              <li>our events</li>
              <li>Resources Hub</li>
              <li>Let's collaborate</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <button className="border border-white text-white px-6 py-3 font-medium rounded-[10px] hover:bg-white hover:text-green-900 transition">
            Subscribe
          </button>

          <div className="flex items-center gap-4">
            <WhiteIconWrapper>
              <FaLinkedinIn />
            </WhiteIconWrapper>
            <WhiteIconWrapper>
              <FaFacebookF />
            </WhiteIconWrapper>
            <WhiteIconWrapper>
              <FaInstagram />
            </WhiteIconWrapper>
            <WhiteIconWrapper>
              <FaYoutube />
            </WhiteIconWrapper>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
