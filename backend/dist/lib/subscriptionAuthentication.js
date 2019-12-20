"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (cookiesString, key) {
  var cookies = cookiesString.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var part = cookies[i].split("=");
    if (part && part[0].trim() === key) return unescape(part[1].trim());
  }
};