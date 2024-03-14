import React from "react";
import Header from '@/components/Header';
import Body from '@/components/Body'
import Footer from "@/components/Footer";

const Guestbook = () => {
    return (
        <>
        <Header/>
        <Body>
            <div className="content guestbook">
                guestbook
            </div>
        </Body>
        <Footer />
        </>
        
        
    )
};

export default Guestbook;