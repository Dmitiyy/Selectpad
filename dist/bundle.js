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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/plugin */ \"./src/modules/plugin.js\");\n\r\n\r\nconst selectpadElem = document.querySelector('.selectpad');\r\nconst title = document.querySelector('.selectpad .selectpad-title');\r\nlet options = document.querySelectorAll('.selectpad .selectpad-opt');\r\nconst wraps = document.querySelectorAll('.selectpad .selectpad-wrap');\r\nconst suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');\r\nconst burger = document.querySelector('.burger');\r\n\r\nconst selectpad = new _modules_plugin__WEBPACK_IMPORTED_MODULE_0__.default (selectpadElem, title, options, wraps, suboptions);\r\n\r\nselectpad.init();\r\n\r\nconst btnAddOpt = document.querySelector('.btn_add-opt'),\r\n      btnRemoveOpt = document.querySelector('.btn_remove-opt'),\r\n      btnAddSubopt = document.querySelector('.btn_add-subopt'),\r\n      btnRemoveSubopt = document.querySelector('.btn_remove-subopt');\r\n\r\nconst titleOpt = document.querySelector('.input_add-opt'),\r\n      titleSubopt = document.querySelector('.input_add-subopt'),\r\n      numberAddSubopt = document.querySelector('.num_add-subopt'),\r\n      numberRemoveOpt = document.querySelector('.input_remove-opt'),\r\n      numberRemoveSuboptBlock = document.querySelector('.input_remove-subopt'),\r\n      numberRemoveSuboptElement = document.querySelector('.num_remove-subopt');\r\n\r\nbtnAddOpt.addEventListener('click', () => {\r\n    if (titleOpt.value.length > 1) {\r\n        selectpad.addNewOption(titleOpt.value, `value: ${titleOpt.value}`);\r\n    }\r\n});\r\n\r\nbtnRemoveOpt.addEventListener('click', () => {\r\n    if (numberRemoveOpt.value.length !== 0) {\r\n        selectpad.removeOption(numberRemoveOpt.value);\r\n    }\r\n});\r\n\r\nbtnAddSubopt.addEventListener('click', () => {\r\n    if (titleSubopt.value.length !== 0 && numberAddSubopt.value.length !== 0) {\r\n        selectpad.addSuboption(+numberAddSubopt.value, titleSubopt.value);\r\n    }\r\n});\r\n\r\nbtnRemoveSubopt.addEventListener('click', () => {\r\n    if (numberRemoveSuboptBlock.value.length !== 0 && numberRemoveSuboptElement.value.length !== 0) {\r\n        selectpad.removeSuboption(+numberRemoveSuboptBlock.value, numberRemoveSuboptElement.value);\r\n    }\r\n});\r\n\r\nburger.addEventListener('click', () => {\r\n    document.querySelector('.burger_list').classList.toggle('active');\r\n})\n\n//# sourceURL=webpack://library_select/./src/index.js?");

/***/ }),

