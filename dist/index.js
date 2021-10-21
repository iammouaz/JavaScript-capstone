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
/* harmony export */   "ActionCount": () => (/* binding */ ActionCount)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
const ActionCount = (Genres, ID) => {
  const GenresID = document.querySelectorAll(Genres);
  const id = document.getElementById(ID);
  id.innerHTML += `(${GenresID.length})`;
  return GenresID.length;
};


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
  let btnLike;
  let likeText;
  LikeItems.forEach((element, i) => {
    btnLike = document.getElementById(`btnLike-${i}`);
    btnLike.addEventListener('click', () => {
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
          <button id="btn${counter}" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#mainModal" onclick="populateModal(${counter}, 'AL2jTAMSIJwCzRL3ICg2');mainModal.classList.add('show')">
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

window.populateModal = (id, api) => {
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
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    `;
  });
  setTimeout(() => { (0,_commenthundler__WEBPACK_IMPORTED_MODULE_2__.loadComments)(id); }, 100);
};


/***/ }),

/***/ "./src/commenthundler.js":
/*!*******************************!*\
  !*** ./src/commenthundler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAllComments": () => (/* binding */ loadAllComments),
/* harmony export */   "loadComments": () => (/* binding */ loadComments)
/* harmony export */ });
const getCounter = (arr) => arr.length;

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






const apiKEY = ['AL2jTAMSIJwCzRL3ICg2'];
const ShowTV = document.getElementById('ShowTV');
const Shows = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '18', '105', '31', '1824', '73', '38764', '7019'];
const DramaSH = document.getElementById('showDrama');
const HorrorSH = document.getElementById('horrorShow');
const ActiveSh = document.getElementById('actionShow');

_api__WEBPACK_IMPORTED_MODULE_1__.loadShows(Shows, ShowTV);
(0,_commenthundler__WEBPACK_IMPORTED_MODULE_3__.loadAllComments)(apiKEY, Shows.length);
ActiveSh.addEventListener('click', _GenresShow__WEBPACK_IMPORTED_MODULE_2__.HideAction);
DramaSH.addEventListener('click', _GenresShow__WEBPACK_IMPORTED_MODULE_2__.HideDrama);
HorrorSH.addEventListener('click', _GenresShow__WEBPACK_IMPORTED_MODULE_2__.HideHorror);

const modal = `
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

ShowTV.insertAdjacentHTML('beforeend', modal);

setTimeout(() => { _Showscounter__WEBPACK_IMPORTED_MODULE_4__.ActionCount('#Action', 'actionShow'); }, 2000);
setTimeout(() => { _Showscounter__WEBPACK_IMPORTED_MODULE_4__.ActionCount('#Horror', 'horrorShow'); }, 2000);
setTimeout(() => { _Showscounter__WEBPACK_IMPORTED_MODULE_4__.ActionCount('#Drama', 'showDrama'); }, 2000);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDYTtBQUMrQjtBQUNkO0FBQ1g7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBa0I7QUFDbEIsZ0VBQWU7QUFDZixtQ0FBbUMsbURBQVU7QUFDN0Msa0NBQWtDLGtEQUFTO0FBQzNDLG1DQUFtQyxtREFBVTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsc0RBQWlCLDRCQUE0QjtBQUNoRSxtQkFBbUIsc0RBQWlCLDRCQUE0QjtBQUNoRSxtQkFBbUIsc0RBQWlCLDBCQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9HZW5yZXNTaG93LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvU2hvd3Njb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvYWRkbGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9jb21tZW50aHVuZGxlci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2dldGxpa2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYmctZGFyayB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA2OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5wb2ludGVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgcGFkZGluZzogMCAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHBhZGRpbmc6IDAgMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bkNvbW1lbnQge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zaG93IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxyXFxuICBhbmltYXRpb246IHNsaWRlLWRvd24gMC44cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcXHJcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcclxcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7IH1cXHJcXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxyXFxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsS0FBSyxVQUFVLEVBQUU7RUFDakIsS0FBSywyQkFBMkIsRUFBRTtFQUNsQyxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLHdCQUF3QixFQUFFO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5iZy1kYXJrIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDY4cHg7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvaW50ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgcGFkZGluZzogMCAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuQ29tbWVudCB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNob3cge1xcclxcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXHJcXG4gIGFuaW1hdGlvbjogc2xpZGUtZG93biAwLjhzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLWRvd24ge1xcclxcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxyXFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTsgfVxcclxcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXHJcXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEhpZGVBY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IERyYW1hRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI0RyYW1hJyk7XG4gIGNvbnN0IEhvcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNIb3Jyb3InKTtcbiAgY29uc3QgQWN0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI0FjdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IERyYW1hRGl2Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgRHJhbWFEaXZbaV0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIERyYW1hRGl2W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IEhvcnJvckRpdi5sZW5ndGg7IGkgKz0gMSkge1xuICAgIEhvcnJvckRpdltpXS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgSG9ycm9yRGl2W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IEFjdGlvbkRpdi5sZW5ndGg7IGkgKz0gMSkge1xuICAgIEFjdGlvbkRpdltpXS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH1cbn07XG5cbmNvbnN0IEhpZGVEcmFtYSA9ICgpID0+IHtcbiAgY29uc3QgRHJhbWFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjRHJhbWEnKTtcbiAgY29uc3QgSG9ycm9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI0hvcnJvcicpO1xuICBjb25zdCBBY3Rpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjQWN0aW9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgQWN0aW9uRGl2Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgQWN0aW9uRGl2W2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBBY3Rpb25EaXZbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgSG9ycm9yRGl2Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgSG9ycm9yRGl2W2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBIb3Jyb3JEaXZbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgRHJhbWFEaXYubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBEcmFtYURpdltpXS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH1cbn07XG5cbmNvbnN0IEhpZGVIb3Jyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IERyYW1hRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI0RyYW1hJyk7XG4gIGNvbnN0IEhvcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNIb3Jyb3InKTtcbiAgY29uc3QgQWN0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI0FjdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEFjdGlvbkRpdi5sZW5ndGg7IGkgKz0gMSkge1xuICAgIEFjdGlvbkRpdltpXS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgQWN0aW9uRGl2W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBEcmFtYURpdi5sZW5ndGg7IGkgKz0gMSkge1xuICAgIERyYW1hRGl2W2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBEcmFtYURpdltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgSG9ycm9yRGl2Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgSG9ycm9yRGl2W2ldLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgSGlkZUFjdGlvbiwgSGlkZUhvcnJvciwgSGlkZURyYW1hIH07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBBY3Rpb25Db3VudCA9IChHZW5yZXMsIElEKSA9PiB7XG4gIGNvbnN0IEdlbnJlc0lEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChHZW5yZXMpO1xuICBjb25zdCBpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKElEKTtcbiAgaWQuaW5uZXJIVE1MICs9IGAoJHtHZW5yZXNJRC5sZW5ndGh9KWA7XG4gIHJldHVybiBHZW5yZXNJRC5sZW5ndGg7XG59O1xuIiwiaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi9nZXRsaWtlcyc7XG5cbmNvbnN0IEFkZE5ld0xpa2UgPSAoSXRlbU4pID0+IHtcbiAgZmV0Y2goYCR7YXBpfS9saWtlcy9gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogYGl0ZW0ke0l0ZW1OfWAsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKTtcbn07XG5cbmNvbnN0IGxpc3Rlbkxpa2VzID0gKExpa2VJdGVtcywgYXBpKSA9PiB7XG4gIGxldCBidG5MaWtlO1xuICBsZXQgbGlrZVRleHQ7XG4gIExpa2VJdGVtcy5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XG4gICAgYnRuTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidG5MaWtlLSR7aX1gKTtcbiAgICBidG5MaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgQWRkTmV3TGlrZShpLCBhcGkpO1xuICAgICAgbGlrZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGlrZS0ke2l9YCk7XG4gICAgICBsaWtlVGV4dC5yZW1vdmVDaGlsZChsaWtlVGV4dC5maXJzdENoaWxkKTtcbiAgICAgIGxpa2VUZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke0xpa2VJdGVtc1tpXSArIDF9IGxpa2VzYCkpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IEFkZE5ld0xpa2UsIGxpc3Rlbkxpa2VzIH07IiwiaW1wb3J0IHsgbGlrZSB9IGZyb20gJy4vZ2V0bGlrZXMnO1xuaW1wb3J0IHsgbGlzdGVuTGlrZXMgfSBmcm9tICcuL2FkZGxpa2VzJztcbmltcG9ydCB7IGxvYWRDb21tZW50cyB9IGZyb20gJy4vY29tbWVudGh1bmRsZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0U2hvd0J5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZCA9IChvYmosIGNvdW50ZXIsIGxpa2UpID0+IHtcbiAgY29uc3QgZGF0YSA9IGBcbiAgICA8ZGl2IGlkPVwiJHtvYmouZ2VucmVzWzBdfVwiIGNsYXNzPVwiY29sIGNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtvYmouaW1hZ2UubWVkaXVtfVwiIGNsYXNzPVwiY2FyZC1pbWctdG9wIGltZy1mbHVpZFwiIGFsdD1cIlBvc3RlciBvZiAke29iai5uYW1lfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke29iai5uYW1lfTwvaDU+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYnRuTGlrZS0ke2NvdW50ZXJ9XCIgY2xhc3M9XCJwb2ludGVyXCI+ICAgICAgICAgIFxuICAgICAgICAgICAgICA8aSAgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWhlYXJ0XCIgXCI+PC9pPiAgICAgICAgICBcbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJsaWtlLSR7Y291bnRlcn1cIj4ke2xpa2V9IGxpa2VzPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImJ0biR7Y291bnRlcn1cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1icy10YXJnZXQ9XCIjbWFpbk1vZGFsXCIgb25jbGljaz1cInBvcHVsYXRlTW9kYWwoJHtjb3VudGVyfSwgJ0FMMmpUQU1TSUp3Q3pSTDNJQ2cyJyk7bWFpbk1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVwiPlxuICAgICAgICAgICAgQ29tbWVudHNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5sZXQgc2hvd3NBcnIgPSBbXTtcblxuY29uc3QgY3JlYXRlQWxidW0gPSBhc3luYyAoYXJyLCBtYWluLCBhcGkpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc05hbWUgPSAncm93IHJvdy1jb2xzLTEgcm93LWNvbHMtbWQtNCBnLTQnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgY29uc3QgbGlrZUxpc3QgPSBhd2FpdCBsaWtlKGFyci5sZW5ndGgsIGFwaSk7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgYXJyLmZvckVhY2goKGEpID0+IHtcbiAgICBkaXYuaW5uZXJIVE1MICs9IGNyZWF0ZUNhcmQoYSwgY291bnRlciwgbGlrZUxpc3RbY291bnRlcl0sIGFwaSk7XG4gICAgY291bnRlciArPSAxO1xuICB9KTtcbiAgbWFpbi5hcHBlbmQoY29udGFpbmVyKTtcbiAgbGlzdGVuTGlrZXMobGlrZUxpc3QsIGFwaSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZFNob3dzID0gYXN5bmMgKHR5cGUsIG1haW4sIGFwaSkgPT4ge1xuICBzaG93c0FyciA9IFtdO1xuICB0eXBlLmZvckVhY2goKGlkKSA9PiB7XG4gICAgc2hvd3NBcnIucHVzaChnZXRTaG93QnlJZChpZCkpO1xuICB9KTtcbiAgcmV0dXJuIGNyZWF0ZUFsYnVtKGF3YWl0IFByb21pc2UuYWxsKHNob3dzQXJyKSwgbWFpbiwgYXBpKTtcbn07XG5cbndpbmRvdy5wb3B1bGF0ZU1vZGFsID0gKGlkLCBhcGkpID0+IHtcbiAgY29uc3QgbWFpbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Nb2RhbCcpO1xuICBzaG93c0FycltpZF0udGhlbigoc2hvdykgPT4ge1xuICAgIG1haW5Nb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJtYWluTW9kYWxMYWJlbFwiPiR7c2hvdy5uYW1lfTwvaDU+XG4gICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbk1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHtzaG93LmltYWdlLm1lZGl1bX1cIiBjbGFzcz1cIm14LWF1dG8gZC1ibG9ja1wiPlxuICAgICAgICAgICR7c2hvdy5zdW1tYXJ5fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImNvbW1lbnRzXCI+XG4gICAgICAgICAgPGgzIGlkPVwiY29tbWVudEhlYWRlclwiPkNvbW1lbnRzIDwvaDI+XG4gICAgICAgICAgPHVsIGlkPVwiY29tbWVudExpc3RcIiBjbGFzcz1cImxpc3QtZ3JvdXAtZmx1c2ggcHMtMFwiPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDM+QWRkIGEgbmV3IGNvbW1lbnQ8L2gyPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgPGRpdiBpZD1cIm5ld0NvbW1lbnRcIiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IGlkPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwibXktMiBmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiPlxuICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImNvbW1lbnRcIiBjbGFzcz1cIm15LTIgZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCIgcm93cz1cIjNcIj48L3RleHRhcmVhPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJidG5Db21tZW50XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibXktMiBidG4gYnRuLXByaW1hcnlcIiBvbmNsaWNrPVwiYWRkTmV3Q29tbWVudCgke2lkfSwgJyR7YXBpfScpXCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9KTtcbiAgc2V0VGltZW91dCgoKSA9PiB7IGxvYWRDb21tZW50cyhpZCk7IH0sIDEwMCk7XG59O1xuIiwiY29uc3QgZ2V0Q291bnRlciA9IChhcnIpID0+IGFyci5sZW5ndGg7XG5cbmNvbnN0IGFwaSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuY29uc3QgZ2V0ID0gJy9jb21tZW50cz9pdGVtX2lkPSc7XG5jb25zdCBwb3N0ID0gJy9jb21tZW50cy8nO1xuXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpdGVtSUQsIGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpICsgaWQgKyBnZXQgKyBpdGVtSUQpO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChpdGVtSUQsIHVzZXIsIHRleHQsIGlkKSA9PiB7XG4gIGF3YWl0IGZldGNoKGFwaSArIGlkICsgcG9zdCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGl0ZW1JRCxcbiAgICAgIHVzZXJuYW1lOiB1c2VyLFxuICAgICAgY29tbWVudDogdGV4dCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gMDtcbn07XG5cbmxldCBjb21tZW50cyA9IFtdO1xuXG5leHBvcnQgY29uc3QgbG9hZEFsbENvbW1lbnRzID0gYXN5bmMgKGFwaSwgc2l6ZSkgPT4ge1xuICBjb21tZW50cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIGNvbW1lbnRzLnB1c2goZ2V0Q29tbWVudHMoYCR7aX1gLCBhcGkpKTtcbiAgfVxuICBQcm9taXNlLmFsbChjb21tZW50cykudGhlbigocmVzdWx0KSA9PiB7IGNvbW1lbnRzID0gcmVzdWx0OyB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpID0gKHVzZXJuYW1lLCBjb21tZW50LCBkYXRlKSA9PiB7XG4gIGNvbnN0IGxpID0gYFxuICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj4ke2RhdGV9PHN0cm9uZz4gJHt1c2VybmFtZX0gc2F5czogPC9zdHJvbmc+JHtjb21tZW50fTwvbGk+XG4gIGA7XG4gIHJldHVybiBsaTtcbn07XG5cbmNvbnN0IHNldE51bWJlckNvbW1lbnRzID0gKGlkKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudEhlYWRlcicpO1xuICBjb21tZW50SGVhZGVyLmlubmVyVGV4dCA9IGBDb21tZW50cyAoJHtnZXRDb3VudGVyKGNvbW1lbnRzW2lkXSl9KWA7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZENvbW1lbnRzID0gKGlkKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRMaXN0Jyk7XG4gIGlmIChQcm9taXNlLnJlc29sdmUoY29tbWVudHNbaWRdKSA9PT0gY29tbWVudHNbaWRdKSB7XG4gICAgY29tbWVudHNbaWRdLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgcmVzdWx0LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgY29tbWVudExpc3QuaW5uZXJIVE1MICs9IGNyZWF0ZUxpKGUudXNlcm5hbWUsIGUuY29tbWVudCwgZS5jcmVhdGlvbl9kYXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbW1lbnRzW2lkXS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gY3JlYXRlTGkoZS51c2VybmFtZSwgZS5jb21tZW50LCBlLmNyZWF0aW9uX2RhdGUpO1xuICAgIH0pO1xuICB9XG4gIHNldE51bWJlckNvbW1lbnRzKGlkKTtcbn07XG5cbndpbmRvdy5hZGROZXdDb21tZW50ID0gKGlkLCBhcGkpID0+IHtcbiAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudExpc3QnKTtcbiAgY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XG4gIGNvbnN0IGNvbW1lbnRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Jyk7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGF0ZSA9IGAke3RvZGF5LmdldEZ1bGxZZWFyKCl9LSR7dG9kYXkuZ2V0TW9udGgoKSArIDF9LSR7dG9kYXkuZ2V0RGF0ZSgpfWA7XG4gIGNvbW1lbnRMaXN0LmlubmVySFRNTCArPSBjcmVhdGVMaShuYW1lRmllbGQudmFsdWUsIGNvbW1lbnRGaWVsZC52YWx1ZSwgZGF0ZSk7XG4gIGFkZENvbW1lbnQoaWQsIG5hbWVGaWVsZC52YWx1ZSwgY29tbWVudEZpZWxkLnZhbHVlLCBhcGkpO1xuICBjb21tZW50c1tpZF0ucHVzaCh7XG4gICAgdXNlcm5hbWU6IG5hbWVGaWVsZC52YWx1ZSxcbiAgICBjb21tZW50OiBjb21tZW50RmllbGQudmFsdWUsXG4gICAgY3JlYXRpb25fZGF0ZTogZGF0ZSxcbiAgfSk7XG4gIG5hbWVGaWVsZC52YWx1ZSA9ICcnO1xuICBjb21tZW50RmllbGQudmFsdWUgPSAnJztcbn07XG4iLCJjb25zdCBhcGkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQUwyalRBTVNJSndDelJMM0lDZzInO1xuXG5jb25zdCBQdXRMaWtlcyA9IGFzeW5jICh0b3RhbCkgPT4gZmV0Y2goYCR7YXBpfS9saWtlcy9gKVxuICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oKGxpa2VzKSA9PiBsaWtlcykuY2F0Y2goKCkgPT4ge1xuICAgIGNvbnN0IEFycmF5cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkgKz0gMSkge1xuICAgICAgQXJyYXlzLnB1c2goMCk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheXM7XG4gIH0pO1xuXG5jb25zdCBsaWtlID0gYXN5bmMgKHRvdGFsLCBhcGkpID0+IHtcbiAgY29uc3QgbGlrZUxpc3QgPSBhd2FpdCBQdXRMaWtlcyh0b3RhbCwgYXBpKTtcbiAgY29uc3QgTGlzdExpa2UgPSBbXTtcbiAgbGV0IGluZGV4ID0gLTE7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkgKz0gMSkge1xuICAgIGluZGV4ID0gbGlrZUxpc3QuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IGBpdGVtJHtpfWApO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIExpc3RMaWtlLnB1c2gobGlrZUxpc3RbaW5kZXhdLmxpa2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTGlzdExpa2UucHVzaCgwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIExpc3RMaWtlO1xufTtcblxuZXhwb3J0IHsgYXBpLCBsaWtlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgbXlNb2R1bGUgZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgSGlkZUFjdGlvbiwgSGlkZUhvcnJvciwgSGlkZURyYW1hIH0gZnJvbSAnLi9HZW5yZXNTaG93JztcbmltcG9ydCB7IGxvYWRBbGxDb21tZW50cyB9IGZyb20gJy4vY29tbWVudGh1bmRsZXInO1xuaW1wb3J0ICogYXMgQ291bnQgZnJvbSAnLi9TaG93c2NvdW50ZXInO1xuXG5jb25zdCBhcGlLRVkgPSBbJ0FMMmpUQU1TSUp3Q3pSTDNJQ2cyJ107XG5jb25zdCBTaG93VFYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU2hvd1RWJyk7XG5jb25zdCBTaG93cyA9IFsnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJywgJzEzJywgJzE0JywgJzE1JywgJzE2JywgJzE4JywgJzEwNScsICczMScsICcxODI0JywgJzczJywgJzM4NzY0JywgJzcwMTknXTtcbmNvbnN0IERyYW1hU0ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0RyYW1hJyk7XG5jb25zdCBIb3Jyb3JTSCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3Jyb3JTaG93Jyk7XG5jb25zdCBBY3RpdmVTaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb25TaG93Jyk7XG5cbm15TW9kdWxlLmxvYWRTaG93cyhTaG93cywgU2hvd1RWKTtcbmxvYWRBbGxDb21tZW50cyhhcGlLRVksIFNob3dzLmxlbmd0aCk7XG5BY3RpdmVTaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEhpZGVBY3Rpb24pO1xuRHJhbWFTSC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEhpZGVEcmFtYSk7XG5Ib3Jyb3JTSC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEhpZGVIb3Jyb3IpO1xuXG5jb25zdCBtb2RhbCA9IGBcbjxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJtYWluTW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1sYWJlbGxlZGJ5PVwibWFpbk1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJtYWluTW9kYWxMYWJlbFwiPlNob3cgbmFtZTwvaDU+XG4gICAgICAgIDxidXR0b24gIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICBJbWFnZSBhbmQgU3VtbWFyeVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiY29tbWVudHNcIj5cbiAgICAgICAgPGgyPkNvbW1lbnRzPC9oMj5cbiAgICAgICAgPHVsIGlkPVwiY29tbWVudExpc3RcIiBjbGFzcz1cImxpc3QtZ3JvdXAtZmx1c2ggcHMtMFwiPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwibmV3Q29tbWVudFwiIGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgIDxoMj5BZGQgYSBjb21tZW50PC9oMj5cbiAgICAgICAgPGlucHV0IGlkPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwibXktMiBmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiPlxuICAgICAgICA8dGV4dGFyZWEgaWQ9XCJjb21tZW50XCIgY2xhc3M9XCJteS0yIGZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiIHJvd3M9XCIzXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bkNvbW1lbnRcIiBjbGFzcz1cIm15LTIgYnRuIGJ0bi1zZWNvbmRhcnlcIj5Db21tZW50PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYDtcblxuU2hvd1RWLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbW9kYWwpO1xuXG5zZXRUaW1lb3V0KCgpID0+IHsgQ291bnQuQWN0aW9uQ291bnQoJyNBY3Rpb24nLCAnYWN0aW9uU2hvdycpOyB9LCAyMDAwKTtcbnNldFRpbWVvdXQoKCkgPT4geyBDb3VudC5BY3Rpb25Db3VudCgnI0hvcnJvcicsICdob3Jyb3JTaG93Jyk7IH0sIDIwMDApO1xuc2V0VGltZW91dCgoKSA9PiB7IENvdW50LkFjdGlvbkNvdW50KCcjRHJhbWEnLCAnc2hvd0RyYW1hJyk7IH0sIDIwMDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9