// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Eventcontext } from './Eventcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost, faSnowman, faLeaf} from '@fortawesome/free-solid-svg-icons'; 

const HalloweenToggle = () => {
    const { setSpookyMode, setWinterMode, setFallMode } = useContext(Eventcontext);
    const currentMonth = new Date().getMonth();

    const monthIcons = {
        11: {
            icon: faSnowman,
            handler: setWinterMode,
        },
        10: {
            icon: faLeaf,
            handler: setFallMode,
        },
        9: {
            icon: faGhost,
            handler: setSpookyMode,
        },
    };

    const currentIcon = monthIcons[currentMonth];

    if (currentIcon) {
        return (
            <div
                className='toggle-container'
                onClick={currentIcon.handler}
                style={{ cursor: 'pointer' }}
            >
                <FontAwesomeIcon icon={currentIcon.icon} className='icon' />
            </div>
        );
    }

    return null;
};
export default HalloweenToggle;