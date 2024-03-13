"use client";

import React, { useEffect, useState } from "react";
import Body from "@/components/Body";


import '@/css/404.css';

const NotFound = () => {
    
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
        device="mobile404";
    } else {
        device="web404";
    }
    
    return (
        <Body>
            <div className="main">
                <div className="bounding-box">
                    <div className="container">
                        <div className={`content four-o-four ${device}`}>
                            <h2 className="primary-label">oh no!</h2>
                            <h3 className="secondary-label">
                                404 error : page not NotFound
                                <br></br>
                                <span className="inline-text"><div className="bracket">[</div><a className="link-text" href='/'>turn back now.</a>]</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </Body>
    )
};

export default NotFound;