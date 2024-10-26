/* eslint-disable no-unused-vars */
import React, {useContext, useState} from "react";
import './index.css'
import './Aboutus.css'
import { Eventcontext } from "../Components/Eventcontext";

import Pageheader from '../Components/Page-header'
import Navbar from "../Components/Navbar";
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
            <h3 className='list-container'>Events Competed in</h3>
            <ul className='list'>
                <li className='item'>Skystone</li>
                <li className='item'>Ultimate Goal</li>
                <li className='item'>Freight Frenzy</li>
                <li className='item'>POWERPLAY</li>
                <li className='item'>Centerstage</li>
            </ul>
            <div className='space'></div>
        </div>
        </>
    )
}