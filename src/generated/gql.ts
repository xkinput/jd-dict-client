import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** BigInt custom scalar type */
  BigInt: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** Json custom scalar type */
  Json: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

/**
 * 词条-操作
 * 记录如何去调整一个词条
 */
export type Action = {
  __typename?: 'Action';
  _count: ActionCountOutputType;
  code: Scalars['String'];
  createAt: Scalars['DateTime'];
  id: Scalars['Int'];
  phrase: Phrase;
  phraseId: Scalars['Int'];
  pullRequests: Array<PullRequest>;
  type: ActionType;
  updateAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
  word: Scalars['String'];
};


/**
 * 词条-操作
 * 记录如何去调整一个词条
 */
export type ActionPullRequestsArgs = {
  cursor?: InputMaybe<PullRequestWhereUniqueInput>;
  distinct?: InputMaybe<PullRequestScalarFieldEnum>;
  orderBy?: InputMaybe<PullRequestOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PullRequestWhereInput>;
};

export type ActionAvgAggregateOutputType = {
  __typename?: 'ActionAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  phraseId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type ActionAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ActionCountAggregateOutputType = {
  __typename?: 'ActionCountAggregateOutputType';
  _all: Scalars['Int'];
  code: Scalars['Int'];
  createAt: Scalars['Int'];
  id: Scalars['Int'];
  phraseId: Scalars['Int'];
  type: Scalars['Int'];
  updateAt: Scalars['Int'];
  userId: Scalars['Int'];
  word: Scalars['Int'];
};

export type ActionCountOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  word?: InputMaybe<SortOrder>;
};

export type ActionCountOutputType = {
  __typename?: 'ActionCountOutputType';
  pullRequests: Scalars['Int'];
};

export type ActionCreateInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  phrase: PhraseCreateNestedOneWithoutActionsInput;
  pullRequests?: InputMaybe<PullRequestCreateNestedManyWithoutActionInput>;
  type: ActionType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutActionsInput;
  word: Scalars['String'];
};

export type ActionCreateManyInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId: Scalars['Int'];
  type: ActionType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  word: Scalars['String'];
};

export type ActionCreateManyPhraseInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  type: ActionType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  word: Scalars['String'];
};

export type ActionCreateManyPhraseInputEnvelope = {
  data: ActionCreateManyPhraseInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActionCreateManyUserInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId: Scalars['Int'];
  type: ActionType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  word: Scalars['String'];
};

export type ActionCreateManyUserInputEnvelope = {
  data: ActionCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActionCreateNestedManyWithoutPhraseInput = {
  connect?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ActionCreateOrConnectWithoutPhraseInput>>>;
  create?: InputMaybe<Array<InputMaybe<ActionCreateWithoutPhraseInput>>>;
  createMany?: InputMaybe<ActionCreateManyPhraseInputEnvelope>;
};

export type ActionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ActionCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<ActionCreateWithoutUserInput>>>;
  createMany?: InputMaybe<ActionCreateManyUserInputEnvelope>;
};

export type ActionCreateNestedOneWithoutPullRequestsInput = {
  connect?: InputMaybe<ActionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActionCreateOrConnectWithoutPullRequestsInput>;
  create?: InputMaybe<ActionUncheckedCreateWithoutPullRequestsInput>;
};

export type ActionCreateOrConnectWithoutPhraseInput = {
  create: ActionUncheckedCreateWithoutPhraseInput;
  where: ActionWhereUniqueInput;
};

export type ActionCreateOrConnectWithoutPullRequestsInput = {
  create: ActionUncheckedCreateWithoutPullRequestsInput;
  where: ActionWhereUniqueInput;
};

export type ActionCreateOrConnectWithoutUserInput = {
  create: ActionUncheckedCreateWithoutUserInput;
  where: ActionWhereUniqueInput;
};

export type ActionCreateWithoutPhraseInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  pullRequests?: InputMaybe<PullRequestCreateNestedManyWithoutActionInput>;
  type: ActionType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutActionsInput;
  word: Scalars['String'];
};

export type ActionCreateWithoutPullRequestsInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  phrase: PhraseCreateNestedOneWithoutActionsInput;
  type: ActionType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutActionsInput;
  word: Scalars['String'];
};

export type ActionCreateWithoutUserInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  phrase: PhraseCreateNestedOneWithoutActionsInput;
  pullRequests?: InputMaybe<PullRequestCreateNestedManyWithoutActionInput>;
  type: ActionType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  word: Scalars['String'];
};

export type ActionListRelationFilter = {
  every?: InputMaybe<ActionWhereInput>;
  none?: InputMaybe<ActionWhereInput>;
  some?: InputMaybe<ActionWhereInput>;
};

export type ActionMaxAggregateOutputType = {
  __typename?: 'ActionMaxAggregateOutputType';
  code?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  phraseId?: Maybe<Scalars['Int']>;
  type?: Maybe<ActionType>;
  updateAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  word?: Maybe<Scalars['String']>;
};

export type ActionMaxOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  word?: InputMaybe<SortOrder>;
};

export type ActionMinAggregateOutputType = {
  __typename?: 'ActionMinAggregateOutputType';
  code?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  phraseId?: Maybe<Scalars['Int']>;
  type?: Maybe<ActionType>;
  updateAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  word?: Maybe<Scalars['String']>;
};

export type ActionMinOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  word?: InputMaybe<SortOrder>;
};

export type ActionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ActionOrderByRelevanceFieldEnum {
  Code = 'code',
  Word = 'word'
}

export type ActionOrderByRelevanceInput = {
  fields: ActionOrderByRelevanceFieldEnum;
  search: Scalars['String'];
  sort: SortOrder;
};

export type ActionOrderByWithAggregationInput = {
  _avg?: InputMaybe<ActionAvgOrderByAggregateInput>;
  _count?: InputMaybe<ActionCountOrderByAggregateInput>;
  _max?: InputMaybe<ActionMaxOrderByAggregateInput>;
  _min?: InputMaybe<ActionMinOrderByAggregateInput>;
  _sum?: InputMaybe<ActionSumOrderByAggregateInput>;
  code?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  word?: InputMaybe<SortOrder>;
};

export type ActionOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ActionOrderByRelevanceInput>;
  code?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phrase?: InputMaybe<PhraseOrderByWithRelationAndSearchRelevanceInput>;
  phraseId?: InputMaybe<SortOrder>;
  pullRequests?: InputMaybe<PullRequestOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
  word?: InputMaybe<SortOrder>;
};

export type ActionRelationFilter = {
  is?: InputMaybe<ActionWhereInput>;
  isNot?: InputMaybe<ActionWhereInput>;
};

export enum ActionScalarFieldEnum {
  Code = 'code',
  CreateAt = 'createAt',
  Id = 'id',
  PhraseId = 'phraseId',
  Type = 'type',
  UpdateAt = 'updateAt',
  UserId = 'userId',
  Word = 'word'
}

export type ActionScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ActionScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ActionScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ActionScalarWhereInput>>>;
  code?: InputMaybe<StringFilter>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  phraseId?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumActionTypeFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
  word?: InputMaybe<StringFilter>;
};

export type ActionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<ActionScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ActionScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ActionScalarWhereWithAggregatesInput>>>;
  code?: InputMaybe<StringWithAggregatesFilter>;
  createAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  phraseId?: InputMaybe<IntWithAggregatesFilter>;
  type?: InputMaybe<EnumActionTypeWithAggregatesFilter>;
  updateAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
  word?: InputMaybe<StringWithAggregatesFilter>;
};

export type ActionSumAggregateOutputType = {
  __typename?: 'ActionSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  phraseId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ActionSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum ActionType {
  Change = 'Change',
  Create = 'Create',
  Delete = 'Delete',
  Move = 'Move'
}

export type ActionUncheckedCreateInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId: Scalars['Int'];
  pullRequests?: InputMaybe<PullRequestUncheckedCreateNestedManyWithoutActionInput>;
  type: ActionType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  word: Scalars['String'];
};

export type ActionUncheckedCreateNestedManyWithoutPhraseInput = {
  connect?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ActionCreateOrConnectWithoutPhraseInput>>>;
  create?: InputMaybe<Array<InputMaybe<ActionCreateWithoutPhraseInput>>>;
  createMany?: InputMaybe<ActionCreateManyPhraseInputEnvelope>;
};

export type ActionUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ActionCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<ActionCreateWithoutUserInput>>>;
  createMany?: InputMaybe<ActionCreateManyUserInputEnvelope>;
};

export type ActionUncheckedCreateWithoutPhraseInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  pullRequests?: InputMaybe<PullRequestUncheckedCreateNestedManyWithoutActionInput>;
  type: ActionType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  word: Scalars['String'];
};

export type ActionUncheckedCreateWithoutPullRequestsInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId: Scalars['Int'];
  type: ActionType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  word: Scalars['String'];
};

export type ActionUncheckedCreateWithoutUserInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId: Scalars['Int'];
  pullRequests?: InputMaybe<PullRequestUncheckedCreateNestedManyWithoutActionInput>;
  type: ActionType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  word: Scalars['String'];
};

export type ActionUncheckedUpdateInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<IntFieldUpdateOperationsInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedUpdateManyWithoutActionInput>;
  type?: InputMaybe<EnumActionTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUncheckedUpdateManyInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumActionTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUncheckedUpdateManyWithoutActionsInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumActionTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUncheckedUpdateManyWithoutPhraseInput = {
  connect?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ActionCreateOrConnectWithoutPhraseInput>>>;
  create?: InputMaybe<Array<InputMaybe<ActionCreateWithoutPhraseInput>>>;
  createMany?: InputMaybe<ActionCreateManyPhraseInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ActionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ActionUpdateWithWhereUniqueWithoutPhraseInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ActionUpdateManyWithWhereWithoutPhraseInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ActionUpsertWithWhereUniqueWithoutPhraseInput>>>;
};

export type ActionUncheckedUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ActionCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<ActionCreateWithoutUserInput>>>;
  createMany?: InputMaybe<ActionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ActionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ActionUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ActionUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ActionUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type ActionUncheckedUpdateWithoutPhraseInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedUpdateManyWithoutActionInput>;
  type?: InputMaybe<EnumActionTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUncheckedUpdateWithoutPullRequestsInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumActionTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUncheckedUpdateWithoutUserInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<IntFieldUpdateOperationsInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedUpdateManyWithoutActionInput>;
  type?: InputMaybe<EnumActionTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUpdateInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateOneRequiredWithoutActionsInput>;
  pullRequests?: InputMaybe<PullRequestUpdateManyWithoutActionInput>;
  type?: InputMaybe<EnumActionTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutActionsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUpdateManyMutationInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumActionTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUpdateManyWithWhereWithoutPhraseInput = {
  data: ActionUncheckedUpdateManyWithoutActionsInput;
  where: ActionScalarWhereInput;
};

export type ActionUpdateManyWithWhereWithoutUserInput = {
  data: ActionUncheckedUpdateManyWithoutActionsInput;
  where: ActionScalarWhereInput;
};

export type ActionUpdateManyWithoutPhraseInput = {
  connect?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ActionCreateOrConnectWithoutPhraseInput>>>;
  create?: InputMaybe<Array<InputMaybe<ActionCreateWithoutPhraseInput>>>;
  createMany?: InputMaybe<ActionCreateManyPhraseInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ActionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ActionUpdateWithWhereUniqueWithoutPhraseInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ActionUpdateManyWithWhereWithoutPhraseInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ActionUpsertWithWhereUniqueWithoutPhraseInput>>>;
};

export type ActionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ActionCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<ActionCreateWithoutUserInput>>>;
  createMany?: InputMaybe<ActionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ActionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ActionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ActionUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ActionUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ActionUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type ActionUpdateOneRequiredWithoutPullRequestsInput = {
  connect?: InputMaybe<ActionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActionCreateOrConnectWithoutPullRequestsInput>;
  create?: InputMaybe<ActionUncheckedCreateWithoutPullRequestsInput>;
  update?: InputMaybe<ActionUncheckedUpdateWithoutPullRequestsInput>;
  upsert?: InputMaybe<ActionUpsertWithoutPullRequestsInput>;
};

export type ActionUpdateWithWhereUniqueWithoutPhraseInput = {
  data: ActionUncheckedUpdateWithoutPhraseInput;
  where: ActionWhereUniqueInput;
};

export type ActionUpdateWithWhereUniqueWithoutUserInput = {
  data: ActionUncheckedUpdateWithoutUserInput;
  where: ActionWhereUniqueInput;
};

export type ActionUpdateWithoutPhraseInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  pullRequests?: InputMaybe<PullRequestUpdateManyWithoutActionInput>;
  type?: InputMaybe<EnumActionTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutActionsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUpdateWithoutPullRequestsInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateOneRequiredWithoutActionsInput>;
  type?: InputMaybe<EnumActionTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutActionsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUpdateWithoutUserInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateOneRequiredWithoutActionsInput>;
  pullRequests?: InputMaybe<PullRequestUpdateManyWithoutActionInput>;
  type?: InputMaybe<EnumActionTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUpsertWithWhereUniqueWithoutPhraseInput = {
  create: ActionUncheckedCreateWithoutPhraseInput;
  update: ActionUncheckedUpdateWithoutPhraseInput;
  where: ActionWhereUniqueInput;
};

export type ActionUpsertWithWhereUniqueWithoutUserInput = {
  create: ActionUncheckedCreateWithoutUserInput;
  update: ActionUncheckedUpdateWithoutUserInput;
  where: ActionWhereUniqueInput;
};

export type ActionUpsertWithoutPullRequestsInput = {
  create: ActionUncheckedCreateWithoutPullRequestsInput;
  update: ActionUncheckedUpdateWithoutPullRequestsInput;
};

export type ActionWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ActionWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ActionWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ActionWhereInput>>>;
  code?: InputMaybe<StringFilter>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  phrase?: InputMaybe<PhraseWhereInput>;
  phraseId?: InputMaybe<IntFilter>;
  pullRequests?: InputMaybe<PullRequestListRelationFilter>;
  type?: InputMaybe<EnumActionTypeFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<IntFilter>;
  word?: InputMaybe<StringFilter>;
};

export type ActionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type AggregateAction = {
  __typename?: 'AggregateAction';
  _avg?: Maybe<ActionAvgAggregateOutputType>;
  _count?: Maybe<ActionCountAggregateOutputType>;
  _max?: Maybe<ActionMaxAggregateOutputType>;
  _min?: Maybe<ActionMinAggregateOutputType>;
  _sum?: Maybe<ActionSumAggregateOutputType>;
};

export type AggregateCasbinRule = {
  __typename?: 'AggregateCasbinRule';
  _avg?: Maybe<CasbinRuleAvgAggregateOutputType>;
  _count?: Maybe<CasbinRuleCountAggregateOutputType>;
  _max?: Maybe<CasbinRuleMaxAggregateOutputType>;
  _min?: Maybe<CasbinRuleMinAggregateOutputType>;
  _sum?: Maybe<CasbinRuleSumAggregateOutputType>;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _avg?: Maybe<CommentAvgAggregateOutputType>;
  _count?: Maybe<CommentCountAggregateOutputType>;
  _max?: Maybe<CommentMaxAggregateOutputType>;
  _min?: Maybe<CommentMinAggregateOutputType>;
  _sum?: Maybe<CommentSumAggregateOutputType>;
};

export type AggregateNotice = {
  __typename?: 'AggregateNotice';
  _avg?: Maybe<NoticeAvgAggregateOutputType>;
  _count?: Maybe<NoticeCountAggregateOutputType>;
  _max?: Maybe<NoticeMaxAggregateOutputType>;
  _min?: Maybe<NoticeMinAggregateOutputType>;
  _sum?: Maybe<NoticeSumAggregateOutputType>;
};

export type AggregatePermission = {
  __typename?: 'AggregatePermission';
  _avg?: Maybe<PermissionAvgAggregateOutputType>;
  _count?: Maybe<PermissionCountAggregateOutputType>;
  _max?: Maybe<PermissionMaxAggregateOutputType>;
  _min?: Maybe<PermissionMinAggregateOutputType>;
  _sum?: Maybe<PermissionSumAggregateOutputType>;
};

export type AggregatePermissionAction = {
  __typename?: 'AggregatePermissionAction';
  _avg?: Maybe<PermissionActionAvgAggregateOutputType>;
  _count?: Maybe<PermissionActionCountAggregateOutputType>;
  _max?: Maybe<PermissionActionMaxAggregateOutputType>;
  _min?: Maybe<PermissionActionMinAggregateOutputType>;
  _sum?: Maybe<PermissionActionSumAggregateOutputType>;
};

export type AggregatePhrase = {
  __typename?: 'AggregatePhrase';
  _avg?: Maybe<PhraseAvgAggregateOutputType>;
  _count?: Maybe<PhraseCountAggregateOutputType>;
  _max?: Maybe<PhraseMaxAggregateOutputType>;
  _min?: Maybe<PhraseMinAggregateOutputType>;
  _sum?: Maybe<PhraseSumAggregateOutputType>;
};

export type AggregatePullRequest = {
  __typename?: 'AggregatePullRequest';
  _avg?: Maybe<PullRequestAvgAggregateOutputType>;
  _count?: Maybe<PullRequestCountAggregateOutputType>;
  _max?: Maybe<PullRequestMaxAggregateOutputType>;
  _min?: Maybe<PullRequestMinAggregateOutputType>;
  _sum?: Maybe<PullRequestSumAggregateOutputType>;
};

export type AggregateRole = {
  __typename?: 'AggregateRole';
  _avg?: Maybe<RoleAvgAggregateOutputType>;
  _count?: Maybe<RoleCountAggregateOutputType>;
  _max?: Maybe<RoleMaxAggregateOutputType>;
  _min?: Maybe<RoleMinAggregateOutputType>;
  _sum?: Maybe<RoleSumAggregateOutputType>;
};

export type AggregateTag = {
  __typename?: 'AggregateTag';
  _avg?: Maybe<TagAvgAggregateOutputType>;
  _count?: Maybe<TagCountAggregateOutputType>;
  _max?: Maybe<TagMaxAggregateOutputType>;
  _min?: Maybe<TagMinAggregateOutputType>;
  _sum?: Maybe<TagSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregateOutputType>;
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  _sum?: Maybe<UserSumAggregateOutputType>;
};

