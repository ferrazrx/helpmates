"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _util = require("util");

var _randombytes = require("randombytes");

var _randombytes2 = _interopRequireDefault(_randombytes);

var _Subscription = require("./Subscription");

var _CloudinaryStoreImages = require("../lib/CloudinaryStoreImages");

var _CloudinaryStoreImages2 = _interopRequireDefault(_CloudinaryStoreImages);

var _mail = require("../mail");

var _mail2 = _interopRequireDefault(_mail);

var _mjml = require("../mjml");

var _mjml2 = _interopRequireDefault(_mjml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var Mutations = {
  createUser: function createUser(parent, args, _ref, info) {
    var _this = this;

    var db = _ref.db;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return db.mutation.createUser({
                data: (0, _extends3.default)({}, args.data)
              }, info);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  createService: function createService(parent, _ref2, _ref3, info) {
    var _ref2$data = _ref2.data,
        images = _ref2$data.images,
        title = _ref2$data.title,
        description = _ref2$data.description,
        maxPayment = _ref2$data.maxPayment,
        category = _ref2$data.category;

    var _this2 = this;

    var db = _ref3.db,
        request = _ref3.request;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var images_array;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (request.userID) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", new Error("You must be logged to create a new Service!"));

            case 2:

              console.log("Start Creating Service");
              //Store images on Cloudinary Storage
              _context2.next = 5;
              return (0, _CloudinaryStoreImages2.default)(images);

            case 5:
              images_array = _context2.sent;
              _context2.next = 8;
              return db.mutation.createService({
                data: {
                  title: title,
                  description: description,
                  maxPayment: maxPayment,
                  category: category,
                  images: { set: images_array },
                  author: { connect: { id: request.userID } }
                }
              }, info);

            case 8:
              return _context2.abrupt("return", _context2.sent);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  updateService: function updateService(parent, _ref4, _ref5, info) {
    var data = _ref4.data,
        id = _ref4.where.id;

    var _this3 = this;

    var db = _ref5.db,
        request = _ref5.request;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var service, images_array;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (request.userID) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", new Error("You must be logged to create a new Service!"));

            case 2:
              _context3.next = 4;
              return db.query.service({ where: { id: id } }, "{author{id}}");

            case 4:
              service = _context3.sent;

              if (!(!service || service.author.id !== request.userID)) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", new Error("You must be the author to edit this post!"));

            case 7:
              console.log("Start Updating Service");
              //Store image on Cloudinary
              _context3.next = 10;
              return (0, _CloudinaryStoreImages2.default)(data.images);

            case 10:
              images_array = _context3.sent;

              //Connect the category and the new images to the data object
              data.category = data.category && { connect: { id: data.category } };
              data.images = data.images && { set: images_array };
              //Rerturn the updated Service
              _context3.next = 15;
              return db.mutation.updateService({
                data: (0, _extends3.default)({}, data),
                where: { id: id }
              }, info);

            case 15:
              return _context3.abrupt("return", _context3.sent);

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  },
  deleteService: function deleteService(parent, _ref6, _ref7, info) {
    var where = _ref6.where;

    var _this4 = this;

    var db = _ref7.db;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return db.mutation.deleteService({ where: { id: where.id } }, info);

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  },
  signup: function signup(parent, _ref8, _ref9, info) {
    var data = _ref8.data;

    var _this5 = this;

    var db = _ref9.db,
        response = _ref9.response;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var user, password, newUser, token;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return db.query.user({ where: { email: data.email } });

            case 2:
              user = _context5.sent;

              if (!user) {
                _context5.next = 7;
                break;
              }

              return _context5.abrupt("return", new Error("Email already in use. Do you have a different one?"));

            case 7:
              _context5.next = 9;
              return _bcryptjs2.default.hash(data.password, 10);

            case 9:
              password = _context5.sent;
              _context5.next = 12;
              return db.mutation.createUser({
                data: (0, _extends3.default)({}, data, { password: password, permissions: { set: ["USER"] } })
              }, info);

            case 12:
              newUser = _context5.sent;


              //Create a token
              token = _jsonwebtoken2.default.sign({
                userID: newUser.id
              }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 60 });

              //Create a cookie with the token

              response.cookie("token", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24
              });
              return _context5.abrupt("return", newUser);

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, _this5);
    }))();
  },
  signin: function signin(parent, _ref10, _ref11, info) {
    var email = _ref10.email,
        password = _ref10.password;

    var _this6 = this;

    var response = _ref11.response,
        db = _ref11.db;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var user, result, token;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return db.query.user({ where: { email: email } });

            case 2:
              user = _context6.sent;

              if (!user) {
                _context6.next = 14;
                break;
              }

              _context6.next = 6;
              return _bcryptjs2.default.compare(password, user.password);

            case 6:
              result = _context6.sent;

              if (result) {
                _context6.next = 9;
                break;
              }

              return _context6.abrupt("return", new Error("Email or password invalid! Try Again!"));

            case 9:

              //Create a token
              token = _jsonwebtoken2.default.sign({
                userID: user.id
              }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 60 });

              //Create a cookie with the token

              response.cookie("token", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24
              });

              return _context6.abrupt("return", user);

            case 14:
              return _context6.abrupt("return", new Error("Email or password invalid! Try Again!"));

            case 15:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, _this6);
    }))();
  },
  signout: function signout(parent, args, _ref12, info) {
    var db = _ref12.db,
        response = _ref12.response;

    //Clear cookie in the response
    response.clearCookie("token");
    //Return successful message
    return { message: "You have been signed out successfully." };
  },
  requestReset: function requestReset(parent, _ref13, _ref14, info) {
    var email = _ref13.email;

    var _this7 = this;

    var db = _ref14.db;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
      var user, randombytes, resetToken, resetTokenExpiry, updateduser, _ref15, html;

      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (email) {
                _context7.next = 2;
                break;
              }

              return _context7.abrupt("return", new Error("Have you provided a valid email?"));

            case 2:
              _context7.next = 4;
              return db.query.user({ where: { email: email } });

            case 4:
              user = _context7.sent;

              if (user) {
                _context7.next = 7;
                break;
              }

              return _context7.abrupt("return", new Error("Have you provided a valid email?"));

            case 7:
              //if user found, set a reset token
              randombytes = (0, _util.promisify)(_randombytes2.default);
              _context7.next = 10;
              return randombytes(20);

            case 10:
              resetToken = _context7.sent.toString("hex");
              resetTokenExpiry = Date.now() + 3600000;
              //save token in the database

              _context7.next = 14;
              return db.mutation.updateUser({
                data: { resetToken: resetToken, resetTokenExpiry: resetTokenExpiry },
                where: { id: user.id }
              });

            case 14:
              updateduser = _context7.sent;
              _context7.next = 17;
              return (0, _mjml2.default)(process.env.FRONTEND_URL + "/resetPassword?resetToken=" + resetToken);

            case 17:
              _ref15 = _context7.sent;
              html = _ref15.html;


              _mail2.default.sendMail({
                from: "noreply@helpmates.com",
                to: user.email,
                subject: "Reset password instructions!",
                html: html
              }, function (err, info) {
                console.log(err);
              });
              return _context7.abrupt("return", { message: "Check your email " + user.email + " for a reset email." });

            case 21:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, _this7);
    }))();
  },
  resetPassword: function resetPassword(parent, _ref16, _ref17, info) {
    var password = _ref16.password,
        confirm = _ref16.confirm,
        resetToken = _ref16.resetToken;

    var _this8 = this;

    var db = _ref17.db,
        response = _ref17.response;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
      var user, newPassword, updatedUser, token;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (!(password !== confirm)) {
                _context8.next = 2;
                break;
              }

              return _context8.abrupt("return", new Error("Password and confirm password don't match."));

            case 2:
              _context8.next = 4;
              return db.query.user({ where: { resetToken: resetToken } });

            case 4:
              user = _context8.sent;

              if (!(!user || Date.now() > user.resetTokenExpiry)) {
                _context8.next = 7;
                break;
              }

              return _context8.abrupt("return", new Error("Sorry, the provided token is incorrect or expired. Please, request a new password reset email."));

            case 7:
              _context8.next = 9;
              return _bcryptjs2.default.hash(password, 10);

            case 9:
              newPassword = _context8.sent;
              _context8.next = 12;
              return db.mutation.updateUser({
                where: { id: user.id },
                data: {
                  password: newPassword,
                  resetToken: null,
                  resetTokenExpiry: null
                }
              });

            case 12:
              updatedUser = _context8.sent;


              //Create a token
              token = _jsonwebtoken2.default.sign({
                userID: user.id
              }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 60 });

              //Create a cookie with the token

              response.cookie("token", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 // 1 day cookie
              });

              return _context8.abrupt("return", updatedUser);

            case 16:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, _this8);
    }))();
  },
  addComment: function addComment(parent, _ref18, _ref19, info) {
    var question = _ref18.question,
        service = _ref18.service;

    var _this9 = this;

    var request = _ref19.request,
        db = _ref19.db,
        pubsub = _ref19.pubsub;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
      var comment, authorService, notification;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (request.userID) {
                _context9.next = 2;
                break;
              }

              return _context9.abrupt("return", new Error("You must logged to add a new comment!"));

            case 2:
              _context9.next = 4;
              return db.mutation.createComment({
                data: {
                  question: question,
                  service: { connect: { id: service } },
                  author: { connect: { id: request.userID } }
                }
              }, info);

            case 4:
              comment = _context9.sent;
              _context9.next = 7;
              return db.query.service({ where: { id: service } }, "{author{id}}");

            case 7:
              authorService = _context9.sent;
              _context9.next = 10;
              return db.mutation.createNotification({
                data: {
                  to: { connect: { id: authorService.author.id } },
                  label: comment.author.fname + " added a comment to your service!",
                  type: "COMMENT",
                  service: { connect: { id: service } },
                  message: question
                }
              }, "{id, to{id}, label, createdAt, message, viewedAt, service{ title, id }}");

            case 10:
              notification = _context9.sent;

              //Dispatch Event NOTIFICATION_ADDED
              pubsub.publish(_Subscription.NOTIFICATION_ADDED, {
                notificationAdded: notification,
                requestID: request.userID
              });
              return _context9.abrupt("return", comment);

            case 13:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, _this9);
    }))();
  },
  markNotificationViewed: function markNotificationViewed(parent, _ref20, _ref21, info) {
    var id = _ref20.id;

    var _this10 = this;

    var db = _ref21.db,
        request = _ref21.request;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
      var date, notification;
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (request.userID) {
                _context10.next = 2;
                break;
              }

              return _context10.abrupt("return", new Error("You must logged to add a new comment!"));

            case 2:
              date = new Date().toISOString();
              _context10.next = 5;
              return db.mutation.updateNotification({
                where: { id: id },
                data: {
                  viewedAt: date
                }
              }, info);

            case 5:
              notification = _context10.sent;
              return _context10.abrupt("return", notification);

            case 7:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, _this10);
    }))();
  },
  addBid: function addBid(parent, _ref22, _ref23, info) {
    var _ref22$data = _ref22.data,
        service = _ref22$data.service,
        payment = _ref22$data.payment,
        possibleDate = _ref22$data.possibleDate;

    var _this11 = this;

    var db = _ref23.db,
        request = _ref23.request,
        pubsub = _ref23.pubsub;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11() {
      var currentService, bid, notification;
      return _regenerator2.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (request.userID) {
                _context11.next = 2;
                break;
              }

              return _context11.abrupt("return", new Error("You must logged to add a new bid!"));

            case 2:
              if (!(possibleDate < Date.now())) {
                _context11.next = 4;
                break;
              }

              return _context11.abrupt("return", new Error("Your date cannot be previous then today!"));

            case 4:
              if (!(payment <= 0)) {
                _context11.next = 6;
                break;
              }

              return _context11.abrupt("return", new Error("Your bid cannot be equal 0, please increase your bid."));

            case 6:
              _context11.next = 8;
              return db.query.service({ where: { id: service } }, "{id, author{id}}");

            case 8:
              currentService = _context11.sent;

              if (currentService) {
                _context11.next = 11;
                break;
              }

              return _context11.abrupt("return", new Error("Invalid Service! Are you sure you are in a real service?"));

            case 11:
              _context11.next = 13;
              return db.mutation.createBid({
                data: {
                  author: { connect: { id: request.userID } },
                  service: { connect: { id: currentService.id } },
                  payment: payment,
                  possibleDate: possibleDate
                }
              }, info);

            case 13:
              bid = _context11.sent;
              _context11.next = 16;
              return db.mutation.createNotification({
                data: {
                  to: { connect: { id: currentService.author.id } },
                  label: request.user.fname + " added a bid to your service!",
                  service: { connect: { id: currentService.id } },
                  message: "Bid: CA$ " + payment.toFixed(2),
                  type: "BID"
                }
              }, "{id, to{id}, label, createdAt, message, viewedAt, service{ title, id }}");

            case 16:
              notification = _context11.sent;


              //Dispatch Event NOTIFICATION_ADDED
              pubsub.publish(_Subscription.NOTIFICATION_ADDED, {
                notificationAdded: notification,
                requestID: request.userID
              });

              return _context11.abrupt("return", bid);

            case 19:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, _this11);
    }))();
  }
};

exports.default = Mutations;