import { useState } from 'react';
import Logo_unipool from '../assets/Unipool_Logo.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex px-6 md:px-20 py-5 justify-between items-center">
            {/* Logo and Brand */}
            <div className="flex items-center gap-4">
                <img src={Logo_unipool} className="w-12 md:w-20" alt="UniPool Logo" />
                <h1 className="font-bold text-2xl md:text-3xl">Uni<span className="text-yellow-400">Pool</span></h1>
            </div>

            {/* Menu Button for Mobile */}
            <div className="md:hidden">
                <button onClick={toggleSidebar} className="focus:outline-none">
                    <img src="https://img.icons8.com/ios-glyphs/30/menu--v1.png" alt="menu icon" />
                </button>
            </div>

            {/* Links for Larger Screens */}
            <ul className="hidden md:flex gap-8 text-lg text-gray-600">
                <NavLink to="/" className={({ isActive }) => isActive ? "navbar-active" : ""}>Home</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-active" : ""}>Contact Us</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "navbar-active" : ""}>About Us</NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? "navbar-active" : ""}>Services</NavLink>
            </ul>

            {/* Social Icons */}
            <div className="hidden md:flex gap-3 items-center">
                <button><img width="24" src="https://img.icons8.com/fluency-systems-regular/50/instagram-new--v1.png" alt="Instagram" /></button>
                <button><img width="24" src="https://img.icons8.com/ios-glyphs/30/twitterx--v2.png" alt="Twitter" /></button>
                <button><img width="24" src="https://img.icons8.com/fluency-systems-regular/50/linkedin.png" alt="LinkedIn" /></button>
            </div>

            {/* Sidebar for Mobile */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}>
                    <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6 space-y-6">
                        {/* Close Button */}
                        <button onClick={toggleSidebar} className="self-end focus:outline-none">
                            <img src="https://img.icons8.com/ios-glyphs/30/macos-close.png" alt="close menu" />
                        </button>

                        {/* Navigation Links */}
                        <NavLink to="/" className="text-lg text-gray-600" onClick={toggleSidebar}>Home</NavLink>
                        <NavLink to="/contact" className="text-lg text-gray-600" onClick={toggleSidebar}>Contact Us</NavLink>
                        <NavLink to="/about" className="text-lg text-gray-600" onClick={toggleSidebar}>About Us</NavLink>
                        <NavLink to="/services" className="text-lg text-gray-600" onClick={toggleSidebar}>Services</NavLink>

                        {/* Social Media Links */}
                        <div className="flex gap-3 mt-auto">
                            <button><img width="24" src="https://img.icons8.com/fluency-systems-regular/50/instagram-new--v1.png" alt="Instagram" /></button>
                            <button><img width="24" src="https://img.icons8.com/ios-glyphs/30/twitterx--v2.png" alt="Twitter" /></button>
                            <button><img width="24" src="https://img.icons8.com/fluency-systems-regular/50/linkedin.png" alt="LinkedIn" /></button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
