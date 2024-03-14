"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';

import '@/css/email.css'

interface FormProps{
    onSubmit: (data: FormData) => void;
}

interface FormData {
    name: string;
    email: string;
    message:string;
}

const Email = ({ onSubmit }: FormProps) => {
    const [formData, setFormData] = React.useState<FormData>({ name: '', email: '', message: '' });

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
        onSubmit(formData);
    }
    return (
        <>
        <Header/>
        <Body>
            <div className='content'>
                <div className='contact-form'>
                    <h1 className='secondary-label'>contact me.</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='top'>
                            <div className='field'>
                                <label htmlFor='name' >Name:</label>
                                <input name="name" type="text" value={formData.name} onChange={handleInputChange}/><br/><br/>
                            </div>
                            <div className='field'>
                                <label htmlFor="email">Email:</label>
                                <input name="email" type="email" value={formData.email} onChange={handleInputChange}/><br/><br/>
                            </div>
                        </div>
                        
                        <div className='field'>
                            <label htmlFor="Message">Message:</label>
                            <textarea name="message" value={formData.message} onChange={handleMessageChange}></textarea><br/><br/>
                        </div>
                        <input type='submit'/>
                        <div>
                            <p id="result-text"></p>
                        </div>
                    </form>
                </div>
            </div>
        </ Body>
        <Footer />
        </>
    )
}

export default Email;