export type AggregateWechat = {
  __typename?: 'AggregateWechat';
  _avg?: Maybe<WechatAvgAggregateOutputType>;
  _count?: Maybe<WechatCountAggregateOutputType>;
  _max?: Maybe<WechatMaxAggregateOutputType>;
  _min?: Maybe<WechatMinAggregateOutputType>;
  _sum?: Maybe<WechatSumAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

/** Casbin权限记录 */
export type CasbinRule = {
  __typename?: 'CasbinRule';
  id: Scalars['Int'];
  ptype: Scalars['String'];
  v0?: Maybe<Scalars['String']>;
  v1?: Maybe<Scalars['String']>;
  v2?: Maybe<Scalars['String']>;
  v3?: Maybe<Scalars['String']>;
  v4?: Maybe<Scalars['String']>;
  v5?: Maybe<Scalars['String']>;
};

export type CasbinRuleAvgAggregateOutputType = {
  __typename?: 'CasbinRuleAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type CasbinRuleAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CasbinRuleCountAggregateOutputType = {
  __typename?: 'CasbinRuleCountAggregateOutputType';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  ptype: Scalars['Int'];
  v0: Scalars['Int'];
  v1: Scalars['Int'];
  v2: Scalars['Int'];
  v3: Scalars['Int'];
  v4: Scalars['Int'];
  v5: Scalars['Int'];
};

export type CasbinRuleCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  ptype?: InputMaybe<SortOrder>;
  v0?: InputMaybe<SortOrder>;
  v1?: InputMaybe<SortOrder>;
  v2?: InputMaybe<SortOrder>;
  v3?: InputMaybe<SortOrder>;
  v4?: InputMaybe<SortOrder>;
  v5?: InputMaybe<SortOrder>;
};

export type CasbinRuleCreateInput = {
  ptype: Scalars['String'];
  v0?: InputMaybe<Scalars['String']>;
  v1?: InputMaybe<Scalars['String']>;
  v2?: InputMaybe<Scalars['String']>;
  v3?: InputMaybe<Scalars['String']>;
  v4?: InputMaybe<Scalars['String']>;
  v5?: InputMaybe<Scalars['String']>;
};

export type CasbinRuleCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  ptype: Scalars['String'];
  v0?: InputMaybe<Scalars['String']>;
  v1?: InputMaybe<Scalars['String']>;
  v2?: InputMaybe<Scalars['String']>;
  v3?: InputMaybe<Scalars['String']>;
  v4?: InputMaybe<Scalars['String']>;
  v5?: InputMaybe<Scalars['String']>;
};

export type CasbinRuleMaxAggregateOutputType = {
  __typename?: 'CasbinRuleMaxAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  ptype?: Maybe<Scalars['String']>;
  v0?: Maybe<Scalars['String']>;
  v1?: Maybe<Scalars['String']>;
  v2?: Maybe<Scalars['String']>;
  v3?: Maybe<Scalars['String']>;
  v4?: Maybe<Scalars['String']>;
  v5?: Maybe<Scalars['String']>;
};

export type CasbinRuleMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  ptype?: InputMaybe<SortOrder>;
  v0?: InputMaybe<SortOrder>;
  v1?: InputMaybe<SortOrder>;
  v2?: InputMaybe<SortOrder>;
  v3?: InputMaybe<SortOrder>;
  v4?: InputMaybe<SortOrder>;
  v5?: InputMaybe<SortOrder>;
};

export type CasbinRuleMinAggregateOutputType = {
  __typename?: 'CasbinRuleMinAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  ptype?: Maybe<Scalars['String']>;
  v0?: Maybe<Scalars['String']>;
  v1?: Maybe<Scalars['String']>;
  v2?: Maybe<Scalars['String']>;
  v3?: Maybe<Scalars['String']>;
  v4?: Maybe<Scalars['String']>;
  v5?: Maybe<Scalars['String']>;
};

export type CasbinRuleMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  ptype?: InputMaybe<SortOrder>;
  v0?: InputMaybe<SortOrder>;
  v1?: InputMaybe<SortOrder>;
  v2?: InputMaybe<SortOrder>;
  v3?: InputMaybe<SortOrder>;
  v4?: InputMaybe<SortOrder>;
  v5?: InputMaybe<SortOrder>;
};

export enum CasbinRuleOrderByRelevanceFieldEnum {
  Ptype = 'ptype',
  V0 = 'v0',
  V1 = 'v1',
  V2 = 'v2',
  V3 = 'v3',
  V4 = 'v4',
  V5 = 'v5'
}

export type CasbinRuleOrderByRelevanceInput = {
  fields: CasbinRuleOrderByRelevanceFieldEnum;
  search: Scalars['String'];
  sort: SortOrder;
};

export type CasbinRuleOrderByWithAggregationInput = {
  _avg?: InputMaybe<CasbinRuleAvgOrderByAggregateInput>;
  _count?: InputMaybe<CasbinRuleCountOrderByAggregateInput>;
  _max?: InputMaybe<CasbinRuleMaxOrderByAggregateInput>;
  _min?: InputMaybe<CasbinRuleMinOrderByAggregateInput>;
  _sum?: InputMaybe<CasbinRuleSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  ptype?: InputMaybe<SortOrder>;
  v0?: InputMaybe<SortOrder>;
  v1?: InputMaybe<SortOrder>;
  v2?: InputMaybe<SortOrder>;
  v3?: InputMaybe<SortOrder>;
  v4?: InputMaybe<SortOrder>;
  v5?: InputMaybe<SortOrder>;
};

export type CasbinRuleOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<CasbinRuleOrderByRelevanceInput>;
  id?: InputMaybe<SortOrder>;
  ptype?: InputMaybe<SortOrder>;
  v0?: InputMaybe<SortOrder>;
  v1?: InputMaybe<SortOrder>;
  v2?: InputMaybe<SortOrder>;
  v3?: InputMaybe<SortOrder>;
  v4?: InputMaybe<SortOrder>;
  v5?: InputMaybe<SortOrder>;
};

export enum CasbinRuleScalarFieldEnum {
  Id = 'id',
  Ptype = 'ptype',
  V0 = 'v0',
  V1 = 'v1',
  V2 = 'v2',
  V3 = 'v3',
  V4 = 'v4',
  V5 = 'v5'
}

export type CasbinRuleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<CasbinRuleScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CasbinRuleScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CasbinRuleScalarWhereWithAggregatesInput>>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  ptype?: InputMaybe<StringWithAggregatesFilter>;
  v0?: InputMaybe<StringNullableWithAggregatesFilter>;
  v1?: InputMaybe<StringNullableWithAggregatesFilter>;
  v2?: InputMaybe<StringNullableWithAggregatesFilter>;
  v3?: InputMaybe<StringNullableWithAggregatesFilter>;
  v4?: InputMaybe<StringNullableWithAggregatesFilter>;
  v5?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type CasbinRuleSumAggregateOutputType = {
  __typename?: 'CasbinRuleSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type CasbinRuleSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CasbinRuleUncheckedCreateInput = {
  id?: InputMaybe<Scalars['Int']>;
  ptype: Scalars['String'];
  v0?: InputMaybe<Scalars['String']>;
  v1?: InputMaybe<Scalars['String']>;
  v2?: InputMaybe<Scalars['String']>;
  v3?: InputMaybe<Scalars['String']>;
  v4?: InputMaybe<Scalars['String']>;
  v5?: InputMaybe<Scalars['String']>;
};

export type CasbinRuleUncheckedUpdateInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  ptype?: InputMaybe<StringFieldUpdateOperationsInput>;
  v0?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v1?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v4?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v5?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CasbinRuleUncheckedUpdateManyInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  ptype?: InputMaybe<StringFieldUpdateOperationsInput>;
  v0?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v1?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v4?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v5?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CasbinRuleUpdateInput = {
  ptype?: InputMaybe<StringFieldUpdateOperationsInput>;
  v0?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v1?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v4?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v5?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CasbinRuleUpdateManyMutationInput = {
  ptype?: InputMaybe<StringFieldUpdateOperationsInput>;
  v0?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v1?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v4?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  v5?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CasbinRuleWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CasbinRuleWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CasbinRuleWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CasbinRuleWhereInput>>>;
  id?: InputMaybe<IntFilter>;
  ptype?: InputMaybe<StringFilter>;
  v0?: InputMaybe<StringNullableFilter>;
  v1?: InputMaybe<StringNullableFilter>;
  v2?: InputMaybe<StringNullableFilter>;
  v3?: InputMaybe<StringNullableFilter>;
  v4?: InputMaybe<StringNullableFilter>;
  v5?: InputMaybe<StringNullableFilter>;
};

export type CasbinRuleWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** 词组-评论 */
export type Comment = {
  __typename?: 'Comment';
  _count: CommentCountOutputType;
  comment?: Maybe<Comment>;
  commentId?: Maybe<Scalars['Int']>;
  comments: Array<Comment>;
  content: Scalars['String'];
  createAt: Scalars['DateTime'];
  id: Scalars['Int'];
  phrase?: Maybe<Phrase>;
  phraseId?: Maybe<Scalars['Int']>;
  pullRequest?: Maybe<PullRequest>;
  pullRequestId?: Maybe<Scalars['Int']>;
  updateAt: Scalars['DateTime'];
};


/** 词组-评论 */
export type CommentCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<CommentScalarFieldEnum>;
  orderBy?: InputMaybe<CommentOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};

export type CommentAvgAggregateOutputType = {
  __typename?: 'CommentAvgAggregateOutputType';
  commentId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  phraseId?: Maybe<Scalars['Float']>;
  pullRequestId?: Maybe<Scalars['Float']>;
};

export type CommentAvgOrderByAggregateInput = {
  commentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
  pullRequestId?: InputMaybe<SortOrder>;
};

export type CommentCountAggregateOutputType = {
  __typename?: 'CommentCountAggregateOutputType';
  _all: Scalars['Int'];
  commentId: Scalars['Int'];
  content: Scalars['Int'];
  createAt: Scalars['Int'];
  id: Scalars['Int'];
  phraseId: Scalars['Int'];
  pullRequestId: Scalars['Int'];
  updateAt: Scalars['Int'];
};

export type CommentCountOrderByAggregateInput = {
  commentId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
  pullRequestId?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
};

export type CommentCountOutputType = {
  __typename?: 'CommentCountOutputType';
  comments: Scalars['Int'];
};

