import {About, OurMission, TeamPage, Values} from '../components/components';

export default function AboutUsPage(){

    return (
        <div>
            <div className=''>
                <About/>
                <OurMission/>
                <Values/>
                <TeamPage />
            </div>
        </div>
    )
}