"use client";

import React from "react";

import SideBar from "./SideBar";
import NavBar from "./NavBar";

import '@/css/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className="title primary-label">
                <a href="/" ><h1>Adam Hilario</h1></a>
                </div>
                <div className="mobile-nav">
                    <SideBar />
                </div>
                <div className="desktop-nav">
                    <NavBar />
                </div>
            </div>
        </ div>
    )
}

export default Header;