export type CommentCreateInput = {
  comment?: InputMaybe<CommentCreateNestedOneWithoutCommentsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutCommentInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  phrase?: InputMaybe<PhraseCreateNestedOneWithoutCommentsInput>;
  pullRequest?: InputMaybe<PullRequestCreateNestedOneWithoutCommentsInput>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyCommentInput = {
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId?: InputMaybe<Scalars['Int']>;
  pullRequestId?: InputMaybe<Scalars['Int']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyCommentInputEnvelope = {
  data: CommentCreateManyCommentInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateManyInput = {
  commentId?: InputMaybe<Scalars['Int']>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId?: InputMaybe<Scalars['Int']>;
  pullRequestId?: InputMaybe<Scalars['Int']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyPhraseInput = {
  commentId?: InputMaybe<Scalars['Int']>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  pullRequestId?: InputMaybe<Scalars['Int']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyPhraseInputEnvelope = {
  data: CommentCreateManyPhraseInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateManyPullRequestInput = {
  commentId?: InputMaybe<Scalars['Int']>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId?: InputMaybe<Scalars['Int']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyPullRequestInputEnvelope = {
  data: CommentCreateManyPullRequestInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateNestedManyWithoutCommentInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutCommentInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutCommentInput>>>;
  createMany?: InputMaybe<CommentCreateManyCommentInputEnvelope>;
};

export type CommentCreateNestedManyWithoutPhraseInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutPhraseInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutPhraseInput>>>;
  createMany?: InputMaybe<CommentCreateManyPhraseInputEnvelope>;
};

export type CommentCreateNestedManyWithoutPullRequestInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutPullRequestInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutPullRequestInput>>>;
  createMany?: InputMaybe<CommentCreateManyPullRequestInputEnvelope>;
};

export type CommentCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<CommentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommentCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<CommentUncheckedCreateWithoutCommentsInput>;
};

export type CommentCreateOrConnectWithoutCommentInput = {
  create: CommentUncheckedCreateWithoutCommentInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutCommentsInput = {
  create: CommentUncheckedCreateWithoutCommentsInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutPhraseInput = {
  create: CommentUncheckedCreateWithoutPhraseInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutPullRequestInput = {
  create: CommentUncheckedCreateWithoutPullRequestInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutCommentInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutCommentInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  phrase?: InputMaybe<PhraseCreateNestedOneWithoutCommentsInput>;
  pullRequest?: InputMaybe<PullRequestCreateNestedOneWithoutCommentsInput>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateWithoutCommentsInput = {
  comment?: InputMaybe<CommentCreateNestedOneWithoutCommentsInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  phrase?: InputMaybe<PhraseCreateNestedOneWithoutCommentsInput>;
  pullRequest?: InputMaybe<PullRequestCreateNestedOneWithoutCommentsInput>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateWithoutPhraseInput = {
  comment?: InputMaybe<CommentCreateNestedOneWithoutCommentsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutCommentInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  pullRequest?: InputMaybe<PullRequestCreateNestedOneWithoutCommentsInput>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateWithoutPullRequestInput = {
  comment?: InputMaybe<CommentCreateNestedOneWithoutCommentsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutCommentInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  phrase?: InputMaybe<PhraseCreateNestedOneWithoutCommentsInput>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregateOutputType = {
  __typename?: 'CommentMaxAggregateOutputType';
  commentId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  phraseId?: Maybe<Scalars['Int']>;
  pullRequestId?: Maybe<Scalars['Int']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type CommentMaxOrderByAggregateInput = {
  commentId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
  pullRequestId?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
};

export type CommentMinAggregateOutputType = {
  __typename?: 'CommentMinAggregateOutputType';
  commentId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  phraseId?: Maybe<Scalars['Int']>;
  pullRequestId?: Maybe<Scalars['Int']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type CommentMinOrderByAggregateInput = {
  commentId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
  pullRequestId?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CommentOrderByRelevanceFieldEnum {
  Content = 'content'
}

export type CommentOrderByRelevanceInput = {
  fields: CommentOrderByRelevanceFieldEnum;
  search: Scalars['String'];
  sort: SortOrder;
};

export type CommentOrderByWithAggregationInput = {
  _avg?: InputMaybe<CommentAvgOrderByAggregateInput>;
  _count?: InputMaybe<CommentCountOrderByAggregateInput>;
  _max?: InputMaybe<CommentMaxOrderByAggregateInput>;
  _min?: InputMaybe<CommentMinOrderByAggregateInput>;
  _sum?: InputMaybe<CommentSumOrderByAggregateInput>;
  commentId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
  pullRequestId?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<CommentOrderByRelevanceInput>;
  comment?: InputMaybe<CommentOrderByWithRelationAndSearchRelevanceInput>;
  commentId?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phrase?: InputMaybe<PhraseOrderByWithRelationAndSearchRelevanceInput>;
  phraseId?: InputMaybe<SortOrder>;
  pullRequest?: InputMaybe<PullRequestOrderByWithRelationAndSearchRelevanceInput>;
  pullRequestId?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
};

export type CommentRelationFilter = {
  is?: InputMaybe<CommentWhereInput>;
  isNot?: InputMaybe<CommentWhereInput>;
};

export enum CommentScalarFieldEnum {
  CommentId = 'commentId',
  Content = 'content',
  CreateAt = 'createAt',
  Id = 'id',
  PhraseId = 'phraseId',
  PullRequestId = 'pullRequestId',
  UpdateAt = 'updateAt'
}

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  commentId?: InputMaybe<IntNullableFilter>;
  content?: InputMaybe<StringFilter>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  phraseId?: InputMaybe<IntNullableFilter>;
  pullRequestId?: InputMaybe<IntNullableFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<CommentScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CommentScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CommentScalarWhereWithAggregatesInput>>>;
  commentId?: InputMaybe<IntNullableWithAggregatesFilter>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  phraseId?: InputMaybe<IntNullableWithAggregatesFilter>;
  pullRequestId?: InputMaybe<IntNullableWithAggregatesFilter>;
  updateAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CommentSumAggregateOutputType = {
  __typename?: 'CommentSumAggregateOutputType';
  commentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  phraseId?: Maybe<Scalars['Int']>;
  pullRequestId?: Maybe<Scalars['Int']>;
};

export type CommentSumOrderByAggregateInput = {
  commentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
  pullRequestId?: InputMaybe<SortOrder>;
};

export type CommentUncheckedCreateInput = {
  commentId?: InputMaybe<Scalars['Int']>;
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutCommentInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId?: InputMaybe<Scalars['Int']>;
  pullRequestId?: InputMaybe<Scalars['Int']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentUncheckedCreateNestedManyWithoutCommentInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutCommentInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutCommentInput>>>;
  createMany?: InputMaybe<CommentCreateManyCommentInputEnvelope>;
};

export type CommentUncheckedCreateNestedManyWithoutPhraseInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutPhraseInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutPhraseInput>>>;
  createMany?: InputMaybe<CommentCreateManyPhraseInputEnvelope>;
};

export type CommentUncheckedCreateNestedManyWithoutPullRequestInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutPullRequestInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutPullRequestInput>>>;
  createMany?: InputMaybe<CommentCreateManyPullRequestInputEnvelope>;
};

export type CommentUncheckedCreateWithoutCommentInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutCommentInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId?: InputMaybe<Scalars['Int']>;
  pullRequestId?: InputMaybe<Scalars['Int']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentUncheckedCreateWithoutCommentsInput = {
  commentId?: InputMaybe<Scalars['Int']>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId?: InputMaybe<Scalars['Int']>;
  pullRequestId?: InputMaybe<Scalars['Int']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentUncheckedCreateWithoutPhraseInput = {
  commentId?: InputMaybe<Scalars['Int']>;
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutCommentInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  pullRequestId?: InputMaybe<Scalars['Int']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentUncheckedCreateWithoutPullRequestInput = {
  commentId?: InputMaybe<Scalars['Int']>;
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutCommentInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId?: InputMaybe<Scalars['Int']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentUncheckedUpdateInput = {
  commentId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  pullRequestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyInput = {
  commentId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  pullRequestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyWithoutCommentInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutCommentInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutCommentInput>>>;
  createMany?: InputMaybe<CommentCreateManyCommentInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutCommentInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutCommentInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutCommentInput>>>;
};

export type CommentUncheckedUpdateManyWithoutCommentsInput = {
  commentId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  pullRequestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyWithoutPhraseInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutPhraseInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutPhraseInput>>>;
  createMany?: InputMaybe<CommentCreateManyPhraseInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutPhraseInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutPhraseInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutPhraseInput>>>;
};

export type CommentUncheckedUpdateManyWithoutPullRequestInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutPullRequestInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutPullRequestInput>>>;
  createMany?: InputMaybe<CommentCreateManyPullRequestInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutPullRequestInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutPullRequestInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutPullRequestInput>>>;
};

export type CommentUncheckedUpdateWithoutCommentInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  pullRequestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateWithoutCommentsInput = {
  commentId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  pullRequestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateWithoutPhraseInput = {
  commentId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  pullRequestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateWithoutPullRequestInput = {
  commentId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateInput = {
  comment?: InputMaybe<CommentUpdateOneWithoutCommentsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateOneWithoutCommentsInput>;
  pullRequest?: InputMaybe<PullRequestUpdateOneWithoutCommentsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutCommentInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutPhraseInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutPullRequestInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutCommentInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutCommentInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutCommentInput>>>;
  createMany?: InputMaybe<CommentCreateManyCommentInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutCommentInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutCommentInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutCommentInput>>>;
};

export type CommentUpdateManyWithoutPhraseInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutPhraseInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutPhraseInput>>>;
  createMany?: InputMaybe<CommentCreateManyPhraseInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutPhraseInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutPhraseInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutPhraseInput>>>;
};

export type CommentUpdateManyWithoutPullRequestInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutPullRequestInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutPullRequestInput>>>;
  createMany?: InputMaybe<CommentCreateManyPullRequestInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutPullRequestInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutPullRequestInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutPullRequestInput>>>;
};

export type CommentUpdateOneWithoutCommentsInput = {
  connect?: InputMaybe<CommentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommentCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<CommentUncheckedCreateWithoutCommentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CommentUncheckedUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<CommentUpsertWithoutCommentsInput>;
};

export type CommentUpdateWithWhereUniqueWithoutCommentInput = {
  data: CommentUncheckedUpdateWithoutCommentInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutPhraseInput = {
  data: CommentUncheckedUpdateWithoutPhraseInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutPullRequestInput = {
  data: CommentUncheckedUpdateWithoutPullRequestInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutCommentInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateOneWithoutCommentsInput>;
  pullRequest?: InputMaybe<PullRequestUpdateOneWithoutCommentsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutCommentsInput = {
  comment?: InputMaybe<CommentUpdateOneWithoutCommentsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateOneWithoutCommentsInput>;
  pullRequest?: InputMaybe<PullRequestUpdateOneWithoutCommentsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutPhraseInput = {
  comment?: InputMaybe<CommentUpdateOneWithoutCommentsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  pullRequest?: InputMaybe<PullRequestUpdateOneWithoutCommentsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutPullRequestInput = {
  comment?: InputMaybe<CommentUpdateOneWithoutCommentsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateOneWithoutCommentsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutCommentInput = {
  create: CommentUncheckedCreateWithoutCommentInput;
  update: CommentUncheckedUpdateWithoutCommentInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutPhraseInput = {
  create: CommentUncheckedCreateWithoutPhraseInput;
  update: CommentUncheckedUpdateWithoutPhraseInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutPullRequestInput = {
  create: CommentUncheckedCreateWithoutPullRequestInput;
  update: CommentUncheckedUpdateWithoutPullRequestInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithoutCommentsInput = {
  create: CommentUncheckedCreateWithoutCommentsInput;
  update: CommentUncheckedUpdateWithoutCommentsInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CommentWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CommentWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CommentWhereInput>>>;
  comment?: InputMaybe<CommentWhereInput>;
  commentId?: InputMaybe<IntNullableFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  phrase?: InputMaybe<PhraseWhereInput>;
  phraseId?: InputMaybe<IntNullableFilter>;
  pullRequest?: InputMaybe<PullRequestWhereInput>;
  pullRequestId?: InputMaybe<IntNullableFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type EnumActionTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ActionType>;
};

export type EnumActionTypeFilter = {
  equals?: InputMaybe<ActionType>;
  in?: InputMaybe<Array<InputMaybe<ActionType>>>;
  not?: InputMaybe<NestedEnumActionTypeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<ActionType>>>;
};

export type EnumActionTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumActionTypeFilter>;
  _min?: InputMaybe<NestedEnumActionTypeFilter>;
  equals?: InputMaybe<ActionType>;
  in?: InputMaybe<Array<InputMaybe<ActionType>>>;
  not?: InputMaybe<NestedEnumActionTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<ActionType>>>;
};

export type EnumPhraseStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<PhraseStatus>;
};

export type EnumPhraseStatusFilter = {
  equals?: InputMaybe<PhraseStatus>;
  in?: InputMaybe<Array<InputMaybe<PhraseStatus>>>;
  not?: InputMaybe<NestedEnumPhraseStatusFilter>;
  notIn?: InputMaybe<Array<InputMaybe<PhraseStatus>>>;
};

export type EnumPhraseStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPhraseStatusFilter>;
  _min?: InputMaybe<NestedEnumPhraseStatusFilter>;
  equals?: InputMaybe<PhraseStatus>;
  in?: InputMaybe<Array<InputMaybe<PhraseStatus>>>;
  not?: InputMaybe<NestedEnumPhraseStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<PhraseStatus>>>;
};

export type EnumPhraseTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<PhraseType>;
};

export type EnumPhraseTypeFilter = {
  equals?: InputMaybe<PhraseType>;
  in?: InputMaybe<Array<InputMaybe<PhraseType>>>;
  not?: InputMaybe<NestedEnumPhraseTypeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<PhraseType>>>;
};

export type EnumPhraseTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPhraseTypeFilter>;
  _min?: InputMaybe<NestedEnumPhraseTypeFilter>;
  equals?: InputMaybe<PhraseType>;
  in?: InputMaybe<Array<InputMaybe<PhraseType>>>;
  not?: InputMaybe<NestedEnumPhraseTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<PhraseType>>>;
};

export type EnumPullRequestStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<PullRequestStatus>;
};

export type EnumPullRequestStatusFilter = {
  equals?: InputMaybe<PullRequestStatus>;
  in?: InputMaybe<Array<InputMaybe<PullRequestStatus>>>;
  not?: InputMaybe<NestedEnumPullRequestStatusFilter>;
  notIn?: InputMaybe<Array<InputMaybe<PullRequestStatus>>>;
};

export type EnumPullRequestStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPullRequestStatusFilter>;
  _min?: InputMaybe<NestedEnumPullRequestStatusFilter>;
  equals?: InputMaybe<PullRequestStatus>;
  in?: InputMaybe<Array<InputMaybe<PullRequestStatus>>>;
  not?: InputMaybe<NestedEnumPullRequestStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<PullRequestStatus>>>;
};

export type EnumSignUpTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<SignUpType>;
};

export type EnumSignUpTypeFilter = {
  equals?: InputMaybe<SignUpType>;
  in?: InputMaybe<Array<InputMaybe<SignUpType>>>;
  not?: InputMaybe<NestedEnumSignUpTypeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<SignUpType>>>;
};

export type EnumSignUpTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumSignUpTypeFilter>;
  _min?: InputMaybe<NestedEnumSignUpTypeFilter>;
  equals?: InputMaybe<SignUpType>;
  in?: InputMaybe<Array<InputMaybe<SignUpType>>>;
  not?: InputMaybe<NestedEnumSignUpTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<SignUpType>>>;
};

export type EnumUserStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<UserStatus>;
};

export type EnumUserStatusFilter = {
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<InputMaybe<UserStatus>>>;
  not?: InputMaybe<NestedEnumUserStatusFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserStatus>>>;
};

export type EnumUserStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserStatusFilter>;
  _min?: InputMaybe<NestedEnumUserStatusFilter>;
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<InputMaybe<UserStatus>>>;
  not?: InputMaybe<NestedEnumUserStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserStatus>>>;
};

/** 错误码信息 */
export enum ErrorCode {
  /** 用户名已被使用 */
  U1000 = 'U1000',
  /** 邮箱已被使用 */
  U1001 = 'U1001'
}

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserPermission?: Maybe<Scalars['Boolean']>;
  createOneAction: Action;
  createOneCasbinRule: CasbinRule;
  createOneComment: Comment;
  createOneNotice: Notice;
  createOnePermission: Permission;
  createOnePermissionAction: PermissionAction;
  createOnePhrase: Phrase;
  createOnePullRequest: PullRequest;
  createOneRole: Role;
  createOneTag: Tag;
  createOneUser: User;
  createOneWechat: Wechat;
  createSubmitOnePhrase?: Maybe<Phrase>;
  deleteManyAction: BatchPayload;
  deleteManyCasbinRule: BatchPayload;
  deleteManyComment: BatchPayload;
  deleteManyNotice: BatchPayload;
  deleteManyPermission: BatchPayload;
  deleteManyPermissionAction: BatchPayload;
  deleteManyPhrase: BatchPayload;
  deleteManyPullRequest: BatchPayload;
  deleteManyRole: BatchPayload;
  deleteManyTag: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteManyWechat: BatchPayload;
  deleteOneAction?: Maybe<Action>;
  deleteOneCasbinRule?: Maybe<CasbinRule>;
  deleteOneComment?: Maybe<Comment>;
  deleteOneNotice?: Maybe<Notice>;
  deleteOnePermission?: Maybe<Permission>;
  deleteOnePermissionAction?: Maybe<PermissionAction>;
  deleteOnePhrase?: Maybe<Phrase>;
  deleteOnePullRequest?: Maybe<PullRequest>;
  deleteOneRole?: Maybe<Role>;
  deleteOneTag?: Maybe<Tag>;
  deleteOneUser?: Maybe<User>;
  deleteOneWechat?: Maybe<Wechat>;
  deletePolicy?: Maybe<Scalars['Boolean']>;
  signIn?: Maybe<UserSignIn>;
  signUp?: Maybe<User>;
  updateManyAction: BatchPayload;
  updateManyCasbinRule: BatchPayload;
  updateManyComment: BatchPayload;
  updateManyNotice: BatchPayload;
  updateManyPermission: BatchPayload;
  updateManyPermissionAction: BatchPayload;
  updateManyPhrase: BatchPayload;
  updateManyPullRequest: BatchPayload;
  updateManyRole: BatchPayload;
  updateManyTag: BatchPayload;
  updateManyUser: BatchPayload;
  updateManyWechat: BatchPayload;
  updateOneAction: Action;
  updateOneCasbinRule: CasbinRule;
  updateOneComment: Comment;
  updateOneNotice: Notice;
  updateOnePermission: Permission;
  updateOnePermissionAction: PermissionAction;
  updateOnePhrase: Phrase;
  updateOnePullRequest: PullRequest;
  updateOneRole: Role;
  updateOneTag: Tag;
  updateOneUser: User;
  updateOneWechat: Wechat;
  updateUser?: Maybe<User>;
  updateUserMe?: Maybe<User>;
  upsertOneAction: Action;
  upsertOneCasbinRule: CasbinRule;
  upsertOneComment: Comment;
  upsertOneNotice: Notice;
  upsertOnePermission: Permission;
  upsertOnePermissionAction: PermissionAction;
  upsertOnePhrase: Phrase;
  upsertOnePullRequest: PullRequest;
  upsertOneRole: Role;
  upsertOneTag: Tag;
  upsertOneUser: User;
  upsertOneWechat: Wechat;
};


export type MutationAddUserPermissionArgs = {
  permissions: Array<Scalars['String']>;
  sub: Scalars['String'];
};


export type MutationCreateOneActionArgs = {
  data: ActionCreateInput;
};


export type MutationCreateOneCasbinRuleArgs = {
  data: CasbinRuleCreateInput;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateOneNoticeArgs = {
  data: NoticeCreateInput;
};


export type MutationCreateOnePermissionArgs = {
  data: PermissionCreateInput;
};


export type MutationCreateOnePermissionActionArgs = {
  data: PermissionActionCreateInput;
};


export type MutationCreateOnePhraseArgs = {
  data: PhraseCreateInput;
};


export type MutationCreateOnePullRequestArgs = {
  data: PullRequestCreateInput;
};


export type MutationCreateOneRoleArgs = {
  data: RoleCreateInput;
};


export type MutationCreateOneTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneWechatArgs = {
  data: WechatCreateInput;
};


export type MutationCreateSubmitOnePhraseArgs = {
  data?: InputMaybe<SubmitOnePhraseCreateInput>;
};


export type MutationDeleteManyActionArgs = {
  where?: InputMaybe<ActionWhereInput>;
};


export type MutationDeleteManyCasbinRuleArgs = {
  where?: InputMaybe<CasbinRuleWhereInput>;
};


export type MutationDeleteManyCommentArgs = {
  where?: InputMaybe<CommentWhereInput>;
};


export type MutationDeleteManyNoticeArgs = {
  where?: InputMaybe<NoticeWhereInput>;
};


export type MutationDeleteManyPermissionArgs = {
  where?: InputMaybe<PermissionWhereInput>;
};


export type MutationDeleteManyPermissionActionArgs = {
  where?: InputMaybe<PermissionActionWhereInput>;
};


export type MutationDeleteManyPhraseArgs = {
  where?: InputMaybe<PhraseWhereInput>;
};


export type MutationDeleteManyPullRequestArgs = {
  where?: InputMaybe<PullRequestWhereInput>;
};


export type MutationDeleteManyRoleArgs = {
  where?: InputMaybe<RoleWhereInput>;
};


export type MutationDeleteManyTagArgs = {
  where?: InputMaybe<TagWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyWechatArgs = {
  where?: InputMaybe<WechatWhereInput>;
};


export type MutationDeleteOneActionArgs = {
  where: ActionWhereUniqueInput;
};


export type MutationDeleteOneCasbinRuleArgs = {
  where: CasbinRuleWhereUniqueInput;
};


export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteOneNoticeArgs = {
  where: NoticeWhereUniqueInput;
};


export type MutationDeleteOnePermissionArgs = {
  where: PermissionWhereUniqueInput;
};


export type MutationDeleteOnePermissionActionArgs = {
  where: PermissionActionWhereUniqueInput;
};


export type MutationDeleteOnePhraseArgs = {
  where: PhraseWhereUniqueInput;
};


export type MutationDeleteOnePullRequestArgs = {
  where: PullRequestWhereUniqueInput;
};


export type MutationDeleteOneRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type MutationDeleteOneTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneWechatArgs = {
  where: WechatWhereUniqueInput;
};


export type MutationDeletePolicyArgs = {
  rule: Array<Scalars['String']>;
};


export type MutationSignInArgs = {
  data: UserSignInInput;
};


export type MutationSignUpArgs = {
  data: UserSignUpInput;
};


export type MutationUpdateManyActionArgs = {
  data: ActionUpdateManyMutationInput;
  where?: InputMaybe<ActionWhereInput>;
};


export type MutationUpdateManyCasbinRuleArgs = {
  data: CasbinRuleUpdateManyMutationInput;
  where?: InputMaybe<CasbinRuleWhereInput>;
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: InputMaybe<CommentWhereInput>;
};


export type MutationUpdateManyNoticeArgs = {
  data: NoticeUpdateManyMutationInput;
  where?: InputMaybe<NoticeWhereInput>;
};


export type MutationUpdateManyPermissionArgs = {
  data: PermissionUpdateManyMutationInput;
  where?: InputMaybe<PermissionWhereInput>;
};


export type MutationUpdateManyPermissionActionArgs = {
  data: PermissionActionUpdateManyMutationInput;
  where?: InputMaybe<PermissionActionWhereInput>;
};


export type MutationUpdateManyPhraseArgs = {
  data: PhraseUpdateManyMutationInput;
  where?: InputMaybe<PhraseWhereInput>;
};


export type MutationUpdateManyPullRequestArgs = {
  data: PullRequestUpdateManyMutationInput;
  where?: InputMaybe<PullRequestWhereInput>;
};


export type MutationUpdateManyRoleArgs = {
  data: RoleUpdateManyMutationInput;
  where?: InputMaybe<RoleWhereInput>;
};


export type MutationUpdateManyTagArgs = {
  data: TagUpdateManyMutationInput;
  where?: InputMaybe<TagWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyWechatArgs = {
  data: WechatUpdateManyMutationInput;
  where?: InputMaybe<WechatWhereInput>;
};


export type MutationUpdateOneActionArgs = {
  data: ActionUpdateInput;
  where: ActionWhereUniqueInput;
};


export type MutationUpdateOneCasbinRuleArgs = {
  data: CasbinRuleUpdateInput;
  where: CasbinRuleWhereUniqueInput;
};


export type MutationUpdateOneCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateOneNoticeArgs = {
  data: NoticeUpdateInput;
  where: NoticeWhereUniqueInput;
};


export type MutationUpdateOnePermissionArgs = {
  data: PermissionUpdateInput;
  where: PermissionWhereUniqueInput;
};


export type MutationUpdateOnePermissionActionArgs = {
  data: PermissionActionUpdateInput;
  where: PermissionActionWhereUniqueInput;
};


export type MutationUpdateOnePhraseArgs = {
  data: PhraseUpdateInput;
  where: PhraseWhereUniqueInput;
};


export type MutationUpdateOnePullRequestArgs = {
  data: PullRequestUpdateInput;
  where: PullRequestWhereUniqueInput;
};


export type MutationUpdateOneRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};


export type MutationUpdateOneTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneWechatArgs = {
  data: WechatUpdateInput;
  where: WechatWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateOneInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserMeArgs = {
  data: UserMeUpdateInput;
};


export type MutationUpsertOneActionArgs = {
  create: ActionCreateInput;
  update: ActionUpdateInput;
  where: ActionWhereUniqueInput;
};


export type MutationUpsertOneCasbinRuleArgs = {
  create: CasbinRuleCreateInput;
  update: CasbinRuleUpdateInput;
  where: CasbinRuleWhereUniqueInput;
};


export type MutationUpsertOneCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertOneNoticeArgs = {
  create: NoticeCreateInput;
  update: NoticeUpdateInput;
  where: NoticeWhereUniqueInput;
};


export type MutationUpsertOnePermissionArgs = {
  create: PermissionCreateInput;
  update: PermissionUpdateInput;
  where: PermissionWhereUniqueInput;
};


export type MutationUpsertOnePermissionActionArgs = {
  create: PermissionActionCreateInput;
  update: PermissionActionUpdateInput;
  where: PermissionActionWhereUniqueInput;
};


export type MutationUpsertOnePhraseArgs = {
  create: PhraseCreateInput;
  update: PhraseUpdateInput;
  where: PhraseWhereUniqueInput;
};


export type MutationUpsertOnePullRequestArgs = {
  create: PullRequestCreateInput;
  update: PullRequestUpdateInput;
  where: PullRequestWhereUniqueInput;
};


export type MutationUpsertOneRoleArgs = {
  create: RoleCreateInput;
  update: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};


export type MutationUpsertOneTagArgs = {
  create: TagCreateInput;
  update: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneWechatArgs = {
  create: WechatCreateInput;
  update: WechatUpdateInput;
  where: WechatWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedEnumActionTypeFilter = {
  equals?: InputMaybe<ActionType>;
  in?: InputMaybe<Array<InputMaybe<ActionType>>>;
  not?: InputMaybe<NestedEnumActionTypeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<ActionType>>>;
};

export type NestedEnumActionTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumActionTypeFilter>;
  _min?: InputMaybe<NestedEnumActionTypeFilter>;
  equals?: InputMaybe<ActionType>;
  in?: InputMaybe<Array<InputMaybe<ActionType>>>;
  not?: InputMaybe<NestedEnumActionTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<ActionType>>>;
};

export type NestedEnumPhraseStatusFilter = {
  equals?: InputMaybe<PhraseStatus>;
  in?: InputMaybe<Array<InputMaybe<PhraseStatus>>>;
  not?: InputMaybe<NestedEnumPhraseStatusFilter>;
  notIn?: InputMaybe<Array<InputMaybe<PhraseStatus>>>;
};

export type NestedEnumPhraseStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPhraseStatusFilter>;
  _min?: InputMaybe<NestedEnumPhraseStatusFilter>;
  equals?: InputMaybe<PhraseStatus>;
  in?: InputMaybe<Array<InputMaybe<PhraseStatus>>>;
  not?: InputMaybe<NestedEnumPhraseStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<PhraseStatus>>>;
};

export type NestedEnumPhraseTypeFilter = {
  equals?: InputMaybe<PhraseType>;
  in?: InputMaybe<Array<InputMaybe<PhraseType>>>;
  not?: InputMaybe<NestedEnumPhraseTypeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<PhraseType>>>;
};

export type NestedEnumPhraseTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPhraseTypeFilter>;
  _min?: InputMaybe<NestedEnumPhraseTypeFilter>;
  equals?: InputMaybe<PhraseType>;
  in?: InputMaybe<Array<InputMaybe<PhraseType>>>;
  not?: InputMaybe<NestedEnumPhraseTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<PhraseType>>>;
};

export type NestedEnumPullRequestStatusFilter = {
  equals?: InputMaybe<PullRequestStatus>;
  in?: InputMaybe<Array<InputMaybe<PullRequestStatus>>>;
  not?: InputMaybe<NestedEnumPullRequestStatusFilter>;
  notIn?: InputMaybe<Array<InputMaybe<PullRequestStatus>>>;
};

export type NestedEnumPullRequestStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPullRequestStatusFilter>;
  _min?: InputMaybe<NestedEnumPullRequestStatusFilter>;
  equals?: InputMaybe<PullRequestStatus>;
  in?: InputMaybe<Array<InputMaybe<PullRequestStatus>>>;
  not?: InputMaybe<NestedEnumPullRequestStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<PullRequestStatus>>>;
};

export type NestedEnumSignUpTypeFilter = {
  equals?: InputMaybe<SignUpType>;
  in?: InputMaybe<Array<InputMaybe<SignUpType>>>;
  not?: InputMaybe<NestedEnumSignUpTypeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<SignUpType>>>;
};

export type NestedEnumSignUpTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumSignUpTypeFilter>;
  _min?: InputMaybe<NestedEnumSignUpTypeFilter>;
  equals?: InputMaybe<SignUpType>;
  in?: InputMaybe<Array<InputMaybe<SignUpType>>>;
  not?: InputMaybe<NestedEnumSignUpTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<SignUpType>>>;
};

export type NestedEnumUserStatusFilter = {
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<InputMaybe<UserStatus>>>;
  not?: InputMaybe<NestedEnumUserStatusFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserStatus>>>;
};

export type NestedEnumUserStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserStatusFilter>;
  _min?: InputMaybe<NestedEnumUserStatusFilter>;
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<InputMaybe<UserStatus>>>;
  not?: InputMaybe<NestedEnumUserStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserStatus>>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

/** 通知 */
export type Notice = {
  __typename?: 'Notice';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  publishAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type NoticeAvgAggregateOutputType = {
  __typename?: 'NoticeAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type NoticeAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NoticeCountAggregateOutputType = {
  __typename?: 'NoticeCountAggregateOutputType';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  publishAt: Scalars['Int'];
  title: Scalars['Int'];
  userId: Scalars['Int'];
};

export type NoticeCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NoticeCreateInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  publishAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  user: UserCreateNestedOneWithoutNoticesInput;
};

export type NoticeCreateManyInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  publishAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  userId: Scalars['Int'];
};

export type NoticeCreateManyUserInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  publishAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
};

export type NoticeCreateManyUserInputEnvelope = {
  data: NoticeCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NoticeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<NoticeWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<NoticeCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<NoticeCreateWithoutUserInput>>>;
  createMany?: InputMaybe<NoticeCreateManyUserInputEnvelope>;
};

export type NoticeCreateOrConnectWithoutUserInput = {
  create: NoticeUncheckedCreateWithoutUserInput;
  where: NoticeWhereUniqueInput;
};

export type NoticeCreateWithoutUserInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  publishAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
};

export type NoticeListRelationFilter = {
  every?: InputMaybe<NoticeWhereInput>;
  none?: InputMaybe<NoticeWhereInput>;
  some?: InputMaybe<NoticeWhereInput>;
};

export type NoticeMaxAggregateOutputType = {
  __typename?: 'NoticeMaxAggregateOutputType';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  publishAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type NoticeMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NoticeMinAggregateOutputType = {
  __typename?: 'NoticeMinAggregateOutputType';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  publishAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type NoticeMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NoticeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum NoticeOrderByRelevanceFieldEnum {
  Content = 'content',
  Title = 'title'
}

export type NoticeOrderByRelevanceInput = {
  fields: NoticeOrderByRelevanceFieldEnum;
  search: Scalars['String'];
  sort: SortOrder;
};

export type NoticeOrderByWithAggregationInput = {
  _avg?: InputMaybe<NoticeAvgOrderByAggregateInput>;
  _count?: InputMaybe<NoticeCountOrderByAggregateInput>;
  _max?: InputMaybe<NoticeMaxOrderByAggregateInput>;
  _min?: InputMaybe<NoticeMinOrderByAggregateInput>;
  _sum?: InputMaybe<NoticeSumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NoticeOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<NoticeOrderByRelevanceInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum NoticeScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  PublishAt = 'publishAt',
  Title = 'title',
  UserId = 'userId'
}

export type NoticeScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<NoticeScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<NoticeScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<NoticeScalarWhereInput>>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type NoticeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<NoticeScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<NoticeScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<NoticeScalarWhereWithAggregatesInput>>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  publishAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type NoticeSumAggregateOutputType = {
  __typename?: 'NoticeSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type NoticeSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NoticeUncheckedCreateInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  publishAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  userId: Scalars['Int'];
};

export type NoticeUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<NoticeWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<NoticeCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<NoticeCreateWithoutUserInput>>>;
  createMany?: InputMaybe<NoticeCreateManyUserInputEnvelope>;
};

export type NoticeUncheckedCreateWithoutUserInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  publishAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
};

export type NoticeUncheckedUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  publishAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type NoticeUncheckedUpdateManyInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  publishAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type NoticeUncheckedUpdateManyWithoutNoticesInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  publishAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NoticeUncheckedUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<NoticeWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<NoticeCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<NoticeCreateWithoutUserInput>>>;
  createMany?: InputMaybe<NoticeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<NoticeWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<NoticeScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<NoticeWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<NoticeWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<NoticeUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<NoticeUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<NoticeUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type NoticeUncheckedUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  publishAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NoticeUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  publishAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNoticesInput>;
};

export type NoticeUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  publishAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NoticeUpdateManyWithWhereWithoutUserInput = {
  data: NoticeUncheckedUpdateManyWithoutNoticesInput;
  where: NoticeScalarWhereInput;
};

export type NoticeUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<NoticeWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<NoticeCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<NoticeCreateWithoutUserInput>>>;
  createMany?: InputMaybe<NoticeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<NoticeWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<NoticeScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<NoticeWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<NoticeWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<NoticeUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<NoticeUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<NoticeUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type NoticeUpdateWithWhereUniqueWithoutUserInput = {
  data: NoticeUncheckedUpdateWithoutUserInput;
  where: NoticeWhereUniqueInput;
};

export type NoticeUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  publishAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NoticeUpsertWithWhereUniqueWithoutUserInput = {
  create: NoticeUncheckedCreateWithoutUserInput;
  update: NoticeUncheckedUpdateWithoutUserInput;
  where: NoticeWhereUniqueInput;
};

export type NoticeWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<NoticeWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<NoticeWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<NoticeWhereInput>>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  publishAt?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<IntFilter>;
};

export type NoticeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

/** 权限-权限 */
export type Permission = {
  __typename?: 'Permission';
  _count: PermissionCountOutputType;
  actions: Array<PermissionAction>;
  id: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
};


/** 权限-权限 */
export type PermissionActionsArgs = {
  cursor?: InputMaybe<PermissionActionWhereUniqueInput>;
  distinct?: InputMaybe<PermissionActionScalarFieldEnum>;
  orderBy?: InputMaybe<PermissionActionOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionActionWhereInput>;
};

/** 权限-权限操作 */
export type PermissionAction = {
  __typename?: 'PermissionAction';
  _count: PermissionActionCountOutputType;
  id: Scalars['Int'];
  name: Scalars['String'];
  permissions: Array<Permission>;
  value: Scalars['String'];
};


/** 权限-权限操作 */
export type PermissionActionPermissionsArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  distinct?: InputMaybe<PermissionScalarFieldEnum>;
  orderBy?: InputMaybe<PermissionOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionWhereInput>;
};

export type PermissionActionAvgAggregateOutputType = {
  __typename?: 'PermissionActionAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type PermissionActionAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PermissionActionCountAggregateOutputType = {
  __typename?: 'PermissionActionCountAggregateOutputType';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  value: Scalars['Int'];
};

export type PermissionActionCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type PermissionActionCountOutputType = {
  __typename?: 'PermissionActionCountOutputType';
  permissions: Scalars['Int'];
};

export type PermissionActionCreateInput = {
  name: Scalars['String'];
  permissions?: InputMaybe<PermissionCreateNestedManyWithoutActionsInput>;
  value: Scalars['String'];
};

export type PermissionActionCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PermissionActionCreateNestedManyWithoutPermissionsInput = {
  connect?: InputMaybe<Array<InputMaybe<PermissionActionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PermissionActionCreateOrConnectWithoutPermissionsInput>>>;
  create?: InputMaybe<Array<InputMaybe<PermissionActionCreateWithoutPermissionsInput>>>;
};

export type PermissionActionCreateOrConnectWithoutPermissionsInput = {
  create: PermissionActionUncheckedCreateWithoutPermissionsInput;
  where: PermissionActionWhereUniqueInput;
};

export type PermissionActionCreateWithoutPermissionsInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PermissionActionListRelationFilter = {
  every?: InputMaybe<PermissionActionWhereInput>;
  none?: InputMaybe<PermissionActionWhereInput>;
  some?: InputMaybe<PermissionActionWhereInput>;
};

export type PermissionActionMaxAggregateOutputType = {
  __typename?: 'PermissionActionMaxAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PermissionActionMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type PermissionActionMinAggregateOutputType = {
  __typename?: 'PermissionActionMinAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PermissionActionMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type PermissionActionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum PermissionActionOrderByRelevanceFieldEnum {
  Name = 'name',
  Value = 'value'
}

export type PermissionActionOrderByRelevanceInput = {
  fields: PermissionActionOrderByRelevanceFieldEnum;
  search: Scalars['String'];
  sort: SortOrder;
};

export type PermissionActionOrderByWithAggregationInput = {
  _avg?: InputMaybe<PermissionActionAvgOrderByAggregateInput>;
  _count?: InputMaybe<PermissionActionCountOrderByAggregateInput>;
  _max?: InputMaybe<PermissionActionMaxOrderByAggregateInput>;
  _min?: InputMaybe<PermissionActionMinOrderByAggregateInput>;
  _sum?: InputMaybe<PermissionActionSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type PermissionActionOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<PermissionActionOrderByRelevanceInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<PermissionOrderByRelationAggregateInput>;
  value?: InputMaybe<SortOrder>;
};

export enum PermissionActionScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Value = 'value'
}

export type PermissionActionScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<PermissionActionScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PermissionActionScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PermissionActionScalarWhereInput>>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type PermissionActionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<PermissionActionScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PermissionActionScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PermissionActionScalarWhereWithAggregatesInput>>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  value?: InputMaybe<StringWithAggregatesFilter>;
};

export type PermissionActionSumAggregateOutputType = {
  __typename?: 'PermissionActionSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type PermissionActionSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PermissionActionUncheckedCreateInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  permissions?: InputMaybe<PermissionUncheckedCreateNestedManyWithoutActionsInput>;
  value: Scalars['String'];
};

export type PermissionActionUncheckedCreateNestedManyWithoutPermissionsInput = {
  connect?: InputMaybe<Array<InputMaybe<PermissionActionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PermissionActionCreateOrConnectWithoutPermissionsInput>>>;
  create?: InputMaybe<Array<InputMaybe<PermissionActionCreateWithoutPermissionsInput>>>;
};

export type PermissionActionUncheckedCreateWithoutPermissionsInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PermissionActionUncheckedUpdateInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<PermissionUncheckedUpdateManyWithoutActionsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionActionUncheckedUpdateManyInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionActionUncheckedUpdateManyWithoutActionsInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionActionUncheckedUpdateManyWithoutPermissionsInput = {
  connect?: InputMaybe<Array<InputMaybe<PermissionActionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PermissionActionCreateOrConnectWithoutPermissionsInput>>>;
  create?: InputMaybe<Array<InputMaybe<PermissionActionCreateWithoutPermissionsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<PermissionActionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PermissionActionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PermissionActionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PermissionActionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PermissionActionUpdateWithWhereUniqueWithoutPermissionsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PermissionActionUpdateManyWithWhereWithoutPermissionsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PermissionActionUpsertWithWhereUniqueWithoutPermissionsInput>>>;
};

export type PermissionActionUncheckedUpdateWithoutPermissionsInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionActionUpdateInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<PermissionUpdateManyWithoutActionsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionActionUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionActionUpdateManyWithWhereWithoutPermissionsInput = {
  data: PermissionActionUncheckedUpdateManyWithoutActionsInput;
  where: PermissionActionScalarWhereInput;
};

export type PermissionActionUpdateManyWithoutPermissionsInput = {
  connect?: InputMaybe<Array<InputMaybe<PermissionActionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PermissionActionCreateOrConnectWithoutPermissionsInput>>>;
  create?: InputMaybe<Array<InputMaybe<PermissionActionCreateWithoutPermissionsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<PermissionActionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PermissionActionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PermissionActionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PermissionActionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PermissionActionUpdateWithWhereUniqueWithoutPermissionsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PermissionActionUpdateManyWithWhereWithoutPermissionsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PermissionActionUpsertWithWhereUniqueWithoutPermissionsInput>>>;
};

export type PermissionActionUpdateWithWhereUniqueWithoutPermissionsInput = {
  data: PermissionActionUncheckedUpdateWithoutPermissionsInput;
  where: PermissionActionWhereUniqueInput;
};

export type PermissionActionUpdateWithoutPermissionsInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionActionUpsertWithWhereUniqueWithoutPermissionsInput = {
  create: PermissionActionUncheckedCreateWithoutPermissionsInput;
  update: PermissionActionUncheckedUpdateWithoutPermissionsInput;
  where: PermissionActionWhereUniqueInput;
};

export type PermissionActionWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<PermissionActionWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PermissionActionWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PermissionActionWhereInput>>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<PermissionListRelationFilter>;
  value?: InputMaybe<StringFilter>;
};

export type PermissionActionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type PermissionAvgAggregateOutputType = {
  __typename?: 'PermissionAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type PermissionAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PermissionCountAggregateOutputType = {
  __typename?: 'PermissionCountAggregateOutputType';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  value: Scalars['Int'];
};

export type PermissionCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type PermissionCountOutputType = {
  __typename?: 'PermissionCountOutputType';
  actions: Scalars['Int'];
};

export type PermissionCreateInput = {
  actions?: InputMaybe<PermissionActionCreateNestedManyWithoutPermissionsInput>;
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PermissionCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PermissionCreateNestedManyWithoutActionsInput = {
  connect?: InputMaybe<Array<InputMaybe<PermissionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PermissionCreateOrConnectWithoutActionsInput>>>;
  create?: InputMaybe<Array<InputMaybe<PermissionCreateWithoutActionsInput>>>;
};

export type PermissionCreateOrConnectWithoutActionsInput = {
  create: PermissionUncheckedCreateWithoutActionsInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionCreateWithoutActionsInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PermissionListRelationFilter = {
  every?: InputMaybe<PermissionWhereInput>;
  none?: InputMaybe<PermissionWhereInput>;
  some?: InputMaybe<PermissionWhereInput>;
};

export type PermissionMaxAggregateOutputType = {
  __typename?: 'PermissionMaxAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PermissionMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type PermissionMinAggregateOutputType = {
  __typename?: 'PermissionMinAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PermissionMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type PermissionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum PermissionOrderByRelevanceFieldEnum {
  Name = 'name',
  Value = 'value'
}

export type PermissionOrderByRelevanceInput = {
  fields: PermissionOrderByRelevanceFieldEnum;
  search: Scalars['String'];
  sort: SortOrder;
};

export type PermissionOrderByWithAggregationInput = {
  _avg?: InputMaybe<PermissionAvgOrderByAggregateInput>;
  _count?: InputMaybe<PermissionCountOrderByAggregateInput>;
  _max?: InputMaybe<PermissionMaxOrderByAggregateInput>;
  _min?: InputMaybe<PermissionMinOrderByAggregateInput>;
  _sum?: InputMaybe<PermissionSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type PermissionOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<PermissionOrderByRelevanceInput>;
  actions?: InputMaybe<PermissionActionOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum PermissionScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Value = 'value'
}

export type PermissionScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<PermissionScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PermissionScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PermissionScalarWhereInput>>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type PermissionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<PermissionScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PermissionScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PermissionScalarWhereWithAggregatesInput>>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  value?: InputMaybe<StringWithAggregatesFilter>;
};

export type PermissionSumAggregateOutputType = {
  __typename?: 'PermissionSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type PermissionSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PermissionUncheckedCreateInput = {
  actions?: InputMaybe<PermissionActionUncheckedCreateNestedManyWithoutPermissionsInput>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PermissionUncheckedCreateNestedManyWithoutActionsInput = {
  connect?: InputMaybe<Array<InputMaybe<PermissionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PermissionCreateOrConnectWithoutActionsInput>>>;
  create?: InputMaybe<Array<InputMaybe<PermissionCreateWithoutActionsInput>>>;
};

export type PermissionUncheckedCreateWithoutActionsInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PermissionUncheckedUpdateInput = {
  actions?: InputMaybe<PermissionActionUncheckedUpdateManyWithoutPermissionsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionUncheckedUpdateManyInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionUncheckedUpdateManyWithoutActionsInput = {
  connect?: InputMaybe<Array<InputMaybe<PermissionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PermissionCreateOrConnectWithoutActionsInput>>>;
  create?: InputMaybe<Array<InputMaybe<PermissionCreateWithoutActionsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<PermissionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PermissionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PermissionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PermissionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PermissionUpdateWithWhereUniqueWithoutActionsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PermissionUpdateManyWithWhereWithoutActionsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PermissionUpsertWithWhereUniqueWithoutActionsInput>>>;
};

export type PermissionUncheckedUpdateManyWithoutPermissionsInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionUncheckedUpdateWithoutActionsInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionUpdateInput = {
  actions?: InputMaybe<PermissionActionUpdateManyWithoutPermissionsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionUpdateManyWithWhereWithoutActionsInput = {
  data: PermissionUncheckedUpdateManyWithoutPermissionsInput;
  where: PermissionScalarWhereInput;
};

export type PermissionUpdateManyWithoutActionsInput = {
  connect?: InputMaybe<Array<InputMaybe<PermissionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PermissionCreateOrConnectWithoutActionsInput>>>;
  create?: InputMaybe<Array<InputMaybe<PermissionCreateWithoutActionsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<PermissionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PermissionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PermissionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PermissionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PermissionUpdateWithWhereUniqueWithoutActionsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PermissionUpdateManyWithWhereWithoutActionsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PermissionUpsertWithWhereUniqueWithoutActionsInput>>>;
};

export type PermissionUpdateWithWhereUniqueWithoutActionsInput = {
  data: PermissionUncheckedUpdateWithoutActionsInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionUpdateWithoutActionsInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PermissionUpsertWithWhereUniqueWithoutActionsInput = {
  create: PermissionUncheckedCreateWithoutActionsInput;
  update: PermissionUncheckedUpdateWithoutActionsInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<PermissionWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PermissionWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PermissionWhereInput>>>;
  actions?: InputMaybe<PermissionActionListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type PermissionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** 词条 */
export type Phrase = {
  __typename?: 'Phrase';
  _count: PhraseCountOutputType;
  /** 关联操作 */
  actions: Array<Action>;
  /** 编码 */
  code: Scalars['String'];
  /** 评论 */
  comments: Array<Comment>;
  createAt: Scalars['DateTime'];
  id: Scalars['Int'];
  /** 词频 */
  index: Scalars['Int'];
  /** 状态 */
  status: PhraseStatus;
  /** 标签 */
  tags: Array<Tag>;
  /** 类型 */
  type: PhraseType;
  updateAt: Scalars['DateTime'];
  /** 发起人 */
  user?: Maybe<User>;
  userId: Scalars['Int'];
  /** 词条 */
  word: Scalars['String'];
};


/** 词条 */
export type PhraseActionsArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  distinct?: InputMaybe<ActionScalarFieldEnum>;
  orderBy?: InputMaybe<ActionOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActionWhereInput>;
};


/** 词条 */
export type PhraseCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<CommentScalarFieldEnum>;
  orderBy?: InputMaybe<CommentOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


/** 词条 */
export type PhraseTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<TagScalarFieldEnum>;
  orderBy?: InputMaybe<TagOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};

export type PhraseAvgAggregateOutputType = {
  __typename?: 'PhraseAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type PhraseAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PhraseCountAggregateOutputType = {
  __typename?: 'PhraseCountAggregateOutputType';
  _all: Scalars['Int'];
  code: Scalars['Int'];
  createAt: Scalars['Int'];
  id: Scalars['Int'];
  index: Scalars['Int'];
  status: Scalars['Int'];
  type: Scalars['Int'];
  updateAt: Scalars['Int'];
  userId: Scalars['Int'];
  word: Scalars['Int'];
};

export type PhraseCountOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  word?: InputMaybe<SortOrder>;
};

export type PhraseCountOutputType = {
  __typename?: 'PhraseCountOutputType';
  actions: Scalars['Int'];
  comments: Scalars['Int'];
  tags: Scalars['Int'];
};

export type PhraseCreateInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutPhraseInput>;
  code: Scalars['String'];
  comments?: InputMaybe<CommentCreateNestedManyWithoutPhraseInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  index: Scalars['Int'];
  status: PhraseStatus;
  tags?: InputMaybe<TagCreateNestedManyWithoutPhrasesInput>;
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutPhrasesInput>;
  word: Scalars['String'];
};

export type PhraseCreateManyInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
  status: PhraseStatus;
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  word: Scalars['String'];
};

export type PhraseCreateManyUserInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
  status: PhraseStatus;
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  word: Scalars['String'];
};

export type PhraseCreateManyUserInputEnvelope = {
  data: PhraseCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PhraseCreateNestedManyWithoutTagsInput = {
  connect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PhraseCreateOrConnectWithoutTagsInput>>>;
  create?: InputMaybe<Array<InputMaybe<PhraseCreateWithoutTagsInput>>>;
};

export type PhraseCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PhraseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PhraseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PhraseCreateManyUserInputEnvelope>;
};

export type PhraseCreateNestedOneWithoutActionsInput = {
  connect?: InputMaybe<PhraseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PhraseCreateOrConnectWithoutActionsInput>;
  create?: InputMaybe<PhraseUncheckedCreateWithoutActionsInput>;
};

export type PhraseCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<PhraseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PhraseCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PhraseUncheckedCreateWithoutCommentsInput>;
};

export type PhraseCreateOrConnectWithoutActionsInput = {
  create: PhraseUncheckedCreateWithoutActionsInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseCreateOrConnectWithoutCommentsInput = {
  create: PhraseUncheckedCreateWithoutCommentsInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseCreateOrConnectWithoutTagsInput = {
  create: PhraseUncheckedCreateWithoutTagsInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseCreateOrConnectWithoutUserInput = {
  create: PhraseUncheckedCreateWithoutUserInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseCreateWithoutActionsInput = {
  code: Scalars['String'];
  comments?: InputMaybe<CommentCreateNestedManyWithoutPhraseInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  index: Scalars['Int'];
  status: PhraseStatus;
  tags?: InputMaybe<TagCreateNestedManyWithoutPhrasesInput>;
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutPhrasesInput>;
  word: Scalars['String'];
};

export type PhraseCreateWithoutCommentsInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutPhraseInput>;
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  index: Scalars['Int'];
  status: PhraseStatus;
  tags?: InputMaybe<TagCreateNestedManyWithoutPhrasesInput>;
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutPhrasesInput>;
  word: Scalars['String'];
};

export type PhraseCreateWithoutTagsInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutPhraseInput>;
  code: Scalars['String'];
  comments?: InputMaybe<CommentCreateNestedManyWithoutPhraseInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  index: Scalars['Int'];
  status: PhraseStatus;
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutPhrasesInput>;
  word: Scalars['String'];
};

export type PhraseCreateWithoutUserInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutPhraseInput>;
  code: Scalars['String'];
  comments?: InputMaybe<CommentCreateNestedManyWithoutPhraseInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  index: Scalars['Int'];
  status: PhraseStatus;
  tags?: InputMaybe<TagCreateNestedManyWithoutPhrasesInput>;
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  word: Scalars['String'];
};

export type PhraseListRelationFilter = {
  every?: InputMaybe<PhraseWhereInput>;
  none?: InputMaybe<PhraseWhereInput>;
  some?: InputMaybe<PhraseWhereInput>;
};

export type PhraseMaxAggregateOutputType = {
  __typename?: 'PhraseMaxAggregateOutputType';
  code?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  status?: Maybe<PhraseStatus>;
  type?: Maybe<PhraseType>;
  updateAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  word?: Maybe<Scalars['String']>;
};

export type PhraseMaxOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  word?: InputMaybe<SortOrder>;
};

export type PhraseMinAggregateOutputType = {
  __typename?: 'PhraseMinAggregateOutputType';
  code?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  status?: Maybe<PhraseStatus>;
  type?: Maybe<PhraseType>;
  updateAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  word?: Maybe<Scalars['String']>;
};

export type PhraseMinOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  word?: InputMaybe<SortOrder>;
};

export type PhraseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum PhraseOrderByRelevanceFieldEnum {
  Code = 'code',
  Word = 'word'
}

export type PhraseOrderByRelevanceInput = {
  fields: PhraseOrderByRelevanceFieldEnum;
  search: Scalars['String'];
  sort: SortOrder;
};

export type PhraseOrderByWithAggregationInput = {
  _avg?: InputMaybe<PhraseAvgOrderByAggregateInput>;
  _count?: InputMaybe<PhraseCountOrderByAggregateInput>;
  _max?: InputMaybe<PhraseMaxOrderByAggregateInput>;
  _min?: InputMaybe<PhraseMinOrderByAggregateInput>;
  _sum?: InputMaybe<PhraseSumOrderByAggregateInput>;
  code?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  word?: InputMaybe<SortOrder>;
};

export type PhraseOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<PhraseOrderByRelevanceInput>;
  actions?: InputMaybe<ActionOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  tags?: InputMaybe<TagOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
  word?: InputMaybe<SortOrder>;
};

export type PhraseRelationFilter = {
  is?: InputMaybe<PhraseWhereInput>;
  isNot?: InputMaybe<PhraseWhereInput>;
};

export enum PhraseScalarFieldEnum {
  Code = 'code',
  CreateAt = 'createAt',
  Id = 'id',
  Index = 'index',
  Status = 'status',
  Type = 'type',
  UpdateAt = 'updateAt',
  UserId = 'userId',
  Word = 'word'
}

export type PhraseScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<PhraseScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PhraseScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PhraseScalarWhereInput>>>;
  code?: InputMaybe<StringFilter>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  index?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumPhraseStatusFilter>;
  type?: InputMaybe<EnumPhraseTypeFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
  word?: InputMaybe<StringFilter>;
};

