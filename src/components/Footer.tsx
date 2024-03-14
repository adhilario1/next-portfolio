"use client";
import React, { useEffect, useState } from "react";

import '@/css/App.css';
import '@/css/Footer.css';

const breakpoint = 685;
const Footer = () => {
    const [width, setWidth] = useState(1366);
    const [height, setHeight] = useState(768);

    useEffect(() =>{
        const {innerWidth: width, innerHeight: height} = window;
        setWidth(width);
        setHeight(height);
    }, [])
    var device;
    if (height && width < breakpoint) {
        device="-f--mobile";
    } else {
        device="-f--web"
    }

    return (
        <div className={`footer ${device}`}>
            <div className="list-container">
                <div className="secondary-label">
                    directory
                </div>
                <div className="list-body">
                    <ul>
                        <li className="list-item" aria-label="home">
                            <a href="/">home.</a>
                            <div className="list-item-indicator">&larr;</div>
                        </li >
                        <li className="list-item" aria-label="gallery">
                            <a href="/projects/gallery">gallery.</a>
                            <div className="list-item-indicator">&larr;</div>
                        </li>
                        <li className="list-item" aria-label="games">
                            <a href="/games">games!</a>
                            <div className="list-item-indicator">&larr;</div>
                        </li>
                        <li className="list-item" aria-label="about">
                            <a href="/about">about.</a>
                            <div className="list-item-indicator">&larr;</div>
                        </li>
                        <li className="list-item" aria-label="guestbook">
                            <a href="/guestbook">guestbook.</a>
                            <div className="list-item-indicator">&larr;</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="list-container">
                <div className="secondary-label">contact</div>
                <ul>
                    <li className="list-item" aria-label="email me">
                        <a href="/contact/email">email.</a>
                        <div className="list-item-indicator">&larr;</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;