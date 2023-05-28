import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import './Header.css';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar  bg-indigo-50 md:px-36 px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case font-bold md:text-3xl text-lg text-primary"><Link to='/'>Japanese Cuisine</Link> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user && <>

                            <a id="not-clickable" className=''>
                                <img className='w-10  rounded-full border-indigo-700 me-4' src={user.photoURL} alt="" />
                            </a>
                            <Tooltip anchorSelect="#not-clickable" place="left">
                                <button>{user.displayName}</button>
                            </Tooltip></>

                    }
                    {user ?
                        <> <button onClick={handleLogOut} className="btn btn-outline btn-primary md:ms-8 ms-0 ">Log out</button> </>
                        : <a className="btn btn-primary ms-8">
                            <Link to="/login" >Login</Link>
                        </a>
                    }
                </div>
            </div>
        </div >
    );
};

export default Header;