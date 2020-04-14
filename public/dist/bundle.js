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

/***/ "./public/game/inputUpdate.js":
/*!************************************!*\
  !*** ./public/game/inputUpdate.js ***!
  \************************************/
/*! exports provided: checkKeyAndUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkKeyAndUpdate\", function() { return checkKeyAndUpdate; });\nfunction checkKeyAndUpdate(e, player) {\r\n    e = e || window.event;\r\n    if (e.keyCode == '38') {\r\n        player.y -= 1;\r\n    } else if (e.keyCode == '40') {\r\n        player.y += 1;\r\n    } else if (e.keyCode == '37') {\r\n        player.x -= 1;\r\n    } else if (e.keyCode == '39') {\r\n        player.x += 1;\r\n    }\r\n\r\n    return player\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZ2FtZS9pbnB1dFVwZGF0ZS5qcz9lZDEwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiLi9wdWJsaWMvZ2FtZS9pbnB1dFVwZGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNoZWNrS2V5QW5kVXBkYXRlKGUsIHBsYXllcikge1xyXG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PSAnMzgnKSB7XHJcbiAgICAgICAgcGxheWVyLnkgLT0gMTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09ICc0MCcpIHtcclxuICAgICAgICBwbGF5ZXIueSArPSAxO1xyXG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gJzM3Jykge1xyXG4gICAgICAgIHBsYXllci54IC09IDE7XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAnMzknKSB7XHJcbiAgICAgICAgcGxheWVyLnggKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGxheWVyXHJcbn1cclxuXHJcbmV4cG9ydCB7Y2hlY2tLZXlBbmRVcGRhdGV9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/game/inputUpdate.js\n");

/***/ }),

/***/ "./public/game/map.js":
/*!****************************!*\
  !*** ./public/game/map.js ***!
  \****************************/
