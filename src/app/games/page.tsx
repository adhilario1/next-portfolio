

//React Libraries
import React, { useState } from "react";

//Components
import Header from '@/components/Header';
import Modal from '@/components/Modal';
import Body from "@/components/Body";
import Footer from "@/components/Footer";

//style
import '@/css/Arcade.css';

//aws amplify 
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';

import {revalidatePath} from 'next/cache'
import * as mutations from '@/graphql/mutations';
import * as queries from '@/graphql/queries';
import config from '@/amplifyconfiguration.json';

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies
});

//data
import { CreateGamesInput } from "@/API";

//import local_games from '@/assets/data/games.json'
//import { Game } from "@/scripts/GameModel";
//import { title } from "process";
import GameWidget from "@/components/GameWidget";

interface Props {
    breakpoint?: number;
}


async function createGameEntry(formData: FormData) {
    'use server'

    var entry : CreateGamesInput = {
        "title": "Tetris Clone",
        "preview":[""], 
        "description": "A simple tetris clone I made to test the Godot 4 environment, moving over from engines such as Unity and Unreal",
        "tags": ["puzzle", "clone", "itch.io", "Godot"], 
        "year": 2023,
        "type": "widget",
        "thumbnail_url": "/assets/thumbnails/tetris_thumbnail.jpg",
        "url": "https://itch.io/embed/2573424?bg_color=111&amp;fg_color=faebd7&amp;link_color=ff8b00&amp;border_color=bebebe",
        "outbound_url": "https://billyshouse.itch.io/tetris-clone",
        "outbound_label": "Tetris Clone by Adam Hilario",
        "mobile": false, 
    }

    console.log(formData.getAll.toString());

    const {data} = await cookiesClient.graphql({
        query: mutations.createGames,
        variables: {
            input: {
                title: entry.title ?? 'untitled game',
                preview: entry.preview ?? [],
                description : entry.description ?? '',
                tags: entry.tags ?? [],
                year: entry.year,
                type: entry.type ?? "widget",
                thumbnail_url: entry.thumbnail_url?.toString() ?? '',
                url: entry.url,
                outbound_url: entry.outbound_url?.toString() ?? '',
                outbound_label: entry.outbound_label?.toString() ?? '',
                mobile: false
            }
        }
    });

    console.log(data?.createGames)
    revalidatePath('/games');

}
export default async function Games({breakpoint}: Props) {
    const { data, errors } = await cookiesClient.graphql({
        query: queries.listGames
    });

    
    const games = data.listGames.items
    /*
    const [filter, setFilter] = useState('');
    const [filteredData, setFilteredData] = useState(local_games);

    const handleFilterChange = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        var safeSearchTypeValue: string = event.currentTarget.value;
        setFilter(safeSearchTypeValue);
        filterData(safeSearchTypeValue);
    };

    const filterData = (filter: string) => {
        const filteredData = local_games.filter((item) => 
            item.discipline.toLowerCase().includes(filter.toLowerCase())
        );
        setFilteredData(filteredData);
    };
    */
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
                            
                            {(!games|| games.length === 0 || errors) && (
                                <div>
                                    <p>Oops! No games here!</p>
                                </div>
                            )} 
                            <ul className="game-list">
                                {/*<li style={{ listStyle: 'none' }}>{game.id} | {game.title}</li> */}
                                {games.map((game) => {
                                return (
                                    <li className="game-list-item">
                                        <GameWidget game_id={game.id}>
                                            <div className="game-data">
                                                <div className="game-thumbnail">
                                                    {(!game.thumbnail_url || game.thumbnail_url === undefined) && (
                                                        <img src="/assets/images/controller.png" alt="defaul thumbnail"></img>
                                                    )}
                                                    <img src={game.thumbnail_url?.toString()} />
                                                </div>
                                                <div className="game-metadata">
                                                    {game.id}
                                                    {game.title}
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
