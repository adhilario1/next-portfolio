import React, { useState } from "react";
//import { Link } from 'react-router-dom';
import Link from 'next/link'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import '@/css/SideBar.css'

const linktree = [
    {
        "label": "home",
        "url": "/"
    },
    {
        "label": "gallery",
        "url": "/projects/gallery"
    },
    {
        "label": "games",
        "url": "/games"
    },
    {
        "label": "about",
        "url": "/about"
    },
    {
        "label": "this site",
        "url": "/projects/this-site"
    },
    {
        "label": "contact",
        "url": "/contact/email"
    }
]

const SideBar = () => { 
    const [sideBar, setSideBar] = useState(false);

    const toggleSideBar = () => {
        setSideBar(!sideBar);
    }
    console.log(sideBar);
    return (
        <>    
        <Link href="#" className="menu-bars"onClick={toggleSideBar} >
            <div className="open-side">
                <FaIcons.FaBars onClick={toggleSideBar} />
            </div>
        </Link>
        {sideBar && (
            <nav className="sidebar-main">
            <ul className="" onClick={toggleSideBar}>
                <li className="sidebar-toggle">
                    <Link href='#' className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
            {linktree.map((link) => (
                <li className="side-item">
                    <Link href={link.url}>{link.label}</Link>
                </li>
            ))}
            </ul>
        </nav>
        )}
        
        </>
    )
}

export default SideBar;

/*
<Link to={link.url}>{link.label}</Link>
*/
