"use client";

import React, { useEffect, useState } from "react";

import SideBar from "./SideBar";
import NavBar from "./NavBar";

import '@/css/Header.css'

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [navElem, setNavElem] = useState<HTMLElement | null>()

    useEffect(() => {
        setNavElem(document.getElementById('title'))
        window.addEventListener("scroll", () => {
            if (navElem) {
                setScroll(window.scrollY > navElem?.clientHeight);
            } else {
                setScroll(window.scrollY > 61.5)
            }
        });
    });
    return (
        <div className='header'>
            <div className='container'>
                <div id="title" className="title primary-label">
                <a href="/" ><h1>Adam Hilario</h1></a>
                </div>
                <div className="mobile-nav">
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