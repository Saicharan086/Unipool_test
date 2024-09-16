import { div } from "framer-motion/client";

export default function about(){
    return (
        <div className="flex pr-10 pt-0">
            <div className="flex-1">
                <div className="text-5xl mb-10">
                    We are changing the way people connect
                </div>
                <div className="text-3xl">
                At Unipool, we are not just reshaping rural transportation; we are revolutionizing how students connect, commute, and contribute to a more sustainable future. We are a passionate team committed to making your daily journeys seamless, affordable, and environmentally  conscious.
                </div>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4 pt-10">
                <img src="src\assets\Photo-1.png" alt="" />
                <img src="src\assets\Photo-2.png" alt="" className="w-full h-auto"/>
                <img src="src\assets\Photo-3.png" alt="" className="w-full h-auto"/>
            </div>
        </div>
    )
}