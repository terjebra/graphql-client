import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { graphQLEndpoint, wsEndpoint } from "./config";

const wsLink = new WebSocketLink({
  uri: wsEndpoint,
  options: {
    reconnect: true
  }
});

const httpLink = new HttpLink({
  uri: graphQLEndpoint
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

export default client;
