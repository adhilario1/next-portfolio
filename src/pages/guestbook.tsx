import React from "react";
import Header from '@/components/Header';
import Body from '@/components/Body'
interface Props {
    breakpoint?: number;
}

const Guestbook = ({breakpoint}: Props) => {
    return (
        <>
        <Header breakpoint={breakpoint}/>
        <Body>
            <div className="content guestbook">
                guestbook
            </div>
        </Body>
        </>
        
        
    )
};

export default Guestbook;