import './navbar.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faVideo, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line react/prop-types
export const Navbar = ({onHoverChange}) => {
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
                </ui>
            </div>
        </>
    );
}

export default Navbar;