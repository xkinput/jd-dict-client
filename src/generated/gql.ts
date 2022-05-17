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

export type AggregateRole = {
  __typename?: 'AggregateRole';
  _avg?: Maybe<RoleAvgAggregateOutputType>;
  _count?: Maybe<RoleCountAggregateOutputType>;
  _max?: Maybe<RoleMaxAggregateOutputType>;
  _min?: Maybe<RoleMinAggregateOutputType>;
  _sum?: Maybe<RoleSumAggregateOutputType>;
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
};

export type CommentAvgOrderByAggregateInput = {
  commentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
};

export type CommentCountAggregateOutputType = {
  __typename?: 'CommentCountAggregateOutputType';
  _all: Scalars['Int'];
  commentId: Scalars['Int'];
  content: Scalars['Int'];
  createAt: Scalars['Int'];
  id: Scalars['Int'];
  phraseId: Scalars['Int'];
};

export type CommentCountOrderByAggregateInput = {
  commentId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
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
};

export type CommentCreateManyCommentInput = {
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId?: InputMaybe<Scalars['Int']>;
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
};

export type CommentCreateManyPhraseInput = {
  commentId?: InputMaybe<Scalars['Int']>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type CommentCreateManyPhraseInputEnvelope = {
  data: CommentCreateManyPhraseInput;
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

export type CommentCreateWithoutCommentInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutCommentInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  phrase?: InputMaybe<PhraseCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateWithoutCommentsInput = {
  comment?: InputMaybe<CommentCreateNestedOneWithoutCommentsInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  phrase?: InputMaybe<PhraseCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateWithoutPhraseInput = {
  comment?: InputMaybe<CommentCreateNestedOneWithoutCommentsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutCommentInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
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
};

export type CommentMaxOrderByAggregateInput = {
  commentId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
};

export type CommentMinAggregateOutputType = {
  __typename?: 'CommentMinAggregateOutputType';
  commentId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  phraseId?: Maybe<Scalars['Int']>;
};

export type CommentMinOrderByAggregateInput = {
  commentId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
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
  PhraseId = 'phraseId'
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
};

export type CommentSumAggregateOutputType = {
  __typename?: 'CommentSumAggregateOutputType';
  commentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  phraseId?: Maybe<Scalars['Int']>;
};

export type CommentSumOrderByAggregateInput = {
  commentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phraseId?: InputMaybe<SortOrder>;
};

export type CommentUncheckedCreateInput = {
  commentId?: InputMaybe<Scalars['Int']>;
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutCommentInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId?: InputMaybe<Scalars['Int']>;
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

export type CommentUncheckedCreateWithoutCommentInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutCommentInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId?: InputMaybe<Scalars['Int']>;
};

export type CommentUncheckedCreateWithoutCommentsInput = {
  commentId?: InputMaybe<Scalars['Int']>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  phraseId?: InputMaybe<Scalars['Int']>;
};

export type CommentUncheckedCreateWithoutPhraseInput = {
  commentId?: InputMaybe<Scalars['Int']>;
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutCommentInput>;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type CommentUncheckedUpdateInput = {
  commentId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyInput = {
  commentId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
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

export type CommentUncheckedUpdateWithoutCommentInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateWithoutCommentsInput = {
  commentId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  phraseId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateWithoutPhraseInput = {
  commentId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CommentUpdateInput = {
  comment?: InputMaybe<CommentUpdateOneWithoutCommentsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateOneWithoutCommentsInput>;
};

export type CommentUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutCommentInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutPhraseInput = {
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

export type CommentUpdateWithoutCommentInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateOneWithoutCommentsInput>;
};

export type CommentUpdateWithoutCommentsInput = {
  comment?: InputMaybe<CommentUpdateOneWithoutCommentsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateOneWithoutCommentsInput>;
};

export type CommentUpdateWithoutPhraseInput = {
  comment?: InputMaybe<CommentUpdateOneWithoutCommentsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createOneCasbinRule: CasbinRule;
  createOneComment: Comment;
  createOneNotice: Notice;
  createOnePermission: Permission;
  createOnePermissionAction: PermissionAction;
  createOnePhrase: Phrase;
  createOneRole: Role;
  createOneUser: User;
  createOneWechat: Wechat;
  createSubmitOnePhrase?: Maybe<Phrase>;
  deleteManyCasbinRule: BatchPayload;
  deleteManyComment: BatchPayload;
  deleteManyNotice: BatchPayload;
  deleteManyPermission: BatchPayload;
  deleteManyPermissionAction: BatchPayload;
  deleteManyPhrase: BatchPayload;
  deleteManyRole: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteManyWechat: BatchPayload;
  deleteOneCasbinRule?: Maybe<CasbinRule>;
  deleteOneComment?: Maybe<Comment>;
  deleteOneNotice?: Maybe<Notice>;
  deleteOnePermission?: Maybe<Permission>;
  deleteOnePermissionAction?: Maybe<PermissionAction>;
  deleteOnePhrase?: Maybe<Phrase>;
  deleteOneRole?: Maybe<Role>;
  deleteOneUser?: Maybe<User>;
  deleteOneWechat?: Maybe<Wechat>;
  deletePolicy?: Maybe<Scalars['Boolean']>;
  login?: Maybe<UserLogin>;
  signUp?: Maybe<User>;
  updateManyCasbinRule: BatchPayload;
  updateManyComment: BatchPayload;
  updateManyNotice: BatchPayload;
  updateManyPermission: BatchPayload;
  updateManyPermissionAction: BatchPayload;
  updateManyPhrase: BatchPayload;
  updateManyRole: BatchPayload;
  updateManyUser: BatchPayload;
  updateManyWechat: BatchPayload;
  updateOneCasbinRule: CasbinRule;
  updateOneComment: Comment;
  updateOneNotice: Notice;
  updateOnePermission: Permission;
  updateOnePermissionAction: PermissionAction;
  updateOnePhrase: Phrase;
  updateOneRole: Role;
  updateOneUser: User;
  updateOneWechat: Wechat;
  updateUser?: Maybe<User>;
  updateUserMe?: Maybe<User>;
  upsertOneCasbinRule: CasbinRule;
  upsertOneComment: Comment;
  upsertOneNotice: Notice;
  upsertOnePermission: Permission;
  upsertOnePermissionAction: PermissionAction;
  upsertOnePhrase: Phrase;
  upsertOneRole: Role;
  upsertOneUser: User;
  upsertOneWechat: Wechat;
};


export type MutationAddUserPermissionArgs = {
  permissions: Array<Scalars['String']>;
  sub: Scalars['String'];
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


export type MutationCreateOneRoleArgs = {
  data: RoleCreateInput;
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


export type MutationDeleteManyRoleArgs = {
  where?: InputMaybe<RoleWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyWechatArgs = {
  where?: InputMaybe<WechatWhereInput>;
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


export type MutationDeleteOneRoleArgs = {
  where: RoleWhereUniqueInput;
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


export type MutationLoginArgs = {
  data: UserLoginInput;
};


export type MutationSignUpArgs = {
  data: UserSignUpInput;
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


export type MutationUpdateManyRoleArgs = {
  data: RoleUpdateManyMutationInput;
  where?: InputMaybe<RoleWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyWechatArgs = {
  data: WechatUpdateManyMutationInput;
  where?: InputMaybe<WechatWhereInput>;
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


export type MutationUpdateOneRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
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


export type MutationUpsertOneRoleArgs = {
  create: RoleCreateInput;
  update: RoleUpdateInput;
  where: RoleWhereUniqueInput;
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
  user: UserCreateNestedOneWithoutNoticeInput;
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

export type NoticeUncheckedUpdateManyWithoutNoticeInput = {
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
  user?: InputMaybe<UserUpdateOneRequiredWithoutNoticeInput>;
};

export type NoticeUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  publishAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NoticeUpdateManyWithWhereWithoutUserInput = {
  data: NoticeUncheckedUpdateManyWithoutNoticeInput;
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
  /** 编码 */
  code: Scalars['String'];
  /** 评论 */
  comments: Array<Comment>;
  createAt: Scalars['DateTime'];
  id: Scalars['Int'];
  /** 词频 */
  index: Scalars['Int'];
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
export type PhraseCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<CommentScalarFieldEnum>;
  orderBy?: InputMaybe<CommentOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
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
  type?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  word?: InputMaybe<SortOrder>;
};

export type PhraseCountOutputType = {
  __typename?: 'PhraseCountOutputType';
  comments: Scalars['Int'];
};

export type PhraseCreateInput = {
  code: Scalars['String'];
  comments?: InputMaybe<CommentCreateNestedManyWithoutPhraseInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  index: Scalars['Int'];
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutPhraseInput>;
  word: Scalars['String'];
};

export type PhraseCreateManyInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
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
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  word: Scalars['String'];
};

export type PhraseCreateManyUserInputEnvelope = {
  data: PhraseCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PhraseCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PhraseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PhraseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PhraseCreateManyUserInputEnvelope>;
};

export type PhraseCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<PhraseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PhraseCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PhraseUncheckedCreateWithoutCommentsInput>;
};

export type PhraseCreateOrConnectWithoutCommentsInput = {
  create: PhraseUncheckedCreateWithoutCommentsInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseCreateOrConnectWithoutUserInput = {
  create: PhraseUncheckedCreateWithoutUserInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseCreateWithoutCommentsInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  index: Scalars['Int'];
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutPhraseInput>;
  word: Scalars['String'];
};

export type PhraseCreateWithoutUserInput = {
  code: Scalars['String'];
  comments?: InputMaybe<CommentCreateNestedManyWithoutPhraseInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  index: Scalars['Int'];
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
  type?: InputMaybe<SortOrder>;
  updateAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  word?: InputMaybe<SortOrder>;
};

export type PhraseOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<PhraseOrderByRelevanceInput>;
  code?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
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
  type?: InputMaybe<EnumPhraseTypeWithAggregatesFilter>;
  updateAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
  word?: InputMaybe<StringWithAggregatesFilter>;
};

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
  code: Scalars['String'];
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutPhraseInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  word: Scalars['String'];
};

export type PhraseUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<PhraseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<PhraseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<PhraseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<PhraseCreateManyUserInputEnvelope>;
};

export type PhraseUncheckedCreateWithoutCommentsInput = {
  code: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  word: Scalars['String'];
};

export type PhraseUncheckedCreateWithoutUserInput = {
  code: Scalars['String'];
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutPhraseInput>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
  type: PhraseType;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  word: Scalars['String'];
};

export type PhraseUncheckedUpdateInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutPhraseInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
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
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUncheckedUpdateManyWithoutPhraseInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type PhraseUncheckedUpdateWithoutCommentsInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUncheckedUpdateWithoutUserInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutPhraseInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUpdateInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPhraseInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutPhraseInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUpdateManyMutationInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUpdateManyWithWhereWithoutUserInput = {
  data: PhraseUncheckedUpdateManyWithoutPhraseInput;
  where: PhraseScalarWhereInput;
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

export type PhraseUpdateOneWithoutCommentsInput = {
  connect?: InputMaybe<PhraseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PhraseCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PhraseUncheckedCreateWithoutCommentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PhraseUncheckedUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<PhraseUpsertWithoutCommentsInput>;
};

export type PhraseUpdateWithWhereUniqueWithoutUserInput = {
  data: PhraseUncheckedUpdateWithoutUserInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseUpdateWithoutCommentsInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutPhraseInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUpdateWithoutUserInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPhraseInput>;
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPhraseTypeFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  word?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PhraseUpsertWithWhereUniqueWithoutUserInput = {
  create: PhraseUncheckedCreateWithoutUserInput;
  update: PhraseUncheckedUpdateWithoutUserInput;
  where: PhraseWhereUniqueInput;
};

export type PhraseUpsertWithoutCommentsInput = {
  create: PhraseUncheckedCreateWithoutCommentsInput;
  update: PhraseUncheckedUpdateWithoutCommentsInput;
};

export type PhraseWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<PhraseWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<PhraseWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PhraseWhereInput>>>;
  code?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  index?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumPhraseTypeFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<IntFilter>;
  word?: InputMaybe<StringFilter>;
};

export type PhraseWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCasbinRule?: Maybe<AggregateCasbinRule>;
  aggregateComment?: Maybe<AggregateComment>;
  aggregateNotice?: Maybe<AggregateNotice>;
  aggregatePermission?: Maybe<AggregatePermission>;
  aggregatePermissionAction?: Maybe<AggregatePermissionAction>;
  aggregatePhrase?: Maybe<AggregatePhrase>;
  aggregateRole?: Maybe<AggregateRole>;
  aggregateUser?: Maybe<AggregateUser>;
  aggregateWechat?: Maybe<AggregateWechat>;
  findFirstCasbinRule?: Maybe<CasbinRule>;
  findFirstComment?: Maybe<Comment>;
  findFirstNotice?: Maybe<Notice>;
  findFirstPermission?: Maybe<Permission>;
  findFirstPermissionAction?: Maybe<PermissionAction>;
  findFirstPhrase?: Maybe<Phrase>;
  findFirstRole?: Maybe<Role>;
  findFirstUser?: Maybe<User>;
  findFirstWechat?: Maybe<Wechat>;
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
  findManyRole: Array<Role>;
  findManyRoleCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findManyWechat: Array<Wechat>;
  findManyWechatCount: Scalars['Int'];
  findMePermissions?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  findRolePermissions?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  findUniqueCasbinRule?: Maybe<CasbinRule>;
  findUniqueComment?: Maybe<Comment>;
  findUniqueNotice?: Maybe<Notice>;
  findUniquePermission?: Maybe<Permission>;
  findUniquePermissionAction?: Maybe<PermissionAction>;
  findUniquePhrase?: Maybe<Phrase>;
  findUniqueRole?: Maybe<Role>;
  findUniqueUser?: Maybe<User>;
  findUniqueWechat?: Maybe<Wechat>;
  findUserMe?: Maybe<User>;
  findUserPermissions?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  testQuery?: Maybe<Scalars['String']>;
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


export type QueryAggregateRoleArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
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


export type QueryFindFirstRoleArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<RoleScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderByWithRelationAndSearchRelevanceInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
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


export type QueryFindUniqueRoleArgs = {
  where: RoleWhereUniqueInput;
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

/** 用户 */
export type User = {
  __typename?: 'User';
  _count: UserCountOutputType;
  createAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  notice: Array<Notice>;
  phone?: Maybe<Scalars['String']>;
  phrase: Array<Phrase>;
  roles: Array<Role>;
  signUpType: SignUpType;
  status: UserStatus;
  updateAt: Scalars['DateTime'];
  wechat?: Maybe<Wechat>;
  wechatId?: Maybe<Scalars['Int']>;
};


/** 用户 */
export type UserNoticeArgs = {
  cursor?: InputMaybe<NoticeWhereUniqueInput>;
  distinct?: InputMaybe<NoticeScalarFieldEnum>;
  orderBy?: InputMaybe<NoticeOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NoticeWhereInput>;
};


/** 用户 */
export type UserPhraseArgs = {
  cursor?: InputMaybe<PhraseWhereUniqueInput>;
  distinct?: InputMaybe<PhraseScalarFieldEnum>;
  orderBy?: InputMaybe<PhraseOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PhraseWhereInput>;
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
  notice: Scalars['Int'];
  phrase: Scalars['Int'];
  roles: Scalars['Int'];
};

export type UserCreateInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notice?: InputMaybe<NoticeCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrase?: InputMaybe<PhraseCreateNestedManyWithoutUserInput>;
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

export type UserCreateNestedOneWithoutNoticeInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNoticeInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutNoticeInput>;
};

export type UserCreateNestedOneWithoutPhraseInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPhraseInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutPhraseInput>;
};

export type UserCreateNestedOneWithoutWechatInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWechatInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutWechatInput>;
};

export type UserCreateOrConnectWithoutNoticeInput = {
  create: UserUncheckedCreateWithoutNoticeInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPhraseInput = {
  create: UserUncheckedCreateWithoutPhraseInput;
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

export type UserCreateWithoutNoticeInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrase?: InputMaybe<PhraseCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechat?: InputMaybe<WechatCreateNestedOneWithoutUserInput>;
};

export type UserCreateWithoutPhraseInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notice?: InputMaybe<NoticeCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechat?: InputMaybe<WechatCreateNestedOneWithoutUserInput>;
};

export type UserCreateWithoutRolesInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notice?: InputMaybe<NoticeCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrase?: InputMaybe<PhraseCreateNestedManyWithoutUserInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechat?: InputMaybe<WechatCreateNestedOneWithoutUserInput>;
};

export type UserCreateWithoutWechatInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notice?: InputMaybe<NoticeCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrase?: InputMaybe<PhraseCreateNestedManyWithoutUserInput>;
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

export type UserLogin = {
  __typename?: 'UserLogin';
  token?: Maybe<Scalars['String']>;
};

export type UserLoginInput = {
  name: Scalars['String'];
  password: Scalars['String'];
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
  createAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nickname?: InputMaybe<SortOrder>;
  notice?: InputMaybe<NoticeOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  phrase?: InputMaybe<PhraseOrderByRelationAggregateInput>;
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
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notice?: InputMaybe<NoticeUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrase?: InputMaybe<PhraseUncheckedCreateNestedManyWithoutUserInput>;
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

export type UserUncheckedCreateWithoutNoticeInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrase?: InputMaybe<PhraseUncheckedCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechatId?: InputMaybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutPhraseInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notice?: InputMaybe<NoticeUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleUncheckedCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechatId?: InputMaybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutRolesInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notice?: InputMaybe<NoticeUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrase?: InputMaybe<PhraseUncheckedCreateNestedManyWithoutUserInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  wechatId?: InputMaybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutWechatInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notice?: InputMaybe<NoticeUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phrase?: InputMaybe<PhraseUncheckedCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedCreateNestedManyWithoutUsersInput>;
  signUpType?: InputMaybe<SignUpType>;
  status?: InputMaybe<UserStatus>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserUncheckedUpdateInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notice?: InputMaybe<NoticeUncheckedUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUncheckedUpdateManyWithoutUserInput>;
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

export type UserUncheckedUpdateWithoutNoticeInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUncheckedUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechatId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutPhraseInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notice?: InputMaybe<NoticeUncheckedUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roles?: InputMaybe<RoleUncheckedUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechatId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutRolesInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notice?: InputMaybe<NoticeUncheckedUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUncheckedUpdateManyWithoutUserInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechatId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutWechatInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notice?: InputMaybe<NoticeUncheckedUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUncheckedUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUncheckedUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notice?: InputMaybe<NoticeUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateManyWithoutUserInput>;
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

export type UserUpdateOneRequiredWithoutNoticeInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNoticeInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutNoticeInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutNoticeInput>;
  upsert?: InputMaybe<UserUpsertWithoutNoticeInput>;
};

export type UserUpdateOneWithoutPhraseInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPhraseInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutPhraseInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUncheckedUpdateWithoutPhraseInput>;
  upsert?: InputMaybe<UserUpsertWithoutPhraseInput>;
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

export type UserUpdateWithoutNoticeInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateManyWithoutUserInput>;
  roles?: InputMaybe<RoleUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechat?: InputMaybe<WechatUpdateOneWithoutUserInput>;
};

export type UserUpdateWithoutPhraseInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notice?: InputMaybe<NoticeUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roles?: InputMaybe<RoleUpdateManyWithoutUsersInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechat?: InputMaybe<WechatUpdateOneWithoutUserInput>;
};

export type UserUpdateWithoutRolesInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notice?: InputMaybe<NoticeUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateManyWithoutUserInput>;
  signUpType?: InputMaybe<EnumSignUpTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updateAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wechat?: InputMaybe<WechatUpdateOneWithoutUserInput>;
};

export type UserUpdateWithoutWechatInput = {
  createAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notice?: InputMaybe<NoticeUpdateManyWithoutUserInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phrase?: InputMaybe<PhraseUpdateManyWithoutUserInput>;
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

export type UserUpsertWithoutNoticeInput = {
  create: UserUncheckedCreateWithoutNoticeInput;
  update: UserUncheckedUpdateWithoutNoticeInput;
};

export type UserUpsertWithoutPhraseInput = {
  create: UserUncheckedCreateWithoutPhraseInput;
  update: UserUncheckedUpdateWithoutPhraseInput;
};

export type UserUpsertWithoutWechatInput = {
  create: UserUncheckedCreateWithoutWechatInput;
  update: UserUncheckedUpdateWithoutWechatInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  createAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  nickname?: InputMaybe<StringNullableFilter>;
  notice?: InputMaybe<NoticeListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  phrase?: InputMaybe<PhraseListRelationFilter>;
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


export const FindManyPhraseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindManyPhrase"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PhraseWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PhraseOrderByWithRelationAndSearchRelevanceInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PhraseWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findManyPhrase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updateAt"}},{"kind":"Field","name":{"kind":"Name","value":"word"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}}]}}]}}]}}]} as unknown as DocumentNode<FindManyPhraseQuery, FindManyPhraseQueryVariables>;