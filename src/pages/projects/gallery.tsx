import React, { useState } from 'react';
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';

//css
import '@/css/Gallery.css'

//data 
import posts from '@/assets/data/posts.json'

interface Props {
    breakpoint?: number;
}

const Gallery = ({breakpoint}: Props) => {
    const [sortKey, setSortKey] = useState('');
    const [filter, setFilter] = useState('');
    const [filteredData, setFilteredData] = useState(posts);

    const handleFilterChange = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        var safeSearchTypeValue: string = event.currentTarget.value;
        setFilter(safeSearchTypeValue);
        filterData(safeSearchTypeValue);
    };

    const filterData = (filter: string) => {
        const filteredData = posts.filter((item) => 
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
        const sortedData = posts.sort((a, b) =>
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
                } else if (sort==="type") {
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

export default Gallery;
