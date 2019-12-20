"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _prismaBinding = require("prisma-binding");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Query = {
  // async users(parent, args, { request }, info) {
  //   const users = await cxt.db.query.users();
  //   return users;
  // },
  services: (0, _prismaBinding.forwardTo)("db"),
  categories: (0, _prismaBinding.forwardTo)("db"),
  service: (0, _prismaBinding.forwardTo)("db"),
  servicesConnection: (0, _prismaBinding.forwardTo)("db"),
  myServices: function myServices(parent, _ref, _ref2, info) {
    var orderBy = _ref.orderBy;

    var _this = this;

    var request = _ref2.request,
        db = _ref2.db;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var services;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (request.userID) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", new Error("You must be logged to see your services list."));

            case 2:
              _context.next = 4;
              return db.query.services({
                where: { author: { id: request.userID } },
                orderBy: orderBy
              }, info);

            case 4:
              services = _context.sent;
              return _context.abrupt("return", services);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  provinces: function provinces(parent, args, _ref3, info) {
    var _this2 = this;

    var request = _ref3.request,
        db = _ref3.db;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return db.query.provinces(info);

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  loggedUser: function loggedUser(parent, args, _ref4, info) {
    var _this3 = this;

    var request = _ref4.request,
        db = _ref4.db;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var user;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!request.userID) {
                _context3.next = 7;
                break;
              }

              _context3.next = 3;
              return db.query.user({ where: { id: request.userID } }, info);

            case 3:
              user = _context3.sent;
              return _context3.abrupt("return", user);

            case 7:
              return _context3.abrupt("return", null);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  },

  canEditPost: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(parent, _ref6, _ref7, info) {
      var id = _ref6.where.id;
      var request = _ref7.request,
          db = _ref7.db;
      var service;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (request.userID) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return", false);

            case 2:
              _context4.next = 4;
              return db.query.service({ where: { id: id } }, "{author{id}}");

            case 4:
              service = _context4.sent;

              if (service) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt("return", false);

            case 7:
              if (!(request.userID !== service.author.id)) {
                _context4.next = 9;
                break;
              }

              return _context4.abrupt("return", false);

            case 9:
              return _context4.abrupt("return", true);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function canEditPost(_x, _x2, _x3, _x4) {
      return _ref5.apply(this, arguments);
    }

    return canEditPost;
  }(),
  notifications: function notifications(parent, _ref8, _ref9, info) {
    var where = _ref8.where;

    var _this4 = this;

    var request = _ref9.request,
        db = _ref9.db;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var notifications;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (request.userID) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return", new Error("You must be logged to access your notifications."));

            case 2:
              notifications = null;

              if (!where) {
                _context5.next = 9;
                break;
              }

              _context5.next = 6;
              return db.query.notifications({
                where: {
                  AND: { to: { id: request.userID }, viewedAt: where.viewedAt }
                },
                orderBy: "createdAt_DESC"
              }, info);

            case 6:
              notifications = _context5.sent;
              _context5.next = 12;
              break;

            case 9:
              _context5.next = 11;
              return db.query.notifications({
                where: { to: { id: request.userID } },
                orderBy: "createdAt_DESC"
              }, info);

            case 11:
              notifications = _context5.sent;

            case 12:
              console.log(notifications);
              return _context5.abrupt("return", notifications);

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, _this4);
    }))();
  }
};

exports.default = Query;