/* eslint-disable react/prop-types */


export default function Subheader({handleChangeContent}){
    return (
    <h2 className='subheader'>
        <div className='main-page-sel' onMouseOver={() =>handleChangeContent(1)}>Who are we?</div>
        <div className='main-page-sel' onMouseOver={() =>handleChangeContent(2)}>Our Mission</div>
        <div className='main-page-sel' onMouseOver={() =>handleChangeContent(3)}>Recent Events</div>
        <div className='main-page-sel' onMouseOver={() =>handleChangeContent(4)}>Outreact Events</div>
      </h2>
    );

}