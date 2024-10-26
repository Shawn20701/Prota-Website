import './navbar.css' 
import { useContext } from 'react';
import { Eventcontext } from './Eventcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faVideo, faCalendarAlt, faBook} from '@fortawesome/free-solid-svg-icons';
import Toggle from './Toggle';
// eslint-disable-next-line react/prop-types
export const Navbar = ({onHoverChange}) => {
    const { toggleDarkMode } = useContext(Eventcontext);
    return (
        <>
        <div
            className='navbar-container'
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
        >
                <ui className='navbar-list'>
                    <li className='navbar-item'>
                        <FontAwesomeIcon className='icon'icon={faHome} color='purple'/>
                        <a className='navbar-button'href='/'>Home</a>
                    </li>
                    <li className='navbar-item'>
                        <FontAwesomeIcon className='icon' icon={faInfoCircle} color='purple'/>
                        <a className='navbar-button' href='/About-us'>About Us</a>
                    </li>
                    <li className='navbar-item'>
                        <FontAwesomeIcon className='icon' icon={faVideo} color='purple'/>
                        <a className='navbar-button' href='#'>Media</a>
                    </li>
                    <li className='navbar-item'>
                        <FontAwesomeIcon className='icon' icon={faCalendarAlt} color='purple'/>
                        <a className='navbar-button' href='/Calendar'>Calendar</a>
                    </li>
                    <li className='navbar-item'>
                        <FontAwesomeIcon className='icon' icon={faBook} color='purple' />
                        <a className='navbar-button' href='/about-us/Departments'>Departments</a>
                    </li>
                    <li className='navbar-item' onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
                    <Toggle />
                </li>
                </ui>
            </div>
        </>
    );
}

export default Navbar;