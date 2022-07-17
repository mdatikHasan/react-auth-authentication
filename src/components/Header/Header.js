import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div className='header py-4'>
            <NavLink to='/' className='navLink ms-3 p-2'>Home</NavLink>
            <NavLink to='/register' className='navLink ms-3 '>Register</NavLink>
            <NavLink to='/login' className='navLink ms-3 p-2'>Login</NavLink>
            <NavLink to='/shipping' className='navLink ms-3 p-2'>Shipping</NavLink>
            <p>{user?.email && <button onClick={logOut} className=' mx-3 btn btn-small btn-primary'>Log Out</button>}</p>
            {/* <span><b>{user.displayName}</b></span> */}
        </div>
    );
};

export default Header;