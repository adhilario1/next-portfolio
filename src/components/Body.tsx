"use client";
import React, { useEffect, useState } from "react";

import '@/css/Body.css'
import '@/css/App.css'

interface Props {
    children?: React.ReactElement;
}

const Body = ({children}: Props) => {
    const [width, setWidth] = useState(1366);
    const [height, setHeight] = useState(768);

    useEffect(() =>{
        const {innerWidth: width, innerHeight: height} = window;
        setWidth(width);
        setHeight(height);
    }, [])
    const breakpoint = 685;

    var device;
    if (height && width < breakpoint) {
        device = "handheld";
    } else {
        device = "desktop";
    }

    return (
        <>
        <div className='background' />
        <div className="main">
            <div className="bounding-box">
                {children}
            </div>
        </div>
        </>
    );
;}

export default Body;