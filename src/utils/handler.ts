import type { NextApiRequest, NextApiResponse } from 'next'
import type { Games } from '@/API'
import { runWithAmplifyServerContext, reqResBasedClient } from '@/utils/amplifyServerUtils'
import { listGames } from '@/graphql/queries'

type ResponseData = {
  games: Games[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const todos = await runWithAmplifyServerContext({
    nextServerContext: { req, res},
    operation: async (contextSpec) => {
      const request = await reqResBasedClient.graphql(contextSpec, {
        query: listGames
      })

      return request.data.listGames.items
    }
  })
  res.status(200).json({ games })
}