import React from 'react';
import { CalendarMinus2, ArrowRight } from 'lucide-react';
import { UpcomingCard } from './UpcomingCard.jsx';
import { FaArrowRight } from 'react-icons/fa6';

export const EventCard = ({
  title,
  description,
  isDark = false,
  isLarge = false,
  mobile = false,
}) => {
  const cardClass = `
      ${isDark ? 'bg-[#0D4036] text-white' : 'bg-white text-gray-800'}
      ${isLarge ? 'col-span-1 row-span-1' : 'col-span-1'}
      rounded-[10px]  p-8 shadow-2xl transition-all duration-300 
    `;

  const tiltStyle =
    isDark && !mobile
      ? {
          transform: 'rotate(-5.9deg)',
          transformOrigin: 'bottom left',
        }
      : {};

  return (
    <div className={cardClass} style={tiltStyle}>
      <div className="flex items-center gap-3 mb-4">
        <CalendarMinus2 className="w-10 h-10" />
        <h3
          className={`font-extrabold text-[24px] leading-[28px] align-middle ${
            isDark ? 'text-white' : 'text-[#0D4036]'
          }`}
        >
          {title}
        </h3>
      </div>
      <p
        className={`font-[300] text-[16px]leading-[20px] align-middle mb-6 ${
          isDark ? 'text-white' : 'text-[#0D4036]'
        }`}
      >
        {description}
      </p>
      <div className="flex gap-4 lg:gap-8">
        <button
          className={`
            ${
              isDark
                ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-800'
                : 'bg-white border-2 border-[#0D4036] text-[#0D4036] hover:bg-[#2D9378] hover:text-white'
            }
            px-6 py-3 rounded-[10px] font-[700] text-[16px] flex items-center gap-4 transition-all duration-300
          `}
        >
          Book A Seat
          <FaArrowRight className="w-5 h-6" />
        </button>
        <button
          className={`
            ${
              isDark
                ? 'text-white hover:text-gray-200'
                : 'text-[#0D4036] hover:text-gray-600'
            }
            font-[700] flex items-center gap-4 transition-colors duration-300
          `}
        >
          Event Details
          <FaArrowRight className="w-5 h-6" />
        </button>
      </div>
    </div>
  );
};
