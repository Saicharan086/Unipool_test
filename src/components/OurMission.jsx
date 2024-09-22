import { div } from "framer-motion/client";

function OurMission(){
    return (
        <div className="">
            <div className="-z-1 blur-xl w-32 h-32  bg-yellow-400 rounded-full ">
                {/* <img className="" src={Logo_unipool} alt="" /> */}
                
            </div>
            <div>
                <div className="text-5xl font-bold">Our Mission</div>
            </div>
            <div className="mt-6 flex">
                <div className="mr-10 w-8/12">
                    <p className="text-2xl mb-2">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
                    <p className="text-xl mb-2">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
                    <p className="">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
                </div>
                <div className="mx-10 ">
                    <div className="mb-6">
                        <div className="text-5xl font-bold mb-3">44 million</div>
                        <div className="text-xl">Transaction every 24 hours</div>
                    </div>
                    <div className="mb-6">
                        <div className="text-5xl font-bold mb-3">$199 million</div>
                        <div className="text-xl">Assets holding</div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold mb-3">46,000</div>
                        <div className="text-xl">New users anually</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMission;