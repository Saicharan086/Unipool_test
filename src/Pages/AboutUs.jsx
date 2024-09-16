import { About, Footer, Navbar } from "../components/components";
import TeamPage from "../components/TeamPage";

function AboutUs() {
  return (
    <div className="selection:bg-yellow-300 selection:text-zinc-50">
        <Navbar/>
      <div className="min-h-screen px-20 py-20 ">
        <About />
      </div>
      <div className="min-h-screen px-20 mb-10">
        <TeamPage />
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