/*! exports provided: generateMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateMap\", function() { return generateMap; });\nfunction generateMap(layout){\r\n    const board = document.querySelector('.playground')\r\n    // generateFrontMap(30).forEach((row, i) => {\r\n    layout.forEach((row, i) => {\r\n        const boardRow = document.createElement('div')\r\n        boardRow.classList.add('board-row')\r\n        boardRow.classList.add(`row-${i + 1}`)\r\n        row.forEach(col => {\r\n            const el = document.createElement('div')\r\n            el.classList.add('col')\r\n            el.classList.add(`col-${col.x}`)\r\n            if(col.state === 'obstacle') {el.classList.add('obstacle')}\r\n            // el.setAttribute('data-state', col.state)\r\n            // el.setAttribute('data-x', col.x)\r\n            // el.setAttribute('data-y', col.y)\r\n            boardRow.appendChild(el)\r\n        })\r\n        board.appendChild(boardRow)\r\n    });\r\n}\r\n\r\n// TIJDELIJK\r\n\r\nfunction generateFrontMap(obstacles){\r\n    let totalObstacles = 0;\r\n    let mapLayout = []\r\n    for (let i = 1; i <= 10; i++) {\r\n\r\n        const row = []\r\n\r\n        for (let j = 0; j < 10; j++) {\r\n            const state = createObstacle(obstacles, totalObstacles)\r\n            const x = j+1\r\n            const y = i\r\n            row.push({\r\n                state: state,\r\n                x: x,\r\n                y: y\r\n            })\r\n        }\r\n        mapLayout.push(row)\r\n    }\r\n    return mapLayout\r\n}\r\n\r\nfunction createObstacle(obstacles, totalObstacles) {\r\n    if(totalObstacles < obstacles) {\r\n        const random = Math.random()\r\n        if((obstacles/100) > random) {\r\n            totalObstacles++\r\n            return 'obstacle'\r\n        } else {\r\n            return 'empty'\r\n        }\r\n    }\r\n}\r\n  \r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZ2FtZS9tYXAuanM/MTMzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE1BQU07QUFDMUMsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTOztBQUU1Qjs7QUFFQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3B1YmxpYy9nYW1lL21hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdlbmVyYXRlTWFwKGxheW91dCl7XHJcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5Z3JvdW5kJylcclxuICAgIC8vIGdlbmVyYXRlRnJvbnRNYXAoMzApLmZvckVhY2goKHJvdywgaSkgPT4ge1xyXG4gICAgbGF5b3V0LmZvckVhY2goKHJvdywgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvYXJkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBib2FyZFJvdy5jbGFzc0xpc3QuYWRkKCdib2FyZC1yb3cnKVxyXG4gICAgICAgIGJvYXJkUm93LmNsYXNzTGlzdC5hZGQoYHJvdy0ke2kgKyAxfWApXHJcbiAgICAgICAgcm93LmZvckVhY2goY29sID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjb2wnKVxyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGBjb2wtJHtjb2wueH1gKVxyXG4gICAgICAgICAgICBpZihjb2wuc3RhdGUgPT09ICdvYnN0YWNsZScpIHtlbC5jbGFzc0xpc3QuYWRkKCdvYnN0YWNsZScpfVxyXG4gICAgICAgICAgICAvLyBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCBjb2wuc3RhdGUpXHJcbiAgICAgICAgICAgIC8vIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS14JywgY29sLngpXHJcbiAgICAgICAgICAgIC8vIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgY29sLnkpXHJcbiAgICAgICAgICAgIGJvYXJkUm93LmFwcGVuZENoaWxkKGVsKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRSb3cpXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gVElKREVMSUpLXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUZyb250TWFwKG9ic3RhY2xlcyl7XHJcbiAgICBsZXQgdG90YWxPYnN0YWNsZXMgPSAwO1xyXG4gICAgbGV0IG1hcExheW91dCA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdyA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNyZWF0ZU9ic3RhY2xlKG9ic3RhY2xlcywgdG90YWxPYnN0YWNsZXMpXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBqKzFcclxuICAgICAgICAgICAgY29uc3QgeSA9IGlcclxuICAgICAgICAgICAgcm93LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgICAgIHk6IHlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFwTGF5b3V0LnB1c2gocm93KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hcExheW91dFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPYnN0YWNsZShvYnN0YWNsZXMsIHRvdGFsT2JzdGFjbGVzKSB7XHJcbiAgICBpZih0b3RhbE9ic3RhY2xlcyA8IG9ic3RhY2xlcykge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbSA9IE1hdGgucmFuZG9tKClcclxuICAgICAgICBpZigob2JzdGFjbGVzLzEwMCkgPiByYW5kb20pIHtcclxuICAgICAgICAgICAgdG90YWxPYnN0YWNsZXMrK1xyXG4gICAgICAgICAgICByZXR1cm4gJ29ic3RhY2xlJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZW1wdHknXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiAgXHJcbmV4cG9ydCB7Z2VuZXJhdGVNYXB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/game/map.js\n");

/***/ }),

/***/ "./public/game/players.js":
/*!********************************!*\
  !*** ./public/game/players.js ***!
  \********************************/
