import { GraphQLServer } from "graphql-yoga";
import { PubSub } from "apollo-server";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import minimist from 'minimist';
import Mutation from "./resolvers/Mutation";
import Query from "./resolvers/Query";
import Subscription from "./resolvers/Subscription";
import db from "./db";
import { cookieMiddleware } from "./lib/cookieMiddleware";
import subscriptionAuthentication from "./lib/subscriptionAuthentication";
import jwtVerify from "./lib/jwtVerify";

const pubsub = new PubSub();

dotenv.config();

let port = minimist(process.argv.slice(2))['p']; // Get the port from the command line;

const resolvers = { Mutation, Query, Subscription };

const server = new GraphQLServer({
  typeDefs: "./src/typeDefs.graphql",
  resolvers,
  context: ctx => {
    const { request, response, connection } = ctx;
    if (connection) {
      return { connection: connection.context, pubsub };
    }
    return {
      db,
      request,
      response,
      pubsub
    };
  }
});

//Add Helmet middleware
server.express.use(helmet());
//Logs
server.express.use(morgan('combined'));
//Add Cookie Parser Middleware
server.express.use(cookieParser());
//Get Cookie from the request
server.express.use(cookieMiddleware);

server.start(
  {
    cors: {
      origin: "http://localhost:3003",
      credentials: true
    },
    endpoint: "/graphql",
    port: port || process.env.PORT,
    uploads: {
      maxFiles: 3
    },
    subscriptions: {
      path: '/graphql',
      onConnect: async (connectionParams, webSocket) => {
        const token = subscriptionAuthentication(
          webSocket.upgradeReq.headers.cookie,
          "token"
        );
        const user = await jwtVerify(token);
        if (user) return { user };
        return false;
      }
    }
  },
  ({ port }) => {
    console.log(`Server running on port ${port}`);
  }
);
