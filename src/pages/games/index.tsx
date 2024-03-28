import React, { useState } from 'react';
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
//import Modal from '@/components/Modal';
import GameWidget from '@/components/GameWidget';

//AWS 
import { Amplify } from 'aws-amplify';
import amplifyconfig from '@/amplifyconfiguration.json';
import { ApiError, get } from 'aws-amplify/api'
Amplify.configure(amplifyconfig);

//css
import '@/css/Arcade.css'

//data 
import local_games from '@/assets/data/games.json'
import { Game } from '@/scripts/GameModel';
import useSWR from 'swr';




async function getRemoteGameData(url: string) {
    try {
        const restOperation = get({
            
            apiName: 'portfolioAPI',
            path: url,
        });
        const response = await restOperation.response;
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

export default function Games() {
    const [sortKey, setSortKey] = useState('');
    const [filter, setFilter] = useState('');
    
    const gameData: Array<Game> = local_games;
    const [filteredData, setFilteredData] = useState(gameData);

    const handleSortChange = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        var sortParam: string = event.currentTarget.value;
        setSortKey(sortParam);
        sortData(sortParam);
    }

    const sortData = (sort: string) => {
        const sortedData = gameData.sort((a, b) =>
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
    const { data } = useSWR('/game', getRemoteGameData);

    if (!data) {
        return (
            <>
            <Header />
            <Body>
                <div className='content'>
            	    <p>Fetching gallery games from database...</p>
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
                                <h1>Games.</h1>
                                <h2>{filter}</h2>
                            </div>
                            <div className='spacer' />
                            
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
                                        {item.id} | {item.title}
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
        const remote_data: Array<Game> = JSON.parse(data);
        console.log('pushing remote');
        gameData.push(...remote_data);
        setRemoteDataFlag(true);
    }
    
    
    
    
    return (
        <>
            <Header />
            <div className="background" />
            <Body>
                    <div className="content games">
                        <div className="page-title">
                            <h1 className="secondary-label">Games</h1>
                            <p>A playable repository for some of the games I've made. It isn't all of them, just the ones that were light enough to play in a browser</p>
                        </div>
                        <div className="viewport-container">
                            {/* 
                            <form action={createGameEntry}>
                                <button type="submit">Add</button>
                            </form>
                            */}  
                            {(!gameData|| gameData.length === 0) && (
                                <div>
                                    <p>Oops! No games here!</p>
                                </div>
                            )} 
                            <ul className="game-list">
                                
                                {gameData.map((game) => {
                                return (
                                    <li className="game-list-item">
                                        <GameWidget game_id={game.id as unknown as string} >
                                            <div className="game-data">
                                                <div className="game-thumbnail">
                                                    {(!game.thumbnail_url || game.thumbnail_url === undefined) && (
                                                        <img src="/assets/images/controller.png" alt="defaul thumbnail"></img>
                                                    )}
                                                    <img src={game.thumbnail_url?.toString()} />
                                                </div>
                                                <div className="game-metadata">
                                                    <h3 className="teriary-label-bold">{game.title}</h3>
                                                </div>
                                            </ div>
                                        </GameWidget>
                                    </li>
                                );
                                })}
                            </ul>
                        </div>     
                    </div>
            </Body>
            <Footer />
        </>
    )
    
};
