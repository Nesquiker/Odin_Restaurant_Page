/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../content/abb.ttf */ \"./content/abb.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../content/fg.ttf */ \"./content/fg.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../content/kitchen.jpg */ \"./content/kitchen.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: \\\"fancy\\\";\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\n}\\n\\n@font-face {\\n    font-family: \\\"paragraph\\\";\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"truetype\\\");\\n}\\n\\n\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\n*::-webkit-scrollbar {\\n    width: 12px;\\n}\\n\\n*::-webkit-scrollbar-track {\\n    background: antiquewhite;\\n    opacity: .8;\\n}\\n\\n*::-webkit-scrollbar-thumb {\\n    background-color: burlywood;\\n}\\n\\n#content {\\n    display: grid;\\n    grid-template: 100px 1fr 30px / 1fr;\\n    height: 100vh;\\n    width:100vw;\\n    font-family: \\\"Noto Serif\\\", sans-serif;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    background-size: cover;\\n}\\n\\n/* HEADER */\\n.button_container {\\n    display: flex;\\n    justify-content: center;\\n    align-items: flex-end;\\n}\\n\\nbutton {\\n    border-top-right-radius: 12px;\\n    border-top-left-radius: 12px;\\n    border-bottom: black;\\n    background-color: burlywood;\\n    font-size: clamp(14px, 2vw, 24px);\\n    display:flex;\\n    justify-content: center;\\n    align-items: center;\\n    opacity: .8;\\n    flex: 0;\\n    padding: 15px;\\n    font-family: fancy, \\\"Roboto Light\\\", sans-serif;\\n    transition: background-color 1s;\\n}\\n\\n.selected {\\n    border-bottom: antiquewhite;\\n    background-color: antiquewhite;\\n    transition: background-color 1s;\\n\\n}\\n\\n/* BODY */\\n.body_container {\\n    display: grid;\\n    grid-template: 1fr / 1fr minmax(300px, 2fr) 1fr;\\n    overflow-y: auto;\\n}\\n\\n#content_entry {\\n    grid-area: 1 / 2 / 2 / 3;\\n    background-color: antiquewhite;\\n    opacity: .8;\\n    border-radius: 50px;\\n    display: flex;\\n    flex-direction: column;\\n    padding: 10% 10px;\\n}\\n\\n\\n/* FOOTER */\\n.footer_container {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n}\\n\\n.foot_notes {\\n    flex: 1;\\n    font-size: 10px;\\n    color: antiquewhite;\\n}\\n\\n\\n/* HOME PAGE */\\nh1 {\\n    font-family: fancy, sans-serif;\\n}\\n\\nh1 {\\n    font-size: clamp(50px, 4vw, 70px);\\n}\\n\\nh2 {\\n    font-family: \\\"paragraph\\\", sans-serif;\\n    font-size: clamp(14px, 2vw, 24px);\\n}\\n\\nimg {\\n    width: clamp(280px, 40vw, 700px);\\n    height: auto;\\n    align-self: center;\\n    margin-bottom: 40px;\\n    border-radius: 12px;\\n}\\n\\n.content_text_group {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n    margin-bottom: 40px;\\n}\\n\\n.content_text_group > * {\\n    flex: auto;\\n}\\n\\n.content_text_group > h2, .content_text_group > h1 {\\n    align-self: center;\\n}\\n\\n.hours {\\n    align-self: center;\\n    font-weight: bold;\\n}\\nul {\\n    list-style-type: none;\\n}\\nul > li {\\n    margin-bottom: 5px;\\n}\\n\\np {\\n    width: clamp(280px, 40vw, 700px);\\n    align-self: center;\\n    font-family: \\\"Noto Serif\\\", sans-serif;\\n    font-weight: bold;\\n}\\n\\n #sub_1, #sub_2{\\n    font-size: clamp(35px, 3vw, 50px);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin_restaurant_page/./styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin_restaurant_page/./styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildContact)\n/* harmony export */ });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _content_crabs_touching_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/crabs_touching.jpg */ \"./content/crabs_touching.jpg\");\n\n\n\n\nfunction buildContact() {\n    const container = document.querySelector(\"#content_entry\");\n    const contact_title_container = document.createElement(\"div\");\n    contact_title_container.classList.add(\"content_text_group\");\n    const welcome = document.createElement(\"h2\");\n    welcome.textContent = \"Need a reservation? Just want to chat?\";\n    const contact_us = document.createElement(\"h1\");\n    contact_us.textContent = \"Contact Us\";\n    const title_picture = document.createElement(\"img\");\n    title_picture.alt = \"Crabs touching claws\";\n    title_picture.src = _content_crabs_touching_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    const about_container = document.createElement(\"div\");\n    about_container.classList.add(\"content_text_group\");\n    const about_title = document.createElement(\"h2\");\n    about_title.textContent = \"Contact Information\";\n    const hours_container = document.createElement(\"div\");\n    hours_container.classList.add(\"content_text_group\");\n    hours_container.classList.add(\"hours\");\n    const hours_list = document.createElement(\"ul\");\n    const days = [\n        \"Call us at: 1-505-445-3456\",\n        \"E-mail: thelastolje@olje.com\",\n        \"Mail: 456 Moscow Lane\",\n    ];\n    for (let day of days) {\n        const li_div = document.createElement(\"li\");\n        li_div.textContent = day;\n        hours_list.appendChild(li_div);\n    }\n    contact_title_container.appendChild(welcome);\n    contact_title_container.appendChild(contact_us);\n    hours_container.appendChild(about_title);\n    hours_container.appendChild(hours_list)\n    container.replaceChildren(\n        contact_title_container,\n        title_picture,\n        hours_container\n    )\n}\n\n//# sourceURL=webpack://odin_restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/frame.js":
/*!**********************!*\
  !*** ./src/frame.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildFrame)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n\n\n\nfunction buildFrame() {\n    const container = document.querySelector(\"#content\");\n    const header = buildHeader();\n    const body = buildBody();\n    const footer = buildFooter();\n    container.appendChild(header);\n    container.appendChild(body);\n    container.appendChild(footer);\n}\n\nfunction buildHeader() {\n    const button_container = document.createElement(\"div\");\n    button_container.classList.add(\"button_container\");\n    const home_button = document.createElement(\"button\");\n    home_button.id = \"home\";\n    home_button.textContent = \"Home\";\n    home_button.classList.add(\"selected\");\n    home_button.addEventListener(\"click\", _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    const menu_button = document.createElement(\"button\");\n    menu_button.id = \"menu\";\n    menu_button.textContent = \"Menu\";\n    menu_button.addEventListener(\"click\", _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    const contact_button = document.createElement(\"button\");\n    contact_button.id = \"contact\";\n    contact_button.textContent = \"Contact\";\n    contact_button.addEventListener(\"click\", _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    button_container.appendChild(home_button);\n    button_container.appendChild(menu_button);\n    button_container.appendChild(contact_button);\n    return button_container;\n}\n\nfunction buildBody() {\n    const body_container = document.createElement(\"div\");\n    body_container.classList.add(\"body_container\");\n    const content_entry = document.createElement(\"div\");\n    content_entry.id = \"content_entry\";\n    body_container.appendChild(content_entry);\n    return body_container;\n}\n\nfunction buildFooter() {\n    const footer_container = document.createElement(\"div\");\n    footer_container.classList.add(\"footer_container\");\n    const content_sources = document.createElement(\"div\");\n    content_sources.classList.add(\"foot_notes\");\n    content_sources.textContent = \"Background Image: tirachard     Fonts: Billy Argel Fonts\";\n    const creator_source = document.createElement(\"div\");\n    creator_source.classList.add(\"foot_notes\");\n    creator_source.textContent = \"Created by: Sean Reid\";\n    footer_container.appendChild(content_sources);\n    footer_container.appendChild(creator_source);\n    return footer_container;\n\n\n}\n\n//# sourceURL=webpack://odin_restaurant_page/./src/frame.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildHome)\n/* harmony export */ });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _content_boat_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/boat.jpg */ \"./content/boat.jpg\");\n/* harmony import */ var _content_fresh_fish_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/fresh_fish.jpg */ \"./content/fresh_fish.jpg\");\n\n\n\n\n\nfunction buildHome() {\n    const container = document.querySelector(\"#content_entry\");\n    const title_container = document.createElement(\"div\");\n    title_container.classList.add(\"content_text_group\");\n    const welcome = document.createElement(\"h2\");\n    welcome.textContent = \"Welcome to Moscow's' finest seafood restaurant:\";\n    const restaurant_name = document.createElement(\"h1\");\n    restaurant_name.textContent = \"Lastolje\";\n    const title_picture = document.createElement(\"img\");\n    title_picture.alt = \"Fishing boat\";\n    title_picture.src = _content_boat_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    const about_container = document.createElement(\"div\");\n    about_container.classList.add(\"content_text_group\");\n    const about_title = document.createElement(\"h2\");\n    about_title.textContent = \"About Us\";\n    const about_text = document.createElement(\"p\");\n    about_text.textContent = \"The Lastolje is a restaurant dedicated to unveiling the incredible culinary secrets locked\" +\n        \"away in the world under water. Lastolje started as a humble fishing outfit and now serves as one of Moscows most\" +\n        \"excellent seafood restaurants. Eat with us and experience seafood at its best.\";\n    const about_picture  = document.createElement(\"img\");\n    about_picture.alt = \"Man with raw seafood\";\n    about_picture.src = _content_fresh_fish_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    const hours_container = document.createElement(\"div\");\n    hours_container.classList.add(\"content_text_group\");\n    hours_container.classList.add(\"hours\");\n    const hours_title = document.createElement(\"h2\");\n    const hours_list = document.createElement(\"ul\");\n    const days = [\n        \"Sunday: 10am to 11pm\",\n        \"Monday: 2pm to 9pm\",\n        \"Tuesday: 10am to 11pm\",\n        \"Wednesday: 10am to 11pm\",\n        \"Thursday: 10am to 11pm\",\n        \"Friday: 10 am to 11pm\",\n        \"Saturday: 10am to 11pm\",\n        \"Holidays: Call us for times and reservations!\"\n    ];\n    for (let day of days) {\n        const li_div = document.createElement(\"li\");\n        li_div.textContent = day;\n        hours_list.appendChild(li_div);\n    }\n    title_container.appendChild(welcome);\n    title_container.appendChild(restaurant_name);\n    about_container.appendChild(about_title);\n    about_container.appendChild(about_text);\n    hours_container.appendChild(hours_title);\n    hours_container.appendChild(hours_list);\n    container.appendChild(title_container);\n    container.appendChild(title_picture);\n    container.appendChild(about_container);\n    container.appendChild(about_picture);\n    container.appendChild(hours_container);\n    container.replaceChildren(title_container, title_picture, about_container, about_picture, hours_container);\n}\n\n//# sourceURL=webpack://odin_restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ constructTab)\n/* harmony export */ });\n/* harmony import */ var _src_frame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/frame.js */ \"./src/frame.js\");\n/* harmony import */ var _src_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/home.js */ \"./src/home.js\");\n/* harmony import */ var _src_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/menu.js */ \"./src/menu.js\");\n/* harmony import */ var _src_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/contact.js */ \"./src/contact.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n\n\n\n\n\n\n\nfunction alert() {\n    console.log(\"Alert!\");\n}\n\nfunction constructTab(e) {\n    const current_button = document.querySelector(\".selected\");\n    if (current_button === e.target) {\n        return;\n    }\n    current_button.classList.remove(\"selected\");\n    e.target.classList.add(\"selected\");\n    if (e.target.textContent === \"Home\") {\n        (0,_src_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    } else if (e.target.textContent === \"Menu\") {\n        (0,_src_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else if (e.target.textContent === \"Contact\") {\n        (0,_src_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    }\n}\n\nfunction main() {\n    (0,_src_frame_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_src_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    alert();\n}\n\nmain();\n\n//# sourceURL=webpack://odin_restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildMenu)\n/* harmony export */ });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _content_platter_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/platter.jpg */ \"./content/platter.jpg\");\n/* harmony import */ var _content_mussels_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/mussels.jpg */ \"./content/mussels.jpg\");\n/* harmony import */ var _content_shrimp_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/shrimp.jpg */ \"./content/shrimp.jpg\");\n/* harmony import */ var _content_seafood_soup_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/seafood_soup.jpg */ \"./content/seafood_soup.jpg\");\n/* harmony import */ var _content_tuna_dish_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/tuna_dish.jpg */ \"./content/tuna_dish.jpg\");\n/* harmony import */ var _content_Shrimp_and_rice_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/Shrimp_and_rice.jpg */ \"./content/Shrimp_and_rice.jpg\");\n\n\n\n\n\n\n\n\n\nfunction buildMenu() {\n    const container = document.querySelector(\"#content_entry\");\n\n    /* MENU TITLE */\n    const title_container = document.createElement(\"div\");\n    title_container.classList.add(\"content_text_group\");\n    const welcome = document.createElement(\"h2\");\n    welcome.textContent = \"We guarantee it is all great\";\n    const menu_title = document.createElement(\"h1\");\n    menu_title.textContent = \"Menu\";\n    const title_picture = document.createElement(\"img\");\n    title_picture.alt = \"Platter of seafood\";\n    title_picture.src = _content_platter_jpg__WEBPACK_IMPORTED_MODULE_1__;\n\n    /* APPETIZERS */\n    const section_title_container = document.createElement(\"div\");\n    section_title_container.classList.add(\"content_text_group\");\n    const appetizers = document.createElement(\"h1\");\n    appetizers.textContent = \"Appetizers\";\n    appetizers.id = \"sub_2\";\n    const appetizer_1 = document.createElement(\"div\");\n    appetizer_1.classList.add(\"content_text_group\");\n    const app_title_1 = document.createElement(\"h2\");\n    app_title_1.textContent = \"Baltic Oysters - 8$\";\n    const app_desc_1 = document.createElement(\"p\");\n    app_desc_1.textContent = \"Oysters direct from the Baltic sea. Served in a delicate butter, tarragon, and paprika sauce.\" +\n        \" Comes with 8 oysters.\";\n    const app_1_image = document.createElement(\"img\");\n    app_1_image.alt = \"Picture of Oysters\";\n    app_1_image.src = _content_mussels_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    const appetizer_2 = document.createElement(\"div\");\n    appetizer_2.classList.add(\"content_text_group\");\n    const app_title_2 = document.createElement(\"h2\");\n    app_title_2.textContent = \"Shrimp Cocktail - 10$\";\n    const app_desc_2 = document.createElement(\"p\");\n    app_desc_2.textContent = \"Shrimp cocktail served in our proprietary sauce. Served with lemon, onion, and cucumber.\" +\n        \" The shrimp come with the head on.\";\n    const app_2_image = document.createElement(\"img\");\n    app_2_image.alt = \"Picture of shrimp cocktail\";\n    app_2_image.src = _content_shrimp_jpg__WEBPACK_IMPORTED_MODULE_3__;\n\n    /* MAIN COURSES */\n    const main_title_container = document.createElement(\"div\");\n    main_title_container.classList.add(\"content_text_group\");\n    const main_course_title = document.createElement(\"h1\");\n    main_course_title.textContent = \"Main Courses\";\n    main_course_title.id = \"sub_1\";\n    const main_1 = document.createElement(\"div\");\n    main_1.classList.add(\"content_text_group\");\n    const main_title_1 = document.createElement(\"h2\");\n    main_title_1.textContent = \"Seafood Soup - 12$\";\n    const main_desc_1 = document.createElement(\"p\");\n    main_desc_1.textContent = \"Shrimp, Mussels, and clams all in a hearty soup. Seasoned with our trademark curry.\" +\n        \" Served with bread.\";\n    const main_1_image = document.createElement(\"img\");\n    main_1_image.alt = \"Picture of Seafood soup\";\n    main_1_image.src = _content_seafood_soup_jpg__WEBPACK_IMPORTED_MODULE_4__;\n\n    /* COURSE 2 */\n    const main_2 = document.createElement(\"div\");\n    main_2.classList.add(\"content_text_group\");\n    const main_title_2 = document.createElement(\"h2\");\n    main_title_2.textContent = \"Tuna Steak - 29$\";\n    const main_desc_2 = document.createElement(\"p\");\n    main_desc_2.textContent = \"Seared Tuna steaks on a bed of garden vegetables and red potatoes. Tuna is fresh caught \" +\n        \" Served with our home made aoli.\";\n    const main_2_image = document.createElement(\"img\");\n    main_2_image.alt = \"Picture of Tuna steaks\";\n    main_2_image.src = _content_tuna_dish_jpg__WEBPACK_IMPORTED_MODULE_5__;\n\n    /* COURSE 2 */\n    const main_3 = document.createElement(\"div\");\n    main_3.classList.add(\"content_text_group\");\n    const main_title_3 = document.createElement(\"h2\");\n    main_title_3.textContent = \"Shrimp and Rice - 21$\";\n    const main_desc_3 = document.createElement(\"p\");\n    main_desc_3.textContent = \"Fresh caught shrimp battered and served on a bed of rice mixed with herbs and vegetables\" +\n        \" grown locally.\";\n    const main_3_image = document.createElement(\"img\");\n    main_3_image.alt = \"Picture of shrimp in rice\";\n    main_3_image.src = _content_Shrimp_and_rice_jpg__WEBPACK_IMPORTED_MODULE_6__;\n\n    /* ADD TO CONTENT */\n    title_container.appendChild(welcome);\n    title_container.appendChild(menu_title);\n    section_title_container.appendChild(appetizers);\n    appetizer_1.appendChild(app_title_1);\n    appetizer_1.appendChild(app_desc_1);\n    appetizer_2.appendChild(app_title_2);\n    appetizer_2.appendChild(app_desc_2);\n    main_title_container.appendChild(main_course_title);\n    main_1.appendChild(main_title_1);\n    main_1.appendChild(main_desc_1);\n    main_2.appendChild(main_title_2);\n    main_2.appendChild(main_desc_2);\n    main_3.appendChild(main_title_3);\n    main_3.appendChild(main_desc_3);\n\n\n    container.replaceChildren(\n        title_container,\n        title_picture,\n        section_title_container,\n        appetizer_1,\n        app_1_image,\n        appetizer_2,\n        app_2_image,\n        main_title_container,\n        main_1,\n        main_1_image,\n        main_2,\n        main_2_image,\n        main_3,\n        main_3_image\n    );\n}\n\n//# sourceURL=webpack://odin_restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./content/Shrimp_and_rice.jpg":
