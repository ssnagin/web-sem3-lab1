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
eval("{\n\nconst {onCounterUpdate} = __webpack_require__(/*! ./modules/counter */ \"./public_html/src/js/modules/counter.js\");\n\nconst {CustomForm} = __webpack_require__(/*! ./modules/form/form */ \"./public_html/src/js/modules/form/form.js\")\n\nvar counterValue = 1;\n\n\ndocument.addEventListener(\"DOMContentLoaded\", onDOMContentLoaded);\n\nfunction onDOMContentLoaded() {\n\n    // COUNTER\n\n    const counter = document.getElementById(\"counter\");\n\n    counter.addEventListener(\"click\", (event) => {\n        counterValue = onCounterUpdate(event, counterValue);\n    });\n\n    // FORM\n\n    const form = new CustomForm(\n        document.querySelector(\".sn-default-form\")\n    );\n}\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/index.js?\n}");

/***/ }),

/***/ "./public_html/src/js/modules/counter.js":
/*!***********************************************!*\
  !*** ./public_html/src/js/modules/counter.js ***!
  \***********************************************/
/***/ ((module) => {

eval("{\n\nfunction onCounterUpdate(event, counterValue) {\n    counterValue++;\n    event.srcElement.innerHTML = counterValue;\n    return counterValue;\n}\n\nmodule.exports = {onCounterUpdate};\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/modules/counter.js?\n}");

/***/ }),

/***/ "./public_html/src/js/modules/form/form.js":
/*!*************************************************!*\
  !*** ./public_html/src/js/modules/form/form.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const {RequestBuilder} = __webpack_require__(/*! ../www/requestBuilder.js */ \"./public_html/src/js/modules/www/requestBuilder.js\");\nconst {Validator} = __webpack_require__(/*! ../validation/validation.js */ \"./public_html/src/js/modules/validation/validation.js\");\nconst {FormValidationError} = __webpack_require__(/*! ../validation/errors.js */ \"./public_html/src/js/modules/validation/errors.js\");\n\n\nclass CustomForm {\n\n    rootElement = null;\n    errorElement = null;\n\n    checkboxPattern = \"input[type='checkbox']\";\n    activeCheckbox = null\n\n    activeButton = null\n    buttonsPattern = \"#buttons-single-choice input[type='button']\";\n    \n    activeTextField = null;\n\n    constructor(form) {\n        this.setRootElement(form);\n    }\n\n    setRootElement(element) {\n        this.rootElement = element;\n\n        this.errorElement = document.getElementById(\"error-field\");\n        console.log(12345, this.errorElement);\n        // CHECKBOXES\n\n        let checkboxes = document.querySelectorAll(this.checkboxPattern);\n\n        checkboxes.forEach(checkbox => {\n            checkbox.addEventListener(\"click\", (e) => {this.#handleCheckboxChange(e)})\n        });\n\n        // BUTTONS\n\n        let buttons = document.querySelectorAll(this.buttonsPattern);\n\n        buttons.forEach(button => {\n            button.addEventListener(\"click\", e => {this.#handleActiveButton(e)});\n        });       \n        \n        // TEXT FIELD\n\n        this.activeTextField = document.getElementById(\"coordY\");\n\n        // SUBMIT BUTTON\n\n        document.getElementById(\"form-submit\").addEventListener(\"click\", e => this.submitForm(e));\n    }\n\n    #handleCheckboxChange(event) {\n        const clickedCheckbox = event.target;\n\n        if (clickedCheckbox.checked) {\n            if (this.activeCheckbox && this.activeCheckbox !== clickedCheckbox)\n                this.activeCheckbox.checked = false;\n\n            this.activeCheckbox = clickedCheckbox\n            return\n        }\n\n        if (this.activeCheckbox === clickedCheckbox)\n            this.activeCheckbox = null;\n    }\n\n    #handleActiveButton(event) {\n        const clickedButton = event.target;\n\n        this.activeButton = event.target;\n    }\n\n    getSelectedCheckboxValue() {\n        return this.activeCheckbox ? this.activeCheckbox.value : null;\n    }\n\n    getSelectedCheckbox() {\n        return this.activeCheckbox;\n    }\n\n\n    submitForm(event) {\n\n        console.log(event);\n\n        try {\n            Validator.validate(this);\n        } catch (e) {\n            \n            if (!e instanceof FormValidationError) return;\n            console.log(this.errorElement);\n            this.errorElement.innerHTML = e.name + \" : \" + e.message;\n        }\n\n        // var requestData = RequestBuilder.build(this);\n    }\n}\n\nmodule.exports = { CustomForm };\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/modules/form/form.js?\n}");

/***/ }),

/***/ "./public_html/src/js/modules/validation/errors.js":
/*!*********************************************************!*\
  !*** ./public_html/src/js/modules/validation/errors.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nclass FormValidationError extends Error {\n    constructor(message) {\n        super(message);\n        this.name = \"FormValidationError\";\n    }\n}\n\nmodule.exports = {FormValidationError};\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/modules/validation/errors.js?\n}");

/***/ }),

/***/ "./public_html/src/js/modules/validation/validation.js":
/*!*************************************************************!*\
  !*** ./public_html/src/js/modules/validation/validation.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const {FormValidationError} = __webpack_require__(/*! ./errors.js */ \"./public_html/src/js/modules/validation/errors.js\");\n\nclass Validator {\n\n    static schema = {\n        x: Number,\n        y: Number,\n        z: Number\n    };\n\n\n    static validate(form) {\n\n        Validator.validateX(form);\n        Validator.validateY(form);\n        Validator.validateZ(form);\n    }\n\n    static validateX(form) {\n\n        if (form.activeButton == null)\n            throw new FormValidationError(\"Выберите X\");\n\n        console.log(form.activeButton.value);\n\n        if (!(Number.isInteger(form.activeButton.value)))\n            throw new FormValidationError(\"X должен быть числом\");\n    }\n\n    static validateY(form) {\n\n    }\n\n    static validateZ(form) {\n\n    }\n}\n\nmodule.exports = { Validator }\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/modules/validation/validation.js?\n}");

/***/ }),

/***/ "./public_html/src/js/modules/www/requestBuilder.js":
/*!**********************************************************!*\
  !*** ./public_html/src/js/modules/www/requestBuilder.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("{class RequestBuilder {\n    \n    static schema = {\n        coordinates: {\n            x: 0.0,\n            y: 0.0,\n            z: 0.0\n        }\n    }\n\n    constructor() {\n        \n    }\n\n    static build(form) {\n        let result = RequestBuilder.schema;\n\n        result.coordinates.x = form.activeButton.value;\n        result.coordinates.y = form.activeTextField.value;\n    }\n    \n}\n\nmodule.exports = {RequestBuilder};\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/src/js/modules/www/requestBuilder.js?\n}");

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