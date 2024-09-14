/* eslint-disable react/prop-types */


export default function Subheader({handleChangeContent}){
    return (
    <h2 className='subheader'>
        <button className='main-page-sel' onClick={() =>handleChangeContent(1)}>Who are we?</button>
        <button className='main-page-sel' onClick={() =>handleChangeContent(2)}>Our Mission</button>
        <button className='main-page-sel' onClick={() =>handleChangeContent(3)}>Recent Events</button>
        <button className='main-page-sel' onClick={() =>handleChangeContent(4)}>Outreach Events</button>
      </h2>
    );

}