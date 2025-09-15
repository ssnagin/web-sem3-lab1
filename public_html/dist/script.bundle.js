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

/***/ "./public_html/dist/ts_out/index.js":
/*!******************************************!*\
  !*** ./public_html/dist/ts_out/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar _require = __webpack_require__(/*! ./modules/counter/counter */ \"./public_html/dist/ts_out/modules/counter/counter.js\"),\n  onCounterUpdate = _require.onCounterUpdate;\n// const {CustomForm} = require(\"./modules/form/form\");\nvar counterValue = 1;\ndocument.addEventListener(\"DOMContentLoaded\", onDOMContentLoaded);\nfunction onDOMContentLoaded() {\n  // COUNTER\n  var counter = document.getElementById(\"counter\");\n  counter === null || counter === void 0 || counter.addEventListener(\"click\", function (event) {\n    counterValue = onCounterUpdate(event, counterValue);\n  });\n  // FORM\n  // const form = new CustomForm(\n  //     document.querySelector(\".sn-default-form\")\n  // );\n}\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/dist/ts_out/index.js?\n}");

/***/ }),

/***/ "./public_html/dist/ts_out/modules/counter/counter.js":
/*!************************************************************!*\
  !*** ./public_html/dist/ts_out/modules/counter/counter.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nfunction onCounterUpdate(event, counterValue) {\n  counterValue++;\n  var target = event.target;\n  target.innerHTML = counterValue.toString();\n  return counterValue;\n}\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/dist/ts_out/modules/counter/counter.js?\n}");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public_html/dist/ts_out/index.js");
/******/ 	
/******/ })()
;