import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[80vh] bg-slate-900 relative overflow-hidden border-b-2 border-cyan-500">
      <video autoPlay={true} muted={true} width="100%">
        <source src="teledysk.mp4" />
      </video>
      <div className=" absolute bottom-32 right-16 text-white flex flex-col items-end">
        <h1 className=" font-bold text-right mb-4 text-4xl drop-shadow-lg">
          AW Beats - Debile
        </h1>
        <div className="flex gap-2">
          <button className="bg-black text-red-500 px-4 py-2 rounded-lg ">
            YouTube
          </button>
          <button className="bg-black px-4 py-2 rounded-lg text-green-400 shadow-md">
            Spotify
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
