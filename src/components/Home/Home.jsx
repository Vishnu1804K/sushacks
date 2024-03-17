import React from 'react'
import './Home.css'
import SusHacks from '../../assets/susHacks.png'
// import {ReactComponent as SusHacks} from '../../assets/susHacks.svg'
import {ReactComponent as Start} from '../../assets/Start.svg'
import Crew from '../../assets/amongus-crew.png'
import Planet from '../../assets/planet.png'
// import {ReactComponent as Crew} from '../../assets/amongus-crew.svg'
// import {ReactComponent as Planet} from '../../assets/planet.svg'

const Home = () => {
return (
    <>
    <div id='home' className='home-container'>
            <div className='start'>
            <Start className="start-discord"/>
            <a href='#' className='discord-link'>DISCORD</a>
            </div>
            <img src={SusHacks} alt="susHacks" className="susHacks"/>
            <div className='start'>
            <Start className="start-devpost"/>
            <a href="#" className='devpost-link'>DEVPOST</a>
            </div>
    </div>
    <div className='home-about'>
        <div className='crew'>
         <img src={Crew} alt="susHacks" className="susHacks"/>
        </div>
        <div className='planet'>
         <img src={Planet} alt="planet" className="planet"/>
        </div>
    </div>
    </>
)
}

export default Home