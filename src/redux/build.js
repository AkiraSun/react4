/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_counter__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__store__);



// 打印初始状态
// console.log(store.getState());

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = __WEBPACK_IMPORTED_MODULE_1__store___default.a.subscribe(() =>
    console.log(__WEBPACK_IMPORTED_MODULE_1__store___default.a.getState())
);

// 发起一系列 action
__WEBPACK_IMPORTED_MODULE_1__store___default.a.dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_counter__["b" /* increment */])());
__WEBPACK_IMPORTED_MODULE_1__store___default.a.dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_counter__["a" /* decrement */])());
__WEBPACK_IMPORTED_MODULE_1__store___default.a.dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions_counter__["c" /* reset */])());

// 停止监听 state 更新
unsubscribe();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = increment;
/* harmony export (immutable) */ __webpack_exports__["a"] = decrement;
/* harmony export (immutable) */ __webpack_exports__["c"] = reset;
const INCREMENT = "counter/INCREMENT";
/* unused harmony export INCREMENT */

const DECREMENT = "counter/DECREMENT";
/* unused harmony export DECREMENT */

const RESET = "counter/RESET";
/* unused harmony export RESET */


function increment() {
    return {type: INCREMENT}
}

function decrement() {
    return {type: DECREMENT}
}

function reset() {
    return {type: RESET}
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);