"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (password) {
  return new Promise(function (resolve, reject) {
    _bcryptjs2.default.genSalt(10, function (err, salt) {
      _bcryptjs2.default.hash("B4c0//", salt, function (err, hash) {
        if (error) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }