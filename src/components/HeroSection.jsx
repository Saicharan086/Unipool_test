import Typewriter from "typewriter-effect";
import car_image from "../assets/car_image.svg";
import play_store from "../assets/play_store.png";
import app_store from "../assets/app_store.png";
import auto_image from '../assets/auto_image.png';

export default function HeroSection(){

    return (
        <div className='homepage h-[75vh]  flex gap-10 my-10'>

            <div className='mx-auto w-4/6 text-left flex flex-col justify-center'>
              <p className='text-[6vw] font-semibold mt-4  flex'>
                <span className='text-yellow-500'>
                <Typewriter
                  options={{loop : true}}
                  onInit={(typewriter) => {
                      typewriter
                          .typeString("Ride")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Share")
                          .pauseFor(1000)
                          .deleteAll()
                          .start();
                  }}
                />
                </span>
                Together.
              </p>
              <p className='text-[1.5vw] mt-4 text-gray-800 leading-relaxed'>
                Join UniPool to save on commuting costs, reduce your carbon footprint, 
                and connect with fellow travelers. Share rides, reduce traffic, and make 
                your daily trips more meaningful.
              </p>
              <p className='text-lg mt-2 text-gray-500'>
                Safe, efficient, and eco-friendly. Join the movement today!
              </p>

              <div className='flex my-4 gap-10 '>
                <button className='w-[12vw]'>
                  <img src={play_store} />
                </button>
                <button className='w-[14vw]'>
                <img src={app_store} className='object-fill scale-150'/>
                </button>
              </div>
            </div>
            <div className="w-2/6 flex items-center max-sm:hidden">
              <img src={auto_image} />
            </div>
        </div>
    )
}

