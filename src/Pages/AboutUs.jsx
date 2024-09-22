import { About, Footer, Navbar, OurMission, TeamPage, Values } from "../components/components";

function AboutUs() {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen px-20 py-20 ">
        <About />
      </div>
      <div className="min-h-screen px-20 mb-10">
        <OurMission/>
      </div>
      <div className="min-h-screen px-20 mb-10">
        <Values/>
      </div>
      <div className="min-h-screen px-20 mb-10">
        <TeamPage />
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