/*! exports provided: initPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPlayer\", function() { return initPlayer; });\nfunction initPlayer(index) {\r\n    generatePlayerOne()\r\n    generatePlayerTwo()\r\n}\r\n\r\nfunction generatePlayerOne (){\r\n    const col = document.querySelector('.row-1 .col-1')\r\n    const player = document.createElement('div')\r\n    player.classList.add('player', 'player-one')\r\n    col.appendChild(player)\r\n}\r\n\r\nfunction generatePlayerTwo() {\r\n    const col = document.querySelector('.row-10 .col-10')\r\n    const player = document.createElement('div')\r\n    player.classList.add('player', 'player-two')\r\n    col.appendChild(player)\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZ2FtZS9wbGF5ZXJzLmpzPzgwNjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wdWJsaWMvZ2FtZS9wbGF5ZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW5pdFBsYXllcihpbmRleCkge1xyXG4gICAgZ2VuZXJhdGVQbGF5ZXJPbmUoKVxyXG4gICAgZ2VuZXJhdGVQbGF5ZXJUd28oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVBsYXllck9uZSAoKXtcclxuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3ctMSAuY29sLTEnKVxyXG4gICAgY29uc3QgcGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHBsYXllci5jbGFzc0xpc3QuYWRkKCdwbGF5ZXInLCAncGxheWVyLW9uZScpXHJcbiAgICBjb2wuYXBwZW5kQ2hpbGQocGxheWVyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVBsYXllclR3bygpIHtcclxuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3ctMTAgLmNvbC0xMCcpXHJcbiAgICBjb25zdCBwbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcGxheWVyLmNsYXNzTGlzdC5hZGQoJ3BsYXllcicsICdwbGF5ZXItdHdvJylcclxuICAgIGNvbC5hcHBlbmRDaGlsZChwbGF5ZXIpXHJcbn1cclxuXHJcblxyXG5leHBvcnQge2luaXRQbGF5ZXJ9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/game/players.js\n");

/***/ }),