/*!*************************************!*\
  !*** ./content/Shrimp_and_rice.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cba3559c72350df3b50e.jpg\";\n\n//# sourceURL=webpack://odin_restaurant_page/./content/Shrimp_and_rice.jpg?");

/***/ }),

/***/ "./content/abb.ttf":
/*!*************************!*\
  !*** ./content/abb.ttf ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb04dce4c2b321e2ef0a.ttf\";\n\n//# sourceURL=webpack://odin_restaurant_page/./content/abb.ttf?");

/***/ }),

/***/ "./content/boat.jpg":
/*!**************************!*\
  !*** ./content/boat.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fe5abcf17ddf2849d7f7.jpg\";\n\n//# sourceURL=webpack://odin_restaurant_page/./content/boat.jpg?");

/***/ }),

/***/ "./content/crabs_touching.jpg":
/*!************************************!*\
  !*** ./content/crabs_touching.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4107d05bd36b9d137bbd.jpg\";\n\n//# sourceURL=webpack://odin_restaurant_page/./content/crabs_touching.jpg?");

/***/ }),

/***/ "./content/fg.ttf":
/*!************************!*\
  !*** ./content/fg.ttf ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2f0e67269d901e1be063.ttf\";\n\n//# sourceURL=webpack://odin_restaurant_page/./content/fg.ttf?");

/***/ }),

