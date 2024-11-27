import './navbar.css'; 
import { useContext } from 'react';
import { Eventcontext } from './Eventcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCalendarAlt, faBook } from '@fortawesome/free-solid-svg-icons';
import Toggle from './Toggle';
import '../css/event-themes.css';
import HalloweenToggle from './Halloween';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const Navbar = ({ onHoverChange }) => {
    const { toggleDarkMode, HandleSpookyMode } = useContext(Eventcontext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
      };
    return (
        <div>
        <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
        </div>
        <div
            className={`navbar-container ${isMenuOpen ? 'open' : ''}`}
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
        >
            <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
                <li className='navbar-item' onClick={HandleSpookyMode}>
                    <HalloweenToggle />
                </li>
                <li className='navbar-item'>
                    <button className='icon-button' onClick={() => window.location.href = '/'}>
                    <FontAwesomeIcon className="icon" icon={faHome} color="#FFB3BA" />
                    </button>
                    <a href='/' className='navbar-button'>Home</a>
                </li>
                <li className='navbar-item'>
                <button className='icon-button' onClick={() => window.location.href = '/About-us'} >
                    <FontAwesomeIcon className="icon" icon={faInfoCircle} color="#FFB3BA" />
                    </button>
                    <a className='navbar-button' href='/About-us'>Info</a>
                </li>
                <li className='navbar-item'>
                <button className='icon-button' onClick={() => window.location.href = '/Calendar'} >
                    <FontAwesomeIcon className="icon" icon={faCalendarAlt} color="#FFB3BA" />
                    </button>
                    <a className='navbar-button' href='/Calendar'>Calendar</a>
                </li>
                <li className='navbar-item'>
                <button className='icon-button' onClick={() => window.location.href = '/about-us/Departments'}>
                    <FontAwesomeIcon className="icon" icon={faBook} color="#FFB3BA" />
                    </button>
                    <a className='navbar-button' href='/about-us/Departments'>Sections</a>
                </li>
                <li className='navbar-item' onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
                    <Toggle />
                </li>

            </ul>
        </div>
        </div>
    );
}

export default Navbar;
