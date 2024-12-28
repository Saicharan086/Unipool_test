import React from "react";
import StickyScroll from "../components/StickyScroll.jsx";
import img1 from "../assets/community_powered.png"
import img2 from "../assets/autopic.png"
import img3 from "../assets/ecotravel.png"
import img4 from "../assets/wallet.png"
 
const content = [
    {
      title: "Community-Powered Rides",
      description:
        "Join a student-driven initiative for affordable, sustainable transportation. Our auto-sharing service connects students and commuters, making it easy to travel together while reducing costs and environmental impact.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={img1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Community-Powered Rides Demo"
        />
      </div>
      ),
    },
    {
      title: "Real-Time Ride Matching",
      description:
        "No more waiting! Our platform uses real-time algorithms to match you with the nearest ride. Whether you're headed to class, work, or a hangout, we've got you covered instantly.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={img2}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Real-Time Ride Matching Demo"
          />
        </div>
      ),
    },
    {
      title: "Eco-Friendly Travel",
      description:
        "Reduce your carbon footprint with our eco-friendly auto-sharing solution. By optimizing routes and sharing rides, we help minimize emissions and promote a greener campus and community.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={img3}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Eco-Friendly Travel Demo"
          />
        </div>
      ),
    },
    {
      title: "Affordable and Accessible",
      description:
        "Designed by students, for students. Our service ensures that transportation is budget-friendly and accessible to everyone. Say goodbye to expensive rides and hello to convenience at your fingertips.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={img4}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Affordable and Accessible Demo"
          />
        </div>
      ),
    },  
];

function ServicesPage() {
  return (
    <div className="p-10">
      <StickyScroll content={content}/>
    </div>
  );
}


export default ServicesPage
