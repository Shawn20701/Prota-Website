import { useState, useContext } from "react"
import HiddenButton from "./HiddenButton";
import Tree from "./Tree";
import { Snowfall } from "react-snowfall";
import santa from '../assets/ff168b056f992b72f13ffb2245f76b4b.png'
import '../Routes/index.css'
import './Page-header.css'
import { Eventcontext } from "./Eventcontext";
import Hidden3 from "./hidden3";
function Pageheader(){
const [snowActive, setSnowActive] = useState(false); 
const [isSnowman, setIsSnowman] = useState(false);
const [istree, setistree] = useState(false);
const {eventMode} = useContext(Eventcontext);
const handleToggleSnowman = () => {
    setIsSnowman(prevState => !prevState);
    setSnowActive(prevState => !prevState);
  };

  const handleToggleTree = () => {
    setistree(prevState => !prevState);
  }
return(
    <div className="Pageheader">
       <img id='santa' src={santa} data-santa={snowActive ? 'true' : 'false'} alt="Santa" className={`santa-image ${snowActive ? 'active' : 'inactive'}`} />
        <h1 className='Page-header'><Hidden3 />R<HiddenButton isSnowman={isSnowman} onToggle={handleToggleSnowman} /><Tree istree={istree} onToggle={handleToggleTree} />A 17222</h1>
        { (snowActive || eventMode === 'Winter') && ( <Snowfall snowflakeCount={isSnowman ? 400 : 150} style={{position: 'fixed',width: '100vw',height: '100vh'}}/>)}
    </div>    
)
}
export default Pageheader;