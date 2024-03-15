"use client";

import React, { useEffect, useState } from 'react'
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';
import { Image } from '@/API';
import '@/css/Carousel.css'



interface Props {
    name?: string
    className?: string
    images: Array<Image|null>
}

function ImageCarousel({name, className, images} : Props) {
    const [displayImage, setDisplay] = useState(images?.at(0));
    const [index, setIndex] = useState(0);
    const [currImgElem, setCurrElement] = useState<HTMLElement>();
    
    /*
    
    const [prevIndex, setPrevIndex] = useState(1);
    
    const [displayImageType, setDisplayType] = useState("image");
    
    
    
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
    */
    
    
    
    function iterate(n: number) {
        setIndex((index+n)%images.length);
        setDisplay(images[index])
    }
    function selectImg(currentTarget: HTMLElement, currentImage: Image | null){
        if (!currentImage) return;
        
        currImgElem?.classList.remove("selected")
        setDisplay(currentImage);
        currentTarget.classList.add("selected");
        setCurrElement(currentTarget);
        
        //setCurrImage(currentTarget);
        /*
        if (prevImage) {
            prevImage.className.replace("selected", "");
        }
        setPrevImage(currentTarget);
        console.log("selected");
        let t = indexOfImageByID(currentTarget.id);
        setPrevIndex(t);
        setIndex(t);
        */
    }
    
    
    return (
        <div className={`carousel ${className}`}>
            <div id="carousel-wrapper">
                <h4>{name}</h4>
                <div id="carousel-menu">   
                    <div id="main-img">
                        {(displayImage?.type === "image") &&(
                            <img src={displayImage.url} />
                        )}
                        {(displayImage?.type === "iframe") &&(
                            <iframe className="display-img" src={displayImage.url} />
                        )}
                        
                    </div>
                    <div className='main-description'>
                        <p>Figure: {displayImage?.description}</p>
                    </div>
                    <div id='carousel-butts'>
                        <div className="nav-butt" onClick={() => iterate(-1)}><BiArrowToLeft/></div>  
                        <div 
                            className="nav-butt" 
                            onClick={() => iterate(1)}
                        ><BiArrowToRight /></div>
                    </div>
                    
                </div>
                <div id='carousel'>
                    {images.map((image) => (
                        <a id={image?.id} className="clickable" 
                            onClick={({currentTarget}) => selectImg(currentTarget, image)} 
                        >
                            <div className="cover">
                                <div className='no-hover'>
                                    <p>Click Me!</p>
                                </div>
                                <div className='on-hover'>
                                    {(image?.description) && (
                                        <p>{image?.description}</p>
                                    )}
                                </div>
                            </div>
                            
                            {image && image.type==="image" && (
                                <img
                                    src={image?.url} 
                                    onError={({ currentTarget}) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = './assets/images/default.png';
                                    }}
                                />
                
                            )}
                            {image && image.type !=="image" && (
                                <iframe
                                src={image?.url} 
                                //onClick={({currentTarget}) => selectImg(currentTarget)} 
                                
                                onError={({ currentTarget}) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = './assets/images/default.png';
                            }} />
                            )}
                        </a>
                        )
                    )}
                </div>
            </div>
        </div>
    )
    
}

export default ImageCarousel
