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
            <h1 className='page-header'>Our Departments</h1>
            <ul className='list'>
                <li className='item'><a className='item' href='/About-us/Programming'>Programming</a></li>
                <li className='item'><a className='item' href='/About-us/3D-Design'>3D-Design</a></li>
                <li className='item'><a className='item' href='/About-us/Strategy'>Strategy</a></li>
                <li className='item'><a className='item' href='/About-us/Building'>Building</a></li>
                <li className='item'><a className='item' href='/About-us/Outreach'>Outreach</a></li>
            </ul>
            <div className='space'></div>
        </div>
    )
}