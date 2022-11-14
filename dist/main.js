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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/map */ \"./src/scripts/map.js\");\n\n// const fetch = require('node-fetch');\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const data = document.getElementById(\"main\");\n  new _scripts_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBZ0M7QUFDaEM7O0FBSUFDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUM1QyxJQUFJSixvREFBRyxDQUFDRyxJQUFJLENBQUM7QUFDakIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9nbG9iYWxfaGVhbHRoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hcCBmcm9tIFwiLi9zY3JpcHRzL21hcFwiO1xuLy8gY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBuZXcgTWFwKGRhdGEpO1xufSk7XG5cblxuIl0sIm5hbWVzIjpbIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGEiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// let htmlString = `<svg id=\"my_dataviz\" width=\"850\" height=\"450\">\n// <script>\n//   const svg = d3.select(\"svg\"),\n//     width = svg.attr(\"width\"),\n//     height = svg.attr(\"height\");\n\n//   const path = d3.geoPath();\n//   const projection = d3.geoNaturalEarth1()\n//     .scale(120)\n//     .center([0,0])\n\n//   const data = d3.map();\n//   const colorScale = d3.scaleThreshold()\n//     .domain([-1,0,1,10,100,1000,10000,100000,100000])\n//     .range(['#FFFFFF','#BBBBBB','#FFFFFF','#FFDDDD','#FCBBA1','#FC9272','#FB6A4A','#DE2D26','#A50F15','#750000']);\n\n//   d3.queue()\n//     .defer(d3.json, \"https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson\")\n//     .defer(d3.csv, \"./src/scripts/data/HIV.csv\", function(d) { if (d.year==2020) {data.set(d.name, +d.cases)}; })\n//     .await(ready);\n\n//   function ready(error, topo) {\n\n//     let mouseOver = function(d) {\n//       d3.selectAll(\".Country\")\n//         .transition()\n//         .duration(200)\n//         .style(\"opacity\", .5)\n//       d3.select(this)\n//         .transition()\n//         .duration(200)\n//         .style(\"opacity\", 1)\n//         .style(\"stroke\", \"black\")\n//     }\n\n//     let mouseLeave = function(d) {\n//       d3.selectAll(\".Country\")\n//         .transition()\n//         .duration(200)\n//         .style(\"opacity\", .8)\n//       d3.select(this)\n//         .transition()\n//         .duration(200)\n//         .style(\"stroke\", \"transparent\")\n//     }\n\n//     svg.append(\"g\")\n//       .selectAll(\"path\")\n//       .data(topo.features)\n//       .enter()\n//       .append(\"path\")\n//         // draw each country\n//         .attr(\"d\", d3.geoPath()\n//           .projection(projection)\n//         )\n//         // set the color of each country\n//         .attr(\"fill\", function (d) {\n//           d.total = data.get(d.id);\n//           if (d.total === undefined) d.total = -1;\n//           return colorScale(d.total);\n//         })\n//         .style(\"stroke\", \"transparent\")\n//         .attr(\"class\", function(d){ return \"Country\" } )\n//         .style(\"opacity\", .8)\n//         .on(\"mouseover\", mouseOver )\n//         .on(\"mouseleave\", mouseLeave )\n//       }\n\n//   </script>\n\n// </svg>`\n\nclass Map {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick() {\n    this.disease = \"tuberculosis\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXAuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7O0FBRUE7O0FBRUEsTUFBTUEsR0FBRyxDQUFDO0VBQ0ZDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1osSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFFZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbkU7RUFFQUQsV0FBVyxHQUFFO0lBQ1QsSUFBSSxDQUFDRSxPQUFPLEdBQUcsY0FBYztFQUNqQztBQUNKO0FBRUEsK0RBQWVOLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2dsb2JhbF9oZWFsdGgvLi9zcmMvc2NyaXB0cy9tYXAuanM/ZjU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsZXQgaHRtbFN0cmluZyA9IGA8c3ZnIGlkPVwibXlfZGF0YXZpelwiIHdpZHRoPVwiODUwXCIgaGVpZ2h0PVwiNDUwXCI+XG4vLyA8c2NyaXB0PlxuLy8gICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCJzdmdcIiksXG4vLyAgICAgd2lkdGggPSBzdmcuYXR0cihcIndpZHRoXCIpLFxuLy8gICAgIGhlaWdodCA9IHN2Zy5hdHRyKFwiaGVpZ2h0XCIpO1xuICBcbi8vICAgY29uc3QgcGF0aCA9IGQzLmdlb1BhdGgoKTtcbi8vICAgY29uc3QgcHJvamVjdGlvbiA9IGQzLmdlb05hdHVyYWxFYXJ0aDEoKVxuLy8gICAgIC5zY2FsZSgxMjApXG4vLyAgICAgLmNlbnRlcihbMCwwXSlcbiAgXG4vLyAgIGNvbnN0IGRhdGEgPSBkMy5tYXAoKTtcbi8vICAgY29uc3QgY29sb3JTY2FsZSA9IGQzLnNjYWxlVGhyZXNob2xkKClcbi8vICAgICAuZG9tYWluKFstMSwwLDEsMTAsMTAwLDEwMDAsMTAwMDAsMTAwMDAwLDEwMDAwMF0pXG4vLyAgICAgLnJhbmdlKFsnI0ZGRkZGRicsJyNCQkJCQkInLCcjRkZGRkZGJywnI0ZGRERERCcsJyNGQ0JCQTEnLCcjRkM5MjcyJywnI0ZCNkE0QScsJyNERTJEMjYnLCcjQTUwRjE1JywnIzc1MDAwMCddKTtcblxuLy8gICBkMy5xdWV1ZSgpXG4vLyAgICAgLmRlZmVyKGQzLmpzb24sIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2hvbHR6eS9EMy1ncmFwaC1nYWxsZXJ5L21hc3Rlci9EQVRBL3dvcmxkLmdlb2pzb25cIilcbi8vICAgICAuZGVmZXIoZDMuY3N2LCBcIi4vc3JjL3NjcmlwdHMvZGF0YS9ISVYuY3N2XCIsIGZ1bmN0aW9uKGQpIHsgaWYgKGQueWVhcj09MjAyMCkge2RhdGEuc2V0KGQubmFtZSwgK2QuY2FzZXMpfTsgfSlcbi8vICAgICAuYXdhaXQocmVhZHkpO1xuICBcbi8vICAgZnVuY3Rpb24gcmVhZHkoZXJyb3IsIHRvcG8pIHtcbiAgXG4vLyAgICAgbGV0IG1vdXNlT3ZlciA9IGZ1bmN0aW9uKGQpIHtcbi8vICAgICAgIGQzLnNlbGVjdEFsbChcIi5Db3VudHJ5XCIpXG4vLyAgICAgICAgIC50cmFuc2l0aW9uKClcbi8vICAgICAgICAgLmR1cmF0aW9uKDIwMClcbi8vICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAuNSlcbi8vICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuLy8gICAgICAgICAudHJhbnNpdGlvbigpXG4vLyAgICAgICAgIC5kdXJhdGlvbigyMDApXG4vLyAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbi8vICAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbi8vICAgICB9XG4gIFxuLy8gICAgIGxldCBtb3VzZUxlYXZlID0gZnVuY3Rpb24oZCkge1xuLy8gICAgICAgZDMuc2VsZWN0QWxsKFwiLkNvdW50cnlcIilcbi8vICAgICAgICAgLnRyYW5zaXRpb24oKVxuLy8gICAgICAgICAuZHVyYXRpb24oMjAwKVxuLy8gICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIC44KVxuLy8gICAgICAgZDMuc2VsZWN0KHRoaXMpXG4vLyAgICAgICAgIC50cmFuc2l0aW9uKClcbi8vICAgICAgICAgLmR1cmF0aW9uKDIwMClcbi8vICAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwidHJhbnNwYXJlbnRcIilcbi8vICAgICB9XG4gIFxuLy8gICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4vLyAgICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuLy8gICAgICAgLmRhdGEodG9wby5mZWF0dXJlcylcbi8vICAgICAgIC5lbnRlcigpXG4vLyAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuLy8gICAgICAgICAvLyBkcmF3IGVhY2ggY291bnRyeVxuLy8gICAgICAgICAuYXR0cihcImRcIiwgZDMuZ2VvUGF0aCgpXG4vLyAgICAgICAgICAgLnByb2plY3Rpb24ocHJvamVjdGlvbilcbi8vICAgICAgICAgKVxuLy8gICAgICAgICAvLyBzZXQgdGhlIGNvbG9yIG9mIGVhY2ggY291bnRyeVxuLy8gICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHtcbi8vICAgICAgICAgICBkLnRvdGFsID0gZGF0YS5nZXQoZC5pZCk7XG4vLyAgICAgICAgICAgaWYgKGQudG90YWwgPT09IHVuZGVmaW5lZCkgZC50b3RhbCA9IC0xO1xuLy8gICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGQudG90YWwpO1xuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgXCJ0cmFuc3BhcmVudFwiKVxuLy8gICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpeyByZXR1cm4gXCJDb3VudHJ5XCIgfSApXG4vLyAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgLjgpXG4vLyAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBtb3VzZU92ZXIgKVxuLy8gICAgICAgICAub24oXCJtb3VzZWxlYXZlXCIsIG1vdXNlTGVhdmUgKVxuLy8gICAgICAgfVxuXG4gICAgICBcbi8vICAgPC9zY3JpcHQ+XG5cbi8vIDwvc3ZnPmBcblxuY2xhc3MgTWFwIHtcbiAgICAgICAgY29uc3RydWN0b3IoZWxlKXtcbiAgICAgICAgICAgIHRoaXMuZWxlID0gZWxlO1xuICAgIFxuICAgICAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaGFuZGxlQ2xpY2soKXtcbiAgICAgICAgICAgIHRoaXMuZGlzZWFzZSA9IFwidHViZXJjdWxvc2lzXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgTWFwOyJdLCJuYW1lcyI6WyJNYXAiLCJjb25zdHJ1Y3RvciIsImVsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImJpbmQiLCJkaXNlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

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