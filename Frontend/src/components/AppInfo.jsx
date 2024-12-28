export default function AppInfo() {
    return (
      <div className="p-10 md:p-20 flex flex-col gap-6 md:gap-10 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-lg md:rounded-full">
        <div>
          <h1 className="text-center text-3xl md:text-5xl font-semibold mb-4">Our Impact</h1>
          <p className="text-lg md:text-2xl w-full md:w-3/4 mx-auto text-gray-600 text-center">
            At UNIPOOL, we are transforming the way people commute by making carpooling convenient, cost-effective, and environmentally friendly. Here's how we're making a difference:
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center">
            <div className="w-36 h-36 md:w-52 md:h-52 bg-white rounded-full flex flex-col justify-evenly items-center p-4 md:p-6">
                <div>
                    <img width="40" height="40" src="https://img.icons8.com/pulsar-line/48/FAB005/taxi-app.png" alt="taxi-app"/>
                </div>
                <div>
                    <p className="text-center text-xl md:text-[140%] font-semibold">100+</p>
                    <p className="text-base md:text-[130%] text-center">Downloads</p>
                </div>
            </div>
            <div className="w-36 h-36 md:w-52 md:h-52 bg-white rounded-full flex flex-col justify-evenly items-center p-4 md:p-6">
                <div>
                    <img width="60" height="60" src="https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/FAB005/external-Verified-Drivers-taxi-service-glyph-silhouettes-icons-papa-vector.png" alt="external-Verified-Drivers-taxi-service-glyph-silhouettes-icons-papa-vector"/>
                </div>
                <div>
                    <p className="text-center text-xl md:text-[140%] font-semibold">50+</p>
                    <p className="text-base md:text-[130%] text-center">Drivers</p>
                </div>
            </div>
            <div className="w-36 h-36 md:w-52 md:h-52 bg-white rounded-full flex flex-col justify-evenly items-center p-4 md:p-6">
                <div>
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/FAB005/groups.png" alt="groups"/>
                </div>
                <div>
                    <p className="text-center text-xl md:text-[140%] font-semibold">50+</p>
                    <p className="text-base md:text-[130%] text-center">Customers</p>
                </div>
            </div>
        </div>
      </div>
    );
}
