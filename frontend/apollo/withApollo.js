import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { withClientState } from "apollo-link-state";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import withApollo from "next-with-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { getMainDefinition } from "apollo-utilities";
import ws from "websocket";
import { GRAPHQL_URL, GRAPHQL_SUBSCRIPTION_URL } from "../configs";

//Create a upload link
const uploadLink = createUploadLink({
  uri: GRAPHQL_URL,
  credentials: "include"
});

//Create a subscription link
const wsLink = new WebSocketLink({
  uri: GRAPHQL_SUBSCRIPTION_URL,
  options: {
    reconnect: true,
    connectionParams: {}
  },
  webSocketImpl: ws.client
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const connectionLink = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  uploadLink
);

const cache = new InMemoryCache();

const defaults = {
  notifications: []
};

const stateLink = withClientState({
  cache,
  defaults
});

const link = ApolloLink.from([stateLink, connectionLink]);

const client = new ApolloClient({
  cache,
  link
});
client.onResetStore(stateLink.writeDefaults);

export default withApollo(({ ctx, headers }) => client);
