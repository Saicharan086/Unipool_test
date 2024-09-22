export default function AppInfo() {
    return (
      <div className="p-20 flex flex-col gap-10 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-full">
        <div>
          <h1 className="text-center text-5xl font-semibold mb-4">Our Impact</h1>
          <p className="text-2xl w-3/4 mx-auto text-gray-600 text-center">
            At UNIPOOL, we are transforming the way people commute by making carpooling convenient, cost-effective, and environmentally friendly. Here's how we're making a difference:
          </p>
        </div>
        <div className="flex gap-10 justify-center">
            <div className="w-52 h-52 bg-white rounded-full flex flex-col justify-evenly items-center p-6">
                <div>
                    <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/FAB005/taxi-app.png" alt="taxi-app"/>
                </div>
                <div>
                    <p className="text-center text-[140%] font-semibold">100+</p>
                    <p className="text-[130%] text-center">Downloads</p>
                </div>
            </div>
            <div className="w-52 h-52 bg-white rounded-full flex flex-col justify-evenly items-center p-6">
                <div>
                    <img width="78" height="78" src="https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/FAB005/external-Verified-Drivers-taxi-service-glyph-silhouettes-icons-papa-vector.png" alt="external-Verified-Drivers-taxi-service-glyph-silhouettes-icons-papa-vector"/>
                </div>
                <div>
                    <p className="text-center text-[140%] font-semibold">50+</p>
                    <p className="text-[130%] text-center">Drivers</p>
                </div>
            </div>
            <div className="w-52 h-52 bg-white rounded-full flex flex-col justify-evenly items-center p-6">
                <div>
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/FAB005/groups.png" alt="groups"/>
                </div>
                <div>
                    <p className="text-center text-[140%] font-semibold">50+</p>
                    <p className="text-[130%] text-center">Customers</p>
                </div>
            </div>

        </div>
      </div>
    );
  }
  