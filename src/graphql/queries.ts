/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getGames = /* GraphQL */ `query GetGames($id: ID!) {
  getGames(id: $id) {
    id
    title
    preview {
      nextToken
      __typename
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
}
` as GeneratedQuery<APITypes.GetGamesQueryVariables, APITypes.GetGamesQuery>;
export const listGames = /* GraphQL */ `query ListGames(
  $filter: ModelGamesFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListGamesQueryVariables, APITypes.ListGamesQuery>;
export const getImage = /* GraphQL */ `query GetImage($id: ID!) {
  getImage(id: $id) {
    id
    url
    gameID
    type
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetImageQueryVariables, APITypes.GetImageQuery>;
export const listImages = /* GraphQL */ `query ListImages(
  $filter: ModelImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      gameID
      type
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListImagesQueryVariables,
  APITypes.ListImagesQuery
>;
export const imagesByGameIDAndUrl = /* GraphQL */ `query ImagesByGameIDAndUrl(
  $gameID: ID!
  $url: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelImageFilterInput
  $limit: Int
  $nextToken: String
) {
  imagesByGameIDAndUrl(
    gameID: $gameID
    url: $url
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      url
      gameID
      type
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ImagesByGameIDAndUrlQueryVariables,
  APITypes.ImagesByGameIDAndUrlQuery
>;
