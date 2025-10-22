import { useState, useContext, useEffect, useRef } from "react"
import HiddenButton from "./HiddenButton";
import Tree from "./Tree";
import { Snowfall } from "react-snowfall";
import santa from '../assets/ff168b056f992b72f13ffb2245f76b4b.png'
import ghost from '../assets/ghost.jpeg'
import '../Routes/index.css'
import './Page-header.css'
import { Eventcontext } from "./Eventcontext";
import Hidden3 from "./hidden3";
function Pageheader(){
const CurrentColor = '#FFB3BA';
const [snowActive, setSnowActive] = useState(false); 
const [isSnowman, setIsSnowman] = useState(false);
const [istree, setistree] = useState(false);
const santaref = useRef(santa);
const {eventMode} = useContext(Eventcontext);
const color = useRef(CurrentColor);
const handleToggleSnowman = () => {
    setIsSnowman(prevState => !prevState);
    setSnowActive(prevState => !prevState);
  };
  const handleToggleTree = () => {
    setistree(prevState => !prevState);
  }
  useEffect(() => {
    if (eventMode === 'Winter'){
      setIsSnowman(true);
      setSnowActive(true);
      color.current = "#56cefeff";
    }
    else if (eventMode === 'Spooky'){
      santaref.current = ghost;
      color.current = "#ff0019ff";
    }
    else {
      santaref.current = santa;
      color.current = "#ffffffff";
    }
  }, [eventMode])
return(
    <div className="Pageheader">
       <img id='santa' src={santaref.current} data-santa={snowActive ? 'true' : 'false'} alt="Santa" className={`santa-image ${snowActive ? 'active' : 'inactive'}`} />
        <h1 className='Page-header'><Hidden3 />R<HiddenButton isSnowman={isSnowman} onToggle={handleToggleSnowman} /><Tree istree={istree} onToggle={handleToggleTree} />A 17222</h1>
        { (snowActive || eventMode === 'Winter') && ( <Snowfall snowflakeCount={isSnowman ? 400 : 150} color={color.current}  style={{position: 'fixed',width: '100vw',height: '100vh'} }/>)}
    </div>    
)
}
export default Pageheader;