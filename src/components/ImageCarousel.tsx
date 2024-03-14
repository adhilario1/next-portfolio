"use client";

import React, { useEffect, useState } from 'react'
import '@/css/Carousel.css'
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';

interface Props {
    name?: string
    className?: string
    images: Array<string>
}

function ImageCarousel({name, className, images} : Props) {
    const [index, setIndex] = useState(1);
    const [prevIndex, setPrevIndex] = useState(1);
    const [displayImage, setDisplay] = useState(images[0]);
    const [prevImage, setPrevImage] = useState<HTMLElement | undefined>(undefined);
    
    
    useEffect(() => {
        if (index!=prevIndex) {
            let currIFrame = document.getElementById('carousel')?.children[index].lastChild
            if (typeof currIFrame === HTMLIFrameElement.toString()) {
                selectImg(currIFrame as HTMLIFrameElement)
                setPrevImage(currIFrame as HTMLIFrameElement)
                setPrevIndex(index)
            }
        }   
    }, []);

    function iterate(n: number) {
        setIndex((index+n)%images.length)
        
    }
    
    function selectImg(currentTarget: HTMLElement){
        currentTarget.classList.add('selected')
        setDisplay(currentTarget.id);
        if (prevImage) {
            prevImage.className.replace("selected", "");
        }
        setPrevImage(currentTarget);
        console.log("selected")
        let t = images.indexOf(currentTarget.id);
        setPrevIndex(t);
        setIndex(t);
    }

    
    return (
        <div className={`carousel ${className}`}>
            <div id="carousel-wrapper">
                <h4>{name}</h4>
                <div id="carousel-menu">   
                    
                    <div id="main-img">
                        <iframe className="display-img" src={displayImage} />
                    </div>
                    <div id='carousel-butts'>
                        <div className="nav-butt" onClick={() => iterate(-1)}><BiArrowToLeft/></div>  
                        <div className="nav-butt" onClick={() => iterate(1)}><BiArrowToRight /></div>
                    </div>
                    
                </div>
                <div id='carousel'>
                    {images.map((image_path) => (
                        <a id={image_path} className="clickable" onClick={({currentTarget}) => selectImg(currentTarget)} >
                            <div className="cover">
                                click me!  
                            </div>
                            
                            <iframe
                                src={image_path} 
                                onClick={({currentTarget}) => selectImg(currentTarget)} 
                                onError={({ currentTarget}) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = './assets/images/default.png';
                            }} />
                        
                        </a>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default ImageCarousel
