"use client";

import React, { useEffect, useState } from "react";

import SideBar from "./SideBar";
import NavBar from "./NavBar";

import '@/css/Header.css'

const breakpoint = 685; 

const Header = () => {
    const [width, setWidth] = useState(breakpoint)
    const [scroll, setScroll] = useState(false);
    const [navElem, setNavElem] = useState<HTMLElement | null>()

    useEffect(() => {
        setWidth(window.innerWidth);
        setNavElem(document.getElementById('title'))
        window.addEventListener("scroll", () => {
            if (width > breakpoint) {
                if (navElem) {
                    setScroll(window.scrollY > navElem?.clientHeight);
                } else {
                    setScroll(window.scrollY > 61.5);
                }
            } else {
                if (navElem) {
                    setScroll(window.scrollY >= 215);
                }
            }
            
        });
    });
    return (
        <div className='header'>
            <div className='container'>
                <div id="title" className="title primary-label">
                    <a href="/" ><h1>Adam Hilario</h1></a>
                </div>
                <div className={`mobile-nav ${scroll? "mobile-sticky" : ""}`}>
                    <SideBar />
                </div>
                <div id='pin' className={`desktop-nav ${scroll? "sticky" : ""}`} >
                    <NavBar id="nav-bar"/>
                </div>
            </div>
        </ div>
    )
}

export default Header;