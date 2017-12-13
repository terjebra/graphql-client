import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import {graphQLEndpoint} from "./config";

const client = new ApolloClient({
  link: new HttpLink({ uri: graphQLEndpoint }),
  cache: new InMemoryCache()
});

export default client;