"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';

import '@/css/email.css'

interface FormData {
    name: string;
    email: string;
    subject?: string;
    message:string;
}

const Email = () => {
    const [formData, setFormData] = React.useState<FormData>({ name: '', email: '', message: '' });
    const [sent, setSentStatus] = useState(false);
    //lambda
    const endpoint = 'https://njzdm5huxbtycvrsnydjfpaiwy0rttcn.lambda-url.eu-west-1.on.aws/';

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setFormData({ ...formData, [name]: value});
    }

    function handleMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setFormData({ ...formData, [name]: value});
    }

    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = formData;

        const fetchPromise = fetch(endpoint, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            body: JSON.stringify(data)
        });

        fetchPromise
            .then(response => response.json())
            .then(data => {
                console.log(data); //handles respons, catch errors
            });
        
        setSentStatus(true);
    }
    
    return (
        <>
        <Header/>
        <Body>
            <div className='content'>
                {(!sent) && (                    
                    <div className='contact-form'>
                        <h1 className='secondary-label'>contact me.</h1>
                        <form action={endpoint} onSubmit={handleSubmit} method='POST'>
                            <div className='top'>
                                <div className='field half'>
                                    <label htmlFor='name' >Name:</label>
                                    <input name="name" type="text" value={formData.name} onChange={handleInputChange} required/><br/><br/>
                                </div>
                                <div className='field half'>
                                    <label htmlFor="email">Email:</label>
                                    <input name="email" type="email" value={formData.email} onChange={handleInputChange} required/><br/><br/>
                                </div>
                            </div>
                            <div className='field'>
                                <label htmlFor='subject'>Subject:</label>
                                <input id='subject-line' name="subject" type="text" value={formData.subject} onChange={handleInputChange} required/><br/><br/>
                            </div>
                            <div className='field'>
                                <label htmlFor="Message">Message:</label>
                                <textarea name="message" value={formData.message} onChange={handleMessageChange} required></textarea><br/><br/>
                            </div>
                            <input type='submit'/>
                            <div>
                                <p id="result-text"></p>
                            </div>
                        </form>
                    </div>
                )}
                {sent && (
                    <div className='confirmation'>
                        <h1 className=''>Thank You for Reaching Out!</h1>
                        <p>I will respond as soon as I can!</p>
                        {<img src='/assets/images/IMG_2106.jpg' />}
                    </div>
                )}
            </div>
        </ Body>
        <Footer />
        </>
    )
}

export default Email;