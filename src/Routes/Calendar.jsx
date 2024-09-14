import CalendarComponent from '../Components/CalendarComponent';
import './Calendar.css';
import Toggle from '../Components/Toggle';
import { Eventcontext } from '../Components/Eventcontext';
import { useContext } from 'react';
import Pageheader from '../Components/Page-header';
export default function Calendar(){
    const {isdark} = useContext(Eventcontext);
    return (
        <>
            <div className='Calendar-container' data-theme={isdark ? "dark" : "light"}>
                <Pageheader />
                <div id='Calendar-dark-toggle'>
                    <Toggle />
                </div> 
                <h1 className='calendar-header'>PROTA 17222 TEAM CALENDAR</h1>
                <div id='Calendar'>
                    <CalendarComponent />
                </div>
            </div>
        </>
    )
}