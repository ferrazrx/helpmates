module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apollo/withApollo.js":
/*!******************************!*\
  !*** ./apollo/withApollo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link */ "apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-state */ "apollo-link-state");
/* harmony import */ var apollo_link_state__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_state__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-ws */ "apollo-link-ws");
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_ws__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-utilities */ "apollo-utilities");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(apollo_utilities__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! websocket */ "websocket");
/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(websocket__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../configs */ "./configs.js");










 //Create a upload link

var uploadLink = Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_6__["createUploadLink"])({
  uri: _configs__WEBPACK_IMPORTED_MODULE_9__["GRAPHQL_URL"],
  credentials: "include"
}); //Create a subscription link

var wsLink = new apollo_link_ws__WEBPACK_IMPORTED_MODULE_3__["WebSocketLink"]({
  uri: _configs__WEBPACK_IMPORTED_MODULE_9__["GRAPHQL_SUBSCRIPTION_URL"],
  options: {
    reconnect: true,
    connectionParams: {}
  },
  webSocketImpl: websocket__WEBPACK_IMPORTED_MODULE_8___default.a.client
}); // using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent

var connectionLink = Object(apollo_link__WEBPACK_IMPORTED_MODULE_1__["split"])( // split based on operation type
function (_ref) {
  var query = _ref.query;

  var _getMainDefinition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_7__["getMainDefinition"])(query),
      kind = _getMainDefinition.kind,
      operation = _getMainDefinition.operation;

  return kind === "OperationDefinition" && operation === "subscription";
}, wsLink, uploadLink);
var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__["InMemoryCache"]();
var defaults = {
  notifications: []
};
var stateLink = Object(apollo_link_state__WEBPACK_IMPORTED_MODULE_2__["withClientState"])({
  cache: cache,
  defaults: defaults
});
var link = apollo_link__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"].from([stateLink, connectionLink]);
var client = new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  cache: cache,
  link: link
});
client.onResetStore(stateLink.writeDefaults);
/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(function (_ref2) {
  var ctx = _ref2.ctx,
      headers = _ref2.headers;
  return client;
}));

/***/ }),

/***/ "./components/ErrorMessage/index.tsx":
/*!*******************************************!*\
  !*** ./components/ErrorMessage/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/ErrorMessage/style.tsx");
var _jsxFileName = "/usr/app/components/ErrorMessage/index.tsx";



var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_style__WEBPACK_IMPORTED_MODULE_1__["ErrorStyles"], {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Shoot!"), error.message.replace("GraphQL error: ", "")));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_style__WEBPACK_IMPORTED_MODULE_1__["ErrorStyles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Shoot!"), error.message.replace("GraphQL error: ", "")));
};

/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/ErrorMessage/style.tsx":
/*!*******************************************!*\
  !*** ./components/ErrorMessage/style.tsx ***!
  \*******************************************/
/*! exports provided: ErrorStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStyles", function() { return ErrorStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ErrorStyles",
  componentId: "sc-2xjqjy-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);


/***/ }),

/***/ "./components/Layout/index.tsx":
/*!*************************************!*\
  !*** ./components/Layout/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Nav */ "./components/Nav/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/Layout/style.js");
var _jsxFileName = "/usr/app/components/Layout/index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: _style__WEBPACK_IMPORTED_MODULE_3__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["InnerWrapper"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, this.props.children)));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Layout/style.js":
/*!************************************!*\
  !*** ./components/Layout/style.js ***!
  \************************************/
/*! exports provided: default, Wrapper, InnerWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerWrapper", function() { return InnerWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var theme = {
  red: "#FF0000",
  maxWidth: "1000px",
  bs: "0 2px 5px rgba(0,0,0,.05)"
};
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Wrapper",
  componentId: "sc-8f18iq-0"
})(["width:\"100%\";background-color:#fdf9ea;min-height:100%;"]);
var InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__InnerWrapper",
  componentId: "sc-8f18iq-1"
})([""]);


/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/usr/app/components/Meta.js";



var Meta = function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: "/static/img/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "Connect workers and customers all over the world",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: "Service, Work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "author",
    content: "Help Mates",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/js/nprogress.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/bootstrap.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
    integrity: "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
    integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
    integrity: "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
    integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/Modal/index.tsx":
/*!************************************!*\
  !*** ./components/Modal/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Modal */ "@material-ui/core/Modal");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/Modal/style.js");
