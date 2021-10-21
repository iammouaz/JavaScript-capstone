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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bg-dark {\r\n  padding: 10px;\r\n  padding-left: 68px;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.nav-link {\r\n  cursor: pointer;\r\n}\r\n\r\ni {\r\n  color: red;\r\n}\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\nh3 {\r\n  padding: 0 16px;\r\n}\r\n\r\nform {\r\n  padding: 0 16px;\r\n}\r\n\r\n#btnComment {\r\n  margin: 0 auto;\r\n}\r\n\r\n.show {\r\n  display: block !important;\r\n  animation: slide-down 0.8s ease-out;\r\n}\r\n\r\n@keyframes slide-down {\r\n  0% { opacity: 0; }\r\n  0% { transform: translateY(100%); }\r\n  100% { opacity: 1; }\r\n  100% { transform: translateY(0); }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,mCAAmC;AACrC;;AAEA;EACE,KAAK,UAAU,EAAE;EACjB,KAAK,2BAA2B,EAAE;EAClC,OAAO,UAAU,EAAE;EACnB,OAAO,wBAAwB,EAAE;AACnC","sourcesContent":[".bg-dark {\r\n  padding: 10px;\r\n  padding-left: 68px;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.nav-link {\r\n  cursor: pointer;\r\n}\r\n\r\ni {\r\n  color: red;\r\n}\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\nh3 {\r\n  padding: 0 16px;\r\n}\r\n\r\nform {\r\n  padding: 0 16px;\r\n}\r\n\r\n#btnComment {\r\n  margin: 0 auto;\r\n}\r\n\r\n.show {\r\n  display: block !important;\r\n  animation: slide-down 0.8s ease-out;\r\n}\r\n\r\n@keyframes slide-down {\r\n  0% { opacity: 0; }\r\n  0% { transform: translateY(100%); }\r\n  100% { opacity: 1; }\r\n  100% { transform: translateY(0); }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/GenresShow.js":
/*!***************************!*\
  !*** ./src/GenresShow.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideAction": () => (/* binding */ HideAction),
/* harmony export */   "HideHorror": () => (/* binding */ HideHorror),
/* harmony export */   "HideDrama": () => (/* binding */ HideDrama)
/* harmony export */ });
const HideAction = () => {
  const DramaDiv = document.querySelectorAll('#Drama');
  const HorrorDiv = document.querySelectorAll('#Horror');
  const ActionDiv = document.querySelectorAll('#Action');
  for (let i = 0; i < DramaDiv.length; i += 1) {
    DramaDiv[i].classList.add('hide');
    DramaDiv[i].classList.remove('show');
  }
  for (let i = 0; i < HorrorDiv.length; i += 1) {
    HorrorDiv[i].classList.add('hide');
    HorrorDiv[i].classList.remove('show');
  }
  for (let i = 0; i < ActionDiv.length; i += 1) {
    ActionDiv[i].classList.add('show');
  }
};

const HideDrama = () => {
  const DramaDiv = document.querySelectorAll('#Drama');
  const HorrorDiv = document.querySelectorAll('#Horror');
  const ActionDiv = document.querySelectorAll('#Action');
  for (let i = 0; i < ActionDiv.length; i += 1) {
    ActionDiv[i].classList.add('hide');
    ActionDiv[i].classList.remove('show');
  }
  for (let i = 0; i < HorrorDiv.length; i += 1) {
    HorrorDiv[i].classList.add('hide');
    HorrorDiv[i].classList.remove('show');
  }
  for (let i = 0; i < DramaDiv.length; i += 1) {
    DramaDiv[i].classList.add('show');
  }
};

const HideHorror = () => {
  const DramaDiv = document.querySelectorAll('#Drama');
  const HorrorDiv = document.querySelectorAll('#Horror');
  const ActionDiv = document.querySelectorAll('#Action');
  for (let i = 0; i < ActionDiv.length; i += 1) {
    ActionDiv[i].classList.add('hide');
    ActionDiv[i].classList.remove('show');
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < DramaDiv.length; i += 1) {
    DramaDiv[i].classList.add('hide');
    DramaDiv[i].classList.remove('show');
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < HorrorDiv.length; i += 1) {
    HorrorDiv[i].classList.add('show');
  }
};



/***/ }),

/***/ "./src/Showscounter.js":
/*!*****************************!*\
  !*** ./src/Showscounter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionCount": () => (/* binding */ ActionCount),
