"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prismaBinding = require("prisma-binding");

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file connects with the prisma remote database
_dotenv2.default.config();

var prisma = new _prismaBinding.Prisma({
  typeDefs: "dist/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

exports.default = prisma;