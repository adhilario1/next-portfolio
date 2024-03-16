import { ModelImageConnection } from "./API";


export type GetGamesQueryWithImages = {
    getGames?:  {
      __typename: "Games",
      id: string,
      title: string,
      preview?: ModelImageConnection | null,
      description: string,
      tags: Array< string >,
      year?: number | null,
      type: string,
      thumbnail_url?: string | null,
      url: string,
      outbound_url?: string | null,
      outbound_label?: string | null,
      mobile: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
};

export type nestedImageQuery = {
    getImage?:  {
      __typename: "Image",
      id?: string,
      url?: string,
      gameID?: string,
      type?: string,
      description?: string,
      createdAt?: string,
      updatedAt?: string,
    } | null,
};