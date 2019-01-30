import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    links: <T = Array<Link | null>>(args: { where?: LinkWhereInput | null, orderBy?: LinkOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    authTables: <T = Array<AuthTable | null>>(args: { where?: AuthTableWhereInput | null, orderBy?: AuthTableOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    link: <T = Link | null>(args: { where: LinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    authTable: <T = AuthTable | null>(args: { where: AuthTableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    linksConnection: <T = LinkConnection>(args: { where?: LinkWhereInput | null, orderBy?: LinkOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    authTablesConnection: <T = AuthTableConnection>(args: { where?: AuthTableWhereInput | null, orderBy?: AuthTableOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createLink: <T = Link>(args: { data: LinkCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAuthTable: <T = AuthTable>(args: { data: AuthTableCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLink: <T = Link | null>(args: { data: LinkUpdateInput, where: LinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateAuthTable: <T = AuthTable | null>(args: { data: AuthTableUpdateInput, where: AuthTableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLink: <T = Link | null>(args: { where: LinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteAuthTable: <T = AuthTable | null>(args: { where: AuthTableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertLink: <T = Link>(args: { where: LinkWhereUniqueInput, create: LinkCreateInput, update: LinkUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAuthTable: <T = AuthTable>(args: { where: AuthTableWhereUniqueInput, create: AuthTableCreateInput, update: AuthTableUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLinks: <T = BatchPayload>(args: { data: LinkUpdateManyMutationInput, where?: LinkWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAuthTables: <T = BatchPayload>(args: { data: AuthTableUpdateManyMutationInput, where?: AuthTableWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLinks: <T = BatchPayload>(args: { where?: LinkWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAuthTables: <T = BatchPayload>(args: { where?: AuthTableWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    link: <T = LinkSubscriptionPayload | null>(args: { where?: LinkSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    authTable: <T = AuthTableSubscriptionPayload | null>(args: { where?: AuthTableSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Link: (where?: LinkWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  AuthTable: (where?: AuthTableWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAuthTable {
  count: Int!
}

type AggregateLink {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AuthTable implements Node {
  role: String!
  table: String!
  action: String!
  field: String
  id: ID!
}

"""A connection to a list of items."""
type AuthTableConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AuthTableEdge]!
  aggregate: AggregateAuthTable!
}

input AuthTableCreateInput {
  role: String!
  table: String!
  action: String!
  field: String
}

"""An edge in a connection."""
type AuthTableEdge {
  """The item at the end of the edge."""
  node: AuthTable!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AuthTableOrderByInput {
  role_ASC
  role_DESC
  table_ASC
  table_DESC
  action_ASC
  action_DESC
  field_ASC
  field_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AuthTablePreviousValues {
  role: String!
  table: String!
  action: String!
  field: String
  id: ID!
}

type AuthTableSubscriptionPayload {
  mutation: MutationType!
  node: AuthTable
  updatedFields: [String!]
  previousValues: AuthTablePreviousValues
}

input AuthTableSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AuthTableSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AuthTableSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AuthTableSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AuthTableWhereInput
}

input AuthTableUpdateInput {
  role: String
  table: String
  action: String
  field: String
}

input AuthTableUpdateManyMutationInput {
  role: String
  table: String
  action: String
  field: String
}

input AuthTableWhereInput {
  """Logical AND on all given filters."""
  AND: [AuthTableWhereInput!]

  """Logical OR on all given filters."""
  OR: [AuthTableWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AuthTableWhereInput!]
  role: String

  """All values that are not equal to given value."""
  role_not: String

  """All values that are contained in given list."""
  role_in: [String!]

  """All values that are not contained in given list."""
  role_not_in: [String!]

  """All values less than the given value."""
  role_lt: String

  """All values less than or equal the given value."""
  role_lte: String

  """All values greater than the given value."""
  role_gt: String

  """All values greater than or equal the given value."""
  role_gte: String

  """All values containing the given string."""
  role_contains: String

  """All values not containing the given string."""
  role_not_contains: String

  """All values starting with the given string."""
  role_starts_with: String

  """All values not starting with the given string."""
  role_not_starts_with: String

  """All values ending with the given string."""
  role_ends_with: String

  """All values not ending with the given string."""
  role_not_ends_with: String
  table: String

  """All values that are not equal to given value."""
  table_not: String

  """All values that are contained in given list."""
  table_in: [String!]

  """All values that are not contained in given list."""
  table_not_in: [String!]

  """All values less than the given value."""
  table_lt: String

  """All values less than or equal the given value."""
  table_lte: String

  """All values greater than the given value."""
  table_gt: String

  """All values greater than or equal the given value."""
  table_gte: String

  """All values containing the given string."""
  table_contains: String

  """All values not containing the given string."""
  table_not_contains: String

  """All values starting with the given string."""
  table_starts_with: String

  """All values not starting with the given string."""
  table_not_starts_with: String

  """All values ending with the given string."""
  table_ends_with: String

  """All values not ending with the given string."""
  table_not_ends_with: String
  action: String

  """All values that are not equal to given value."""
  action_not: String

  """All values that are contained in given list."""
  action_in: [String!]

  """All values that are not contained in given list."""
  action_not_in: [String!]

  """All values less than the given value."""
  action_lt: String

  """All values less than or equal the given value."""
  action_lte: String

  """All values greater than the given value."""
  action_gt: String

  """All values greater than or equal the given value."""
  action_gte: String

  """All values containing the given string."""
  action_contains: String

  """All values not containing the given string."""
  action_not_contains: String

  """All values starting with the given string."""
  action_starts_with: String

  """All values not starting with the given string."""
  action_not_starts_with: String

  """All values ending with the given string."""
  action_ends_with: String

  """All values not ending with the given string."""
  action_not_ends_with: String
  field: String

  """All values that are not equal to given value."""
  field_not: String

  """All values that are contained in given list."""
  field_in: [String!]

  """All values that are not contained in given list."""
  field_not_in: [String!]

  """All values less than the given value."""
  field_lt: String

  """All values less than or equal the given value."""
  field_lte: String

  """All values greater than the given value."""
  field_gt: String

  """All values greater than or equal the given value."""
  field_gte: String

  """All values containing the given string."""
  field_contains: String

  """All values not containing the given string."""
  field_not_contains: String

  """All values starting with the given string."""
  field_starts_with: String

  """All values not starting with the given string."""
  field_not_starts_with: String

  """All values ending with the given string."""
  field_ends_with: String

  """All values not ending with the given string."""
  field_not_ends_with: String
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
}

input AuthTableWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Link implements Node {
  id: ID!
  text: String
  link: String!
}

"""A connection to a list of items."""
type LinkConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LinkEdge]!
  aggregate: AggregateLink!
}

input LinkCreateInput {
  text: String
  link: String!
}

"""An edge in a connection."""
type LinkEdge {
  """The item at the end of the edge."""
  node: Link!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LinkOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  link_ASC
  link_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LinkPreviousValues {
  id: ID!
  text: String
  link: String!
}

type LinkSubscriptionPayload {
  mutation: MutationType!
  node: Link
  updatedFields: [String!]
  previousValues: LinkPreviousValues
}

input LinkSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LinkSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LinkSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LinkSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LinkWhereInput
}

input LinkUpdateInput {
  text: String
  link: String
}

input LinkUpdateManyMutationInput {
  text: String
  link: String
}

input LinkWhereInput {
  """Logical AND on all given filters."""
  AND: [LinkWhereInput!]

  """Logical OR on all given filters."""
  OR: [LinkWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LinkWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  link: String

  """All values that are not equal to given value."""
  link_not: String

  """All values that are contained in given list."""
  link_in: [String!]

  """All values that are not contained in given list."""
  link_not_in: [String!]

  """All values less than the given value."""
  link_lt: String

  """All values less than or equal the given value."""
  link_lte: String

  """All values greater than the given value."""
  link_gt: String

  """All values greater than or equal the given value."""
  link_gte: String

  """All values containing the given string."""
  link_contains: String

  """All values not containing the given string."""
  link_not_contains: String

  """All values starting with the given string."""
  link_starts_with: String

  """All values not starting with the given string."""
  link_not_starts_with: String

  """All values ending with the given string."""
  link_ends_with: String

  """All values not ending with the given string."""
  link_not_ends_with: String
}

input LinkWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createLink(data: LinkCreateInput!): Link!
  createUser(data: UserCreateInput!): User!
  createAuthTable(data: AuthTableCreateInput!): AuthTable!
  updateLink(data: LinkUpdateInput!, where: LinkWhereUniqueInput!): Link
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateAuthTable(data: AuthTableUpdateInput!, where: AuthTableWhereUniqueInput!): AuthTable
  deleteLink(where: LinkWhereUniqueInput!): Link
  deleteUser(where: UserWhereUniqueInput!): User
  deleteAuthTable(where: AuthTableWhereUniqueInput!): AuthTable
  upsertLink(where: LinkWhereUniqueInput!, create: LinkCreateInput!, update: LinkUpdateInput!): Link!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertAuthTable(where: AuthTableWhereUniqueInput!, create: AuthTableCreateInput!, update: AuthTableUpdateInput!): AuthTable!
  updateManyLinks(data: LinkUpdateManyMutationInput!, where: LinkWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyAuthTables(data: AuthTableUpdateManyMutationInput!, where: AuthTableWhereInput): BatchPayload!
  deleteManyLinks(where: LinkWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyAuthTables(where: AuthTableWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  authTables(where: AuthTableWhereInput, orderBy: AuthTableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AuthTable]!
  link(where: LinkWhereUniqueInput!): Link
  user(where: UserWhereUniqueInput!): User
  authTable(where: AuthTableWhereUniqueInput!): AuthTable
  linksConnection(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LinkConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  authTablesConnection(where: AuthTableWhereInput, orderBy: AuthTableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthTableConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  link(where: LinkSubscriptionWhereInput): LinkSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  authTable(where: AuthTableSubscriptionWhereInput): AuthTableSubscriptionPayload
}

type User implements Node {
  id: ID!
  firstName: String!
  email: String!
  hash: String
  roles: [String!]!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String!
  email: String!
  hash: String
  roles: UserCreaterolesInput
}

input UserCreaterolesInput {
  set: [String!]
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  email_ASC
  email_DESC
  hash_ASC
  hash_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  email: String!
  hash: String
  roles: [String!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  firstName: String
  email: String
  hash: String
  roles: UserUpdaterolesInput
}

input UserUpdateManyMutationInput {
  firstName: String
  email: String
  hash: String
  roles: UserUpdaterolesInput
}

input UserUpdaterolesInput {
  set: [String!]
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  hash: String

  """All values that are not equal to given value."""
  hash_not: String

  """All values that are contained in given list."""
  hash_in: [String!]

  """All values that are not contained in given list."""
  hash_not_in: [String!]

  """All values less than the given value."""
  hash_lt: String

  """All values less than or equal the given value."""
  hash_lte: String

  """All values greater than the given value."""
  hash_gt: String

  """All values greater than or equal the given value."""
  hash_gte: String

  """All values containing the given string."""
  hash_contains: String

  """All values not containing the given string."""
  hash_not_contains: String

  """All values starting with the given string."""
  hash_starts_with: String

  """All values not starting with the given string."""
  hash_not_starts_with: String

  """All values ending with the given string."""
  hash_ends_with: String

  """All values not ending with the given string."""
  hash_not_ends_with: String
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type AuthTableOrderByInput =   'role_ASC' |
  'role_DESC' |
  'table_ASC' |
  'table_DESC' |
  'action_ASC' |
  'action_DESC' |
  'field_ASC' |
  'field_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LinkOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'link_ASC' |
  'link_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'email_ASC' |
  'email_DESC' |
  'hash_ASC' |
  'hash_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface AuthTableCreateInput {
  role: String
  table: String
  action: String
  field?: String | null
}

export interface AuthTableSubscriptionWhereInput {
  AND?: AuthTableSubscriptionWhereInput[] | AuthTableSubscriptionWhereInput | null
  OR?: AuthTableSubscriptionWhereInput[] | AuthTableSubscriptionWhereInput | null
  NOT?: AuthTableSubscriptionWhereInput[] | AuthTableSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: AuthTableWhereInput | null
}

export interface AuthTableUpdateInput {
  role?: String | null
  table?: String | null
  action?: String | null
  field?: String | null
}

export interface AuthTableUpdateManyMutationInput {
  role?: String | null
  table?: String | null
  action?: String | null
  field?: String | null
}

export interface AuthTableWhereInput {
  AND?: AuthTableWhereInput[] | AuthTableWhereInput | null
  OR?: AuthTableWhereInput[] | AuthTableWhereInput | null
  NOT?: AuthTableWhereInput[] | AuthTableWhereInput | null
  role?: String | null
  role_not?: String | null
  role_in?: String[] | String | null
  role_not_in?: String[] | String | null
  role_lt?: String | null
  role_lte?: String | null
  role_gt?: String | null
  role_gte?: String | null
  role_contains?: String | null
  role_not_contains?: String | null
  role_starts_with?: String | null
  role_not_starts_with?: String | null
  role_ends_with?: String | null
  role_not_ends_with?: String | null
  table?: String | null
  table_not?: String | null
  table_in?: String[] | String | null
  table_not_in?: String[] | String | null
  table_lt?: String | null
  table_lte?: String | null
  table_gt?: String | null
  table_gte?: String | null
  table_contains?: String | null
  table_not_contains?: String | null
  table_starts_with?: String | null
  table_not_starts_with?: String | null
  table_ends_with?: String | null
  table_not_ends_with?: String | null
  action?: String | null
  action_not?: String | null
  action_in?: String[] | String | null
  action_not_in?: String[] | String | null
  action_lt?: String | null
  action_lte?: String | null
  action_gt?: String | null
  action_gte?: String | null
  action_contains?: String | null
  action_not_contains?: String | null
  action_starts_with?: String | null
  action_not_starts_with?: String | null
  action_ends_with?: String | null
  action_not_ends_with?: String | null
  field?: String | null
  field_not?: String | null
  field_in?: String[] | String | null
  field_not_in?: String[] | String | null
  field_lt?: String | null
  field_lte?: String | null
  field_gt?: String | null
  field_gte?: String | null
  field_contains?: String | null
  field_not_contains?: String | null
  field_starts_with?: String | null
  field_not_starts_with?: String | null
  field_ends_with?: String | null
  field_not_ends_with?: String | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
}

export interface AuthTableWhereUniqueInput {
  id?: ID_Input | null
}

export interface LinkCreateInput {
  text?: String | null
  link: String
}

export interface LinkSubscriptionWhereInput {
  AND?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput | null
  OR?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput | null
  NOT?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LinkWhereInput | null
}

export interface LinkUpdateInput {
  text?: String | null
  link?: String | null
}

export interface LinkUpdateManyMutationInput {
  text?: String | null
  link?: String | null
}

export interface LinkWhereInput {
  AND?: LinkWhereInput[] | LinkWhereInput | null
  OR?: LinkWhereInput[] | LinkWhereInput | null
  NOT?: LinkWhereInput[] | LinkWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  text?: String | null
  text_not?: String | null
  text_in?: String[] | String | null
  text_not_in?: String[] | String | null
  text_lt?: String | null
  text_lte?: String | null
  text_gt?: String | null
  text_gte?: String | null
  text_contains?: String | null
  text_not_contains?: String | null
  text_starts_with?: String | null
  text_not_starts_with?: String | null
  text_ends_with?: String | null
  text_not_ends_with?: String | null
  link?: String | null
  link_not?: String | null
  link_in?: String[] | String | null
  link_not_in?: String[] | String | null
  link_lt?: String | null
  link_lte?: String | null
  link_gt?: String | null
  link_gte?: String | null
  link_contains?: String | null
  link_not_contains?: String | null
  link_starts_with?: String | null
  link_not_starts_with?: String | null
  link_ends_with?: String | null
  link_not_ends_with?: String | null
}

export interface LinkWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  firstName: String
  email: String
  hash?: String | null
  roles?: UserCreaterolesInput | null
}

export interface UserCreaterolesInput {
  set?: String[] | String | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  firstName?: String | null
  email?: String | null
  hash?: String | null
  roles?: UserUpdaterolesInput | null
}

export interface UserUpdateManyMutationInput {
  firstName?: String | null
  email?: String | null
  hash?: String | null
  roles?: UserUpdaterolesInput | null
}

export interface UserUpdaterolesInput {
  set?: String[] | String | null
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  firstName?: String | null
  firstName_not?: String | null
  firstName_in?: String[] | String | null
  firstName_not_in?: String[] | String | null
  firstName_lt?: String | null
  firstName_lte?: String | null
  firstName_gt?: String | null
  firstName_gte?: String | null
  firstName_contains?: String | null
  firstName_not_contains?: String | null
  firstName_starts_with?: String | null
  firstName_not_starts_with?: String | null
  firstName_ends_with?: String | null
  firstName_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  hash?: String | null
  hash_not?: String | null
  hash_in?: String[] | String | null
  hash_not_in?: String[] | String | null
  hash_lt?: String | null
  hash_lte?: String | null
  hash_gt?: String | null
  hash_gte?: String | null
  hash_contains?: String | null
  hash_not_contains?: String | null
  hash_starts_with?: String | null
  hash_not_starts_with?: String | null
  hash_ends_with?: String | null
  hash_not_ends_with?: String | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateAuthTable {
  count: Int
}

export interface AggregateLink {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface AuthTable extends Node {
  role: String
  table: String
  action: String
  field?: String | null
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface AuthTableConnection {
  pageInfo: PageInfo
  edges: Array<AuthTableEdge | null>
  aggregate: AggregateAuthTable
}

/*
 * An edge in a connection.

 */
export interface AuthTableEdge {
  node: AuthTable
  cursor: String
}

export interface AuthTablePreviousValues {
  role: String
  table: String
  action: String
  field?: String | null
  id: ID_Output
}

export interface AuthTableSubscriptionPayload {
  mutation: MutationType
  node?: AuthTable | null
  updatedFields?: Array<String> | null
  previousValues?: AuthTablePreviousValues | null
}

export interface BatchPayload {
  count: Long
}

export interface Link extends Node {
  id: ID_Output
  text?: String | null
  link: String
}

/*
 * A connection to a list of items.

 */
export interface LinkConnection {
  pageInfo: PageInfo
  edges: Array<LinkEdge | null>
  aggregate: AggregateLink
}

/*
 * An edge in a connection.

 */
export interface LinkEdge {
  node: Link
  cursor: String
}

export interface LinkPreviousValues {
  id: ID_Output
  text?: String | null
  link: String
}

export interface LinkSubscriptionPayload {
  mutation: MutationType
  node?: Link | null
  updatedFields?: Array<String> | null
  previousValues?: LinkPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface User extends Node {
  id: ID_Output
  firstName: String
  email: String
  hash?: String | null
  roles: Array<String>
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  firstName: String
  email: String
  hash?: String | null
  roles: Array<String>
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string