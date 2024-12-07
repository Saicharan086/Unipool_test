function OurMission() {
    return (
        <div className="mt-36 px-6 md:px-20">
            <div className="relative -z-1 blur-xl w-32 h-32 bg-yellow-400 rounded-full mb-8 md:mb-0">
                {/* <img className="" src={Logo_unipool} alt="" /> */}
            </div>
            <div>
                <div className="text-3xl md:text-5xl font-bold">Our Mission</div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row">
                <div className="md:mr-10 md:w-8/12">
                    <p className="text-lg md:text-2xl mb-4">
                        Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
                    </p>
                    <p className="text-base md:text-xl mb-4">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                    </p>
                    <p className="text-base md:text-xl">
                        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                    </p>
                </div>
                <div className="mx-0 md:mx-10 mt-8 md:mt-0">
                    <div className="mb-6">
                        <div className="text-3xl md:text-5xl font-bold mb-3">44 million</div>
                        <div className="text-base md:text-xl">Transaction every 24 hours</div>
                    </div>
                    <div className="mb-6">
                        <div className="text-3xl md:text-5xl font-bold mb-3">$199 million</div>
                        <div className="text-base md:text-xl">Assets holding</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-5xl font-bold mb-3">46,000</div>
                        <div className="text-base md:text-xl">New users annually</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurMission;
