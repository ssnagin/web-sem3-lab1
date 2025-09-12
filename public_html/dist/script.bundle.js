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
eval("{\r\n\r\nconst {onCounterUpdate} = __webpack_require__(/*! ./modules/counter */ \"./public_html/src/js/modules/counter.js\");\r\n\r\nconst {CustomForm} = __webpack_require__(/*! ./modules/form/form */ \"./public_html/src/js/modules/form/form.js\")\r\n\r\nvar counterValue = 1;\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", onDOMContentLoaded);\r\n\r\nfunction onDOMContentLoaded() {\r\n\r\n    // COUNTER\r\n\r\n    const counter = document.getElementById(\"counter\");\r\n\r\n    counter.addEventListener(\"click\", (event) => {\r\n        counterValue = onCounterUpdate(event, counterValue);\r\n    });\r\n\r\n    // FORM\r\n\r\n    const form = new CustomForm(\r\n        document.querySelector(\".sn-default-form\")\r\n    );\r\n}\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/index.js?\n}");

/***/ }),

/***/ "./public_html/src/js/modules/counter.js":
/*!***********************************************!*\
  !*** ./public_html/src/js/modules/counter.js ***!
  \***********************************************/
/***/ ((module) => {

eval("{\r\n\r\nfunction onCounterUpdate(event, counterValue) {\r\n    counterValue++;\r\n    event.srcElement.innerHTML = counterValue;\r\n    return counterValue;\r\n}\r\n\r\nmodule.exports = {onCounterUpdate};\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/modules/counter.js?\n}");

/***/ }),

/***/ "./public_html/src/js/modules/form/form.js":
/*!*************************************************!*\
  !*** ./public_html/src/js/modules/form/form.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const {RequestBuilder} = __webpack_require__(/*! ../www/requestBuilder.js */ \"./public_html/src/js/modules/www/requestBuilder.js\");\r\nconst {Validator} = __webpack_require__(/*! ../validation/validation.js */ \"./public_html/src/js/modules/validation/validation.js\");\r\nconst {FormValidationError} = __webpack_require__(/*! ../validation/errors.js */ \"./public_html/src/js/modules/validation/errors.js\");\r\n\r\n\r\nclass CustomForm {\r\n\r\n    rootElement = null;\r\n    errorElement = null;\r\n\r\n    checkboxPattern = \"input[type='checkbox']\";\r\n    activeCheckbox = null\r\n\r\n    activeButton = null\r\n    buttonsPattern = \"#buttons-single-choice input[type='button']\";\r\n    \r\n    activeTextField = null;\r\n\r\n    constructor(form) {\r\n        this.setRootElement(form);\r\n    }\r\n\r\n    setRootElement(element) {\r\n        this.rootElement = element;\r\n\r\n        this.errorElement = document.getElementById(\"error-field\");\r\n        console.log(12345, this.errorElement);\r\n        // CHECKBOXES\r\n\r\n        let checkboxes = document.querySelectorAll(this.checkboxPattern);\r\n\r\n        checkboxes.forEach(checkbox => {\r\n            checkbox.addEventListener(\"click\", (e) => {this.#handleCheckboxChange(e)})\r\n        });\r\n\r\n        // BUTTONS\r\n\r\n        let buttons = document.querySelectorAll(this.buttonsPattern);\r\n\r\n        buttons.forEach(button => {\r\n            button.addEventListener(\"click\", e => {this.#handleActiveButton(e)});\r\n        });       \r\n        \r\n        // TEXT FIELD\r\n\r\n        this.activeTextField = document.getElementById(\"coordY\");\r\n\r\n        // SUBMIT BUTTON\r\n\r\n        document.getElementById(\"form-submit\").addEventListener(\"click\", e => this.submitForm(e));\r\n    }\r\n\r\n    #handleCheckboxChange(event) {\r\n        const clickedCheckbox = event.target;\r\n\r\n        if (clickedCheckbox.checked) {\r\n            if (this.activeCheckbox && this.activeCheckbox !== clickedCheckbox)\r\n                this.activeCheckbox.checked = false;\r\n\r\n            this.activeCheckbox = clickedCheckbox\r\n            return\r\n        }\r\n\r\n        if (this.activeCheckbox === clickedCheckbox)\r\n            this.activeCheckbox = null;\r\n    }\r\n\r\n    #handleActiveButton(event) {\r\n        const clickedButton = event.target;\r\n\r\n        this.activeButton = event.target;\r\n    }\r\n\r\n    getSelectedCheckboxValue() {\r\n        return this.activeCheckbox ? this.activeCheckbox.value : null;\r\n    }\r\n\r\n    getSelectedCheckbox() {\r\n        return this.activeCheckbox;\r\n    }\r\n\r\n\r\n    submitForm(event) {\r\n\r\n        console.log(event);\r\n\r\n        try {\r\n            Validator.validate(this);\r\n        } catch (e) {\r\n            \r\n            if (!e instanceof FormValidationError) return;\r\n            console.log(this.errorElement);\r\n            this.errorElement.innerHTML = e.name + \" : \" + e.message;\r\n        }\r\n\r\n        // var requestData = RequestBuilder.build(this);\r\n    }\r\n}\r\n\r\nmodule.exports = { CustomForm };\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/modules/form/form.js?\n}");

