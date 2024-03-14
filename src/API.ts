/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGamesInput = {
  id?: string | null,
  title: string,
  preview: Array< string >,
  description: string,
  tags: Array< string >,
  year?: number | null,
  type: string,
  thumbnail_url?: string | null,
  url: string,
  outbound_url?: string | null,
  outbound_label?: string | null,
  mobile: boolean,
};

export type ModelGamesConditionInput = {
  title?: ModelStringInput | null,
  preview?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  year?: ModelIntInput | null,
  type?: ModelStringInput | null,
  thumbnail_url?: ModelStringInput | null,
  url?: ModelStringInput | null,
  outbound_url?: ModelStringInput | null,
  outbound_label?: ModelStringInput | null,
  mobile?: ModelBooleanInput | null,
  and?: Array< ModelGamesConditionInput | null > | null,
  or?: Array< ModelGamesConditionInput | null > | null,
  not?: ModelGamesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Games = {
  __typename: "Games",
  id: string,
  title: string,
  preview: Array< string >,
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
};

export type UpdateGamesInput = {
  id: string,
  title?: string | null,
  preview?: Array< string > | null,
  description?: string | null,
  tags?: Array< string > | null,
  year?: number | null,
  type?: string | null,
  thumbnail_url?: string | null,
  url?: string | null,
  outbound_url?: string | null,
  outbound_label?: string | null,
  mobile?: boolean | null,
};

export type DeleteGamesInput = {
  id: string,
};

export type ModelGamesFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  preview?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  year?: ModelIntInput | null,
  type?: ModelStringInput | null,
  thumbnail_url?: ModelStringInput | null,
  url?: ModelStringInput | null,
  outbound_url?: ModelStringInput | null,
  outbound_label?: ModelStringInput | null,
  mobile?: ModelBooleanInput | null,
  and?: Array< ModelGamesFilterInput | null > | null,
  or?: Array< ModelGamesFilterInput | null > | null,
  not?: ModelGamesFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelGamesConnection = {
  __typename: "ModelGamesConnection",
  items:  Array<Games | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionGamesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  preview?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  year?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  thumbnail_url?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  outbound_url?: ModelSubscriptionStringInput | null,
  outbound_label?: ModelSubscriptionStringInput | null,
  mobile?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionGamesFilterInput | null > | null,
  or?: Array< ModelSubscriptionGamesFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateGamesMutationVariables = {
  input: CreateGamesInput,
  condition?: ModelGamesConditionInput | null,
};

export type CreateGamesMutation = {
  createGames?:  {
    __typename: "Games",
    id: string,
    title: string,
    preview: Array< string >,
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

export type UpdateGamesMutationVariables = {
  input: UpdateGamesInput,
  condition?: ModelGamesConditionInput | null,
};

export type UpdateGamesMutation = {
  updateGames?:  {
    __typename: "Games",
    id: string,
    title: string,
    preview: Array< string >,
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

export type DeleteGamesMutationVariables = {
  input: DeleteGamesInput,
  condition?: ModelGamesConditionInput | null,
};

export type DeleteGamesMutation = {
  deleteGames?:  {
    __typename: "Games",
    id: string,
    title: string,
    preview: Array< string >,
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

export type GetGamesQueryVariables = {
  id: string,
};

export type GetGamesQuery = {
  getGames?:  {
    __typename: "Games",
    id: string,
    title: string,
    preview: Array< string >,
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

export type ListGamesQueryVariables = {
  filter?: ModelGamesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGamesConnection",
    items:  Array< {
      __typename: "Games",
      id: string,
      title: string,
      preview: Array< string >,
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
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGamesSubscriptionVariables = {
  filter?: ModelSubscriptionGamesFilterInput | null,
};

export type OnCreateGamesSubscription = {
  onCreateGames?:  {
    __typename: "Games",
    id: string,
    title: string,
    preview: Array< string >,
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

export type OnUpdateGamesSubscriptionVariables = {
  filter?: ModelSubscriptionGamesFilterInput | null,
};

export type OnUpdateGamesSubscription = {
  onUpdateGames?:  {
    __typename: "Games",
    id: string,
    title: string,
    preview: Array< string >,
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

export type OnDeleteGamesSubscriptionVariables = {
  filter?: ModelSubscriptionGamesFilterInput | null,
};

export type OnDeleteGamesSubscription = {
  onDeleteGames?:  {
    __typename: "Games",
    id: string,
    title: string,
    preview: Array< string >,
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
