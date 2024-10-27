// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Eventcontext } from './Eventcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost, faSnowman} from '@fortawesome/free-solid-svg-icons'; 

const HalloweenToggle = () => {
    // eslint-disable-next-line no-unused-vars
    const { isSpooky, handlespookymode, iswinter, handlewintermode } = useContext(Eventcontext);
    const currentMonth = new Date().getMonth();
    
    if (currentMonth === 9) {
        return (
            <div className='toggle-container' onClick={handlespookymode} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faGhost} className='icon' />
            </div>
        );
    }
    else if (currentMonth === 11) {
        return <div className='toggle-container' onClick={handlewintermode} style={{cursor: "pointer"}}>
            <FontAwesomeIcon icon={faSnowman} className='icon' />
        </div>
    } else {
        return null;
    }

};

export default HalloweenToggle;