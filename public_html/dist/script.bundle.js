/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public_html/src/js/index.js":
/*!*************************************!*\
  !*** ./public_html/src/js/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n\nconst {onCounterUpdate} = __webpack_require__(/*! ./modules/counter */ \"./public_html/src/js/modules/counter.js\");\n\nvar counterValue = 1;\n\ndocument.addEventListener(\"DOMContentLoaded\", onDOMContentLoaded);\n\nfunction onDOMContentLoaded() {\n\n    const counter = document.getElementById(\"counter\");\n\n    console.log(onCounterUpdate);\n    \n    counter.addEventListener(\"click\", (event) => {onCounterUpdate(event)});\n\n    const checkboxes = document.querySelectorAll(\"input[id='checkbox*']\");\n    console.log(checkboxes);\n}\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/index.js?\n}");

/***/ }),

/***/ "./public_html/src/js/modules/counter.js":
/*!***********************************************!*\
  !*** ./public_html/src/js/modules/counter.js ***!
  \***********************************************/
/***/ ((module) => {

eval("{\n\nfunction onCounterUpdate(event) {\n    counterValue++;\n    event.srcElement.innerHTML = counterValue;\n}\n\nmodule.exports = {onCounterUpdate};\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/modules/counter.js?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public_html/src/js/index.js");
/******/ 	
/******/ })()
;