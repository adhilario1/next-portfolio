'use client'

import React, { useState } from "react";

import Header from "@/components/Header";
import Body from '@/components/Body';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';

//AWS 
import { Amplify } from 'aws-amplify';
import amplifyconfig from '@/amplifyconfiguration.json';
import { ApiError, get } from 'aws-amplify/api'
Amplify.configure(amplifyconfig);

//css
import '@/css/Gallery.css'

//data 
import local_posts from '@/assets/data/posts.json'
import { Post } from '@/scripts/Post';
import useSWR from 'swr';

async function getRemoteGalleryData() {
    try {
        const restOperation = get({
            apiName: 'portfolioAPI',
            path: '/gallery',
        });
        const response = await restOperation.response;
        //const { body } = await restOperation.response;
        //const response = await body.json();

        const response_string = await response.body.text();
        
        console.log('GET call succeeded: ', response.statusCode);

        return response_string;
    } catch (error) {
        if (error instanceof ApiError) {
            if (error.response) {
                const {
                    statusCode,
                    headers,
                    body
                } = error.response;
                console.error(`Received ${statusCode} error response with payload: ${body}`);
            }
            return error;
        }
        
    } 
}

const GalleryPage = () => {
    return (
        <div className="page-container">
            <Header />
            <div className="page-body">

            </div>
        </div>
    );
}

export default GalleryPage;