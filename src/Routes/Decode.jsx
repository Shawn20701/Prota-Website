import { useState } from 'react'
import { useContext} from 'react'
import { Eventcontext } from '../Components/Eventcontext'
import '../css/event-themes.css'
import Pageheader from '../Components/Page-header'
import Navbar from '../Components/Navbar'
import MobileNavbar from '../Components/MobileNavbar'
import './Decode.css'
export default function Decode(){
    const {isdark, eventMode} = useContext(Eventcontext);
    // eslint-disable-next-line no-unused-vars
    const [isNavbarHovered, setIsNavbarHovered] = useState(false);
    return (
        <>
        <MobileNavbar />
        <Navbar onHoverChange={setIsNavbarHovered}/>
        <div className={`Dept-Container ${isNavbarHovered ? 'navbar-hovered' : ''}`} data-theme={isdark ? "dark" : "light"} data-event={eventMode}>
            
            <Pageheader />
            <div className="body-content">
                <h1>Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo expedita assumenda. Aliquam ea adipisci natus autem accusamus cupiditate labore laudantium accusantium porro, esse ipsam exercitationem, error, itaque saepe impedit.</p>
                <h1>Prototypes</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facilis vitae sint ipsa atque a qui? Saepe, assumenda voluptatibus facere, cum ipsam laborum, voluptatem ex nesciunt libero beatae distinctio fugit!</p>
                <h1>Programming</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo reprehenderit at cupiditate? Reiciendis placeat numquam voluptatem reprehenderit veniam sunt sint ex, rem laboriosam laudantium ea eum velit, nulla molestias facilis.</p>
                <h1>Results</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe numquam, id praesentium quasi labore ipsam ut. Consequatur, sequi, laborum dicta ratione magni quod atque veritatis quia, id vel quas laudantium.</p>
            </div>
            <br></br>
        </div>
        </>
    );
}