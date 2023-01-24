import {Link, Outlet} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <>
            <nav className='navbar'>
                <div className="logo-name">
                    <h1>{"<Askar />"}</h1>
                </div>
                <ul className="pages">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Me</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
     );
}
 
export default Navbar;