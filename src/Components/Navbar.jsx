import './navbar.css' 
export const Navbar = () => {
    return (
        <>
            <div className='navbar-container'>
                <ui className='navbar-list'>
                    <li className='navbar-item'>
                        <a className='navbar-button'href='/'>Home</a>
                    </li>
                    <li className='navbar-item'>
                        <a className='navbar-button' href='/About-us'>About Us</a>
                    </li>
                    <li className='navbar-item'>
                        <a className='navbar-button' href='#'>Media</a>
                    </li>
                    <li className='navbar-item'>
                        <a className='navbar-button' href='/Calendar'>Calendar</a>
                    </li>
                    <li className='navbar-item'>
                        <a className='navbar-button' href='/About-us/Departments'>Departments</a>
                    </li>
                </ui>
            </div>
        </>
    );
}

export default Navbar;