/***/ "./content/fresh_fish.jpg":
/*!********************************!*\
  !*** ./content/fresh_fish.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d76ca2b29e7ace90c01.jpg\";\n\n//# sourceURL=webpack://odin_restaurant_page/./content/fresh_fish.jpg?");

/***/ }),

/***/ "./content/kitchen.jpg":
/*!*****************************!*\
  !*** ./content/kitchen.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be92fbb6cb9b04656d9b.jpg\";\n\n//# sourceURL=webpack://odin_restaurant_page/./content/kitchen.jpg?");

/***/ }),

/***/ "./content/mussels.jpg":
/*!*****************************!*\
  !*** ./content/mussels.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bab725daaa08db0e8a68.jpg\";\n\n//# sourceURL=webpack://odin_restaurant_page/./content/mussels.jpg?");

/***/ }),

/***/ "./content/platter.jpg":
/*!*****************************!*\
  !*** ./content/platter.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"295a762ae40fdd3b5971.jpg\";\n\n//# sourceURL=webpack://odin_restaurant_page/./content/platter.jpg?");

/***/ }),

/***/ "./content/seafood_soup.jpg":
/*!**********************************!*\
  !*** ./content/seafood_soup.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba8132bdb1316390ff2d.jpg\";\n\n//# sourceURL=webpack://odin_restaurant_page/./content/seafood_soup.jpg?");

/***/ }),

/***/ "./content/shrimp.jpg":
/*!****************************!*\
  !*** ./content/shrimp.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a2edc351b678e78afde.jpg\";\n\n//# sourceURL=webpack://odin_restaurant_page/./content/shrimp.jpg?");

/***/ }),

/***/ "./content/tuna_dish.jpg":
/*!*******************************!*\
  !*** ./content/tuna_dish.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"df90a3180dda94d608d2.jpg\";\n\n//# sourceURL=webpack://odin_restaurant_page/./content/tuna_dish.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;