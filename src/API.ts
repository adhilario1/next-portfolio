/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGamesInput = {
  id?: string | null,
  title: string,
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
};

export type ModelImageConnection = {
  __typename: "ModelImageConnection",
  items:  Array<Image | null >,
  nextToken?: string | null,
};

export type Image = {
  __typename: "Image",
  id: string,
  url: string,
  gameID: string,
  type: string,
  description: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGamesInput = {
  id: string,
  title?: string | null,
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

export type CreateImageInput = {
  id?: string | null,
  url: string,
  gameID: string,
  type: string,
  description: string,
};

export type ModelImageConditionInput = {
  url?: ModelStringInput | null,
  gameID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelImageConditionInput | null > | null,
  or?: Array< ModelImageConditionInput | null > | null,
  not?: ModelImageConditionInput | null,
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

export type UpdateImageInput = {
  id: string,
  url?: string | null,
  gameID?: string | null,
  type?: string | null,
  description?: string | null,
};

export type DeleteImageInput = {
  id: string,
};

export type ModelGamesFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
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

export type ModelGamesConnection = {
  __typename: "ModelGamesConnection",
  items:  Array<Games | null >,
  nextToken?: string | null,
};

export type ModelImageFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  gameID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelImageFilterInput | null > | null,
  or?: Array< ModelImageFilterInput | null > | null,
  not?: ModelImageFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionGamesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionImageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  url?: ModelSubscriptionStringInput | null,
  gameID?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionImageFilterInput | null > | null,
  or?: Array< ModelSubscriptionImageFilterInput | null > | null,
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
    preview?:  {
      __typename: "ModelImageConnection",
      nextToken?: string | null,
    } | null,
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
    preview?:  {
      __typename: "ModelImageConnection",
      nextToken?: string | null,
    } | null,
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
    preview?:  {
      __typename: "ModelImageConnection",
      nextToken?: string | null,
    } | null,
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

export type CreateImageMutationVariables = {
  input: CreateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type CreateImageMutation = {
  createImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    gameID: string,
    type: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateImageMutationVariables = {
  input: UpdateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type UpdateImageMutation = {
  updateImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    gameID: string,
    type: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteImageMutationVariables = {
  input: DeleteImageInput,
  condition?: ModelImageConditionInput | null,
};

export type DeleteImageMutation = {
  deleteImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    gameID: string,
    type: string,
    description: string,
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
    preview?:  {
      __typename: "ModelImageConnection",
      nextToken?: string | null,
    } | null,
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

export type GetImageQueryVariables = {
  id: string,
};

export type GetImageQuery = {
  getImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    gameID: string,
    type: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListImagesQueryVariables = {
  filter?: ModelImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagesQuery = {
  listImages?:  {
    __typename: "ModelImageConnection",
    items:  Array< {
      __typename: "Image",
      id: string,
      url: string,
      gameID: string,
      type: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ImagesByGameIDAndUrlQueryVariables = {
  gameID: string,
  url?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ImagesByGameIDAndUrlQuery = {
  imagesByGameIDAndUrl?:  {
    __typename: "ModelImageConnection",
    items:  Array< {
      __typename: "Image",
      id: string,
      url: string,
      gameID: string,
      type: string,
      description: string,
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
    preview?:  {
      __typename: "ModelImageConnection",
      nextToken?: string | null,
    } | null,
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
    preview?:  {
      __typename: "ModelImageConnection",
      nextToken?: string | null,
    } | null,
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
    preview?:  {
      __typename: "ModelImageConnection",
      nextToken?: string | null,
    } | null,
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

export type OnCreateImageSubscriptionVariables = {
  filter?: ModelSubscriptionImageFilterInput | null,
};

export type OnCreateImageSubscription = {
  onCreateImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    gameID: string,
    type: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateImageSubscriptionVariables = {
  filter?: ModelSubscriptionImageFilterInput | null,
};

export type OnUpdateImageSubscription = {
  onUpdateImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    gameID: string,
    type: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteImageSubscriptionVariables = {
  filter?: ModelSubscriptionImageFilterInput | null,
};

export type OnDeleteImageSubscription = {
  onDeleteImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    gameID: string,
    type: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
