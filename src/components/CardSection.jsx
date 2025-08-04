import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const EventCard = ({ title, description, isDark = false, isLarge = false }) => {
  const cardClass = `
    ${isDark ? 'bg-emerald-800 text-white' : 'bg-white text-gray-800'}
    ${isLarge ? 'col-span-1 row-span-1' : 'col-span-1'}
    rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1
  `;

  return (
    <div className={cardClass}>
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="w-6 h-6" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p
        className={`text-sm leading-relaxed mb-6 ${
          isDark ? 'text-gray-200' : 'text-gray-600'
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
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }
          px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300
        `}
        >
          Book A Seat
          <ArrowRight className="w-4 h-4" />
        </button>
        <button
          className={`
          ${
            isDark
              ? 'text-white hover:text-gray-200'
              : 'text-gray-800 hover:text-gray-600'
          }
          font-semibold flex items-center gap-2 transition-colors duration-300
        `}
        >
          Event Details
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default function CardSection() {
  const eventDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 p-8 relative">
      {/* MAXIMUM GRAIN - Quadruple Layer System */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='heavyNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4.5' numOctaves='12' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23heavyNoise)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply',
        }}
      />
      {/* Extreme Rough Grain */}
      <div
        className="absolute inset-0 opacity-75 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='extremeNoise'%3E%3CfeTurbulence type='turbulence' baseFrequency='7.8' numOctaves='15' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23extremeNoise)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />
      {/* Ultra Dense Grain */}
      <div
        className="absolute inset-0 opacity-65 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='denseNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='12.5' numOctaves='18' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23denseNoise)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'hard-light',
        }}
      />
      {/* Micro Grain Details */}
      <div
        className="absolute inset-0 opacity-55 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='microNoise'%3E%3CfeTurbulence type='turbulence' baseFrequency='18.0' numOctaves='20' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23microNoise)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'difference',
        }}
      />
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Upcoming Event For The Year
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-md leading-relaxed">
            Explore upcoming events tailored to equip, connect, and empower
            businesses across Africa and beyond.
          </p>
          <button className="bg-white text-emerald-800 px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
            See All Events
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Event - Dark Card */}
          <div className="lg:col-span-1">
            <EventCard
              title="Vision & Execution"
              description={eventDescription}
              isDark={true}
              isLarge={true}
            />
          </div>

          {/* Regular Events */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <EventCard title="Event Name" description={eventDescription} />
            <EventCard title="Event Name" description={eventDescription} />
            <EventCard title="Event Name" description={eventDescription} />
            <EventCard title="Event Name" description={eventDescription} />
          </div>
        </div>
      </div>
    </div>
  );
}
