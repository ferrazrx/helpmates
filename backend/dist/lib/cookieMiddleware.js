"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cookieMiddleware = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jwtVerify = require("./jwtVerify");

var _jwtVerify2 = _interopRequireDefault(_jwtVerify);

var _db = require("../db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookieMiddleware = exports.cookieMiddleware = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var token, result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.cookies.token;

            if (!token) {
              _context.next = 16;
              break;
            }

            _context.next = 4;
            return (0, _jwtVerify2.default)(token);

          case 4:
            result = _context.sent;

            if (!result) {
              _context.next = 13;
              break;
            }

            _context.next = 8;
            return _db2.default.query.user({ where: { id: result } });

          case 8:
            req.user = _context.sent;

            req.userID = result;
            next();
            _context.next = 14;
            break;

          case 13:
            next();

          case 14:
            _context.next = 17;
            break;

          case 16:
            next();

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function cookieMiddleware(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();