"use client";

import React from 'react';

import Body from '@/components/Body';
import Footer from '@/components/Footer';

//style
import '@/css/Home.css'
import '@/css/Header.css'
import { BiArrowToLeft } from 'react-icons/bi';
import { CgArrowLongRightC } from 'react-icons/cg';
import { BsArrowLeft, BsArrowLeftCircle, BsArrowLeftCircleFill, BsArrowRightCircle, BsArrowRightCircleFill } from 'react-icons/bs';
const Home = () => {
    
    return (
        <>
        <div className='header'>
            <div className="primary-label home-title">
                <a href="/" ><h1 className='home-label'>Adam Hilario</h1></a>
            </div>
            <div className='container'>
                
                
            </div>
        </ div>
        <Body>
            <div className='content'>
                <div className='home'>
                    <h1 className='secondary-label'>Welcome!</h1>
                    <p className='text'>
                    <br />
                        I built this website to act as my portfolio. Please click one of the links below to learn more about me, or play some games! Or if you&apos;d just like to make a statement, sign the guestbook (because it&apos;s 1997, for some reason.)
                        <br />
                        <br />
                        
                    </p>
                    <div className='link-grid'>
                        <div/>
                        <div/>
                        <a href='/projects/gallery'>
                            <div className='text left'>
                                <h2 className='tertiary-label-bold'>Gallery</h2>
                                <p>Images and Videos of things I've made over the years</p>
                            </ div>
                            <div className='arrow-container'>
                                <BsArrowLeftCircle  className='arrow-unselected' size={50}/>
                                <BsArrowLeftCircleFill  className='arrow' size={50}/>
                            </div>
                        </a>
                        <a href='/games'>
                            <div className='text right'>
                                <h2 className='tertiary-label-bold'>Games!</h2>
                                <p>Check out (or play, hopefully) some games I made</p>
                            </ div>
                            <div className='arrow-container'>
                                <BsArrowLeftCircle  className='arrow-unselected' size={50}/>
                                <BsArrowLeftCircleFill  className='arrow' size={50}/>
                            </div>
                        </a>
                        <a href='/about'>
                            <div className='text left'>
                                <h2 className='tertiary-label-bold'>About</h2>
                                <p>It's in the name: a short biography of myself with relavant info. (Mostly my educational background.)</p>
                            </ div>
                            <div className='arrow-container'>
                                <BsArrowLeftCircle  className='arrow-unselected' size={50}/>
                                <BsArrowLeftCircleFill  className='arrow' size={50}/>
                            </div>
                        </a>
                        <a href='/contact/email'>
                            
                            <div className='text right'>
                                <h2 className='tertiary-label-bold'>Contact</h2>
                                <p>Drop me an email!</p>
                            </ div>
                            <div className='arrow-empty'>
                                <BsArrowLeftCircle  className='arrow-unselected' size={50}/>
                                <BsArrowLeftCircleFill  className='arrow' size={50}/>
                            </div>
                        </a>

                        <a href='/projects/this-site'>
                            
                            <div className='text left'>
                                <h2 className='tertiary-label-bold'>Read About This Site</h2>
                                <p>Read about how I made this website and what service are availed to keep it running.</p>
                            </ div>
                            <div className='arrow-empty'>
                                <BsArrowLeftCircle  className='arrow-unselected' size={50}/>
                                <BsArrowLeftCircleFill  className='arrow' size={50}/>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </ Body>   
        <Footer />
        </>
         
    )
}

export default Home;