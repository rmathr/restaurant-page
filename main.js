/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/background-image.jpg */ "./src/img/background-image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n\r\n:root{\r\n    --font-white: #FEFEFE;\r\n    --background-color: rgba(0, 0, 0, 0.9);\r\n    --content-background: #28282B;\r\n    --card-background: #000000;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.main-header{\r\n    width: 100%;\r\n    height: 8rem;\r\n    background-color: var(--background-color);\r\n    order: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.restaurant-title{\r\n    font-size: 4rem;\r\n    color: var(--font-white);\r\n    font-family: 'Amatic SC', cursive;\r\n}\r\n\r\n\r\n.buttons-container{\r\n    width: 70%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.main-header button {\r\n    width: 5rem;\r\n    height: 1.5rem;\r\n    color: var(--font-white);\r\n    background-color: transparent;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\nbutton{\r\n    border: none;\r\n}\r\n\r\n.main-header button:hover{\r\n    transform: translateY(-6px);\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.button-clicked{\r\n    border-bottom: 2px solid var(--font-white);\r\n}\r\n\r\n#mainContent {\r\n    order: 2;\r\n    flex-grow: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n\r\n.main-menu-content, .home-main-content, .main-contact-content{\r\n    margin-top: 24px;\r\n    background-color: var(--content-background);\r\n    box-shadow: 0 15px 20px rgba(0,0,0,.6);\r\n}\r\n\r\n.page-title{\r\n    text-align: center;\r\n    margin: 30px 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.home-main-content, .main-contact-content{\r\n    width: 880px;\r\n    color: var(--font-white);\r\n}\r\n\r\n.restaurant-description{\r\n    margin: 0 80px; \r\n}\r\n\r\n.description-paragraph{\r\n    margin-bottom: 30px;\r\n    text-align: justify;\r\n    font-size: 1.2rem;\r\n    line-height: 32px;\r\n}\r\n\r\n.dessert-content{\r\n    background-color: var(--background-color);\r\n    height: fit-content;\r\n    width: fit-content;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 400px);\r\n    grid-template-rows: repeat(1, 300px);\r\n    color: var(--font-white);\r\n    margin: 0 10px;\r\n}\r\n\r\n.foods-name{\r\n    font-weight: 700;\r\n}\r\n\r\n.foods-image{\r\n    width: 180px;\r\n    height: auto;\r\n    border-radius: 10%;\r\n}\r\n\r\n.hamburger-content{\r\n    height: fit-content;\r\n    width: fit-content;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 400px);\r\n    grid-template-rows: repeat(4, 300px);\r\n    margin: 30px;\r\n    gap: 20px;\r\n}\r\n\r\n.hamburger-container:hover{\r\n    background-color: var(--card-background);\r\n}\r\n\r\n.hamburger-container, .dessert-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    color: var(--font-white);\r\n}\r\n\r\n.foods-ingredients{\r\n    width: 360px;\r\n    height: 42px;\r\n    text-align: center;\r\n}\r\n\r\n.main-contact-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.contact-title{\r\n    text-align: center;\r\n    margin-top: 30px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.contact-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.contact-container{\r\n    display: grid;\r\n    grid-template-columns: 80px 80px 30px 200px; \r\n    grid-template-rows: auto;\r\n    margin: 30px;\r\n    grid-template-areas: \r\n    \". . . img\"\r\n    \"name name . img\"\r\n    \"role role . img\"\r\n    \". . . img\"\r\n    \". . . img\";\r\n    align-items: center;\r\n    background-color: var(--card-background);\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.contacts-name{\r\n    grid-area: name;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.contacts-role{\r\n    grid-area: role;\r\n    font-size: 1rem;\r\n}\r\n.contacts-img{\r\n    width: 180px;\r\n    border-radius: 50%;\r\n    height: auto;\r\n    grid-area: img;\r\n}\r\n\r\n.location-text{\r\n    margin-top: 30px;\r\n}\r\n\r\n.location-img{\r\n    width: 480px;\r\n    height: auto;\r\n    margin: 10px 0 30px 0;\r\n}\r\n\r\n.footer{\r\n    margin-top: 30px;\r\n    height: 36px;\r\n    background-color: var(--background-color);\r\n    color: var(--font-white);\r\n    order: 3;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 14px;\r\n}\r\n\r\n.fa-github{\r\n    margin-left: 8px;\r\n    color: var(--font-white);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\na:link, a:visited {\r\n    color: var(--font-white);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n  \r\n::-webkit-scrollbar-track {\r\n    background: #7b7a7a;\r\n}\r\n  \r\n::-webkit-scrollbar-thumb {\r\n    background: #2f2e2e;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #383232;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto:wght@400;700&display=swap');\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n\r\n:root{\r\n    --font-white: #FEFEFE;\r\n    --background-color: rgba(0, 0, 0, 0.9);\r\n    --content-background: #28282B;\r\n    --card-background: #000000;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n    background-image: url('../src/img/background-image.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.main-header{\r\n    width: 100%;\r\n    height: 8rem;\r\n    background-color: var(--background-color);\r\n    order: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.restaurant-title{\r\n    font-size: 4rem;\r\n    color: var(--font-white);\r\n    font-family: 'Amatic SC', cursive;\r\n}\r\n\r\n\r\n.buttons-container{\r\n    width: 70%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.main-header button {\r\n    width: 5rem;\r\n    height: 1.5rem;\r\n    color: var(--font-white);\r\n    background-color: transparent;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\nbutton{\r\n    border: none;\r\n}\r\n\r\n.main-header button:hover{\r\n    transform: translateY(-6px);\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.button-clicked{\r\n    border-bottom: 2px solid var(--font-white);\r\n}\r\n\r\n#mainContent {\r\n    order: 2;\r\n    flex-grow: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n\r\n.main-menu-content, .home-main-content, .main-contact-content{\r\n    margin-top: 24px;\r\n    background-color: var(--content-background);\r\n    box-shadow: 0 15px 20px rgba(0,0,0,.6);\r\n}\r\n\r\n.page-title{\r\n    text-align: center;\r\n    margin: 30px 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.home-main-content, .main-contact-content{\r\n    width: 880px;\r\n    color: var(--font-white);\r\n}\r\n\r\n.restaurant-description{\r\n    margin: 0 80px; \r\n}\r\n\r\n.description-paragraph{\r\n    margin-bottom: 30px;\r\n    text-align: justify;\r\n    font-size: 1.2rem;\r\n    line-height: 32px;\r\n}\r\n\r\n.dessert-content{\r\n    background-color: var(--background-color);\r\n    height: fit-content;\r\n    width: fit-content;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 400px);\r\n    grid-template-rows: repeat(1, 300px);\r\n    color: var(--font-white);\r\n    margin: 0 10px;\r\n}\r\n\r\n.foods-name{\r\n    font-weight: 700;\r\n}\r\n\r\n.foods-image{\r\n    width: 180px;\r\n    height: auto;\r\n    border-radius: 10%;\r\n}\r\n\r\n.hamburger-content{\r\n    height: fit-content;\r\n    width: fit-content;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 400px);\r\n    grid-template-rows: repeat(4, 300px);\r\n    margin: 30px;\r\n    gap: 20px;\r\n}\r\n\r\n.hamburger-container:hover{\r\n    background-color: var(--card-background);\r\n}\r\n\r\n.hamburger-container, .dessert-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    color: var(--font-white);\r\n}\r\n\r\n.foods-ingredients{\r\n    width: 360px;\r\n    height: 42px;\r\n    text-align: center;\r\n}\r\n\r\n.main-contact-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.contact-title{\r\n    text-align: center;\r\n    margin-top: 30px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.contact-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.contact-container{\r\n    display: grid;\r\n    grid-template-columns: 80px 80px 30px 200px; \r\n    grid-template-rows: auto;\r\n    margin: 30px;\r\n    grid-template-areas: \r\n    \". . . img\"\r\n    \"name name . img\"\r\n    \"role role . img\"\r\n    \". . . img\"\r\n    \". . . img\";\r\n    align-items: center;\r\n    background-color: var(--card-background);\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.contacts-name{\r\n    grid-area: name;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.contacts-role{\r\n    grid-area: role;\r\n    font-size: 1rem;\r\n}\r\n.contacts-img{\r\n    width: 180px;\r\n    border-radius: 50%;\r\n    height: auto;\r\n    grid-area: img;\r\n}\r\n\r\n.location-text{\r\n    margin-top: 30px;\r\n}\r\n\r\n.location-img{\r\n    width: 480px;\r\n    height: auto;\r\n    margin: 10px 0 30px 0;\r\n}\r\n\r\n.footer{\r\n    margin-top: 30px;\r\n    height: 36px;\r\n    background-color: var(--background-color);\r\n    color: var(--font-white);\r\n    order: 3;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 14px;\r\n}\r\n\r\n.fa-github{\r\n    margin-left: 8px;\r\n    color: var(--font-white);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\na:link, a:visited {\r\n    color: var(--font-white);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n  \r\n::-webkit-scrollbar-track {\r\n    background: #7b7a7a;\r\n}\r\n  \r\n::-webkit-scrollbar-thumb {\r\n    background: #2f2e2e;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #383232;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interact_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interact-dom */ "./src/interact-dom.js");
/* harmony import */ var _src_img_ellie_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/img/ellie.png */ "./src/img/ellie.png");
/* harmony import */ var _src_img_dina_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/img/dina.png */ "./src/img/dina.png");
/* harmony import */ var _src_img_joel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/img/joel.png */ "./src/img/joel.png");
/* harmony import */ var _src_img_tommy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/img/tommy.png */ "./src/img/tommy.png");
/* harmony import */ var _src_img_location_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/img/location.png */ "./src/img/location.png");








