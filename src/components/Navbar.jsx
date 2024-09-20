import Logo_unipool from '../assets/Unipool_Logo.png'
import { NavLink } from 'react-router-dom'

export default function Navbar(){

    return (
        <nav className="flex px-20 py-7 justify-between h-[15%] items-center">
            <div className=" flex gap-16 items-center">
                <div className='flex items-center'>
                    <img src={Logo_unipool} className='w-20' />
                    <h1 className="font-bold text-3xl">Uni<span className="text-yellow-400">Pool</span></h1>
                </div>
                <ul className="flex gap-14 text-lg text-gray-600 ">
                    <NavLink  to='/' className={({isActive}) => isActive ? "navbar-active" : ""}>Home</NavLink>
                    <NavLink  to='/contact' className={({isActive}) => isActive ? "navbar-active" : ""}>Contact Us</NavLink>
                    <NavLink  to='/about' className={({isActive}) => isActive ? "navbar-active" : ""}>About Us</NavLink>
                    <NavLink  to='/services' className={({isActive}) => isActive ? "navbar-active" : ""}>Services</NavLink>
                </ul>
            </div>
            <div className="flex gap-3 items-center">
                <button>
                    <img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/50/instagram-new--v1.png" className='hover:scale-125' alt="instagram-new"/>
                </button>
                <button>
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/twitterx--v2.png" className='hover:scale-125' alt="facebook"/>
                </button>
                <button>
                    <img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/50/linkedin.png" alt="linkedin" className='hover:scale-125' />
                </button>
            </div>
        </nav>
    )
}