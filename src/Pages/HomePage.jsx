import { Navbar, BackgroundBoxesDemo, Footer, HeroSection, FeatureSection } from '../components/components.js';



export default function HomePage() {
  return (
    <div className=''>
      <Navbar />
      <div className='px-20 h-[85%]'>
        <HeroSection/>
        <FeatureSection/>
      </div> 
      <Footer/>
    </div>
  );
}