const contactList = [
    {
        name: "Ellie Williams",
        role: "Director",
        img: _src_img_ellie_png__WEBPACK_IMPORTED_MODULE_1__,
        order: 0
    },
    {
        name: "Dina Williams",
        role: "General Manager",
        img: _src_img_dina_png__WEBPACK_IMPORTED_MODULE_2__,
        order: 1
    },
    {
        name: "Joel Miller",
        role: "Executive Chef",
        img: _src_img_joel_png__WEBPACK_IMPORTED_MODULE_3__,
        order: 2
    },
    {
        name: "Tommy Miller",
        role: "Sommelier",
        img: _src_img_tommy_png__WEBPACK_IMPORTED_MODULE_4__,
        order: 3  
    }
]

const populateContact = (id) => { 
    
    const domElements = {
        name: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'contacts-name', `contactName#${contactList[id].order}`),
        role: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'contacts-role', `contactRole#${contactList[id].order}`),
        img: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'contacts-img', `contactImg#${contactList[id].order}`)
    }
    return domElements
}

const generateContactPage = function () {
    const mainContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContent')
    const mainContactContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('main', 'main-contact-content', 'mainContactContent')
    const contactTitle = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'contact-title', 'contactTitle')
    const locationText = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'location-text', 'locationText')
    const locationImg = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'location-img', 'locationImg')
    const contactContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'contact-content', 'contactContent')
    
    const containerOne = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'contact-container', 'containerOne')
    const containerTwo = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'contact-container', 'containerTwo')
    const containerThree = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'contact-container', 'containerThree')
    const containerFour = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'contact-container', 'containerFour')

    const contactOne = populateContact(0)
    const contactTwo = populateContact(1)
    const contactThree = populateContact(2)
    const contactFour = populateContact(3)
     
    mainContactContent.appendChild(contactTitle)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendContacElementAndDefineContent(containerOne, contactOne, contactList, 0)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendContacElementAndDefineContent(containerTwo, contactTwo, contactList, 1)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendContacElementAndDefineContent(containerThree, contactThree, contactList, 2)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendContacElementAndDefineContent(containerFour, contactFour, contactList, 3)
    locationImg.src = _src_img_location_png__WEBPACK_IMPORTED_MODULE_5__

    mainContactContent.appendChild(contactContent)
    contactContent.appendChild(containerOne)
    contactContent.appendChild(containerTwo)
    contactContent.appendChild(containerThree)
    contactContent.appendChild(containerFour)
    mainContactContent.appendChild(locationText)
    mainContactContent.appendChild(locationImg)
   
    contactTitle.textContent = 'Main contacts'
    locationText.textContent = 'Best burguer place of Teton County, Wyoming. Come visit us (but only if you are not a wolf)'

    mainContent.appendChild(mainContactContent)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContactPage);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interact_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interact-dom */ "./src/interact-dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const generateHomepage = function(){
    const homeMainElem = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('main', 'home-main-content','homeMainContent')
    const pageTitleElem = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'page-title', 'pageTitle')
    const restaurantDescriptionElem = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'restaurant-description', 'restaurantDescription')
    const mainContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContent')
    const descriptionParagraphOne = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'description-paragraph', 'descriptionParagraphOne')
    const descriptionParagraphTwo = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'description-paragraph', 'descriptionParagraphTwo')
    const descriptionParagraphThree = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'description-paragraph', 'descriptionParagraphThree')
    const descriptionParagraphFour = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'description-paragraph', 'descriptionParagraphFour')
    
    // const homeMain = interactDOM().hookDOMelement('homeMainContent')
    // const pageTitle = interactDOM().hookDOMelement('pageTitle')
    // const restaurantDescription = interactDOM().hookDOMelement('restaurantDescription')

    homeMainElem.appendChild(pageTitleElem)
    homeMainElem.appendChild(restaurantDescriptionElem)
    restaurantDescriptionElem.appendChild(descriptionParagraphOne)
    restaurantDescriptionElem.appendChild(descriptionParagraphTwo)
    restaurantDescriptionElem.appendChild(descriptionParagraphThree)
    restaurantDescriptionElem.appendChild(descriptionParagraphFour)

    pageTitleElem.textContent = 'The Last Bite'
    
    descriptionParagraphOne.textContent = "The Last Bite is a small, post-apocalyptic burger joint located in the heart of Jackson, a town ravaged by nature and time. Despite its rundown appearance, The Last Bite has become a beloved local institution, serving up hearty burgers and fries to weary customers looking for a moment of respite in a harsh and unforgiving world."
    descriptionParagraphTwo.textContent = "The menu at The Last Bite is simple yet satisfying, featuring classic burgers and sides made with fresh, locally sourced ingredients. The burgers are cooked to perfection on a grill in full view of the customers, with the aroma of sizzling beef wafting through the cramped and dimly lit space."
    descriptionParagraphThree.textContent = "Despite the desolate surroundings, the atmosphere inside The Last Bite is warm and welcoming, with vintage posters and photographs adorning the walls and a few small tables and chairs scattered throughout the space. Customers often linger over their meals, swapping stories and sharing a moment of camaraderie amidst the ruins of their world."
    descriptionParagraphFour.textContent = "At The Last Bite, every burger is savored as if it might be the last. For the weary travelers and survivors of the apocalypse who pass through Jackson, The Last Bite is a beacon of hope and a reminder that even in the darkest of times, there is still joy to be found in a well-cooked burger and a moment of respite."




    mainContent.appendChild(homeMainElem)
    // return homeMain
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHomepage);

/***/ }),

/***/ "./src/interact-dom.js":
/*!*****************************!*\
  !*** ./src/interact-dom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const interactDOM = function(){
    const mainContent = document.getElementById('mainContent')


    const createElementWithClassAndId = function(type, className, idName){
        const element = document.createElement(type)
        element.classList.add(`${className}`)
        element.id = `${idName}`
        return element
    }

    const hookDOMelement = function (idName){
        const elem = document.getElementById(`${idName}`)
        return elem
    }

    const appendMenuElementAndDefineContent = function(container, element, menu , type, order){
        container.appendChild(element.name)
        container.appendChild(element.ingredients)
        // container.appendChild(element.price)
        container.appendChild(element.img)

        element.name.textContent = `${menu[`${type}`][order].name}`
        element.ingredients.textContent = `${menu[`${type}`][order].ingredients}`
        // element.price.textContent = `${menu[`${type}`][order].price}`
        element.img.src = `${menu[`${type}`][order].img}`

    }

    const appendContacElementAndDefineContent = function(container, element, contactList, order){
        container.appendChild(element.name)
        container.appendChild(element.role)
        container.appendChild(element.img)
        
        element.name.textContent = `${contactList[order].name}`
        element.role.textContent = `${contactList[order].role}`
        element.img.src = `${contactList[order].img}`
    }

    return { mainContent, createElementWithClassAndId, hookDOMelement, appendMenuElementAndDefineContent, appendContacElementAndDefineContent }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interactDOM);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interact_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interact-dom */ "./src/interact-dom.js");
/* harmony import */ var _src_img_hamburger_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/img/hamburger-1.jpg */ "./src/img/hamburger-1.jpg");
/* harmony import */ var _src_img_hamburger_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/img/hamburger-2.jpg */ "./src/img/hamburger-2.jpg");
/* harmony import */ var _src_img_hamburger_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/img/hamburger-3.jpg */ "./src/img/hamburger-3.jpg");
/* harmony import */ var _src_img_hamburger_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/img/hamburger-4.jpg */ "./src/img/hamburger-4.jpg");
/* harmony import */ var _src_img_hamburger_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/img/hamburger-5.jpg */ "./src/img/hamburger-5.jpg");
/* harmony import */ var _src_img_hamburger_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/img/hamburger-6.jpg */ "./src/img/hamburger-6.jpg");
/* harmony import */ var _src_img_hamburger_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/img/hamburger-7.jpg */ "./src/img/hamburger-7.jpg");
/* harmony import */ var _src_img_hamburger_8_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/img/hamburger-8.jpg */ "./src/img/hamburger-8.jpg");










