import React, { useEffect, useState } from 'react'
import { Image } from '@/utils/models/DataModels'
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';
import '@/css/Carousel.css'

interface Carousel {
    className? : string;
    images : Image[];
}

function Carousel( {className, images} : Carousel) {
    const [currImageIndex, setImageIndex] = useState(0);
    const [mainImage, setImage] = useState(images[currImageIndex].url);
    const [mainImageType, setType] = useState(images[currImageIndex].type);
    const [mainImageDescription, setDescription] = useState(images[currImageIndex].description);

    const [currImgElem, setCurrElement] = useState<HTMLElement | null>();
    

    const selectImage = (currentTarget: HTMLElement, currentImage: Image | null) => {
        if (!currentImage) return;
        
        currImgElem?.classList.remove("selected")

        let index = 0
        while (images[index].url !== currentImage.url) {
            index++;
        }

        setImageIndex(index);
        setImage(currentImage.url);
        setType(currentImage.type);
        if (currentImage.description){
            setDescription(currentImage.description);
        } else {
            setDescription("");
        }
        

        currentTarget.classList.add("selected");
        setCurrElement(currentTarget);
    }

    function iterate_image (dir: number){
        let newIndex = currImageIndex + dir;
        if (newIndex < 0) {
            newIndex = images.length-1;  
        } 
        if (newIndex > images.length-1) {
            newIndex = 0;
        } 
        setImageIndex(newIndex);
        
        currImgElem?.classList.remove('selected');
        let elemList = document?.getElementById('carousel');
        elemList?.children[newIndex].classList.add('selected');
        setCurrElement(elemList?.children[newIndex] as HTMLElement)

        setImage(images[newIndex].url)
        setType(images[newIndex].type)
        setDescription(images[newIndex].description);
        setImageIndex(newIndex);
        console.log('image index: ', currImageIndex);
        console.log('new index: ', newIndex);
    }

    useEffect(()=>{
        let first_child = document.getElementById('carousel');
        
        if (first_child) {
            first_child.children[currImageIndex].classList.add('selected');
            setCurrElement(first_child.children[currImageIndex] as HTMLElement)
        }
    },[]);

    return (
        <div className='carousel-container'>
            <div className='image-main'>
                <div className='frame'>
                    <span className='spacer'/>
                    {(mainImageType === 'iframe') && (
                        <iframe src={mainImage} />
                    )}
                    {(mainImageType !== 'iframe') && (
                        <img src={mainImage} />
                    )}
                </div>
                <div className='image-main-panel'>
                    <a className='image-prev' onClick={() => iterate_image(-1)}>
                        <BsArrowBarLeft size={40}/>
                    </a>
                    <p className='image-main-description'>{mainImageDescription}</p>
                    <a className='image-next' onClick={() => iterate_image(1)}>
                        <BsArrowBarRight size={40} />
                    </a>
                </div>
            </div>
            <div id='carousel' className='image-carousel'>
                {images.map((image) => (
                    <a key={image.url} className='image-container' onClick={({currentTarget}) => selectImage(currentTarget, image)}>
                        {(image.type === 'iframe') && (
                            <iframe src={image.url} />
                        )}
                        {(image.type !== 'iframe') && (
                            <img src={image.url} />
                        )}
                        <div className='cover'>     
                            <p>
                                {image.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Carousel
