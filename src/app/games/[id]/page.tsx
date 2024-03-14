import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';

import {revalidatePath} from 'next/cache'

import * as queries from '@/graphql/queries';
import config from '@/amplifyconfiguration.json';
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
import { Games } from '@/API';

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
          <div>
            {game.title}
            {game.description}
            <iframe frameBorder="0" src={game.url} width="552" height="167">
              {(game.outbound_url) && (
                <a href={game.outbound_url}>{game.outbound_label}</a>
              )}
            </iframe>
          </div>
        )}
      </div>
    </Body>
    <Footer />
    </>
  )
}