const menu = {
    desserts: [
        {
            name: "Caramel Cheesecake",
            ingredients: "Cracker crumbs, sugar, unsalted butter, cream cheese, vanilla extract, eggs, caramel sauce, whipped cream and fresh berries.",
            price: "7",
            img: "../src/img/dessert1.jpg",
            order: 0
        },
        {
            name: "Raspberry Cheesecake",
            ingredients: "Cracker crumbs, sugar, unsalted butter, cream cheese, vanilla extract, eggs, raspberry sauce, whipped cream and fresh raspberries.",
            price: "8",
            img: "../src/img/dessert2.jpg",
            order: 1
        }
    ],
    hamburguers: [
        {
            name: "Apocalypse Burger",
            ingredients: "Italian bread, 2 beef burgers, pork loin, slices of cheddar, mozzarella cheese and barbecue sauce.",
            price: "11",
            img: _src_img_hamburger_1_jpg__WEBPACK_IMPORTED_MODULE_1__,
            order: 0
        },
        {
            name: "Survivor Burger",
            ingredients: "Italian bread, 2 beef burgers, pork loin, bacon, mozzarella cheese and barbecue sauce.",
            price: "12",
            img: _src_img_hamburger_2_jpg__WEBPACK_IMPORTED_MODULE_2__,
            order: 1
        },
        {
            name: " Wasteland Burger",
            ingredients: "Italian bread, 1 beef burger, pulled pork, bacon, cheddar cheese, tomato slices and red onion.",
            price: "9",
            img: _src_img_hamburger_3_jpg__WEBPACK_IMPORTED_MODULE_3__,
            order: 2
        },
        {
            name: "Outbreak Burger",
            ingredients: "Ciabatta bread, 3 beef burgers, cheddar supreme sauce, tomato slices, lettuce and pickles.",
            price: "15",
            img: _src_img_hamburger_4_jpg__WEBPACK_IMPORTED_MODULE_4__,
            order: 3
        },
        {
            name: "Last Bite Burger",
            ingredients: "Italian bread, 2 beef burgers, cheddar cheese, mozzarella cheese, lettuce and onion rings.",
            price: "12",
            img: _src_img_hamburger_5_jpg__WEBPACK_IMPORTED_MODULE_5__,
            order: 4
        },
        {
            name: "Infected Burger",
            ingredients: "Italian bread, 1 beef burger, mozzarella cheese, tomato slices and lettuce.",
            price: "8",
            img: _src_img_hamburger_6_jpg__WEBPACK_IMPORTED_MODULE_6__,
            order: 5
        },
        {
            name: "Clicker Surprise Burger",
            ingredients: "Dark Italian bread, 3 beef burgers, cheddar cheese, fried eggs, and lettuce.",
            price: "14",
            img: _src_img_hamburger_7_jpg__WEBPACK_IMPORTED_MODULE_7__,
            order: 6
        },
        {
            name: "Last Hope Burger",
            ingredients: "Italian bread, 2 beef burgers, bacon, cheddar cheese, lettuce and red onion.",
            price: "11",
            img: _src_img_hamburger_8_jpg__WEBPACK_IMPORTED_MODULE_8__,
            order: 7
        },
    ]
}


const populateFood = (type, id) => {
    const domElements = {
        name: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'foods-name', `name#${menu[`${type}`][id].order}`),
        ingredients: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'foods-ingredients', `ingredients#${menu[`${type}`][id].order}`),
        price: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'foods-price', `price#${menu[`${type}`][id].order}`),
        img: (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'foods-image', `image#${menu[`${type}`][id].order}`)
    }
    return domElements
}

const generateMenuContent = function () {
    const mainContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContent')
    const mainMenuContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('main', 'main-menu-content', 'mainMenuContent')
    const menuTitle = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'menu-title', 'menuTitle')
    const dessertsContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'dessert-content', 'dessertContent')
    const dessertContainerOne = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'dessert-container', 'dessertContainerOne')
    const dessertContainerTwo = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'dessert-container', 'dessertContainerTwo')
    const hamburgerContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-content', 'hamburgerContent')
    const hamburgerContainerOne = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerOne')
    const hamburgerContainerTwo = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerTwo')
    const hamburgerContainerThree = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerThree')
    const hamburgerContainerFour = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerFour')
    const hamburgerContainerFive = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerFive')
    const hamburgerContainerSix = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerSix')
    const hamburgerContainerSeven = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerSeven')
    const hamburgerContainerEigth = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'hamburger-container', 'hamburgerContainerEigth')


    const dessertOne = populateFood("desserts", 0)
    const dessertTwo = populateFood("desserts", 1)

    const hamburguerOne = populateFood("hamburguers", 0)
    const hamburguerTwo = populateFood("hamburguers", 1)
    const hamburguerThree = populateFood("hamburguers", 2)
    const hamburguerFour = populateFood("hamburguers", 3)
    const hamburguerFive = populateFood("hamburguers", 4)
    const hamburguerSix = populateFood("hamburguers", 5)
    const hamburguerSeven = populateFood("hamburguers", 6)
    const hamburguerEight = populateFood("hamburguers", 7)

    // mainMenuContent.appendChild(menuTitle)
    // menuTitle.textContent = 'Menu'

    // mainMenuContent.appendChild(dessertsContent)
    dessertsContent.appendChild(dessertContainerOne)
    dessertsContent.appendChild(dessertContainerTwo)
    // interactDOM().appendElementAndDefineContent(dessertContainerOne, dessertOne, menu, 'desserts', 0)
    // interactDOM().appendElementAndDefineContent(dessertContainerTwo, dessertTwo, menu, 'desserts', 1)
    mainMenuContent.appendChild(hamburgerContent)
    hamburgerContent.appendChild(hamburgerContainerOne)
    hamburgerContent.appendChild(hamburgerContainerTwo)
    hamburgerContent.appendChild(hamburgerContainerThree)
    hamburgerContent.appendChild(hamburgerContainerFour)
    hamburgerContent.appendChild(hamburgerContainerFive)
    hamburgerContent.appendChild(hamburgerContainerSix)
    hamburgerContent.appendChild(hamburgerContainerSeven)
    hamburgerContent.appendChild(hamburgerContainerEigth)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerOne, hamburguerOne, menu, 'hamburguers', 0)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerTwo, hamburguerTwo, menu, 'hamburguers', 1)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerThree, hamburguerThree, menu, 'hamburguers', 2)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerFour, hamburguerFour, menu, 'hamburguers', 3)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerFive, hamburguerFive, menu, 'hamburguers', 4)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerSix, hamburguerSix, menu, 'hamburguers', 5)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerSeven, hamburguerSeven, menu, 'hamburguers', 6)
    ;(0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendMenuElementAndDefineContent(hamburgerContainerEigth, hamburguerEight, menu, 'hamburguers', 7)
    mainContent.appendChild(mainMenuContent)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenuContent);

/***/ }),

/***/ "./src/img/background-image.jpg":
/*!**************************************!*\
  !*** ./src/img/background-image.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26860ed189492aa9eb90.jpg";

/***/ }),

/***/ "./src/img/dina.png":
/*!**************************!*\
  !*** ./src/img/dina.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cb0776c76d9c8f10437.png";

/***/ }),

/***/ "./src/img/ellie.png":
/*!***************************!*\
  !*** ./src/img/ellie.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66dedc8716bd3d7b8b3f.png";

/***/ }),

/***/ "./src/img/hamburger-1.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79cebbdf92b084231f7b.jpg";

/***/ }),

/***/ "./src/img/hamburger-2.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "508f67d747d71474d407.jpg";

/***/ }),

/***/ "./src/img/hamburger-3.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fab9ed3abf1b8e988854.jpg";

/***/ }),

/***/ "./src/img/hamburger-4.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-4.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e41de6df2747a90eea1.jpg";

/***/ }),

/***/ "./src/img/hamburger-5.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-5.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cb29ebe45983c40da0d.jpg";

/***/ }),

/***/ "./src/img/hamburger-6.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-6.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "398427c5cac2c08d1788.jpg";

/***/ }),

/***/ "./src/img/hamburger-7.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-7.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cb934f792c8597596a4.jpg";

/***/ }),

/***/ "./src/img/hamburger-8.jpg":
/*!*********************************!*\
  !*** ./src/img/hamburger-8.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "066d9352eed4583cfdfe.jpg";

/***/ }),

/***/ "./src/img/joel.png":
/*!**************************!*\
  !*** ./src/img/joel.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a86b5434cc370a742a4.png";

/***/ }),

/***/ "./src/img/location.png":
/*!******************************!*\
  !*** ./src/img/location.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d468ec08b12c9e65f920.png";

/***/ }),

