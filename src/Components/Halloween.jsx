// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Eventcontext } from './Eventcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost, faSnowman, faFootball, faGift, faHeart} from '@fortawesome/free-solid-svg-icons'; 

const HalloweenToggle = () => {
    const { setSpookyMode, setWinterMode, setFallMode, setNewYearsMode, setValentinesDayMode } = useContext(Eventcontext);
    const currentMonth = new Date().getMonth();

    const monthIcons = {
        11: {
            icon: faSnowman,
            handler: setWinterMode,
        },
        10: {
            icon: faFootball,
            handler: setFallMode,
        },
        9: {
            icon: faGhost,
            handler: setSpookyMode,
        },
        0: {
            icon: faGift,
            handler: setNewYearsMode,
        },
        1: {
            icon: faHeart,
            handler: setValentinesDayMode,
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