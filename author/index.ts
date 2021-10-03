import {ApolloServer} from 'apollo-server';
import { buildSubgraphSchema } from '@apollo/federation';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled
} from 'apollo-server-core';
import { mainTypeDef, AuthorTypeDef } from './src/typedefs';
import { mainQueryResolver } from './src/resolvers';

const typeDefs = [
  AuthorTypeDef,
  mainTypeDef
];

const resolvers = [
  // BookResolver,
  mainQueryResolver
] as any;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers: mainQueryResolver as any
  }),
  debug: true,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ]
});

// The `listen` method launches a web server.
server.listen({port: process.env.PORT || 4002}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
