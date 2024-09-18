import { image, title } from 'framer-motion/client';
import {Cards} from './components.js';


export default function ThirdSection(){

    const d = [
        {
            title : "Set Your Schedule:",
            content : "Choose a ride that fits your time, or set up your own carpool.",
            image : "https://img.icons8.com/fluency-systems-filled/60/overtime.png"
        },
        {
            title : "Flexible Pricing:",
            content : "Pay only for the distance you travel.",
            image : "https://img.icons8.com/ios-glyphs/60/rupee.png"
        },
        {
            title : "Ride with Confidence:",
            content : "All drivers are verified, and every trip is insured.",
            image : "https://img.icons8.com/android/60/car.png"
        }
    ]

    return (
        <div className='px-20 py-20 flex flex-col gap-20'>
            <div className='text-center '>
                <h3 className='font-semibold text-5xl mb-6' >Carpool Your Way, on Your Terms</h3>
                <p className='text-2xl w-3/4 mx-auto text-gray-600' >Whether you're commuting to work, running errands, or heading out of town, UNIPOOL puts the power of carpooling in your hands.</p>
            </div>
            <div className='flex gap-14'>
                {
                    d.map((item, index) => <Cards title={item.title} content={item.content} key={index} src={item.image} /> )
                }
            </div>
        </div>
    )
}