/* harmony export */   "CounterMovies": () => (/* binding */ CounterMovies)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
const ActionCount = (Genres, ID) => {
  const GenresID = document.querySelectorAll(Genres);
  const id = document.getElementById(ID);
  id.innerHTML += `(${GenresID.length})`;
  return GenresID.length;
};

const CounterMovies = (e) => e.length;


/***/ }),

/***/ "./src/addlikes.js":
/*!*************************!*\
  !*** ./src/addlikes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewLike": () => (/* binding */ AddNewLike),
/* harmony export */   "listenLikes": () => (/* binding */ listenLikes)
/* harmony export */ });
/* harmony import */ var _getlikes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getlikes */ "./src/getlikes.js");


const AddNewLike = (ItemN) => {
  fetch(`${_getlikes__WEBPACK_IMPORTED_MODULE_0__.api}/likes/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `item${ItemN}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.text());
};

const listenLikes = (LikeItems, api) => {
  let ButtonL;
  let likeText;
  LikeItems.forEach((element, i) => {
    ButtonL = document.getElementById(`btnLike-${i}`);
    ButtonL.addEventListener('click', () => {
      AddNewLike(i, api);
      likeText = document.getElementById(`like-${i}`);
      likeText.removeChild(likeText.firstChild);
      likeText.appendChild(document.createTextNode(`${LikeItems[i] + 1} likes`));
    });
  });
};



/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getShowById": () => (/* binding */ getShowById),
/* harmony export */   "loadShows": () => (/* binding */ loadShows)
/* harmony export */ });
/* harmony import */ var _getlikes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getlikes */ "./src/getlikes.js");
/* harmony import */ var _addlikes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addlikes */ "./src/addlikes.js");
/* harmony import */ var _commenthundler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commenthundler */ "./src/commenthundler.js");




const getShowById = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  return response.json();
};

const createCard = (obj, counter, like) => {
  const data = `
    <div id="${obj.genres[0]}" class="col card">
      <div class="card">
        <img src="${obj.image.medium}" class="card-img-top img-fluid" alt="Poster of ${obj.name}">
        <div class="card-body">
          <div class="d-flex flex-row justify-content-between align-items-center">
            <h5 class="card-title">${obj.name}</h5>
            <div id="btnLike-${counter}" class="pointer">          
              <i  class="fa-regular fa-heart" "></i>          
              <span id="like-${counter}">${like} likes</span>
            </div>
          </div>
          <button id="btn${counter}" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#mainModal" onclick="FullUpcomments(${counter}, 'AL2jTAMSIJwCzRL3ICg2');mainModal.classList.add('show')">
            Comments
          </button>
        </div>
      </div>
    </div>
    `;
  return data;
};

// eslint-disable-next-line import/no-mutable-exports
let showsArr = [];

const createAlbum = async (arr, main, api) => {
  const container = document.createElement('div');
  container.className = 'container';
  const div = document.createElement('div');
  div.className = 'row row-cols-1 row-cols-md-4 g-4';
  container.appendChild(div);
  const likeList = await (0,_getlikes__WEBPACK_IMPORTED_MODULE_0__.like)(arr.length, api);
  let counter = 0;
  arr.forEach((a) => {
    div.innerHTML += createCard(a, counter, likeList[counter], api);
    counter += 1;
  });
  main.append(container);
  (0,_addlikes__WEBPACK_IMPORTED_MODULE_1__.listenLikes)(likeList, api);
};

const loadShows = async (type, main, api) => {
  showsArr = [];
  type.forEach((id) => {
    showsArr.push(getShowById(id));
  });
  return createAlbum(await Promise.all(showsArr), main, api);
};

window.FullUpcomments = (id, api) => {
  const mainModal = document.getElementById('mainModal');
  showsArr[id].then((show) => {
    mainModal.innerHTML = `
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="mainModalLabel">${show.name}</h5>
          <button onclick="mainModal.classList.remove('show')" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="${show.image.medium}" class="mx-auto d-block">
          ${show.summary}
        </div>
        <div id="comments">
          <h3 id="commentHeader">Comments </h2>
          <ul id="commentList" class="list-group-flush ps-0">
          </ul>
        </div>
        <h3>Add a new comment</h2>
        <form>
        <div id="newComment" class="d-flex flex-column form-group">
          <input id="username" type="text" class="my-2 form-control" placeholder="Your name">
          <textarea id="comment" class="my-2 form-control" placeholder="Your insights" rows="3"></textarea>
          <button id="btnComment" type="button" class="my-2 btn btn-primary" onclick="addNewComment(${id}, '${api}')">Comment</button>
        </div>
        </form>
        <div class="modal-footer">
          <button type="button" onclick="mainModal.classList.remove('show')" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    `;
  });
  setTimeout(() => { (0,_commenthundler__WEBPACK_IMPORTED_MODULE_2__.loadComments)(id); }, 1000);
};


