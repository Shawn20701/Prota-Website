// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Eventcontext } from './Eventcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost} from '@fortawesome/free-solid-svg-icons'; 

const HalloweenToggle = () => {
    // eslint-disable-next-line no-unused-vars
    const { isSpooky, handlespookymode } = useContext(Eventcontext);

    return (
        <div className='toggle-container' onClick={handlespookymode} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faGhost} className='icon' />
        </div>
    );
};

export default HalloweenToggle;