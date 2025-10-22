import { useState } from 'react'
import  './Departments.css'
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
    // Programming, Building, Design, Outreach, Strategy
    const [isNavbarHovered, setIsNavbarHovered] = useState(false);
    return (
        <>
        <MobileNavbar />
        <Navbar onHoverChange={setIsNavbarHovered}/>
        <div className={`Dept-Container ${isNavbarHovered ? 'navbar-hovered' : ''}`} data-theme={isdark ? "dark" : "light"} data-event={eventMode}>
            
            <Pageheader />
            <div className="Departments">
                <p id="Programming">Programming</p>
                <p id="Building">Building</p>
                <p id="Design">Design</p>
                <p id="Outreach">Outreach</p>
                <p id="Strategy">Strategy</p>
            </div>
        </div>
        </>
    );
}