/***/ "./src/img/tommy.png":
/*!***************************!*\
  !*** ./src/img/tommy.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a6c12cfe0c97d0800ef.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interact_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interact-dom */ "./src/interact-dom.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const generateHeader = (function(){
    const mainHeader = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('header', 'main-header', 'mainHeader')
    const mainContent = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContent')

    const restaurantTitle = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'restaurant-title', 'restaurantTitle')
    restaurantTitle.textContent = 'The Last Bite'

    const buttonsContainer = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'buttons-container', 'buttonsContainer')
    const homeButton = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'home-page', 'homePage')
    homeButton.textContent = 'Home'
    const menuButton = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'menu-page', 'menuPage')
    menuButton.textContent = 'Menu'
    const contactButton = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'contact-page', 'contactPage')
    contactButton.textContent = 'Contact'

    mainHeader.appendChild(restaurantTitle)
    mainHeader.appendChild(buttonsContainer)
    buttonsContainer.appendChild(homeButton)
    buttonsContainer.appendChild(menuButton)
    buttonsContainer.appendChild(contactButton)

    document.body.appendChild(mainHeader)
    return { homeButton, menuButton, contactButton, mainContent }
})()

const generateFooter = (function(){
    const mainFooter = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('footer', 'footer', 'footer')
    const footerText = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'footer-text', 'footerText')
    const footerLink = (0,_interact_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('a', 'fa-brands', 'footerLink')
    footerLink.classList.add('fa-github')
    footerLink.href = 'https://github.com/rmathr'

    mainFooter.appendChild(footerText)
    mainFooter.appendChild(footerLink)

    footerText.textContent = 'rmath©'

    document.body.appendChild(mainFooter)
})()


const clearDOM = function(){
    while (generateHeader.mainContent.hasChildNodes()) {
        generateHeader.mainContent.removeChild(generateHeader.mainContent.firstChild);
      }
}

generateHeader.contactButton.addEventListener('click', e => {
    e.preventDefault()
    clearDOM()
    generateHeader.contactButton.classList.add('button-clicked')
    generateHeader.menuButton.classList.remove('button-clicked')
    generateHeader.homeButton.classList.remove('button-clicked')
    ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])()
})

generateHeader.menuButton.addEventListener('click', e =>{
    e.preventDefault()
    clearDOM()
    generateHeader.contactButton.classList.remove('button-clicked')
    generateHeader.menuButton.classList.add('button-clicked')
    generateHeader.homeButton.classList.remove('button-clicked')
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
})