var _jsxFileName = "/usr/app/components/Modal/index.tsx";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Modal = function Modal(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.opened ? props.opened : false),
      _useState2 = _slicedToArray(_useState, 2),
      openModal = _useState2[0],
      setOpenModal = _useState2[1];

  var handleModal = function handleModal() {
    setOpenModal(!openModal);
  };

  var routeOnClose = function routeOnClose() {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(props.routeOnClose);
  };

  if (openModal) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: props.style,
    onClick: handleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, props.link), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
    open: openModal,
    onBackdropClick: props.routeOnClose ? routeOnClose : handleModal,
    onEscapeKeyDown: props.routeOnClose ? routeOnClose : handleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["ModalContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, props.children(handleModal))));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: props.style,
    onClick: handleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, props.link);
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/Modal/style.js":
/*!***********************************!*\
  !*** ./components/Modal/style.js ***!
  \***********************************/
/*! exports provided: ModalContainer, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainer", function() { return ModalContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ModalContainer",
  componentId: "sc-1s3x26s-0"
})(["background:#fff;width:90%;margin:10% auto;@media (min-width:768px){width:35%;}"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Button",
  componentId: "sc-1s3x26s-1"
})(["cursor:pointer;"]);


/***/ }),

/***/ "./components/MyNotificationsList/queries.js":
/*!***************************************************!*\
  !*** ./components/MyNotificationsList/queries.js ***!
  \***************************************************/
/*! exports provided: NOTIFICATION_SUBSCRIPTION, GET_NOTIFICATIONS, ADD_COMMENT_ANSWER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_SUBSCRIPTION", function() { return NOTIFICATION_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NOTIFICATIONS", function() { return GET_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_ANSWER", function() { return ADD_COMMENT_ANSWER; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation ADD_COMMENT_ANSWER($answer: String!) {\n    addanswer(answer: $answer) {\n      message\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  subscription NOTIFICATION_SUBSCRIPTION {\n    notificationAdded {\n      label\n      message\n      createdAt\n      viewedAt\n      service {\n        id\n        title\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query GET_NOTIFICATIONS {\n    notifications {\n      label\n      message\n      createdAt\n      viewedAt\n      service {\n        id\n        title\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GET_NOTIFICATIONS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
var NOTIFICATION_SUBSCRIPTION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());
var ADD_COMMENT_ANSWER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());


/***/ }),

/***/ "./components/Nav/index.js":
/*!*********************************!*\
  !*** ./components/Nav/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/Nav/style.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../User */ "./components/User/index.js");
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Signin */ "./components/Signin/index.js");
/* harmony import */ var _Signout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Signout */ "./components/Signout/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Modal */ "./components/Modal/index.tsx");
/* harmony import */ var _NotificationBell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../NotificationBell */ "./components/NotificationBell/index.js");
var _jsxFileName = "/usr/app/components/Nav/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
};

var Nav =
/*#__PURE__*/
function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, _getPrototypeOf(Nav).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_5__["NavWrapper"], {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-light container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarTogglerDemo03",
        "aria-controls": "navbarTogglerDemo03",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "w-50",
        src: "static/img/logo.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarTogglerDemo03",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form-inline mr-auto my-2 my-lg-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control mr-sm-2",
        type: "search",
        placeholder: "Search",
        "aria-label": "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-outline-warning my-2 my-sm-0",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Search")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, function (_ref) {
        var loggedUser = _ref.loggedUser;
        return loggedUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "navbar-nav mt-2 mt-lg-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "nav-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotificationBell__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "nav-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "nav-link text-dark",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "Hello, ", loggedUser.fname)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "nav-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: {
            pathname: "/myservices"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "My Account"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "nav-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, function (client) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signout__WEBPACK_IMPORTED_MODULE_8__["default"], {
            client: client,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          });
        }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "navbar-nav mt-2 mt-lg-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "nav-item active",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "nav-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/signup",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, "Register Now!"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "nav-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
          style: "nav-link",
          link: "Login",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, function (closeModal) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          }, function (client) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signin__WEBPACK_IMPORTED_MODULE_7__["default"], {
              client: client,
              closeModal: closeModal,
              className: "d-block mx-auto",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: this
            });
          });
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "nav-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "nav-link",
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, "Contact Us")));
      }))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Nav/style.js":
