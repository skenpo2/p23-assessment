import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { UpcomingCard } from './UpcomingCard.jsx';
import { EventCard } from './EventCard.jsx';
import { MobileUpcoming } from './MobileUpcoming.jsx';

const EventTabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Vision & Execution',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'all',
    },
    {
      id: 2,
      title: 'Vision & Execution',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'all',
    },
    {
      id: 3,
      title: 'Vision & Execution',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'brn',
    },
    {
      id: 4,
      title: 'Vision & Execution',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'brn',
    },
  ];

  const filteredEvents =
    activeTab === 'all'
      ? events
      : events.filter((event) => event.category === 'brn');

  const eventDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <div className="lg:hidden font-g bg-gray-50 min-h-screen">
      {/* Tab Navigation */}
      <MobileUpcoming />
      <div className="flex mb-6 border-b-6  border-[#0D4036] bg-white w-full">
        <button
          onClick={() => setActiveTab('all')}
          className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
            activeTab === 'all'
              ? 'bg-[#0D4036] text-white'
              : 'bg-white text-[#0D4036] hover:bg-gray-50'
          }`}
        >
          All Event
        </button>
        <button
          onClick={() => setActiveTab('brn')}
          className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
            activeTab === 'brn'
              ? 'bg-[#0D4036] text-white'
              : 'bg-white text-[#0D4036] hover:bg-gray-50'
          }`}
        >
          BRN Only
        </button>
      </div>

      {/* Event Cards */}
      <div className="space-y-4 p-8">
        {filteredEvents.map((event) => {
          const isWhiteCard = activeTab === 'brn';

          return (
            <EventCard
              key={event.id}
              title={event.title}
              isDark={!isWhiteCard ? true : false}
              mobile={true}
              description={eventDescription}
            />
          );
        })}
      </div>

      {activeTab === 'brn' && filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-2">
            <Calendar className="w-12 h-12 mx-auto mb-4" />
          </div>
          <p className="text-gray-600">
            No BRN exclusive events available at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default EventTabs;
