import { GraphQLResolveInfo } from 'graphql';
import type { DeepPartial } from 'utility-types';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Pokemon = {
  __typename?: 'Pokemon';
  base_experience: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  species: Species;
  url: Scalars['String']['output'];
  weight: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  pokemon: Array<Pokemon>;
  pokemon_by_name?: Maybe<Pokemon>;
  pokemon_by_pk?: Maybe<Pokemon>;
};


export type Querypokemon_by_nameArgs = {
  name: Scalars['String']['input'];
};


export type Querypokemon_by_pkArgs = {
  id: Scalars['ID']['input'];
};

export type Species = {
  __typename?: 'Species';
  name: Scalars['String']['output'];
  speciesDetails: SpeciesDetails;
  url: Scalars['String']['output'];
};

export type SpeciesDetails = {
  __typename?: 'SpeciesDetails';
  is_legendary: Scalars['Boolean']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Pokemon: ResolverTypeWrapper<DeepPartial<Pokemon>>;
  Int: ResolverTypeWrapper<DeepPartial<Scalars['Int']['output']>>;
  ID: ResolverTypeWrapper<DeepPartial<Scalars['ID']['output']>>;
  String: ResolverTypeWrapper<DeepPartial<Scalars['String']['output']>>;
  Query: ResolverTypeWrapper<{}>;
  Species: ResolverTypeWrapper<DeepPartial<Species>>;
  SpeciesDetails: ResolverTypeWrapper<DeepPartial<SpeciesDetails>>;
  Boolean: ResolverTypeWrapper<DeepPartial<Scalars['Boolean']['output']>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Pokemon: DeepPartial<Pokemon>;
  Int: DeepPartial<Scalars['Int']['output']>;
  ID: DeepPartial<Scalars['ID']['output']>;
  String: DeepPartial<Scalars['String']['output']>;
  Query: {};
  Species: DeepPartial<Species>;
  SpeciesDetails: DeepPartial<SpeciesDetails>;
  Boolean: DeepPartial<Scalars['Boolean']['output']>;
};

export type PokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pokemon'] = ResolversParentTypes['Pokemon']> = {
  base_experience?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['Species'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  pokemon?: Resolver<Array<ResolversTypes['Pokemon']>, ParentType, ContextType>;
  pokemon_by_name?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, RequireFields<Querypokemon_by_nameArgs, 'name'>>;
  pokemon_by_pk?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, RequireFields<Querypokemon_by_pkArgs, 'id'>>;
};

export type SpeciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Species'] = ResolversParentTypes['Species']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  speciesDetails?: Resolver<ResolversTypes['SpeciesDetails'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpeciesDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpeciesDetails'] = ResolversParentTypes['SpeciesDetails']> = {
  is_legendary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Pokemon?: PokemonResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Species?: SpeciesResolvers<ContextType>;
  SpeciesDetails?: SpeciesDetailsResolvers<ContextType>;
};

