"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _graphqlYoga = require("graphql-yoga");

var _apolloServer = require("apollo-server");

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _helmet = require("helmet");

var _helmet2 = _interopRequireDefault(_helmet);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _minimist = require("minimist");

var _minimist2 = _interopRequireDefault(_minimist);

var _Mutation = require("./resolvers/Mutation");

var _Mutation2 = _interopRequireDefault(_Mutation);

var _Query = require("./resolvers/Query");

var _Query2 = _interopRequireDefault(_Query);

var _Subscription = require("./resolvers/Subscription");

var _Subscription2 = _interopRequireDefault(_Subscription);

var _db = require("./db");

var _db2 = _interopRequireDefault(_db);

var _cookieMiddleware = require("./lib/cookieMiddleware");

var _subscriptionAuthentication = require("./lib/subscriptionAuthentication");

var _subscriptionAuthentication2 = _interopRequireDefault(_subscriptionAuthentication);

var _jwtVerify = require("./lib/jwtVerify");

var _jwtVerify2 = _interopRequireDefault(_jwtVerify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pubsub = new _apolloServer.PubSub();

_dotenv2.default.config();

var port = (0, _minimist2.default)(process.argv.slice(2))['p']; // Get the port from the command line;

var resolvers = { Mutation: _Mutation2.default, Query: _Query2.default, Subscription: _Subscription2.default };

var server = new _graphqlYoga.GraphQLServer({
  typeDefs: "./src/typeDefs.graphql",
  resolvers: resolvers,
  context: function context(ctx) {
    var request = ctx.request,
        response = ctx.response,
        connection = ctx.connection;

    if (connection) {
      return { connection: connection.context, pubsub: pubsub };
    }
    return {
      db: _db2.default,
      request: request,
      response: response,
      pubsub: pubsub
    };
  }
});

//Add Helmet middleware
server.express.use((0, _helmet2.default)());
//Logs
server.express.use((0, _morgan2.default)('combined'));
//Add Cookie Parser Middleware
server.express.use((0, _cookieParser2.default)());
//Get Cookie from the request
server.express.use(_cookieMiddleware.cookieMiddleware);

server.start({
  cors: {
    origin: ["http://localhost:3003", "http://172.19.0.2:4000"],
    credentials: true
  },
  endpoint: "/graphql",
  port: port || process.env.PORT,
  uploads: {
    maxFiles: 3
  },
  subscriptions: {
    path: '/graphql',
    onConnect: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(connectionParams, webSocket) {
        var token, user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = (0, _subscriptionAuthentication2.default)(webSocket.upgradeReq.headers.cookie, "token");
                _context.next = 3;
                return (0, _jwtVerify2.default)(token);

              case 3:
                user = _context.sent;

                if (!user) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", { user: user });

              case 6:
                return _context.abrupt("return", false);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function onConnect(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  }
}, function (_ref2) {
  var port = _ref2.port;

  console.log("Server running on port " + port);
});