export type PhraseScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<PhraseScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PhraseScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PhraseScalarWhereWithAggregatesInput>>>;
  code?: InputMaybe<StringWithAggregatesFilter>;
  createAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  index?: InputMaybe<IntWithAggregatesFilter>;
  status?: InputMaybe<EnumPhraseStatusWithAggregatesFilter>;
  type?: InputMaybe<EnumPhraseTypeWithAggregatesFilter>;
  updateAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
  word?: InputMaybe<StringWithAggregatesFilter>;
};

export enum PhraseStatus {
  Draft = 'Draft',
  Finish = 'Finish',
  Reject = 'Reject'
}

export type PhraseSumAggregateOutputType = {
  __typename?: 'PhraseSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PhraseSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum PhraseType {
  Link = 'Link',
  Other = 'Other',
  Phrase = 'Phrase',
  Poem = 'Poem',
  Sentence = 'Sentence',
  Single = 'Single',
  Symbol = 'Symbol'
}

export type PhraseUncheckedCreateInput = {
  actions?: InputMaybe<ActionUncheckedCreateNestedManyWithoutPhraseInput>;
  code: Scalars['String'];
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutPhraseInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
  status: PhraseStatus;
  tags?: InputMaybe<TagUncheckedCreateNestedManyWithoutPhrasesInput>;
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  word: Scalars['String'];
};