/***/ }),

/***/ "./src/commenthundler.js":
/*!*******************************!*\
  !*** ./src/commenthundler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCounter": () => (/* binding */ getCounter),
/* harmony export */   "loadAllComments": () => (/* binding */ loadAllComments),
/* harmony export */   "loadComments": () => (/* binding */ loadComments)
/* harmony export */ });
const getCounter = (ar) => ar.length;

const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const get = '/comments?item_id=';
const post = '/comments/';

const getComments = async (itemID, id) => {
  const response = await fetch(api + id + get + itemID);
  return response.json();
};

const addComment = async (itemID, user, text, id) => {
  await fetch(api + id + post, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemID,
      username: user,
      comment: text,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return 0;
};

let comments = [];

const loadAllComments = async (api, size) => {
  comments = [];
  for (let i = 0; i < size; i += 1) {
    comments.push(getComments(`${i}`, api));
  }
  Promise.all(comments).then((result) => { comments = result; });
};

const createLi = (username, comment, date) => {
  const li = `
  <li class="list-group-item">${date}<strong> ${username} says: </strong>${comment}</li>
  `;
  return li;
};

const setNumberComments = (id) => {
  const commentHeader = document.getElementById('commentHeader');
  commentHeader.innerText = `Comments (${getCounter(comments[id])})`;
};

const loadComments = (id) => {
  const commentList = document.getElementById('commentList');
  if (Promise.resolve(comments[id]) === comments[id]) {
    comments[id].then((result) => {
      result.forEach((e) => {
        commentList.innerHTML += createLi(e.username, e.comment, e.creation_date);
      });
    });
  } else {
    comments[id].forEach((e) => {
      commentList.innerHTML += createLi(e.username, e.comment, e.creation_date);
    });
  }
  setNumberComments(id);
};

window.addNewComment = (id, api) => {
  const commentList = document.getElementById('commentList');
  const nameField = document.getElementById('username');
  const commentField = document.getElementById('comment');
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  commentList.innerHTML += createLi(nameField.value, commentField.value, date);
  addComment(id, nameField.value, commentField.value, api);
  comments[id].push({
    username: nameField.value,
    comment: commentField.value,
    creation_date: date,
  });
  nameField.value = '';
  commentField.value = '';
};


/***/ }),

/***/ "./src/getlikes.js":
/*!*************************!*\
  !*** ./src/getlikes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api),
/* harmony export */   "like": () => (/* binding */ like)
/* harmony export */ });
const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AL2jTAMSIJwCzRL3ICg2';

const PutLikes = async (total) => fetch(`${api}/likes/`)
  .then((response) => response.json())
  .then((likes) => likes).catch(() => {
    const Arrays = [];
    for (let i = 0; i < total; i += 1) {
      Arrays.push(0);
    }
    return Arrays;
  });

const like = async (total, api) => {
  const likeList = await PutLikes(total, api);
  const ListLike = [];
  let index = -1;
  for (let i = 0; i < total; i += 1) {
    index = likeList.findIndex((item) => item.item_id === `item${i}`);
    if (index !== -1) {
      ListLike.push(likeList[index].likes);
    } else {
      ListLike.push(0);
    }
  }
  return ListLike;
};



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _GenresShow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GenresShow */ "./src/GenresShow.js");
/* harmony import */ var _commenthundler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commenthundler */ "./src/commenthundler.js");
/* harmony import */ var _Showscounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Showscounter */ "./src/Showscounter.js");






const API = ['AL2jTAMSIJwCzRL3ICg2'];
const ShowTV = document.getElementById('ShowTV');
const Shows = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '18', '105', '31', '1824', '73', '38764', '7019'];
const DramaSH = document.getElementById('showDrama');
const HorrorSH = document.getElementById('horrorShow');
const ActiveSh = document.getElementById('actionShow');

