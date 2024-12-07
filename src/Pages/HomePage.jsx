import { HeroSection, FeatureSection, ThirdSection, Testimonials, AppInfo } from '../components/components.js';


export default function HomePage() {
  return (
    <div className=''>
      <div className='px-20 max-md:px-0'>
        <HeroSection/>
        <FeatureSection/>
        <ThirdSection />
        <AppInfo/>
        <Testimonials/>
      </div> 
    </div>
  );
}


