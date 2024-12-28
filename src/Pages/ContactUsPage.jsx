
export default function ContactUsPage() {

    return (
        <div className="bg-gray-200">
            <section className="pt-16 pb-12 relative">
                <div className="absolute top-0 left-0 w-full h-60 bg-white rounded-b-[25%]">
                    <div className="container mx-auto text-center mt-8">
                        <br></br>
                        <h1 className="text-5xl transition duration-700 ease-in-out font-bold hover:-translate-y-2 hover:scale-110">
                            Contact <span className="text-yellow-500">Us</span>
                        </h1>
                        <p className="text-gray-700 mt-4 transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
                            Speak with us about our seamless communication and global impact.
                        </p>
                    </div>
                </div>
            </section>
            <br></br><br></br><br></br><br></br><br></br><br></br>

            <main className="container mx-auto py-16 px-0 md:flex gap-10">
                <div className="md:w-2/5 py-8 max-md:px-6" >
                    <h2 className="text-xl font-bold mb-4 ">Get in touch</h2>
                    <h3 className="text-yellow-500 text-4xl font-bold mb-4 ">
                        Seamless Communication, Global Impact.
                    </h3>
                    <p className="text-gray-700 ">
                        We look forward to hearing from you! We can assist with inquiries about
                        our offerings, project discussions, or even just providing guidance on
                        your digital strategy.
                    </p> 
                    <hr className="border-gray-400 my-7" />
                    <div className="">
                        <div className="flex h-20 gap-4 items-center">
                            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center" >
                                <img src="https://img.icons8.com/?size=100&id=86840&format=png&color=000000" className="w-10" />
                            </div>
                            <div className="">
                                <p className="font-medium">EMAIL SUPPORT</p>
                                <p className="font-semibold">contact@unipool.in</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 rounded-lg shadow-md bg-white">
                    <h2 className="text-4xl font-bold mb-4 ">Send us a message</h2>
                    <p className="text-yellow-500 font-medium mb-6 ">
                        Please feel free to send us any questions, feedback, or suggestions you might have.
                    </p>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label
                                    for="name"
                                    className="block font-medium text-gray-700 mb-1"
                                >
                                    NAME
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="border-b-2 px-3 py-2 outline-none w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                            <div>
                                <label
                                    for="email"
                                    className="block font-medium mb-1 "
                                >
                                    EMAIL
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="border-b-2 px-3 py-2 outline-none w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label
                                    for="phone"
                                    className="block font-medium text-gray-700 mb-1"
                                >
                                    PHONE NUMBER
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Your Phone Number"
                                    className="border-b-2 px-3 py-2 outline-none w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                            <div>
                                <label
                                    for="subject"
                                    className="block font-medium text-gray-700 mb-1"
                                >
                                    SUBJECT
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Your Subject"
                                    className="border-b-2 px-3 py-2 outline-none w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                for="message"
                                className="block font-medium text-gray-700 mb-1"
                            >
                                YOUR MESSAGE
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Your Message"
                                className="border-b-2 px-3 py-2 outline-none w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-black font-medium mt-3 py-2 px-4 rounded-lg"
                        >
                            Submit
                        </button>
                    </form>

                </div>
            </main>
        </div>
    )
}