import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import {Image} from '@/utils/models/DataModels';
import Footer from '@/components/Footer';

import { BsArrowLeftCircle } from 'react-icons/bs';

//style
import '@/css/GamePage.css'
import Carousel from '@/components/Carousel';
import Body from '@/components/Body';

function SummerProject() {
    const tags : string[] = [
        'Unity',
        'C#',
        'Horror',
        'Mystery'
    ]

    const images : Image[] = [
        {
            url: "/assets/sidney/title.png",
            type: "image",
            description: "Title Menu from Sidney. Designed and made in Photoshop by me"
        },
        {
            url: "/assets/sidney/ui-1.png",
            type: 'image',
            description: 'Intro Title Card'
        },
        {
            url: "/assets/sidney/outlines-2.png",
            type: 'image',
            description: 'Gameplay screenshot from first mission (tutorial)'
        },
        {
            url: "/assets/sidney/dialog-1.png",
            type: 'image',
            description: 'Dialog Box UI'
        },
        {
            url: "/assets/sidney/ui-2.png",
            type: 'image',
            description: 'Inventory UI'
        },
        {
            url: "/assets/sidney/ui-3.png",
            type: 'image',
            description: 'Inventory UI 2 - Item Equiped Indicator'
        }
        
    ]

    const [image, setImage] = useState('/assets/sidney/title.png')
    return (
        <>
        {/*<Header />*/}
        <div className='background'/>
        <a id='back-arrow' href='/games'>  
          <BsArrowLeftCircle size={40}/>
        </a>
        <div>
          <div>
            {true && (
              <div className='content game'>
                <div className='game-header'>
                  <h2 className='game-title'>Sidney | Master's Project</h2>
                  <h3 className='game-year'>2023, Interactive Digital Media Final Project</h3>
                  <hr/>
                </div>
                <div className='tags'>
                    {tags.map((tag) => (
                        <a className='tag'>    
                            {tag}                
                        </a>
                    ))}    
                </div>
                <hr/>
                <Carousel images={images} />
                <div className='description'>
                  <p>
                    &emsp;&emsp;As part of the Interactive Digital Media Program at Trinity College Dublin, 
                    I, along with three other students were required to complete an independent project for the third trimester.
                    While, each member contributed to every step in the process, I was functionally the lead programmer and UI designer, 
                    as I had an undergraduate degree in computer science.
                    <br/><br/>
                    This was coded using Unity 2021 and C#. Assets were made in Blender and Adobe Photoshop.
                  </p>
                </div>
                
                
    
              </div>
            )}
          </div>
        </div>
        <Footer />
        </>
    )
}

export default SummerProject
