"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOTIFICATION_ADDED = exports.default = undefined;

var _apolloServer = require("apollo-server");

var NOTIFICATION_ADDED = "NOTIFICATION_ADDED";


var Subscription = {
  notificationAdded: {
    subscribe: (0, _apolloServer.withFilter)(function (rootValue, args, _ref, info) {
      var pubsub = _ref.pubsub;

      return pubsub.asyncIterator([NOTIFICATION_ADDED]);
    }, function (payload, variables, _ref2, info) {
      var connection = _ref2.connection;

      return connection.user === payload.notificationAdded.to.id;
    })
  }
};

exports.default = Subscription;
exports.NOTIFICATION_ADDED = NOTIFICATION_ADDED;