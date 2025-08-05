import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaYoutube } from 'react-icons/fa6';
import footerLogo from '../assets/footer.png';

const Footer = () => {
  return (
    <footer className="bg-white pt-4">
      <div className="bg-[#0D4036] text-white px-8 xl:px-40 py-6">
        <div className="max-w-8xl mx-auto">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            {/* Logo and Description */}
            <div className="flex justify-between items-center bg-red">
              <div className="mb-8">
                <div className="w-28 h-auto mb-4">
                  <img src={footerLogo} alt="p23 logo" />
                </div>
                <p className="text-white text-lg font-medium leading-relaxed font-normal mb-6">
                  P23 Africa LTD is registered <br />
                  in the United Kingdom.
                  <br />
                  Company No: 13240700
                </p>
              </div>

              {/* Quick Links */}
              <div className="mb-8 pt-18">
                <h3 className="text-white text-lg font-medium mb-8">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-white text-lg font-medium hover:text-[#CCED60] transition-colors"
                    >
                      Who We Are
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-lg font-medium hover:text-[#CCED60] transition-colors"
                    >
                      What We Do
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-lg font-medium hover:text-[#CCED60] transition-colors"
                    >
                      Our Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-lg font-medium hover:text-[#CCED60] transition-colors"
                    >
                      Resource Hub
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-lg font-medium hover:text-[#CCED60] transition-colors"
                    >
                      Let's Collaborate
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="mb-8">
              <h4 className="text-white text-lg font-medium mb-4">
                Subscribe to get updates
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 w-2 h-18 px-4 py-3 bg-white border border-gray-400 rounded-l-lg text-white text-sm placeholder:text-gray-800 focus:outline-none focus:border-[#CCED60]"
                />
                <button className="bg-[#CCED60] w-20 text-[#0D4036] px-8 py-3 rounded-r-lg hover:bg-lime-300 transition-colors flex items-center justify-center">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Contact Us */}
            <div className="mb-8">
              <h4 className="text-white text-lg font-medium mb-4">
                Contact Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-[#CCED60] hover:text-lime-300 transition-colors"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="#"
                  className="text-[#CCED60] hover:text-lime-300 transition-colors"
                >
                  <FaFacebookSquare size={28} />
                </a>
                <a
                  href="#"
                  className="text-[#CCED60] hover:text-lime-300 transition-colors"
                >
                  <PiInstagramLogoFill size={28} />
                </a>
                <a
                  href="#"
                  className="text-[#CCED60] hover:text-lime-300 transition-colors"
                >
                  <FaYoutube size={28} />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex justify-end">
              <p className="text-gray-300 font-[Georgia] text-lg">
                ©P23 Africa 2025
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-3  md:gap-2  xl:grid-cols-5 gap-4">
              {/* Logo and Description */}
              <div className="col-span-1 flex flex-col gap-4">
                <div className="w-64 md:w-80 lg:w-[400px] h-auto">
                  <div className="w-28 h-auto mb-4">
                    <img src={footerLogo} alt="p23 logo" />
                  </div>
                </div>
                <p className="text-white text-[16px] leading-[24px] tracking-custom align-middle font-normal">
                  P23 Africa LTD is registered in the United Kingdom. Company
                  No: 13240700
                </p>
              </div>

              {/* Who We Are */}
              <div className="col-span-1">
                <h3 className="text-white text-[1.5rem] font-[400] mb-5">
                  Who We Are
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white text-[16px] leading-[24px] tracking-custom align-middle font-normal hover:text-[#CCED60] transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-[16px] leading-[24px] tracking-custom align-middle font-normal hover:text-[#CCED60] transition-colors"
                    >
                      Business Referral Network
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-[16px] leading-[24px] tracking-custom align-middle font-normal hover:text-[#CCED60] transition-colors"
                    >
                      University Partnership
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-[16px] leading-[24px] tracking-custom align-middle font-normal hover:text-[#CCED60] transition-colors"
                    >
                      The Shift Pitch
                    </a>
                  </li>
                </ul>
              </div>

              {/* What We Do */}
              <div className="col-span-1">
                <h3 className="text-white text-[1.5rem] font-[400] mb-5">
                  What We Do
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white text-[16px] leading-[24px] tracking-custom align-middle font-normal hover:text-[#CCED60] transition-colors"
                    >
                      Business Strategy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-[16px] leading-[24px] tracking-custom align-middle font-normal hover:text-[#CCED60] transition-colors"
                    >
                      Market Entry
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-[16px] leading-[24px] tracking-custom align-middle font-normal hover:text-[#CCED60] transition-colors"
                    >
                      Business Research
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-[16px] leading-[24px] tracking-custom align-middle font-normal hover:text-[#CCED60] transition-colors"
                    >
                      Sales
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-[16px] leading-[24px] tracking-custom align-middle font-normal hover:text-[#CCED60] transition-colors"
                    >
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-[16px] leading-[24px] tracking-custom align-middle font-normal hover:text-[#CCED60] transition-colors"
                    >
                      Business Audit
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="col-span-1">
                <h3 className="text-white text-[1.5rem] font-[400] mb-5">
                  Contact Us
                </h3>
                <div className="flex space-x-3 mb-6">
                  <a
                    href="#"
                    className="text-[#CCED60] hover:text-lime-300 transition-colors"
                  >
                    <FaLinkedin size={32} />
                  </a>
                  <a
                    href="#"
                    className="text-[#CCED60] hover:text-lime-300 transition-colors"
                  >
                    <FaFacebookSquare size={32} />
                  </a>
                  <a
                    href="#"
                    className="text-[#CCED60] hover:text-lime-300 transition-colors"
                  >
                    <PiInstagramLogoFill size={32} />
                  </a>
                  <a
                    href="#"
                    className="text-[#CCED60] hover:text-lime-300 transition-colors"
                  >
                    <FaYoutube size={32} />
                  </a>
                </div>
              </div>

              {/* Subscribe */}
              <div className="col-span-1">
                <h4 className="text-white  text-lg font-medium mb-3">
                  Subscribe to get Updates
                </h4>
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-50 xl:w-80  px-6 py-4 bg-[#0D4036] border border-[#CCED60] rounded-lg text-white text-base leading-6 tracking-[0.5px] placeholder:text-white/60 placeholder:font-normal placeholder:leading-6 placeholder:tracking-[0.5px] focus:outline-none focus:border-[#CCED60]"
                  />
                  <button className="bg-[#CCED60] w-40 text-[#0D4036] px-4 py-4 rounded-lg font-medium text-[1rem] hover:bg-lime-300 transition-colors flex items-center justify-center space-x-2">
                    <span>Subscribe</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8">
              <div className="max-w-8xl flex justify-end mx-auto px-10 py-4">
                <div className="text-emerald-200 text-right font-[Georgia] font-normal text-base leading-6 tracking-[0.08em]">
                  P23 Africa 2025 •{' '}
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>{' '}
                  •{' '}
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
