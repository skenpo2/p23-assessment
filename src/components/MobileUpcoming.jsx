import { ArrowRight } from 'lucide-react';

export const MobileUpcoming = () => {
  return (
    <div className=" lg:hidden bg-[#2D9378] mb-16 px-10  md:px-8 lg:px-40 py-20 relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700'%3E%3Cdefs%3E%3CradialGradient id='gggrain-gradient' r='0.9'%3E%3Cstop offset='0%25' stop-color='%232d9378'%3E%3C/stop%3E%3Cstop offset='50%25' stop-color='%232d9378'%3E%3C/stop%3E%3Cstop offset='100%25' stop-color='%232d9378ff'%3E%3C/stop%3E%3C/radialGradient%3E%3Cfilter id='gggrain-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.45' numOctaves='3' seed='11' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeColorMatrix type='saturate' values='0' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='colormatrix'%3E%3C/feColorMatrix%3E%3CfeComponentTransfer x='0%25' y='0%25' width='100%25' height='100%25' in='colormatrix' result='componentTransfer'%3E%3CfeFuncR type='linear' slope='1.8'%3E%3C/feFuncR%3E%3CfeFuncG type='linear' slope='1.8'%3E%3C/feFuncG%3E%3CfeFuncB type='linear' slope='1.8'%3E%3C/feFuncB%3E%3C/feComponentTransfer%3E%3CfeColorMatrix x='0%25' y='0%25' width='100%25' height='100%25' in='componentTransfer' result='colormatrix2' type='matrix' values='0.35 0 0 0 0.15 0 0.35 0 0 0.15 0 0 0.35 0 0.15 0 0 0 15 -8'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg%3E%3Crect width='100%25' height='100%25' fill='url(%23gggrain-gradient)'%3E%3C/rect%3E%3Crect width='100%25' height='100%25' fill='transparent' filter='url(%23gggrain-filter)' opacity='0.4' style='mix-blend-mode: multiply'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-white text-[1.25rem] leading-7 font-extrabold">
            Upcoming Event for the year{' '}
          </h3>
        </div>
        <p className="font-[400] text-white text-[20px] leading-[24px] tracking-[0.5px] mb-10">
          Explore upcoming events tailored to equip, connect, and empower
          businesses across Africa and beyond.
        </p>
        <div>
          <button className="w-72 px-2 py-4 rounded-[10px] font-[500] text-[1.25rem] bg-white text-[#0D4036] hover:bg-[#2D9378] hover:text-white flex items-center justify-center gap-6 transition-all duration-300">
            See All Events
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
