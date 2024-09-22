import {About, OurMission, TeamPage, Values} from '../components/components';

export default function AboutUsPage(){

    return (
        <div>
            <div className='px-20'>
                <About/>
                <OurMission/>
                <Values/>
                <TeamPage />
            </div>
        </div>
    )
}