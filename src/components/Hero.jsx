import React from 'react';
import { motion } from 'framer-motion';
import heroLeft from '../assets/left-hero.png';
import heroRight from '../assets/right-hero.png';
import mobileTop from '../assets/mobile-top.png';
import mobileBottom from '../assets/mobile-bottom.png';
import { MobileUpcoming } from './MobileUpcoming.jsx';

export default function Hero() {
  const leftSlideVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 2,
        delay: 1.8,
      },
    },
  };

  const rightSlideVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 2,
        delay: 1.8,
      },
    },
  };

  const textVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 2,
        delay: 1.8,
      },
    },
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center text-white overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Grainy texture overlay */}
      <div
        className="absolute inset-0 z-10 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50px 150px, #333 2px, transparent 2px),
            radial-gradient(circle at 200px 80px, #555 1.5px, transparent 1.5px),
            radial-gradient(circle at 120px 200px, #444 1.8px, transparent 1.8px),
            radial-gradient(circle at 300px 120px, #666 1.2px, transparent 1.2px)
          `,
          backgroundSize: '400px 300px, 350px 250px, 300px 350px, 450px 300px',
          backgroundPosition: '0 0, 100px 50px, 200px 100px, 50px 150px',
        }}
      />

      <div
        className="absolute inset-0 z-15 opacity-10"
        style={{
          backgroundImage: "url('/cardsection.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      />

      <div className="absolute inset-0 bg-white opacity-5 z-20" />

      {/* Hero Content */}
      <div className="md:hidden h-full z-30 py-12 w-full">
        <p className="font-extrabold text-[40px] md:text-[65px] px-10 text-[#0D4036] font-montserrat mb-4">
          Gaining Knowledge <br />
          <span className="font-light text-[40px] lg:text-[70px]">
            Through Connection.
          </span>
        </p>
        <div className="w-full">
          <img
            src={mobileTop}
            alt="hero-image"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="w-full mt-6">
          <img
            src={mobileBottom}
            alt="hero-icons"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      <div className="hidden md:flex z-30 h-full w-full">
        {/* Left Image*/}
        <motion.div
          className="w-[45%] flex items-center justify-end"
          variants={leftSlideVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={heroLeft}
            alt="Hero Left"
            className="h-[90%] w-[80%] object-contain"
          />
        </motion.div>

        {/* Text + Right Image */}
        <div className="w-[55%] flex mt-[50px] flex-col justify-center">
          {/* Text - Animated */}
          <motion.p
            className="font-extrabold text-[40px] md:text-[65px] text-[#0D4036] leading-[75px] tracking-[0.5px] font-montserrat mb-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Gaining Knowledge <br />
            <span className="font-light md:text-[70px]">
              Through Connection.
            </span>
          </motion.p>

          {/* Right Image */}
          <motion.div
            className="flex items-center justify-center"
            variants={rightSlideVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src={heroRight}
              alt="Hero Right"
              className="h-full w-[95%] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
