import AboutUSImage from "../assets/AboutUSImage.jpg";

export default function About(){
    return (
        <div className="mt-16 px-4 md:px-8 w-full">
            <div className="flex flex-col md:flex-row md:pr-10">
                <div className="md:w-1/2 md:mr-10">
                    <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
                        <span className="text-black">We</span> are changing the way <br className="hidden md:block"/> people connect
                    </div>
                    <div className="mt-6 md:mt-12 text-base md:text-xl">
                        At Unipool, we are not just reshaping rural transportation we are revolutionizing how students connect, commute, and contribute to a more sustainable future. We are a passionate team committed to making your daily journeys seamless, affordable, and environmentally conscious.
                    </div>
                </div>
                <div className="flex-1 pt-0">
                    <img className="hover:scale-110 ease-in-out duration-300 w-full sm:w-auto" src={AboutUSImage} alt="Pool an Auto" />

                </div>
            </div>
        </div>
    )
}
