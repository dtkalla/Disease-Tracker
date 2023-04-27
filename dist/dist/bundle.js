/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './scripts/button.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './scripts/map.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


document.addEventListener("DOMContentLoaded", () => {
    const data = document.getElementById("my_dataviz");
    new Object(function webpackMissingModule() { var e = new Error("Cannot find module './scripts/map.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data);
    const dataCopy = document.getElementById("copy");
    const map = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './scripts/map.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(dataCopy);
    const data1 = document.getElementById("tuberculosis");
    new Object(function webpackMissingModule() { var e = new Error("Cannot find module './scripts/button.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data1, map, "tuberculosis");
    const data2 = document.getElementById("malaria");
    new Object(function webpackMissingModule() { var e = new Error("Cannot find module './scripts/button.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data2, map, "malaria");
    const data3 = document.getElementById("HIV");
    new Object(function webpackMissingModule() { var e = new Error("Cannot find module './scripts/button.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data3, map, "HIV");
    const data4 = document.getElementById("covid19");
    new Object(function webpackMissingModule() { var e = new Error("Cannot find module './scripts/button.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data4, map, "covid19");
    const data5 = document.getElementById("guineaWorm");
    new Object(function webpackMissingModule() { var e = new Error("Cannot find module './scripts/button.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data5, map, "guineaworm");
    const data6 = document.getElementById("polio");
    new Object(function webpackMissingModule() { var e = new Error("Cannot find module './scripts/button.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data6, map, "polio");
    const data7 = document.getElementById("leprosy");
    new Object(function webpackMissingModule() { var e = new Error("Cannot find module './scripts/button.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data7, map, "leprosy");
    const modal = document.getElementById("myModal");
    const modalButton = document.getElementById("modalButton");
    const modalButtonImage = document.getElementById("modalButtonImage");
    const span = document.getElementsByClassName("close")[0];
    // modal.style.display = "none";
    modalButton.onclick = function () {
        modal.style.display = "block";
    };
    span.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target != modal && event.target != modalButtonImage) {
            modal.style.display = "none";
        }
    };
});

/******/ })()
;
//# sourceMappingURL=bundle.js.map