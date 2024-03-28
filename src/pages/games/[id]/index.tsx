import React, { useState } from 'react';
import { useRouter } from 'next/router';

import useSWR from 'swr';

import * as custom_queries from '@/graphql/customQueries'
import config from '@/amplifyconfiguration.json';
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import { BsArrowLeftCircle } from 'react-icons/bs';

//style
import '@/css/GamePage.css'
import { ApiError, get } from 'aws-amplify/api';

//aws
import { Amplify } from 'aws-amplify';
import amplifyconfig from '@/amplifyconfiguration.json';

import GameWidget from "@/components/GameWidget";
import { Game } from '@/scripts/GameModel';
Amplify.configure(amplifyconfig);

async function getSingleGameData(url: string) {
  try {
    const restOperation = get({

      apiName: 'portfolioAPI',
      path: url,
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


export default function GamePage() {
  const router = useRouter()
  const path: string = '/game/'+router.query.id;
  console.log(path);
  const { data } = useSWR('/game/1', getSingleGameData);

  const [remoteDataFlag, setRemoteDataFlag] = useState(false);
  const [gameData, setGameData] = useState<Game>();
  const [previewImages, setPreviews] = useState<string[]>();
  if (!data) {
    
    return(
      <div className='content game'>
        <div className='game-header'>
          <h2>Loading Game Data...</h2>
        </div>
      </div>
    )
  }

  if (data instanceof ApiError) {
    //setRemoteDataFlag(false);
    return (
      <>
      <a id='back-arrow' href='/games'>  
      <BsArrowLeftCircle size={40}/>
      </a>
      <div>
        <div>
          <div className='content game'>
            <div className='game-header'>
              <h2 className='secondary-label'>Error!</h2>
              <h3 className='secondary-label'>Unable to Load Game Data: {data.name}</h3>
              <p>
                {data.message}
                <br /><br />
                
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  } else if (!remoteDataFlag) {
    const remote_data: Game[] = JSON.parse(data);
    setGameData(remote_data[0]);
    setPreviews(gameData?.preview);
    setRemoteDataFlag(true);
  }

  
  
  console.log('title', gameData)
  
  return (
    <>
    {/*<Header />*/}
    <a id='back-arrow' href='/games'>  
      <BsArrowLeftCircle size={40}/>
    </a>
    <div>
      <div>
        {gameData && (
          <div className='content game'>
            <div className='game-header'>
              <h2 className='secondary-label'>{gameData.title}</h2>
              <h3 className='tertiary-label-normal'>{gameData.year}</h3>
            </div>
            {previewImages && (
              <div className='game-preview'>
                
              <ul>
                {previewImages.map((image) => {
                  return (
                    <li>
                      
                      <img src={image} />
                    </li>
                  )
                })}
              </ul>
              {/*images?.map((image) => (
                <>
                <img src={image?.url} />
                </>
                <ImageCarousel images={images} />
              ))*/}
              </div>
            )}
            <div className='description'>
              {gameData.description}
            </div>
            
            <div className='game-link'> 
              {(gameData?.outbound_url !== undefined || gameData?.outbound_url !== "") && (
                <div className='outbound'> 
                  <h2 className='tertiary-label-bold'>Play Me!</h2>
                  <div className='widget-wrapper'>
                    <iframe  src={gameData?.url} width="552" height="167">
                      {(gameData?.outbound_url) && (
                        <a href={gameData.outbound_url}>{gameData.outbound_label}</a>
                      )}
                    </iframe>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  )
  
}