
export default function About(){
    return (
        <div className="mt-16">
            <div className="flex pr-10 ">
                <div className="w-1/2 mr-10">
                    <div className="text-5xl font-bold text-yellow-400 mb-6">
                        <span className="text-black">We</span> are changing the way <br/>people connect
                    </div>
                    <div className="mt-12 text-2xl">
                    At Unipool, we are not just reshaping rural transportation we are revolutionizing how students connect, commute, and contribute to a more sustainable future. We are a passionate team committed to making your daily journeys seamless, affordable, and environmentally conscious.
                    </div>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-4 pt-10">  
                    <img className="hover:scale-110 ease-in-out duration-300  md:w-96" src="src\assets\Photo-1.png" alt="" />
                    <img className="hover:scale-110 ease-in-out duration-300  md:w-96" src="src\assets\Photo-2.png" alt="" />
                    <img className="hover:scale-110 ease-in-out duration-300  md:w-80" src="src\assets\Photo-3.png" alt="" />
                </div>
            </div>
        </div>
    )
}