/*!*********************************!*\
  !*** ./components/Nav/style.js ***!
  \*********************************/
/*! exports provided: NavWrapper, NavInner, NavLogo, ModalContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavWrapper", function() { return NavWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavInner", function() { return NavInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLogo", function() { return NavLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainer", function() { return ModalContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__NavWrapper",
  componentId: "yct6bv-0"
})(["background:#fff;box-shadow:", ";"], function (props) {
  return props.theme.bs;
});
var NavInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__NavInner",
  componentId: "yct6bv-1"
})(["max-width:", ";margin:0 auto;.search{display:inline-block;margin:0 auto;}.navigation{display:inline-block;margin-left:auto;margin-right:0;}"], function (props) {
  return props.theme.maxWidth;
});
var NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "style__NavLogo",
  componentId: "yct6bv-2"
})(["display:inline-block;max-width:80px;padding:5px 0;"]);
var ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ModalContainer",
  componentId: "yct6bv-3"
})(["background:#fff;width:90%;margin:10% auto;@media (min-width:768px){width:35%;}"]);


/***/ }),

/***/ "./components/NotificationBell/index.js":
/*!**********************************************!*\
  !*** ./components/NotificationBell/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotificationBellWithData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries */ "./components/NotificationBell/queries.js");
/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription */ "./components/NotificationBell/subscription.js");
/* harmony import */ var _MyNotificationsList_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyNotificationsList/queries */ "./components/MyNotificationsList/queries.js");
var _jsxFileName = "/usr/app/components/NotificationBell/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function NotificationBellWithData() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _queries__WEBPACK_IMPORTED_MODULE_2__["GET_NOVIEWED_NOTIFICATIONS"],
    ssr: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, function (_ref) {
    var subscribeToMore = _ref.subscribeToMore,
        client = _ref.client,
        result = _objectWithoutProperties(_ref, ["subscribeToMore", "client"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subscription__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      subscribeToMoreNotification: function subscribeToMoreNotification() {
        subscribeToMore({
          document: _queries__WEBPACK_IMPORTED_MODULE_2__["NOTIFICATION_SUBSCRIPTION"],
          updateQuery: function updateQuery(prev, _ref2) {
            var subscriptionData = _ref2.subscriptionData;
            if (!subscriptionData.data) return prev;
            var cachedNotifications = client.cache.readQuery({
              query: _MyNotificationsList_queries__WEBPACK_IMPORTED_MODULE_4__["GET_NOTIFICATIONS"]
            });

            if (cachedNotifications.notifications) {
              client.cache.writeQuery({
                query: _MyNotificationsList_queries__WEBPACK_IMPORTED_MODULE_4__["GET_NOTIFICATIONS"],
                data: {
                  notifications: _toConsumableArray(cachedNotifications.notifications).concat([subscriptionData.data.notificationAdded])
                }
              });
            }

            return Object.assign({}, prev, {
              notifications: [subscriptionData.data.notificationAdded].concat(_toConsumableArray(prev.notifications))
            });
          }
        });
      }
    }, result, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
  });
}

/***/ }),

/***/ "./components/NotificationBell/queries.js":
/*!************************************************!*\
  !*** ./components/NotificationBell/queries.js ***!
  \************************************************/
