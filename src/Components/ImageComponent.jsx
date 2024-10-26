import { useState } from "react";
import './ImageComponent.css'
import CenterRage from '../assets/CenterRage.jpg'
import teamphoto from '../assets/Team-Photo.JPG'
import Award from '../assets/Award.jpg'
import hishavenphoto from '../assets/His-Haven-Photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const ImageMap = () => {
    const contentMap = {
        1: {
            image: teamphoto
        },
        2: {
            image: CenterRage
        },
        3: {
            image: Award
        },
        4: {
            image: hishavenphoto
        },
    };

    const keys = Object.keys(contentMap);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % keys.length);
        console.log(currentIndex);
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + keys.length) % keys.length);
        console.log(currentIndex);
    };

    return (
        <div className="container">
            <button className="button" onClick={prevItem} disabled={currentIndex === 0}>
            <FontAwesomeIcon icon={faArrowLeft} className="icon"/>
        </button>
        <img
        src={contentMap[keys[currentIndex]].image}
        alt={`Content ${keys[currentIndex]}`}
        className="image"
        />
        <button className="button" onClick={nextItem} disabled={currentIndex === keys.length - 1}>
            <FontAwesomeIcon icon={faArrowRight} className="icon"/>
        </button>
</div>
    );
};

export default ImageMap;