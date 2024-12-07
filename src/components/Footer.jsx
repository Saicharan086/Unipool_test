import { Link } from "react-router-dom";
import Logo_unipool from "../assets/Unipool_Logo.png";
import QR from '../assets/QR_Code.jpeg';

export default function Footer() {
    return (
        <footer className="px-5 py-10 rounded-t-3xl bg-black text-white md:px-20">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex gap-10 flex-col">
                    <div className="flex gap-6 items-center">
                        <div>
                            <img src={Logo_unipool} className="w-20 scale-125" alt="Unipool Logo" />
                        </div>
                        <div>
                            <p className="text-2xl font-medium">Uni<span className="text-yellow-400">pool</span></p>
                            <p className="text-lg text-white">Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl font-medium text-yellow-400">Pages</h4>
                            <Link to='/' className="text-lg font-light hover:text-yellow-300">Home</Link>
                            <Link to='/services' className="text-lg font-light hover:text-yellow-300">Services</Link>
                            <Link to='/contact' className="text-lg font-light hover:text-yellow-300">Contact Us</Link>
                            <Link to='/about' className="text-lg font-light hover:text-yellow-300">About Us</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl font-medium text-yellow-400">Support</h4>
                            <Link className="text-lg font-light hover:text-yellow-300">FAQ</Link>
                            <Link className="text-lg font-light hover:text-yellow-300">Contact Us</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl font-medium text-yellow-400">Company Policy</h4>
                            <Link className="text-lg font-light hover:text-yellow-300">Terms & Conditions</Link>
                            <Link className="text-lg font-light hover:text-yellow-300">Refund & Cancellation Policy</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center rounded-lg px-4 py-2 mt-8 md:mt-0 md:flex-row">
                    <div>
                        <img src={QR} className="w-28" alt="QR Code" />
                    </div>
                    <span className="ml-4">
                        <p className="inline font-medium text-xl">Download the app</p><br />
                        <p className="inline text-wrap w-full md:w-2/3 text-white/80">Scan the QR code to download the app <br />from the store</p>
                    </span>
                </div>
            </div>
            <hr className="my-9 border border-gray-600" />
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                    <p className="text-white/80">© Copyright 2024. All rights reserved.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
                    <input className="w-full md:w-60 px-3 py-2 rounded-lg mx-2 outline-none" type="text" placeholder="Email Address" />
                    <button className="bg-yellow-500 rounded-md p-2 mx-2 text-black font-medium">Subscribe</button>
                </div>
            </div>
        </footer>
    );
}
