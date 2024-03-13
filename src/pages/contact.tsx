import React from 'react';
import Header from '@/components/Header';
import Body from '@/components/Body';

interface Props {
    breakpoint?: number;
}

const Contact = ({breakpoint}: Props) => {
    return (
        <Body>
        <Header breakpoint={breakpoint}/>
        <div className='content'>
            hey babe
        </div>
        </ Body>
    )
}

export default Contact;