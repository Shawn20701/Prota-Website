import { useState } from 'react'
import  './Departments.css'
import Github from '../assets/Github.svg'
import Java from '../assets/Java.svg'
import React from '../assets/React.svg'
import { useContext} from 'react'
import { Eventcontext } from '../Components/Eventcontext'
import '../css/event-themes.css'
import Pageheader from '../Components/Page-header'
import Navbar from '../Components/Navbar'
import './index.css'
import MobileNavbar from '../Components/MobileNavbar'
export default function Departments(){
    const {isdark, eventMode} = useContext(Eventcontext);
    // eslint-disable-next-line no-unused-vars
    const [isNavbarHovered, setIsNavbarHovered] = useState(false);
    return (
        <>
        <MobileNavbar />
        <Navbar onHoverChange={setIsNavbarHovered}/>
        <div className={`Dept-Container ${isNavbarHovered ? 'navbar-hovered' : ''}`} data-theme={isdark ? "dark" : "light"} data-event={eventMode}>
            
            <Pageheader />
            <div className='programming-container'>
                <div className='title-container'>
                    <h1 className='title'>Programming</h1>
                </div>
                <div className='subheader-container'>
                    <p className='content'>
                        Programming is an essential part of robotics. Programming is what makes the robot run. We use many programming languages in robotics including: Python, Javascript, and Java.  
                    </p>
                </div>
                <div className='img-container'>
                    <img id='Github-img' className='prg-img' src={Github} alt='Github' />
                    <img id='Java-img' className='prg-img' src={Java} alt='Java' />
                    <img id='React-img' className='prg-img' src={React} alt='React' />
                </div>
                <div className='sub-img-container'>
                    <p id='Github-img-text' className='sub-text'>Github is a application that allows developers to store, manage, and share code with others</p>
                    <p id='Java-img-text' className='sub-text'>Java is a high level object oriented language we use to code our robot</p>
                    <p id='React-img-text' className='sub-text'>React is a javascript library that is used to make web applications we used this to develop our website</p>
                </div>
                <p className='subheader-prg'>Resources and Projects</p>
                <a href='/betas/Pointcalculator' className='Programming-link'>Point Calculator/Tracker</a>
                <div className='title-container'>
                    <h1 className='title'>3D-Design</h1>
                </div>
                <div className='subheader-container'>
                    <p className='content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ad magni, inventore dolores animi aliquam excepturi perspiciatis a laborum doloremque, id dolorem ullam. Laudantium distinctio quas maxime, eos ab quibusdam.</p>
                </div>
                <div className='title-container'>
                    <h1 className='title'>Building</h1>
                </div>
                <div className='subheader-container'>
                    <p className='content'>Building is the most essential part of robotics. This is the main goal of the team is to build the actual robot.</p>
                </div>
                <div className='title-container'>
                    <h1 className='title'>Strategy</h1>
                </div>
                <div className='subheader-container'>
                    <p className='content'>The goal of the Prota strategic department is to make our robot and team as effective and efficient as possible</p>
                </div>
                <div className='title-container'>
                    <h1 className='title'>Outreach</h1>
                </div>
                <div className='subheader-container'>
                    <p className='content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ad magni, inventore dolores animi aliquam excepturi perspiciatis a laborum doloremque, id dolorem ullam. Laudantium distinctio quas maxime, eos ab quibusdam.</p>
                </div>
            </div>
        </div>
        </>
    );
}