import CalendarComponent from '../Components/CalendarComponent';
import './Calendar.css';
import { useState } from 'react';
import { Eventcontext } from '../Components/Eventcontext';
import { useContext } from 'react';
import Pageheader from '../Components/Page-header';
import Navbar from '../Components/Navbar';
export default function Calendar(){
    const {isdark, eventMode} = useContext(Eventcontext);
    // eslint-disable-next-line no-unused-vars
    const [isNavbarHovered, setIsNavbarHovered] = useState(false);
    return (
        <>
            <Navbar onHoverChange={setIsNavbarHovered}/>
            <div className={`Calendar-container ${isNavbarHovered ? 'navbar-hovered' : ''}`} data-theme={isdark ? "dark" : "light"} data-event={eventMode}>
                <Pageheader />
                <div id='Calendar'>
                    <CalendarComponent />
                </div>
            </div>
        </>
    )
}