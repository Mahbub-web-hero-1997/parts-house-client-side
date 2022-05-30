import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import Login from '../Login/Login';
// import Signup from '../Login/Signup';
// import ButtonPrimary from './ButtonPrimary';

const Navbar = () => {

    const handleSignOut = () => {
        signOut(auth);
    }
    const [user] = useAuthState(auth);
    const menuItems = <>
        <li><Link className='text-xl font-bold' to='/'>Home</Link></li>
        <li><Link className='text-xl font-bold' to='/parts'>Parts</Link></li>
        <li><Link className='text-xl font-bold' to='/blogs'>Blogs</Link></li>
        <li><Link className='text-xl font-bold' to='/Portfolio'>Portfolio</Link></li>
        <li><Link className='text-xl font-bold' to='/contact'>Contact</Link></li>
        {<li><Link className='text-xl font-bold' to='/dashboard'>dashboard</Link></li>}
        {user ? <li><Link className='text-xl font-bold' onClick={handleSignOut} to='/login'>LogOut</Link></li> : <li><Link className='text-xl font-bold' to='/login'>Login</Link></li>}
    </>

    return (
        <div className="navbar sticky top-0 z-10 bg-base-200 mx-auto">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-4xl">Parts-House</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label htmlFor="dashboard_Sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;