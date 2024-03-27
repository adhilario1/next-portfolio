import React, { useState } from 'react';
import Header from '@/components/Header';
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

interface Props {
    breakpoint?: number;
}


async function getRemoteGalleryData() {
    try {
        const restOperation = get({
            apiName: 'galleryAPI',
            path: '/gallery',
        });
        const response = await restOperation.response;
        //const { body } = await restOperation.response;
        //const response = await body.json();

        const response_string = await response.body.text();
        
        console.log('GET call succeeded');

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

export default function Gallery({breakpoint}: Props) {

    const [sortKey, setSortKey] = useState('');
    const [filter, setFilter] = useState('');
    
    const postData: Array<Post> = local_posts;
    const [filteredData, setFilteredData] = useState(postData);

    const handleFilterChange = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        var safeSearchTypeValue: string = event.currentTarget.value;
        setFilter(safeSearchTypeValue);
        filterData(safeSearchTypeValue);
    };

    const filterData = (filter: string) => {
        const filteredData = postData.filter((item) => 
            item.discipline?.toLowerCase().includes(filter.toLowerCase())
        );
        setFilteredData(filteredData);
    };

    const handleSortChange = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        var sortParam: string = event.currentTarget.value;
        setSortKey(sortParam);
        sortData(sortParam);
    }

    const sortData = (sort: string) => {
        const sortedData = local_posts.sort((a, b) =>
            {
                if (sort==="title") {
                    if (a.title < b.title) {
                        return -1;
                    } else if (a.title > b.title) {
                        return 1;
                    } else {
                        if (a.year < b.year) return -1
                        else if (a.year > b.year) return 1
                        else {
                            if (a.id < b.id ) return -1
                            else return 1;
                        }
                    }
                } else if (sort==="type"){
                    if (a.type < b.type) return -1
                    else if (a.type > b.type) return 1
                    else {
                        if (a.title < b.title) {
                            return -1;
                        } else if (a.title > b.title) {
                            return 1;
                        } else {
                            if (a.year < b.year) return -1
                            else if (a.year > b.year) return 1
                            else {
                                if (a.id < b.id ) return -1
                                else return 1;
                            }
                        }
                    }
                } else if (sort==="year") {
                    if (a.year < b.year) {
                        return -1;
                    } else if (a.year > b.year) {
                        return 1;
                    } else {
                        if (a.title < b.title) return -1
                        else if (a.title > b.title) return 1
                        else {
                            if (a.id < b.id ) return -1
                            else return 1;
                        }
                    }
                } else {
                    if (a.id < b.id) {
                        return -1;
                    } else {
                        return 1;
                    }
                    
                }
            }
            
        );
        setFilteredData(sortedData);
    };
    
    //fetch remote data
    const [remoteDataFlag, setRemoteDataFlag] = useState(false);
    const { data } = useSWR('/gallery', getRemoteGalleryData);

    if (!data) {
        return (
            <>
            <Header />
            <Body>
                <div className='content'>
            	    <p>Fetching gallery posts from database...</p>
                </div>
            </Body>
            </>
        )
    }

    if (data instanceof ApiError) {
        return (
            <>
            <Header />   
            <Body>
                <div className='content'>
                    <div className='gallery'>
                        <div className='subheader'>
                            <div className='gallery-title'>
                                <h1>Gallery.</h1>
                                <h2>{filter}</h2>
                            </div>
                            <div className='spacer' />
                            <select className='dropdown filter' value={filter} onChange={handleFilterChange}>
                                <option value={""}>All</option>
                                <option value={"3d-modelling"}>3D Modeling</option>
                                <option value={"Graphic Design"}>Graphic Design</option>
                                <option value={"vid-prod"}>Video Production</option>
                                <option value={"web-dev"}>Web Dev</option>
                            </select>
                            
                            <select className='dropdown sort' value={sortKey} onChange={handleSortChange}>
                                <option value={"none"}>---</option>
                                <option value={"year"}>Year</option>
                                <option value={"title"}>Title</option>
                                <option value={"type"}>Format</option>
                                <option value={"discipline"}>Discipline</option>
                            </select>
                        </div>
                        <div className='error-container'>
                            <p>Unable to fetch remote data! Showing local data only...</p>
                            
                        </div>
                        <div className='viewport-container'>
                            <div className='spacer' />
                            <ul>
                                {filteredData.map((item) => (
                                    <>
                                    <li key={item.id}>
                                        <Modal className="Modal" post={item} breakpoint={breakpoint} />
                                    </li>
                                    </>
                                ))}
                            </ul>
                            <div className='spacer' />
                        </div>
                    </div>
                </div>    
            </ Body>
            <Footer />
            </>
        )
    }  else if (!remoteDataFlag) {
        const remote_data: Array<Post> = JSON.parse(data);
        console.log('pushing remote');
        postData.push(...remote_data);
        setRemoteDataFlag(true);
    }
    
    

    return (
        <>
        <Header />   
        <Body>
            <div className='content'>
                <div className='gallery'>
                    <div className='subheader'>
                        <div className='gallery-title'>
                            <h1>Gallery.</h1>
                            <h2>{filter}</h2>
                        </div>
                        <div className='spacer' />
                        <label htmlFor='filter'>Filter</label>
                        <select id='filter' className='dropdown filter' value={filter} onChange={handleFilterChange}>
                            <option value={""}>All</option>
                            <option value={"3d-modelling"}>3D Modeling</option>
                            <option value={"Graphic Design"}>Graphic Design</option>
                            <option value={"vid-prod"}>Video Production</option>
                            <option value={"web-dev"}>Web Dev</option>
                        </select>
                        <label htmlFor='sort'>Sort</label>
                        <select id='sort' className='dropdown sort' value={sortKey} onChange={handleSortChange}>
                            <option value={"none"}>---</option>
                            <option value={"year"}>Year</option>
                            <option value={"title"}>Title</option>
                            <option value={"type"}>Format</option>
                            <option value={"discipline"}>Discipline</option>
                        </select>
                    </div>
                    <div className='error-container'>
                        <p>test</p>
                        
                    </div>
                    <div className='viewport-container'>
                        <div className='spacer' />
                        <ul>
                            {filteredData.map((item) => (
                                <>
                                <li key={item.id}>
                                    <Modal className="Modal" post={item} breakpoint={breakpoint} />
                                </li>
                                </>
                            ))}
                        </ul>
                        <div className='spacer' />
                    </div>
                </div>
            </div>    
        </ Body>
        <Footer />
        </>
        
    )
};

