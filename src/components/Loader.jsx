import Loader_Video from "../assets/Loader_Video.mp4";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <video
        src={Loader_Video}
        autoPlay
        loop
        muted
        className="w-36"
      ></video>
    </div>
  );
}
