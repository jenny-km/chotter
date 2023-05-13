import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';


function Navbar(){
    return(
        <div className="top-bar">
                <nav className="logo-container">
                 <img src='/images/chotter-logo.png'  height="50"/>
                 <ul className='nav-menu'>
                    <li className='nav-list-item '><a className='nav-item hover-underline-animation' href="/">Home</a></li>
                    <li className='nav-list-item '><a className='nav-item hover-underline-animation' href="/post">Post</a></li>
                    {/* <li className='nav-list-item '><a className='nav-item hover-underline-animation' href="/profile">Profile</a></li>
                    <li className='nav-list-item '><a className='nav-item hover-underline-animation' href="/logout">Log Out</a></li> */}
                 </ul>
                 <div className='nav-toggler'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                 </div>

                </nav>
        </div>
    )
}

export default Navbar;