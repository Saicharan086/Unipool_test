import Loader_Video from "../assets/Loader_Video.mp4";
import Unipool_Logo from "../assets/Unipool_Logo.png";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <video className="w-36" loading="lazy" muted="muted" src="https://cdnl.iconscout.com/lottie/premium/thumb/tuk-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--rickshaw-transport-vehicle-transportation-auto-pack-icons-5561797.mp4" type="video/mp4" autoplay="autoplay" loop="loop" height="100px"></video>
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
