/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/map */ \"./src/scripts/map.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const data = document.getElementById(\"tuberculosis\");\n  new _scripts_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBb0M7QUFHcENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUNwRCxJQUFJSixvREFBTyxDQUFDRyxJQUFJLENBQUM7QUFDckIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9nbG9iYWxfaGVhbHRoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc2Vhc2UgZnJvbSBcIi4vc2NyaXB0cy9tYXBcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHViZXJjdWxvc2lzXCIpO1xuICAgIG5ldyBEaXNlYXNlKGRhdGEpO1xufSk7XG5cblxuIl0sIm5hbWVzIjpbIkRpc2Vhc2UiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// let htmlString = `<svg id=\"my_dataviz\" width=\"850\" height=\"450\">\n// <script>\n//   const svg = d3.select(\"svg\"),\n//     width = svg.attr(\"width\"),\n//     height = svg.attr(\"height\");\n\n//   const path = d3.geoPath();\n//   const projection = d3.geoNaturalEarth1()\n//     .scale(120)\n//     .center([0,0])\n\n//   const data = d3.map();\n//   const colorScale = d3.scaleThreshold()\n//     .domain([-1,0,1,10,100,1000,10000,100000,100000])\n//     .range(['#FFFFFF','#BBBBBB','#FFFFFF','#FFDDDD','#FCBBA1','#FC9272','#FB6A4A','#DE2D26','#A50F15','#750000']);\n\n//   d3.queue()\n//     .defer(d3.json, \"https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson\")\n//     .defer(d3.csv, \"./src/scripts/data/HIV.csv\", function(d) { if (d.year==2020) {data.set(d.name, +d.cases)}; })\n//     .await(ready);\n\n//   function ready(error, topo) {\n\n//     let mouseOver = function(d) {\n//       d3.selectAll(\".Country\")\n//         .transition()\n//         .duration(200)\n//         .style(\"opacity\", .5)\n//       d3.select(this)\n//         .transition()\n//         .duration(200)\n//         .style(\"opacity\", 1)\n//         .style(\"stroke\", \"black\")\n//     }\n\n//     let mouseLeave = function(d) {\n//       d3.selectAll(\".Country\")\n//         .transition()\n//         .duration(200)\n//         .style(\"opacity\", .8)\n//       d3.select(this)\n//         .transition()\n//         .duration(200)\n//         .style(\"stroke\", \"transparent\")\n//     }\n\n//     svg.append(\"g\")\n//       .selectAll(\"path\")\n//       .data(topo.features)\n//       .enter()\n//       .append(\"path\")\n//         // draw each country\n//         .attr(\"d\", d3.geoPath()\n//           .projection(projection)\n//         )\n//         // set the color of each country\n//         .attr(\"fill\", function (d) {\n//           d.total = data.get(d.id);\n//           if (d.total === undefined) d.total = -1;\n//           return colorScale(d.total);\n//         })\n//         .style(\"stroke\", \"transparent\")\n//         .attr(\"class\", function(d){ return \"Country\" } )\n//         .style(\"opacity\", .8)\n//         .on(\"mouseover\", mouseOver )\n//         .on(\"mouseleave\", mouseLeave )\n//       }\n\n//   </script>\n\n// </svg>`\n\nclass Disease {\n  constructor(ele) {\n    this.ele = ele;\n    window.chosenDisease = \"malaria\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick() {\n    window.chosenDisease = \"tuberculosis\";\n    chosenDisease = \"tuberculosis\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Disease);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXAuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7O0FBRUE7O0FBRUEsTUFBTUEsT0FBTyxDQUFDO0VBQ05DLFdBQVcsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1osSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZEMsTUFBTSxDQUFDQyxhQUFhLEdBQUcsU0FBUztJQUNoQyxJQUFJLENBQUNGLEdBQUcsQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbkU7RUFFQUQsV0FBVyxHQUFFO0lBQ1RILE1BQU0sQ0FBQ0MsYUFBYSxHQUFHLGNBQWM7SUFDckNBLGFBQWEsR0FBRyxjQUFjO0VBQ2xDO0FBQ0o7QUFFQSwrREFBZUosT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfZ2xvYmFsX2hlYWx0aC8uL3NyYy9zY3JpcHRzL21hcC5qcz9mNTZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxldCBodG1sU3RyaW5nID0gYDxzdmcgaWQ9XCJteV9kYXRhdml6XCIgd2lkdGg9XCI4NTBcIiBoZWlnaHQ9XCI0NTBcIj5cbi8vIDxzY3JpcHQ+XG4vLyAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcInN2Z1wiKSxcbi8vICAgICB3aWR0aCA9IHN2Zy5hdHRyKFwid2lkdGhcIiksXG4vLyAgICAgaGVpZ2h0ID0gc3ZnLmF0dHIoXCJoZWlnaHRcIik7XG4gIFxuLy8gICBjb25zdCBwYXRoID0gZDMuZ2VvUGF0aCgpO1xuLy8gICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTmF0dXJhbEVhcnRoMSgpXG4vLyAgICAgLnNjYWxlKDEyMClcbi8vICAgICAuY2VudGVyKFswLDBdKVxuICBcbi8vICAgY29uc3QgZGF0YSA9IGQzLm1hcCgpO1xuLy8gICBjb25zdCBjb2xvclNjYWxlID0gZDMuc2NhbGVUaHJlc2hvbGQoKVxuLy8gICAgIC5kb21haW4oWy0xLDAsMSwxMCwxMDAsMTAwMCwxMDAwMCwxMDAwMDAsMTAwMDAwXSlcbi8vICAgICAucmFuZ2UoWycjRkZGRkZGJywnI0JCQkJCQicsJyNGRkZGRkYnLCcjRkZEREREJywnI0ZDQkJBMScsJyNGQzkyNzInLCcjRkI2QTRBJywnI0RFMkQyNicsJyNBNTBGMTUnLCcjNzUwMDAwJ10pO1xuXG4vLyAgIGQzLnF1ZXVlKClcbi8vICAgICAuZGVmZXIoZDMuanNvbiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vaG9sdHp5L0QzLWdyYXBoLWdhbGxlcnkvbWFzdGVyL0RBVEEvd29ybGQuZ2VvanNvblwiKVxuLy8gICAgIC5kZWZlcihkMy5jc3YsIFwiLi9zcmMvc2NyaXB0cy9kYXRhL0hJVi5jc3ZcIiwgZnVuY3Rpb24oZCkgeyBpZiAoZC55ZWFyPT0yMDIwKSB7ZGF0YS5zZXQoZC5uYW1lLCArZC5jYXNlcyl9OyB9KVxuLy8gICAgIC5hd2FpdChyZWFkeSk7XG4gIFxuLy8gICBmdW5jdGlvbiByZWFkeShlcnJvciwgdG9wbykge1xuICBcbi8vICAgICBsZXQgbW91c2VPdmVyID0gZnVuY3Rpb24oZCkge1xuLy8gICAgICAgZDMuc2VsZWN0QWxsKFwiLkNvdW50cnlcIilcbi8vICAgICAgICAgLnRyYW5zaXRpb24oKVxuLy8gICAgICAgICAuZHVyYXRpb24oMjAwKVxuLy8gICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIC41KVxuLy8gICAgICAgZDMuc2VsZWN0KHRoaXMpXG4vLyAgICAgICAgIC50cmFuc2l0aW9uKClcbi8vICAgICAgICAgLmR1cmF0aW9uKDIwMClcbi8vICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuLy8gICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuLy8gICAgIH1cbiAgXG4vLyAgICAgbGV0IG1vdXNlTGVhdmUgPSBmdW5jdGlvbihkKSB7XG4vLyAgICAgICBkMy5zZWxlY3RBbGwoXCIuQ291bnRyeVwiKVxuLy8gICAgICAgICAudHJhbnNpdGlvbigpXG4vLyAgICAgICAgIC5kdXJhdGlvbigyMDApXG4vLyAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgLjgpXG4vLyAgICAgICBkMy5zZWxlY3QodGhpcylcbi8vICAgICAgICAgLnRyYW5zaXRpb24oKVxuLy8gICAgICAgICAuZHVyYXRpb24oMjAwKVxuLy8gICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgXCJ0cmFuc3BhcmVudFwiKVxuLy8gICAgIH1cbiAgXG4vLyAgICAgc3ZnLmFwcGVuZChcImdcIilcbi8vICAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4vLyAgICAgICAuZGF0YSh0b3BvLmZlYXR1cmVzKVxuLy8gICAgICAgLmVudGVyKClcbi8vICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4vLyAgICAgICAgIC8vIGRyYXcgZWFjaCBjb3VudHJ5XG4vLyAgICAgICAgIC5hdHRyKFwiZFwiLCBkMy5nZW9QYXRoKClcbi8vICAgICAgICAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKVxuLy8gICAgICAgICApXG4vLyAgICAgICAgIC8vIHNldCB0aGUgY29sb3Igb2YgZWFjaCBjb3VudHJ5XG4vLyAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCkge1xuLy8gICAgICAgICAgIGQudG90YWwgPSBkYXRhLmdldChkLmlkKTtcbi8vICAgICAgICAgICBpZiAoZC50b3RhbCA9PT0gdW5kZWZpbmVkKSBkLnRvdGFsID0gLTE7XG4vLyAgICAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoZC50b3RhbCk7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBcInRyYW5zcGFyZW50XCIpXG4vLyAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24oZCl7IHJldHVybiBcIkNvdW50cnlcIiB9IClcbi8vICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAuOClcbi8vICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIG1vdXNlT3ZlciApXG4vLyAgICAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgbW91c2VMZWF2ZSApXG4vLyAgICAgICB9XG5cbiAgICAgIFxuLy8gICA8L3NjcmlwdD5cblxuLy8gPC9zdmc+YFxuXG5jbGFzcyBEaXNlYXNlIHtcbiAgICAgICAgY29uc3RydWN0b3IoZWxlKXtcbiAgICAgICAgICAgIHRoaXMuZWxlID0gZWxlO1xuICAgICAgICAgICAgd2luZG93LmNob3NlbkRpc2Vhc2UgPSBcIm1hbGFyaWFcIlxuICAgICAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaGFuZGxlQ2xpY2soKXtcbiAgICAgICAgICAgIHdpbmRvdy5jaG9zZW5EaXNlYXNlID0gXCJ0dWJlcmN1bG9zaXNcIjtcbiAgICAgICAgICAgIGNob3NlbkRpc2Vhc2UgPSBcInR1YmVyY3Vsb3Npc1wiXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgRGlzZWFzZTtcblxuIl0sIm5hbWVzIjpbIkRpc2Vhc2UiLCJjb25zdHJ1Y3RvciIsImVsZSIsIndpbmRvdyIsImNob3NlbkRpc2Vhc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2dsb2JhbF9oZWFsdGgvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;