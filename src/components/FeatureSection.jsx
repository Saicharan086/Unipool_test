import { div } from "framer-motion/m";
import map from '../assets/map2.png';
import payment from '../assets/payment.gif';
import wallet from '../assets/wallet.png';
import { useState } from "react";
import FeatureCard from "./FeatureCard";

const images = [
    map,
    wallet, 
    "#",
    payment
]

const content =[
    {
        title : "Smart Ride Matching:",
        text : "Our algorithms find the best ride based on your preferences and location.",
    },
    {
        title : "Save More, Ride More:",
        text : "Share the cost of every journey and spend less than you ever thought possible.",
    },
    {
        title : "Eco-Friendly Commutes:",
        text: "Reduce emissions and traffic congestion with every ride you share.",
    },
    {
        title : "Easy Payments:",
        text: "Securely pay for your ride directly through the app with transparent pricing.",
    },
]

export default function FeatureSection(){

    const [index, setIndex] = useState(0);

    return (
        <div className="featurepage flex flex-col gap-10 py-10">
            <div className="">
                <h2 className="text-[3.5vw]">Every Feature You Need to Ride Better</h2>
                <p className="w-2/3 text-[1.3vw] text-gray-700">At UNIPOOL, we believe in making every journey a little brighter. Our platform is designed for smart commuters who value convenience, savings, and sustainability. Join the community that’s transforming the way the world moves.</p>
            </div>
            <div className="flex">
                <div className="w-1/2 flex justify-center items-center ">
                    <div className="h-5/6 flex items-center">
                        <img src={images[index]} className="h-5/6"/>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-5">
                    {
                        content.map((item, idx) => <FeatureCard key={idx} idx={idx} title={item.title} text={item.text} setIndex={setIndex} index={index} /> )
                    }
                </div>
            </div>
        </div>
    )
}