/***/ "./public/main.js":
/*!************************!*\
  !*** ./public/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/map.js */ \"./public/game/map.js\");\n/* harmony import */ var _game_players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/players */ \"./public/game/players.js\");\n/* harmony import */ var _game_inputUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/inputUpdate */ \"./public/game/inputUpdate.js\");\n\r\n\r\n\r\n// chat\r\n\r\nconst socket = io();\r\nconst form = document.querySelector('form');\r\nconst chatInput = document.querySelector('#chat-input')\r\nconst messages = document.querySelector('#messages')\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    socket.emit('message', {\r\n        input: chatInput.value, \r\n        gameID: document.querySelector('body').classList[0]})\r\n    chatInput.value = ''\r\n    return false\r\n})\r\n\r\nsocket.on('message', (msg) => {\r\n    messages.insertAdjacentHTML('beforeend', `<li>${msg}</li>`)\r\n})\r\n\r\n// Player\r\n\r\nlet player = {\r\n    player: '',\r\n    x: Number,\r\n    y: Number\r\n}\r\n\r\n// Game starter\r\nconst home = document.querySelector('.home')\r\nconst createGame = document.querySelector('.create form')\r\nconst joinGame = document.querySelector('.join form')\r\n\r\nconst createGameName = document.querySelector('.create input[type=\"text\"]')\r\nconst joinGameName = document.querySelector('.join input[type=\"text\"]')\r\nconst joinGameNumber = document.querySelector('.join input[type=\"number\"]')\r\n\r\ncreateGame.addEventListener('submit', (e) => {\r\n    e.preventDefault()\r\n    if (!createGameName.value) { alert('please use a username'); return;}\r\n    socket.emit('createGame', {name: createGameName.value})\r\n})\r\n\r\njoinGame.addEventListener('submit', (e) => {\r\n    e.preventDefault()\r\n    if (!joinGameName.value) { alert('please use a username'); return;}\r\n    if (!joinGameNumber.value) { alert('please fill in a game number'); return;}\r\n    socket.emit('joinGame', {name: joinGameName.value, room: joinGameNumber.value});\r\n})\r\n\r\nsocket.on('player-connect', (player) => {\r\n    console.log(`Player ${player} Disconnected`)\r\n})\r\n\r\nsocket.on('createGame', (data) => {\r\n   removeOverlay()\r\n   document.querySelector('body').classList.add(data.game)\r\n   player.player = 'one'\r\n   player.x = 1\r\n   player.y = 1\r\n   messages.insertAdjacentHTML('beforeend', `<li>${data.username}, please invite your friend to game number ${data.game}</li>`)\r\n    // generateMap(data.mapLayout)\r\n    // initPlayer()\r\n})\r\n\r\nsocket.on('joinGame', () => {\r\n    player.player = 'two'\r\n    player.x = 10\r\n    player.y = 10\r\n    removeOverlay()\r\n})\r\n\r\nsocket.on('startGame', (data) => {\r\n    messages.insertAdjacentHTML('beforeend', `<li>Welcome ${data.username} and ${data.opponent} to game number ${data.game}, enjoy the fight!</li>`)\r\n    document.querySelector('body').classList.add(data.game)\r\n    Object(_game_map_js__WEBPACK_IMPORTED_MODULE_0__[\"generateMap\"])(data.mapLayout)\r\n    Object(_game_players__WEBPACK_IMPORTED_MODULE_1__[\"initPlayer\"])()\r\n    document.addEventListener('keydown', (e) => {\r\n        player = Object(_game_inputUpdate__WEBPACK_IMPORTED_MODULE_2__[\"checkKeyAndUpdate\"])(e, player)\r\n        socket.emit('updatePlayer', {player: player, room: document.querySelector('body').classList[0]})\r\n    })\r\n})\r\n\r\nsocket.on('fullServer', () => {\r\n    console.log('full-server')\r\n    document.querySelector('.error').textContent = 'Sorry, this game is full'\r\n}) \r\n\r\nsocket.on('updatePlayer', data => {\r\n    updatePlayer(data)\r\n})\r\n\r\n\r\nfunction updatePlayer(updatedPlayer) {\r\n    console.log(updatedPlayer)\r\n    const oldPlayerPos = document.querySelector(`.player-${updatedPlayer.player}`)\r\n    oldPlayerPos.parentNode.removeChild(oldPlayerPos)\r\n    const newPlayerPosParent = document.querySelector(`.row-${updatedPlayer.y} .col-${updatedPlayer.x}`)\r\n    const newPlayerPos = document.createElement('div')\r\n    newPlayerPos.classList.add('player', `player-${updatedPlayer.player}`)\r\n    newPlayerPosParent.appendChild(newPlayerPos)\r\n}\r\n\r\nfunction removeOverlay() {\r\n    home.classList.add('prefade')\r\n   setTimeout(() => {\r\n    home.classList.add('fade')\r\n    setTimeout(() => {\r\n        home.classList.add('hide')\r\n    }, 500);\r\n   }, 300);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvbWFpbi5qcz85MmIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0E7QUFDVztBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esb0RBQW9ELElBQUk7QUFDeEQsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLGdDQUFnQztBQUNoRSwrQkFBK0IsMkJBQTJCO0FBQzFELENBQUM7O0FBRUQ7QUFDQTtBQUNBLDhCQUE4QixnQ0FBZ0M7QUFDOUQsZ0NBQWdDLHVDQUF1QztBQUN2RSw2QkFBNkIscURBQXFEO0FBQ2xGLENBQUM7O0FBRUQ7QUFDQSwwQkFBMEIsT0FBTztBQUNqQyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjLDZDQUE2QyxVQUFVO0FBQ3hIO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsNERBQTRELGNBQWMsT0FBTyxjQUFjLGtCQUFrQixVQUFVO0FBQzNIO0FBQ0EsSUFBSSxnRUFBVztBQUNmLElBQUksZ0VBQVU7QUFDZDtBQUNBLGlCQUFpQiwyRUFBaUI7QUFDbEMscUNBQXFDLGtFQUFrRTtBQUN2RyxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsMkRBQTJELHFCQUFxQjtBQUNoRjtBQUNBLDhEQUE4RCxnQkFBZ0IsUUFBUSxnQkFBZ0I7QUFDdEc7QUFDQSxtREFBbUQscUJBQXFCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSiIsImZpbGUiOiIuL3B1YmxpYy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZW5lcmF0ZU1hcH0gZnJvbSAnLi9nYW1lL21hcC5qcydcclxuaW1wb3J0IHtpbml0UGxheWVyfSBmcm9tICcuL2dhbWUvcGxheWVycydcclxuaW1wb3J0IHtjaGVja0tleUFuZFVwZGF0ZX0gZnJvbSAnLi9nYW1lL2lucHV0VXBkYXRlJ1xyXG4vLyBjaGF0XHJcblxyXG5jb25zdCBzb2NrZXQgPSBpbygpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG5jb25zdCBjaGF0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhdC1pbnB1dCcpXHJcbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2VzJylcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCB7XHJcbiAgICAgICAgaW5wdXQ6IGNoYXRJbnB1dC52YWx1ZSwgXHJcbiAgICAgICAgZ2FtZUlEOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0WzBdfSlcclxuICAgIGNoYXRJbnB1dC52YWx1ZSA9ICcnXHJcbiAgICByZXR1cm4gZmFsc2VcclxufSlcclxuXHJcbnNvY2tldC5vbignbWVzc2FnZScsIChtc2cpID0+IHtcclxuICAgIG1lc3NhZ2VzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxsaT4ke21zZ308L2xpPmApXHJcbn0pXHJcblxyXG4vLyBQbGF5ZXJcclxuXHJcbmxldCBwbGF5ZXIgPSB7XHJcbiAgICBwbGF5ZXI6ICcnLFxyXG4gICAgeDogTnVtYmVyLFxyXG4gICAgeTogTnVtYmVyXHJcbn1cclxuXHJcbi8vIEdhbWUgc3RhcnRlclxyXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKVxyXG5jb25zdCBjcmVhdGVHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZSBmb3JtJylcclxuY29uc3Qgam9pbkdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuam9pbiBmb3JtJylcclxuXHJcbmNvbnN0IGNyZWF0ZUdhbWVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZSBpbnB1dFt0eXBlPVwidGV4dFwiXScpXHJcbmNvbnN0IGpvaW5HYW1lTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qb2luIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJylcclxuY29uc3Qgam9pbkdhbWVOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuam9pbiBpbnB1dFt0eXBlPVwibnVtYmVyXCJdJylcclxuXHJcbmNyZWF0ZUdhbWUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgaWYgKCFjcmVhdGVHYW1lTmFtZS52YWx1ZSkgeyBhbGVydCgncGxlYXNlIHVzZSBhIHVzZXJuYW1lJyk7IHJldHVybjt9XHJcbiAgICBzb2NrZXQuZW1pdCgnY3JlYXRlR2FtZScsIHtuYW1lOiBjcmVhdGVHYW1lTmFtZS52YWx1ZX0pXHJcbn0pXHJcblxyXG5qb2luR2FtZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpZiAoIWpvaW5HYW1lTmFtZS52YWx1ZSkgeyBhbGVydCgncGxlYXNlIHVzZSBhIHVzZXJuYW1lJyk7IHJldHVybjt9XHJcbiAgICBpZiAoIWpvaW5HYW1lTnVtYmVyLnZhbHVlKSB7IGFsZXJ0KCdwbGVhc2UgZmlsbCBpbiBhIGdhbWUgbnVtYmVyJyk7IHJldHVybjt9XHJcbiAgICBzb2NrZXQuZW1pdCgnam9pbkdhbWUnLCB7bmFtZTogam9pbkdhbWVOYW1lLnZhbHVlLCByb29tOiBqb2luR2FtZU51bWJlci52YWx1ZX0pO1xyXG59KVxyXG5cclxuc29ja2V0Lm9uKCdwbGF5ZXItY29ubmVjdCcsIChwbGF5ZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBQbGF5ZXIgJHtwbGF5ZXJ9IERpc2Nvbm5lY3RlZGApXHJcbn0pXHJcblxyXG5zb2NrZXQub24oJ2NyZWF0ZUdhbWUnLCAoZGF0YSkgPT4ge1xyXG4gICByZW1vdmVPdmVybGF5KClcclxuICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoZGF0YS5nYW1lKVxyXG4gICBwbGF5ZXIucGxheWVyID0gJ29uZSdcclxuICAgcGxheWVyLnggPSAxXHJcbiAgIHBsYXllci55ID0gMVxyXG4gICBtZXNzYWdlcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8bGk+JHtkYXRhLnVzZXJuYW1lfSwgcGxlYXNlIGludml0ZSB5b3VyIGZyaWVuZCB0byBnYW1lIG51bWJlciAke2RhdGEuZ2FtZX08L2xpPmApXHJcbiAgICAvLyBnZW5lcmF0ZU1hcChkYXRhLm1hcExheW91dClcclxuICAgIC8vIGluaXRQbGF5ZXIoKVxyXG59KVxyXG5cclxuc29ja2V0Lm9uKCdqb2luR2FtZScsICgpID0+IHtcclxuICAgIHBsYXllci5wbGF5ZXIgPSAndHdvJ1xyXG4gICAgcGxheWVyLnggPSAxMFxyXG4gICAgcGxheWVyLnkgPSAxMFxyXG4gICAgcmVtb3ZlT3ZlcmxheSgpXHJcbn0pXHJcblxyXG5zb2NrZXQub24oJ3N0YXJ0R2FtZScsIChkYXRhKSA9PiB7XHJcbiAgICBtZXNzYWdlcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8bGk+V2VsY29tZSAke2RhdGEudXNlcm5hbWV9IGFuZCAke2RhdGEub3Bwb25lbnR9IHRvIGdhbWUgbnVtYmVyICR7ZGF0YS5nYW1lfSwgZW5qb3kgdGhlIGZpZ2h0ITwvbGk+YClcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKGRhdGEuZ2FtZSlcclxuICAgIGdlbmVyYXRlTWFwKGRhdGEubWFwTGF5b3V0KVxyXG4gICAgaW5pdFBsYXllcigpXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgICBwbGF5ZXIgPSBjaGVja0tleUFuZFVwZGF0ZShlLCBwbGF5ZXIpXHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ3VwZGF0ZVBsYXllcicsIHtwbGF5ZXI6IHBsYXllciwgcm9vbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdFswXX0pXHJcbiAgICB9KVxyXG59KVxyXG5cclxuc29ja2V0Lm9uKCdmdWxsU2VydmVyJywgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2Z1bGwtc2VydmVyJylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpLnRleHRDb250ZW50ID0gJ1NvcnJ5LCB0aGlzIGdhbWUgaXMgZnVsbCdcclxufSkgXHJcblxyXG5zb2NrZXQub24oJ3VwZGF0ZVBsYXllcicsIGRhdGEgPT4ge1xyXG4gICAgdXBkYXRlUGxheWVyKGRhdGEpXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUGxheWVyKHVwZGF0ZWRQbGF5ZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRQbGF5ZXIpXHJcbiAgICBjb25zdCBvbGRQbGF5ZXJQb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLSR7dXBkYXRlZFBsYXllci5wbGF5ZXJ9YClcclxuICAgIG9sZFBsYXllclBvcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZFBsYXllclBvcylcclxuICAgIGNvbnN0IG5ld1BsYXllclBvc1BhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5yb3ctJHt1cGRhdGVkUGxheWVyLnl9IC5jb2wtJHt1cGRhdGVkUGxheWVyLnh9YClcclxuICAgIGNvbnN0IG5ld1BsYXllclBvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBuZXdQbGF5ZXJQb3MuY2xhc3NMaXN0LmFkZCgncGxheWVyJywgYHBsYXllci0ke3VwZGF0ZWRQbGF5ZXIucGxheWVyfWApXHJcbiAgICBuZXdQbGF5ZXJQb3NQYXJlbnQuYXBwZW5kQ2hpbGQobmV3UGxheWVyUG9zKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVPdmVybGF5KCkge1xyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdwcmVmYWRlJylcclxuICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIH0sIDUwMCk7XHJcbiAgIH0sIDMwMCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/main.js\n");

/***/ })

/******/ });