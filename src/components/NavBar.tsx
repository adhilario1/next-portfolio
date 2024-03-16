/* eslint-disable */
import React from "react";
import  Link  from 'next/link'

import '@/css/Navbar.css';

interface Props {
    id?: string
}
const NavBar = ({id}: Props) => {
    return (
        <div id={id}>
            <nav
                className="navbar is-primary"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="start">
                    <div className="nav">
                        <div className="nav-container">
                            <Link className="navbar-item" href="/home" aria-label="home"> 
                                <span>[</span>
                                <span>   home   </span>
                                <span>]</span>
                            </Link>
                        </div>
                        <div className="nav-container">
                            <div className="nav-dropdown">
                                <div className="nav-label">projects</div>
                                <div className="dropdown-content">
                                    <Link className="nav-drop-item"  href="/projects/this-site">
                                        <span>[</span>
                                        <span>   this site   </span>
                                        <span>]</span>
                                    </Link>
                                    <Link className="nav-drop-item"  href="/projects/gallery" aria-label="gallery">
                                        <span>[</span>
                                        <span>   gallery   </span>
                                        <span>]</span>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="nav-container">
                            <Link className="navbar-item"  href="/games" aria-label="games">
                                <span>[</span>
                                <span>   games!   </span>
                                <span>]</span>
                            </Link>
                        </div>
                        <div className="nav-container">
                            <Link className="navbar-item" href="/about" aria-label="about">
                                <span>[</span>
                                <span>   about   </span>
                                <span>]</span>
                            </Link>
                        </div>
                        <div className="nav-container">
                            <Link className="navbar-item" href="/contact/email" aria-label="guestbook">
                                <span>[ </span>
                                <span>   contact   </span>
                                <span>]</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;