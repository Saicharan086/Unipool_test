import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../lib/utils";

export default function BackgroundBoxesDemo() {
  return (
    (<div
      className="h-full relative w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg">
      <div
        className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="relative z-30 w-1/2 text-center top-[13%]">
        <h1 className="text-9xl text-yellow-500 font-bold relative z-40">Unipool</h1>
              <p className='text-2xl mt-4 text-black leading-relaxed'>
                Join UniPool to save on commuting costs, reduce your carbon footprint, 
                and connect with fellow travelers. Share rides, reduce traffic, and make 
                your daily trips more meaningful.
              </p>
              <p className='text-lg mt-2 text-gray-500'>
                Safe, efficient, and eco-friendly. Join the movement today!
              </p>
              <button className='my-6 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 font-semibold text-xl rounded-md shadow-lg'>
                Download the App
              </button>
              <button className='mx-4 my-6 px-8 py-4 bg-white border border-1 border-yellow-400 hover:bg-yellow-400  font-semibold text-xl rounded-md shadow-lg'>
                Learn More
              </button>
      </div>
      
    </div>)
  );
}
