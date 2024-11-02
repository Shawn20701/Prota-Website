import './navbar.css'; 
import { useContext } from 'react';
import { Eventcontext } from './Eventcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faVideo, faCalendarAlt, faBook } from '@fortawesome/free-solid-svg-icons';
import Toggle from './Toggle';
import '../css/event-themes.css';
import HalloweenToggle from './Halloween';

// eslint-disable-next-line react/prop-types
export const Navbar = ({ onHoverChange }) => {
    const { toggleDarkMode, HandleSpookyMode } = useContext(Eventcontext);
    return (
        <div
            className='navbar-container'
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
        >
            <ul className='navbar-list'>
                <li className='navbar-item' onClick={HandleSpookyMode}>
                    <HalloweenToggle />
                </li>
                <li className='navbar-item'>
                    <FontAwesomeIcon className='icon' icon={faHome} color='#FFB3BA' />
                    <a className='navbar-button' href='/'>Home</a>
                </li>
                <li className='navbar-item'>
                    <FontAwesomeIcon className='icon' icon={faInfoCircle} color='#FFB3BA' />
                    <a className='navbar-button' href='/About-us'>Info</a>
                </li>
                <li className='navbar-item'>
                    <FontAwesomeIcon className='icon' icon={faVideo} color='#FFB3BA' />
                    <a className='navbar-button' href='#'>Media</a>
                </li>
                <li className='navbar-item'>
                    <FontAwesomeIcon className='icon' icon={faCalendarAlt} color='#FFB3BA' />
                    <a className='navbar-button' href='/Calendar'>Calendar</a>
                </li>
                <li className='navbar-item'>
                    <FontAwesomeIcon className='icon' icon={faBook} color='#FFB3BA' />
                    <a className='navbar-button' href='/about-us/Departments'>Sections</a>
                </li>
                <li className='navbar-item' onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
                    <Toggle />
                </li>

            </ul>
        </div>
    );
}

export default Navbar;
