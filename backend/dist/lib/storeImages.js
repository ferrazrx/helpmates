'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeImage = function storeImage(stream, filename) {
    return new Promise(function (resolve, reject) {
        stream.pipe(_fs2.default.createWriteStream(filename)).on('error', function () {
            console.log('error');
            reject("File is too big.");
        }).on("finish", function () {
            console.log('End of process');
            resolve();
        });
    });
};

exports.default = storeImage;