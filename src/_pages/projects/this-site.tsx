import React from 'react'

import Header from '@/components/Header';
import Body from '@/components/Body';
import '@/css/Exhibit.css'
import Footer from '@/components/Footer';


const Exhibit = () => {
    //const {exhibitID} = useParams()
    return (
        <>
        <Header />
        <Body >
            <div className='content'>
                <div className='website'>
                    <div className='text-body'>
                        <h1 className='secondary-label'>billys.biz (this website)</h1>
                        <div className='formatted-text'> 
                            This website was built not only tp serve as a portal to display the thing I have done to date* as an exercise to teach myself about the React framework and TypeScript, 
                            and as a working example of the skills I developed from my university education. 
                            <br/><br/>
                            <h2 className='secondary-label'>Services Used</h2>
                            <p className='formatted-text indented'>
                                As mentioned this was built originally with ReactJS using typescript, but later converted to NextJS for the use of SSR 
                                (server side rendering). I chose NextJS over express to enable this, or an alternative server framework akin to express, since this site 
                                is hosted on AWS Amplify, which supports nextJS natively.
                                <br/><br/>
                                In hindsight, I would have opted to use the express method, not for any technical reason, although deploying a nextJS app on 
                                Amplify is "particular" to say the least, but rather that I am not a huge fan of nextJS' path-file system. 
                                (Especially the App Router. I mean, seriously, who thought it was a good idea for the React Component for each page to be 
                                written in a file called Page.tsx, only deliniated by the file path, which isn't always visible in code editors.)
                                <br/><br/> 
                                The domain name registration and hosting is through AWS Route53 and the aforementioned Amplify respectively. 
                                Backend implementation is implemented using Amplify Studio with database interaction handled by a GraphQL API for the games page, and a REST API for the Gallery page.
                                As of now, the two separate API are wholly unnecessary ourside of a demonstration of knowledge, since both are fetching simple data.
                                However, the choice of using GraphQL for the games page was deliberate since it was my intention to make that page more interactive and dynamic, which GraphQL us better suited for.
                                Although, in what way that page will be more "interactive and dynamic," I don't know yet.  
                                <br/><br/> 
                            </p>
                            <h2 className='secondary-label'>So, Why The Name?</h2>
                            <p className='formatted-text indented'>
                                Well, obviously there was absolutely no way I was going to be able to get a domain of any extention comprised of solely of my first name
                                when it's something as common as Adam, so I opted for a variation on my middle name William (which is also unfortunately very common), Billy, 
                                and is meant to be read as Billy's Biz because I am Billy and this is my "biz".
                            </p>
                        </div>
                    </div>
                    <div className='footnote'>
                        * the work I have the right to share. So this primarily means course work and thing I have done on my own time. (i.e. no internship stuff)
                    </div>
                </div>
                
            </div>
        </Body>
        <Footer />
        </>
        
    )
};

export default Exhibit;