import './index.css'
import { useState, useContext} from 'react'
import teamphoto from '../assets/Team-Photo.JPG'
import hishavenphoto from '../assets/His-Haven-Photo.jpg'
import '../css/event-themes.css'
import Navbar from '../Components/Navbar'
import Subheader from '../Components/subheader'
import { Eventcontext } from '../Components/Eventcontext'
import Pageheader from '../Components/Page-header'
import MobileNavbar from '../Components/MobileNavbar'
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
      
Our mission is to celebrate our Creator and team diversity, promote gracious professionalism and STEAM in our community, and practice discernment in technology use.
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

  const [hidden, sethidden] = useState(1)
  const [istransitioning, setistransitioning] = useState(false)
  const {isdark, eventMode} = useContext(Eventcontext);
  // eslint-disable-next-line no-unused-vars
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);

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

  return (
    <>
      <MobileNavbar />
      <Navbar onHoverChange={setIsNavbarHovered}/>
      <div className={`App ${isNavbarHovered ? 'navbar-hovered' : ''}`} data-theme={isdark ? "dark" : "light"} data-event={eventMode}>
      <Pageheader />
      <br></br>
      <br></br>
      <br></br>
      <Subheader handleChangeContent={handleChangeContent}/>
      <p className={`Content-1 content-transition ${istransitioning ? 'istransitioning' : ''}`}>{contentMap[hidden]}</p>
      <div className='images-main-page'>
        <img id='main-page-img'className={`image-transition ${istransitioning ? 'istransitioning' : ''}`}src={(imageMap[hidden])} alt='Picture of our team at various events and gatherings'></img>
      </div>
      
    </div>
    </>
  );
}
export default App