/***/ "./src/modules/plugin.js":
/*!*******************************!*\
  !*** ./src/modules/plugin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Selectpad {\r\n    constructor (selectpad, title, options, wraps, suboptions) {\r\n        this.selectpad = selectpad;\r\n        this.title = title;\r\n        this.optionsElems = options;\r\n        this.showOpts = false;\r\n        this.options = [];\r\n        this.wraps = wraps;\r\n        this.suboptions = suboptions;\r\n        this.newState = [];\r\n        this.active = false;\r\n    }\r\n\r\n    createData () {\r\n        try {\r\n            this.optionsElems.forEach(item => {\r\n                this.options.push(item);\r\n            })\r\n        } catch (e) {console.log(e)}\r\n    }\r\n\r\n    changeStyle (element, propertys, values) {\r\n        try {\r\n            this.data = [];\r\n            for (let i = 0; i < propertys.length; i++) {\r\n                this.data.push([propertys[i], values[i]]);\r\n            }\r\n            for (let i = 0; i < this.data.length; i++) {\r\n                element.style[this.data[i][0]] = `${this.data[i][1]}`;\r\n            }\r\n        } catch (e) {console.log(e)}\r\n    }\r\n\r\n    handleClick () {\r\n        try {\r\n            this.title.addEventListener('click', () => {\r\n                this.showOpts = !this.showOpts;\r\n                this.openOptions();\r\n            });\r\n        } catch (e) {console.log(e)}\r\n    }\r\n\r\n    styleElementOn (element) {\r\n        try {\r\n            this.changeStyle(element, [\r\n                'transition', 'borderBottom',\r\n                'height', 'fontSize'\r\n            ], [\r\n                'all 0.3s', '4px solid #050814', \r\n                '70px', '20px'\r\n            ]);\r\n        } catch (e) {console.log(e)}\r\n    }\r\n\r\n    styleElementOff (element) {\r\n        try {\r\n            this.changeStyle(element, [\r\n                'transition', 'border',\r\n                'height', 'fontSize'\r\n            ], [\r\n                'all 0.3s', '0px solid #85aac500', \r\n                '0px', '0px'\r\n            ]);\r\n        } catch (e) {console.log(e)}\r\n    }\r\n\r\n    openOptions () {\r\n        this.suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');\r\n        try {\r\n            this.result = [];\r\n            for (let i = 0; i < this.options.length; i++) {\r\n                this.result.push((this.options.length - i) - 1);\r\n            }  \r\n            if (this.showOpts) { \r\n                for (let i = 0; i < this.result.length; i++) {\r\n                    this.styleElementOff(this.options[i]);\r\n                }\r\n                for (let i = 0; i < this.suboptions.length; i++) {\r\n                    this.styleElementOff(this.suboptions[i]);\r\n                }\r\n                this.wraps.forEach(item => {\r\n                    item.setAttribute('open', false);\r\n                })\r\n            } else {\r\n                for (let i = 0; i < this.result.length; i++) {\r\n                    this.styleElementOn(this.options[i]);\r\n                }\r\n            }\r\n        } catch (e) {console.log(e)}\r\n    }\r\n\r\n    openSuboptions (item) {\r\n        try {\r\n            this.wraps = document.querySelectorAll('.selectpad .selectpad-wrap');\r\n            this.elements = item.querySelectorAll('.selectpad-subopt');\r\n            if (item.getAttribute('open') === 'false') {\r\n                for (let i = 0; i < this.elements.length; i++) {\r\n                    this.styleElementOff(this.elements[i]);\r\n                }\r\n            } else if (item.getAttribute('open') === 'true') {\r\n                for (let i = 0; i < this.elements.length; i++) {\r\n                    this.styleElementOn(this.elements[i]);\r\n                }\r\n            }\r\n        } catch (e) {console.log(e)}\r\n    }\r\n\r\n    addNewOption (title, value) {\r\n        try {\r\n            const item = document.createElement('div');\r\n            item.classList.add('selectpad-wrap');\r\n            item.setAttribute('open', false);\r\n            const itemOpt = document.createElement('div');\r\n            itemOpt.textContent = title;\r\n            itemOpt.classList.add('selectpad-opt');\r\n            itemOpt.setAttribute('value', value);\r\n            item.append(itemOpt);\r\n            this.selectpad.append(item);\r\n            this.options = document.querySelectorAll('.selectpad .selectpad-opt');\r\n            this.wraps = document.querySelectorAll('.selectpad .selectpad-wrap');\r\n            this.newState.push(itemOpt);\r\n            itemOpt.addEventListener('click', () => {\r\n                this.attr = item.getAttribute('open');\r\n                if (this.attr) {\r\n                    if (this.attr === 'false') {\r\n                        item.setAttribute('open', true);                        \r\n                    } else {\r\n                        item.setAttribute('open', false);\r\n                    }\r\n                }\r\n                this.openSuboptions(item);\r\n            })\r\n        } catch (e) {console.log(e)}\r\n    }\r\n\r\n    removeOption (index) {\r\n        this.wraps = document.querySelectorAll('.selectpad .selectpad-wrap');\r\n        this.suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');\r\n        try {\r\n            this.wraps[index-1].remove();\r\n            this.options = document.querySelectorAll('.selectpad .selectpad-opt');\r\n        } catch (e) {console.log(e)}\r\n    }\r\n\r\n    removeSuboption (element, index) {\r\n        this.suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');\r\n        this.wraps = document.querySelectorAll('.selectpad .selectpad-wrap');\r\n        try {\r\n            this.itemsSub = [];\r\n            this.wraps[element-1].childNodes.forEach(item => {\r\n                if (item.classList !== undefined) {\r\n                    if (item.classList[0] === 'selectpad-subopt') {\r\n                        this.itemsSub.push(item);\r\n                    }\r\n                }\r\n            });\r\n            console.log(this.itemsSub);\r\n            this.itemsSub[index-1].remove();\r\n            this.suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');\r\n            this.options = document.querySelectorAll('.selectpad .selectpad-opt');\r\n        } catch (e) {console.log(e)}\r\n    }\r\n\r\n    addSuboption (item, text) {\r\n        try {\r\n            this.suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');\r\n            this.wraps = document.querySelectorAll('.selectpad .selectpad-wrap');\r\n            const subElement = document.createElement('div');\r\n            subElement.textContent = text;\r\n            subElement.classList.add('selectpad-subopt');\r\n            this.wraps[item-1].append(subElement);\r\n        } catch (e) {console.log(e)}\r\n    }\r\n\r\n    handleClickSub () {\r\n        try {\r\n            this.wraps = document.querySelectorAll('.selectpad .selectpad-wrap');\r\n            this.options = document.querySelectorAll('.selectpad .selectpad-opt');\r\n            this.suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');\r\n            this.newState.forEach(item => {\r\n                item.addEventListener('click', () => {\r\n                    this.attr = item.parentNode.getAttribute('open');\r\n                    if (this.attr) {\r\n                        if (this.attr === 'false') {\r\n                            item.parentNode.setAttribute('open', true);                        \r\n                        } else {\r\n                            item.parentNode.setAttribute('open', false);\r\n                        }\r\n                    }\r\n                    this.openSuboptions(item.parentNode);\r\n                })\r\n            })\r\n            \r\n        } catch (e) {console.log(e);}\r\n    }\r\n\r\n    init () {\r\n        this.createData();\r\n        this.options.forEach(item => {\r\n            this.newState.push(item);\r\n        })\r\n        this.handleClick();\r\n        this.handleClickSub();\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Selectpad);\n\n//# sourceURL=webpack://library_select/./src/modules/plugin.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;