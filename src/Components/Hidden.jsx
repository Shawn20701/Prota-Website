import './Hidden.css';
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export default function Hidden({istoggled, toggleSecret}){
    return (
            <button className='hidden' onClick={toggleSecret}>P</button>
    )
}