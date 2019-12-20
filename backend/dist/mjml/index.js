"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mjml = require("mjml");

var _mjml2 = _interopRequireDefault(_mjml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(link) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _mjml2.default)("\n    <mjml>\n    <mj-body>\n      <mj-column>\n        <mj-image width=\"300px\" src=\"https://res.cloudinary.com/dpop0qjmn/image/upload/v1545849241/helpmates/logo.svg\" />\n      </mj-column>\n      <mj-column>\n        <mj-button font-family=\"Helvetica\" background-color=\"#f45e43\" color=\"white\" href=\"" + link + "\">\n        Reset Password\n      </mj-button>\n      </mj-column>\n    </mj-body>\n    </mjml>\n  ", { minify: true });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();