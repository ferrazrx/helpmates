// const server = 'localhost:3002';
// const GRAPHQL_URL = `http://${server}`;
// const items_per_page = 8;
// const GRAPHQL_SUBSCRIPTION_URL = `ws://${server}`;

const server = 'http://localhost:3003/graphql';
const GRAPHQL_URL = server;
const items_per_page = 8;
const GRAPHQL_SUBSCRIPTION_URL = `ws://localhost:3003/graphql`;

export { GRAPHQL_URL, GRAPHQL_SUBSCRIPTION_URL, items_per_page };
