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
    preview
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
    preview
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
    preview
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
