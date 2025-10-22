import './MobileNavbar.css';
import './navbar.css' 
import { useContext } from 'react';
import { Eventcontext } from './Eventcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCalendarAlt, faBook } from '@fortawesome/free-solid-svg-icons';
import Toggle from './Toggle';
import '../css/event-themes.css';
import HalloweenToggle from './Halloween';
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
export const MobileNavbar = () => {
    const { toggleDarkMode, HandleSpookyMode } = useContext(Eventcontext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
      };
    return (
        <div>
        <div className={`mobile-navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        &#9776;
        </div>
        <div className={`mobile-navbar-container ${isMenuOpen ? 'open' : ''}`}>
            <ul className={`mobile-navbar-list ${isMenuOpen ? 'open' : ''}`}>
                <li className='mobile-navbar-item' onClick={HandleSpookyMode}>
                    <HalloweenToggle />
                </li>
                <li className='mobile-navbar-item'>
                    <FontAwesomeIcon className='icon' icon={faHome} color='#FFB3BA' />
                    <a className='mobile-navbar-button' href='/'>Home</a>
                </li>
                <li className='mobile-navbar-item'>
                    <FontAwesomeIcon className='icon' icon={faInfoCircle} color='#FFB3BA' />
                    <a className='mobile-navbar-button' href='/About-us'>Info</a>
                </li>
                <li className='mobile-navbar-item'>
                    <FontAwesomeIcon className='icon' icon={faCalendarAlt} color='#FFB3BA' />
                    <a className='mobile-navbar-button' href='/Calendar'>Calendar</a>
                </li>
                <li className='mobile-navbar-item'>
                    <FontAwesomeIcon className='icon' icon={faBook} color='#FFB3BA' />
                    <a className='mobile-navbar-button' href='/about-us/Departments'>Sections</a>
                </li>
                <li className='mobile-navbar-item' onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
                    <Toggle />
                </li>
            </ul>
        </div>
        </div>
    );
}

export default MobileNavbar;
