import './navbar.css'
export const Navbar = () => {
    return (
        <>
            <div className='navbar-container'>
                <a className='navbar-button'href='/'>Home</a>
                <a className='navbar-button' href='/About-us'>About Us</a>
                <a className='navbar-button' href='#'>Socials</a>
                <a className='navbar-button' href='#'>Media</a>
                <a className='navbar-button' href='#'>Events</a>
            </div>
        </>
    );
}

export default Navbar;