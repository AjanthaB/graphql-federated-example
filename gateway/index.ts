import {ApolloServer} from 'apollo-server';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled
} from 'apollo-server-core';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
  serviceList : [
    {
      name: 'Books',
      url: 'http://localhost:4001'
    },
    {
      name: 'Authors',
      url: 'http://localhost:4002'
    }
  ]
})

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  gateway,
  debug: true,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ]
});

// The `listen` method launches a web server.
server.listen({port: process.env.PORT || 4000}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
