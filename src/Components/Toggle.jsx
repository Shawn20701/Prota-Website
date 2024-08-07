import { useContext } from 'react';
import './Toggle.css';
import { Eventcontext } from './Eventcontext';

export const Toggle = () => {
  const { isdark, toggleDarkMode } = useContext(Eventcontext);

  return (
    <div className='toggle-container'>
      <input
        type='checkbox'
        id='check'
        className='toggle'
        onChange={toggleDarkMode}
        checked={isdark}
      />
      <label htmlFor='check'>Dark Mode</label>
    </div>
  );
};

export default Toggle;
