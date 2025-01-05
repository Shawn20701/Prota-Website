import { useContext } from 'react';
import { Eventcontext } from './Eventcontext';
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

export default function Hidden3(){
    const {setWinterMode} = useContext(Eventcontext);
    return (
            <button className='hidden-button' onClick={setWinterMode}>P</button>
    )
}