/*! exports provided: NOTIFICATION_SUBSCRIPTION, GET_NOVIEWED_NOTIFICATIONS, UPDATE_NOTIFICATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_SUBSCRIPTION", function() { return NOTIFICATION_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NOVIEWED_NOTIFICATIONS", function() { return GET_NOVIEWED_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_NOTIFICATION", function() { return UPDATE_NOTIFICATION; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation UPDATE_NOTIFICATION($id: ID!) {\n    markNotificationViewed(id: $id) {\n      id\n      label\n      message\n      createdAt\n      viewedAt\n      service {\n        id\n        title\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  subscription NOTIFICATION_SUBSCRIPTION {\n    notificationAdded {\n      id\n      label\n      message\n      createdAt\n      viewedAt\n      service {\n        id\n        title\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query GET_NOVIEWED_NOTIFICATIONS {\n    notifications(where: { viewedAt: null }) {\n      id\n      label\n      message\n      createdAt\n      viewedAt\n      service {\n        id\n        title\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GET_NOVIEWED_NOTIFICATIONS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
var NOTIFICATION_SUBSCRIPTION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());
var UPDATE_NOTIFICATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());


/***/ }),

/***/ "./components/NotificationBell/style.js":
/*!**********************************************!*\
  !*** ./components/NotificationBell/style.js ***!
  \**********************************************/
/*! exports provided: ActiveBell, Amount, InactiveBell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveBell", function() { return ActiveBell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Amount", function() { return Amount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InactiveBell", function() { return InactiveBell; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ring = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{-webkit-transform:rotateZ(0);}1%{-webkit-transform:rotateZ(30deg);}3%{-webkit-transform:rotateZ(-28deg);}5%{-webkit-transform:rotateZ(34deg);}7%{-webkit-transform:rotateZ(-32deg);}9%{-webkit-transform:rotateZ(30deg);}11%{-webkit-transform:rotateZ(-28deg);}13%{-webkit-transform:rotateZ(26deg);}15%{-webkit-transform:rotateZ(-24deg);}17%{-webkit-transform:rotateZ(22deg);}19%{-webkit-transform:rotateZ(-20deg);}21%{-webkit-transform:rotateZ(18deg);}23%{-webkit-transform:rotateZ(-16deg);}25%{-webkit-transform:rotateZ(14deg);}27%{-webkit-transform:rotateZ(-12deg);}29%{-webkit-transform:rotateZ(10deg);}31%{-webkit-transform:rotateZ(-8deg);}33%{-webkit-transform:rotateZ(6deg);}35%{-webkit-transform:rotateZ(-4deg);}37%{-webkit-transform:rotateZ(2deg);}39%{-webkit-transform:rotateZ(-1deg);}41%{-webkit-transform:rotateZ(1deg);}43%{-webkit-transform:rotateZ(0);}100%{-webkit-transform:rotateZ(0);}"]);
var ActiveBell = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ActiveBell",
  componentId: "sc-3x3zob-0"
})(["background:#eec735;border-radius:50%;width:40px;height:40px;box-shadow:", ";display:flex;justify-content:center;align-items:center;font-size:1.2rem;position:relative;cursor:pointer;i{transform-origin:50% 4px;animation:", " 7s 0.7s ease-in-out infinite;}"], function (props) {
  return props.theme.bs;
}, ring);
var InactiveBell = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__InactiveBell",
  componentId: "sc-3x3zob-1"
})(["background:rgba(238,199,53,0.3);border-radius:50%;width:40px;height:40px;box-shadow:", ";display:flex;justify-content:center;align-items:center;font-size:1.2rem;position:relative;cursor:pointer;"], function (props) {
  return props.theme.bs;
});
var Amount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Amount",
  componentId: "sc-3x3zob-2"
})(["display:flex;justify-content:center;align-items:center;color:#fff;background:#ff0000;border-radius:50%;width:14px;height:14px;position:absolute;top:0;right:0;font-size:0.5rem;"]);


/***/ }),

/***/ "./components/NotificationBell/subscription.js":
/*!*****************************************************!*\
  !*** ./components/NotificationBell/subscription.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotificationBell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/NotificationBell/style.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_timestamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/timestamp */ "./lib/timestamp.tsx");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ErrorMessage */ "./components/ErrorMessage/index.tsx");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queries */ "./components/NotificationBell/queries.js");
