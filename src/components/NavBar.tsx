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
                    <div className="nav-body">
                        <div className="nav">
                            <div className="nav-container">
                                <Link className="navbar-item" href="/" aria-label="home">home</Link>
                            </div>
                            <div className="nav-container">
                                <Link className="navbar-item"  href="/gallery" aria-label="gallery">
                                    gallery
                                </Link>
                            </div>
                            <div className="nav-container">
                                <Link className="navbar-item"  href="/games" aria-label="games">
                                    games!
                                </Link>
                            </div>
                            <div className="nav-container">
                                <Link className="navbar-item" href="/about" aria-label="about">
                                    about
                                </Link>
                            </div>
                            <div className="nav-container">
                                <Link className="navbar-item" href="/contact" aria-label="contact via email">
                                    contact
                                </Link>
                            </div>
                        </div>
                        
                        <div className="control">
                            theme: <span>dark</span> | <span>light</span>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default NavBar;