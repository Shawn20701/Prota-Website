/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import './index.css'
import './Aboutus.css'
export default function Aboutus(){
    const [cursorStyle, setcursorStyle] = useState('default')
    const changeCursor = () => {
        setcursorStyle(prevStyle => prevStyle === 'default' ? 'custom' : 'default');
    };
    return (
        <div className={`About-Us-Container ${cursorStyle}`}> 
            <h1 className='page-header'>We are team PROTA 172<button id='secretbutton'onClick={() => changeCursor()}>2</button>2</h1>
            <h2 id='page-subheader'>We are a First Tech Challenge team formed in 2019 we have since competed in various events</h2>
            <h3 className='list-container'>Events Competed in</h3>
            <ul className='list'>
                <li className='item'>Skystone</li>
                <li className='item'>Ultimate Goal</li>
                <li className='item'>Freight Frenzy</li>
                <li className='item'>POWERPLAY</li>
                <li className='item'>Centerstage</li>
            </ul>
            <h1 className='page-header'><button id='Department-Button'><a href='/About-us/Programming'>Our Departments</a></button></h1>
            <div className='space'></div>
        </div>
    )
}