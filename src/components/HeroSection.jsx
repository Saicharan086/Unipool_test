import Typewriter from "typewriter-effect";
import play_store from "../assets/play_store.png";
import app_store from "../assets/app_store.png";
import auto_image from "../assets/auto_image.png";

export default function HeroSection() {
    return (
        <div className="homepage max-md:h-full h-[75vh] flex flex-col md:flex-row gap-10 items-center md:px-0 px-10">
            {/* Left Section: Text and Buttons */}
            <div className="mx-auto w-full md:w-2/3 flex flex-col justify-center text-left">
                <p className="text-[6vw] md:text-5xl font-semibold flex items-center">
                    <span className="text-yellow-500">
                        <Typewriter
                            options={{ loop: true }}
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
                <p className="text-[4vw] md:text-lg mt-4 text-gray-800 leading-relaxed">
                    Join UniPool to save on commuting costs, reduce your carbon footprint,
                    and connect with fellow travelers. Share rides, reduce traffic, and make
                    your daily trips more meaningful.
                </p>
                <p className="text-base md:text-lg mt-2 text-gray-500">
                    Safe, efficient, and eco-friendly. Join the movement today!
                </p>

                {/* Download Buttons */}
                <div className="flex gap-5 mt-6">
                    <button className="w-[25%] md:w-[12vw]">
                        <img src={play_store} alt="Download on Play Store" className="object-fill max-md:scale-110" />
                    </button>
                    <button className="w-[31%] md:w-[14vw]">
                        <img src={app_store} alt="Download on App Store" className="object-fill scale-150" />
                    </button>
                </div>
            </div>

            {/* Right Section: Image */}
            <div className="hidden md:flex w-1/3 items-center justify-center">
                <img src={auto_image} alt="Car" className="w-full max-w-xs lg:max-w-sm" />
            </div>
        </div>
    );
}