/***/ }),

/***/ "./public_html/src/js/modules/validation/errors.js":
/*!*********************************************************!*\
  !*** ./public_html/src/js/modules/validation/errors.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("{\r\n\r\nclass FormValidationError extends Error {\r\n    constructor(message) {\r\n        super(message);\r\n        this.name = \"FormValidationError\";\r\n    }\r\n}\r\n\r\nmodule.exports = {FormValidationError};\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/modules/validation/errors.js?\n}");

/***/ }),

/***/ "./public_html/src/js/modules/validation/validation.js":
/*!*************************************************************!*\
  !*** ./public_html/src/js/modules/validation/validation.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const {FormValidationError} = __webpack_require__(/*! ./errors.js */ \"./public_html/src/js/modules/validation/errors.js\");\r\n\r\nclass Validator {\r\n\r\n    static schema = {\r\n        x: Number,\r\n        y: Number,\r\n        z: Number\r\n    };\r\n\r\n\r\n    static validate(form) {\r\n\r\n        Validator.validateX(form);\r\n        Validator.validateY(form);\r\n        Validator.validateZ(form);\r\n    }\r\n\r\n    static validateX(form) {\r\n\r\n        if (form.activeButton == null)\r\n            throw new FormValidationError(\"Выберите X\");\r\n\r\n        console.log(form.activeButton.value);\r\n\r\n        if (!(Number.isInteger(form.activeButton.value)))\r\n            throw new FormValidationError(\"X должен быть числом\");\r\n    }\r\n\r\n    static validateY(form) {\r\n\r\n    }\r\n\r\n    static validateZ(form) {\r\n\r\n    }\r\n}\r\n\r\nmodule.exports = { Validator }\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/modules/validation/validation.js?\n}");

/***/ }),

/***/ "./public_html/src/js/modules/www/requestBuilder.js":
/*!**********************************************************!*\
  !*** ./public_html/src/js/modules/www/requestBuilder.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("{class RequestBuilder {\r\n    \r\n    static schema = {\r\n        coordinates: {\r\n            x: 0.0,\r\n            y: 0.0,\r\n            z: 0.0\r\n        }\r\n    }\r\n\r\n    constructor() {\r\n        \r\n    }\r\n\r\n    static build(form) {\r\n        let result = RequestBuilder.schema;\r\n\r\n        result.coordinates.x = form.activeButton.value;\r\n        result.coordinates.y = form.activeTextField.value;\r\n    }\r\n    \r\n}\r\n\r\nmodule.exports = {RequestBuilder};\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/modules/www/requestBuilder.js?\n}");

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