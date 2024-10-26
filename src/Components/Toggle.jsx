import { useContext } from 'react';
import './Toggle.css';
import { Eventcontext } from './Eventcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export const Toggle = () => {
  const { isdark, toggleDarkMode } = useContext(Eventcontext);

  return (
    <div className='toggle-container' onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
      <FontAwesomeIcon icon={isdark ? faSun : faMoon} className='icon' />
    </div>
  );
};

export default Toggle;
