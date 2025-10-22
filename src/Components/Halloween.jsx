// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Eventcontext } from './Eventcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost, faSnowman, faFootball, faHeart} from '@fortawesome/free-solid-svg-icons'; 

const HalloweenToggle = () => {
    const { setSpookyMode, setWinterMode, setFallMode,  setValentinesDayMode } = useContext(Eventcontext);
    const currentMonth = new Date().getMonth();
/* Months start at 0 and not 1 for some reason */
    const monthIcons = {
        11: { /* December */
            icon: faSnowman,
            handler: setWinterMode,
        },
        10: { /* November */
            icon: faFootball,
            handler: setFallMode,
        },
        9: { /* October */
            icon: faGhost,
            handler: setSpookyMode,
        },
        8: { /* September */
            icon: faFootball,
            handler: setFallMode,
        },
        0: { /* January */
            icon: faSnowman,
            handler: setWinterMode,
        },
        1: { /* Febuary */
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