var _jsxFileName = "/usr/app/components/NotificationBell/subscription.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var NotificationBell =
/*#__PURE__*/
function (_Component) {
  _inherits(NotificationBell, _Component);

  function NotificationBell() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NotificationBell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NotificationBell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "unsubscribe", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUnmount", function () {
      if (_this.unsubscribe) {
        _this.unsubscribe();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUpdateNotification", function (cache, _ref) {
      var id = _ref.data.markNotificationViewed.id;

      var _cache$readQuery = cache.readQuery({
        query: _queries__WEBPACK_IMPORTED_MODULE_6__["GET_NOVIEWED_NOTIFICATIONS"]
      }),
          notifications = _cache$readQuery.notifications;

      notifications = notifications.filter(function (notification) {
        return notification.id !== id;
      });
      cache.writeQuery({
        query: _queries__WEBPACK_IMPORTED_MODULE_6__["GET_NOVIEWED_NOTIFICATIONS"],
        data: {
          notifications: notifications
        }
      });
    });

    return _this;
  }

  _createClass(NotificationBell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.unsubscribe = this.props.subscribeToMoreNotification();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          error = _this$props.error,
          loading = _this$props.loading,
          data = _this$props.data;
      if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      });
      if (loading || !data || data.notifications.length < 1) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["InactiveBell"], {
        id: "dropdown",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-bell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert alert-warning dropdown-item",
        role: "alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "You don't have new notifications!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/mynotifications",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-comments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), " See all notifications."))));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["ActiveBell"], {
        id: "dropdown",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-bell text-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Amount"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, data.notifications.length)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: _queries__WEBPACK_IMPORTED_MODULE_6__["UPDATE_NOTIFICATION"],
        update: this.handleUpdateNotification,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, function (updateNotification, _ref2) {
        var error = _ref2.error,
            loading = _ref2.loading,
            client = _ref2.client;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dropdown-menu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, data.notifications.map(function (notification, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: {
              pathname: "/service",
              query: {
                id: notification.service.id
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            onClick: function onClick() {
              return updateNotification({
                variables: {
                  id: notification.id
                }
              });
            },
            className: "dropdown-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, notification.label, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
            className: "mr-auto pr-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          }, notification.service.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }, Object(_lib_timestamp__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(notification.createdAt))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            },
            __self: this
          }));
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/mynotifications",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "dropdown-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "far fa-comments",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }), " See all notifications.")));
      }));
    }
  }]);

  return NotificationBell;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/ResetPasswordRequest/index.js":
/*!**************************************************!*\
  !*** ./components/ResetPasswordRequest/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Signin_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Signin/style */ "./components/Signin/style.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queries */ "./components/ResetPasswordRequest/queries.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ErrorMessage */ "./components/ErrorMessage/index.tsx");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./components/ResetPasswordRequest/style.js");

var _jsxFileName = "/usr/app/components/ResetPasswordRequest/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var ResetPassword =
/*#__PURE__*/
function (_Component) {
  _inherits(ResetPassword, _Component);

  function ResetPassword() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ResetPassword);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResetPassword)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      email: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "requestReset",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, requestReset) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return requestReset();

              case 3:
                result = _context.sent;

                if (result.data.requestReset.message) {
                  _this.props.closeModal();

                  _this.props.alert.success(result.data.requestReset.message);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(ResetPassword, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: _queries__WEBPACK_IMPORTED_MODULE_4__["REQUEST_RESET"],
        variables: _objectSpread({}, this.state),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, function (requestReset, _ref2) {
        var loading = _ref2.loading,
            error = _ref2.error;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["Fadein"], {
          className: "bg-white p-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          method: "post",
          onSubmit: function onSubmit(e) {
            return _this2.requestReset(e, requestReset);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Signin_style__WEBPACK_IMPORTED_MODULE_3__["CloseButton"], {
          onClick: _this2.props.closeModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "fas fa-times",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
          className: "text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "Reset Password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "exampleInputEmail1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, "Email address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          onChange: _this2.handleChange,
          type: "email",
          name: "email",
          className: "form-control",
          id: "exampleInputEmail1",
          placeholder: "example@gmail.com",
          vale: _this2.state.email,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          className: "btn btn-primary ".concat(loading && "disabled"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, "Request".concat(loading ? "ing..." : "")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: _this2.props.back,
          className: "btn btn-secondary ml-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }))));
      });
    }
  }]);

  return ResetPassword;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_alert__WEBPACK_IMPORTED_MODULE_6__["withAlert"])(ResetPassword));

