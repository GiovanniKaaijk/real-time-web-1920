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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/game/map.js":
/*!****************************!*\
  !*** ./public/game/map.js ***!
  \****************************/
/*! exports provided: generateMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateMap\", function() { return generateMap; });\nfunction generateMap(layout){\r\n    const board = document.querySelector('.board')\r\n    layout.forEach(row => {\r\n        const boardRow = document.createElement('div')\r\n        boardRow.classList.add('board-row')\r\n        row.forEach(col => {\r\n            const el = document.createElement('div')\r\n            el.classList.add('col')\r\n            el.setAttribute('data-state', col.state)\r\n            el.setAttribute('data-x', col.x)\r\n            el.setAttribute('data-y', col.y)\r\n            boardRow.appendChild(el)\r\n        })\r\n        board.appendChild(boardRow)\r\n    });\r\n}\r\n  \r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZ2FtZS9tYXAuanM/MTMzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6Ii4vcHVibGljL2dhbWUvbWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuZXJhdGVNYXAobGF5b3V0KXtcclxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJylcclxuICAgIGxheW91dC5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9hcmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGJvYXJkUm93LmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXJvdycpXHJcbiAgICAgICAgcm93LmZvckVhY2goY29sID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjb2wnKVxyXG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCBjb2wuc3RhdGUpXHJcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS14JywgY29sLngpXHJcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgY29sLnkpXHJcbiAgICAgICAgICAgIGJvYXJkUm93LmFwcGVuZENoaWxkKGVsKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRSb3cpXHJcbiAgICB9KTtcclxufVxyXG4gIFxyXG5leHBvcnQge2dlbmVyYXRlTWFwfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/game/map.js\n");

/***/ }),

