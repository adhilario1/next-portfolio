/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createGames = /* GraphQL */ `mutation CreateGames(
  $input: CreateGamesInput!
  $condition: ModelGamesConditionInput
) {
  createGames(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGamesMutationVariables,
  APITypes.CreateGamesMutation
>;
export const updateGames = /* GraphQL */ `mutation UpdateGames(
  $input: UpdateGamesInput!
  $condition: ModelGamesConditionInput
) {
  updateGames(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGamesMutationVariables,
  APITypes.UpdateGamesMutation
>;
export const deleteGames = /* GraphQL */ `mutation DeleteGames(
  $input: DeleteGamesInput!
  $condition: ModelGamesConditionInput
) {
  deleteGames(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGamesMutationVariables,
  APITypes.DeleteGamesMutation
>;
export const createImage = /* GraphQL */ `mutation CreateImage(
  $input: CreateImageInput!
  $condition: ModelImageConditionInput
) {
  createImage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateImageMutationVariables,
  APITypes.CreateImageMutation
>;
export const updateImage = /* GraphQL */ `mutation UpdateImage(
  $input: UpdateImageInput!
  $condition: ModelImageConditionInput
) {
  updateImage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateImageMutationVariables,
  APITypes.UpdateImageMutation
>;
export const deleteImage = /* GraphQL */ `mutation DeleteImage(
  $input: DeleteImageInput!
  $condition: ModelImageConditionInput
) {
  deleteImage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteImageMutationVariables,
  APITypes.DeleteImageMutation
>;