export type PhraseUncheckedCreateNestedManyWithoutTagsInput = {
  connect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PhraseCreateOrConnectWithoutTagsInput>>>;
  create?: InputMaybe<Array<InputMaybe<PhraseCreateWithoutTagsInput>>>;
};

export type PhraseUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PhraseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PhraseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PhraseCreateManyUserInputEnvelope>;
};

export type PhraseUncheckedCreateWithoutActionsInput = {
  code: Scalars['String'];
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutPhraseInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
  status: PhraseStatus;
  tags?: InputMaybe<TagUncheckedCreateNestedManyWithoutPhrasesInput>;
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  word: Scalars['String'];
};

export type PhraseUncheckedCreateWithoutCommentsInput = {
  actions?: InputMaybe<ActionUncheckedCreateNestedManyWithoutPhraseInput>;
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
  status: PhraseStatus;
  tags?: InputMaybe<TagUncheckedCreateNestedManyWithoutPhrasesInput>;
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  word: Scalars['String'];
};

export type PhraseUncheckedCreateWithoutTagsInput = {
  actions?: InputMaybe<ActionUncheckedCreateNestedManyWithoutPhraseInput>;
  code: Scalars['String'];
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutPhraseInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
  status: PhraseStatus;
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  word: Scalars['String'];
};

export type PhraseUncheckedCreateWithoutUserInput = {
  actions?: InputMaybe<ActionUncheckedCreateNestedManyWithoutPhraseInput>;
  code: Scalars['String'];
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutPhraseInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
  status: PhraseStatus;
  tags?: InputMaybe<TagUncheckedCreateNestedManyWithoutPhrasesInput>;
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  word: Scalars['String'];
};

