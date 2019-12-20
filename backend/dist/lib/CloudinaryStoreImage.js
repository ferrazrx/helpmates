'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var cloudinaryv2 = _cloudinary2.default.v2;
var storeImage = function storeImage(stream) {
    cloudinaryv2.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_APIKEY,
        api_secret: process.env.CLOUD_APISECRET,
        enhance_image_tag: true,
        static_image_support: true
    });

    var cloud = cloudinaryv2.uploader.upload_stream({ tags: "basic_sample" }, function (error, result) {
        console.log(result, error);
    });

    return new Promise(function (resolve, reject) {
        stream.pipe(cloud).on('limit', function () {
            console.log('error');
            reject("File is too big.");
        }).on("finish", function () {
            console.log('End of process');
            resolve(cloud);
        });
    });
};

exports.default = storeImage;