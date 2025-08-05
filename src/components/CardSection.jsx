import React from 'react';
import { CalendarMinus2, ArrowRight } from 'lucide-react';
import { UpcomingCard } from './UpcomingCard.jsx';
import { FaArrowRight } from 'react-icons/fa6';

const EventCard = ({ title, description, isDark = false, isLarge = false }) => {
  const cardClass = `
      ${isDark ? 'bg-[#0D4036] text-white' : 'bg-white text-gray-800'}
      ${isLarge ? 'col-span-1 row-span-1' : 'col-span-1'}
      rounded-[10px]  p-8 shadow-2xl transition-all duration-300 
    `;

  const tiltStyle = isDark
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
      <div className="flex gap-4">
        <button
          className={`
            ${
              isDark
                ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-800'
                : 'bg-white border-2 border-[#0D4036] text-[#0D4036] hover:text-white hover:bg-[#0D4036]'
            }
            px-6 py-3 rounded-[10px] font-[700] text-[16px] flex items-center gap-4 transition-all duration-300
          `}
        >
          Book A Seat
          <FaArrowRight className="w-5 h-6" />
        </button>
        <button
          className={`
            ${isDark ? 'text-white hover:text-gray-200' : 'text-[#0D4036]'}
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

export default function CardSection() {
  const eventDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <div className=" hidden md:block min-h-screen bg-[#2D9378] md:px-4 lg:px-8  xl:px-40 py-20 relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700'%3E%3Cdefs%3E%3CradialGradient id='gggrain-gradient' r='0.9'%3E%3Cstop offset='0%25' stop-color='%232d9378'%3E%3C/stop%3E%3Cstop offset='50%25' stop-color='%232d9378'%3E%3C/stop%3E%3Cstop offset='100%25' stop-color='%232d9378ff'%3E%3C/stop%3E%3C/radialGradient%3E%3Cfilter id='gggrain-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.45' numOctaves='3' seed='11' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeColorMatrix type='saturate' values='0' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='colormatrix'%3E%3C/feColorMatrix%3E%3CfeComponentTransfer x='0%25' y='0%25' width='100%25' height='100%25' in='colormatrix' result='componentTransfer'%3E%3CfeFuncR type='linear' slope='1.8'%3E%3C/feFuncR%3E%3CfeFuncG type='linear' slope='1.8'%3E%3C/feFuncG%3E%3CfeFuncB type='linear' slope='1.8'%3E%3C/feFuncB%3E%3C/feComponentTransfer%3E%3CfeColorMatrix x='0%25' y='0%25' width='100%25' height='100%25' in='componentTransfer' result='colormatrix2' type='matrix' values='0.35 0 0 0 0.15 0 0.35 0 0 0.15 0 0 0.35 0 0.15 0 0 0 15 -8'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='transparent' filter='url(%23gggrain-filter)' opacity='0.4' style='mix-blend-mode: multiply'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Events Grid */}
        {/* Hidden on mobile */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-6 xl:gap-10">
          {/* Row 1 - Column 1 */}
          <UpcomingCard />

          {/* Row 1 - Column 2 */}
          <EventCard
            title="Vision & Execution"
            description={eventDescription}
            isDark={true}
            isLarge={true}
          />

          {/* Row 1 - Column 3 */}
          <EventCard title="Event Name" description={eventDescription} />

          {/* Row 2 - Column 1 */}
          <EventCard title="Event Name" description={eventDescription} />

          {/* Row 2 - Column 2 */}
          <EventCard title="Event Name" description={eventDescription} />

          {/* Row 2 - Column 3 */}
          <EventCard title="Event Name" description={eventDescription} />
        </div>
        {/* Mobile View */}
        <div className="block md:hidden">
          <UpcomingCard />
        </div>{' '}
      </div>
    </div>
  );
}
