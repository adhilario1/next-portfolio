import React from "react";
import { Link } from "react-router-dom"

import './../css/Links.css'

const NavLinks = () => {
    return (
        <>
        <Link className="navbar-item" to="/" aria-label="home"> 
            <div className="menu-indicator">[</div>
            <div className="navbar-item-text">home</div>
            <div className="menu-indicator">]</div>
        </Link>
        <Link className="navbar-item"  to="/gallery" aria-label="gallery">
            <div className="menu-indicator">[</div>
            <div className="navbar-item-text">gallery</div>
            <div className="menu-indicator">]</div>
        </Link>
        <Link className="navbar-item"  to="/games" aria-label="games">
            <div className="menu-indicator">[</div>
            <div className="navbar-item-text">games!</div>
            <div className="menu-indicator">]</div>
        </Link>
        <Link className="navbar-item" to="/about" aria-label="about">
            <div className="menu-indicator">[</div>
            <div className="navbar-item-text">about</div>
            <div className="menu-indicator">]</div>
        </Link>
        <Link className="navbar-item" to="/guestbook" aria-label="guestbook">
            <div className="menu-indicator">[</div>
            <div className="navbar-item-text">guestbook</div>
            <div className="menu-indicator">]</div>
        </Link>
        </>
    )
}

export default NavLinks