/***/ }),

/***/ "./components/ResetPasswordRequest/queries.js":
/*!****************************************************!*\
  !*** ./components/ResetPasswordRequest/queries.js ***!
  \****************************************************/
/*! exports provided: REQUEST_RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_RESET", function() { return REQUEST_RESET; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation REQUEST_RESET($email: String!) {\n    requestReset(email: $email) {\n      message\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var REQUEST_RESET = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());


/***/ }),

/***/ "./components/ResetPasswordRequest/style.js":
/*!**************************************************!*\
  !*** ./components/ResetPasswordRequest/style.js ***!
  \**************************************************/
/*! exports provided: Fadein, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fadein", function() { return Fadein; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var fadein = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]);
var Fadein = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Fadein",
  componentId: "sc-1c66fjv-0"
})(["animation:", " 1s;"], fadein);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Button",
  componentId: "sc-1c66fjv-1"
})(["cursor:pointer;"]);


/***/ }),

/***/ "./components/Signin/index.js":
/*!************************************!*\
  !*** ./components/Signin/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/Signin/style.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queries */ "./components/Signin/queries.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ErrorMessage */ "./components/ErrorMessage/index.tsx");
/* harmony import */ var _User_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../User/queries */ "./components/User/queries.js");
/* harmony import */ var _ResetPasswordRequest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ResetPasswordRequest */ "./components/ResetPasswordRequest/index.js");
/* harmony import */ var _ResetPasswordRequest_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ResetPasswordRequest/style */ "./components/ResetPasswordRequest/style.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/usr/app/components/Signin/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var Signin =
/*#__PURE__*/
function (_Component) {
  _inherits(Signin, _Component);

  function Signin() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Signin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Signin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      email: "",
      password: "",
      resetForm: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleReset", function () {
      _this.setState(function (prevState) {
        return {
          resetForm: !prevState.resetForm
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "signin",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, signin, client) {
        var user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return signin();

              case 3:
                user = _context.sent;

                if (user.data.signin.id) {
                  _this.setState({});

                  _this.props.closeModal();

                  _this.props.alert.success("Welcome back, ".concat(user.data.signin.fname, "!"));
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "routeOnClose", function () {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(_this.props.routeOnClose);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "refetchQueries",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(result) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.props.client.resetStore();

              case 2:
                return _context2.abrupt("return", [{
                  query: _User_queries__WEBPACK_IMPORTED_MODULE_8__["GET_USER_LOGGED"]
                }]);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x4) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(Signin, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.resetForm) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
          mutation: _queries__WEBPACK_IMPORTED_MODULE_6__["SIGNIN"],
          variables: _objectSpread({}, this.state),
          refetchQueries: this.refetchQueries,
          awaitRefetchQueries: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, function (signin, _ref3) {
          var loading = _ref3.loading,
              error = _ref3.error,
              client = _ref3.client;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ResetPasswordRequest_style__WEBPACK_IMPORTED_MODULE_10__["Fadein"], {
            className: "bg-white p-5",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
            method: "post",
            onSubmit: function onSubmit(e) {
              return _this2.signin(e, signin, client);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "form-group position-relative",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_5__["CloseButton"], {
            onClick: _this2.props.routeOnClose ? _this2.routeOnClose : _this2.props.closeModal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
            className: "fas fa-times",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
            className: "text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, "Login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "exampleInputEmail1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, "Email address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            onChange: _this2.handleChange,
            type: "email",
            name: "email",
            className: "form-control",
            id: "exampleInputEmail1",
            placeholder: "example@gmail.com",
            vale: _this2.state.email,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "exampleInputPassword1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }, "Password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            onChange: _this2.handleChange,
            type: "password",
            className: "form-control",
            id: "exampleInputPassword1",
            name: "password",
            placeholder: "Password",
            value: _this2.state.password,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "form-group form-check",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "checkbox",
            className: "form-check-input",
            id: "exampleCheck1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            className: "form-check-label",
            htmlFor: "exampleCheck1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          }, "Check me out")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            type: "submit",
            className: "btn btn-primary ".concat(loading && "disabled"),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          }, "Submit".concat(loading ? "ing..." : ""), " ", loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
            className: "fas fa-cog fa-spin",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            onClick: _this2.props.routeOnClose ? _this2.routeOnClose : _this2.props.closeModal,
            className: "btn btn-secondary ml-1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            },
            __self: this
          }, "Back"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            onClick: _this2.handleReset,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }, "Do you fogot your password? Reset it here!")));
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ResetPasswordRequest__WEBPACK_IMPORTED_MODULE_9__["default"], {
          back: this.handleReset,
          closeModal: this.props.closeModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        });
      }
    }
  }]);

  return Signin;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

