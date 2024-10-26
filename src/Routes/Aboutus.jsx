/* eslint-disable no-unused-vars */
import React, {useContext, useState} from "react";
import './index.css'
import './Aboutus.css'
import { Eventcontext } from "../Components/Eventcontext";
import Pageheader from '../Components/Page-header'
import Navbar from "../Components/Navbar";
import ImageMap from "../Components/ImageComponent";
export default function Aboutus(){
    const [cursorStyle, setcursorStyle] = useState('default');
    const [isNavbarHovered, setIsNavbarHovered] = useState(false);
    const {isdark, isSpooky} = useContext(Eventcontext);
    const changeCursor = () => {
        setcursorStyle(prevStyle => prevStyle === 'default' ? 'custom' : 'default');
    };
    return (
        <>
        <Navbar onHoverChange={setIsNavbarHovered}/>
        <div className={`About-Us-Container ${cursorStyle} ${isNavbarHovered ? 'navbar-hovered' : ''}`} data-theme={isdark ? "dark" : "light"} data-event={isSpooky ? "Spooky" : ""}>
            <Pageheader />
            <h1 className='page-header'>We are team PROTA 172<h1 className='mobile-replace-button'>2</h1><button id='secretbutton'onClick={() => changeCursor()}>2</button>2</h1>
            <h2 id='page-subheader'>We are a First Tech Challenge team formed in 2019 we have since competed in various events</h2>
            <h2 className='Mission-statement'>Our Mission Statement</h2>
            <ul className="list-container">
                <li>Celebrate our Creator and the unique attributes each of our team members have</li>
                <li>Expect Gracious Professionalism from our members</li>
                <li>Learn to design and implement current technology</li>
                <li>Improve STEAM connections and opportunities in our larger community</li>
                <li>Understand and practice discernment with technology usage</li>
            </ul>
        </div>
        <ImageMap />
        <div className="space"></div>
        </>
    )
}