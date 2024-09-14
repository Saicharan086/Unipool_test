import Logo_unipool from '../assets/Unipool_Logo.png'

export default function Navbar(){

    return (
        <nav className="flex px-20 py-7 justify-between h-[15%] items-center">
            <div className=" flex gap-16 items-center">
                <div className='flex items-center'>
                    <img src={Logo_unipool} className='w-20' />
                    <h1 className="font-bold text-3xl">Uni<span className="text-yellow-400">Pool</span></h1>
                </div>
                <ul className="flex gap-14 text-lg text-gray-600 ">
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="">
                <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-3 rounded-3xl font-semibold">Download the App</button>
            </div>
        </nav>
    )
}