_api__WEBPACK_IMPORTED_MODULE_1__.loadShows(Shows, ShowTV);
(0,_commenthundler__WEBPACK_IMPORTED_MODULE_3__.loadAllComments)(API, Shows.length);
ActiveSh.addEventListener('click', _GenresShow__WEBPACK_IMPORTED_MODULE_2__.HideAction);
DramaSH.addEventListener('click', _GenresShow__WEBPACK_IMPORTED_MODULE_2__.HideDrama);
HorrorSH.addEventListener('click', _GenresShow__WEBPACK_IMPORTED_MODULE_2__.HideHorror);

const comments = `
<div class="modal fade" id="mainModal" tabindex="-1" aria-labelledby="mainModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mainModalLabel">Show name</h5>
        <button  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
      </div>
      <div class="modal-body">
        Image and Summary
      </div>
      <div id="comments">
        <h2>Comments</h2>
        <ul id="commentList" class="list-group-flush ps-0">
        </ul>
      </div>
      <div id="newComment" class="d-flex flex-column">
        <h2>Add a comment</h2>
        <input id="username" type="text" class="my-2 form-control" placeholder="Your name">
        <textarea id="comment" class="my-2 form-control" placeholder="Your insights" rows="3"></textarea>
        <button id="btnComment" class="my-2 btn btn-secondary">Comment</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;

ShowTV.insertAdjacentHTML('beforeend', comments);

setTimeout(() => { _Showscounter__WEBPACK_IMPORTED_MODULE_4__.ActionCount('#Action', 'actionShow'); }, 2000);
setTimeout(() => { _Showscounter__WEBPACK_IMPORTED_MODULE_4__.ActionCount('#Horror', 'horrorShow'); }, 2000);
setTimeout(() => { _Showscounter__WEBPACK_IMPORTED_MODULE_4__.ActionCount('#Drama', 'showDrama'); }, 2000);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNhO0FBQytCO0FBQ2Q7QUFDWDs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUFrQjtBQUNsQixnRUFBZTtBQUNmLG1DQUFtQyxtREFBVTtBQUM3QyxrQ0FBa0Msa0RBQVM7QUFDM0MsbUNBQW1DLG1EQUFVOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixzREFBaUIsNEJBQTRCO0FBQ2hFLG1CQUFtQixzREFBaUIsNEJBQTRCO0FBQ2hFLG1CQUFtQixzREFBaUIsMEJBQTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL0dlbnJlc1Nob3cuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9TaG93c2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9hZGRsaWtlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2NvbW1lbnRodW5kbGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvZ2V0bGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5iZy1kYXJrIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDY4cHg7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvaW50ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgcGFkZGluZzogMCAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuQ29tbWVudCB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNob3cge1xcclxcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXHJcXG4gIGFuaW1hdGlvbjogc2xpZGUtZG93biAwLjhzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLWRvd24ge1xcclxcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxyXFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTsgfVxcclxcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXHJcXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxLQUFLLFVBQVUsRUFBRTtFQUNqQixLQUFLLDJCQUEyQixFQUFFO0VBQ2xDLE9BQU8sVUFBVSxFQUFFO0VBQ25CLE9BQU8sd0JBQXdCLEVBQUU7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJnLWRhcmsge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9pbnRlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIHBhZGRpbmc6IDAgMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxufVxcclxcblxcclxcbiNidG5Db21tZW50IHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcclxcbiAgYW5pbWF0aW9uOiBzbGlkZS1kb3duIDAuOHMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtZG93biB7XFxyXFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXHJcXG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpOyB9XFxyXFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcclxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgSGlkZUFjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgRHJhbWFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjRHJhbWEnKTtcbiAgY29uc3QgSG9ycm9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI0hvcnJvcicpO1xuICBjb25zdCBBY3Rpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjQWN0aW9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgRHJhbWFEaXYubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBEcmFtYURpdltpXS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgRHJhbWFEaXZbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgSG9ycm9yRGl2Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgSG9ycm9yRGl2W2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBIb3Jyb3JEaXZbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgQWN0aW9uRGl2Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgQWN0aW9uRGl2W2ldLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgfVxufTtcblxuY29uc3QgSGlkZURyYW1hID0gKCkgPT4ge1xuICBjb25zdCBEcmFtYURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNEcmFtYScpO1xuICBjb25zdCBIb3Jyb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjSG9ycm9yJyk7XG4gIGNvbnN0IEFjdGlvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNBY3Rpb24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBBY3Rpb25EaXYubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBBY3Rpb25EaXZbaV0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIEFjdGlvbkRpdltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBIb3Jyb3JEaXYubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBIb3Jyb3JEaXZbaV0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIEhvcnJvckRpdltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBEcmFtYURpdi5sZW5ndGg7IGkgKz0gMSkge1xuICAgIERyYW1hRGl2W2ldLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgfVxufTtcblxuY29uc3QgSGlkZUhvcnJvciA9ICgpID0+IHtcbiAgY29uc3QgRHJhbWFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjRHJhbWEnKTtcbiAgY29uc3QgSG9ycm9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI0hvcnJvcicpO1xuICBjb25zdCBBY3Rpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjQWN0aW9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgQWN0aW9uRGl2Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgQWN0aW9uRGl2W2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBBY3Rpb25EaXZbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IERyYW1hRGl2Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgRHJhbWFEaXZbaV0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIERyYW1hRGl2W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBIb3Jyb3JEaXYubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBIb3Jyb3JEaXZbaV0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICB9XG59O1xuXG5leHBvcnQgeyBIaWRlQWN0aW9uLCBIaWRlSG9ycm9yLCBIaWRlRHJhbWEgfTsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IEFjdGlvbkNvdW50ID0gKEdlbnJlcywgSUQpID0+IHtcbiAgY29uc3QgR2VucmVzSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKEdlbnJlcyk7XG4gIGNvbnN0IGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSUQpO1xuICBpZC5pbm5lckhUTUwgKz0gYCgke0dlbnJlc0lELmxlbmd0aH0pYDtcbiAgcmV0dXJuIEdlbnJlc0lELmxlbmd0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBDb3VudGVyTW92aWVzID0gKGUpID0+IGUubGVuZ3RoO1xuIiwiaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi9nZXRsaWtlcyc7XG5cbmNvbnN0IEFkZE5ld0xpa2UgPSAoSXRlbU4pID0+IHtcbiAgZmV0Y2goYCR7YXBpfS9saWtlcy9gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogYGl0ZW0ke0l0ZW1OfWAsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKTtcbn07XG5cbmNvbnN0IGxpc3Rlbkxpa2VzID0gKExpa2VJdGVtcywgYXBpKSA9PiB7XG4gIGxldCBCdXR0b25MO1xuICBsZXQgbGlrZVRleHQ7XG4gIExpa2VJdGVtcy5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XG4gICAgQnV0dG9uTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidG5MaWtlLSR7aX1gKTtcbiAgICBCdXR0b25MLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgQWRkTmV3TGlrZShpLCBhcGkpO1xuICAgICAgbGlrZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGlrZS0ke2l9YCk7XG4gICAgICBsaWtlVGV4dC5yZW1vdmVDaGlsZChsaWtlVGV4dC5maXJzdENoaWxkKTtcbiAgICAgIGxpa2VUZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke0xpa2VJdGVtc1tpXSArIDF9IGxpa2VzYCkpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IEFkZE5ld0xpa2UsIGxpc3Rlbkxpa2VzIH07IiwiaW1wb3J0IHsgbGlrZSB9IGZyb20gJy4vZ2V0bGlrZXMnO1xuaW1wb3J0IHsgbGlzdGVuTGlrZXMgfSBmcm9tICcuL2FkZGxpa2VzJztcbmltcG9ydCB7IGxvYWRDb21tZW50cyB9IGZyb20gJy4vY29tbWVudGh1bmRsZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0U2hvd0J5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZCA9IChvYmosIGNvdW50ZXIsIGxpa2UpID0+IHtcbiAgY29uc3QgZGF0YSA9IGBcbiAgICA8ZGl2IGlkPVwiJHtvYmouZ2VucmVzWzBdfVwiIGNsYXNzPVwiY29sIGNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtvYmouaW1hZ2UubWVkaXVtfVwiIGNsYXNzPVwiY2FyZC1pbWctdG9wIGltZy1mbHVpZFwiIGFsdD1cIlBvc3RlciBvZiAke29iai5uYW1lfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke29iai5uYW1lfTwvaDU+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYnRuTGlrZS0ke2NvdW50ZXJ9XCIgY2xhc3M9XCJwb2ludGVyXCI+ICAgICAgICAgIFxuICAgICAgICAgICAgICA8aSAgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWhlYXJ0XCIgXCI+PC9pPiAgICAgICAgICBcbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJsaWtlLSR7Y291bnRlcn1cIj4ke2xpa2V9IGxpa2VzPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImJ0biR7Y291bnRlcn1cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1icy10YXJnZXQ9XCIjbWFpbk1vZGFsXCIgb25jbGljaz1cIkZ1bGxVcGNvbW1lbnRzKCR7Y291bnRlcn0sICdBTDJqVEFNU0lKd0N6UkwzSUNnMicpO21haW5Nb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93JylcIj5cbiAgICAgICAgICAgIENvbW1lbnRzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xubGV0IHNob3dzQXJyID0gW107XG5cbmNvbnN0IGNyZWF0ZUFsYnVtID0gYXN5bmMgKGFyciwgbWFpbiwgYXBpKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NOYW1lID0gJ3JvdyByb3ctY29scy0xIHJvdy1jb2xzLW1kLTQgZy00JztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIGNvbnN0IGxpa2VMaXN0ID0gYXdhaXQgbGlrZShhcnIubGVuZ3RoLCBhcGkpO1xuICBsZXQgY291bnRlciA9IDA7XG4gIGFyci5mb3JFYWNoKChhKSA9PiB7XG4gICAgZGl2LmlubmVySFRNTCArPSBjcmVhdGVDYXJkKGEsIGNvdW50ZXIsIGxpa2VMaXN0W2NvdW50ZXJdLCBhcGkpO1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgfSk7XG4gIG1haW4uYXBwZW5kKGNvbnRhaW5lcik7XG4gIGxpc3Rlbkxpa2VzKGxpa2VMaXN0LCBhcGkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRTaG93cyA9IGFzeW5jICh0eXBlLCBtYWluLCBhcGkpID0+IHtcbiAgc2hvd3NBcnIgPSBbXTtcbiAgdHlwZS5mb3JFYWNoKChpZCkgPT4ge1xuICAgIHNob3dzQXJyLnB1c2goZ2V0U2hvd0J5SWQoaWQpKTtcbiAgfSk7XG4gIHJldHVybiBjcmVhdGVBbGJ1bShhd2FpdCBQcm9taXNlLmFsbChzaG93c0FyciksIG1haW4sIGFwaSk7XG59O1xuXG53aW5kb3cuRnVsbFVwY29tbWVudHMgPSAoaWQsIGFwaSkgPT4ge1xuICBjb25zdCBtYWluTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1vZGFsJyk7XG4gIHNob3dzQXJyW2lkXS50aGVuKChzaG93KSA9PiB7XG4gICAgbWFpbk1vZGFsLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cIm1haW5Nb2RhbExhYmVsXCI+JHtzaG93Lm5hbWV9PC9oNT5cbiAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke3Nob3cuaW1hZ2UubWVkaXVtfVwiIGNsYXNzPVwibXgtYXV0byBkLWJsb2NrXCI+XG4gICAgICAgICAgJHtzaG93LnN1bW1hcnl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiY29tbWVudHNcIj5cbiAgICAgICAgICA8aDMgaWQ9XCJjb21tZW50SGVhZGVyXCI+Q29tbWVudHMgPC9oMj5cbiAgICAgICAgICA8dWwgaWQ9XCJjb21tZW50TGlzdFwiIGNsYXNzPVwibGlzdC1ncm91cC1mbHVzaCBwcy0wXCI+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMz5BZGQgYSBuZXcgY29tbWVudDwvaDI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICA8ZGl2IGlkPVwibmV3Q29tbWVudFwiIGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJteS0yIGZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCI+XG4gICAgICAgICAgPHRleHRhcmVhIGlkPVwiY29tbWVudFwiIGNsYXNzPVwibXktMiBmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIiByb3dzPVwiM1wiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bkNvbW1lbnRcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJteS0yIGJ0biBidG4tcHJpbWFyeVwiIG9uY2xpY2s9XCJhZGROZXdDb21tZW50KCR7aWR9LCAnJHthcGl9JylcIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPVwibWFpbk1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfSk7XG4gIHNldFRpbWVvdXQoKCkgPT4geyBsb2FkQ29tbWVudHMoaWQpOyB9LCAxMDAwKTtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0Q291bnRlciA9IChhcikgPT4gYXIubGVuZ3RoO1xuXG5jb25zdCBhcGkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IGdldCA9ICcvY29tbWVudHM/aXRlbV9pZD0nO1xuY29uc3QgcG9zdCA9ICcvY29tbWVudHMvJztcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaXRlbUlELCBpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaSArIGlkICsgZ2V0ICsgaXRlbUlEKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoaXRlbUlELCB1c2VyLCB0ZXh0LCBpZCkgPT4ge1xuICBhd2FpdCBmZXRjaChhcGkgKyBpZCArIHBvc3QsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpdGVtSUQsXG4gICAgICB1c2VybmFtZTogdXNlcixcbiAgICAgIGNvbW1lbnQ6IHRleHQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIDA7XG59O1xuXG5sZXQgY29tbWVudHMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IGxvYWRBbGxDb21tZW50cyA9IGFzeW5jIChhcGksIHNpemUpID0+IHtcbiAgY29tbWVudHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpICs9IDEpIHtcbiAgICBjb21tZW50cy5wdXNoKGdldENvbW1lbnRzKGAke2l9YCwgYXBpKSk7XG4gIH1cbiAgUHJvbWlzZS5hbGwoY29tbWVudHMpLnRoZW4oKHJlc3VsdCkgPT4geyBjb21tZW50cyA9IHJlc3VsdDsgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVMaSA9ICh1c2VybmFtZSwgY29tbWVudCwgZGF0ZSkgPT4ge1xuICBjb25zdCBsaSA9IGBcbiAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+JHtkYXRlfTxzdHJvbmc+ICR7dXNlcm5hbWV9IHNheXM6IDwvc3Ryb25nPiR7Y29tbWVudH08L2xpPlxuICBgO1xuICByZXR1cm4gbGk7XG59O1xuXG5jb25zdCBzZXROdW1iZXJDb21tZW50cyA9IChpZCkgPT4ge1xuICBjb25zdCBjb21tZW50SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRIZWFkZXInKTtcbiAgY29tbWVudEhlYWRlci5pbm5lclRleHQgPSBgQ29tbWVudHMgKCR7Z2V0Q291bnRlcihjb21tZW50c1tpZF0pfSlgO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRDb21tZW50cyA9IChpZCkgPT4ge1xuICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50TGlzdCcpO1xuICBpZiAoUHJvbWlzZS5yZXNvbHZlKGNvbW1lbnRzW2lkXSkgPT09IGNvbW1lbnRzW2lkXSkge1xuICAgIGNvbW1lbnRzW2lkXS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHJlc3VsdC5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCArPSBjcmVhdGVMaShlLnVzZXJuYW1lLCBlLmNvbW1lbnQsIGUuY3JlYXRpb25fZGF0ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb21tZW50c1tpZF0uZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29tbWVudExpc3QuaW5uZXJIVE1MICs9IGNyZWF0ZUxpKGUudXNlcm5hbWUsIGUuY29tbWVudCwgZS5jcmVhdGlvbl9kYXRlKTtcbiAgICB9KTtcbiAgfVxuICBzZXROdW1iZXJDb21tZW50cyhpZCk7XG59O1xuXG53aW5kb3cuYWRkTmV3Q29tbWVudCA9IChpZCwgYXBpKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRMaXN0Jyk7XG4gIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpO1xuICBjb25zdCBjb21tZW50RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudCcpO1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRhdGUgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpfS0ke3RvZGF5LmdldE1vbnRoKCkgKyAxfS0ke3RvZGF5LmdldERhdGUoKX1gO1xuICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gY3JlYXRlTGkobmFtZUZpZWxkLnZhbHVlLCBjb21tZW50RmllbGQudmFsdWUsIGRhdGUpO1xuICBhZGRDb21tZW50KGlkLCBuYW1lRmllbGQudmFsdWUsIGNvbW1lbnRGaWVsZC52YWx1ZSwgYXBpKTtcbiAgY29tbWVudHNbaWRdLnB1c2goe1xuICAgIHVzZXJuYW1lOiBuYW1lRmllbGQudmFsdWUsXG4gICAgY29tbWVudDogY29tbWVudEZpZWxkLnZhbHVlLFxuICAgIGNyZWF0aW9uX2RhdGU6IGRhdGUsXG4gIH0pO1xuICBuYW1lRmllbGQudmFsdWUgPSAnJztcbiAgY29tbWVudEZpZWxkLnZhbHVlID0gJyc7XG59O1xuIiwiY29uc3QgYXBpID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0FMMmpUQU1TSUp3Q3pSTDNJQ2cyJztcblxuY29uc3QgUHV0TGlrZXMgPSBhc3luYyAodG90YWwpID0+IGZldGNoKGAke2FwaX0vbGlrZXMvYClcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuKChsaWtlcykgPT4gbGlrZXMpLmNhdGNoKCgpID0+IHtcbiAgICBjb25zdCBBcnJheXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsOyBpICs9IDEpIHtcbiAgICAgIEFycmF5cy5wdXNoKDApO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXlzO1xuICB9KTtcblxuY29uc3QgbGlrZSA9IGFzeW5jICh0b3RhbCwgYXBpKSA9PiB7XG4gIGNvbnN0IGxpa2VMaXN0ID0gYXdhaXQgUHV0TGlrZXModG90YWwsIGFwaSk7XG4gIGNvbnN0IExpc3RMaWtlID0gW107XG4gIGxldCBpbmRleCA9IC0xO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsOyBpICs9IDEpIHtcbiAgICBpbmRleCA9IGxpa2VMaXN0LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkID09PSBgaXRlbSR7aX1gKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBMaXN0TGlrZS5wdXNoKGxpa2VMaXN0W2luZGV4XS5saWtlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExpc3RMaWtlLnB1c2goMCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBMaXN0TGlrZTtcbn07XG5cbmV4cG9ydCB7IGFwaSwgbGlrZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIG15TW9kdWxlIGZyb20gJy4vYXBpJztcbmltcG9ydCB7IEhpZGVBY3Rpb24sIEhpZGVIb3Jyb3IsIEhpZGVEcmFtYSB9IGZyb20gJy4vR2VucmVzU2hvdyc7XG5pbXBvcnQgeyBsb2FkQWxsQ29tbWVudHMgfSBmcm9tICcuL2NvbW1lbnRodW5kbGVyJztcbmltcG9ydCAqIGFzIENvdW50IGZyb20gJy4vU2hvd3Njb3VudGVyJztcblxuY29uc3QgQVBJID0gWydBTDJqVEFNU0lKd0N6UkwzSUNnMiddO1xuY29uc3QgU2hvd1RWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Nob3dUVicpO1xuY29uc3QgU2hvd3MgPSBbJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsICcxOCcsICcxMDUnLCAnMzEnLCAnMTgyNCcsICc3MycsICczODc2NCcsICc3MDE5J107XG5jb25zdCBEcmFtYVNIID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dEcmFtYScpO1xuY29uc3QgSG9ycm9yU0ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9ycm9yU2hvdycpO1xuY29uc3QgQWN0aXZlU2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9uU2hvdycpO1xuXG5teU1vZHVsZS5sb2FkU2hvd3MoU2hvd3MsIFNob3dUVik7XG5sb2FkQWxsQ29tbWVudHMoQVBJLCBTaG93cy5sZW5ndGgpO1xuQWN0aXZlU2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBIaWRlQWN0aW9uKTtcbkRyYW1hU0guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBIaWRlRHJhbWEpO1xuSG9ycm9yU0guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBIaWRlSG9ycm9yKTtcblxuY29uc3QgY29tbWVudHMgPSBgXG48ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwibWFpbk1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cIm1haW5Nb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwibWFpbk1vZGFsTGFiZWxcIj5TaG93IG5hbWU8L2g1PlxuICAgICAgICA8YnV0dG9uICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiID48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgSW1hZ2UgYW5kIFN1bW1hcnlcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImNvbW1lbnRzXCI+XG4gICAgICAgIDxoMj5Db21tZW50czwvaDI+XG4gICAgICAgIDx1bCBpZD1cImNvbW1lbnRMaXN0XCIgY2xhc3M9XCJsaXN0LWdyb3VwLWZsdXNoIHBzLTBcIj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cIm5ld0NvbW1lbnRcIiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICA8aDI+QWRkIGEgY29tbWVudDwvaDI+XG4gICAgICAgIDxpbnB1dCBpZD1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cIm15LTIgZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIj5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwiY29tbWVudFwiIGNsYXNzPVwibXktMiBmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIiByb3dzPVwiM1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidG5Db21tZW50XCIgY2xhc3M9XCJteS0yIGJ0biBidG4tc2Vjb25kYXJ5XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbmA7XG5cblNob3dUVi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNvbW1lbnRzKTtcblxuc2V0VGltZW91dCgoKSA9PiB7IENvdW50LkFjdGlvbkNvdW50KCcjQWN0aW9uJywgJ2FjdGlvblNob3cnKTsgfSwgMjAwMCk7XG5zZXRUaW1lb3V0KCgpID0+IHsgQ291bnQuQWN0aW9uQ291bnQoJyNIb3Jyb3InLCAnaG9ycm9yU2hvdycpOyB9LCAyMDAwKTtcbnNldFRpbWVvdXQoKCkgPT4geyBDb3VudC5BY3Rpb25Db3VudCgnI0RyYW1hJywgJ3Nob3dEcmFtYScpOyB9LCAyMDAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==