import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    authTables: <T = AuthTable[]>(args: { where?: AuthTableWhereInput, orderBy?: AuthTableOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    links: <T = Link[]>(args: { where?: LinkWhereInput, orderBy?: LinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    authTable: <T = AuthTable>(args: { where: AuthTableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    link: <T = Link>(args: { where: LinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    authTablesConnection: <T = AuthTableConnection>(args: { where?: AuthTableWhereInput, orderBy?: AuthTableOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    linksConnection: <T = LinkConnection>(args: { where?: LinkWhereInput, orderBy?: LinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAuthTable: <T = AuthTable>(args: { data: AuthTableCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLink: <T = Link>(args: { data: LinkCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateAuthTable: <T = AuthTable>(args: { data: AuthTableUpdateInput, where: AuthTableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLink: <T = Link>(args: { data: LinkUpdateInput, where: LinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteAuthTable: <T = AuthTable>(args: { where: AuthTableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLink: <T = Link>(args: { where: LinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAuthTable: <T = AuthTable>(args: { where: AuthTableWhereUniqueInput, create: AuthTableCreateInput, update: AuthTableUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLink: <T = Link>(args: { where: LinkWhereUniqueInput, create: LinkCreateInput, update: LinkUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAuthTables: <T = BatchPayload>(args: { data: AuthTableUpdateManyMutationInput, where?: AuthTableWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLinks: <T = BatchPayload>(args: { data: LinkUpdateManyMutationInput, where?: LinkWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAuthTables: <T = BatchPayload>(args: { where?: AuthTableWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLinks: <T = BatchPayload>(args: { where?: LinkWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    authTable: <T = AuthTableSubscriptionPayload>(args: { where?: AuthTableSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    link: <T = LinkSubscriptionPayload>(args: { where?: LinkSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  AuthTable: (where?: AuthTableWhereInput) => Promise<boolean>
  Link: (where?: LinkWhereInput) => Promise<boolean>
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
  text: String
  link: String!
  id: ID!
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
  text_ASC
  text_DESC
  link_ASC
  link_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LinkPreviousValues {
  text: String
  link: String!
  id: ID!
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

input LinkWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createAuthTable(data: AuthTableCreateInput!): AuthTable!
  createLink(data: LinkCreateInput!): Link!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateAuthTable(data: AuthTableUpdateInput!, where: AuthTableWhereUniqueInput!): AuthTable
  updateLink(data: LinkUpdateInput!, where: LinkWhereUniqueInput!): Link
  deleteUser(where: UserWhereUniqueInput!): User
  deleteAuthTable(where: AuthTableWhereUniqueInput!): AuthTable
  deleteLink(where: LinkWhereUniqueInput!): Link
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertAuthTable(where: AuthTableWhereUniqueInput!, create: AuthTableCreateInput!, update: AuthTableUpdateInput!): AuthTable!
  upsertLink(where: LinkWhereUniqueInput!, create: LinkCreateInput!, update: LinkUpdateInput!): Link!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyAuthTables(data: AuthTableUpdateManyMutationInput!, where: AuthTableWhereInput): BatchPayload!
  updateManyLinks(data: LinkUpdateManyMutationInput!, where: LinkWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyAuthTables(where: AuthTableWhereInput): BatchPayload!
  deleteManyLinks(where: LinkWhereInput): BatchPayload!
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
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  authTables(where: AuthTableWhereInput, orderBy: AuthTableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AuthTable]!
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link]!
  user(where: UserWhereUniqueInput!): User
  authTable(where: AuthTableWhereUniqueInput!): AuthTable
  link(where: LinkWhereUniqueInput!): Link
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  authTablesConnection(where: AuthTableWhereInput, orderBy: AuthTableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthTableConnection!
  linksConnection(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LinkConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  authTable(where: AuthTableSubscriptionWhereInput): AuthTableSubscriptionPayload
  link(where: LinkSubscriptionWhereInput): LinkSubscriptionPayload
}

type User implements Node {
  firstName: String!
  surname: String
  email: String!
  hash: String
  roles: [String!]!
  id: ID!
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
  surname: String
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
  firstName_ASC
  firstName_DESC
  surname_ASC
  surname_DESC
  email_ASC
  email_DESC
  hash_ASC
  hash_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  firstName: String!
  surname: String
  email: String!
  hash: String
  roles: [String!]!
  id: ID!
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
  surname: String
  email: String
  hash: String
  roles: UserUpdaterolesInput
}

input UserUpdateManyMutationInput {
  firstName: String
  surname: String
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
  surname: String

  """All values that are not equal to given value."""
  surname_not: String

  """All values that are contained in given list."""
  surname_in: [String!]

  """All values that are not contained in given list."""
  surname_not_in: [String!]

  """All values less than the given value."""
  surname_lt: String

  """All values less than or equal the given value."""
  surname_lte: String

  """All values greater than the given value."""
  surname_gt: String

  """All values greater than or equal the given value."""
  surname_gte: String

  """All values containing the given string."""
  surname_contains: String

  """All values not containing the given string."""
  surname_not_contains: String

  """All values starting with the given string."""
  surname_starts_with: String

  """All values not starting with the given string."""
  surname_not_starts_with: String

  """All values ending with the given string."""
  surname_ends_with: String

  """All values not ending with the given string."""
  surname_not_ends_with: String
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

input UserWhereUniqueInput {
  email: String
  id: ID
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

export type LinkOrderByInput =   'text_ASC' |
  'text_DESC' |
  'link_ASC' |
  'link_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type UserOrderByInput =   'firstName_ASC' |
  'firstName_DESC' |
  'surname_ASC' |
  'surname_DESC' |
  'email_ASC' |
  'email_DESC' |
  'hash_ASC' |
  'hash_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface AuthTableCreateInput {
  role: String
  table: String
  action: String
  field?: String
}

export interface AuthTableSubscriptionWhereInput {
  AND?: AuthTableSubscriptionWhereInput[] | AuthTableSubscriptionWhereInput
  OR?: AuthTableSubscriptionWhereInput[] | AuthTableSubscriptionWhereInput
  NOT?: AuthTableSubscriptionWhereInput[] | AuthTableSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AuthTableWhereInput
}

export interface AuthTableUpdateInput {
  role?: String
  table?: String
  action?: String
  field?: String
}

export interface AuthTableUpdateManyMutationInput {
  role?: String
  table?: String
  action?: String
  field?: String
}

export interface AuthTableWhereInput {
  AND?: AuthTableWhereInput[] | AuthTableWhereInput
  OR?: AuthTableWhereInput[] | AuthTableWhereInput
  NOT?: AuthTableWhereInput[] | AuthTableWhereInput
  role?: String
  role_not?: String
  role_in?: String[] | String
  role_not_in?: String[] | String
  role_lt?: String
  role_lte?: String
  role_gt?: String
  role_gte?: String
  role_contains?: String
  role_not_contains?: String
  role_starts_with?: String
  role_not_starts_with?: String
  role_ends_with?: String
  role_not_ends_with?: String
  table?: String
  table_not?: String
  table_in?: String[] | String
  table_not_in?: String[] | String
  table_lt?: String
  table_lte?: String
  table_gt?: String
  table_gte?: String
  table_contains?: String
  table_not_contains?: String
  table_starts_with?: String
  table_not_starts_with?: String
  table_ends_with?: String
  table_not_ends_with?: String
  action?: String
  action_not?: String
  action_in?: String[] | String
  action_not_in?: String[] | String
  action_lt?: String
  action_lte?: String
  action_gt?: String
  action_gte?: String
  action_contains?: String
  action_not_contains?: String
  action_starts_with?: String
  action_not_starts_with?: String
  action_ends_with?: String
  action_not_ends_with?: String
  field?: String
  field_not?: String
  field_in?: String[] | String
  field_not_in?: String[] | String
  field_lt?: String
  field_lte?: String
  field_gt?: String
  field_gte?: String
  field_contains?: String
  field_not_contains?: String
  field_starts_with?: String
  field_not_starts_with?: String
  field_ends_with?: String
  field_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
}

export interface AuthTableWhereUniqueInput {
  id?: ID_Input
}

export interface LinkCreateInput {
  text?: String
  link: String
}

export interface LinkSubscriptionWhereInput {
  AND?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput
  OR?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput
  NOT?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LinkWhereInput
}

export interface LinkUpdateInput {
  text?: String
  link?: String
}

export interface LinkUpdateManyMutationInput {
  text?: String
  link?: String
}

export interface LinkWhereInput {
  AND?: LinkWhereInput[] | LinkWhereInput
  OR?: LinkWhereInput[] | LinkWhereInput
  NOT?: LinkWhereInput[] | LinkWhereInput
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  link?: String
  link_not?: String
  link_in?: String[] | String
  link_not_in?: String[] | String
  link_lt?: String
  link_lte?: String
  link_gt?: String
  link_gte?: String
  link_contains?: String
  link_not_contains?: String
  link_starts_with?: String
  link_not_starts_with?: String
  link_ends_with?: String
  link_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
}

export interface LinkWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateInput {
  firstName: String
  surname?: String
  email: String
  hash?: String
  roles?: UserCreaterolesInput
}

export interface UserCreaterolesInput {
  set?: String[] | String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdateInput {
  firstName?: String
  surname?: String
  email?: String
  hash?: String
  roles?: UserUpdaterolesInput
}

export interface UserUpdateManyMutationInput {
  firstName?: String
  surname?: String
  email?: String
  hash?: String
  roles?: UserUpdaterolesInput
}

export interface UserUpdaterolesInput {
  set?: String[] | String
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  surname?: String
  surname_not?: String
  surname_in?: String[] | String
  surname_not_in?: String[] | String
  surname_lt?: String
  surname_lte?: String
  surname_gt?: String
  surname_gte?: String
  surname_contains?: String
  surname_not_contains?: String
  surname_starts_with?: String
  surname_not_starts_with?: String
  surname_ends_with?: String
  surname_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  hash?: String
  hash_not?: String
  hash_in?: String[] | String
  hash_not_in?: String[] | String
  hash_lt?: String
  hash_lte?: String
  hash_gt?: String
  hash_gte?: String
  hash_contains?: String
  hash_not_contains?: String
  hash_starts_with?: String
  hash_not_starts_with?: String
  hash_ends_with?: String
  hash_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
}

export interface UserWhereUniqueInput {
  email?: String
  id?: ID_Input
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
  field?: String
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface AuthTableConnection {
  pageInfo: PageInfo
  edges: AuthTableEdge[]
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
  field?: String
  id: ID_Output
}

export interface AuthTableSubscriptionPayload {
  mutation: MutationType
  node?: AuthTable
  updatedFields?: String[]
  previousValues?: AuthTablePreviousValues
}

export interface BatchPayload {
  count: Long
}

export interface Link extends Node {
  text?: String
  link: String
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface LinkConnection {
  pageInfo: PageInfo
  edges: LinkEdge[]
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
  text?: String
  link: String
  id: ID_Output
}

export interface LinkSubscriptionPayload {
  mutation: MutationType
  node?: Link
  updatedFields?: String[]
  previousValues?: LinkPreviousValues
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface User extends Node {
  firstName: String
  surname?: String
  email: String
  hash?: String
  roles: String[]
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
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
  firstName: String
  surname?: String
  email: String
  hash?: String
  roles: String[]
  id: ID_Output
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
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