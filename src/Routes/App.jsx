import './index.css'
import { useState, useContext } from 'react'
import teamphoto from '../assets/Team-Photo.JPG'
import hishavenphoto from '../assets/His-Haven-Photo.jpg'
import { Snowfall } from 'react-snowfall'
import {Toggle} from '../Components/Toggle'
import HiddenButton from '../Components/HiddenButton'
import Tree from '../Components/Tree'
import santa from '../assets/ff168b056f992b72f13ffb2245f76b4b.png'
import Halloweendecor from '../Components/Halloween'
import '../css/event-themes.css'
import Navbar from '../Components/Navbar'
import Subheader from '../Components/subheader'
import { Eventcontext } from '../Components/Eventcontext'
const contentMap = {
  1: (
    <>
      We are a high school robotics team based out of{' '}
      <a className='inserted-link' href='https://www.ttcany.org/'>
        Twin Tiers Christian Academy
      </a>{' '}
      in Breesport, NY.
    </>
  ),
  2: (
    <>
      Our mission is to spread the gospel and to also spread the {''}<a className='inserted-link' href='https://www.firstinspires.org/robotics/ftc'>FIRST Tech Challenge</a> and robotics in general to our community.
    </>
  ),
  3: (
    <>
    Our most recent event was the{' '}<a className='inserted-link' href='https://firstroboticsbc.org/ftc/centerstage-season/'>2023-2024 Centerstage challenge.</a>
    </>
  ),
  4: (
    <>
      Our team recently went to{' '}
      <a className='inserted-link' href='https://hishaven.org/'>
        His Haven
      </a>{' '}
      to help teach kids how to build LEGO robots.
    </>
  ),
  default: (
    <>
      We are a high school robotics team based out of{' '}
      <a className='inserted-link' href='https://www.ttcany.org/'>
        Twin Tiers Christian Academy
      </a>{' '}
      in Breesport, NY.
    </>
  )
};
const imageMap = {
  1: (
    teamphoto
  ),
  2: (
    teamphoto
  ),
  3: (
    teamphoto
  ),
  4: (
    hishavenphoto
  ),
  default: (
    teamphoto
  )
}
  
function App() {
  const [opacitypercent, setopacitypercent] = useState(0)
  const [visible, setvisibility] = useState('absolute')
  const [hidden, sethidden] = useState(1)
  const [istransitioning, setistransitioning] = useState(false)
  const [snowActive, setSnowActive] = useState(false); 
  const [isSnowman, setIsSnowman] = useState(false);
  const [istree, setistree] = useState(false);
  const [isSpooky, setisSpooky] = useState(false);
  const [randomnumber, setrandomnumber] = useState(0);
  const [previousNumber, setPreviousNumber] = useState(null);
  const {isdark} = useContext(Eventcontext);
  const handlemouseover = () =>{
    setopacitypercent(100)
    setvisibility('static')
  }
  const handlemouseleave = () =>{
    setopacitypercent(0)
    setvisibility('absolute')
  }
  const handleChangeContent = (newHidden) => {
    if (newHidden !== hidden) {
      setistransitioning(true);
      setTimeout(() => {
        sethidden(newHidden);
        setistransitioning(false);
        console.log(hidden);
      }, 500); 
    }
  };
  const handleToggleSnowman = () => {
    setIsSnowman(prevState => !prevState);
    setSnowActive(!snowActive);
  };
  const handleToggleTree = () => {
    setistree(prevState => !prevState);
  }
  const getRandomInteger = (min, max) => {
    let newNumber;
    do {
      newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (newNumber === previousNumber);
    setPreviousNumber(newNumber);
    return newNumber;
  }
  const handlespookymode = () => {
    setisSpooky(!isSpooky);
    const newNumber = getRandomInteger(1,5);
    setrandomnumber(newNumber);
  }
  return (
      <div className='App' data-theme={isdark ? "dark" : "light"} data-event={isSpooky ? "Spooky" : ""} data-num={randomnumber}>
        <img id='santa' src={santa} data-santa={snowActive ? 'true' : 'false'}/>
        <Toggle />
      <Halloweendecor 
      isSpooky={isSpooky}
      handleSpooky={() => handlespookymode()}
      />
      <br></br>
      <br></br>
      <Navbar />
      <h1 className='Page-header' onMouseOver={handlemouseover} onMouseLeave={handlemouseleave}>PR<HiddenButton isSnowman={isSnowman} onToggle={handleToggleSnowman} /><Tree istree={istree} onToggle={handleToggleTree} />A 17222</h1>
      <div className='fun-fact' style={{opacity: opacitypercent / 100, position:visible}}>PROTA means first in greek</div>
      <br></br>
      <Subheader handleChangeContent={handleChangeContent}/>
      <p className={`Content-1 content-transition ${istransitioning ? 'istransitioning' : ''}`}>{contentMap[hidden]}</p>
      <div className='images-main-page'>
        <img id='main-page-img'className={`image-transition ${istransitioning ? 'istransitioning' : ''}`}src={(imageMap[hidden])}></img>
      </div>
      {snowActive && <Snowfall snowflakeCount="450" style={{position: 'fixed',width: '100vw',height: '100vh'}}/>}
    </div>
  );
}
export default App
