import { useState } from "react";
import map from '../assets/map2.png';
import payment from '../assets/payment.gif';
import wallet from '../assets/wallet.png';
import FeatureCard from "./FeatureCard";
import ecofriendly from "../assets/ecofriendly.png"

const images = [
    map,
    wallet,
    ecofriendly,
    payment
];

const content = [
    {
        title: "Smart Ride Matching:",
        text: "Our algorithms find the best ride based on your preferences and location.",
    },
    {
        title: "Save More, Ride More:",
        text: "Share the cost of every journey and spend less than you ever thought possible.",
    },
    {
        title: "Eco-Friendly Commutes:",
        text: "Reduce emissions and traffic congestion with every ride you share.",
    },
    {
        title: "Easy Payments:",
        text: "Securely pay for your ride directly through the app with transparent pricing.",
    },
];

export default function FeatureSection() {
    const [index, setIndex] = useState(0);

    return (
        <div className="featurepage flex flex-col gap-10 py-10 px-5 md:px-10">
            <div className="text-center mx-auto py-10 px-4 md:px-0">
                <h2 className="text-4xl md:text-5xl font-semibold mb-4">Every Feature You Need to Ride Better</h2>
                <p className="w-full md:w-3/5 lg:w-1/2 mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
                    At UNIPOOL, we believe in making every journey a little brighter. Our platform is designed for smart
                    commuters who value convenience, savings, and sustainability. Join the community that's transforming
                    the way the world moves.
                </p>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex justify-center items-center mb-5 md:mb-0">
                    <div className="h-[300px] md:h-[80%] flex items-center">
                        <img src={images[index]} className="h-full object-contain" alt={`Feature illustration ${index + 1}`} />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-5">
                    {
                        content.map((item, idx) => (
                            <FeatureCard 
                                key={idx} 
                                idx={idx} 
                                title={item.title} 
                                text={item.text} 
                                setIndex={setIndex} 
                                index={index} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
