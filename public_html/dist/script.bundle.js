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

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar _require = __webpack_require__(/*! ./modules/counter/counter */ \"./public_html/dist/ts_out/modules/counter/counter.js\"),\n  onCounterUpdate = _require.onCounterUpdate;\nvar _require2 = __webpack_require__(/*! ./objects/form/CustomForm */ \"./public_html/dist/ts_out/objects/form/CustomForm.js\"),\n  CustomForm = _require2.CustomForm;\nvar counterValue = 1;\ndocument.addEventListener(\"DOMContentLoaded\", onDOMContentLoaded);\nfunction onDOMContentLoaded() {\n  // COUNTER\n  var counter = document.getElementById(\"counter\");\n  counter === null || counter === void 0 || counter.addEventListener(\"click\", function (event) {\n    counterValue = onCounterUpdate(event, counterValue);\n  });\n  // FORM\n  var form = new CustomForm(document.querySelector(\".sn-default-form\"));\n}\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/dist/ts_out/index.js?\n}");

/***/ }),

/***/ "./public_html/dist/ts_out/modules/counter/counter.js":
/*!************************************************************!*\
  !*** ./public_html/dist/ts_out/modules/counter/counter.js ***!
  \************************************************************/
/***/ ((module, exports) => {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nfunction onCounterUpdate(event, counterValue) {\n  counterValue++;\n  var target = event.target;\n  target.innerHTML = counterValue.toString();\n  return counterValue;\n}\nmodule.exports = {\n  onCounterUpdate: onCounterUpdate\n};\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/dist/ts_out/modules/counter/counter.js?\n}");

/***/ }),

/***/ "./public_html/dist/ts_out/modules/form/errors/FormValidationError.js":
/*!****************************************************************************!*\
  !*** ./public_html/dist/ts_out/modules/form/errors/FormValidationError.js ***!
  \****************************************************************************/
/***/ ((module, exports) => {

eval("{\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _wrapNativeSuper(t) { var r = \"function\" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }\nfunction _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf(\"[native code]\"); } catch (n) { return \"function\" == typeof t; } }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar FormValidationError = /*#__PURE__*/function (_Error) {\n  function FormValidationError(message) {\n    var _this;\n    _classCallCheck(this, FormValidationError);\n    _this = _callSuper(this, FormValidationError, [message]);\n    _this.name = \"FormValidationError\";\n    return _this;\n  }\n  _inherits(FormValidationError, _Error);\n  return _createClass(FormValidationError);\n}(/*#__PURE__*/_wrapNativeSuper(Error));\nmodule.exports = {\n  FormValidationError: FormValidationError\n};\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/dist/ts_out/modules/form/errors/FormValidationError.js?\n}");

/***/ }),

/***/ "./public_html/dist/ts_out/objects/form/CustomForm.js":
/*!************************************************************!*\
  !*** ./public_html/dist/ts_out/objects/form/CustomForm.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("{\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar _require = __webpack_require__(/*! ../../modules/form/errors/FormValidationError */ \"./public_html/dist/ts_out/modules/form/errors/FormValidationError.js\"),\n  FormValidationError = _require.FormValidationError;\nvar CustomForm = /*#__PURE__*/function () {\n  function CustomForm(form) {\n    _classCallCheck(this, CustomForm);\n    _defineProperty(this, \"rootElement\", null);\n    _defineProperty(this, \"errorElement\", null);\n    _defineProperty(this, \"checkboxPattern\", \"input[type='checkbox']\");\n    _defineProperty(this, \"activeCheckbox\", null);\n    _defineProperty(this, \"activeButton\", null);\n    _defineProperty(this, \"buttonsPattern\", \"#buttons-single-choice input[type='button']\");\n    _defineProperty(this, \"activeTextField\", null);\n    _defineProperty(this, \"submitButton\", null);\n    this.setRootElement(form);\n  }\n  return _createClass(CustomForm, [{\n    key: \"setRootElement\",\n    value: function setRootElement(element) {\n      var _this = this;\n      this.rootElement = element;\n      this.errorElement = document.getElementById(\"error-field\");\n      console.log(12345, this.errorElement);\n      // CHECKBOXES\n      var checkboxes = document.querySelectorAll(this.checkboxPattern);\n      checkboxes.forEach(function (checkbox) {\n        checkbox.addEventListener(\"click\", function (e) {\n          _this.handleCheckboxChange(e);\n        });\n      });\n      // BUTTONS\n      var buttons = document.querySelectorAll(this.buttonsPattern);\n      buttons.forEach(function (button) {\n        button.addEventListener(\"click\", function (e) {\n          _this.handleActiveButton(e);\n        });\n      });\n      // TEXT FIELD\n      this.activeTextField = document.getElementById(\"coordY\");\n      // SUBMIT BUTTON\n      var submitBtn = document.getElementById(\"form-submit\");\n      submitBtn === null || submitBtn === void 0 || submitBtn.addEventListener(\"click\", function (e) {\n        return _this.submitForm(e);\n      });\n    }\n  }, {\n    key: \"handleCheckboxChange\",\n    value: function handleCheckboxChange(event) {\n      var clickedCheckbox = event.target;\n      if (clickedCheckbox.checked) {\n        if (this.activeCheckbox && this.activeCheckbox !== clickedCheckbox) this.activeCheckbox.checked = false;\n        this.activeCheckbox = clickedCheckbox;\n        return;\n      }\n      if (this.activeCheckbox === clickedCheckbox) this.activeCheckbox = null;\n    }\n  }, {\n    key: \"handleActiveButton\",\n    value: function handleActiveButton(event) {\n      var clickedButton = event.target;\n      this.activeButton = event.target;\n    }\n  }, {\n    key: \"getSelectedCheckboxValue\",\n    value: function getSelectedCheckboxValue() {\n      return this.activeCheckbox ? this.activeCheckbox.value : null;\n    }\n  }, {\n    key: \"getSelectedCheckbox\",\n    value: function getSelectedCheckbox() {\n      return this.activeCheckbox;\n    }\n  }, {\n    key: \"submitForm\",\n    value: function submitForm(event) {\n      console.log(event);\n      // try {\n      //     Validator.validate(this);\n      // } catch (e) {\n      //     if (!e instanceof FormValidationError) return;\n      //     console.log(this.errorElement);\n      //     this.errorElement.innerHTML = e.name + \" : \" + e.message;\n      // }\n      // var requestData = RequestBuilder.build(this);\n    }\n  }]);\n}();\nmodule.exports = {\n  CustomForm: CustomForm\n};\n\n//# sourceURL=webpack://web-sem3-lab1/./public_html/dist/ts_out/objects/form/CustomForm.js?\n}");

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