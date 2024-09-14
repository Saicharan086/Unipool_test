import { Navbar, BackgroundBoxesDemo, Footer, HeroSection } from '../components/components.js';



export default function HomePage() {
  return (
    <div className='h-full'>
      <Navbar />
      <div className='h-[85%] flex px-20 justify-between items-center '>
        <HeroSection/>
      </div> 
      <Footer/>
    </div>
  );
}


