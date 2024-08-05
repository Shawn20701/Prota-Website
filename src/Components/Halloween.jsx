/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Halloweendecor ({handleSpooky, isSpooky}) {
    const now = new Date();
    const isOctober = now.getMonth() === 9;
    return (
        <div>
            {isOctober ? <div className='spooky-button'>
            <input type='checkbox' id='spook' className='toggle-event' onChange={handleSpooky} checked={isSpooky} />
            <label htmlFor='spook'>Spooky Mode</label> </div> : ""}
        </div>
    );
}

export default Halloweendecor;