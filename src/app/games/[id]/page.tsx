import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';

//import {revalidatePath} from 'next/cache'

//import * as queries from '@/graphql/queries';
import * as custom_queries from '@/graphql/customQueries'
import config from '@/amplifyconfiguration.json';
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import { BsArrowLeftCircle } from 'react-icons/bs';

//style
import '@/css/GamePage.css'



const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies
});

export default async function Page({ params }: { params: { id: string } }) {
  /*
  const { data,  errors } = await cookiesClient.graphql({
    query: queries.getGames,
    variables: {
      id: params.id,
    }
  });
  */
  
  const {data, errors} = await cookiesClient.graphql({
    query: custom_queries.getGamesAndPreviewImages,
    variables: {
      id: params.id
    }
  })
  const game = data.getGames
  const images = game?.preview?.items.reverse()
  
  /*
  const { data, error } = await cookiesClient.graphql({

  })
  */

  return (
    <>
    {/*<Header />*/}
    <a id='back-arrow' href='/games'>  
      <BsArrowLeftCircle size={40}/>
    </a>
    <div>
      <div>
        {(!game || errors) && (
          <div className='content'>
            <p>Oops! No games here!</p>
          </div>
        )} 
        {/*(loading) && (
          <div className='content loading'>loading...</div>
        )*/}
        {(game) && (
          <div className='content game'>
            <div className='game-header'>
              <h2 className='secondary-label'>{game.title}</h2>
              <h3 className='tertiary-label-normal'>{game?.year}</h3>
            </div>
            {images && (
              <div className='game-preview'>
            
              <ImageCarousel images={images} />
              {/*images?.map((image) => (
                <>
                <img src={image?.url} />
                </>
                
              ))*/}
              </div>
            )}
            <div className='description'>
              {game.description}
            </div>
            
            <div className='game-link'> 
              {(game?.outbound_url !== undefined || game?.outbound_url !== "") && (
                <div className='outbound'> 
                  <h2 className='tertiary-label-bold'>Play Me!</h2>
                  <div className='widget-wrapper'>
                    <iframe  src={game.url} width="552" height="167">
                      {(game.outbound_url) && (
                        <a href={game.outbound_url}>{game.outbound_label}</a>
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