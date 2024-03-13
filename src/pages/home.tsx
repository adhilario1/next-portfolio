"use client";

import React from 'react';
import  Link  from 'next/link'

import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
//style
import '@/css/Home.css'

const Home = () => {
    const breakpoint = 685;
    return (
        <>
        <Header />
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
    

                </div>
            </div>
        </ Body>   
        <Footer />
        </>
         
    )
}

export default Home;