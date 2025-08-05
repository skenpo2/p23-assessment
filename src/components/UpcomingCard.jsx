import { FaArrowRight } from 'react-icons/fa6';

export const UpcomingCard = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <h3 className=" text-white  text-[1.25rem]  leading-7 font-extrabold">
          Upcoming Event for the year{' '}
        </h3>
      </div>
      <p className="font-[400]  text-white text-[20px] leading-[24px] tracking-[0.5px]  mb-10">
        Explore upcoming events tailored to equip, connect, and empower
        businesses across Africa and beyond.
      </p>
      <div>
        <button className="w-72 px-2 py-4 rounded-[10px] font-[500] text-[1.25rem] bg-white text-[#0D4036] hover:bg-[#0D4036]  hover:text-white flex items-center justify-center gap-6 transition-all duration-300">
          See All Events
          <FaArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
