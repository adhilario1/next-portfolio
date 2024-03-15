/* tslint:disable */
/* eslint-disable */

import * as APITypes from "../API";
import * as customAPITypes from "../customGraphQLAPI";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getGamesAndPreviewImages = /* GraphQL */ `query GetGames($id: ID!){
    getGames(id: $id) {
    id
    title
    preview {
      items{
        url
        type
        description
      }
    }
    description
    tags
    year
    type
    thumbnail_url
    url
    outbound_url
    outbound_label
    mobile
    createdAt
    updatedAt
    __typename
  }
}` as GeneratedQuery<APITypes.GetGamesQueryVariables, customAPITypes.GetGamesQueryWithImages>;