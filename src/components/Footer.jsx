import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribing email:', email);
    // Handle subscription logic here
  };

  return (
    <footer className="bg-white pt-4">
      <div className="bg-[#0D4036] text-white">
        <div className="max-w-6xl mx-auto px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1">
              <div className="text-4xl font-bold mb-5">P23</div>
              <p className="text-emerald-200 text-sm leading-relaxed">
                P23 Africa LTD is registered in the United Kingdom. Company No:
                13240700
              </p>
            </div>

            {/* Who We Are */}
            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-5">Who We Are</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 text-sm hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 text-sm hover:text-white transition-colors"
                  >
                    Business Referral Network
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 text-sm hover:text-white transition-colors"
                  >
                    University Partnership
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 text-sm hover:text-white transition-colors"
                  >
                    The Shift Pitch
                  </a>
                </li>
              </ul>
            </div>

            {/* What We Do */}
            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-5">What We Do</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 text-sm hover:text-white transition-colors"
                  >
                    Business Strategy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 text-sm hover:text-white transition-colors"
                  >
                    Market Entry
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 text-sm hover:text-white transition-colors"
                  >
                    Business Research
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 text-sm hover:text-white transition-colors"
                  >
                    Sales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 text-sm hover:text-white transition-colors"
                  >
                    Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-emerald-200 text-sm hover:text-white transition-colors"
                  >
                    Business Audit
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-5">Contact Us</h3>

              {/* Social Icons */}
              <div className="flex space-x-3 mb-6">
                <a href="#">
                  <FaLinkedin
                    size={32}
                    color="#CCED60"
                    className="text-[#0D4036]"
                  />
                </a>
                <a href="#">
                  <FaFacebookSquare
                    size={32}
                    color="#CCED60"
                    className="text-[#0D4036]"
                  />
                </a>
                <a href="#">
                  <PiInstagramLogoFill
                    size={32}
                    color="#CCED60"
                    className="text-[#0D4036]"
                  />
                </a>

                <a href="#">
                  <FaYoutube
                    size={32}
                    color="#CCED60"
                    className="text-[#0D4036]"
                  />
                </a>
              </div>

              {/* Newsletter Signup */}
            </div>

            {/* Subscribe */}
            <div className="col-span-1">
              <h4 className="text-white text-sm font-medium mb-3">
                Subscribe to get Updates
              </h4>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-80 px-6 py-4 bg-[#0D4036] border border-[#CCED60] rounded-lg text-white text-base leading-6 tracking-[0.5px]  placeholder:text-white/60 placeholder:font-normal placeholder:leading-6 placeholder:tracking-[0.5px] focus:outline-none focus:border-[#CCED60]"
                />

                <button
                  onClick={handleSubscribe}
                  className="bg-[#CCED60] text-emerald-800 px-4 py-3 rounded font-medium text-sm hover:bg-lime-300 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="">
          <div className="max-w-6xl mx-auto px-10 py-4">
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
    </footer>
  );
};

export default Footer;
