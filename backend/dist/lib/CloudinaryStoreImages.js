"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _cloudinary = require("cloudinary");

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var cloudinaryv2 = _cloudinary2.default.v2;

cloudinaryv2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_APIKEY,
  api_secret: process.env.CLOUD_APISECRET,
  enhance_image_tag: true,
  static_image_support: true
});

var storeImages = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(images) {
    var promises;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (images) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", null);

          case 2:
            promises = images.map(function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(image) {
                var _ref3, stream, result;

                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (image) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt("return", Promise.resolve());

                      case 2:
                        _context.next = 4;
                        return image;

                      case 4:
                        _ref3 = _context.sent;
                        stream = _ref3.stream;
                        _context.next = 8;
                        return CloudinaryPipe(stream);

                      case 8:
                        result = _context.sent;
                        return _context.abrupt("return", result.url);

                      case 10:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context2.next = 5;
            return Promise.all(promises);

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function storeImages(_x) {
    return _ref.apply(this, arguments);
  };
}();

var CloudinaryPipe = function CloudinaryPipe(stream) {
  return new Promise(function (resolve, reject) {
    var cloud = cloudinaryv2.uploader.upload_stream({ preset: "helpmates" }, function (error, result) {
      resolve(result);
    });
    stream.pipe(cloud).on("limit", function () {
      console.log("Error on uploading image.");
      reject("Error on uploading image.");
    }).on("finish", function () {
      console.log("End image uploading...");
    });
  });
};

exports.default = storeImages;