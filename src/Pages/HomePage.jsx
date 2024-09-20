import { Navbar, BackgroundBoxesDemo, Footer, HeroSection, FeatureSection, ThirdSection, Testimonials } from '../components/components.js';



export default function HomePage() {
  return (
    <div className=''>
      <div className='px-20 h-[85%]'>
        <HeroSection/>
        <FeatureSection/>
        <ThirdSection />
        <Testimonials/>
      </div> 
    </div>
  );
}