_defineProperty(Signin, "propTypes", {
  closeModal: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  routeOnClose: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_alert__WEBPACK_IMPORTED_MODULE_3__["withAlert"])(Signin));

/***/ }),

/***/ "./components/Signin/queries.js":
/*!**************************************!*\
  !*** ./components/Signin/queries.js ***!
  \**************************************/
/*! exports provided: SIGNIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN", function() { return SIGNIN; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation SIGNIN($email: String!, $password: String!) {\n    signin(password: $password, email: $email) {\n      id\n      fname\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var SIGNIN = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());


/***/ }),

/***/ "./components/Signin/style.js":
/*!************************************!*\
  !*** ./components/Signin/style.js ***!
  \************************************/
/*! exports provided: CloseButton, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseButton", function() { return CloseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__CloseButton",
  componentId: "sc-1suwr7n-0"
})(["position:absolute;top:0;right:0;cursor:pointer;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Button",
  componentId: "sc-1suwr7n-1"
})(["cursor:pointer;"]);


/***/ }),

/***/ "./components/Signout/index.js":
/*!*************************************!*\
  !*** ./components/Signout/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queries */ "./components/Signout/queries.js");
/* harmony import */ var _User_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../User/queries */ "./components/User/queries.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./components/Signout/style.js");

var _jsxFileName = "/usr/app/components/Signout/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Signout =
/*#__PURE__*/
function (_Component) {
  _inherits(Signout, _Component);

  function Signout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Signout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Signout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSignout",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(signout, client) {
        var confirmation, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                confirmation = confirm("Are you sure you want to sign out?");

                if (!confirmation) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return signout();

              case 4:
                res = _context.sent;

                _this.props.alert.success(res.data.signout.message);

                next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUnmount", function () {
      _this.props.client.resetStore();
    });

    return _this;
  }

  _createClass(Signout, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: _queries__WEBPACK_IMPORTED_MODULE_5__["SIGNOUT"],
        refetchQueries: [{
          query: _User_queries__WEBPACK_IMPORTED_MODULE_6__["GET_USER_LOGGED"]
        }],
        awaitRefetchQueries: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, function (signout, _ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            client = _ref2.client;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, "Signing out... ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "fas fa-cog fa-spin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }));
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          className: "nav-link",
          onClick: function onClick(e) {
            return _this2.handleSignout(signout, client);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "Sign out");
      });
    }
  }]);

  return Signout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_alert__WEBPACK_IMPORTED_MODULE_3__["withAlert"])(Signout));

/***/ }),

/***/ "./components/Signout/queries.js":
/*!***************************************!*\
  !*** ./components/Signout/queries.js ***!
  \***************************************/
/*! exports provided: SIGNOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNOUT", function() { return SIGNOUT; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation SIGNOUT {\n    signout {\n      message\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var SIGNOUT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());


/***/ }),