/***/ "./public/main.js":
/*!************************!*\
  !*** ./public/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/map.js */ \"./public/game/map.js\");\n\r\n\r\n// chat\r\n\r\nconst socket = io();\r\nconst form = document.querySelector('form');\r\nconst chatInput = document.querySelector('#chat-input')\r\nconst messages = document.querySelector('#messages')\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    socket.emit('message', {\r\n        input: chatInput.value, \r\n        gameID: document.querySelector('body').classList[0]})\r\n    chatInput.value = ''\r\n    return false\r\n})\r\n\r\nsocket.on('message', (msg) => {\r\n    messages.insertAdjacentHTML('beforeend', `<li>${msg}</li>`)\r\n})\r\n\r\n// Player\r\n\r\nlet Player = function(name, type){\r\n    this.name = name;\r\n    this.type = type;\r\n    this.currentTurn = true;\r\n    this.movesPlayed = 0;\r\n}\r\n\r\n// Game starter\r\nconst home = document.querySelector('.home')\r\nconst createGame = document.querySelector('.create h2')\r\nconst joinGame = document.querySelector('.join h2')\r\n\r\nconst createGameName = document.querySelector('.create input')\r\nconst joinGameName = document.querySelector('.join input[type=\"text\"]')\r\nconst joinGameNumber = document.querySelector('.join input[type=\"number\"]')\r\n\r\ncreateGame.addEventListener('click', () => {\r\n    if (!createGameName.value) { alert('please use a username'); return;}\r\n    socket.emit('createGame', {name: createGameName.value})\r\n    // player = new Player('test', P1)\r\n})\r\n\r\njoinGame.addEventListener('click', () => {\r\n    if (!joinGameName.value) { alert('please use a username'); return;}\r\n    if (!joinGameNumber.value) { alert('please fill in a game number'); return;}\r\n    socket.emit('joinGame', {name: joinGameName.value, room: joinGameNumber.value});\r\n    // player = new Player(name, P2)\r\n})\r\n\r\nsocket.on('player-connect', (player) => {\r\n    console.log(`Player ${player} Disconnected`)\r\n})\r\n\r\nsocket.on('createGame', (data) => {\r\n   home.classList.add('fade')\r\n   messages.insertAdjacentHTML('beforeend', `<li>${data.username}, please invite your friend to game number ${data.game}</li>`)\r\n})\r\n\r\nsocket.on('joinGame', () => {\r\n    home.classList.add('fade')\r\n})\r\n\r\nsocket.on('startGame', (data) => {\r\n    messages.insertAdjacentHTML('beforeend', `<li>Welcome ${data.username} and ${data.opponent} to game number ${data.game}, enjoy the fight!</li>`)\r\n    document.querySelector('body').classList.add(data.game)\r\n    Object(_game_map_js__WEBPACK_IMPORTED_MODULE_0__[\"generateMap\"])(data.mapLayout)\r\n})\r\n\r\nsocket.on('fullServer', () => {\r\n    console.log('full-server')\r\n    document.querySelector('.error').textContent = 'Sorry, this game is full'\r\n}) //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvbWFpbi5qcz85MmIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBNEQ7O0FBRTVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxvREFBb0QsSUFBSTtBQUN4RCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFLCtCQUErQiwyQkFBMkI7QUFDMUQ7QUFDQSxDQUFDOztBQUVEO0FBQ0EsOEJBQThCLGdDQUFnQztBQUM5RCxnQ0FBZ0MsdUNBQXVDO0FBQ3ZFLDZCQUE2QixxREFBcUQ7QUFDbEY7QUFDQSxDQUFDOztBQUVEO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsbURBQW1ELGNBQWMsNkNBQTZDLFVBQVU7QUFDeEgsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLDREQUE0RCxjQUFjLE9BQU8sY0FBYyxrQkFBa0IsVUFBVTtBQUMzSDtBQUNBLElBQUksZ0VBQVc7QUFDZixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiLi9wdWJsaWMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2VuZXJhdGVPYnN0YWNsZXMsIGdlbmVyYXRlTWFwfSBmcm9tICcuL2dhbWUvbWFwLmpzJ1xyXG5cclxuLy8gY2hhdFxyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8oKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuY29uc3QgY2hhdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYXQtaW5wdXQnKVxyXG5jb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlcycpXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNvY2tldC5lbWl0KCdtZXNzYWdlJywge1xyXG4gICAgICAgIGlucHV0OiBjaGF0SW5wdXQudmFsdWUsIFxyXG4gICAgICAgIGdhbWVJRDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdFswXX0pXHJcbiAgICBjaGF0SW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbn0pXHJcblxyXG5zb2NrZXQub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XHJcbiAgICBtZXNzYWdlcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8bGk+JHttc2d9PC9saT5gKVxyXG59KVxyXG5cclxuLy8gUGxheWVyXHJcblxyXG5sZXQgUGxheWVyID0gZnVuY3Rpb24obmFtZSwgdHlwZSl7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMuY3VycmVudFR1cm4gPSB0cnVlO1xyXG4gICAgdGhpcy5tb3Zlc1BsYXllZCA9IDA7XHJcbn1cclxuXHJcbi8vIEdhbWUgc3RhcnRlclxyXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKVxyXG5jb25zdCBjcmVhdGVHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZSBoMicpXHJcbmNvbnN0IGpvaW5HYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpvaW4gaDInKVxyXG5cclxuY29uc3QgY3JlYXRlR2FtZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlIGlucHV0JylcclxuY29uc3Qgam9pbkdhbWVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpvaW4gaW5wdXRbdHlwZT1cInRleHRcIl0nKVxyXG5jb25zdCBqb2luR2FtZU51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qb2luIGlucHV0W3R5cGU9XCJudW1iZXJcIl0nKVxyXG5cclxuY3JlYXRlR2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmICghY3JlYXRlR2FtZU5hbWUudmFsdWUpIHsgYWxlcnQoJ3BsZWFzZSB1c2UgYSB1c2VybmFtZScpOyByZXR1cm47fVxyXG4gICAgc29ja2V0LmVtaXQoJ2NyZWF0ZUdhbWUnLCB7bmFtZTogY3JlYXRlR2FtZU5hbWUudmFsdWV9KVxyXG4gICAgLy8gcGxheWVyID0gbmV3IFBsYXllcigndGVzdCcsIFAxKVxyXG59KVxyXG5cclxuam9pbkdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoIWpvaW5HYW1lTmFtZS52YWx1ZSkgeyBhbGVydCgncGxlYXNlIHVzZSBhIHVzZXJuYW1lJyk7IHJldHVybjt9XHJcbiAgICBpZiAoIWpvaW5HYW1lTnVtYmVyLnZhbHVlKSB7IGFsZXJ0KCdwbGVhc2UgZmlsbCBpbiBhIGdhbWUgbnVtYmVyJyk7IHJldHVybjt9XHJcbiAgICBzb2NrZXQuZW1pdCgnam9pbkdhbWUnLCB7bmFtZTogam9pbkdhbWVOYW1lLnZhbHVlLCByb29tOiBqb2luR2FtZU51bWJlci52YWx1ZX0pO1xyXG4gICAgLy8gcGxheWVyID0gbmV3IFBsYXllcihuYW1lLCBQMilcclxufSlcclxuXHJcbnNvY2tldC5vbigncGxheWVyLWNvbm5lY3QnLCAocGxheWVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgUGxheWVyICR7cGxheWVyfSBEaXNjb25uZWN0ZWRgKVxyXG59KVxyXG5cclxuc29ja2V0Lm9uKCdjcmVhdGVHYW1lJywgKGRhdGEpID0+IHtcclxuICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdmYWRlJylcclxuICAgbWVzc2FnZXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGxpPiR7ZGF0YS51c2VybmFtZX0sIHBsZWFzZSBpbnZpdGUgeW91ciBmcmllbmQgdG8gZ2FtZSBudW1iZXIgJHtkYXRhLmdhbWV9PC9saT5gKVxyXG59KVxyXG5cclxuc29ja2V0Lm9uKCdqb2luR2FtZScsICgpID0+IHtcclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnZmFkZScpXHJcbn0pXHJcblxyXG5zb2NrZXQub24oJ3N0YXJ0R2FtZScsIChkYXRhKSA9PiB7XHJcbiAgICBtZXNzYWdlcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8bGk+V2VsY29tZSAke2RhdGEudXNlcm5hbWV9IGFuZCAke2RhdGEub3Bwb25lbnR9IHRvIGdhbWUgbnVtYmVyICR7ZGF0YS5nYW1lfSwgZW5qb3kgdGhlIGZpZ2h0ITwvbGk+YClcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKGRhdGEuZ2FtZSlcclxuICAgIGdlbmVyYXRlTWFwKGRhdGEubWFwTGF5b3V0KVxyXG59KVxyXG5cclxuc29ja2V0Lm9uKCdmdWxsU2VydmVyJywgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2Z1bGwtc2VydmVyJylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpLnRleHRDb250ZW50ID0gJ1NvcnJ5LCB0aGlzIGdhbWUgaXMgZnVsbCdcclxufSkgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/main.js\n");

/***/ })

/******/ });