export type PhraseUncheckedUpdateInput = {
  actions?: InputMaybe<ActionUncheckedUpdateManyWithoutPhraseInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutPhraseInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPhraseStatusFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUncheckedUpdateManyWithoutPhrasesInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUncheckedUpdateManyInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPhraseStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUncheckedUpdateManyWithoutPhrasesInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPhraseStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUncheckedUpdateManyWithoutTagsInput = {
  connect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PhraseCreateOrConnectWithoutTagsInput>>>;
  create?: InputMaybe<Array<InputMaybe<PhraseCreateWithoutTagsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PhraseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PhraseUpdateWithWhereUniqueWithoutTagsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PhraseUpdateManyWithWhereWithoutTagsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PhraseUpsertWithWhereUniqueWithoutTagsInput>>>;
};

export type PhraseUncheckedUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PhraseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PhraseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PhraseCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PhraseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PhraseUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PhraseUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PhraseUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type PhraseUncheckedUpdateWithoutActionsInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutPhraseInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPhraseStatusFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUncheckedUpdateManyWithoutPhrasesInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUncheckedUpdateWithoutCommentsInput = {
  actions?: InputMaybe<ActionUncheckedUpdateManyWithoutPhraseInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPhraseStatusFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUncheckedUpdateManyWithoutPhrasesInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUncheckedUpdateWithoutTagsInput = {
  actions?: InputMaybe<ActionUncheckedUpdateManyWithoutPhraseInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutPhraseInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPhraseStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUncheckedUpdateWithoutUserInput = {
  actions?: InputMaybe<ActionUncheckedUpdateManyWithoutPhraseInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutPhraseInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPhraseStatusFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUncheckedUpdateManyWithoutPhrasesInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUpdateInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutPhraseInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPhraseInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPhraseStatusFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutPhrasesInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutPhrasesInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUpdateManyMutationInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPhraseStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUpdateManyWithWhereWithoutTagsInput = {
  data: PhraseUncheckedUpdateManyWithoutPhrasesInput;
  where: PhraseScalarWhereInput;
};

export type PhraseUpdateManyWithWhereWithoutUserInput = {
  data: PhraseUncheckedUpdateManyWithoutPhrasesInput;
  where: PhraseScalarWhereInput;
};

export type PhraseUpdateManyWithoutTagsInput = {
  connect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PhraseCreateOrConnectWithoutTagsInput>>>;
  create?: InputMaybe<Array<InputMaybe<PhraseCreateWithoutTagsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PhraseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PhraseUpdateWithWhereUniqueWithoutTagsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PhraseUpdateManyWithWhereWithoutTagsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PhraseUpsertWithWhereUniqueWithoutTagsInput>>>;
};

export type PhraseUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PhraseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PhraseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PhraseCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PhraseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PhraseUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PhraseUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PhraseUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type PhraseUpdateOneRequiredWithoutActionsInput = {
  connect?: InputMaybe<PhraseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PhraseCreateOrConnectWithoutActionsInput>;
  create?: InputMaybe<PhraseUncheckedCreateWithoutActionsInput>;
  update?: InputMaybe<PhraseUncheckedUpdateWithoutActionsInput>;
  upsert?: InputMaybe<PhraseUpsertWithoutActionsInput>;
};

export type PhraseUpdateOneWithoutCommentsInput = {
  connect?: InputMaybe<PhraseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PhraseCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PhraseUncheckedCreateWithoutCommentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PhraseUncheckedUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<PhraseUpsertWithoutCommentsInput>;
};

export type PhraseUpdateWithWhereUniqueWithoutTagsInput = {
  data: PhraseUncheckedUpdateWithoutTagsInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseUpdateWithWhereUniqueWithoutUserInput = {
  data: PhraseUncheckedUpdateWithoutUserInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseUpdateWithoutActionsInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPhraseInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPhraseStatusFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutPhrasesInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutPhrasesInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUpdateWithoutCommentsInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutPhraseInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPhraseStatusFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutPhrasesInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutPhrasesInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUpdateWithoutTagsInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutPhraseInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPhraseInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPhraseStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutPhrasesInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUpdateWithoutUserInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutPhraseInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPhraseInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPhraseStatusFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutPhrasesInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUpsertWithWhereUniqueWithoutTagsInput = {
  create: PhraseUncheckedCreateWithoutTagsInput;
  update: PhraseUncheckedUpdateWithoutTagsInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseUpsertWithWhereUniqueWithoutUserInput = {
  create: PhraseUncheckedCreateWithoutUserInput;
  update: PhraseUncheckedUpdateWithoutUserInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseUpsertWithoutActionsInput = {
  create: PhraseUncheckedCreateWithoutActionsInput;
  update: PhraseUncheckedUpdateWithoutActionsInput;
};

export type PhraseUpsertWithoutCommentsInput = {
  create: PhraseUncheckedCreateWithoutCommentsInput;
  update: PhraseUncheckedUpdateWithoutCommentsInput;
};

export type PhraseWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<PhraseWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PhraseWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PhraseWhereInput>>>;
  actions?: InputMaybe<ActionListRelationFilter>;
  code?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  index?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumPhraseStatusFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  type?: InputMaybe<EnumPhraseTypeFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<IntFilter>;
  word?: InputMaybe<StringFilter>;
};

export type PhraseWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** 词条-拉取请求 */
export type PullRequest = {
  __typename?: 'PullRequest';
  _count: PullRequestCountOutputType;
  action: Action;
  actionId: Scalars['Int'];
  comments: Array<Comment>;
  content: Scalars['String'];
  createAt: Scalars['DateTime'];
  id: Scalars['Int'];
  status: PullRequestStatus;
  updateAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};


/** 词条-拉取请求 */
export type PullRequestCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<CommentScalarFieldEnum>;
  orderBy?: InputMaybe<CommentOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};

export type PullRequestAvgAggregateOutputType = {
  __typename?: 'PullRequestAvgAggregateOutputType';
  actionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type PullRequestAvgOrderByAggregateInput = {
  actionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PullRequestCountAggregateOutputType = {
  __typename?: 'PullRequestCountAggregateOutputType';
  _all: Scalars['Int'];
  actionId: Scalars['Int'];
  content: Scalars['Int'];
  createAt: Scalars['Int'];
  id: Scalars['Int'];
  status: Scalars['Int'];
  updateAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type PullRequestCountOrderByAggregateInput = {
  actionId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PullRequestCountOutputType = {
  __typename?: 'PullRequestCountOutputType';
  comments: Scalars['Int'];
};

export type PullRequestCreateInput = {
  action: ActionCreateNestedOneWithoutPullRequestsInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutPullRequestInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  status: PullRequestStatus;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPullRequestsInput;
};

export type PullRequestCreateManyActionInput = {
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  status: PullRequestStatus;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type PullRequestCreateManyActionInputEnvelope = {
  data: PullRequestCreateManyActionInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PullRequestCreateManyInput = {
  actionId: Scalars['Int'];
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  status: PullRequestStatus;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type PullRequestCreateManyUserInput = {
  actionId: Scalars['Int'];
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  status: PullRequestStatus;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type PullRequestCreateManyUserInputEnvelope = {
  data: PullRequestCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PullRequestCreateNestedManyWithoutActionInput = {
  connect?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PullRequestCreateOrConnectWithoutActionInput>>>;
  create?: InputMaybe<Array<InputMaybe<PullRequestCreateWithoutActionInput>>>;
  createMany?: InputMaybe<PullRequestCreateManyActionInputEnvelope>;
};

export type PullRequestCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PullRequestCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PullRequestCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PullRequestCreateManyUserInputEnvelope>;
};

export type PullRequestCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<PullRequestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PullRequestCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PullRequestUncheckedCreateWithoutCommentsInput>;
};

export type PullRequestCreateOrConnectWithoutActionInput = {
  create: PullRequestUncheckedCreateWithoutActionInput;
  where: PullRequestWhereUniqueInput;
};

export type PullRequestCreateOrConnectWithoutCommentsInput = {
  create: PullRequestUncheckedCreateWithoutCommentsInput;
  where: PullRequestWhereUniqueInput;
};

export type PullRequestCreateOrConnectWithoutUserInput = {
  create: PullRequestUncheckedCreateWithoutUserInput;
  where: PullRequestWhereUniqueInput;
};

export type PullRequestCreateWithoutActionInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutPullRequestInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  status: PullRequestStatus;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPullRequestsInput;
};

export type PullRequestCreateWithoutCommentsInput = {
  action: ActionCreateNestedOneWithoutPullRequestsInput;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  status: PullRequestStatus;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPullRequestsInput;
};

export type PullRequestCreateWithoutUserInput = {
  action: ActionCreateNestedOneWithoutPullRequestsInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutPullRequestInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  status: PullRequestStatus;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type PullRequestListRelationFilter = {
  every?: InputMaybe<PullRequestWhereInput>;
  none?: InputMaybe<PullRequestWhereInput>;
  some?: InputMaybe<PullRequestWhereInput>;
};

export type PullRequestMaxAggregateOutputType = {
  __typename?: 'PullRequestMaxAggregateOutputType';
  actionId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<PullRequestStatus>;
  updateAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PullRequestMaxOrderByAggregateInput = {
  actionId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PullRequestMinAggregateOutputType = {
  __typename?: 'PullRequestMinAggregateOutputType';
  actionId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<PullRequestStatus>;
  updateAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PullRequestMinOrderByAggregateInput = {
  actionId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PullRequestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum PullRequestOrderByRelevanceFieldEnum {
  Content = 'content'
}

export type PullRequestOrderByRelevanceInput = {
  fields: PullRequestOrderByRelevanceFieldEnum;
  search: Scalars['String'];
  sort: SortOrder;
};

export type PullRequestOrderByWithAggregationInput = {
  _avg?: InputMaybe<PullRequestAvgOrderByAggregateInput>;
  _count?: InputMaybe<PullRequestCountOrderByAggregateInput>;
  _max?: InputMaybe<PullRequestMaxOrderByAggregateInput>;
  _min?: InputMaybe<PullRequestMinOrderByAggregateInput>;
  _sum?: InputMaybe<PullRequestSumOrderByAggregateInput>;
  actionId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PullRequestOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<PullRequestOrderByRelevanceInput>;
  action?: InputMaybe<ActionOrderByWithRelationAndSearchRelevanceInput>;
  actionId?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type PullRequestRelationFilter = {
  is?: InputMaybe<PullRequestWhereInput>;
  isNot?: InputMaybe<PullRequestWhereInput>;
};

export enum PullRequestScalarFieldEnum {
  ActionId = 'actionId',
  Content = 'content',
  CreateAt = 'createAt',
  Id = 'id',
  Status = 'status',
  UpdateAt = 'updateAt',
  UserId = 'userId'
}

export type PullRequestScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<PullRequestScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PullRequestScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PullRequestScalarWhereInput>>>;
  actionId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumPullRequestStatusFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PullRequestScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<PullRequestScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PullRequestScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PullRequestScalarWhereWithAggregatesInput>>>;
  actionId?: InputMaybe<IntWithAggregatesFilter>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  status?: InputMaybe<EnumPullRequestStatusWithAggregatesFilter>;
  updateAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export enum PullRequestStatus {
  Approved = 'Approved',
  Pending = 'Pending',
  Rejected = 'Rejected'
}

export type PullRequestSumAggregateOutputType = {
  __typename?: 'PullRequestSumAggregateOutputType';
  actionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PullRequestSumOrderByAggregateInput = {
  actionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PullRequestUncheckedCreateInput = {
  actionId: Scalars['Int'];
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutPullRequestInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  status: PullRequestStatus;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type PullRequestUncheckedCreateNestedManyWithoutActionInput = {
  connect?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PullRequestCreateOrConnectWithoutActionInput>>>;
  create?: InputMaybe<Array<InputMaybe<PullRequestCreateWithoutActionInput>>>;
  createMany?: InputMaybe<PullRequestCreateManyActionInputEnvelope>;
};

export type PullRequestUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PullRequestCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PullRequestCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PullRequestCreateManyUserInputEnvelope>;
};

export type PullRequestUncheckedCreateWithoutActionInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutPullRequestInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  status: PullRequestStatus;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type PullRequestUncheckedCreateWithoutCommentsInput = {
  actionId: Scalars['Int'];
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  status: PullRequestStatus;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type PullRequestUncheckedCreateWithoutUserInput = {
  actionId: Scalars['Int'];
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutPullRequestInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  status: PullRequestStatus;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type PullRequestUncheckedUpdateInput = {
  actionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutPullRequestInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPullRequestStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PullRequestUncheckedUpdateManyInput = {
  actionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPullRequestStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PullRequestUncheckedUpdateManyWithoutActionInput = {
  connect?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PullRequestCreateOrConnectWithoutActionInput>>>;
  create?: InputMaybe<Array<InputMaybe<PullRequestCreateWithoutActionInput>>>;
  createMany?: InputMaybe<PullRequestCreateManyActionInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PullRequestScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PullRequestUpdateWithWhereUniqueWithoutActionInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PullRequestUpdateManyWithWhereWithoutActionInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PullRequestUpsertWithWhereUniqueWithoutActionInput>>>;
};

export type PullRequestUncheckedUpdateManyWithoutPullRequestsInput = {
  actionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPullRequestStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PullRequestUncheckedUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PullRequestCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PullRequestCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PullRequestCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PullRequestScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PullRequestUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PullRequestUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PullRequestUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type PullRequestUncheckedUpdateWithoutActionInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutPullRequestInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPullRequestStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PullRequestUncheckedUpdateWithoutCommentsInput = {
  actionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPullRequestStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PullRequestUncheckedUpdateWithoutUserInput = {
  actionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutPullRequestInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPullRequestStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PullRequestUpdateInput = {
  action?: InputMaybe<ActionUpdateOneRequiredWithoutPullRequestsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPullRequestInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPullRequestStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPullRequestsInput>;
};

export type PullRequestUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPullRequestStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PullRequestUpdateManyWithWhereWithoutActionInput = {
  data: PullRequestUncheckedUpdateManyWithoutPullRequestsInput;
  where: PullRequestScalarWhereInput;
};

export type PullRequestUpdateManyWithWhereWithoutUserInput = {
  data: PullRequestUncheckedUpdateManyWithoutPullRequestsInput;
  where: PullRequestScalarWhereInput;
};

export type PullRequestUpdateManyWithoutActionInput = {
  connect?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PullRequestCreateOrConnectWithoutActionInput>>>;
  create?: InputMaybe<Array<InputMaybe<PullRequestCreateWithoutActionInput>>>;
  createMany?: InputMaybe<PullRequestCreateManyActionInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PullRequestScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PullRequestUpdateWithWhereUniqueWithoutActionInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PullRequestUpdateManyWithWhereWithoutActionInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PullRequestUpsertWithWhereUniqueWithoutActionInput>>>;
};

export type PullRequestUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PullRequestCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PullRequestCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PullRequestCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<PullRequestScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<PullRequestWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<PullRequestUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<PullRequestUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<PullRequestUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type PullRequestUpdateOneWithoutCommentsInput = {
  connect?: InputMaybe<PullRequestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PullRequestCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PullRequestUncheckedCreateWithoutCommentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PullRequestUncheckedUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<PullRequestUpsertWithoutCommentsInput>;
};

export type PullRequestUpdateWithWhereUniqueWithoutActionInput = {
  data: PullRequestUncheckedUpdateWithoutActionInput;
  where: PullRequestWhereUniqueInput;
};

export type PullRequestUpdateWithWhereUniqueWithoutUserInput = {
  data: PullRequestUncheckedUpdateWithoutUserInput;
  where: PullRequestWhereUniqueInput;
};

export type PullRequestUpdateWithoutActionInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutPullRequestInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPullRequestStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPullRequestsInput>;
};

export type PullRequestUpdateWithoutCommentsInput = {
  action?: InputMaybe<ActionUpdateOneRequiredWithoutPullRequestsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPullRequestStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPullRequestsInput>;
};

export type PullRequestUpdateWithoutUserInput = {
  action?: InputMaybe<ActionUpdateOneRequiredWithoutPullRequestsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPullRequestInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPullRequestStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PullRequestUpsertWithWhereUniqueWithoutActionInput = {
  create: PullRequestUncheckedCreateWithoutActionInput;
  update: PullRequestUncheckedUpdateWithoutActionInput;
  where: PullRequestWhereUniqueInput;
};

export type PullRequestUpsertWithWhereUniqueWithoutUserInput = {
  create: PullRequestUncheckedCreateWithoutUserInput;
  update: PullRequestUncheckedUpdateWithoutUserInput;
  where: PullRequestWhereUniqueInput;
};

export type PullRequestUpsertWithoutCommentsInput = {
  create: PullRequestUncheckedCreateWithoutCommentsInput;
  update: PullRequestUncheckedUpdateWithoutCommentsInput;
};

export type PullRequestWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<PullRequestWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PullRequestWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PullRequestWhereInput>>>;
  action?: InputMaybe<ActionWhereInput>;
  actionId?: InputMaybe<IntFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumPullRequestStatusFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<IntFilter>;
};

export type PullRequestWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAction?: Maybe<AggregateAction>;
  aggregateCasbinRule?: Maybe<AggregateCasbinRule>;
  aggregateComment?: Maybe<AggregateComment>;
  aggregateNotice?: Maybe<AggregateNotice>;
  aggregatePermission?: Maybe<AggregatePermission>;
  aggregatePermissionAction?: Maybe<AggregatePermissionAction>;
  aggregatePhrase?: Maybe<AggregatePhrase>;
  aggregatePullRequest?: Maybe<AggregatePullRequest>;
  aggregateRole?: Maybe<AggregateRole>;
  aggregateTag?: Maybe<AggregateTag>;
  aggregateUser?: Maybe<AggregateUser>;
  aggregateWechat?: Maybe<AggregateWechat>;
  findFirstAction?: Maybe<Action>;
  findFirstCasbinRule?: Maybe<CasbinRule>;
  findFirstComment?: Maybe<Comment>;
  findFirstNotice?: Maybe<Notice>;
  findFirstPermission?: Maybe<Permission>;
  findFirstPermissionAction?: Maybe<PermissionAction>;
  findFirstPhrase?: Maybe<Phrase>;
  findFirstPullRequest?: Maybe<PullRequest>;
  findFirstRole?: Maybe<Role>;
  findFirstTag?: Maybe<Tag>;
  findFirstUser?: Maybe<User>;
  findFirstWechat?: Maybe<Wechat>;
  findManyAction: Array<Action>;
  findManyActionCount: Scalars['Int'];
  findManyCasbinRule: Array<CasbinRule>;
  findManyCasbinRuleCount: Scalars['Int'];
  findManyComment: Array<Comment>;
  findManyCommentCount: Scalars['Int'];
  findManyNotice: Array<Notice>;
  findManyNoticeCount: Scalars['Int'];
  findManyPermission: Array<Permission>;
  findManyPermissionAction: Array<PermissionAction>;
  findManyPermissionActionCount: Scalars['Int'];
  findManyPermissionCount: Scalars['Int'];
  findManyPhrase: Array<Phrase>;
  findManyPhraseCount: Scalars['Int'];
  findManyPullRequest: Array<PullRequest>;
  findManyPullRequestCount: Scalars['Int'];
  findManyRole: Array<Role>;
  findManyRoleCount: Scalars['Int'];
  findManyTag: Array<Tag>;
  findManyTagCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findManyWechat: Array<Wechat>;
  findManyWechatCount: Scalars['Int'];
  findMePermissions?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  findRolePermissions?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  findUniqueAction?: Maybe<Action>;
  findUniqueCasbinRule?: Maybe<CasbinRule>;
  findUniqueComment?: Maybe<Comment>;
  findUniqueNotice?: Maybe<Notice>;
  findUniquePermission?: Maybe<Permission>;
  findUniquePermissionAction?: Maybe<PermissionAction>;
  findUniquePhrase?: Maybe<Phrase>;
  findUniquePullRequest?: Maybe<PullRequest>;
  findUniqueRole?: Maybe<Role>;
  findUniqueTag?: Maybe<Tag>;
  findUniqueUser?: Maybe<User>;
  findUniqueWechat?: Maybe<Wechat>;
  findUserMe?: Maybe<User>;
  findUserPermissions?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  testQuery?: Maybe<Scalars['String']>;
};


export type QueryAggregateActionArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<ActionOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActionWhereInput>;
};


export type QueryAggregateCasbinRuleArgs = {
  cursor?: InputMaybe<CasbinRuleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<CasbinRuleOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CasbinRuleWhereInput>;
};


export type QueryAggregateCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<CommentOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryAggregateNoticeArgs = {
  cursor?: InputMaybe<NoticeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<NoticeOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NoticeWhereInput>;
};


export type QueryAggregatePermissionArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<PermissionOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionWhereInput>;
};


export type QueryAggregatePermissionActionArgs = {
  cursor?: InputMaybe<PermissionActionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<PermissionActionOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionActionWhereInput>;
};


export type QueryAggregatePhraseArgs = {
  cursor?: InputMaybe<PhraseWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<PhraseOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PhraseWhereInput>;
};


export type QueryAggregatePullRequestArgs = {
  cursor?: InputMaybe<PullRequestWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<PullRequestOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PullRequestWhereInput>;
};


export type QueryAggregateRoleArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QueryAggregateTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<TagOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateWechatArgs = {
  cursor?: InputMaybe<WechatWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<WechatOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WechatWhereInput>;
};


export type QueryFindFirstActionArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ActionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ActionOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActionWhereInput>;
};


export type QueryFindFirstCasbinRuleArgs = {
  cursor?: InputMaybe<CasbinRuleWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CasbinRuleScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CasbinRuleOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CasbinRuleWhereInput>;
};


export type QueryFindFirstCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CommentScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CommentOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstNoticeArgs = {
  cursor?: InputMaybe<NoticeWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<NoticeScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<NoticeOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NoticeWhereInput>;
};


export type QueryFindFirstPermissionArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<PermissionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<PermissionOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionWhereInput>;
};


export type QueryFindFirstPermissionActionArgs = {
  cursor?: InputMaybe<PermissionActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<PermissionActionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<PermissionActionOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionActionWhereInput>;
};


export type QueryFindFirstPhraseArgs = {
  cursor?: InputMaybe<PhraseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<PhraseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<PhraseOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PhraseWhereInput>;
};


export type QueryFindFirstPullRequestArgs = {
  cursor?: InputMaybe<PullRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<PullRequestScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<PullRequestOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PullRequestWhereInput>;
};


export type QueryFindFirstRoleArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<RoleScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QueryFindFirstTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TagScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TagOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstWechatArgs = {
  cursor?: InputMaybe<WechatWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<WechatScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<WechatOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WechatWhereInput>;
};


export type QueryFindManyActionArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ActionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ActionOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActionWhereInput>;
};


export type QueryFindManyActionCountArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ActionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ActionOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActionWhereInput>;
};


export type QueryFindManyCasbinRuleArgs = {
  cursor?: InputMaybe<CasbinRuleWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CasbinRuleScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CasbinRuleOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CasbinRuleWhereInput>;
};


export type QueryFindManyCasbinRuleCountArgs = {
  cursor?: InputMaybe<CasbinRuleWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CasbinRuleScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CasbinRuleOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CasbinRuleWhereInput>;
};


export type QueryFindManyCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CommentScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CommentOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindManyCommentCountArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CommentScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CommentOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindManyNoticeArgs = {
  cursor?: InputMaybe<NoticeWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<NoticeScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<NoticeOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NoticeWhereInput>;
};


export type QueryFindManyNoticeCountArgs = {
  cursor?: InputMaybe<NoticeWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<NoticeScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<NoticeOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NoticeWhereInput>;
};


export type QueryFindManyPermissionArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<PermissionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<PermissionOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionWhereInput>;
};


export type QueryFindManyPermissionActionArgs = {
  cursor?: InputMaybe<PermissionActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<PermissionActionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<PermissionActionOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionActionWhereInput>;
};


export type QueryFindManyPermissionActionCountArgs = {
  cursor?: InputMaybe<PermissionActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<PermissionActionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<PermissionActionOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionActionWhereInput>;
};


export type QueryFindManyPermissionCountArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<PermissionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<PermissionOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionWhereInput>;
};


export type QueryFindManyPhraseArgs = {
  cursor?: InputMaybe<PhraseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<PhraseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<PhraseOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PhraseWhereInput>;
};


export type QueryFindManyPhraseCountArgs = {
  cursor?: InputMaybe<PhraseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<PhraseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<PhraseOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PhraseWhereInput>;
};


export type QueryFindManyPullRequestArgs = {
  cursor?: InputMaybe<PullRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<PullRequestScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<PullRequestOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PullRequestWhereInput>;
};


export type QueryFindManyPullRequestCountArgs = {
  cursor?: InputMaybe<PullRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<PullRequestScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<PullRequestOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PullRequestWhereInput>;
};


export type QueryFindManyRoleArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<RoleScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QueryFindManyRoleCountArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<RoleScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QueryFindManyTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TagScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TagOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryFindManyTagCountArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TagScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TagOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyWechatArgs = {
  cursor?: InputMaybe<WechatWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<WechatScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<WechatOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WechatWhereInput>;
};


export type QueryFindManyWechatCountArgs = {
  cursor?: InputMaybe<WechatWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<WechatScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<WechatOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WechatWhereInput>;
};


export type QueryFindRolePermissionsArgs = {
  value: Scalars['String'];
};


export type QueryFindUniqueActionArgs = {
  where: ActionWhereUniqueInput;
};


export type QueryFindUniqueCasbinRuleArgs = {
  where: CasbinRuleWhereUniqueInput;
};


export type QueryFindUniqueCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryFindUniqueNoticeArgs = {
  where: NoticeWhereUniqueInput;
};


export type QueryFindUniquePermissionArgs = {
  where: PermissionWhereUniqueInput;
};


export type QueryFindUniquePermissionActionArgs = {
  where: PermissionActionWhereUniqueInput;
};


export type QueryFindUniquePhraseArgs = {
  where: PhraseWhereUniqueInput;
};


export type QueryFindUniquePullRequestArgs = {
  where: PullRequestWhereUniqueInput;
};


export type QueryFindUniqueRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type QueryFindUniqueTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindUniqueWechatArgs = {
  where: WechatWhereUniqueInput;
};


export type QueryFindUserPermissionsArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

/** 权限-角色 */
export type Role = {
  __typename?: 'Role';
  _count: RoleCountOutputType;
  createAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updateAt: Scalars['DateTime'];
  users: Array<User>;
  value: Scalars['String'];
};


/** 权限-角色 */
export type RoleUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<UserScalarFieldEnum>;
  orderBy?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type RoleAvgAggregateOutputType = {
  __typename?: 'RoleAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type RoleAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type RoleCountAggregateOutputType = {
  __typename?: 'RoleCountAggregateOutputType';
  _all: Scalars['Int'];
  createAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updateAt: Scalars['Int'];
  value: Scalars['Int'];
};

export type RoleCountOrderByAggregateInput = {
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type RoleCountOutputType = {
  __typename?: 'RoleCountOutputType';
  users: Scalars['Int'];
};

export type RoleCreateInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutRolesInput>;
  value: Scalars['String'];
};

export type RoleCreateManyInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type RoleCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<InputMaybe<RoleWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<RoleCreateOrConnectWithoutUsersInput>>>;
  create?: InputMaybe<Array<InputMaybe<RoleCreateWithoutUsersInput>>>;
};

export type RoleCreateOrConnectWithoutUsersInput = {
  create: RoleUncheckedCreateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutUsersInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type RoleListRelationFilter = {
  every?: InputMaybe<RoleWhereInput>;
  none?: InputMaybe<RoleWhereInput>;
  some?: InputMaybe<RoleWhereInput>;
};

export type RoleMaxAggregateOutputType = {
  __typename?: 'RoleMaxAggregateOutputType';
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type RoleMaxOrderByAggregateInput = {
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type RoleMinAggregateOutputType = {
  __typename?: 'RoleMinAggregateOutputType';
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type RoleMinOrderByAggregateInput = {
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type RoleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum RoleOrderByRelevanceFieldEnum {
  Name = 'name',
  Value = 'value'
}

export type RoleOrderByRelevanceInput = {
  fields: RoleOrderByRelevanceFieldEnum;
  search: Scalars['String'];
  sort: SortOrder;
};

export type RoleOrderByWithAggregationInput = {
  _avg?: InputMaybe<RoleAvgOrderByAggregateInput>;
  _count?: InputMaybe<RoleCountOrderByAggregateInput>;
  _max?: InputMaybe<RoleMaxOrderByAggregateInput>;
  _min?: InputMaybe<RoleMinOrderByAggregateInput>;
  _sum?: InputMaybe<RoleSumOrderByAggregateInput>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type RoleOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<RoleOrderByRelevanceInput>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
  value?: InputMaybe<SortOrder>;
};

export enum RoleScalarFieldEnum {
  CreateAt = 'createAt',
  Id = 'id',
  Name = 'name',
  UpdateAt = 'updateAt',
  Value = 'value'
}

export type RoleScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<RoleScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<RoleScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RoleScalarWhereInput>>>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<StringFilter>;
};

export type RoleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<RoleScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<RoleScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RoleScalarWhereWithAggregatesInput>>>;
  createAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updateAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  value?: InputMaybe<StringWithAggregatesFilter>;
};

export type RoleSumAggregateOutputType = {
  __typename?: 'RoleSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type RoleSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type RoleUncheckedCreateInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserUncheckedCreateNestedManyWithoutRolesInput>;
  value: Scalars['String'];
};

export type RoleUncheckedCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<InputMaybe<RoleWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<RoleCreateOrConnectWithoutUsersInput>>>;
  create?: InputMaybe<Array<InputMaybe<RoleCreateWithoutUsersInput>>>;
};

export type RoleUncheckedCreateWithoutUsersInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type RoleUncheckedUpdateInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUncheckedUpdateManyWithoutRolesInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoleUncheckedUpdateManyInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoleUncheckedUpdateManyWithoutRolesInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoleUncheckedUpdateManyWithoutUsersInput = {
  connect?: InputMaybe<Array<InputMaybe<RoleWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<RoleCreateOrConnectWithoutUsersInput>>>;
  create?: InputMaybe<Array<InputMaybe<RoleCreateWithoutUsersInput>>>;
  delete?: InputMaybe<Array<InputMaybe<RoleWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<RoleScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<RoleWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<RoleWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<RoleUpdateWithWhereUniqueWithoutUsersInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<RoleUpdateManyWithWhereWithoutUsersInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<RoleUpsertWithWhereUniqueWithoutUsersInput>>>;
};

export type RoleUncheckedUpdateWithoutUsersInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoleUpdateInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutRolesInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoleUpdateManyMutationInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoleUpdateManyWithWhereWithoutUsersInput = {
  data: RoleUncheckedUpdateManyWithoutRolesInput;
  where: RoleScalarWhereInput;
};

export type RoleUpdateManyWithoutUsersInput = {
  connect?: InputMaybe<Array<InputMaybe<RoleWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<RoleCreateOrConnectWithoutUsersInput>>>;
  create?: InputMaybe<Array<InputMaybe<RoleCreateWithoutUsersInput>>>;
  delete?: InputMaybe<Array<InputMaybe<RoleWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<RoleScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<RoleWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<RoleWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<RoleUpdateWithWhereUniqueWithoutUsersInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<RoleUpdateManyWithWhereWithoutUsersInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<RoleUpsertWithWhereUniqueWithoutUsersInput>>>;
};

export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
  data: RoleUncheckedUpdateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpdateWithoutUsersInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
  create: RoleUncheckedCreateWithoutUsersInput;
  update: RoleUncheckedUpdateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<RoleWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<RoleWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RoleWhereInput>>>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
  value?: InputMaybe<StringFilter>;
};

export type RoleWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export enum SignUpType {
  Username = 'USERNAME',
  Wechat = 'WECHAT'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type SubmitOnePhraseCreateInput = {
  code: Scalars['String'];
  index?: InputMaybe<Scalars['Int']>;
  /** 类型 */
  type?: InputMaybe<PhraseType>;
  word: Scalars['String'];
};

/**
 * 标签
 * 用于搜索关联词条
 */
export type Tag = {
  __typename?: 'Tag';
  _count: TagCountOutputType;
  createAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phrases: Array<Phrase>;
  updateAt: Scalars['DateTime'];
};


/**
 * 标签
 * 用于搜索关联词条
 */
export type TagPhrasesArgs = {
  cursor?: InputMaybe<PhraseWhereUniqueInput>;
  distinct?: InputMaybe<PhraseScalarFieldEnum>;
  orderBy?: InputMaybe<PhraseOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PhraseWhereInput>;
};

export type TagAvgAggregateOutputType = {
  __typename?: 'TagAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type TagAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TagCountAggregateOutputType = {
  __typename?: 'TagCountAggregateOutputType';
  _all: Scalars['Int'];
  createAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updateAt: Scalars['Int'];
};

export type TagCountOrderByAggregateInput = {
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
};

export type TagCountOutputType = {
  __typename?: 'TagCountOutputType';
  phrases: Scalars['Int'];
};

export type TagCreateInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  phrases?: InputMaybe<PhraseCreateNestedManyWithoutTagsInput>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagCreateManyInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagCreateNestedManyWithoutPhrasesInput = {
  connect?: InputMaybe<Array<InputMaybe<TagWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TagCreateOrConnectWithoutPhrasesInput>>>;
  create?: InputMaybe<Array<InputMaybe<TagCreateWithoutPhrasesInput>>>;
};

export type TagCreateOrConnectWithoutPhrasesInput = {
  create: TagUncheckedCreateWithoutPhrasesInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutPhrasesInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagMaxAggregateOutputType = {
  __typename?: 'TagMaxAggregateOutputType';
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type TagMaxOrderByAggregateInput = {
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
};

export type TagMinAggregateOutputType = {
  __typename?: 'TagMinAggregateOutputType';
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type TagMinOrderByAggregateInput = {
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
};

export type TagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum TagOrderByRelevanceFieldEnum {
  Name = 'name'
}

export type TagOrderByRelevanceInput = {
  fields: TagOrderByRelevanceFieldEnum;
  search: Scalars['String'];
  sort: SortOrder;
};

export type TagOrderByWithAggregationInput = {
  _avg?: InputMaybe<TagAvgOrderByAggregateInput>;
  _count?: InputMaybe<TagCountOrderByAggregateInput>;
  _max?: InputMaybe<TagMaxOrderByAggregateInput>;
  _min?: InputMaybe<TagMinOrderByAggregateInput>;
  _sum?: InputMaybe<TagSumOrderByAggregateInput>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
};

export type TagOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<TagOrderByRelevanceInput>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phrases?: InputMaybe<PhraseOrderByRelationAggregateInput>;
  updateAt?: InputMaybe<SortOrder>;
};

export enum TagScalarFieldEnum {
  CreateAt = 'createAt',
  Id = 'id',
  Name = 'name',
  UpdateAt = 'updateAt'
}

export type TagScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TagScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TagScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TagScalarWhereInput>>>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
};

export type TagScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<TagScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TagScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TagScalarWhereWithAggregatesInput>>>;
  createAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updateAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TagSumAggregateOutputType = {
  __typename?: 'TagSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type TagSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TagUncheckedCreateInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  phrases?: InputMaybe<PhraseUncheckedCreateNestedManyWithoutTagsInput>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagUncheckedCreateNestedManyWithoutPhrasesInput = {
  connect?: InputMaybe<Array<InputMaybe<TagWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TagCreateOrConnectWithoutPhrasesInput>>>;
  create?: InputMaybe<Array<InputMaybe<TagCreateWithoutPhrasesInput>>>;
};

export type TagUncheckedCreateWithoutPhrasesInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagUncheckedUpdateInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUncheckedUpdateManyWithoutTagsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUncheckedUpdateManyInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUncheckedUpdateManyWithoutPhrasesInput = {
  connect?: InputMaybe<Array<InputMaybe<TagWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TagCreateOrConnectWithoutPhrasesInput>>>;
  create?: InputMaybe<Array<InputMaybe<TagCreateWithoutPhrasesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<TagWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<TagScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<TagWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<TagWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<TagUpdateWithWhereUniqueWithoutPhrasesInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<TagUpdateManyWithWhereWithoutPhrasesInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<TagUpsertWithWhereUniqueWithoutPhrasesInput>>>;
};

export type TagUncheckedUpdateManyWithoutTagsInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUncheckedUpdateWithoutPhrasesInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUpdateManyWithoutTagsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutPhrasesInput = {
  data: TagUncheckedUpdateManyWithoutTagsInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutPhrasesInput = {
  connect?: InputMaybe<Array<InputMaybe<TagWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TagCreateOrConnectWithoutPhrasesInput>>>;
  create?: InputMaybe<Array<InputMaybe<TagCreateWithoutPhrasesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<TagWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<TagScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<TagWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<TagWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<TagUpdateWithWhereUniqueWithoutPhrasesInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<TagUpdateManyWithWhereWithoutPhrasesInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<TagUpsertWithWhereUniqueWithoutPhrasesInput>>>;
};

export type TagUpdateWithWhereUniqueWithoutPhrasesInput = {
  data: TagUncheckedUpdateWithoutPhrasesInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutPhrasesInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutPhrasesInput = {
  create: TagUncheckedCreateWithoutPhrasesInput;
  update: TagUncheckedUpdateWithoutPhrasesInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TagWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TagWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TagWhereInput>>>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  phrases?: InputMaybe<PhraseListRelationFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** 用户 */
export type User = {
  __typename?: 'User';
  _count: UserCountOutputType;
  actions: Array<Action>;
  createAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  notices: Array<Notice>;
  phone?: Maybe<Scalars['String']>;
  phrases: Array<Phrase>;
  pullRequests: Array<PullRequest>;
  roles: Array<Role>;
  signUpType: SignUpType;
  status: UserStatus;
  updateAt: Scalars['DateTime'];
  wechat?: Maybe<Wechat>;
  wechatId?: Maybe<Scalars['Int']>;
};


/** 用户 */
export type UserActionsArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  distinct?: InputMaybe<ActionScalarFieldEnum>;
  orderBy?: InputMaybe<ActionOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActionWhereInput>;
};


/** 用户 */
export type UserNoticesArgs = {
  cursor?: InputMaybe<NoticeWhereUniqueInput>;
  distinct?: InputMaybe<NoticeScalarFieldEnum>;
  orderBy?: InputMaybe<NoticeOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NoticeWhereInput>;
};


/** 用户 */
export type UserPhrasesArgs = {
  cursor?: InputMaybe<PhraseWhereUniqueInput>;
  distinct?: InputMaybe<PhraseScalarFieldEnum>;
  orderBy?: InputMaybe<PhraseOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PhraseWhereInput>;
};


/** 用户 */
export type UserPullRequestsArgs = {
  cursor?: InputMaybe<PullRequestWhereUniqueInput>;
  distinct?: InputMaybe<PullRequestScalarFieldEnum>;
  orderBy?: InputMaybe<PullRequestOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PullRequestWhereInput>;
};


/** 用户 */
export type UserRolesArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<RoleScalarFieldEnum>;
  orderBy?: InputMaybe<RoleOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  wechatId?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  wechatId?: InputMaybe<SortOrder>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  createAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  nickname: Scalars['Int'];
  password: Scalars['Int'];
  phone: Scalars['Int'];
  signUpType: Scalars['Int'];
  status: Scalars['Int'];
  updateAt: Scalars['Int'];
  wechatId: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nickname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  signUpType?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  wechatId?: InputMaybe<SortOrder>;
};

export type UserCountOutputType = {
  __typename?: 'UserCountOutputType';
  actions: Scalars['Int'];
  notices: Scalars['Int'];
  phrases: Scalars['Int'];
  pullRequests: Scalars['Int'];
  roles: Scalars['Int'];
};

export type UserCreateInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutUserInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notices?: InputMaybe<NoticeCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrases?: InputMaybe<PhraseCreateNestedManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechat?: InputMaybe<WechatCreateNestedOneWithoutUserInput>;
};

export type UserCreateManyInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechatId?: InputMaybe<Scalars['Int']>;
};

export type UserCreateNestedManyWithoutRolesInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutRolesInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutRolesInput>>>;
};

export type UserCreateNestedOneWithoutActionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutActionsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutActionsInput>;
};

export type UserCreateNestedOneWithoutNoticesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNoticesInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutNoticesInput>;
};

export type UserCreateNestedOneWithoutPhrasesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPhrasesInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutPhrasesInput>;
};

export type UserCreateNestedOneWithoutPullRequestsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPullRequestsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutPullRequestsInput>;
};

export type UserCreateNestedOneWithoutWechatInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWechatInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutWechatInput>;
};

export type UserCreateOrConnectWithoutActionsInput = {
  create: UserUncheckedCreateWithoutActionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNoticesInput = {
  create: UserUncheckedCreateWithoutNoticesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPhrasesInput = {
  create: UserUncheckedCreateWithoutPhrasesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPullRequestsInput = {
  create: UserUncheckedCreateWithoutPullRequestsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRolesInput = {
  create: UserUncheckedCreateWithoutRolesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutWechatInput = {
  create: UserUncheckedCreateWithoutWechatInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutActionsInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notices?: InputMaybe<NoticeCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrases?: InputMaybe<PhraseCreateNestedManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechat?: InputMaybe<WechatCreateNestedOneWithoutUserInput>;
};

export type UserCreateWithoutNoticesInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutUserInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrases?: InputMaybe<PhraseCreateNestedManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechat?: InputMaybe<WechatCreateNestedOneWithoutUserInput>;
};

export type UserCreateWithoutPhrasesInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutUserInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notices?: InputMaybe<NoticeCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  pullRequests?: InputMaybe<PullRequestCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechat?: InputMaybe<WechatCreateNestedOneWithoutUserInput>;
};

export type UserCreateWithoutPullRequestsInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutUserInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notices?: InputMaybe<NoticeCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrases?: InputMaybe<PhraseCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechat?: InputMaybe<WechatCreateNestedOneWithoutUserInput>;
};

export type UserCreateWithoutRolesInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutUserInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notices?: InputMaybe<NoticeCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrases?: InputMaybe<PhraseCreateNestedManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestCreateNestedManyWithoutUserInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechat?: InputMaybe<WechatCreateNestedOneWithoutUserInput>;
};

export type UserCreateWithoutWechatInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutUserInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notices?: InputMaybe<NoticeCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrases?: InputMaybe<PhraseCreateNestedManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  signUpType?: Maybe<SignUpType>;
  status?: Maybe<UserStatus>;
  updateAt?: Maybe<Scalars['DateTime']>;
  wechatId?: Maybe<Scalars['Int']>;
};

export type UserMaxOrderByAggregateInput = {
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nickname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  signUpType?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  wechatId?: InputMaybe<SortOrder>;
};

export type UserMeUpdateInput = {
  newPassword?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password: Scalars['String'];
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  signUpType?: Maybe<SignUpType>;
  status?: Maybe<UserStatus>;
  updateAt?: Maybe<Scalars['DateTime']>;
  wechatId?: Maybe<Scalars['Int']>;
};

export type UserMinOrderByAggregateInput = {
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nickname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  signUpType?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  wechatId?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UserOrderByRelevanceFieldEnum {
  Name = 'name',
  Nickname = 'nickname',
  Password = 'password',
  Phone = 'phone'
}

export type UserOrderByRelevanceInput = {
  fields: UserOrderByRelevanceFieldEnum;
  search: Scalars['String'];
  sort: SortOrder;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nickname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  signUpType?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  wechatId?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  actions?: InputMaybe<ActionOrderByRelationAggregateInput>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nickname?: InputMaybe<SortOrder>;
  notices?: InputMaybe<NoticeOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  phrases?: InputMaybe<PhraseOrderByRelationAggregateInput>;
  pullRequests?: InputMaybe<PullRequestOrderByRelationAggregateInput>;
  roles?: InputMaybe<RoleOrderByRelationAggregateInput>;
  signUpType?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  wechat?: InputMaybe<WechatOrderByWithRelationAndSearchRelevanceInput>;
  wechatId?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreateAt = 'createAt',
  Id = 'id',
  Name = 'name',
  Nickname = 'nickname',
  Password = 'password',
  Phone = 'phone',
  SignUpType = 'signUpType',
  Status = 'status',
  UpdateAt = 'updateAt',
  WechatId = 'wechatId'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  nickname?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  signUpType?: InputMaybe<EnumSignUpTypeFilter>;
  status?: InputMaybe<EnumUserStatusFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  wechatId?: InputMaybe<IntNullableFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  createAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  nickname?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringNullableWithAggregatesFilter>;
  phone?: InputMaybe<StringNullableWithAggregatesFilter>;
  signUpType?: InputMaybe<EnumSignUpTypeWithAggregatesFilter>;
  status?: InputMaybe<EnumUserStatusWithAggregatesFilter>;
  updateAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  wechatId?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type UserSignIn = {
  __typename?: 'UserSignIn';
  token?: Maybe<Scalars['String']>;
};

export type UserSignInInput = {
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserSignUpInput = {
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export enum UserStatus {
  Disable = 'DISABLE',
  Enable = 'ENABLE'
}

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  wechatId?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  wechatId?: InputMaybe<SortOrder>;
};

export type UserUncheckedCreateInput = {
  actions?: InputMaybe<ActionUncheckedCreateNestedManyWithoutUserInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notices?: InputMaybe<NoticeUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrases?: InputMaybe<PhraseUncheckedCreateNestedManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechatId?: InputMaybe<Scalars['Int']>;
};

export type UserUncheckedCreateNestedManyWithoutRolesInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutRolesInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutRolesInput>>>;
};

export type UserUncheckedCreateNestedOneWithoutWechatInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWechatInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutWechatInput>;
};

export type UserUncheckedCreateWithoutActionsInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notices?: InputMaybe<NoticeUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrases?: InputMaybe<PhraseUncheckedCreateNestedManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechatId?: InputMaybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutNoticesInput = {
  actions?: InputMaybe<ActionUncheckedCreateNestedManyWithoutUserInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrases?: InputMaybe<PhraseUncheckedCreateNestedManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechatId?: InputMaybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutPhrasesInput = {
  actions?: InputMaybe<ActionUncheckedCreateNestedManyWithoutUserInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notices?: InputMaybe<NoticeUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  pullRequests?: InputMaybe<PullRequestUncheckedCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechatId?: InputMaybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutPullRequestsInput = {
  actions?: InputMaybe<ActionUncheckedCreateNestedManyWithoutUserInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notices?: InputMaybe<NoticeUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrases?: InputMaybe<PhraseUncheckedCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechatId?: InputMaybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutRolesInput = {
  actions?: InputMaybe<ActionUncheckedCreateNestedManyWithoutUserInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notices?: InputMaybe<NoticeUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrases?: InputMaybe<PhraseUncheckedCreateNestedManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedCreateNestedManyWithoutUserInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechatId?: InputMaybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutWechatInput = {
  actions?: InputMaybe<ActionUncheckedCreateNestedManyWithoutUserInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notices?: InputMaybe<NoticeUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrases?: InputMaybe<PhraseUncheckedCreateNestedManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserUncheckedUpdateInput = {
  actions?: InputMaybe<ActionUncheckedUpdateManyWithoutUserInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notices?: InputMaybe<NoticeUncheckedUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUncheckedUpdateManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechatId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechatId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyWithoutRolesInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutRolesInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutRolesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserUpdateWithWhereUniqueWithoutRolesInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserUpdateManyWithWhereWithoutRolesInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserUpsertWithWhereUniqueWithoutRolesInput>>>;
};

export type UserUncheckedUpdateManyWithoutUsersInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechatId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateOneWithoutWechatInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWechatInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutWechatInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUncheckedUpdateWithoutWechatInput>;
  upsert?: InputMaybe<UserUpsertWithoutWechatInput>;
};

export type UserUncheckedUpdateWithoutActionsInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notices?: InputMaybe<NoticeUncheckedUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUncheckedUpdateManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechatId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutNoticesInput = {
  actions?: InputMaybe<ActionUncheckedUpdateManyWithoutUserInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUncheckedUpdateManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechatId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutPhrasesInput = {
  actions?: InputMaybe<ActionUncheckedUpdateManyWithoutUserInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notices?: InputMaybe<NoticeUncheckedUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechatId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutPullRequestsInput = {
  actions?: InputMaybe<ActionUncheckedUpdateManyWithoutUserInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notices?: InputMaybe<NoticeUncheckedUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUncheckedUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechatId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutRolesInput = {
  actions?: InputMaybe<ActionUncheckedUpdateManyWithoutUserInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notices?: InputMaybe<NoticeUncheckedUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUncheckedUpdateManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedUpdateManyWithoutUserInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechatId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutWechatInput = {
  actions?: InputMaybe<ActionUncheckedUpdateManyWithoutUserInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notices?: InputMaybe<NoticeUncheckedUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUncheckedUpdateManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUncheckedUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutUserInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notices?: InputMaybe<NoticeUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUpdateManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechat?: InputMaybe<WechatUpdateOneWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutRolesInput = {
  data: UserUncheckedUpdateManyWithoutUsersInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutRolesInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutRolesInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutRolesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserUpdateWithWhereUniqueWithoutRolesInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserUpdateManyWithWhereWithoutRolesInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserUpsertWithWhereUniqueWithoutRolesInput>>>;
};

export type UserUpdateOneInput = {
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roleSet?: InputMaybe<Array<InputMaybe<RoleWhereUniqueInput>>>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutActionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutActionsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutActionsInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutActionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutActionsInput>;
};

export type UserUpdateOneRequiredWithoutNoticesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNoticesInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutNoticesInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutNoticesInput>;
  upsert?: InputMaybe<UserUpsertWithoutNoticesInput>;
};

export type UserUpdateOneRequiredWithoutPullRequestsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPullRequestsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutPullRequestsInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutPullRequestsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPullRequestsInput>;
};

export type UserUpdateOneWithoutPhrasesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPhrasesInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutPhrasesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUncheckedUpdateWithoutPhrasesInput>;
  upsert?: InputMaybe<UserUpsertWithoutPhrasesInput>;
};

export type UserUpdateOneWithoutWechatInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWechatInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutWechatInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUncheckedUpdateWithoutWechatInput>;
  upsert?: InputMaybe<UserUpsertWithoutWechatInput>;
};

export type UserUpdateWithWhereUniqueWithoutRolesInput = {
  data: UserUncheckedUpdateWithoutRolesInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutActionsInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notices?: InputMaybe<NoticeUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUpdateManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechat?: InputMaybe<WechatUpdateOneWithoutUserInput>;
};

export type UserUpdateWithoutNoticesInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutUserInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUpdateManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechat?: InputMaybe<WechatUpdateOneWithoutUserInput>;
};

export type UserUpdateWithoutPhrasesInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutUserInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notices?: InputMaybe<NoticeUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pullRequests?: InputMaybe<PullRequestUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechat?: InputMaybe<WechatUpdateOneWithoutUserInput>;
};

export type UserUpdateWithoutPullRequestsInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutUserInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notices?: InputMaybe<NoticeUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechat?: InputMaybe<WechatUpdateOneWithoutUserInput>;
};

export type UserUpdateWithoutRolesInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutUserInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notices?: InputMaybe<NoticeUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUpdateManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUpdateManyWithoutUserInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechat?: InputMaybe<WechatUpdateOneWithoutUserInput>;
};

export type UserUpdateWithoutWechatInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutUserInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notices?: InputMaybe<NoticeUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrases?: InputMaybe<PhraseUpdateManyWithoutUserInput>;
  pullRequests?: InputMaybe<PullRequestUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutRolesInput = {
  create: UserUncheckedCreateWithoutRolesInput;
  update: UserUncheckedUpdateWithoutRolesInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutActionsInput = {
  create: UserUncheckedCreateWithoutActionsInput;
  update: UserUncheckedUpdateWithoutActionsInput;
};

export type UserUpsertWithoutNoticesInput = {
  create: UserUncheckedCreateWithoutNoticesInput;
  update: UserUncheckedUpdateWithoutNoticesInput;
};

export type UserUpsertWithoutPhrasesInput = {
  create: UserUncheckedCreateWithoutPhrasesInput;
  update: UserUncheckedUpdateWithoutPhrasesInput;
};

export type UserUpsertWithoutPullRequestsInput = {
  create: UserUncheckedCreateWithoutPullRequestsInput;
  update: UserUncheckedUpdateWithoutPullRequestsInput;
};

export type UserUpsertWithoutWechatInput = {
  create: UserUncheckedCreateWithoutWechatInput;
  update: UserUncheckedUpdateWithoutWechatInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  actions?: InputMaybe<ActionListRelationFilter>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  nickname?: InputMaybe<StringNullableFilter>;
  notices?: InputMaybe<NoticeListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  phrases?: InputMaybe<PhraseListRelationFilter>;
  pullRequests?: InputMaybe<PullRequestListRelationFilter>;
  roles?: InputMaybe<RoleListRelationFilter>;
  signUpType?: InputMaybe<EnumSignUpTypeFilter>;
  status?: InputMaybe<EnumUserStatusFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  wechat?: InputMaybe<WechatWhereInput>;
  wechatId?: InputMaybe<IntNullableFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  wechatId?: InputMaybe<Scalars['Int']>;
};

/** 微信 */
export type Wechat = {
  __typename?: 'Wechat';
  avatarUrl?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createAt: Scalars['DateTime'];
  gender?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
  nickName?: Maybe<Scalars['String']>;
  openid: Scalars['String'];
  province?: Maybe<Scalars['String']>;
  unionid?: Maybe<Scalars['String']>;
  updateAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type WechatAvgAggregateOutputType = {
  __typename?: 'WechatAvgAggregateOutputType';
  gender?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type WechatAvgOrderByAggregateInput = {
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type WechatCountAggregateOutputType = {
  __typename?: 'WechatCountAggregateOutputType';
  _all: Scalars['Int'];
  avatarUrl: Scalars['Int'];
  city: Scalars['Int'];
  country: Scalars['Int'];
  createAt: Scalars['Int'];
  gender: Scalars['Int'];
  id: Scalars['Int'];
  language: Scalars['Int'];
  nickName: Scalars['Int'];
  openid: Scalars['Int'];
  province: Scalars['Int'];
  unionid: Scalars['Int'];
  updateAt: Scalars['Int'];
};

export type WechatCountOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  nickName?: InputMaybe<SortOrder>;
  openid?: InputMaybe<SortOrder>;
  province?: InputMaybe<SortOrder>;
  unionid?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
};

export type WechatCreateInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  gender?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  openid: Scalars['String'];
  province?: InputMaybe<Scalars['String']>;
  unionid?: InputMaybe<Scalars['String']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutWechatInput>;
};

export type WechatCreateManyInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  gender?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  openid: Scalars['String'];
  province?: InputMaybe<Scalars['String']>;
  unionid?: InputMaybe<Scalars['String']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type WechatCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<WechatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WechatCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<WechatUncheckedCreateWithoutUserInput>;
};

export type WechatCreateOrConnectWithoutUserInput = {
  create: WechatUncheckedCreateWithoutUserInput;
  where: WechatWhereUniqueInput;
};

export type WechatCreateWithoutUserInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  gender?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  openid: Scalars['String'];
  province?: InputMaybe<Scalars['String']>;
  unionid?: InputMaybe<Scalars['String']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type WechatMaxAggregateOutputType = {
  __typename?: 'WechatMaxAggregateOutputType';
  avatarUrl?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  nickName?: Maybe<Scalars['String']>;
  openid?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  unionid?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type WechatMaxOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  nickName?: InputMaybe<SortOrder>;
  openid?: InputMaybe<SortOrder>;
  province?: InputMaybe<SortOrder>;
  unionid?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
};

export type WechatMinAggregateOutputType = {
  __typename?: 'WechatMinAggregateOutputType';
  avatarUrl?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  nickName?: Maybe<Scalars['String']>;
  openid?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  unionid?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type WechatMinOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  nickName?: InputMaybe<SortOrder>;
  openid?: InputMaybe<SortOrder>;
  province?: InputMaybe<SortOrder>;
  unionid?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
};

export enum WechatOrderByRelevanceFieldEnum {
  AvatarUrl = 'avatarUrl',
  City = 'city',
  Country = 'country',
  Language = 'language',
  NickName = 'nickName',
  Openid = 'openid',
  Province = 'province',
  Unionid = 'unionid'
}

export type WechatOrderByRelevanceInput = {
  fields: WechatOrderByRelevanceFieldEnum;
  search: Scalars['String'];
  sort: SortOrder;
};

export type WechatOrderByWithAggregationInput = {
  _avg?: InputMaybe<WechatAvgOrderByAggregateInput>;
  _count?: InputMaybe<WechatCountOrderByAggregateInput>;
  _max?: InputMaybe<WechatMaxOrderByAggregateInput>;
  _min?: InputMaybe<WechatMinOrderByAggregateInput>;
  _sum?: InputMaybe<WechatSumOrderByAggregateInput>;
  avatarUrl?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  nickName?: InputMaybe<SortOrder>;
  openid?: InputMaybe<SortOrder>;
  province?: InputMaybe<SortOrder>;
  unionid?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
};

export type WechatOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<WechatOrderByRelevanceInput>;
  avatarUrl?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  nickName?: InputMaybe<SortOrder>;
  openid?: InputMaybe<SortOrder>;
  province?: InputMaybe<SortOrder>;
  unionid?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
};

export type WechatRelationFilter = {
  is?: InputMaybe<WechatWhereInput>;
  isNot?: InputMaybe<WechatWhereInput>;
};

export enum WechatScalarFieldEnum {
  AvatarUrl = 'avatarUrl',
  City = 'city',
  Country = 'country',
  CreateAt = 'createAt',
  Gender = 'gender',
  Id = 'id',
  Language = 'language',
  NickName = 'nickName',
  Openid = 'openid',
  Province = 'province',
  Unionid = 'unionid',
  UpdateAt = 'updateAt'
}

export type WechatScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<WechatScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<WechatScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<WechatScalarWhereWithAggregatesInput>>>;
  avatarUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  city?: InputMaybe<StringNullableWithAggregatesFilter>;
  country?: InputMaybe<StringNullableWithAggregatesFilter>;
  createAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  gender?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  language?: InputMaybe<StringNullableWithAggregatesFilter>;
  nickName?: InputMaybe<StringNullableWithAggregatesFilter>;
  openid?: InputMaybe<StringWithAggregatesFilter>;
  province?: InputMaybe<StringNullableWithAggregatesFilter>;
  unionid?: InputMaybe<StringNullableWithAggregatesFilter>;
  updateAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type WechatSumAggregateOutputType = {
  __typename?: 'WechatSumAggregateOutputType';
  gender?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type WechatSumOrderByAggregateInput = {
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type WechatUncheckedCreateInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  gender?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  openid: Scalars['String'];
  province?: InputMaybe<Scalars['String']>;
  unionid?: InputMaybe<Scalars['String']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserUncheckedCreateNestedOneWithoutWechatInput>;
};

export type WechatUncheckedCreateWithoutUserInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  gender?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  openid: Scalars['String'];
  province?: InputMaybe<Scalars['String']>;
  unionid?: InputMaybe<Scalars['String']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type WechatUncheckedUpdateInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  openid?: InputMaybe<StringFieldUpdateOperationsInput>;
  province?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  unionid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUncheckedUpdateOneWithoutWechatInput>;
};

export type WechatUncheckedUpdateManyInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  openid?: InputMaybe<StringFieldUpdateOperationsInput>;
  province?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  unionid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WechatUncheckedUpdateWithoutUserInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  openid?: InputMaybe<StringFieldUpdateOperationsInput>;
  province?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  unionid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WechatUpdateInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  openid?: InputMaybe<StringFieldUpdateOperationsInput>;
  province?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  unionid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutWechatInput>;
};

export type WechatUpdateManyMutationInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  openid?: InputMaybe<StringFieldUpdateOperationsInput>;
  province?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  unionid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WechatUpdateOneWithoutUserInput = {
  connect?: InputMaybe<WechatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WechatCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<WechatUncheckedCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<WechatUncheckedUpdateWithoutUserInput>;
  upsert?: InputMaybe<WechatUpsertWithoutUserInput>;
};

export type WechatUpdateWithoutUserInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  openid?: InputMaybe<StringFieldUpdateOperationsInput>;
  province?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  unionid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WechatUpsertWithoutUserInput = {
  create: WechatUncheckedCreateWithoutUserInput;
  update: WechatUncheckedUpdateWithoutUserInput;
};

export type WechatWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<WechatWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<WechatWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<WechatWhereInput>>>;
  avatarUrl?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  createAt?: InputMaybe<DateTimeFilter>;
  gender?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  language?: InputMaybe<StringNullableFilter>;
  nickName?: InputMaybe<StringNullableFilter>;
  openid?: InputMaybe<StringFilter>;
  province?: InputMaybe<StringNullableFilter>;
  unionid?: InputMaybe<StringNullableFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type WechatWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  openid?: InputMaybe<Scalars['String']>;
  unionid?: InputMaybe<Scalars['String']>;
};

export type FindManyPhraseQueryVariables = Exact<{
  where?: InputMaybe<PhraseWhereInput>;
  orderBy?: InputMaybe<Array<InputMaybe<PhraseOrderByWithRelationAndSearchRelevanceInput>> | InputMaybe<PhraseOrderByWithRelationAndSearchRelevanceInput>>;
  cursor?: InputMaybe<PhraseWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type FindManyPhraseQuery = { __typename?: 'Query', findManyPhrase: Array<{ __typename?: 'Phrase', id: number, updateAt: any, word: string, code: string, type: PhraseType, user?: { __typename?: 'User', name?: string | null, nickname?: string | null } | null, _count: { __typename?: 'PhraseCountOutputType', comments: number } }> };

export type FindUserMeQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUserMeQuery = { __typename?: 'Query', findUserMe?: { __typename?: 'User', id: number, name?: string | null, nickname?: string | null, status: UserStatus } | null };

export type SignInMutationVariables = Exact<{
  data: UserSignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'UserSignIn', token?: string | null } | null };

export type SignUpMutationVariables = Exact<{
  data: UserSignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'User', id: number, name?: string | null } | null };


export const FindManyPhraseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindManyPhrase"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PhraseWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PhraseOrderByWithRelationAndSearchRelevanceInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PhraseWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findManyPhrase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"word"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}}]}}]}}]}}]} as unknown as DocumentNode<FindManyPhraseQuery, FindManyPhraseQueryVariables>;
export const FindUserMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindUserMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUserMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<FindUserMeQuery, FindUserMeQueryVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;