/***/ "./components/Signout/style.js":
/*!*************************************!*\
  !*** ./components/Signout/style.js ***!
  \*************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Button",
  componentId: "sc-2mugac-0"
})(["cursor:pointer;"]);


/***/ }),

/***/ "./components/User/index.js":
/*!**********************************!*\
  !*** ./components/User/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries */ "./components/User/queries.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorMessage */ "./components/ErrorMessage/index.tsx");
var _jsxFileName = "/usr/app/components/User/index.js";






var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _queries__WEBPACK_IMPORTED_MODULE_2__["GET_USER_LOGGED"],
    ssr: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        error = _ref.error,
        loading = _ref.loading;
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Loading...", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-cog fa-spin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
    return props.children(data);
  });
};

User.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./components/User/queries.js":
/*!************************************!*\
  !*** ./components/User/queries.js ***!
  \************************************/
/*! exports provided: GET_USER_LOGGED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_LOGGED", function() { return GET_USER_LOGGED; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query GET_USER_LOGGED {\n    loggedUser {\n      id\n      fname\n      lname\n      email\n      address {\n        line1\n        line2\n        zip\n        city\n        province {\n          name\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GET_USER_LOGGED = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());


/***/ }),

/***/ "./configs.js":
/*!********************!*\
  !*** ./configs.js ***!
  \********************/
/*! exports provided: GRAPHQL_URL, GRAPHQL_SUBSCRIPTION_URL, items_per_page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPHQL_URL", function() { return GRAPHQL_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPHQL_SUBSCRIPTION_URL", function() { return GRAPHQL_SUBSCRIPTION_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items_per_page", function() { return items_per_page; });
// const server = 'localhost:3002';
// const GRAPHQL_URL = `http://${server}`;
// const items_per_page = 8;
// const GRAPHQL_SUBSCRIPTION_URL = `ws://${server}`;
var server = 'http://localhost:3003/graphql';
var GRAPHQL_URL = server;
var items_per_page = 8;
var GRAPHQL_SUBSCRIPTION_URL = "ws://localhost:3003/graphql";


/***/ }),

/***/ "./lib/timestamp.tsx":
/*!***************************!*\
  !*** ./lib/timestamp.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timestamp; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function timestamp(time) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(time).fromNow();
}

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.tsx");
/* harmony import */ var _apollo_withApollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../apollo/withApollo */ "./apollo/withApollo.js");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-alert-template-basic */ "react-alert-template-basic");
/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_alert_template_basic__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/usr/app/pages/_app.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









 // optional cofiguration

var options = {
  position: "bottom center",
  timeout: 4000,
  offset: "30px",
  transition: "scale"
};

var NewApp =
/*#__PURE__*/
function (_App) {
  _inherits(NewApp, _App);

  function NewApp() {
    _classCallCheck(this, NewApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(NewApp).apply(this, arguments));
  }

  _createClass(NewApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          apollo = _this$props.apollo,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_alert__WEBPACK_IMPORTED_MODULE_8__["Provider"], _extends({
        template: react_alert_template_basic__WEBPACK_IMPORTED_MODULE_9___default.a
      }, options, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Help Mates")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Meta__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
        client: apollo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {
                  query: null,
                  pathname: null
                };

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                pageProps.query = ctx.query;
                pageProps.pathname = ctx.pathname;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return NewApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_apollo_withApollo__WEBPACK_IMPORTED_MODULE_6__["default"])(NewApp));

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./pages/_app.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core/Modal":
/*!******************************************!*\
  !*** external "@material-ui/core/Modal" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Modal");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-state":
/*!************************************!*\
  !*** external "apollo-link-state" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-state");

/***/ }),

/***/ "apollo-link-ws":
/*!*********************************!*\
  !*** external "apollo-link-ws" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "apollo-utilities":
/*!***********************************!*\
  !*** external "apollo-utilities" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-alert":
/*!******************************!*\
  !*** external "react-alert" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-alert");

/***/ }),

/***/ "react-alert-template-basic":
/*!*********************************************!*\
  !*** external "react-alert-template-basic" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-alert-template-basic");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "websocket":
/*!****************************!*\
  !*** external "websocket" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("websocket");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map