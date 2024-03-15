import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';

//import {revalidatePath} from 'next/cache'

import * as queries from '@/graphql/queries';
import config from '@/amplifyconfiguration.json';
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
//import { Games } from '@/API';

//style
import '@/css/GamePage.css'

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies
});

export default async function Page({ params }: { params: { id: string } }) {
  const { data, errors } = await cookiesClient.graphql({
    query: queries.getGames,
    variables: {
      id: params.id,
    }
  });

  const game = data.getGames

  return (
    <>
    <Header />
    <Body>
      <div>
        {(!game || errors) && (
          <div>
            <p>Oops! No games here!</p>
          </div>
        )} 
        {(game) && (
          <div className='content game'>
            <div className='game-header'>
              <h2 className='secondary-label'>{game.title}</h2>
              <h3 className='tertiary-label-normal'>{game?.year}</h3>
            </div>
            
            <div className='game-preview'>
              {(game?.preview && game?.preview.length > 0 ) && (
                <>
                <ImageCarousel images={game.preview} />
                </>
              )}
            </div>
            
            <div className='description'>
              {game.description}
            </div>
            
            <div className='game-link'> 
              {(game?.outbound_url !== undefined || game?.outbound_url !== "") && (
                <div className='outbound'> 
                  <h2 className='tertiary-label-bold'>Play Me!</h2>
                  <iframe frameBorder="0" src={game.url} width="552" height="167">
                  {(game.outbound_url) && (
                    <a href={game.outbound_url}>{game.outbound_label}</a>
                  )}
                  </iframe>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Body>
    <Footer />
    </>
  )
}