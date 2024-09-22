import { div } from "framer-motion/client";

export default function about(){
    return (
        <div className="flex pr-10 pt-0 md:max-w-{1245px}">
            <div className="md-flex flex-1">
                <div className="tracking-wide text-6xl text-yellow-400 font-semibold mb-5">
                    <span className="text-black">We</span> are changing the way people connect
                </div>
                <div className="block mt-1 text-3xl leading-tight text-black ">
                At Unipool, we are not just reshaping rural transportation; we are revolutionizing how students connect, commute, and contribute to a more sustainable future. We are a passionate team committed to making your daily journeys seamless, affordable, and environmentally  conscious.
                </div>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4 pt-10 md:shrink-0">  
                <img className="hover:scale-110 ease-in-out duration-300  md:w-96" src="src\assets\Photo-1.png" alt="" />
                <img className="hover:scale-110 ease-in-out duration-300  md:w-96" src="src\assets\Photo-2.png" alt="" />
                <img className="hover:scale-110 ease-in-out duration-300  md:w-80" src="src\assets\Photo-3.png" alt="" />
            </div>
        </div>
    )
}