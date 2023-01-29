import {Link, Outlet} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <>
            <nav className='navbar'>
                <div className="logo-name">
                    <h1><Link to="/">{"<askarthemasss />"}</Link></h1>
                </div>
                <ul className="pages">
                    <li><Link to='/'>Home</Link></li>
                    {/* <li><Link to='/blogs'>Blogs</Link></li> */}
                    <li><a href='https://askarthemasss.hashnode.dev/' target='_blank' rel="noreferrer">Blogs</a></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/about'>About Me</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
     );
}
 
export default Navbar;