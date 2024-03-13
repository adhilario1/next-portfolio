"use client";

import React, { useState, useEffect } from "react";

import SideBar from "./SideBar";
import NavBar from "./NavBar";

import '@/css/Header.css'

const breakpoint = 685;

const Header = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [mobile, setMobile] = useState(false);

    useEffect(() =>{
        const {innerWidth: width, innerHeight: height} = window;
        setWidth(width);
        setHeight(height);

        if (breakpoint && (height && width < breakpoint)) {
            setMobile(true);
        } else {
            setMobile(false);
        }
        
    }, [])

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