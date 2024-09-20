import Loader_Video from "../assets/Loader_Video.mp4";
import Unipool_Logo from "../assets/Unipool_Logo.png";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <video
        src={Loader_Video}
        autoPlay
        loop
        muted
        className="w-36"
      ></video>
      <div className="flex absolute bottom-24 items-center">
        <div>
          <img src={Unipool_Logo} className="w-16" />
        </div>
        <div>
          <h1 className="font-bold text-3xl">Uni<span className="text-yellow-500">pool</span></h1>
          <p className="text-sm text-gray-400">Ride Together, Share Together</p>
        </div>
      </div>
    </div>
  );
}
