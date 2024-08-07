import  './Departments.css'
import Github from '../assets/Github.svg'
import Java from '../assets/Java.svg'
import React from '../assets/React.svg'
import { useContext } from 'react'
import { Eventcontext } from '../Components/Eventcontext'
import Toggle from '../Components/Toggle'
export default function Departments(){
    const {isdark} = useContext(Eventcontext);
    return (
        <div id='Container' data-theme={isdark ? "dark" : "light"}>
            <Toggle />
            <div className='programming-container'>
                <div className='title-container'>
                    <h1 className='title'>Programming</h1>
                </div>
                <div className='subheader-container'>
                    <p className='content'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure harum adipisci vitae voluptate consequatur, iusto illum, alias consequuntur id ad consectetur nulla cupiditate dolorum? Laborum laboriosam deleniti tempore suscipit.
                    </p>
                </div>
                <div className='img-container'>
                    <img id='Github-img' className='prg-img' src={Github} alt='Github' />
                    <img id='Java-img' className='prg-img' src={Java} alt='Java' />
                    <img id='React-img' className='prg-img' src={React} alt='React' />
                </div>
                <div className='sub-img-container'>
                    <p id='Github-img-text' className='sub-text'>Github is a application that allows developers to store, manage, and share code with others</p>
                    <p id='Java-img-text' className='sub-text'>Java is a high level object oriented language we use to code our robot</p>
                    <p id='React-img-text' className='sub-text'>React is a javascript library that is used to make web applications we used this to develop our website</p>
                </div>
                <div className='title-container'>
                    <h1 className='title'>3D-Design</h1>
                </div>
                <div className='subheader-container'>
                    <p className='content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ad magni, inventore dolores animi aliquam excepturi perspiciatis a laborum doloremque, id dolorem ullam. Laudantium distinctio quas maxime, eos ab quibusdam.</p>
                </div>
                <div className='title-container'>
                    <h1 className='title'>Building</h1>
                </div>
                <div className='subheader-container'>
                    <p className='content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ad magni, inventore dolores animi aliquam excepturi perspiciatis a laborum doloremque, id dolorem ullam. Laudantium distinctio quas maxime, eos ab quibusdam.</p>
                </div>
                <div className='title-container'>
                    <h1 className='title'>Strategy</h1>
                </div>
                <div className='subheader-container'>
                    <p className='content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ad magni, inventore dolores animi aliquam excepturi perspiciatis a laborum doloremque, id dolorem ullam. Laudantium distinctio quas maxime, eos ab quibusdam.</p>
                </div>
                <div className='title-container'>
                    <h1 className='title'>Outreach</h1>
                </div>
                <div className='subheader-container'>
                    <p className='content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ad magni, inventore dolores animi aliquam excepturi perspiciatis a laborum doloremque, id dolorem ullam. Laudantium distinctio quas maxime, eos ab quibusdam.</p>
                </div>
            </div>
        </div>

    );
}