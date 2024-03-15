/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateGames = /* GraphQL */ `subscription OnCreateGames($filter: ModelSubscriptionGamesFilterInput) {
  onCreateGames(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGamesSubscriptionVariables,
  APITypes.OnCreateGamesSubscription
>;
export const onUpdateGames = /* GraphQL */ `subscription OnUpdateGames($filter: ModelSubscriptionGamesFilterInput) {
  onUpdateGames(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGamesSubscriptionVariables,
  APITypes.OnUpdateGamesSubscription
>;
export const onDeleteGames = /* GraphQL */ `subscription OnDeleteGames($filter: ModelSubscriptionGamesFilterInput) {
  onDeleteGames(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGamesSubscriptionVariables,
  APITypes.OnDeleteGamesSubscription
>;
export const onCreateImage = /* GraphQL */ `subscription OnCreateImage($filter: ModelSubscriptionImageFilterInput) {
  onCreateImage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateImageSubscriptionVariables,
  APITypes.OnCreateImageSubscription
>;
export const onUpdateImage = /* GraphQL */ `subscription OnUpdateImage($filter: ModelSubscriptionImageFilterInput) {
  onUpdateImage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateImageSubscriptionVariables,
  APITypes.OnUpdateImageSubscription
>;
export const onDeleteImage = /* GraphQL */ `subscription OnDeleteImage($filter: ModelSubscriptionImageFilterInput) {
  onDeleteImage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteImageSubscriptionVariables,
  APITypes.OnDeleteImageSubscription
>;
