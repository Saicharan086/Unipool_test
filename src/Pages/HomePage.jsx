import { HeroSection, FeatureSection, ThirdSection, Testimonials, AppInfo } from '../components/components.js';



export default function HomePage() {
  return (
    <div className=''>
      <div className='px-20'>
        <HeroSection/>
        <FeatureSection/>
        <ThirdSection />
        <AppInfo/>
        <Testimonials/>
      </div> 
    </div>
  );
}


