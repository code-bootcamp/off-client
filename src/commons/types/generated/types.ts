export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export enum IBoard_Status_Enum {
  Reservation = 'RESERVATION',
  Sale = 'SALE',
  Soldout = 'SOLDOUT'
}

export type IBoard = {
  __typename?: 'Board';
  category: ICategory;
  contents: Scalars['String'];
  deletedAt: Scalars['String'];
  expDate: Scalars['DateTime'];
  id: Scalars['String'];
  regDate: Scalars['DateTime'];
  salesLocation: ISalesLocations;
  status: IBoard_Status_Enum;
  title: Scalars['String'];
  user: IUser;
};

export type ICategory = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ICreateBoardInput = {
  categoryId: Scalars['String'];
  contents: Scalars['String'];
  expDate: Scalars['DateTime'];
  salesLocations: ISalesLocationsInput;
  title: Scalars['String'];
  url: Array<Scalars['String']>;
};

export type ICreateFridgeFoodInput = {
  alarm: Scalars['Int'];
  category: Scalars['String'];
  expDate: Scalars['DateTime'];
  name: Scalars['String'];
  price: Scalars['Int'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export enum IFridge_Status_Enum {
  Freezer = 'FREEZER',
  Fridge = 'FRIDGE'
}

export type IFridge = {
  __typename?: 'Fridge';
  id: Scalars['String'];
  user: IUser;
};

export type IFridgeFood = {
  __typename?: 'FridgeFood';
  alarm: Scalars['Int'];
  category: ICategory;
  expDate: Scalars['DateTime'];
  fridge: IFridge;
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  regDate: Scalars['DateTime'];
  status: IFridge_Status_Enum;
};

export type IMutation = {
  __typename?: 'Mutation';
  checkValidToken: Scalars['String'];
  createBoard: IBoard;
  createCategory: ICategory;
  createFridgeFood: IFridgeFood;
  createUser: IUser;
  deleteBoard: Scalars['Boolean'];
  deleteFridgeFood: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  getToken: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreUser: Scalars['Boolean'];
  updateBoard: IBoard;
  updateFridgeFoods: Scalars['String'];
  updateUser: IUser;
  uploadFile: Array<Scalars['String']>;
};


export type IMutationCheckValidTokenArgs = {
  phone: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateCategoryArgs = {
  name: Scalars['String'];
};


export type IMutationCreateFridgeFoodArgs = {
  fridgeFoodInput: ICreateFridgeFoodInput;
  status: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteFridgeFoodArgs = {
  foodId: Scalars['String'];
  fridgeId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  email: Scalars['String'];
};


export type IMutationGetTokenArgs = {
  phone: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRestoreUserArgs = {
  email: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateFridgeFoodsArgs = {
  fridgeFoodId: Scalars['String'];
  status: Scalars['String'];
  updateFridgeFoodInput: IUpdateFridgeFoodInput;
};


export type IMutationUpdateUserArgs = {
  email: Scalars['String'];
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoard: IBoard;
  fetchBoards: Array<IBoard>;
  fetchFridgeFoods: Array<IFridgeFood>;
  fetchUser: IUser;
  fetchUserWithDeleted: Array<IUser>;
  fetchUsers: Array<IUser>;
};


export type IQueryFetchBoardArgs = {
  id: Scalars['String'];
};


export type IQueryFetchFridgeFoodsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchUserArgs = {
  email: Scalars['String'];
};

export type ISalesLocations = {
  __typename?: 'SalesLocations';
  address: Scalars['String'];
  detailAddress: Scalars['String'];
  id: Scalars['String'];
};

export type ISalesLocationsInput = {
  address: Scalars['String'];
  detailAddress: Scalars['String'];
};

export type IUpdateBoardInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  expDate?: InputMaybe<Scalars['DateTime']>;
  salesLocations?: InputMaybe<ISalesLocationsInput>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Array<Scalars['String']>>;
};

export type IUpdateFridgeFoodInput = {
  alarm: Scalars['Int'];
  category: Scalars['String'];
  expDate: Scalars['DateTime'];
  name: Scalars['String'];
  price: Scalars['Int'];
};

export type IUser = {
  __typename?: 'User';
  deletedAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  regDate: Scalars['DateTime'];
  usersimage: IUsersImage;
};

export type IUsersImage = {
  __typename?: 'UsersImage';
  id: Scalars['String'];
  url: Scalars['String'];
  user: IUser;
};

export type IUpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};