generateHeader.homeButton.addEventListener('click', e => {
    e.preventDefault()
    clearDOM()
    generateHeader.contactButton.classList.remove('button-clicked')
    generateHeader.menuButton.classList.remove('button-clicked')
    generateHeader.homeButton.classList.add('button-clicked')
    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxTQUFTLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVks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QUFnQjtBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ludGVyYWN0LWRvbS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ltZy9iYWNrZ3JvdW5kLWltYWdlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDJmZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tZm9udC13aGl0ZTogI0ZFRkVGRTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kOiAjMjgyODJCO1xcclxcbiAgICAtLWNhcmQtYmFja2dyb3VuZDogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWhlYWRlcntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOHJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIG9yZGVyOiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhdXJhbnQtdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtd2hpdGUpO1xcclxcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idXR0b25zLWNvbnRhaW5lcntcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWhlYWRlciBidXR0b24ge1xcclxcbiAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LXdoaXRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbntcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1oZWFkZXIgYnV0dG9uOmhvdmVye1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1dHRvbi1jbGlja2Vke1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZm9udC13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbiNtYWluQ29udGVudCB7XFxyXFxuICAgIG9yZGVyOiAyO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubWFpbi1tZW51LWNvbnRlbnQsIC5ob21lLW1haW4tY29udGVudCwgLm1haW4tY29udGFjdC1jb250ZW50e1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMjBweCByZ2JhKDAsMCwwLC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtdGl0bGV7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAzMHB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1tYWluLWNvbnRlbnQsIC5tYWluLWNvbnRhY3QtY29udGVudHtcXHJcXG4gICAgd2lkdGg6IDg4MHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5yZXN0YXVyYW50LWRlc2NyaXB0aW9ue1xcclxcbiAgICBtYXJnaW46IDAgODBweDsgXFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1wYXJhZ3JhcGh7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc3NlcnQtY29udGVudHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNDAwcHgpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLCAzMDBweCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LXdoaXRlKTtcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb29kcy1uYW1le1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZHMtaW1hZ2V7XFxyXFxuICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItY29udGVudHtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0MDBweCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDMwMHB4KTtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItY29udGFpbmVyOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLWNvbnRhaW5lciwgLmRlc3NlcnQtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZHMtaW5ncmVkaWVudHN7XFxyXFxuICAgIHdpZHRoOiAzNjBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhY3QtY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtdGl0bGV7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggODBweCAzMHB4IDIwMHB4OyBcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwiLiAuIC4gaW1nXFxcIlxcclxcbiAgICBcXFwibmFtZSBuYW1lIC4gaW1nXFxcIlxcclxcbiAgICBcXFwicm9sZSByb2xlIC4gaW1nXFxcIlxcclxcbiAgICBcXFwiLiAuIC4gaW1nXFxcIlxcclxcbiAgICBcXFwiLiAuIC4gaW1nXFxcIjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzLW5hbWV7XFxyXFxuICAgIGdyaWQtYXJlYTogbmFtZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cy1yb2xle1xcclxcbiAgICBncmlkLWFyZWE6IHJvbGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLmNvbnRhY3RzLWltZ3tcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgZ3JpZC1hcmVhOiBpbWc7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbi10ZXh0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb24taW1ne1xcclxcbiAgICB3aWR0aDogNDgwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVye1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC13aGl0ZSk7XFxyXFxuICAgIG9yZGVyOiAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZ2l0aHVie1xcclxcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmE6bGluaywgYTp2aXNpdGVkIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM3YjdhN2E7XFxyXFxufVxcclxcbiAgXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyZjJlMmU7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzgzMjMyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOzs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixzQ0FBc0M7SUFDdEMsNkJBQTZCO0lBQzdCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHlEQUF3RDtJQUN4RCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxRQUFRO0lBQ1IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixpQ0FBaUM7QUFDckM7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7OztBQUlBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1o7Ozs7O2VBS1c7SUFDWCxtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLHdCQUF3QjtJQUN4QixRQUFRO0lBQ1IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQyZmYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tZm9udC13aGl0ZTogI0ZFRkVGRTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kOiAjMjgyODJCO1xcclxcbiAgICAtLWNhcmQtYmFja2dyb3VuZDogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9pbWcvYmFja2dyb3VuZC1pbWFnZS5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1oZWFkZXJ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDhyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICBvcmRlcjogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXN0YXVyYW50LXRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LXdoaXRlKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnV0dG9ucy1jb250YWluZXJ7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1oZWFkZXIgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDVyZW07XFxyXFxuICAgIGhlaWdodDogMS41cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC13aGl0ZSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b257XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taGVhZGVyIGJ1dHRvbjpob3ZlcntcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idXR0b24tY2xpY2tlZHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvbnQtd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbkNvbnRlbnQge1xcclxcbiAgICBvcmRlcjogMjtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm1haW4tbWVudS1jb250ZW50LCAuaG9tZS1tYWluLWNvbnRlbnQsIC5tYWluLWNvbnRhY3QtY29udGVudHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDIwcHggcmdiYSgwLDAsMCwuNik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXRpdGxle1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMzBweCAwO1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtbWFpbi1jb250ZW50LCAubWFpbi1jb250YWN0LWNvbnRlbnR7XFxyXFxuICAgIHdpZHRoOiA4ODBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGF1cmFudC1kZXNjcmlwdGlvbntcXHJcXG4gICAgbWFyZ2luOiAwIDgwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tcGFyYWdyYXBoe1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNzZXJ0LWNvbnRlbnR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQwMHB4KTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMSwgMzAwcHgpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC13aGl0ZSk7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZHMtbmFtZXtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2RzLWltYWdle1xcclxcbiAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLWNvbnRlbnR7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNDAwcHgpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAzMDBweCk7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLWNvbnRhaW5lcjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1jb250YWluZXIsIC5kZXNzZXJ0LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2RzLWluZ3JlZGllbnRze1xcclxcbiAgICB3aWR0aDogMzYwcHg7XFxyXFxuICAgIGhlaWdodDogNDJweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWN0LWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXRpdGxle1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IDgwcHggMzBweCAyMDBweDsgXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcIi4gLiAuIGltZ1xcXCJcXHJcXG4gICAgXFxcIm5hbWUgbmFtZSAuIGltZ1xcXCJcXHJcXG4gICAgXFxcInJvbGUgcm9sZSAuIGltZ1xcXCJcXHJcXG4gICAgXFxcIi4gLiAuIGltZ1xcXCJcXHJcXG4gICAgXFxcIi4gLiAuIGltZ1xcXCI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFja2dyb3VuZCk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cy1uYW1le1xcclxcbiAgICBncmlkLWFyZWE6IG5hbWU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHMtcm9sZXtcXHJcXG4gICAgZ3JpZC1hcmVhOiByb2xlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbi5jb250YWN0cy1pbWd7XFxyXFxuICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGdyaWQtYXJlYTogaW1nO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb24tdGV4dHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uLWltZ3tcXHJcXG4gICAgd2lkdGg6IDQ4MHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDMwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlcntcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtd2hpdGUpO1xcclxcbiAgICBvcmRlcjogMztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWdpdGh1YntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hOmxpbmssIGE6dmlzaXRlZCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG4gIFxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjN2I3YTdhO1xcclxcbn1cXHJcXG4gIFxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMmYyZTJlO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzM4MzIzMjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3QtZG9tXCI7XHJcbmltcG9ydCBlbGxpZSBmcm9tIFwiLi4vc3JjL2ltZy9lbGxpZS5wbmdcIlxyXG5pbXBvcnQgZGluYSBmcm9tIFwiLi4vc3JjL2ltZy9kaW5hLnBuZ1wiXHJcbmltcG9ydCBqb2VsIGZyb20gXCIuLi9zcmMvaW1nL2pvZWwucG5nXCJcclxuaW1wb3J0IHRvbW15IGZyb20gXCIuLi9zcmMvaW1nL3RvbW15LnBuZ1wiXHJcbmltcG9ydCBsb2NhdGlvbiBmcm9tIFwiLi4vc3JjL2ltZy9sb2NhdGlvbi5wbmdcIlxyXG5cclxuXHJcbmNvbnN0IGNvbnRhY3RMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRWxsaWUgV2lsbGlhbXNcIixcclxuICAgICAgICByb2xlOiBcIkRpcmVjdG9yXCIsXHJcbiAgICAgICAgaW1nOiBlbGxpZSxcclxuICAgICAgICBvcmRlcjogMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRpbmEgV2lsbGlhbXNcIixcclxuICAgICAgICByb2xlOiBcIkdlbmVyYWwgTWFuYWdlclwiLFxyXG4gICAgICAgIGltZzogZGluYSxcclxuICAgICAgICBvcmRlcjogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkpvZWwgTWlsbGVyXCIsXHJcbiAgICAgICAgcm9sZTogXCJFeGVjdXRpdmUgQ2hlZlwiLFxyXG4gICAgICAgIGltZzogam9lbCxcclxuICAgICAgICBvcmRlcjogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlRvbW15IE1pbGxlclwiLFxyXG4gICAgICAgIHJvbGU6IFwiU29tbWVsaWVyXCIsXHJcbiAgICAgICAgaW1nOiB0b21teSxcclxuICAgICAgICBvcmRlcjogMyAgXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IHBvcHVsYXRlQ29udGFjdCA9IChpZCkgPT4geyBcclxuICAgIFxyXG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSB7XHJcbiAgICAgICAgbmFtZTogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnY29udGFjdHMtbmFtZScsIGBjb250YWN0TmFtZSMke2NvbnRhY3RMaXN0W2lkXS5vcmRlcn1gKSxcclxuICAgICAgICByb2xlOiBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdjb250YWN0cy1yb2xlJywgYGNvbnRhY3RSb2xlIyR7Y29udGFjdExpc3RbaWRdLm9yZGVyfWApLFxyXG4gICAgICAgIGltZzogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2ltZycsICdjb250YWN0cy1pbWcnLCBgY29udGFjdEltZyMke2NvbnRhY3RMaXN0W2lkXS5vcmRlcn1gKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRvbUVsZW1lbnRzXHJcbn1cclxuXHJcbmNvbnN0IGdlbmVyYXRlQ29udGFjdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ21haW5Db250ZW50JylcclxuICAgIGNvbnN0IG1haW5Db250YWN0Q29udGVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdtYWluJywgJ21haW4tY29udGFjdC1jb250ZW50JywgJ21haW5Db250YWN0Q29udGVudCcpXHJcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdjb250YWN0LXRpdGxlJywgJ2NvbnRhY3RUaXRsZScpXHJcbiAgICBjb25zdCBsb2NhdGlvblRleHQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdsb2NhdGlvbi10ZXh0JywgJ2xvY2F0aW9uVGV4dCcpXHJcbiAgICBjb25zdCBsb2NhdGlvbkltZyA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnbG9jYXRpb24taW1nJywgJ2xvY2F0aW9uSW1nJylcclxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdjb250YWN0LWNvbnRlbnQnLCAnY29udGFjdENvbnRlbnQnKVxyXG4gICAgXHJcbiAgICBjb25zdCBjb250YWluZXJPbmUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2NvbnRhY3QtY29udGFpbmVyJywgJ2NvbnRhaW5lck9uZScpXHJcbiAgICBjb25zdCBjb250YWluZXJUd28gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2NvbnRhY3QtY29udGFpbmVyJywgJ2NvbnRhaW5lclR3bycpXHJcbiAgICBjb25zdCBjb250YWluZXJUaHJlZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnY29udGFjdC1jb250YWluZXInLCAnY29udGFpbmVyVGhyZWUnKVxyXG4gICAgY29uc3QgY29udGFpbmVyRm91ciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnY29udGFjdC1jb250YWluZXInLCAnY29udGFpbmVyRm91cicpXHJcblxyXG4gICAgY29uc3QgY29udGFjdE9uZSA9IHBvcHVsYXRlQ29udGFjdCgwKVxyXG4gICAgY29uc3QgY29udGFjdFR3byA9IHBvcHVsYXRlQ29udGFjdCgxKVxyXG4gICAgY29uc3QgY29udGFjdFRocmVlID0gcG9wdWxhdGVDb250YWN0KDIpXHJcbiAgICBjb25zdCBjb250YWN0Rm91ciA9IHBvcHVsYXRlQ29udGFjdCgzKVxyXG4gICAgIFxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSlcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kQ29udGFjRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyT25lLCBjb250YWN0T25lLCBjb250YWN0TGlzdCwgMClcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kQ29udGFjRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyVHdvLCBjb250YWN0VHdvLCBjb250YWN0TGlzdCwgMSlcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kQ29udGFjRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyVGhyZWUsIGNvbnRhY3RUaHJlZSwgY29udGFjdExpc3QsIDIpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZENvbnRhY0VsZW1lbnRBbmREZWZpbmVDb250ZW50KGNvbnRhaW5lckZvdXIsIGNvbnRhY3RGb3VyLCBjb250YWN0TGlzdCwgMylcclxuICAgIGxvY2F0aW9uSW1nLnNyYyA9IGxvY2F0aW9uXHJcblxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KVxyXG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyT25lKVxyXG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyVHdvKVxyXG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyVGhyZWUpXHJcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXJGb3VyKVxyXG4gICAgbWFpbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uVGV4dClcclxuICAgIG1haW5Db250YWN0Q29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbkltZylcclxuICAgXHJcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnTWFpbiBjb250YWN0cydcclxuICAgIGxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9ICdCZXN0IGJ1cmd1ZXIgcGxhY2Ugb2YgVGV0b24gQ291bnR5LCBXeW9taW5nLiBDb21lIHZpc2l0IHVzIChidXQgb25seSBpZiB5b3UgYXJlIG5vdCBhIHdvbGYpJ1xyXG5cclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWN0Q29udGVudClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVDb250YWN0UGFnZVxyXG4iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3QtZG9tXCI7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVIb21lcGFnZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBob21lTWFpbkVsZW0gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnbWFpbicsICdob21lLW1haW4tY29udGVudCcsJ2hvbWVNYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBwYWdlVGl0bGVFbGVtID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAncGFnZS10aXRsZScsICdwYWdlVGl0bGUnKVxyXG4gICAgY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uRWxlbSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAncmVzdGF1cmFudC1kZXNjcmlwdGlvbicsICdyZXN0YXVyYW50RGVzY3JpcHRpb24nKVxyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdtYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmFncmFwaE9uZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Rlc2NyaXB0aW9uLXBhcmFncmFwaCcsICdkZXNjcmlwdGlvblBhcmFncmFwaE9uZScpXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmFncmFwaFR3byA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Rlc2NyaXB0aW9uLXBhcmFncmFwaCcsICdkZXNjcmlwdGlvblBhcmFncmFwaFR3bycpXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmFncmFwaFRocmVlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZGVzY3JpcHRpb24tcGFyYWdyYXBoJywgJ2Rlc2NyaXB0aW9uUGFyYWdyYXBoVGhyZWUnKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGhGb3VyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZGVzY3JpcHRpb24tcGFyYWdyYXBoJywgJ2Rlc2NyaXB0aW9uUGFyYWdyYXBoRm91cicpXHJcbiAgICBcclxuICAgIC8vIGNvbnN0IGhvbWVNYWluID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnaG9tZU1haW5Db250ZW50JylcclxuICAgIC8vIGNvbnN0IHBhZ2VUaXRsZSA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ3BhZ2VUaXRsZScpXHJcbiAgICAvLyBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdyZXN0YXVyYW50RGVzY3JpcHRpb24nKVxyXG5cclxuICAgIGhvbWVNYWluRWxlbS5hcHBlbmRDaGlsZChwYWdlVGl0bGVFbGVtKVxyXG4gICAgaG9tZU1haW5FbGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnREZXNjcmlwdGlvbkVsZW0pXHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb25FbGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYWdyYXBoT25lKVxyXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uRWxlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmFncmFwaFR3bylcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbkVsZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhZ3JhcGhUaHJlZSlcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbkVsZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhZ3JhcGhGb3VyKVxyXG5cclxuICAgIHBhZ2VUaXRsZUVsZW0udGV4dENvbnRlbnQgPSAnVGhlIExhc3QgQml0ZSdcclxuICAgIFxyXG4gICAgZGVzY3JpcHRpb25QYXJhZ3JhcGhPbmUudGV4dENvbnRlbnQgPSBcIlRoZSBMYXN0IEJpdGUgaXMgYSBzbWFsbCwgcG9zdC1hcG9jYWx5cHRpYyBidXJnZXIgam9pbnQgbG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgSmFja3NvbiwgYSB0b3duIHJhdmFnZWQgYnkgbmF0dXJlIGFuZCB0aW1lLiBEZXNwaXRlIGl0cyBydW5kb3duIGFwcGVhcmFuY2UsIFRoZSBMYXN0IEJpdGUgaGFzIGJlY29tZSBhIGJlbG92ZWQgbG9jYWwgaW5zdGl0dXRpb24sIHNlcnZpbmcgdXAgaGVhcnR5IGJ1cmdlcnMgYW5kIGZyaWVzIHRvIHdlYXJ5IGN1c3RvbWVycyBsb29raW5nIGZvciBhIG1vbWVudCBvZiByZXNwaXRlIGluIGEgaGFyc2ggYW5kIHVuZm9yZ2l2aW5nIHdvcmxkLlwiXHJcbiAgICBkZXNjcmlwdGlvblBhcmFncmFwaFR3by50ZXh0Q29udGVudCA9IFwiVGhlIG1lbnUgYXQgVGhlIExhc3QgQml0ZSBpcyBzaW1wbGUgeWV0IHNhdGlzZnlpbmcsIGZlYXR1cmluZyBjbGFzc2ljIGJ1cmdlcnMgYW5kIHNpZGVzIG1hZGUgd2l0aCBmcmVzaCwgbG9jYWxseSBzb3VyY2VkIGluZ3JlZGllbnRzLiBUaGUgYnVyZ2VycyBhcmUgY29va2VkIHRvIHBlcmZlY3Rpb24gb24gYSBncmlsbCBpbiBmdWxsIHZpZXcgb2YgdGhlIGN1c3RvbWVycywgd2l0aCB0aGUgYXJvbWEgb2Ygc2l6emxpbmcgYmVlZiB3YWZ0aW5nIHRocm91Z2ggdGhlIGNyYW1wZWQgYW5kIGRpbWx5IGxpdCBzcGFjZS5cIlxyXG4gICAgZGVzY3JpcHRpb25QYXJhZ3JhcGhUaHJlZS50ZXh0Q29udGVudCA9IFwiRGVzcGl0ZSB0aGUgZGVzb2xhdGUgc3Vycm91bmRpbmdzLCB0aGUgYXRtb3NwaGVyZSBpbnNpZGUgVGhlIExhc3QgQml0ZSBpcyB3YXJtIGFuZCB3ZWxjb21pbmcsIHdpdGggdmludGFnZSBwb3N0ZXJzIGFuZCBwaG90b2dyYXBocyBhZG9ybmluZyB0aGUgd2FsbHMgYW5kIGEgZmV3IHNtYWxsIHRhYmxlcyBhbmQgY2hhaXJzIHNjYXR0ZXJlZCB0aHJvdWdob3V0IHRoZSBzcGFjZS4gQ3VzdG9tZXJzIG9mdGVuIGxpbmdlciBvdmVyIHRoZWlyIG1lYWxzLCBzd2FwcGluZyBzdG9yaWVzIGFuZCBzaGFyaW5nIGEgbW9tZW50IG9mIGNhbWFyYWRlcmllIGFtaWRzdCB0aGUgcnVpbnMgb2YgdGhlaXIgd29ybGQuXCJcclxuICAgIGRlc2NyaXB0aW9uUGFyYWdyYXBoRm91ci50ZXh0Q29udGVudCA9IFwiQXQgVGhlIExhc3QgQml0ZSwgZXZlcnkgYnVyZ2VyIGlzIHNhdm9yZWQgYXMgaWYgaXQgbWlnaHQgYmUgdGhlIGxhc3QuIEZvciB0aGUgd2VhcnkgdHJhdmVsZXJzIGFuZCBzdXJ2aXZvcnMgb2YgdGhlIGFwb2NhbHlwc2Ugd2hvIHBhc3MgdGhyb3VnaCBKYWNrc29uLCBUaGUgTGFzdCBCaXRlIGlzIGEgYmVhY29uIG9mIGhvcGUgYW5kIGEgcmVtaW5kZXIgdGhhdCBldmVuIGluIHRoZSBkYXJrZXN0IG9mIHRpbWVzLCB0aGVyZSBpcyBzdGlsbCBqb3kgdG8gYmUgZm91bmQgaW4gYSB3ZWxsLWNvb2tlZCBidXJnZXIgYW5kIGEgbW9tZW50IG9mIHJlc3BpdGUuXCJcclxuXHJcblxyXG5cclxuXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChob21lTWFpbkVsZW0pXHJcbiAgICAvLyByZXR1cm4gaG9tZU1haW5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVIb21lcGFnZSIsImNvbnN0IGludGVyYWN0RE9NID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50JylcclxuXHJcblxyXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkID0gZnVuY3Rpb24odHlwZSwgY2xhc3NOYW1lLCBpZE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKVxyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBgJHtpZE5hbWV9YFxyXG4gICAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaG9va0RPTWVsZW1lbnQgPSBmdW5jdGlvbiAoaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWROYW1lfWApXHJcbiAgICAgICAgcmV0dXJuIGVsZW1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRNZW51RWxlbWVudEFuZERlZmluZUNvbnRlbnQgPSBmdW5jdGlvbihjb250YWluZXIsIGVsZW1lbnQsIG1lbnUgLCB0eXBlLCBvcmRlcil7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQubmFtZSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5pbmdyZWRpZW50cylcclxuICAgICAgICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5wcmljZSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5pbWcpXHJcblxyXG4gICAgICAgIGVsZW1lbnQubmFtZS50ZXh0Q29udGVudCA9IGAke21lbnVbYCR7dHlwZX1gXVtvcmRlcl0ubmFtZX1gXHJcbiAgICAgICAgZWxlbWVudC5pbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IGAke21lbnVbYCR7dHlwZX1gXVtvcmRlcl0uaW5ncmVkaWVudHN9YFxyXG4gICAgICAgIC8vIGVsZW1lbnQucHJpY2UudGV4dENvbnRlbnQgPSBgJHttZW51W2Ake3R5cGV9YF1bb3JkZXJdLnByaWNlfWBcclxuICAgICAgICBlbGVtZW50LmltZy5zcmMgPSBgJHttZW51W2Ake3R5cGV9YF1bb3JkZXJdLmltZ31gXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcGVuZENvbnRhY0VsZW1lbnRBbmREZWZpbmVDb250ZW50ID0gZnVuY3Rpb24oY29udGFpbmVyLCBlbGVtZW50LCBjb250YWN0TGlzdCwgb3JkZXIpe1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50Lm5hbWUpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQucm9sZSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5pbWcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxlbWVudC5uYW1lLnRleHRDb250ZW50ID0gYCR7Y29udGFjdExpc3Rbb3JkZXJdLm5hbWV9YFxyXG4gICAgICAgIGVsZW1lbnQucm9sZS50ZXh0Q29udGVudCA9IGAke2NvbnRhY3RMaXN0W29yZGVyXS5yb2xlfWBcclxuICAgICAgICBlbGVtZW50LmltZy5zcmMgPSBgJHtjb250YWN0TGlzdFtvcmRlcl0uaW1nfWBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBtYWluQ29udGVudCwgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkLCBob29rRE9NZWxlbWVudCwgYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50LCBhcHBlbmRDb250YWNFbGVtZW50QW5kRGVmaW5lQ29udGVudCB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyYWN0RE9NIiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0LWRvbVwiO1xyXG5pbXBvcnQgaGFtYnVyZ2VyMSBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItMS5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyMiBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItMi5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyMyBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItMy5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyNCBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItNC5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyNSBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItNS5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyNiBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItNi5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyNyBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItNy5qcGdcIlxyXG5pbXBvcnQgaGFtYnVyZ2VyOCBmcm9tIFwiLi4vc3JjL2ltZy9oYW1idXJnZXItOC5qcGdcIlxyXG5cclxuY29uc3QgbWVudSA9IHtcclxuICAgIGRlc3NlcnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkNhcmFtZWwgQ2hlZXNlY2FrZVwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJDcmFja2VyIGNydW1icywgc3VnYXIsIHVuc2FsdGVkIGJ1dHRlciwgY3JlYW0gY2hlZXNlLCB2YW5pbGxhIGV4dHJhY3QsIGVnZ3MsIGNhcmFtZWwgc2F1Y2UsIHdoaXBwZWQgY3JlYW0gYW5kIGZyZXNoIGJlcnJpZXMuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjdcIixcclxuICAgICAgICAgICAgaW1nOiBcIi4uL3NyYy9pbWcvZGVzc2VydDEuanBnXCIsXHJcbiAgICAgICAgICAgIG9yZGVyOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiUmFzcGJlcnJ5IENoZWVzZWNha2VcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiQ3JhY2tlciBjcnVtYnMsIHN1Z2FyLCB1bnNhbHRlZCBidXR0ZXIsIGNyZWFtIGNoZWVzZSwgdmFuaWxsYSBleHRyYWN0LCBlZ2dzLCByYXNwYmVycnkgc2F1Y2UsIHdoaXBwZWQgY3JlYW0gYW5kIGZyZXNoIHJhc3BiZXJyaWVzLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCI4XCIsXHJcbiAgICAgICAgICAgIGltZzogXCIuLi9zcmMvaW1nL2Rlc3NlcnQyLmpwZ1wiLFxyXG4gICAgICAgICAgICBvcmRlcjogMVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBoYW1idXJndWVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJBcG9jYWx5cHNlIEJ1cmdlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJJdGFsaWFuIGJyZWFkLCAyIGJlZWYgYnVyZ2VycywgcG9yayBsb2luLCBzbGljZXMgb2YgY2hlZGRhciwgbW96emFyZWxsYSBjaGVlc2UgYW5kIGJhcmJlY3VlIHNhdWNlLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIxMVwiLFxyXG4gICAgICAgICAgICBpbWc6IGhhbWJ1cmdlcjEsXHJcbiAgICAgICAgICAgIG9yZGVyOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU3Vydml2b3IgQnVyZ2VyXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkl0YWxpYW4gYnJlYWQsIDIgYmVlZiBidXJnZXJzLCBwb3JrIGxvaW4sIGJhY29uLCBtb3p6YXJlbGxhIGNoZWVzZSBhbmQgYmFyYmVjdWUgc2F1Y2UuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjEyXCIsXHJcbiAgICAgICAgICAgIGltZzogaGFtYnVyZ2VyMixcclxuICAgICAgICAgICAgb3JkZXI6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCIgV2FzdGVsYW5kIEJ1cmdlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJJdGFsaWFuIGJyZWFkLCAxIGJlZWYgYnVyZ2VyLCBwdWxsZWQgcG9yaywgYmFjb24sIGNoZWRkYXIgY2hlZXNlLCB0b21hdG8gc2xpY2VzIGFuZCByZWQgb25pb24uXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjlcIixcclxuICAgICAgICAgICAgaW1nOiBoYW1idXJnZXIzLFxyXG4gICAgICAgICAgICBvcmRlcjogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIk91dGJyZWFrIEJ1cmdlclwiLFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50czogXCJDaWFiYXR0YSBicmVhZCwgMyBiZWVmIGJ1cmdlcnMsIGNoZWRkYXIgc3VwcmVtZSBzYXVjZSwgdG9tYXRvIHNsaWNlcywgbGV0dHVjZSBhbmQgcGlja2xlcy5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiMTVcIixcclxuICAgICAgICAgICAgaW1nOiBoYW1idXJnZXI0LFxyXG4gICAgICAgICAgICBvcmRlcjogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkxhc3QgQml0ZSBCdXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiSXRhbGlhbiBicmVhZCwgMiBiZWVmIGJ1cmdlcnMsIGNoZWRkYXIgY2hlZXNlLCBtb3p6YXJlbGxhIGNoZWVzZSwgbGV0dHVjZSBhbmQgb25pb24gcmluZ3MuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjEyXCIsXHJcbiAgICAgICAgICAgIGltZzogaGFtYnVyZ2VyNSxcclxuICAgICAgICAgICAgb3JkZXI6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJJbmZlY3RlZCBCdXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiSXRhbGlhbiBicmVhZCwgMSBiZWVmIGJ1cmdlciwgbW96emFyZWxsYSBjaGVlc2UsIHRvbWF0byBzbGljZXMgYW5kIGxldHR1Y2UuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjhcIixcclxuICAgICAgICAgICAgaW1nOiBoYW1idXJnZXI2LFxyXG4gICAgICAgICAgICBvcmRlcjogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkNsaWNrZXIgU3VycHJpc2UgQnVyZ2VyXCIsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkRhcmsgSXRhbGlhbiBicmVhZCwgMyBiZWVmIGJ1cmdlcnMsIGNoZWRkYXIgY2hlZXNlLCBmcmllZCBlZ2dzLCBhbmQgbGV0dHVjZS5cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiMTRcIixcclxuICAgICAgICAgICAgaW1nOiBoYW1idXJnZXI3LFxyXG4gICAgICAgICAgICBvcmRlcjogNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkxhc3QgSG9wZSBCdXJnZXJcIixcclxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFwiSXRhbGlhbiBicmVhZCwgMiBiZWVmIGJ1cmdlcnMsIGJhY29uLCBjaGVkZGFyIGNoZWVzZSwgbGV0dHVjZSBhbmQgcmVkIG9uaW9uLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIxMVwiLFxyXG4gICAgICAgICAgICBpbWc6IGhhbWJ1cmdlcjgsXHJcbiAgICAgICAgICAgIG9yZGVyOiA3XHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufVxyXG5cclxuXHJcbmNvbnN0IHBvcHVsYXRlRm9vZCA9ICh0eXBlLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSB7XHJcbiAgICAgICAgbmFtZTogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZm9vZHMtbmFtZScsIGBuYW1lIyR7bWVudVtgJHt0eXBlfWBdW2lkXS5vcmRlcn1gKSxcclxuICAgICAgICBpbmdyZWRpZW50czogaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnZm9vZHMtaW5ncmVkaWVudHMnLCBgaW5ncmVkaWVudHMjJHttZW51W2Ake3R5cGV9YF1baWRdLm9yZGVyfWApLFxyXG4gICAgICAgIHByaWNlOiBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdmb29kcy1wcmljZScsIGBwcmljZSMke21lbnVbYCR7dHlwZX1gXVtpZF0ub3JkZXJ9YCksXHJcbiAgICAgICAgaW1nOiBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaW1nJywgJ2Zvb2RzLWltYWdlJywgYGltYWdlIyR7bWVudVtgJHt0eXBlfWBdW2lkXS5vcmRlcn1gKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRvbUVsZW1lbnRzXHJcbn1cclxuXHJcbmNvbnN0IGdlbmVyYXRlTWVudUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ21haW5Db250ZW50JylcclxuICAgIGNvbnN0IG1haW5NZW51Q29udGVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdtYWluJywgJ21haW4tbWVudS1jb250ZW50JywgJ21haW5NZW51Q29udGVudCcpXHJcbiAgICBjb25zdCBtZW51VGl0bGUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdtZW51LXRpdGxlJywgJ21lbnVUaXRsZScpXHJcbiAgICBjb25zdCBkZXNzZXJ0c0NvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2Rlc3NlcnQtY29udGVudCcsICdkZXNzZXJ0Q29udGVudCcpXHJcbiAgICBjb25zdCBkZXNzZXJ0Q29udGFpbmVyT25lID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdkZXNzZXJ0LWNvbnRhaW5lcicsICdkZXNzZXJ0Q29udGFpbmVyT25lJylcclxuICAgIGNvbnN0IGRlc3NlcnRDb250YWluZXJUd28gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2Rlc3NlcnQtY29udGFpbmVyJywgJ2Rlc3NlcnRDb250YWluZXJUd28nKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRlbnQnLCAnaGFtYnVyZ2VyQ29udGVudCcpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJPbmUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyT25lJylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lclR3byA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRhaW5lcicsICdoYW1idXJnZXJDb250YWluZXJUd28nKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGFpbmVyVGhyZWUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyVGhyZWUnKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29udGFpbmVyRm91ciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnaGFtYnVyZ2VyLWNvbnRhaW5lcicsICdoYW1idXJnZXJDb250YWluZXJGb3VyJylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lckZpdmUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyRml2ZScpXHJcbiAgICBjb25zdCBoYW1idXJnZXJDb250YWluZXJTaXggPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2hhbWJ1cmdlci1jb250YWluZXInLCAnaGFtYnVyZ2VyQ29udGFpbmVyU2l4JylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lclNldmVuID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lclNldmVuJylcclxuICAgIGNvbnN0IGhhbWJ1cmdlckNvbnRhaW5lckVpZ3RoID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdoYW1idXJnZXItY29udGFpbmVyJywgJ2hhbWJ1cmdlckNvbnRhaW5lckVpZ3RoJylcclxuXHJcblxyXG4gICAgY29uc3QgZGVzc2VydE9uZSA9IHBvcHVsYXRlRm9vZChcImRlc3NlcnRzXCIsIDApXHJcbiAgICBjb25zdCBkZXNzZXJ0VHdvID0gcG9wdWxhdGVGb29kKFwiZGVzc2VydHNcIiwgMSlcclxuXHJcbiAgICBjb25zdCBoYW1idXJndWVyT25lID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgMClcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJUd28gPSBwb3B1bGF0ZUZvb2QoXCJoYW1idXJndWVyc1wiLCAxKVxyXG4gICAgY29uc3QgaGFtYnVyZ3VlclRocmVlID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgMilcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJGb3VyID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgMylcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJGaXZlID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgNClcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJTaXggPSBwb3B1bGF0ZUZvb2QoXCJoYW1idXJndWVyc1wiLCA1KVxyXG4gICAgY29uc3QgaGFtYnVyZ3VlclNldmVuID0gcG9wdWxhdGVGb29kKFwiaGFtYnVyZ3VlcnNcIiwgNilcclxuICAgIGNvbnN0IGhhbWJ1cmd1ZXJFaWdodCA9IHBvcHVsYXRlRm9vZChcImhhbWJ1cmd1ZXJzXCIsIDcpXHJcblxyXG4gICAgLy8gbWFpbk1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1lbnVUaXRsZSlcclxuICAgIC8vIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdNZW51J1xyXG5cclxuICAgIC8vIG1haW5NZW51Q29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0c0NvbnRlbnQpXHJcbiAgICBkZXNzZXJ0c0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydENvbnRhaW5lck9uZSlcclxuICAgIGRlc3NlcnRzQ29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0Q29udGFpbmVyVHdvKVxyXG4gICAgLy8gaW50ZXJhY3RET00oKS5hcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudChkZXNzZXJ0Q29udGFpbmVyT25lLCBkZXNzZXJ0T25lLCBtZW51LCAnZGVzc2VydHMnLCAwKVxyXG4gICAgLy8gaW50ZXJhY3RET00oKS5hcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudChkZXNzZXJ0Q29udGFpbmVyVHdvLCBkZXNzZXJ0VHdvLCBtZW51LCAnZGVzc2VydHMnLCAxKVxyXG4gICAgbWFpbk1lbnVDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRlbnQpXHJcbiAgICBoYW1idXJnZXJDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckNvbnRhaW5lck9uZSlcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyVHdvKVxyXG4gICAgaGFtYnVyZ2VyQ29udGVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJDb250YWluZXJUaHJlZSlcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyRm91cilcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyRml2ZSlcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyU2l4KVxyXG4gICAgaGFtYnVyZ2VyQ29udGVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJDb250YWluZXJTZXZlbilcclxuICAgIGhhbWJ1cmdlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQ29udGFpbmVyRWlndGgpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJPbmUsIGhhbWJ1cmd1ZXJPbmUsIG1lbnUsICdoYW1idXJndWVycycsIDApXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJUd28sIGhhbWJ1cmd1ZXJUd28sIG1lbnUsICdoYW1idXJndWVycycsIDEpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJUaHJlZSwgaGFtYnVyZ3VlclRocmVlLCBtZW51LCAnaGFtYnVyZ3VlcnMnLCAyKVxyXG4gICAgaW50ZXJhY3RET00oKS5hcHBlbmRNZW51RWxlbWVudEFuZERlZmluZUNvbnRlbnQoaGFtYnVyZ2VyQ29udGFpbmVyRm91ciwgaGFtYnVyZ3VlckZvdXIsIG1lbnUsICdoYW1idXJndWVycycsIDMpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJGaXZlLCBoYW1idXJndWVyRml2ZSwgbWVudSwgJ2hhbWJ1cmd1ZXJzJywgNClcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lclNpeCwgaGFtYnVyZ3VlclNpeCwgbWVudSwgJ2hhbWJ1cmd1ZXJzJywgNSlcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kTWVudUVsZW1lbnRBbmREZWZpbmVDb250ZW50KGhhbWJ1cmdlckNvbnRhaW5lclNldmVuLCBoYW1idXJndWVyU2V2ZW4sIG1lbnUsICdoYW1idXJndWVycycsIDYpXHJcbiAgICBpbnRlcmFjdERPTSgpLmFwcGVuZE1lbnVFbGVtZW50QW5kRGVmaW5lQ29udGVudChoYW1idXJnZXJDb250YWluZXJFaWd0aCwgaGFtYnVyZ3VlckVpZ2h0LCBtZW51LCAnaGFtYnVyZ3VlcnMnLCA3KVxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbk1lbnVDb250ZW50KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZU1lbnVDb250ZW50IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3QtZG9tXCJcclxuaW1wb3J0IGdlbmVyYXRlSG9tZXBhZ2UgZnJvbSBcIi4vaG9tZVwiXHJcbmltcG9ydCBnZW5lcmF0ZU1lbnVDb250ZW50IGZyb20gXCIuL21lbnVcIlxyXG5pbXBvcnQgZ2VuZXJhdGVDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0XCJcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBnZW5lcmF0ZUhlYWRlciA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdoZWFkZXInLCAnbWFpbi1oZWFkZXInLCAnbWFpbkhlYWRlcicpXHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ21haW5Db250ZW50JylcclxuXHJcbiAgICBjb25zdCByZXN0YXVyYW50VGl0bGUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ3Jlc3RhdXJhbnQtdGl0bGUnLCAncmVzdGF1cmFudFRpdGxlJylcclxuICAgIHJlc3RhdXJhbnRUaXRsZS50ZXh0Q29udGVudCA9ICdUaGUgTGFzdCBCaXRlJ1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2J1dHRvbnMtY29udGFpbmVyJywgJ2J1dHRvbnNDb250YWluZXInKVxyXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnaG9tZS1wYWdlJywgJ2hvbWVQYWdlJylcclxuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSdcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ21lbnUtcGFnZScsICdtZW51UGFnZScpXHJcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnXHJcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdjb250YWN0LXBhZ2UnLCAnY29udGFjdFBhZ2UnKVxyXG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0J1xyXG5cclxuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFRpdGxlKVxyXG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKVxyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQnV0dG9uKVxyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKVxyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkhlYWRlcilcclxuICAgIHJldHVybiB7IGhvbWVCdXR0b24sIG1lbnVCdXR0b24sIGNvbnRhY3RCdXR0b24sIG1haW5Db250ZW50IH1cclxufSkoKVxyXG5cclxuY29uc3QgZ2VuZXJhdGVGb290ZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1haW5Gb290ZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZm9vdGVyJywgJ2Zvb3RlcicsICdmb290ZXInKVxyXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2Zvb3Rlci10ZXh0JywgJ2Zvb3RlclRleHQnKVxyXG4gICAgY29uc3QgZm9vdGVyTGluayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdhJywgJ2ZhLWJyYW5kcycsICdmb290ZXJMaW5rJylcclxuICAgIGZvb3RlckxpbmsuY2xhc3NMaXN0LmFkZCgnZmEtZ2l0aHViJylcclxuICAgIGZvb3RlckxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vcm1hdGhyJ1xyXG5cclxuICAgIG1haW5Gb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dClcclxuICAgIG1haW5Gb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluaylcclxuXHJcbiAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gJ3JtYXRowqknXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluRm9vdGVyKVxyXG59KSgpXHJcblxyXG5cclxuY29uc3QgY2xlYXJET00gPSBmdW5jdGlvbigpe1xyXG4gICAgd2hpbGUgKGdlbmVyYXRlSGVhZGVyLm1haW5Db250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgIGdlbmVyYXRlSGVhZGVyLm1haW5Db250ZW50LnJlbW92ZUNoaWxkKGdlbmVyYXRlSGVhZGVyLm1haW5Db250ZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbmdlbmVyYXRlSGVhZGVyLmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY2xlYXJET00oKVxyXG4gICAgZ2VuZXJhdGVIZWFkZXIuY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tY2xpY2tlZCcpXHJcbiAgICBnZW5lcmF0ZUhlYWRlci5tZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbi1jbGlja2VkJylcclxuICAgIGdlbmVyYXRlSGVhZGVyLmhvbWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLWNsaWNrZWQnKVxyXG4gICAgZ2VuZXJhdGVDb250YWN0UGFnZSgpXHJcbn0pXHJcblxyXG5nZW5lcmF0ZUhlYWRlci5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY2xlYXJET00oKVxyXG4gICAgZ2VuZXJhdGVIZWFkZXIuY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b24tY2xpY2tlZCcpXHJcbiAgICBnZW5lcmF0ZUhlYWRlci5tZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1jbGlja2VkJylcclxuICAgIGdlbmVyYXRlSGVhZGVyLmhvbWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLWNsaWNrZWQnKVxyXG4gICAgZ2VuZXJhdGVNZW51Q29udGVudCgpXHJcbn0pXHJcblxyXG5nZW5lcmF0ZUhlYWRlci5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNsZWFyRE9NKClcclxuICAgIGdlbmVyYXRlSGVhZGVyLmNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLWNsaWNrZWQnKVxyXG4gICAgZ2VuZXJhdGVIZWFkZXIubWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b24tY2xpY2tlZCcpXHJcbiAgICBnZW5lcmF0ZUhlYWRlci5ob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1jbGlja2VkJylcclxuICAgIGdlbmVyYXRlSG9tZXBhZ2UoKVxyXG59KVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=