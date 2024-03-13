/* eslint-disable */
import React, {useState, useEffect} from "react";

import '@/css/Navbar.css';
//import { Link } from "react-router-dom";
import  Link  from 'next/link'

const NavBar = () => {
    /*
    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickyBar);

        return () => {
            window.removeEventListener('scroll', stickyBar);
        };
    }, []);

    const stickyBar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
        }
    }
    */
    return (
        <div>
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
                            <Link className="navbar-item" href="/guestbook" aria-label="guestbook">
                                <span>[ </span>
                                <span>   guestbook   </span>
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