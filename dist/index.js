/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/audio-call-page/audio.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/audio-call-page/audio.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".audio-call-container{\r\n  user-select: none;\r\n  row-gap: 20px;\r\n  justify-items: center;\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-size: cover;\r\n}\r\n.buttons-container-div{\r\n  display:flex;\r\n  justify-content: center;\r\n  user-select: none;\r\n}\r\n.div-quiz-container{\r\n  justify-self: center;\r\n  width: 500px;\r\n  display: grid;\r\n  grid-template-rows: auto auto auto;\r\n  align-self: center;\r\n  justify-content: center;\r\n}\r\n.quesion-container{\r\n  display : flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n.quesion-container > div{\r\n  margin-bottom: 25px;\r\n}\r\n.next-question-button{\r\n  margin-top: 30px;\r\n  margin-bottom: 20px;\r\n  width: 270px;\r\n  height: 45px;\r\n  background: var(--color-brown);\r\n  opacity: 0.9;\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n  border: 0px;\r\n  border-radius: 5px;\r\n  color: #FFFFFF;\r\n}\r\n.next-question-button:hover{\r\n  font-weight: 600;\r\n  opacity: 1;\r\n}\r\n.new-game-button::hover{\r\n  opacity: 1;\r\n  font-weight: 700;\r\n}\r\nlabel{\r\n  text-align: center;\r\n}\r\n.hidden{\r\n  display: none;\r\n}\r\n.new-game-button, .play-again-button{\r\n  width: 250px;\r\n  height: 45px;\r\n  background: #EC990E;\r\n  opacity: 0.9;\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 22px;\r\n  font-weight: 500;\r\n  border: 0px;\r\n  border-radius: 5px;\r\n  color: #FFFFFF;\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.play-again-button{\r\n  width: 270px;\r\n  font-size: 18px;\r\n  align-self:flex-end;\r\n}\r\n.new-game-button:hover, .play-again-button:hover{\r\n  opacity: 1;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  border: 0px;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n.game-button{\r\n  margin-top: 10px;\r\n  width: 150px;\r\n  height: 40px;\r\n  color: #FFFFFF;\r\n  border: 0px;\r\n  border-radius: 3px;\r\n  margin-right: 5px;\r\n  opacity: 0.9;\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  user-select: none \r\n}\r\n.game-button:hover{\r\n  font-weight: 800;\r\n  opacity: 1;\r\n}\r\n.option{\r\n  background-color:var(--color-main);\r\n  width: 270px;\r\n  cursor: pointer;\r\n}\r\n.l1{\r\n  background-color:var(--color-gray-light);\r\n}\r\n.l2{\r\n  background-color: var(--color-gray-medium);\r\n}\r\n.l3{\r\n  background-color: var(--color-yellow-bright);\r\n}\r\n.l4{\r\n  background-color: var( --color-medium);\r\n}\r\n.l5{\r\n  background-color: var(--color-brown);\r\n}\r\n.l6{\r\n  background-color: var(--color-dark);\r\n}\r\n.l7{\r\n  background-color: var(--color-accent);\r\n}\r\n.correct{\r\n  background-color: var(--color-green-common);\r\n}\r\n.wrong{\r\n  background-color: var(--color-accent);\r\n}\r\n/* .div-play{\r\n  width: 60px;\r\n  height: 60px;\r\n  background-image: url('../../assets/Play.png');\r\n  cursor: pointer;\r\n  background-size:99% 99%;\r\n  background-repeat: no-repeat;\r\n  margin: 10px;\r\n}\r\n*/\r\n.div-play:hover{\r\n  background-size:100% 100%;\r\n}\r\n.game-progress-bar{\r\n  width: 500px;\r\n  height: 25px;\r\n  border-style: solid;\r\n  border-color: var(--color-yellow-bright);\r\n  border-radius: 10px;\r\n  box-sizing: unset;\r\n  text-align: center;\r\n}\r\n.loading{\r\n  height: 25px;\r\n  border-radius: 0px;\r\n  background-color: var(--color-yellow-bright);\r\n  box-sizing: unset;\r\n}\r\n.dif-container{\r\n  text-align: center;\r\n  flex-direction: column;\r\n}\r\n.dif-container > label{\r\n  color: var(--color-main);\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 28px;\r\n  font-weight: 800;\r\n}\r\n.grid-status-container{\r\n  display: grid;\r\n  grid-template-columns: 50px 170px 50px;\r\n  height: 50px;\r\n  align-content: center;\r\n}\r\n.span-number{\r\n  pointer-events: none \r\n}\r\n.span-value{\r\n  Pointer-events: none \r\n}\r\n.div-option-grid{\r\n  pointer-events: none;\r\n  display: grid;\r\n  grid-template-columns: 20px auto;\r\n}", "",{"version":3,"sources":["webpack://./src/pages/audio-call-page/audio.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,8BAA8B;EAC9B,YAAY;EACZ,0DAA0D;EAC1D,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA;EACE,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,0DAA0D;EAC1D,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,0DAA0D;EAC1D,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf;AACF;AACA;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA;EACE,kCAAkC;EAClC,YAAY;EACZ,eAAe;AACjB;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,4CAA4C;AAC9C;AACA;EACE,sCAAsC;AACxC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,2CAA2C;AAC7C;AACA;EACE,qCAAqC;AACvC;AACA;;;;;;;;;CASC;AACD;EACE,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,wCAAwC;EACxC,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,4CAA4C;EAC5C,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,wBAAwB;EACxB,0DAA0D;EAC1D,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,oBAAoB;EACpB,aAAa;EACb,gCAAgC;AAClC","sourcesContent":[".audio-call-container{\r\n  user-select: none;\r\n  row-gap: 20px;\r\n  justify-items: center;\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-size: cover;\r\n}\r\n.buttons-container-div{\r\n  display:flex;\r\n  justify-content: center;\r\n  user-select: none;\r\n}\r\n.div-quiz-container{\r\n  justify-self: center;\r\n  width: 500px;\r\n  display: grid;\r\n  grid-template-rows: auto auto auto;\r\n  align-self: center;\r\n  justify-content: center;\r\n}\r\n.quesion-container{\r\n  display : flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n.quesion-container > div{\r\n  margin-bottom: 25px;\r\n}\r\n.next-question-button{\r\n  margin-top: 30px;\r\n  margin-bottom: 20px;\r\n  width: 270px;\r\n  height: 45px;\r\n  background: var(--color-brown);\r\n  opacity: 0.9;\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n  border: 0px;\r\n  border-radius: 5px;\r\n  color: #FFFFFF;\r\n}\r\n.next-question-button:hover{\r\n  font-weight: 600;\r\n  opacity: 1;\r\n}\r\n.new-game-button::hover{\r\n  opacity: 1;\r\n  font-weight: 700;\r\n}\r\nlabel{\r\n  text-align: center;\r\n}\r\n.hidden{\r\n  display: none;\r\n}\r\n.new-game-button, .play-again-button{\r\n  width: 250px;\r\n  height: 45px;\r\n  background: #EC990E;\r\n  opacity: 0.9;\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 22px;\r\n  font-weight: 500;\r\n  border: 0px;\r\n  border-radius: 5px;\r\n  color: #FFFFFF;\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.play-again-button{\r\n  width: 270px;\r\n  font-size: 18px;\r\n  align-self:flex-end;\r\n}\r\n.new-game-button:hover, .play-again-button:hover{\r\n  opacity: 1;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  border: 0px;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n.game-button{\r\n  margin-top: 10px;\r\n  width: 150px;\r\n  height: 40px;\r\n  color: #FFFFFF;\r\n  border: 0px;\r\n  border-radius: 3px;\r\n  margin-right: 5px;\r\n  opacity: 0.9;\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  user-select: none \r\n}\r\n.game-button:hover{\r\n  font-weight: 800;\r\n  opacity: 1;\r\n}\r\n.option{\r\n  background-color:var(--color-main);\r\n  width: 270px;\r\n  cursor: pointer;\r\n}\r\n.l1{\r\n  background-color:var(--color-gray-light);\r\n}\r\n.l2{\r\n  background-color: var(--color-gray-medium);\r\n}\r\n.l3{\r\n  background-color: var(--color-yellow-bright);\r\n}\r\n.l4{\r\n  background-color: var( --color-medium);\r\n}\r\n.l5{\r\n  background-color: var(--color-brown);\r\n}\r\n.l6{\r\n  background-color: var(--color-dark);\r\n}\r\n.l7{\r\n  background-color: var(--color-accent);\r\n}\r\n.correct{\r\n  background-color: var(--color-green-common);\r\n}\r\n.wrong{\r\n  background-color: var(--color-accent);\r\n}\r\n/* .div-play{\r\n  width: 60px;\r\n  height: 60px;\r\n  background-image: url('../../assets/Play.png');\r\n  cursor: pointer;\r\n  background-size:99% 99%;\r\n  background-repeat: no-repeat;\r\n  margin: 10px;\r\n}\r\n*/\r\n.div-play:hover{\r\n  background-size:100% 100%;\r\n}\r\n.game-progress-bar{\r\n  width: 500px;\r\n  height: 25px;\r\n  border-style: solid;\r\n  border-color: var(--color-yellow-bright);\r\n  border-radius: 10px;\r\n  box-sizing: unset;\r\n  text-align: center;\r\n}\r\n.loading{\r\n  height: 25px;\r\n  border-radius: 0px;\r\n  background-color: var(--color-yellow-bright);\r\n  box-sizing: unset;\r\n}\r\n.dif-container{\r\n  text-align: center;\r\n  flex-direction: column;\r\n}\r\n.dif-container > label{\r\n  color: var(--color-main);\r\n  /* font-family:Georgia, 'Times New Roman', Times, serif; */\r\n  font-size: 28px;\r\n  font-weight: 800;\r\n}\r\n.grid-status-container{\r\n  display: grid;\r\n  grid-template-columns: 50px 170px 50px;\r\n  height: 50px;\r\n  align-content: center;\r\n}\r\n.span-number{\r\n  pointer-events: none \r\n}\r\n.span-value{\r\n  Pointer-events: none \r\n}\r\n.div-option-grid{\r\n  pointer-events: none;\r\n  display: grid;\r\n  grid-template-columns: 20px auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/audio-call-page/modal.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/audio-call-page/modal.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/svg/audio.svg */ "./src/assets/svg/audio.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n.modal-content {\r\n    background-color: rgba(116, 115, 115, 0.46);\r\n    margin: auto;\r\n    padding: 5px 40px 5px 40px;\r\n    border: 1px solid rgb(255, 255, 255);\r\n    width: 60vw;\r\n    border-radius: 15px;\r\n    margin-bottom : 10px;\r\n}\r\n\r\n.modal-close {\r\n    color: rgba(0, 0, 0, 0.46);\r\n    float: right;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    \r\n}\r\n\r\n.modal-close:hover,\r\n.modal-close:focus {\r\n    color: var(--color-accent);\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.div-result-flex {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.div-result-flex>span {\r\n    font-size: 24px;\r\n    text-align: center;\r\n    /* font-family: Arial, Helvetica, sans-serif; */\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.game-span-correct {\r\n    color: var(--color-green-common);\r\n    \r\n    font-weight: bold;\r\n}\r\n\r\n.game-span-wrong {\r\n    color: var(--color-accent);\r\n    font-weight: bold;\r\n}\r\n\r\n.answer-container-correct>div>span,\r\n.answer-container-wrong>div>span {\r\n    margin-left: 20px;\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    align-self: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.answer-container-correct>div>div,\r\n.answer-container-wrong>div>div {\r\n    display: inline-block;\r\n    width: 30px;\r\n    height: 20px;\r\n\r\n}\r\n\r\n.audio-icon {\r\n    width: 37px;\r\n    height: 27px;\r\n    cursor: pointer;\r\n    background-color: var(--color-gray-medium);\r\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    mask-repeat: no-repeat;\r\n    mask-size: contain;\r\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    -webkit-mask-repeat: no-repeat;\r\n    -webkit-mask-size: contain;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.audio-icon:hover {\r\n    background-color: var(--color-brown);\r\n}\r\n\r\n.audio-icon.disabled {\r\n    pointer-events: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/pages/audio-call-page/modal.css"],"names":[],"mappings":";;AAEA;IACI,2CAA2C;IAC3C,YAAY;IACZ,0BAA0B;IAC1B,oCAAoC;IACpC,WAAW;IACX,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,0BAA0B;IAC1B,YAAY;IACZ,eAAe;IACf,iBAAiB;;AAErB;;AAEA;;IAEI,0BAA0B;IAC1B,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,+CAA+C;IAC/C,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;;IAEhC,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;;IAEI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;;IAEI,qBAAqB;IACrB,WAAW;IACX,YAAY;;AAEhB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,0CAA0C;IAC1C,mDAA6C;IAC7C,sBAAsB;IACtB,kBAAkB;IAClB,2DAAqD;IACrD,8BAA8B;IAC9B,0BAA0B;IAC1B,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oBAAoB;AACxB","sourcesContent":["\r\n\r\n.modal-content {\r\n    background-color: rgba(116, 115, 115, 0.46);\r\n    margin: auto;\r\n    padding: 5px 40px 5px 40px;\r\n    border: 1px solid rgb(255, 255, 255);\r\n    width: 60vw;\r\n    border-radius: 15px;\r\n    margin-bottom : 10px;\r\n}\r\n\r\n.modal-close {\r\n    color: rgba(0, 0, 0, 0.46);\r\n    float: right;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    \r\n}\r\n\r\n.modal-close:hover,\r\n.modal-close:focus {\r\n    color: var(--color-accent);\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.div-result-flex {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.div-result-flex>span {\r\n    font-size: 24px;\r\n    text-align: center;\r\n    /* font-family: Arial, Helvetica, sans-serif; */\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.game-span-correct {\r\n    color: var(--color-green-common);\r\n    \r\n    font-weight: bold;\r\n}\r\n\r\n.game-span-wrong {\r\n    color: var(--color-accent);\r\n    font-weight: bold;\r\n}\r\n\r\n.answer-container-correct>div>span,\r\n.answer-container-wrong>div>span {\r\n    margin-left: 20px;\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    align-self: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.answer-container-correct>div>div,\r\n.answer-container-wrong>div>div {\r\n    display: inline-block;\r\n    width: 30px;\r\n    height: 20px;\r\n\r\n}\r\n\r\n.audio-icon {\r\n    width: 37px;\r\n    height: 27px;\r\n    cursor: pointer;\r\n    background-color: var(--color-gray-medium);\r\n    mask-image: url('../../assets/svg/audio.svg');\r\n    mask-repeat: no-repeat;\r\n    mask-size: contain;\r\n    -webkit-mask-image: url('../../assets/svg/audio.svg');\r\n    -webkit-mask-repeat: no-repeat;\r\n    -webkit-mask-size: contain;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.audio-icon:hover {\r\n    background-color: var(--color-brown);\r\n}\r\n\r\n.audio-icon.disabled {\r\n    pointer-events: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/authorisation.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/authorisation.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".authorisation,\r\n.registration {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 400px;\r\n  height: 450px;\r\n}\r\n\r\n.auth-title,\r\n.reg-title,\r\n.sign-in-button,\r\n.sign-up-button {\r\n  font-size: 21px;\r\n}\r\n\r\n.auth-title,\r\n.reg-title,\r\n.have-not-yet-account-span,\r\n.have-account-span {\r\n  margin-bottom: 1em;\r\n  color: #ffffff;\r\n}\r\n\r\n.auth-title {\r\n  width: 222px;\r\n  text-align: center;\r\n}\r\n\r\n.name-input,\r\n.email-input,\r\n.password-input,\r\n.sign-in-button,\r\n.sign-up-button {\r\n  width: 350px;\r\n  height: 50px;\r\n  border: 3px solid #c7bcab;\r\n}\r\n\r\n.name-input:focus-visible,\r\n.email-input:focus-visible,\r\n.password-input:focus-visible,\r\n.sign-in-button,\r\n.sign-up-button {\r\n  border: 3px solid #ec990e;\r\n  outline: #ec990e 0;\r\n}\r\n\r\n.name-input {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.password-input {\r\n  margin-top: 25px;\r\n}\r\n\r\n.sign-in-button,\r\n.sign-up-button {\r\n  margin-top: 65px;\r\n  font-family: Raleway;\r\n  font-weight: 900;\r\n  letter-spacing: 2px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.sign-in-button:hover,\r\n.sign-up-button:hover {\r\n  color: #ffffff;\r\n  background-color: #ec990e;\r\n  cursor: pointer;\r\n}\r\n\r\n.have-not-yet-account,\r\n.have-account {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  width: 350px;\r\n  height: 20px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.have-not-yet-account-span,\r\n.have-not-yet-account-button,\r\n.have-account-span,\r\n.have-account-button {\r\n  font-size: 13px;\r\n  line-height: 19px;\r\n}\r\n\r\n.have-not-yet-account-span,\r\n.have-account-span {\r\n  font-weight: 400;\r\n}\r\n\r\n.have-not-yet-account-button,\r\n.have-account-button {\r\n  padding: 0;\r\n  border: 0;\r\n  color: #ec990e;\r\n  background-color: transparent;\r\n  font-weight: 600;\r\n}\r\n\r\n.have-not-yet-account-button:hover,\r\n.have-account-button:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/authorisation.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,aAAa;AACf;;AAEA;;;;EAIE,eAAe;AACjB;;AAEA;;;;EAIE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;;;;EAKE,YAAY;EACZ,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;;;;;EAKE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,gBAAgB;EAChB,oBAAoB;EACpB,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;EACd,yBAAyB;EACzB,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;;;;EAIE,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,UAAU;EACV,SAAS;EACT,cAAc;EACd,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;;EAEE,0BAA0B;EAC1B,eAAe;AACjB","sourcesContent":[".authorisation,\r\n.registration {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 400px;\r\n  height: 450px;\r\n}\r\n\r\n.auth-title,\r\n.reg-title,\r\n.sign-in-button,\r\n.sign-up-button {\r\n  font-size: 21px;\r\n}\r\n\r\n.auth-title,\r\n.reg-title,\r\n.have-not-yet-account-span,\r\n.have-account-span {\r\n  margin-bottom: 1em;\r\n  color: #ffffff;\r\n}\r\n\r\n.auth-title {\r\n  width: 222px;\r\n  text-align: center;\r\n}\r\n\r\n.name-input,\r\n.email-input,\r\n.password-input,\r\n.sign-in-button,\r\n.sign-up-button {\r\n  width: 350px;\r\n  height: 50px;\r\n  border: 3px solid #c7bcab;\r\n}\r\n\r\n.name-input:focus-visible,\r\n.email-input:focus-visible,\r\n.password-input:focus-visible,\r\n.sign-in-button,\r\n.sign-up-button {\r\n  border: 3px solid #ec990e;\r\n  outline: #ec990e 0;\r\n}\r\n\r\n.name-input {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.password-input {\r\n  margin-top: 25px;\r\n}\r\n\r\n.sign-in-button,\r\n.sign-up-button {\r\n  margin-top: 65px;\r\n  font-family: Raleway;\r\n  font-weight: 900;\r\n  letter-spacing: 2px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.sign-in-button:hover,\r\n.sign-up-button:hover {\r\n  color: #ffffff;\r\n  background-color: #ec990e;\r\n  cursor: pointer;\r\n}\r\n\r\n.have-not-yet-account,\r\n.have-account {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  width: 350px;\r\n  height: 20px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.have-not-yet-account-span,\r\n.have-not-yet-account-button,\r\n.have-account-span,\r\n.have-account-button {\r\n  font-size: 13px;\r\n  line-height: 19px;\r\n}\r\n\r\n.have-not-yet-account-span,\r\n.have-account-span {\r\n  font-weight: 400;\r\n}\r\n\r\n.have-not-yet-account-button,\r\n.have-account-button {\r\n  padding: 0;\r\n  border: 0;\r\n  color: #ec990e;\r\n  background-color: transparent;\r\n  font-weight: 600;\r\n}\r\n\r\n.have-not-yet-account-button:hover,\r\n.have-account-button:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/cards.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/cards.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/audio.svg */ "./src/assets/audio.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cards_list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  row-gap: 20px;\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  width: 285px;\r\n  height: 510px;\r\n  border: 3px solid var(--color-gray-light);\r\n  border-radius: 30px 0px 0px 0px;\r\n  overflow: hidden;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.card__img {\r\n  height: 190px;\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.card__stat {\r\n  position: absolute;\r\n  width: 70px;\r\n  height: 34px;\r\n  right: -3px;\r\n  top: -3px;\r\n  background: #ffffff;\r\n  border: 1px solid var(--color-gray-light);\r\n  font-weight: 400;\r\n  font-size: 2.1rem;\r\n  text-align: center;\r\n  line-height: 3rem;\r\n  color: var(--color-gray-medium);\r\n}\r\n\r\n.card__stat span {\r\n  font-weight: 600;\r\n  color: #725747;\r\n}\r\n\r\n.card__text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  padding: 10px 8px;\r\n}\r\n\r\n.word {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  font-weight: 500;\r\n  font-size: 2rem;\r\n  line-height: 2.2rem;\r\n  text-align: center;\r\n  color: #000000;\r\n}\r\n\r\n.word__english {\r\n  font-weight: 800;\r\n  color: var(--color-gray-medium);\r\n}\r\n\r\n.audio-icon {\r\n  width: 37px;\r\n  height: 27px;\r\n  cursor: pointer;\r\n  background-color: var(--color-gray-light);\r\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  mask-repeat: no-repeat;\r\n  mask-size: contain;\r\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  -webkit-mask-repeat: no-repeat;\r\n  -webkit-mask-size: contain;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.audio-icon:hover {\r\n  background-color: var(--color-main);\r\n}\r\n\r\n.audio-icon.disabled {\r\n  pointer-events: none;\r\n}\r\n\r\n.card__buttons {\r\n  display: flex;\r\n  gap: 20px;\r\n  justify-content: space-around;\r\n}\r\n\r\n.card__btn {\r\n  display: inline;\r\n  width: 120px;\r\n  height: 33px;\r\n  padding: 10px 22px;\r\n  background: #ffffff;\r\n  border: 2px solid var(--color-gray-light);\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  line-height: 1.2rem;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  color: var(--color-gray-light);\r\n}\r\n\r\n.hard__btn:hover {\r\n  border: 2px solid var(--color-accent);\r\n  color: var(--color-accent);\r\n}\r\n\r\n.done__btn:hover {\r\n  border: 2px solid var(--color-main);\r\n  color: var(--color-main);\r\n}\r\n\r\n.phrases {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  font-size: 1.4rem;\r\n  line-height: 2rem;\r\n}\r\n\r\n.phrase__definition {\r\n  color: #000000;\r\n}\r\n\r\n.phrase__definition i {\r\n  font-weight: 700;\r\n}\r\n\r\n.phrase__definition_english {\r\n  font-weight: 500;\r\n}\r\n\r\n.phrase__definition_russian {\r\n  font-weight: 300;\r\n}\r\n\r\n.phrase__example {\r\n  color: #919191;\r\n}\r\n\r\n.phrase__example_english {\r\n  font-style: italic;\r\n  font-weight: 500;\r\n}\r\n\r\n.phrase__example_russian {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n}\r\n\r\n/* ------------- hard cards-----------------------*/\r\n.card.hard {\r\n  border: 3px solid var(--color-accent);\r\n}\r\n\r\n.hard .card__stat {\r\n  border: 3px solid var(--color-accent);\r\n  line-height: 2.6rem;\r\n}\r\n\r\n.hard .card__stat span {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.hard .word__english {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.hard .hard__btn {\r\n  border: 2px solid var(--color-accent);\r\n  color: var(--color-accent);\r\n}\r\n\r\n/* ------------- done cards-----------------------*/\r\n.card.done {\r\n  border: 3px solid var(--color-main);\r\n}\r\n\r\n.done .card__stat {\r\n  border: 3px solid var(--color-main);\r\n  line-height: 2.6rem;\r\n}\r\n\r\n.done .card__stat span {\r\n  color: var(--color-main);\r\n}\r\n\r\n.done .word__english {\r\n  color: var(--color-main);\r\n}\r\n\r\n.done .done__btn {\r\n  border: 2px solid var(--color-main);\r\n  color: var(--color-main);\r\n}\r\n\r\n/* ------------- word progress bar -----------------------*/\r\n.card__progress-bar {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 170px;\r\n  height: 6px;\r\n  border: 1px solid white;\r\n  border-radius: 4px;\r\n  box-sizing: unset;\r\n  background: #dfd4d4;\r\n  transform: translateX(22px) translateY(12px);\r\n}\r\n\r\n.progress-loading {\r\n  height: 100%;\r\n  width: 25%;\r\n  background-color: var(--color-main);\r\n  border-radius: 4px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/cards.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,yCAAyC;EACzC,+BAA+B;EAC/B,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,mBAAmB;EACnB,yCAAyC;EACzC,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,yCAAyC;EACzC,mDAAsC;EACtC,sBAAsB;EACtB,kBAAkB;EAClB,2DAA8C;EAC9C,8BAA8B;EAC9B,0BAA0B;EAC1B,oBAAoB;AACtB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,yCAAyC;EACzC,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,qCAAqC;EACrC,0BAA0B;AAC5B;;AAEA;EACE,mCAAmC;EACnC,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,mDAAmD;AACnD;EACE,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;EACrC,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,qCAAqC;EACrC,0BAA0B;AAC5B;;AAEA,mDAAmD;AACnD;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mCAAmC;EACnC,wBAAwB;AAC1B;;AAEA,2DAA2D;AAC3D;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,mCAAmC;EACnC,kBAAkB;AACpB","sourcesContent":[".cards_list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  row-gap: 20px;\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  width: 285px;\r\n  height: 510px;\r\n  border: 3px solid var(--color-gray-light);\r\n  border-radius: 30px 0px 0px 0px;\r\n  overflow: hidden;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.card__img {\r\n  height: 190px;\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.card__stat {\r\n  position: absolute;\r\n  width: 70px;\r\n  height: 34px;\r\n  right: -3px;\r\n  top: -3px;\r\n  background: #ffffff;\r\n  border: 1px solid var(--color-gray-light);\r\n  font-weight: 400;\r\n  font-size: 2.1rem;\r\n  text-align: center;\r\n  line-height: 3rem;\r\n  color: var(--color-gray-medium);\r\n}\r\n\r\n.card__stat span {\r\n  font-weight: 600;\r\n  color: #725747;\r\n}\r\n\r\n.card__text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  padding: 10px 8px;\r\n}\r\n\r\n.word {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  font-weight: 500;\r\n  font-size: 2rem;\r\n  line-height: 2.2rem;\r\n  text-align: center;\r\n  color: #000000;\r\n}\r\n\r\n.word__english {\r\n  font-weight: 800;\r\n  color: var(--color-gray-medium);\r\n}\r\n\r\n.audio-icon {\r\n  width: 37px;\r\n  height: 27px;\r\n  cursor: pointer;\r\n  background-color: var(--color-gray-light);\r\n  mask-image: url(\"../assets/audio.svg\");\r\n  mask-repeat: no-repeat;\r\n  mask-size: contain;\r\n  -webkit-mask-image: url(\"../assets/audio.svg\");\r\n  -webkit-mask-repeat: no-repeat;\r\n  -webkit-mask-size: contain;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.audio-icon:hover {\r\n  background-color: var(--color-main);\r\n}\r\n\r\n.audio-icon.disabled {\r\n  pointer-events: none;\r\n}\r\n\r\n.card__buttons {\r\n  display: flex;\r\n  gap: 20px;\r\n  justify-content: space-around;\r\n}\r\n\r\n.card__btn {\r\n  display: inline;\r\n  width: 120px;\r\n  height: 33px;\r\n  padding: 10px 22px;\r\n  background: #ffffff;\r\n  border: 2px solid var(--color-gray-light);\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  line-height: 1.2rem;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  color: var(--color-gray-light);\r\n}\r\n\r\n.hard__btn:hover {\r\n  border: 2px solid var(--color-accent);\r\n  color: var(--color-accent);\r\n}\r\n\r\n.done__btn:hover {\r\n  border: 2px solid var(--color-main);\r\n  color: var(--color-main);\r\n}\r\n\r\n.phrases {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  font-size: 1.4rem;\r\n  line-height: 2rem;\r\n}\r\n\r\n.phrase__definition {\r\n  color: #000000;\r\n}\r\n\r\n.phrase__definition i {\r\n  font-weight: 700;\r\n}\r\n\r\n.phrase__definition_english {\r\n  font-weight: 500;\r\n}\r\n\r\n.phrase__definition_russian {\r\n  font-weight: 300;\r\n}\r\n\r\n.phrase__example {\r\n  color: #919191;\r\n}\r\n\r\n.phrase__example_english {\r\n  font-style: italic;\r\n  font-weight: 500;\r\n}\r\n\r\n.phrase__example_russian {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n}\r\n\r\n/* ------------- hard cards-----------------------*/\r\n.card.hard {\r\n  border: 3px solid var(--color-accent);\r\n}\r\n\r\n.hard .card__stat {\r\n  border: 3px solid var(--color-accent);\r\n  line-height: 2.6rem;\r\n}\r\n\r\n.hard .card__stat span {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.hard .word__english {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.hard .hard__btn {\r\n  border: 2px solid var(--color-accent);\r\n  color: var(--color-accent);\r\n}\r\n\r\n/* ------------- done cards-----------------------*/\r\n.card.done {\r\n  border: 3px solid var(--color-main);\r\n}\r\n\r\n.done .card__stat {\r\n  border: 3px solid var(--color-main);\r\n  line-height: 2.6rem;\r\n}\r\n\r\n.done .card__stat span {\r\n  color: var(--color-main);\r\n}\r\n\r\n.done .word__english {\r\n  color: var(--color-main);\r\n}\r\n\r\n.done .done__btn {\r\n  border: 2px solid var(--color-main);\r\n  color: var(--color-main);\r\n}\r\n\r\n/* ------------- word progress bar -----------------------*/\r\n.card__progress-bar {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 170px;\r\n  height: 6px;\r\n  border: 1px solid white;\r\n  border-radius: 4px;\r\n  box-sizing: unset;\r\n  background: #dfd4d4;\r\n  transform: translateX(22px) translateY(12px);\r\n}\r\n\r\n.progress-loading {\r\n  height: 100%;\r\n  width: 25%;\r\n  background-color: var(--color-main);\r\n  border-radius: 4px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/level-buttons.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/level-buttons.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".levels {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 16;\r\n  height: 65px;\r\n  margin: 55px auto 30px;\r\n  /* background-color:var(--color-accent); */\r\n  /* font-size: 2rem; */\r\n}\r\n\r\n.level {\r\n  width: 12%;\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 50px;\r\n  font-weight: 400;\r\n  font-size: 2rem;\r\n  line-height: 2.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: #ffffff;\r\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  user-select: none;\r\n}\r\n\r\n.level:hover {\r\n  background: #ffffff;\r\n}\r\n\r\n.level:active {\r\n  padding: 20px 15px;\r\n  height: 100%;\r\n}\r\n\r\n.level.active {\r\n  padding: 20px 15px;\r\n  height: 100%;\r\n  background-color: #ffffff;\r\n  pointer-events: none;\r\n}\r\n\r\n.level_number {\r\n  font-family: \"Arial\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 30px;\r\n}\r\n\r\n.level-1 {\r\n  background: #cdc1a2;\r\n  border: 2px solid #cdc1a2;\r\n}\r\n\r\n.level-1:hover,\r\n.level-1.active {\r\n  color: #cdc1a2;\r\n}\r\n\r\n.level-2 {\r\n  background: var(--color-gray-medium);\r\n  border: 2px solid var(--color-gray-medium);\r\n}\r\n\r\n.level-2:hover,\r\n.level-2.active {\r\n  color: var(--color-gray-medium);\r\n}\r\n\r\n.level-3 {\r\n  background: #ffcb05;\r\n  border: 2px solid #ffcb05;\r\n}\r\n\r\n.level-3:hover,\r\n.level-3.active {\r\n  color: #ffcb05;\r\n}\r\n\r\n.level-4 {\r\n  background: var(--color-main);\r\n  border: 2px solid var(--color-main);\r\n}\r\n\r\n.level-4:hover,\r\n.level-4.active {\r\n  color: var(--color-main);\r\n}\r\n\r\n.level-5 {\r\n  background: #725747;\r\n  border: 2px solid #725747;\r\n}\r\n\r\n.level-5:hover,\r\n.level-5.active {\r\n  color: #725747;\r\n}\r\n\r\n.level-6 {\r\n  background: #494343;\r\n  border: 2px solid #494343;\r\n}\r\n\r\n.level-6:hover,\r\n.level-6.active {\r\n  color: #494343;\r\n}\r\n\r\n.level-7 {\r\n  background: var(--color-accent);\r\n  border: 2px solid var(--color-accent);\r\n}\r\n\r\n.level-7:hover,\r\n.level-7.active {\r\n  color: var(--color-accent);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/level-buttons.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,sBAAsB;EACtB,0CAA0C;EAC1C,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,2CAA2C;EAC3C,eAAe;EACf,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE,gCAAgC;EAChC,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,oCAAoC;EACpC,0CAA0C;AAC5C;;AAEA;;EAEE,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,mCAAmC;AACrC;;AAEA;;EAEE,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,+BAA+B;EAC/B,qCAAqC;AACvC;;AAEA;;EAEE,0BAA0B;AAC5B","sourcesContent":[".levels {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 16;\r\n  height: 65px;\r\n  margin: 55px auto 30px;\r\n  /* background-color:var(--color-accent); */\r\n  /* font-size: 2rem; */\r\n}\r\n\r\n.level {\r\n  width: 12%;\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 50px;\r\n  font-weight: 400;\r\n  font-size: 2rem;\r\n  line-height: 2.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: #ffffff;\r\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  user-select: none;\r\n}\r\n\r\n.level:hover {\r\n  background: #ffffff;\r\n}\r\n\r\n.level:active {\r\n  padding: 20px 15px;\r\n  height: 100%;\r\n}\r\n\r\n.level.active {\r\n  padding: 20px 15px;\r\n  height: 100%;\r\n  background-color: #ffffff;\r\n  pointer-events: none;\r\n}\r\n\r\n.level_number {\r\n  font-family: \"Arial\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 30px;\r\n}\r\n\r\n.level-1 {\r\n  background: #cdc1a2;\r\n  border: 2px solid #cdc1a2;\r\n}\r\n\r\n.level-1:hover,\r\n.level-1.active {\r\n  color: #cdc1a2;\r\n}\r\n\r\n.level-2 {\r\n  background: var(--color-gray-medium);\r\n  border: 2px solid var(--color-gray-medium);\r\n}\r\n\r\n.level-2:hover,\r\n.level-2.active {\r\n  color: var(--color-gray-medium);\r\n}\r\n\r\n.level-3 {\r\n  background: #ffcb05;\r\n  border: 2px solid #ffcb05;\r\n}\r\n\r\n.level-3:hover,\r\n.level-3.active {\r\n  color: #ffcb05;\r\n}\r\n\r\n.level-4 {\r\n  background: var(--color-main);\r\n  border: 2px solid var(--color-main);\r\n}\r\n\r\n.level-4:hover,\r\n.level-4.active {\r\n  color: var(--color-main);\r\n}\r\n\r\n.level-5 {\r\n  background: #725747;\r\n  border: 2px solid #725747;\r\n}\r\n\r\n.level-5:hover,\r\n.level-5.active {\r\n  color: #725747;\r\n}\r\n\r\n.level-6 {\r\n  background: #494343;\r\n  border: 2px solid #494343;\r\n}\r\n\r\n.level-6:hover,\r\n.level-6.active {\r\n  color: #494343;\r\n}\r\n\r\n.level-7 {\r\n  background: var(--color-accent);\r\n  border: 2px solid var(--color-accent);\r\n}\r\n\r\n.level-7:hover,\r\n.level-7.active {\r\n  color: var(--color-accent);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main-page.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main-page.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main {\r\n  height: 100%;\r\n}\r\n\r\n.main-page * {\r\n  user-select: none;\r\n}\r\n\r\n.main-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  margin-left: 80px;\r\n  max-width: 55%;\r\n  height: 100%;\r\n  padding: 70px 0;\r\n}\r\n\r\n.main-page__title {\r\n  font-weight: 900;\r\n  font-size: 5rem;\r\n  line-height: 7rem;\r\n  color: #ffffff;\r\n}\r\n\r\n.main-page__text p {\r\n  font-weight: 500;\r\n  font-size: 1.8rem;\r\n  line-height: 2.6rem;\r\n  color: #ffffff;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  gap: 40px;\r\n  margin-top: 100px;\r\n}\r\n\r\n.btn_intro {\r\n  width: 200px;\r\n  height: 50px;\r\n}\r\n\r\n.btn {\r\n  font-weight: 900;\r\n  font-size: 2rem;\r\n  line-height: 1.5rem;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.btn:hover {\r\n  text-decoration: underline;\r\n  border-radius: 8px;\r\n}\r\n\r\n.btn:active {\r\n  scale: 96%;\r\n}\r\n\r\n.btn_colored {\r\n  background-color: var(--color-main);\r\n  color: #ffffff;\r\n}\r\n\r\n.btn_bordered {\r\n  background: #ffffff;\r\n  border: 3px solid var(--color-main);\r\n  letter-spacing: 2px;\r\n  color: #ec990e;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/main-page.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,iBAAiB;EACjB,cAAc;EACd,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mCAAmC;EACnC,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,mCAAmC;EACnC,mBAAmB;EACnB,cAAc;AAChB","sourcesContent":[".main {\r\n  height: 100%;\r\n}\r\n\r\n.main-page * {\r\n  user-select: none;\r\n}\r\n\r\n.main-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  margin-left: 80px;\r\n  max-width: 55%;\r\n  height: 100%;\r\n  padding: 70px 0;\r\n}\r\n\r\n.main-page__title {\r\n  font-weight: 900;\r\n  font-size: 5rem;\r\n  line-height: 7rem;\r\n  color: #ffffff;\r\n}\r\n\r\n.main-page__text p {\r\n  font-weight: 500;\r\n  font-size: 1.8rem;\r\n  line-height: 2.6rem;\r\n  color: #ffffff;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  gap: 40px;\r\n  margin-top: 100px;\r\n}\r\n\r\n.btn_intro {\r\n  width: 200px;\r\n  height: 50px;\r\n}\r\n\r\n.btn {\r\n  font-weight: 900;\r\n  font-size: 2rem;\r\n  line-height: 1.5rem;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.btn:hover {\r\n  text-decoration: underline;\r\n  border-radius: 8px;\r\n}\r\n\r\n.btn:active {\r\n  scale: 96%;\r\n}\r\n\r\n.btn_colored {\r\n  background-color: var(--color-main);\r\n  color: #ffffff;\r\n}\r\n\r\n.btn_bordered {\r\n  background: #ffffff;\r\n  border: 3px solid var(--color-main);\r\n  letter-spacing: 2px;\r\n  color: #ec990e;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/static/Raleway-Regular.ttf */ "./src/assets/fonts/static/Raleway-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/static/Raleway-Bold.ttf */ "./src/assets/fonts/static/Raleway-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/bg_main.jpg */ "./src/assets/img/bg_main.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg_main.jpg */ "./src/assets/bg_main.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/rs_school_js.svg */ "./src/assets/svg/rs_school_js.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: Raleway;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: Raleway;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n\r\n:root {\r\n  --color-main: #ec990e;\r\n  --color-medium: #f2b857;\r\n  --color-accent: #ae312b;\r\n  --color-gray-light: #c7bcab;\r\n  --color-gray-medium: #b59565;\r\n  --color-dark: #494343;\r\n  --color-brown : #725747;\r\n  --color-yellow-bright :#ffcb05;\r\n  --color-green-common : #6DA070;\r\n\r\n  font-size: 10px;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-style: normal;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n  overflow: auto;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.container {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 80px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.header__logo img {\r\n  width: 130px;\r\n  height: auto;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  flex-direction: row;\r\n  align-items: flex-end;\r\n  list-style-type: none;\r\n  gap: 30px;\r\n}\r\n\r\n.nav-list__item {\r\n  padding-bottom: 6px;\r\n  font-weight: 800;\r\n  font-size: 1.8rem;\r\n  line-height: 1.8rem;\r\n  letter-spacing: 1.275px;\r\n  color: #ffffff;\r\n  text-transform: uppercase;\r\n  border-bottom: solid 3px var(--color-gray-light);\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  user-select: none;\r\n}\r\n\r\n.nav-list__item.active {\r\n  color: #c7bcab;\r\n  border-bottom: solid 3px var(--color-main);\r\n  pointer-events: none;\r\n}\r\n\r\n.nav-list__item:hover {\r\n  border-bottom: solid 3px var(--color-main);\r\n}\r\n\r\n.nav-list__item:last-of-type {\r\n  border-bottom: none;\r\n}\r\n\r\n.sign-in {\r\n  padding: 6px 30px;\r\n  background-color: var(--color-main);\r\n}\r\n\r\n.sign-in:hover {\r\n  border-top-left-radius: 8px;\r\n}\r\n\r\n.sign-in:active {\r\n  scale: 96%;\r\n}\r\n\r\n.intro {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* justify-content: space-around; */\r\n  /* margin-top: 80px; */\r\n  max-width: 60%;\r\n}\r\n\r\n.h1 {\r\n  font-weight: 900;\r\n  font-size: 6rem;\r\n  line-height: 10rem;\r\n  color: #ffffff;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  height: 60px;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.intro__text p {\r\n  /* margin-top: 16px; */\r\n  font-weight: 500;\r\n  font-size: 1.8rem;\r\n  line-height: 2.6rem;\r\n  color: #ffffff;\r\n}\r\n\r\n.footer {\r\n  margin-top: auto;\r\n}\r\n\r\n.footer_main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgba(43, 31, 31, 0.5);\r\n}\r\n\r\nfooter {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nfooter.secondary {\r\n  /* background-image: url(\"../assets/bg_main.jpg\"); */\r\n  background-position: bottom;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n.footer__wrapper {\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.rss {\r\n  width: 100px;\r\n  height: 40px;\r\n  background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  background-size: contain;\r\n  filter: invert(1);\r\n}\r\n\r\n.footer__team {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  gap: 0;\r\n  align-items: center;\r\n}\r\n\r\n.team__list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  list-style-type: none;\r\n  color: #ffffff;\r\n  gap: 0;\r\n}\r\n\r\n.team__member a {\r\n  padding: 0 16px;\r\n  font-weight: 500;\r\n  font-size: 1.6rem;\r\n  line-height: 2.8rem;\r\n  color: #ffffff;\r\n  border-right: solid 1px #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\n.team__member a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.team__member:last-of-type a {\r\n  border-right: none;\r\n}\r\n\r\n.footer__year {\r\n  font-weight: 400;\r\n  font-size: 30px;\r\n  line-height: 0px;\r\n  color: #ffffff;\r\n}\r\n\r\n.gh-logo {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.game__buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 38px;\r\n  gap: 50px;\r\n}\r\n\r\n.game__buttons .btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 52px;\r\n  padding: 8px 30px;\r\n  line-height: 3.7rem;\r\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n  user-select: none;\r\n}\r\n\r\n.game-icon {\r\n  height: 100%;\r\n  margin-right: 15px;\r\n}\r\n\r\n.rs-logo {\r\n  width: 90px;\r\n  height: auto;\r\n}\r\n\r\n.gh_logo {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n.footer__team {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  gap: 0;\r\n  align-items: center;\r\n}\r\n.team__list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  list-style-type: none;\r\n  color: #ffffff;\r\n  gap: 0;\r\n}\r\n\r\n.team__member a {\r\n  padding: 0 16px;\r\n  font-weight: 500;\r\n  font-size: 1.6rem;\r\n  line-height: 2.8rem;\r\n  color: #ffffff;\r\n  border-right: solid 1px #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\n.team__member a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.team__member:last-of-type a {\r\n  border-right: none;\r\n}\r\n\r\n.footer__year {\r\n  font-weight: 400;\r\n  font-size: 30px;\r\n  line-height: 0px;\r\n  color: #ffffff;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,+DAAyE;EACzE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,+DAAsE;EACtE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;EACvB,uBAAuB;EACvB,2BAA2B;EAC3B,4BAA4B;EAC5B,qBAAqB;EACrB,uBAAuB;EACvB,8BAA8B;EAC9B,8BAA8B;;EAE9B,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,kCAAkC;EAClC,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,iCAAiC;EACjC,yDAAkD;EAClD,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,qBAAqB;EACrB,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,yBAAyB;EACzB,gDAAgD;EAChD,eAAe;EACf,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,0CAA0C;EAC1C,oBAAoB;AACtB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mCAAmC;AACrC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mCAAmC;EACnC,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uCAAuC;AACzC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oDAAoD;EACpD,2BAA2B;EAC3B,sBAAsB;EACtB,4BAA4B;EAC5B,4BAA4B;EAC5B,kHAAuG;AACzG;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,oEAAkE;EAClE,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,MAAM;EACN,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,qBAAqB;EACrB,cAAc;EACd,MAAM;AACR;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,+BAA+B;EAC/B,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,2CAA2C;EAC3C,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,MAAM;EACN,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,qBAAqB;EACrB,cAAc;EACd,MAAM;AACR;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,+BAA+B;EAC/B,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB","sourcesContent":["@font-face {\r\n  font-family: Raleway;\r\n  src: url(\"../assets/fonts/static/Raleway-Regular.ttf\") format(\"truetype\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: Raleway;\r\n  src: url(\"../assets/fonts/static/Raleway-Bold.ttf\") format(\"truetype\");\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n\r\n:root {\r\n  --color-main: #ec990e;\r\n  --color-medium: #f2b857;\r\n  --color-accent: #ae312b;\r\n  --color-gray-light: #c7bcab;\r\n  --color-gray-medium: #b59565;\r\n  --color-dark: #494343;\r\n  --color-brown : #725747;\r\n  --color-yellow-bright :#ffcb05;\r\n  --color-green-common : #6DA070;\r\n\r\n  font-size: 10px;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-style: normal;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n  overflow: auto;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n  background-image: url(\"../assets/img/bg_main.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.container {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 80px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.header__logo img {\r\n  width: 130px;\r\n  height: auto;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  flex-direction: row;\r\n  align-items: flex-end;\r\n  list-style-type: none;\r\n  gap: 30px;\r\n}\r\n\r\n.nav-list__item {\r\n  padding-bottom: 6px;\r\n  font-weight: 800;\r\n  font-size: 1.8rem;\r\n  line-height: 1.8rem;\r\n  letter-spacing: 1.275px;\r\n  color: #ffffff;\r\n  text-transform: uppercase;\r\n  border-bottom: solid 3px var(--color-gray-light);\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  user-select: none;\r\n}\r\n\r\n.nav-list__item.active {\r\n  color: #c7bcab;\r\n  border-bottom: solid 3px var(--color-main);\r\n  pointer-events: none;\r\n}\r\n\r\n.nav-list__item:hover {\r\n  border-bottom: solid 3px var(--color-main);\r\n}\r\n\r\n.nav-list__item:last-of-type {\r\n  border-bottom: none;\r\n}\r\n\r\n.sign-in {\r\n  padding: 6px 30px;\r\n  background-color: var(--color-main);\r\n}\r\n\r\n.sign-in:hover {\r\n  border-top-left-radius: 8px;\r\n}\r\n\r\n.sign-in:active {\r\n  scale: 96%;\r\n}\r\n\r\n.intro {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* justify-content: space-around; */\r\n  /* margin-top: 80px; */\r\n  max-width: 60%;\r\n}\r\n\r\n.h1 {\r\n  font-weight: 900;\r\n  font-size: 6rem;\r\n  line-height: 10rem;\r\n  color: #ffffff;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  height: 60px;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.intro__text p {\r\n  /* margin-top: 16px; */\r\n  font-weight: 500;\r\n  font-size: 1.8rem;\r\n  line-height: 2.6rem;\r\n  color: #ffffff;\r\n}\r\n\r\n.footer {\r\n  margin-top: auto;\r\n}\r\n\r\n.footer_main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgba(43, 31, 31, 0.5);\r\n}\r\n\r\nfooter {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nfooter.secondary {\r\n  /* background-image: url(\"../assets/bg_main.jpg\"); */\r\n  background-position: bottom;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(\"../assets/bg_main.jpg\");\r\n}\r\n\r\n.footer__wrapper {\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.rss {\r\n  width: 100px;\r\n  height: 40px;\r\n  background: no-repeat center url(\"../assets/svg/rs_school_js.svg\");\r\n  background-size: contain;\r\n  filter: invert(1);\r\n}\r\n\r\n.footer__team {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  gap: 0;\r\n  align-items: center;\r\n}\r\n\r\n.team__list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  list-style-type: none;\r\n  color: #ffffff;\r\n  gap: 0;\r\n}\r\n\r\n.team__member a {\r\n  padding: 0 16px;\r\n  font-weight: 500;\r\n  font-size: 1.6rem;\r\n  line-height: 2.8rem;\r\n  color: #ffffff;\r\n  border-right: solid 1px #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\n.team__member a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.team__member:last-of-type a {\r\n  border-right: none;\r\n}\r\n\r\n.footer__year {\r\n  font-weight: 400;\r\n  font-size: 30px;\r\n  line-height: 0px;\r\n  color: #ffffff;\r\n}\r\n\r\n.gh-logo {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.game__buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 38px;\r\n  gap: 50px;\r\n}\r\n\r\n.game__buttons .btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 52px;\r\n  padding: 8px 30px;\r\n  line-height: 3.7rem;\r\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n  user-select: none;\r\n}\r\n\r\n.game-icon {\r\n  height: 100%;\r\n  margin-right: 15px;\r\n}\r\n\r\n.rs-logo {\r\n  width: 90px;\r\n  height: auto;\r\n}\r\n\r\n.gh_logo {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n.footer__team {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  gap: 0;\r\n  align-items: center;\r\n}\r\n.team__list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  list-style-type: none;\r\n  color: #ffffff;\r\n  gap: 0;\r\n}\r\n\r\n.team__member a {\r\n  padding: 0 16px;\r\n  font-weight: 500;\r\n  font-size: 1.6rem;\r\n  line-height: 2.8rem;\r\n  color: #ffffff;\r\n  border-right: solid 1px #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\n.team__member a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.team__member:last-of-type a {\r\n  border-right: none;\r\n}\r\n\r\n.footer__year {\r\n  font-weight: 400;\r\n  font-size: 30px;\r\n  line-height: 0px;\r\n  color: #ffffff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/pagination.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/pagination.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pagination {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  height: 40px;\r\n  margin: 55px auto 30px;\r\n}\r\n\r\n.pagination-element {\r\n  font-family: \"Arial\", sans-serif;\r\n  font-style: normal;\r\n  font-size: 2rem;\r\n  font-weight: 400;\r\n  padding: 3px 6px;\r\n  cursor: pointer;\r\n  font-size: 2.1rem;\r\n  font-weight: 400;\r\n  line-height: 2.5rem;\r\n  text-align: center;\r\n  color: var(--color-gray-light);\r\n  user-select: none;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.pagination-element:hover {\r\n  color: #725747;\r\n}\r\n\r\n.pagination-element.active {\r\n  padding: 3px 10px;\r\n  font-weight: 700;\r\n  font-size: 3rem;\r\n  text-decoration-line: underline;\r\n  color: #725747;\r\n  pointer-events: none;\r\n  cursor: auto;\r\n}\r\n\r\n.pagination-element.done {\r\n  color: var(--color-main);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/pagination.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,8BAA8B;EAC9B,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,+BAA+B;EAC/B,cAAc;EACd,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B","sourcesContent":[".pagination {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  height: 40px;\r\n  margin: 55px auto 30px;\r\n}\r\n\r\n.pagination-element {\r\n  font-family: \"Arial\", sans-serif;\r\n  font-style: normal;\r\n  font-size: 2rem;\r\n  font-weight: 400;\r\n  padding: 3px 6px;\r\n  cursor: pointer;\r\n  font-size: 2.1rem;\r\n  font-weight: 400;\r\n  line-height: 2.5rem;\r\n  text-align: center;\r\n  color: var(--color-gray-light);\r\n  user-select: none;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.pagination-element:hover {\r\n  color: #725747;\r\n}\r\n\r\n.pagination-element.active {\r\n  padding: 3px 10px;\r\n  font-weight: 700;\r\n  font-size: 3rem;\r\n  text-decoration-line: underline;\r\n  color: #725747;\r\n  pointer-events: none;\r\n  cursor: auto;\r\n}\r\n\r\n.pagination-element.done {\r\n  color: var(--color-main);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/pages/audio-call-page/audio.css":
/*!*********************************************!*\
  !*** ./src/pages/audio-call-page/audio.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./audio.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/audio-call-page/audio.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/audio-call-page/modal.css":
/*!*********************************************!*\
  !*** ./src/pages/audio-call-page/modal.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/audio-call-page/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/authorisation.css":
/*!**************************************!*\
  !*** ./src/styles/authorisation.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_authorisation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./authorisation.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/authorisation.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_authorisation_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_authorisation_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_authorisation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_authorisation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/cards.css":
/*!******************************!*\
  !*** ./src/styles/cards.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./cards.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/cards.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/level-buttons.css":
/*!**************************************!*\
  !*** ./src/styles/level-buttons.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_level_buttons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./level-buttons.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/level-buttons.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_level_buttons_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_level_buttons_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_level_buttons_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_level_buttons_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main-page.css":
/*!**********************************!*\
  !*** ./src/styles/main-page.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main-page.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main-page.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/pagination.css":
/*!***********************************!*\
  !*** ./src/styles/pagination.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./pagination.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/pagination.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Api.ts":
/*!********************!*\
  !*** ./src/Api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ "./src/utils/constants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Api {
    constructor() {
        this.baseUrl = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl;
        this.users = `${this.baseUrl}/users`;
        this.signIn = `${this.baseUrl}/signin`;
        this.words = `${this.baseUrl}/words`;
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.users}`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response;
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.users}/${id}`, {
                method: 'GET',
            });
            return response;
        });
    }
    signInUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.signIn}`, {
                method: 'POST',
                body: JSON.stringify({ email: user.email, password: user.password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.users}/${id}`, {
                method: 'DELETE',
            });
            return response;
        });
    }
    getWords(group, page) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responce = yield fetch(`${this.words}?group=${group}&page=${page}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const cards = yield responce.json();
                return cards;
            }
            catch (_a) {
                throw new Error();
            }
        });
    }
    getWordsForLevel(group) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responce = yield fetch(`${this.words}?group=${group}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const cards = yield responce.json();
                return cards;
            }
            catch (_a) {
                throw new Error();
            }
        });
    }
    getOneWord(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responce = yield fetch(`${this.words}/${id}`);
                const card = yield responce.json();
                return card;
            }
            catch (_a) {
                throw new Error();
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);


/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_main_page_main_page_controler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main-page/main-page-controler */ "./src/pages/main-page/main-page-controler.ts");
/* harmony import */ var _pages_audio_call_page_audio_call_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/audio-call-page/audio-call-controller */ "./src/pages/audio-call-page/audio-call-controller.ts");
/* harmony import */ var _pages_auth_page_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/auth-page/auth-controller */ "./src/pages/auth-page/auth-controller.ts");
/* harmony import */ var _pages_registration_page_registration_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/registration-page/registration-controller */ "./src/pages/registration-page/registration-controller.ts");
/* harmony import */ var _pages_book_page_book_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/book-page/book-controller */ "./src/pages/book-page/book-controller.ts");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/functions */ "./src/functions/functions.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/constants */ "./src/utils/constants.ts");
/* eslint-disable import/no-cycle */







class App {
    static setController(controller) {
        App.controller = controller;
        App.main = document.querySelector('.main');
        if (App.main) {
            App.main.innerHTML = '';
            App.main.appendChild(App.controller.pageView.view);
        }
    }
    /* eslint-disable class-methods-use-this */
    start() {
        this.addEventListeners();
        window.onbeforeunload = () => {
            const { pageName } = App.pageInfo;
            if (pageName !== 'bookPage') {
                (0,_functions_functions__WEBPACK_IMPORTED_MODULE_5__.saveDataToLocalStorage)('pageInfo', JSON.stringify(App.pageInfo));
            }
        };
    }
    /* eslint-disable no-alert */
    static signIn(data) {
        if (typeof data === 'object') {
            const userData = data;
            this.user = userData;
            (0,_functions_functions__WEBPACK_IMPORTED_MODULE_5__.saveDataToLocalStorage)('rs-lang-user', JSON.stringify(userData));
            App.renderMainPage();
            const signInButton = document.querySelector('.sign-in-page-link');
            signInButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_6__.logOutText;
            signInButton.removeEventListener('click', App.renderAuthPage);
            signInButton.addEventListener('click', App.logOut);
            return;
        }
        // заменить алерт на что-то человеческое
        alert(data);
    }
    static logOut() {
        const signInButton = document.querySelector('.sign-in-page-link');
        signInButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_6__.signInButtonText;
        signInButton.removeEventListener('click', App.logOut);
        signInButton.addEventListener('click', App.renderAuthPage);
        this.user = undefined;
        (0,_functions_functions__WEBPACK_IMPORTED_MODULE_5__.removeDataFromLocalStorage)('rs-lang-user');
    }
    static changeActiveClassForNavItemByEvent(e) {
        App.changeActiveClassForNavItemByElement(e.target);
    }
    static changeActiveClassForNavItemByElement(elem) {
        const menuItems = document.querySelectorAll('.nav-list__item');
        menuItems.forEach((item) => {
            item.classList.remove('active');
        });
        elem === null || elem === void 0 ? void 0 : elem.classList.add('active');
    }
    static renderMainPage() {
        const controller = new _pages_main_page_main_page_controler__WEBPACK_IMPORTED_MODULE_0__["default"]();
        App.setController(controller);
        App.pageInfo = { pageName: 'mainPage' };
        App.makeMainTransparentAgain();
        const mainButton = document.querySelector('.main-page-link');
        App.changeActiveClassForNavItemByElement(mainButton);
    }
    static renderBookPage() {
        const controller = new _pages_book_page_book_controller__WEBPACK_IMPORTED_MODULE_4__["default"]();
        App.setController(controller);
        const mainButton = document.querySelector('.book-page-link');
        App.changeActiveClassForNavItemByElement(mainButton);
        App.pageInfo = { pageName: 'bookPage' };
    }
    static renderAuthPage() {
        const controller = new _pages_auth_page_auth_controller__WEBPACK_IMPORTED_MODULE_2__["default"]();
        App.setController(controller);
        // if (e) {
        //   App.changeActiveClassForNavItemByEvent(e);
        // }
        const mainButton = document.querySelector('.sign-in-page-link');
        App.changeActiveClassForNavItemByElement(mainButton);
        App.makeMainTransparentAgain();
        App.pageInfo = { pageName: 'authPage' };
    }
    static renderRegPage() {
        const controller = new _pages_registration_page_registration_controller__WEBPACK_IMPORTED_MODULE_3__["default"]();
        App.setController(controller);
    }
    static makeMainTransparentAgain() {
        const mainWrapper = document.querySelector('.main_wrapper');
        mainWrapper.style.backgroundColor = 'transparent';
    }
    addEventListeners() {
        var _a, _b, _c, _d, _e, _f, _g;
        window.addEventListener('load', () => {
            if ((0,_functions_functions__WEBPACK_IMPORTED_MODULE_5__.getDataFromLocalStorage)('pageInfo')) {
                const pageInfo = (0,_functions_functions__WEBPACK_IMPORTED_MODULE_5__.getDataFromLocalStorage)('pageInfo');
                const { pageName } = pageInfo;
                switch (pageName) {
                    case 'mainPage':
                        App.renderMainPage();
                        break;
                    case 'bookPage':
                        App.renderBookPage();
                        break;
                    case 'authPage':
                        App.renderAuthPage();
                        break;
                    default:
                        App.renderMainPage();
                        break;
                }
            }
            else {
                App.renderMainPage();
            }
            if ((0,_functions_functions__WEBPACK_IMPORTED_MODULE_5__.getDataFromLocalStorage)('rs-lang-user')) {
                const user = (0,_functions_functions__WEBPACK_IMPORTED_MODULE_5__.getDataFromLocalStorage)('rs-lang-user');
                App.signIn(user);
            }
        });
        (_a = document.querySelector('.header__logo')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', App.renderMainPage);
        // App.renderMainPage();
        (_b = document.querySelector('.main-page-link')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', App.renderMainPage);
        (_c = document.querySelector('.book-page-link')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', App.renderBookPage);
        (_d = document.querySelector('.sign-in-page-link')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', App.renderAuthPage);
        //   document.querySelector('.words-page-link')?.addEventListener('click', (): void => {
        //     this.page = new WordsPage();
        //   });
        //   document.querySelector('.stat-page-link')?.addEventListener('click', (): void => {
        //     this.page = new StatPage();
        //   });
        (_e = document.querySelector('.game-page-link')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
            const controller = new _pages_audio_call_page_audio_call_controller__WEBPACK_IMPORTED_MODULE_1__["default"]();
            App.setController(controller);
        });
        (_f = document.querySelector('.sign-in-page-link')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', () => {
            const controller = new _pages_auth_page_auth_controller__WEBPACK_IMPORTED_MODULE_2__["default"]();
            App.setController(controller);
        });
        (_g = document.querySelector('.sign-up-page-link')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', () => {
            const controller = new _pages_registration_page_registration_controller__WEBPACK_IMPORTED_MODULE_3__["default"]();
            App.setController(controller);
        });
        //   document.querySelector('.game-page-link')?.addEventListener('click', (): void => {
        //     this.page = new GamePage();
        //   });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/functions/functions.ts":
/*!************************************!*\
  !*** ./src/functions/functions.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableAudioBtns": () => (/* binding */ disableAudioBtns),
/* harmony export */   "enableAudioBtns": () => (/* binding */ enableAudioBtns),
/* harmony export */   "getDataFromLocalStorage": () => (/* binding */ getDataFromLocalStorage),
/* harmony export */   "isValidEmail": () => (/* binding */ isValidEmail),
/* harmony export */   "isValidPassword": () => (/* binding */ isValidPassword),
/* harmony export */   "removeDataFromLocalStorage": () => (/* binding */ removeDataFromLocalStorage),
/* harmony export */   "saveDataToLocalStorage": () => (/* binding */ saveDataToLocalStorage)
/* harmony export */ });
/* eslint-disable no-useless-escape */
function isValidEmail(email) {
    return !!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g); // validation for email
}
function isValidPassword(password) {
    return !!password.match(/^[A-Za-z\d]{8,}$/g); // minimum eight characters, letters, numbers or mix
}
function saveDataToLocalStorage(name, data) {
    localStorage.setItem(name, data);
}
function getDataFromLocalStorage(name) {
    return localStorage.getItem(name) !== null ? JSON.parse(localStorage.getItem(name) || '') : null;
}
function removeDataFromLocalStorage(name) {
    localStorage.removeItem(name);
}
function disableAudioBtns() {
    const audioBtns = document.querySelectorAll('.audio-icon');
    audioBtns.forEach((btn) => {
        btn.classList.add('disabled');
    });
}
function enableAudioBtns() {
    const audioBtns = document.querySelectorAll('.audio-icon');
    audioBtns.forEach((btn) => {
        btn.classList.remove('disabled');
    });
}
/* prettier-ignore */



/***/ }),

/***/ "./src/pages/application-controller.ts":
/*!*********************************************!*\
  !*** ./src/pages/application-controller.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ApplicationContoller {
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationContoller);


/***/ }),

/***/ "./src/pages/application-view.ts":
/*!***************************************!*\
  !*** ./src/pages/application-view.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ApplicationView {
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationView);


/***/ }),

/***/ "./src/pages/audio-call-page/audio-call-controller.ts":
/*!************************************************************!*\
  !*** ./src/pages/audio-call-page/audio-call-controller.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _audio_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio-model */ "./src/pages/audio-call-page/audio-model.ts");
/* harmony import */ var _audio_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio-view */ "./src/pages/audio-call-page/audio-view.ts");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../application-controller */ "./src/pages/application-controller.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable import/no-cycle */





class AudioController extends _application_controller__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(words) {
        super();
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.wordsPerPage = 20;
        this.initialbarProgress = 3;
        this.pagesPerGame = 3;
        /* eslint-disable @typescript-eslint/indent */
        /* eslint-disable implicit-arrow-linebreak */
        this.getwords = (group, page) => new Promise((res, rej) => {
            fetch(`${this.api.words}?group=${group}&page=${page}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((result) => {
                const words = result.json();
                res(words);
            })
                .catch((err) => {
                rej(err);
            });
        });
        if (!words) {
            this.pageView = new _audio_view__WEBPACK_IMPORTED_MODULE_1__["default"]();
            this.model = new _audio_model__WEBPACK_IMPORTED_MODULE_0__["default"](this.pageView);
            this.addListeners();
            this.addKeyBoardListener();
        }
        if (words) {
            /// переход со сттраницы учебника
        }
    }
    addListeners() {
        var _a;
        const btns = this.pageView.view.querySelectorAll('button');
        for (let i = 0; i < btns.length; i += 1) {
            btns[i].addEventListener('click', (e) => {
                const target = e.currentTarget;
                if (target.classList.contains('game-button')) {
                    this.model.gameStatus = 'Set Level';
                    this.getAllWords(Number(target.value));
                }
            });
        }
        this.pageView.view.addEventListener('click', (e) => {
            const target = e.target;
            // if (target.className === 'game-button option') {
            //   this.model.updateGameProgress();//обновление статистики
            // }
            if (target.id === 'next-question-button') {
                this.model.nextQuestion();
            }
            if (target.className === 'audio-icon') {
                const audio = target.firstChild;
                // let a = new Audio(audio.src);
                audio.play();
            }
            if (target.id === 'play-again') {
                this.model.playAgain();
            }
            if (target.className === 'game-button option') {
                this.model.handleAnswer(target.querySelector('.span-value').innerText);
            }
            if (target.className === 'modal-close') {
                this.model.closeResult();
            }
        });
        (_a = this.pageView.view.querySelector('#new-game')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.model.gameStatus = 'Select Level';
        });
    }
    addKeyBoardListener() {
        document.addEventListener('keydown', (e) => this.keyPress(e));
    }
    keyPress(e) {
        if (_App__WEBPACK_IMPORTED_MODULE_4__["default"].controller instanceof AudioController) {
            this.pageView.handlePressKey(e.key);
        }
    }
    getAllWords(group) {
        return __awaiter(this, void 0, void 0, function* () {
            this.pageView.showProgressBar();
            this.model.gameStatus = 'Loading';
            let progress = this.initialbarProgress;
            let words = new Array();
            let randomPages = new Array();
            while (randomPages.length < this.pagesPerGame) {
                randomPages.push(Math.floor(Math.random() * this.pagesPerGame + 1));
                randomPages = randomPages.filter((item, index, arr) => index === arr.indexOf(item));
            }
            for (let i = 0; i <= this.pagesPerGame; i += 1) {
                progress = (i / this.pagesPerGame) * 100;
                this.model.loadingStatus = progress;
                /* eslint-disable no-await-in-loop */
                const value = yield this.getwords(group, i);
                words = words.concat(value);
            }
            this.model.createQuiz(words, 20);
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioController);


/***/ }),

/***/ "./src/pages/audio-call-page/audio-model.ts":
/*!**************************************************!*\
  !*** ./src/pages/audio-call-page/audio-model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _audio_question_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio-question-component */ "./src/pages/audio-call-page/audio-question-component.ts");

class AudioModel {
    constructor(pageView) {
        this.currentQuestion = -1;
        this.loadingProgress = 0;
        this.pageView = pageView;
        this.wrongAnswers = 0;
        this.corrrectAnswers = 0;
    }
    set loadingStatus(loading) {
        this.loadingProgress = loading;
        this.pageView.updateProgressBar(this.loadingProgress);
    }
    set gameStatus(status) {
        this.status = status;
        if (this.status === 'Set Level') {
            this.pageView.hideDifficultySelection();
            this.pageView.hideGame();
            this.pageView.hideResults();
        }
        if (this.status === 'Select Level') {
            this.pageView.showLevelSelection();
            this.pageView.hideGame();
            this.pageView.hideProgressBar();
            this.pageView.hideResults();
        }
        if (this.status === 'Game') {
            this.pageView.hideDifficultySelection();
            this.pageView.showGame();
            this.pageView.hideProgressBar();
            this.pageView.hideResults();
        }
    }
    set Question(currentQuestion) {
        this.currentQuestion = currentQuestion;
        this.pageView.showQuestion(this.audioTests[this.currentQuestion].audioTestView);
    }
    playAgain() {
        for (let i = 0; i < this.audioTests.length; i += 1) {
            this.audioTests[i].isAnswered = null;
            this.audioTests[i].isCorrect = false;
            this.audioTests[i].options = this.audioTests[i].options.sort(() => 0.5 - Math.random());
            this.audioTests[i].renderAudioTestView();
        }
        this.audioTests = this.audioTests.sort(() => 0.5 - Math.random());
        this.Question = 0;
        this.gameStatus = 'Game';
    }
    nextQuestion() {
        this.currentQuestion += 1;
        if (this.currentQuestion === this.audioTests.length) {
            this.pageView.showGameResult(this.audioTests);
            this.pageView.hideGame();
        }
        else {
            this.pageView.showQuestion(this.audioTests[this.currentQuestion].audioTestView);
        }
    }
    closeResult() {
        // если авторизованы переходим на страницу учебника
        // this.audioTests = new Array<AudioQuestion>();
        this.wrongAnswers = 0;
        this.rigthAnswers = 0;
        this.pageView.hideResults();
        this.audioTests = new Array();
        //
    }
    // сформировать список вопросов и начать игру
    createQuiz(words, countQuestions) {
        if (words.length < 6) {
            this.gameStatus = 'Select Level';
        }
        else {
            const tests = new Array();
            const count = words.length < countQuestions ? words.length : countQuestions;
            let id = 0;
            while (tests.length < count) {
                const correctAnswer = words[Math.floor(Math.random() * words.length)];
                let options = new Array();
                options.push(correctAnswer);
                while (options.length < 6) {
                    const word = words[Math.floor(Math.random() * words.length)];
                    options.push(word);
                    options = options.filter((item, index, arr) => arr.indexOf(item) === index);
                }
                options = options.sort(() => 0.5 - Math.random());
                const test = new _audio_question_component__WEBPACK_IMPORTED_MODULE_0__["default"](options, correctAnswer, id);
                test.renderAudioTestView();
                id += 1;
                tests.push(test);
            }
            this.audioTests = tests;
            this.Question = 0;
            this.gameStatus = 'Game';
        }
    }
    handleAnswer(answer) {
        const audioTest = this.audioTests[this.currentQuestion];
        if (!audioTest.isAnswered) {
            const result = audioTest.correctAnswer.wordTranslate === answer;
            audioTest.isCorrect = result;
            this.pageView.renderAnswerResult(result, answer, audioTest.correctAnswer);
        }
        audioTest.isAnswered = 'Yes';
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioModel);


/***/ }),

/***/ "./src/pages/audio-call-page/audio-question-component.ts":
/*!***************************************************************!*\
  !*** ./src/pages/audio-call-page/audio-question-component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");

class AudioQuestion {
    constructor(options, correctAnswer, id) {
        this.isCorrect = false;
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.audioTestView = document.createElement('div');
        this.isAnswered = null;
        this.options = options;
        this.id = id;
        this.correctAnswer = correctAnswer;
        this.answerView = this.renderAnswerView(correctAnswer);
        this.renderAudioTestView();
    }
    renderAnswerView(correctAnswer) {
        const divAnswer = document.createElement('div');
        const divaudio = document.createElement('div');
        divaudio.className = 'audio-icon';
        divaudio.setAttribute('audio', `${this.api.baseUrl}/${correctAnswer.audio}`);
        const audio = document.createElement('audio');
        audio.src = `${this.api.baseUrl}/${correctAnswer.audio}`;
        divaudio.appendChild(audio);
        this.audioAnswer = divaudio;
        return divAnswer;
    }
    renderAudioTestView() {
        const divQuizContainer = document.createElement('div');
        divQuizContainer.className = 'div-quiz-container';
        divQuizContainer.id = this.id.toString();
        // const label = document.createElement('label');
        const divPlay = this.audioAnswer;
        const quesionContainer = document.createElement('div');
        quesionContainer.className = 'quesion-container';
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Пропустить (Space)';
        nextButton.id = 'next-question-button';
        nextButton.className = 'next-question-button';
        quesionContainer.appendChild(divPlay);
        divQuizContainer.appendChild(quesionContainer);
        for (let i = 0; i < this.options.length; i += 1) {
            const button = document.createElement('button');
            button.className = 'game-button option';
            // button.textContent = this.options[i].wordTranslate;
            const divOptiongrid = document.createElement('div');
            divOptiongrid.className = 'div-option-grid';
            const spanNumber = document.createElement('span');
            spanNumber.textContent = (i + 1).toString();
            const spanValue = document.createElement('span');
            spanValue.className = 'span-value';
            spanValue.textContent = this.options[i].wordTranslate;
            divOptiongrid.append(spanNumber, spanValue);
            button.appendChild(divOptiongrid);
            quesionContainer.append(button);
        }
        quesionContainer.appendChild(nextButton);
        this.audioTestView = divQuizContainer;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioQuestion);


/***/ }),

/***/ "./src/pages/audio-call-page/audio-view.ts":
/*!*************************************************!*\
  !*** ./src/pages/audio-call-page/audio-view.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _audio_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio.css */ "./src/pages/audio-call-page/audio.css");
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.css */ "./src/pages/audio-call-page/modal.css");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");
/* harmony import */ var _modal_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-content */ "./src/pages/audio-call-page/modal-content.ts");




class AudioView {
    constructor() {
        this.focusIndex = 0;
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.renderView();
    }
    renderView() {
        const div = document.createElement('div');
        div.className = 'audio-call-container';
        const buttonNewGame = document.createElement('button');
        buttonNewGame.innerText = 'Новая игра (N)';
        buttonNewGame.id = 'new-game';
        buttonNewGame.className = 'new-game-button';
        const divButtonsContainer = document.createElement('div');
        divButtonsContainer.className = 'buttons-container';
        div.appendChild(buttonNewGame);
        for (let i = 1; i < 8; i += 1) {
            const button = document.createElement('button');
            button.className = `game-button l${i}`;
            button.value = (i - 1).toString();
            button.innerText = `Уровень ${i}`;
            divButtonsContainer.appendChild(button);
        }
        const levelSelectLabel = document.createElement('label');
        levelSelectLabel.innerText = 'Выберите уровень сложности';
        const divDifficulty = document.createElement('div');
        divDifficulty.className = 'dif-container hidden';
        divDifficulty.append(levelSelectLabel, divButtonsContainer);
        const progressBar = document.createElement('div');
        // progressBar.innerHTML = '<div id="loading"  class="loading"></div>';
        const innerdiv = document.createElement('div');
        innerdiv.className = 'loading';
        progressBar.className = 'game-progress-bar hidden';
        progressBar.id = 'audio-progress-bar';
        progressBar.appendChild(innerdiv);
        const gameContainer = document.createElement('div');
        const statusContainer = document.createElement('div');
        const modal = document.createElement('div');
        modal.className = 'game-result hidden';
        modal.innerHTML = _modal_content__WEBPACK_IMPORTED_MODULE_3__.modalHtml;
        gameContainer.className = 'game-container';
        gameContainer.append(divDifficulty, progressBar, statusContainer);
        // gameContainer.appendChild(progressBar);
        // gameContainer.appendChild(statusContainer);
        div.appendChild(gameContainer);
        div.appendChild(modal);
        this.view = div;
    }
    showGameResult(audioTests) {
        var _a;
        (_a = this.view.querySelector('.game-result')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
        const correctdiv = document.querySelector('.answer-container-correct');
        const wrongDiv = document.querySelector('.answer-container-wrong');
        correctdiv.innerHTML = '';
        wrongDiv.innerHTML = '';
        const corrects = audioTests.filter((p) => p.isCorrect);
        const wrongs = audioTests.filter((p) => !p.isCorrect);
        for (let i = 0; i < wrongs.length; i += 1) {
            const divResult = document.createElement('div');
            const divaudioresult = document.createElement('div');
            divaudioresult.className = 'audio-icon';
            const audioresult = document.createElement('audio');
            audioresult.src = `${this.api.baseUrl}/${wrongs[i].correctAnswer.audio}`;
            divaudioresult.appendChild(audioresult);
            const word = document.createElement('span');
            const wordTranslation = document.createElement('span');
            const dash = document.createElement('span');
            dash.innerText = '—';
            word.innerText = wrongs[i].correctAnswer.word;
            wordTranslation.innerText = wrongs[i].correctAnswer.wordTranslate;
            divResult.append(divaudioresult, word, dash, wordTranslation);
            wrongDiv.appendChild(divResult);
        }
        for (let i = 0; i < corrects.length; i += 1) {
            const divResult = document.createElement('div');
            const divaudioresult = document.createElement('div');
            divaudioresult.className = 'audio-icon';
            const audioresult = document.createElement('audio');
            audioresult.src = `${this.api.baseUrl}/${corrects[i].correctAnswer.audio}`;
            divaudioresult.appendChild(audioresult);
            const word = document.createElement('span');
            const wordTranslation = document.createElement('span');
            const dash = document.createElement('span');
            dash.innerText = '—';
            word.innerText = corrects[i].correctAnswer.word;
            wordTranslation.innerText = corrects[i].correctAnswer.wordTranslate;
            divResult.append(divaudioresult, word, dash, wordTranslation);
            correctdiv.appendChild(divResult);
        }
        this.view.querySelector('.game-span-wrong').innerText = `Неверные ответы (${wrongs.length}) : `;
        this.view.querySelector('.game-span-correct').innerText = `Верные ответы (${corrects.length}) :`;
    }
    // renderResultWindow(): HTMLDivElement {
    // }
    showLevelSelection() {
        this.view.querySelector('.dif-container').classList.remove('hidden');
    }
    showQuestion(audioTestView) {
        const qustionContainer = this.view.querySelector('.div-quiz-container');
        if (qustionContainer) {
            qustionContainer.innerHTML = audioTestView.innerHTML;
        }
        else {
            this.view.appendChild(audioTestView);
        }
        const divPlay = document.querySelector('.audio-icon');
        const audio = divPlay === null || divPlay === void 0 ? void 0 : divPlay.firstChild;
        audio.play();
    }
    showDifficultySelection() {
        var _a;
        (_a = this.view.querySelector('.dif-container')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    hideDifficultySelection() {
        var _a;
        (_a = this.view.querySelector('.dif-container')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    }
    showGame() {
        var _a;
        (_a = this.view.querySelector('.div-quiz-container')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    hideGame() {
        var _a;
        (_a = this.view.querySelector('.div-quiz-container')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    }
    hideProgressBar() {
        var _a;
        (_a = this.view.querySelector('.game-progress-bar')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    }
    showProgressBar() {
        var _a;
        (_a = this.view.querySelector('.game-progress-bar')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    showResults() {
        var _a;
        (_a = this.view.querySelector('.game-result')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    }
    hideResults() {
        var _a;
        (_a = this.view.querySelector('.game-result')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        const correctdiv = document.querySelector('.answer-container-correct');
        const wrongDiv = document.querySelector('.answer-container-wrong');
        correctdiv.innerHTML = '';
        wrongDiv.innerHTML = '';
    }
    updateProgressBar(loading) {
        const div = this.view.querySelector('.loading');
        div.style.width = `${loading}%`;
    }
    renderAnswerResult(result, answer, correctAnswer) {
        const options = this.view.querySelectorAll('.option');
        if (result) {
            const audio = new Audio('../../assets/answer-correct.wav');
            audio.play();
        }
        else {
            const audio = new Audio('../../assets/answer-wrong.wav');
            audio.play();
        }
        for (let i = 0; i < options.length; i += 1) {
            const button = options[i];
            const text = button.querySelector('.span-value').innerText;
            if (text === correctAnswer.wordTranslate) {
                button.classList.add('correct');
            }
            if (!result) {
                if (text === answer) {
                    button.classList.add('wrong');
                }
            }
        }
        const nextButton = this.view.querySelector('#next-question-button');
        nextButton.innerText = 'Далее (Space)';
    }
    handleNavKeys(pressedKey) {
        var _a, _b;
        this.handleKeysLevel(pressedKey);
        const buttons = this.view.querySelectorAll('button');
        const i = buttons.length;
        if (pressedKey === 'ArrowRight' || pressedKey === 'ArrowDown') {
            const focusedbutton = document.activeElement;
            const name = focusedbutton.tagName;
            if (name !== 'BUTTON') {
                buttons[0].focus();
            }
            else {
                this.focusIndex = this.focusIndex === i - 1 ? this.focusIndex : (this.focusIndex += 1);
                const dif = (_a = this.view.querySelector('.game-container')) === null || _a === void 0 ? void 0 : _a.firstChild;
                if ((dif === null || dif === void 0 ? void 0 : dif.className) === 'dif-container hidden') {
                    while (buttons[this.focusIndex - 1].className.includes('game-button l')) {
                        this.focusIndex += 1;
                    }
                }
                buttons[this.focusIndex].focus();
            }
        }
        if (pressedKey === 'ArrowLeft' || pressedKey === 'ArrowUp') {
            const focusedbutton = document.activeElement;
            const name = focusedbutton.tagName;
            if (name !== 'BUTTON') {
                buttons[0].focus();
            }
            else {
                this.focusIndex = this.focusIndex === 0 ? (this.focusIndex = 0) : (this.focusIndex -= 1);
                const dif = (_b = this.view.querySelector('.game-container')) === null || _b === void 0 ? void 0 : _b.firstChild;
                if ((dif === null || dif === void 0 ? void 0 : dif.className) === 'dif-container hidden') {
                    while (buttons[this.focusIndex].className.includes('game-button l')) {
                        this.focusIndex -= 1;
                    }
                }
                buttons[this.focusIndex].focus();
                buttons[this.focusIndex].focus();
            }
        }
        if (pressedKey === 'Enter') {
            const focusedbutton = document.activeElement;
            const name = focusedbutton.tagName;
            if (name === 'button') {
                focusedbutton.click();
            }
        }
    }
    handleKeysLevel(pressedKey) {
        const key = pressedKey.toLowerCase();
        if (key === 'n') {
            const newGame = this.view.querySelector('.new-game-button');
            newGame.click();
        }
        if (key === 'a') {
            const playGame = this.view.querySelector('.play-again-button');
            playGame.click();
        }
        if (Number(key) > 0 && Number(key) <= 7) {
            const diff = this.view.querySelector(`.l${key}`);
            diff.click();
        }
        document.body.focus();
    }
    handleKeysOption(pressedKey) {
        const key = pressedKey.toLowerCase();
        if (key === 'n') {
            const newGame = this.view.querySelector('.new-game-button');
            newGame.click();
        }
        if (key === 'a') {
            const playGame = this.view.querySelector('.play-again-button');
            playGame.click();
        }
        if (Number(key) > 0 && Number(key) < 7) {
            const diff = this.view.querySelectorAll('.option')[Number(key) - 1];
            diff.click();
        }
        if (key === ' ') {
            this.view.querySelector('.next-question-button').click();
        }
        document.body.focus();
    }
    handlePressKey(key) {
        if (['n', '1', '2', '3', '4', '5', '6', '7', 'a', ' '].find((p) => p === key)) {
            const dif = this.view.querySelector('.dif-container');
            if ((dif === null || dif === void 0 ? void 0 : dif.className) === 'dif-container') {
                this.handleKeysLevel(key);
            }
            else {
                this.handleKeysOption(key);
            }
            document.body.focus();
        }
        else {
            this.handleNavKeys(key);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioView);


/***/ }),

/***/ "./src/pages/audio-call-page/modal-content.ts":
/*!****************************************************!*\
  !*** ./src/pages/audio-call-page/modal-content.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "modalHtml": () => (/* binding */ modalHtml)
/* harmony export */ });
const modalHtml = `<div class="modal-content">
<span class="modal-close">&times;</span>  
<div class="div-result-flex">
<span>Результаты игры</Span>
 <span class="game-span-wrong">Неверные ответы:</span>
 <div class="answer-container-wrong"></div>
 <span class ="game-span-correct">Правильные ответы:</span>
 <div class="answer-container-correct"></div>
</div>    
<button id="play-again" class="play-again-button"> Играть еще раз (A) </button>
</div>`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalHtml);


/***/ }),

/***/ "./src/pages/auth-page/auth-controller.ts":
/*!************************************************!*\
  !*** ./src/pages/auth-page/auth-controller.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auth_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-view */ "./src/pages/auth-page/auth-view.ts");
/* harmony import */ var _auth_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-model */ "./src/pages/auth-page/auth-model.ts");
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../application-controller */ "./src/pages/application-controller.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable import/no-cycle */




class AuthController extends _application_controller__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
        this.setView();
    }
    setView() {
        this.authModel = new _auth_model__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.pageView = new _auth_view__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.addListeners();
    }
    /* eslint-disable no-alert */
    signInUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.authModel
                .signInUser(user)
                .then((result) => {
                if (result.ok) {
                    return result.json();
                }
                return `${result.status} ${result.statusText}`;
            })
                .then((data) => _App__WEBPACK_IMPORTED_MODULE_3__["default"].signIn(data));
        });
    }
    addListeners() {
        var _a;
        (_a = this.pageView.view
            .querySelector('.sign-in-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            var _b, _c;
            const email = ((_b = document.querySelector('.email-input')) === null || _b === void 0 ? void 0 : _b.value) || '';
            const password = ((_c = document.querySelector('.password-input')) === null || _c === void 0 ? void 0 : _c.value) || '';
            const user = { email, password };
            yield this.signInUser(user);
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthController);


/***/ }),

/***/ "./src/pages/auth-page/auth-model.ts":
/*!*******************************************!*\
  !*** ./src/pages/auth-page/auth-model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");

class AuthModel extends _Api__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthModel);


/***/ }),

/***/ "./src/pages/auth-page/auth-view.ts":
/*!******************************************!*\
  !*** ./src/pages/auth-page/auth-view.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
/* harmony import */ var _styles_authorisation_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/authorisation.css */ "./src/styles/authorisation.css");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _application_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../application-view */ "./src/pages/application-view.ts");
/* eslint-disable import/no-cycle */




class AuthView extends _application_view__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor() {
        super();
        this.renderAuthBlock();
    }
    renderAuthBlock() {
        this.view = document.createElement('div');
        this.view.classList.add('authorisation');
        const title = document.createElement('p');
        title.classList.add('auth-title');
        title.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.signInTitle;
        const emailInput = document.createElement('input');
        emailInput.classList.add('email-input');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('placeholder', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.email);
        emailInput.setAttribute('autocomplete', 'on');
        const passwordInput = document.createElement('input');
        passwordInput.classList.add('password-input');
        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('placeholder', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.password);
        passwordInput.setAttribute('autocomplete', 'on');
        const signInButton = document.createElement('button');
        signInButton.classList.add('sign-in-button');
        signInButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.upperSignInButtonText;
        const haveNotYetAccount = document.createElement('div');
        haveNotYetAccount.classList.add('have-not-yet-account');
        const haveNotYetAccountSpan = document.createElement('span');
        haveNotYetAccountSpan.classList.add('have-not-yet-account-span');
        haveNotYetAccountSpan.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.haveNotYetAccountText;
        const haveNotYetAccountButton = document.createElement('button');
        haveNotYetAccountButton.classList.add('have-not-yet-account-button');
        haveNotYetAccountButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.signUpButtonText;
        haveNotYetAccountButton.addEventListener('click', _App__WEBPACK_IMPORTED_MODULE_0__["default"].renderRegPage);
        haveNotYetAccount.append(haveNotYetAccountSpan, haveNotYetAccountButton);
        this.view.append(title, emailInput, passwordInput, signInButton, haveNotYetAccount);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthView);


/***/ }),

/***/ "./src/pages/book-page/book-controller.ts":
/*!************************************************!*\
  !*** ./src/pages/book-page/book-controller.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_cards_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/cards.css */ "./src/styles/cards.css");
/* harmony import */ var _styles_level_buttons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/level-buttons.css */ "./src/styles/level-buttons.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_pagination_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/pagination.css */ "./src/styles/pagination.css");
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../application-controller */ "./src/pages/application-controller.ts");
/* harmony import */ var _book_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-view */ "./src/pages/book-page/book-view.ts");
/* harmony import */ var _card_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-view */ "./src/pages/book-page/card-view.ts");
/* harmony import */ var _book_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-model */ "./src/pages/book-page/book-model.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../functions/functions */ "./src/functions/functions.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






// eslint-disable-next-line import/no-cycle




class BookController extends _application_controller__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor() {
        super();
        this.pageView = new _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView();
        this.bookModel = new _book_model__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this.currentLevel = 0;
        this.currentPage = 0;
        if ((0,_functions_functions__WEBPACK_IMPORTED_MODULE_9__.getDataFromLocalStorage)('pageInfo')) {
            this.getPageInfoFromLocalStorage();
        }
        this.setView();
        (0,_functions_functions__WEBPACK_IMPORTED_MODULE_9__.saveDataToLocalStorage)('pageInfo', JSON.stringify({
            pageName: 'bookPage',
            level: this.currentLevel,
            pageNumber: this.currentPage,
        }));
    }
    setView() {
        this.pageView = new _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView();
        this.view = this.pageView.view;
        this.levels = this.pageView.levels;
        this.cardsList = this.pageView.cardsList;
        this.pagination = this.pageView.pagination;
        this.gameButtons = this.pageView.gameButtons;
        this.renderLevelsBtns();
        this.renderCards(this.currentLevel, this.currentPage);
        this.renderPaginationBlock(this.currentPage);
        this.renderGameButtons();
    }
    renderCards(group, page) {
        return __awaiter(this, void 0, void 0, function* () {
            this.cardsList.innerHTML = '';
            const words = yield this.bookModel.getWords(group, page);
            words.forEach((wordInfo) => {
                const card = new _card_view__WEBPACK_IMPORTED_MODULE_6__["default"](wordInfo);
                this.cardsList.append(card.view);
                card.view.addEventListener('click', BookController.setEventListenersForCard);
            });
        });
    }
    renderLevelsBtns() {
        for (let i = 1; i <= _utils_constants__WEBPACK_IMPORTED_MODULE_8__.numberOfLevels; i += 1) {
            const btn = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('div', 'level');
            btn.classList.add(`level-${i}`);
            btn.dataset.level = `${i}`;
            if (i === this.currentLevel + 1) {
                btn.classList.add('active');
            }
            if (i === _utils_constants__WEBPACK_IMPORTED_MODULE_8__.numberOfLevels) {
                btn.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_8__.btnHardText;
            }
            else {
                btn.innerHTML = _utils_constants__WEBPACK_IMPORTED_MODULE_8__.btnLevelText;
                const levelNumber = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('span', 'level_number');
                levelNumber.innerHTML = `&nbsp${i}`;
                btn.append(levelNumber);
            }
            btn.addEventListener('click', (e) => this.levelBtnHandler(e));
            this.levels.append(btn);
        }
    }
    levelBtnHandler(e) {
        if (e.target) {
            const levelButtons = document.querySelectorAll('.level');
            levelButtons.forEach((button) => {
                button.classList.remove('active');
            });
            e.target.classList.add('active');
            const group = Number(e.target.dataset.level) - 1;
            this.currentLevel = group;
            this.currentPage = 0;
            this.cardsList.innerHTML = '';
            this.renderCards(group, this.currentPage);
            this.renderPaginationBlock(group);
        }
        (0,_functions_functions__WEBPACK_IMPORTED_MODULE_9__.saveDataToLocalStorage)('pageInfo', JSON.stringify({
            pageName: 'bookPage',
            level: this.currentLevel,
            pageNumber: this.currentPage,
        }));
    }
    static setEventListenersForCard(e) {
        var _a;
        const eTargetClassList = e.target.classList;
        // if (eTargetClassList.contains('hard__btn')) {}
        // if (eTargetClassList.contains('done__btn')) {}
        if (eTargetClassList.contains('audio-icon')) {
            (0,_functions_functions__WEBPACK_IMPORTED_MODULE_9__.disableAudioBtns)();
            const cardId = (_a = e.target.closest('.card')) === null || _a === void 0 ? void 0 : _a.id;
            if (cardId) {
                BookController.playAudio(cardId);
            }
        }
    }
    static playAudio(cardId) {
        var _a;
        const tracks = (_a = document.getElementById(`${cardId}`)) === null || _a === void 0 ? void 0 : _a.querySelectorAll('audio');
        if (tracks) {
            try {
                tracks[0].play();
                for (let i = 0; i < tracks.length; i += 1) {
                    if (i === tracks.length - 1) {
                        tracks[tracks.length - 1].onended = () => {
                            (0,_functions_functions__WEBPACK_IMPORTED_MODULE_9__.enableAudioBtns)();
                        };
                        break;
                    }
                    else {
                        tracks[i].onended = () => {
                            tracks[i + 1].play();
                        };
                    }
                }
            }
            catch (_b) {
                throw Error('Воспроизведение отклонено.');
            }
        }
    }
    renderPaginationBlock(group) {
        return __awaiter(this, void 0, void 0, function* () {
            this.pagination.innerHTML = '';
            for (let i = 0; i < _utils_constants__WEBPACK_IMPORTED_MODULE_8__.numberOfPagesInLevel; i += 1) {
                const page = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('p', 'pagination-element');
                if (i === this.currentPage) {
                    page.classList.add('active');
                }
                page.innerText = `${i + 1}`;
                page.addEventListener('click', (e) => this.pageBtnHandler(e, group, i));
                this.pagination.append(page);
            }
        });
    }
    pageBtnHandler(e, group, page) {
        this.currentPage = page;
        this.renderCards(group, page);
        const pageItems = document.querySelectorAll('.pagination-element');
        pageItems.forEach((item) => {
            item.classList.remove('active');
        });
        e.target.classList.add('active');
        (0,_functions_functions__WEBPACK_IMPORTED_MODULE_9__.saveDataToLocalStorage)('pageInfo', JSON.stringify({
            pageName: 'bookPage',
            level: this.currentLevel,
            pageNumber: this.currentPage,
        }));
    }
    renderGameButtons() {
        const sprintGameLink = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('div', 'btn');
        sprintGameLink.classList.add('btn_colored');
        sprintGameLink.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_8__.sprintGameName;
        const iconSprint = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('img', 'game-icon');
        iconSprint.setAttribute('src', _utils_constants__WEBPACK_IMPORTED_MODULE_8__.iconSprintSrc);
        sprintGameLink.prepend(iconSprint);
        const audioGameLink = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('div', 'btn');
        audioGameLink.classList.add('btn_colored');
        audioGameLink.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_8__.audioGameName;
        const iconAudioGame = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('img', 'game-icon');
        iconAudioGame.setAttribute('src', _utils_constants__WEBPACK_IMPORTED_MODULE_8__.iconAudioGameSrc);
        audioGameLink.prepend(iconAudioGame);
        const extraGameLink = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('div', 'btn');
        extraGameLink.classList.add('btn_colored');
        extraGameLink.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_8__.extraGameName;
        const iconExtraGame = _book_view__WEBPACK_IMPORTED_MODULE_5__.BookPageView.createElementByParams('img', 'game-icon');
        iconExtraGame.setAttribute('src', _utils_constants__WEBPACK_IMPORTED_MODULE_8__.iconExtraGameSrc);
        extraGameLink.prepend(iconExtraGame);
        this.gameButtons.append(extraGameLink, audioGameLink, sprintGameLink);
    }
    getPageInfoFromLocalStorage() {
        const pageInfo = (0,_functions_functions__WEBPACK_IMPORTED_MODULE_9__.getDataFromLocalStorage)('pageInfo');
        const { level, pageNumber } = pageInfo;
        if (typeof level === 'number' && typeof pageNumber === 'number') {
            this.currentLevel = level;
            this.currentPage = pageNumber;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookController);


/***/ }),

/***/ "./src/pages/book-page/book-model.ts":
/*!*******************************************!*\
  !*** ./src/pages/book-page/book-model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");

class BookModel extends _Api__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookModel);


/***/ }),

/***/ "./src/pages/book-page/book-view.ts":
/*!******************************************!*\
  !*** ./src/pages/book-page/book-view.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookPageView": () => (/* binding */ BookPageView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _application_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-view */ "./src/pages/application-view.ts");

class BookPageView extends _application_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.view = document.createElement('div');
        this.levels = BookPageView.createElementByParams('div', 'levels');
        this.cardsList = BookPageView.createElementByParams('div', 'cards_list');
        this.pagination = BookPageView.createElementByParams('div', 'pagination');
        this.gameButtons = BookPageView.createElementByParams('div', 'game__buttons');
        this.view.append(this.levels, this.cardsList, this.pagination, this.gameButtons);
        this.body = document.querySelector('body');
        this.main = document.querySelector('.main');
        this.mainWrapper = document.querySelector('.main_wrapper');
        this.mainWrapper.style.backgroundColor = '#ffffff';
        this.footer = document.querySelector('footer');
        this.footer.classList.add('secondary');
    }
    static createElementByParams(tag, className) {
        const element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookPageView);


/***/ }),

/***/ "./src/pages/book-page/card-view.ts":
/*!******************************************!*\
  !*** ./src/pages/book-page/card-view.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App */ "./src/App.ts");

// eslint-disable-next-line import/no-cycle

class CardView {
    constructor(wordInfo) {
        this.baseUrl = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl;
        this.view = document.createElement('div');
        this.view.classList.add('card');
        this.view.id = wordInfo.id;
        this.loadingProgress = 20;
        this.createCard(wordInfo);
    }
    set loadingStatus(loading) {
        this.loadingProgress = loading;
        this.updateProgressBar(this.loadingProgress);
    }
    createCard(wordInfo) {
        const wordImg = document.createElement('img');
        wordImg.setAttribute('src', `${this.baseUrl}/${wordInfo.image}`);
        wordImg.setAttribute('alt', 'card photo');
        wordImg.classList.add('card__img');
        const statFrame = document.createElement('div');
        statFrame.classList.add('card__stat');
        statFrame.innerHTML = '<span>3</span> | 17';
        const cardText = document.createElement('div');
        cardText.classList.add('card__text');
        const wordBlock = this.createWordBlock(wordInfo);
        const cardButtons = this.createCardButtons();
        const progressBar = this.createWordProgressBar();
        if (!_App__WEBPACK_IMPORTED_MODULE_1__["default"].user) {
            progressBar.style.display = 'none';
            statFrame.style.display = 'none';
            cardButtons.style.display = 'none';
        }
        const phrasesBlock = this.createPhrasesBlock(wordInfo);
        cardText.append(wordBlock, cardButtons, phrasesBlock);
        this.view.append(wordImg, statFrame, progressBar, cardText);
    }
    createWordBlock(wordInfo) {
        const wordBlock = document.createElement('div');
        wordBlock.classList.add('word');
        const wordText = document.createElement('p');
        const word = document.createElement('span');
        word.classList.add('word__english');
        word.innerText = `${wordInfo.word} `;
        const wordTranscription = document.createElement('span');
        wordTranscription.classList.add('word__transcription');
        wordTranscription.innerText = wordInfo.transcription;
        const breakItem = document.createElement('br');
        const wordTranslation = document.createElement('span');
        wordTranslation.innerText = wordInfo.wordTranslate;
        wordTranslation.classList.add('word__translation');
        wordText.append(word, wordTranscription, breakItem, wordTranslation);
        const audioIcon = this.createAudioBlock(wordInfo);
        wordBlock.append(wordText, audioIcon);
        return wordBlock;
    }
    /* eslint-disable class-methods-use-this */
    createWordProgressBar() {
        const progressBar = document.createElement('div');
        const innerdiv = document.createElement('div');
        innerdiv.className = 'progress-loading';
        progressBar.className = 'card__progress-bar';
        progressBar.id = 'card__progress-bar';
        progressBar.appendChild(innerdiv);
        return progressBar;
    }
    updateProgressBar(loading) {
        const div = this.view.querySelector('.progress-loading');
        div.style.width = `${loading}%`;
    }
    /* eslint-disable class-methods-use-this */
    createCardButtons() {
        const cardButtons = document.createElement('div');
        cardButtons.classList.add('card__buttons');
        const hardButton = document.createElement('button');
        hardButton.classList.add('btn', 'card__btn', 'hard__btn');
        hardButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.hardButtonText;
        hardButton.addEventListener('click', this.hardBtnHandler);
        const doneButton = document.createElement('button');
        doneButton.classList.add('btn', 'card__btn', 'done__btn');
        doneButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.doneButtonText;
        doneButton.addEventListener('click', this.doneBtnHandler);
        cardButtons.append(hardButton, doneButton);
        return cardButtons;
    }
    hardBtnHandler(e) {
        var _a;
        if (e) {
            const card = e.target.closest('.card');
            const hardButton = e.target;
            const doneButton = hardButton.nextSibling;
            switch ((_a = hardButton.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) {
                case 'сложное':
                    card === null || card === void 0 ? void 0 : card.classList.remove('done');
                    card === null || card === void 0 ? void 0 : card.classList.add('hard');
                    hardButton.innerText = 'несложное';
                    doneButton.innerText = 'изучено';
                    break;
                case 'несложное':
                    card === null || card === void 0 ? void 0 : card.classList.remove('hard');
                    hardButton.innerText = 'сложное';
                    doneButton.innerText = 'изучено';
                    break;
                default:
                    break;
            }
        }
    }
    doneBtnHandler(e) {
        var _a;
        if (e) {
            const card = e.target.closest('.card');
            const doneButton = e.target;
            const hardButton = doneButton.previousSibling;
            switch ((_a = doneButton.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) {
                case 'изучено':
                    card === null || card === void 0 ? void 0 : card.classList.remove('hard');
                    card === null || card === void 0 ? void 0 : card.classList.add('done');
                    doneButton.innerText = 'поучить';
                    hardButton.innerText = 'сложное';
                    break;
                case 'поучить':
                    card === null || card === void 0 ? void 0 : card.classList.remove('done');
                    doneButton.innerText = 'изучено';
                    hardButton.innerText = 'сложное';
                    break;
                default:
                    break;
            }
        }
    }
    createPhrasesBlock(wordInfo) {
        const phrasesBlock = document.createElement('div');
        phrasesBlock.classList.add('phrases');
        const phraseDefinition = document.createElement('div');
        phraseDefinition.classList.add('phrase__definition');
        const phraseDefinitionEnglish = document.createElement('p');
        phraseDefinitionEnglish.classList.add('phrase__definition_english');
        phraseDefinitionEnglish.innerHTML = wordInfo.textMeaning;
        const phraseDefinitionRussian = document.createElement('p');
        phraseDefinitionRussian.classList.add('phrase__definition_russian');
        phraseDefinitionRussian.innerHTML = wordInfo.textMeaningTranslate;
        phraseDefinition.append(phraseDefinitionEnglish, phraseDefinitionRussian);
        const phraseExample = document.createElement('div');
        phraseExample.classList.add('phrase__example');
        const phraseExampleEnglish = document.createElement('p');
        phraseExampleEnglish.classList.add('phrase__example_english');
        phraseExampleEnglish.innerHTML = wordInfo.textExample;
        const phraseExampleRussian = document.createElement('p');
        phraseExampleRussian.classList.add('phrase__example_russian');
        phraseExampleRussian.innerHTML = wordInfo.textExampleTranslate;
        phraseExample.append(phraseExampleEnglish, phraseExampleRussian);
        phrasesBlock.append(phraseDefinition, phraseExample);
        return phrasesBlock;
    }
    /* eslint-enable class-methods-use-this */
    createAudioBlock(wordInfo) {
        const audioIcon = document.createElement('div');
        audioIcon.classList.add('audio-icon');
        const audio = document.createElement('audio');
        audio.setAttribute('src', `${this.baseUrl}/${wordInfo.audio}`);
        const audioMeaning = document.createElement('audio');
        audioMeaning.setAttribute('src', `${this.baseUrl}/${wordInfo.audioMeaning}`);
        const audioExample = document.createElement('audio');
        audioExample.setAttribute('src', `${this.baseUrl}/${wordInfo.audioExample}`);
        audioIcon.append(audio, audioMeaning, audioExample);
        return audioIcon;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardView);


/***/ }),

/***/ "./src/pages/main-page/main-page-controler.ts":
/*!****************************************************!*\
  !*** ./src/pages/main-page/main-page-controler.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-controller */ "./src/pages/application-controller.ts");
/* harmony import */ var _main_page_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page-view */ "./src/pages/main-page/main-page-view.ts");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");



class MainPageController extends _application_controller__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.setView();
    }
    setView() {
        this.api = new _Api__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.pageView = new _main_page_view__WEBPACK_IMPORTED_MODULE_1__["default"]();
        // this.addListeners();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPageController);


/***/ }),

/***/ "./src/pages/main-page/main-page-view.ts":
/*!***********************************************!*\
  !*** ./src/pages/main-page/main-page-view.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _application_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-view */ "./src/pages/application-view.ts");
/* harmony import */ var _styles_main_page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/main-page.css */ "./src/styles/main-page.css");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");


/* prettier-ignore */

/* prettier-ignore */
class MainPageView extends _application_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.renderMainPage();
    }
    renderMainPage() {
        this.view = document.createElement('div');
        this.view.classList.add('main-page');
        const title = document.createElement('h1');
        title.classList.add('main-page__title');
        title.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.rsLang;
        const introText = document.createElement('div');
        introText.classList.add('main-page__text');
        const text1 = document.createElement('p');
        text1.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.mainPageText;
        const text2 = document.createElement('p');
        text2.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.mainPageText;
        introText.append(text1, text2);
        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
        const learnButton = document.createElement('button');
        learnButton.classList.add('btn_intro', 'btn', 'btn_colored');
        learnButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.learnButtonText;
        const playButton = document.createElement('button');
        playButton.classList.add('btn_intro', 'btn', 'btn_bordered');
        playButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.playButtonText;
        buttons.append(learnButton, playButton);
        this.view.append(title, introText, buttons);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPageView);


/***/ }),

/***/ "./src/pages/registration-page/registration-controller.ts":
/*!****************************************************************!*\
  !*** ./src/pages/registration-page/registration-controller.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/functions */ "./src/functions/functions.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../application-controller */ "./src/pages/application-controller.ts");
/* harmony import */ var _registration_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-model */ "./src/pages/registration-page/registration-model.ts");
/* harmony import */ var _registration_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-view */ "./src/pages/registration-page/registration-view.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/* eslint-disable import/no-cycle */


class RegistrationController extends _application_controller__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
        this.setView();
    }
    setView() {
        this.regModel = new _registration_model__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.pageView = new _registration_view__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.addListeners();
    }
    signUpUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.regModel
                .createUser(user)
                .then((result) => {
                if (result.ok) {
                    return result.json();
                }
                return `${result.status} ${result.statusText}`;
            })
                .then((data) => __awaiter(this, void 0, void 0, function* () {
                if (typeof data === 'object') {
                    yield this.regModel
                        .signInUser(user)
                        .then((result) => {
                        if (result.ok) {
                            return result.json();
                        }
                        return `${result.status} ${result.statusText}`;
                    })
                        .then((userData) => _App__WEBPACK_IMPORTED_MODULE_5__["default"].signIn(userData));
                }
            }));
        });
    }
    /* eslint-disable no-alert */
    addListeners() {
        var _a;
        (_a = this.pageView.view
            .querySelector('.sign-up-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            var _b, _c, _d;
            const name = ((_b = document.querySelector('.name-input')) === null || _b === void 0 ? void 0 : _b.value) || '';
            const email = ((_c = document.querySelector('.email-input')) === null || _c === void 0 ? void 0 : _c.value) || '';
            if (!(0,_functions_functions__WEBPACK_IMPORTED_MODULE_0__.isValidEmail)(email)) {
                alert(`${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.invalidEmail} ${email}`);
                return;
            }
            const password = ((_d = document.querySelector('.password-input')) === null || _d === void 0 ? void 0 : _d.value) || '';
            if (!(0,_functions_functions__WEBPACK_IMPORTED_MODULE_0__.isValidPassword)(password)) {
                alert(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.invalidPassword);
                return;
            }
            const user = { name, email, password };
            yield this.signUpUser(user);
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationController);


/***/ }),

/***/ "./src/pages/registration-page/registration-model.ts":
/*!***********************************************************!*\
  !*** ./src/pages/registration-page/registration-model.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api */ "./src/Api.ts");

class RegModel extends _Api__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegModel);


/***/ }),

/***/ "./src/pages/registration-page/registration-view.ts":
/*!**********************************************************!*\
  !*** ./src/pages/registration-page/registration-view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_authorisation_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/authorisation.css */ "./src/styles/authorisation.css");
/* harmony import */ var _application_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../application-view */ "./src/pages/application-view.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../App */ "./src/App.ts");



/* eslint-disable import/no-cycle */

class RegistrationView extends _application_view__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super();
        this.renderRegBlock();
    }
    renderRegBlock() {
        this.view = document.createElement('div');
        this.view.classList.add('registration');
        const title = document.createElement('p');
        title.classList.add('reg-title');
        title.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.signUpTitle;
        const nameInput = document.createElement('input');
        nameInput.classList.add('name-input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('placeholder', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.name);
        nameInput.setAttribute('autocomplete', 'off');
        const emailInput = document.createElement('input');
        emailInput.classList.add('email-input');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('placeholder', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.email);
        emailInput.setAttribute('autocomplete', 'off');
        const passwordInput = document.createElement('input');
        passwordInput.classList.add('password-input');
        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('placeholder', _utils_constants__WEBPACK_IMPORTED_MODULE_2__.password);
        passwordInput.setAttribute('autocomplete', 'off');
        const signUpButton = document.createElement('button');
        signUpButton.classList.add('sign-up-button');
        signUpButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.upperSignUpButtonText;
        const haveAccount = document.createElement('div');
        haveAccount.classList.add('have-account');
        const haveAccountSpan = document.createElement('span');
        haveAccountSpan.classList.add('have-account-span');
        haveAccountSpan.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.haveAccountText;
        const haveAccountButton = document.createElement('button');
        haveAccountButton.classList.add('have-account-button');
        haveAccountButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.signInButtonText;
        haveAccountButton.addEventListener('click', _App__WEBPACK_IMPORTED_MODULE_3__["default"].renderAuthPage);
        haveAccount.append(haveAccountSpan, haveAccountButton);
        this.view.append(title, nameInput, emailInput, passwordInput, signUpButton, haveAccount);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationView);


/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audioGameName": () => (/* binding */ audioGameName),
/* harmony export */   "baseUrl": () => (/* binding */ baseUrl),
/* harmony export */   "btnHardText": () => (/* binding */ btnHardText),
/* harmony export */   "btnLevelText": () => (/* binding */ btnLevelText),
/* harmony export */   "doneButtonText": () => (/* binding */ doneButtonText),
/* harmony export */   "email": () => (/* binding */ email),
/* harmony export */   "extraGameName": () => (/* binding */ extraGameName),
/* harmony export */   "hardButtonText": () => (/* binding */ hardButtonText),
/* harmony export */   "haveAccountText": () => (/* binding */ haveAccountText),
/* harmony export */   "haveNotYetAccountText": () => (/* binding */ haveNotYetAccountText),
/* harmony export */   "iconAudioGameSrc": () => (/* binding */ iconAudioGameSrc),
/* harmony export */   "iconExtraGameSrc": () => (/* binding */ iconExtraGameSrc),
/* harmony export */   "iconSprintSrc": () => (/* binding */ iconSprintSrc),
/* harmony export */   "invalidEmail": () => (/* binding */ invalidEmail),
/* harmony export */   "invalidPassword": () => (/* binding */ invalidPassword),
/* harmony export */   "learnButtonText": () => (/* binding */ learnButtonText),
/* harmony export */   "logOutText": () => (/* binding */ logOutText),
/* harmony export */   "mainPageText": () => (/* binding */ mainPageText),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "numberOfLevels": () => (/* binding */ numberOfLevels),
/* harmony export */   "numberOfPagesInLevel": () => (/* binding */ numberOfPagesInLevel),
/* harmony export */   "password": () => (/* binding */ password),
/* harmony export */   "playButtonText": () => (/* binding */ playButtonText),
/* harmony export */   "rsLang": () => (/* binding */ rsLang),
/* harmony export */   "signInButtonText": () => (/* binding */ signInButtonText),
/* harmony export */   "signInTitle": () => (/* binding */ signInTitle),
/* harmony export */   "signUpButtonText": () => (/* binding */ signUpButtonText),
/* harmony export */   "signUpTitle": () => (/* binding */ signUpTitle),
/* harmony export */   "sprintGameName": () => (/* binding */ sprintGameName),
/* harmony export */   "upperSignInButtonText": () => (/* binding */ upperSignInButtonText),
/* harmony export */   "upperSignUpButtonText": () => (/* binding */ upperSignUpButtonText)
/* harmony export */ });
const baseUrl = 'https://rs-lang-team112.herokuapp.com';
const signInButtonText = 'Войти';
const upperSignInButtonText = 'ВОЙТИ';
const logOutText = 'Выйти';
const signInTitle = 'Следи за статистикой в своем аккаунте';
const signUpTitle = 'Создай свой аккаунт';
const signUpButtonText = 'Зарегистрироваться';
const upperSignUpButtonText = 'ЗАРЕГИСТРИРОВАТЬСЯ';
const name = 'Имя';
const email = 'Почта';
const password = 'Пароль';
const haveNotYetAccountText = 'Ещё не успели создать аккаунт?';
const haveAccountText = 'Уже есть аккаунт?';
const invalidEmail = 'Invalid email';
const invalidPassword = 'Password should contain digits, letters or both';
/* prettier-ignore */
const mainPageText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.';
/* prettier-ignore */
const rsLang = 'RS Lang';
const learnButtonText = 'Учиться';
const playButtonText = 'Играть';
const numberOfLevels = 7; // 6 + 1(все сложные слова)
const numberOfPagesInLevel = 30;
const btnHardText = 'сложные';
const btnLevelText = 'уровень ';
const sprintGameName = 'Спринт';
const audioGameName = 'Аудиовызов';
const extraGameName = 'Экстра';
const hardButtonText = 'Сложное';
const doneButtonText = 'Изучено';
const iconSprintSrc = './assets/svg/icon_sprint.svg';
const iconAudioGameSrc = './assets/svg/icon_audio_game.svg';
const iconExtraGameSrc = './assets/svg/icon_audio_game.svg';



/***/ }),

/***/ "./src/assets/audio.svg":
/*!******************************!*\
  !*** ./src/assets/audio.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de92b85007499341093d.svg";

/***/ }),

/***/ "./src/assets/bg_main.jpg":
/*!********************************!*\
  !*** ./src/assets/bg_main.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a641fdbbb51950685c7b.jpg";

/***/ }),

/***/ "./src/assets/fonts/static/Raleway-Bold.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/static/Raleway-Bold.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1a96e2aa6257c864d4d.ttf";

/***/ }),

/***/ "./src/assets/fonts/static/Raleway-Regular.ttf":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/static/Raleway-Regular.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ade142e81dd8d55cd32.ttf";

/***/ }),

/***/ "./src/assets/img/bg_main.jpg":
/*!************************************!*\
  !*** ./src/assets/img/bg_main.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a641fdbbb51950685c7b.jpg";

/***/ }),

/***/ "./src/assets/svg/audio.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/audio.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de92b85007499341093d.svg";

/***/ }),

/***/ "./src/assets/svg/rs_school_js.svg":
/*!*****************************************!*\
  !*** ./src/assets/svg/rs_school_js.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d336898bcd718ad55a1.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.ts");


const app = new _App__WEBPACK_IMPORTED_MODULE_1__["default"]();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtB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QSxZQUFZLHVEQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SHdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlFQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUdFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0Q0FBRztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsaUJBQWlCLEdBQUcsb0JBQW9CO0FBQ2xGO0FBQ0EsdUJBQXVCLGlCQUFpQixHQUFHLG9CQUFvQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEUjtBQUNBO0FBQ087QUFDbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRDQUFHO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0EsK0NBQStDLEVBQUU7QUFDakQ7QUFDQSwwQ0FBMEMsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscURBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlCQUFpQixHQUFHLDhCQUE4QjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUJBQWlCLEdBQUcsZ0NBQWdDO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLGNBQWM7QUFDbEcsb0ZBQW9GLGdCQUFnQjtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFFBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsSUFBSTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ0g7QUFDeEIsZ0JBQWdCLDRDQUFHO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9hdWRpby1jYWxsLXBhZ2UvYXVkaW8uY3NzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvYXVkaW8tY2FsbC1wYWdlL21vZGFsLmNzcyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3N0eWxlcy9hdXRob3Jpc2F0aW9uLmNzcyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3N0eWxlcy9jYXJkcy5jc3MiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9zdHlsZXMvbGV2ZWwtYnV0dG9ucy5jc3MiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9zdHlsZXMvbWFpbi1wYWdlLmNzcyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3N0eWxlcy9wYWdpbmF0aW9uLmNzcyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9hdWRpby1jYWxsLXBhZ2UvYXVkaW8uY3NzP2YwOGQiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9hdWRpby1jYWxsLXBhZ2UvbW9kYWwuY3NzPzViNjUiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9zdHlsZXMvYXV0aG9yaXNhdGlvbi5jc3M/ZTVlYyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3N0eWxlcy9jYXJkcy5jc3M/ZDk4YiIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3N0eWxlcy9sZXZlbC1idXR0b25zLmNzcz9iYTYxIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvc3R5bGVzL21haW4tcGFnZS5jc3M/MWM0MCIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvc3R5bGVzL3BhZ2luYXRpb24uY3NzP2FlY2QiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL0FwaS50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL2Z1bmN0aW9ucy9mdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9hcHBsaWNhdGlvbi1jb250cm9sbGVyLnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvYXBwbGljYXRpb24tdmlldy50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL2F1ZGlvLWNhbGwtcGFnZS9hdWRpby1jYWxsLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9hdWRpby1jYWxsLXBhZ2UvYXVkaW8tbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9hdWRpby1jYWxsLXBhZ2UvYXVkaW8tcXVlc3Rpb24tY29tcG9uZW50LnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvYXVkaW8tY2FsbC1wYWdlL2F1ZGlvLXZpZXcudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9hdWRpby1jYWxsLXBhZ2UvbW9kYWwtY29udGVudC50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL2F1dGgtcGFnZS9hdXRoLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9hdXRoLXBhZ2UvYXV0aC1tb2RlbC50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL2F1dGgtcGFnZS9hdXRoLXZpZXcudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9ib29rLXBhZ2UvYm9vay1jb250cm9sbGVyLnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvYm9vay1wYWdlL2Jvb2stbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9ib29rLXBhZ2UvYm9vay12aWV3LnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvYm9vay1wYWdlL2NhcmQtdmlldy50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3BhZ2VzL21haW4tcGFnZS9tYWluLXBhZ2UtY29udHJvbGVyLnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS12aWV3LnRzIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uLXBhZ2UvcmVnaXN0cmF0aW9uLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9yZWdpc3RyYXRpb24tcGFnZS9yZWdpc3RyYXRpb24tbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS8uL3NyYy9wYWdlcy9yZWdpc3RyYXRpb24tcGFnZS9yZWdpc3RyYXRpb24tdmlldy50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpLy4vc3JjL3V0aWxzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzdGVzdC1hcGkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JzdGVzdC1hcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnN0ZXN0LWFwaS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yc3Rlc3QtYXBpL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3JzdGVzdC1hcGkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JzdGVzdC1hcGkvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYXVkaW8tY2FsbC1jb250YWluZXJ7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHJvdy1nYXA6IDIwcHg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLmJ1dHRvbnMtY29udGFpbmVyLWRpdntcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi5kaXYtcXVpei1jb250YWluZXJ7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5xdWVzaW9uLWNvbnRhaW5lcntcXHJcXG4gIGRpc3BsYXkgOiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5xdWVzaW9uLWNvbnRhaW5lciA+IGRpdntcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxyXFxufVxcclxcbi5uZXh0LXF1ZXN0aW9uLWJ1dHRvbntcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgd2lkdGg6IDI3MHB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYnJvd24pO1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbiAgLyogZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBib3JkZXI6IDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG4ubmV4dC1xdWVzdGlvbi1idXR0b246aG92ZXJ7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuLm5ldy1nYW1lLWJ1dHRvbjo6aG92ZXJ7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxubGFiZWx7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5oaWRkZW57XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4ubmV3LWdhbWUtYnV0dG9uLCAucGxheS1hZ2Fpbi1idXR0b257XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjRUM5OTBFO1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbiAgLyogZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3JkZXI6IDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG4ucGxheS1hZ2Fpbi1idXR0b257XFxyXFxuICB3aWR0aDogMjcwcHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xcclxcbn1cXHJcXG4ubmV3LWdhbWUtYnV0dG9uOmhvdmVyLCAucGxheS1hZ2Fpbi1idXR0b246aG92ZXJ7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZ2FtZS1idXR0b257XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICBib3JkZXI6IDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbiAgLyogZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZSBcXHJcXG59XFxyXFxuLmdhbWUtYnV0dG9uOmhvdmVye1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5vcHRpb257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgd2lkdGg6IDI3MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubDF7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xcclxcbn1cXHJcXG4ubDJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LW1lZGl1bSk7XFxyXFxufVxcclxcbi5sM3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy1icmlnaHQpO1xcclxcbn1cXHJcXG4ubDR7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0tY29sb3ItbWVkaXVtKTtcXHJcXG59XFxyXFxuLmw1e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJvd24pO1xcclxcbn1cXHJcXG4ubDZ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYXJrKTtcXHJcXG59XFxyXFxuLmw3e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuLmNvcnJlY3R7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1jb21tb24pO1xcclxcbn1cXHJcXG4ud3Jvbmd7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG4vKiAuZGl2LXBsYXl7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL1BsYXkucG5nJyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6OTklIDk5JTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcbiovXFxyXFxuLmRpdi1wbGF5OmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcXHJcXG59XFxyXFxuLmdhbWUtcHJvZ3Jlc3MtYmFye1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93LWJyaWdodCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNpemluZzogdW5zZXQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5sb2FkaW5ne1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93LWJyaWdodCk7XFxyXFxuICBib3gtc2l6aW5nOiB1bnNldDtcXHJcXG59XFxyXFxuLmRpZi1jb250YWluZXJ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4uZGlmLWNvbnRhaW5lciA+IGxhYmVse1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgLyogZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcbi5ncmlkLXN0YXR1cy1jb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE3MHB4IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5zcGFuLW51bWJlcntcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lIFxcclxcbn1cXHJcXG4uc3Bhbi12YWx1ZXtcXHJcXG4gIFBvaW50ZXItZXZlbnRzOiBub25lIFxcclxcbn1cXHJcXG4uZGl2LW9wdGlvbi1ncmlke1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IGF1dG87XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9hdWRpby1jYWxsLXBhZ2UvYXVkaW8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osMERBQTBEO0VBQzFELGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDBEQUEwRDtFQUMxRCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osMERBQTBEO0VBQzFELGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmO0FBQ0Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLDRDQUE0QztBQUM5QztBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLHFDQUFxQztBQUN2QztBQUNBOzs7Ozs7Ozs7Q0FTQztBQUNEO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBEQUEwRDtFQUMxRCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hdWRpby1jYWxsLWNvbnRhaW5lcntcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgcm93LWdhcDogMjBweDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4uYnV0dG9ucy1jb250YWluZXItZGl2e1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLmRpdi1xdWl6LWNvbnRhaW5lcntcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnF1ZXNpb24tY29udGFpbmVye1xcclxcbiAgZGlzcGxheSA6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnF1ZXNpb24tY29udGFpbmVyID4gZGl2e1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG59XFxyXFxuLm5leHQtcXVlc3Rpb24tYnV0dG9ue1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICB3aWR0aDogMjcwcHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1icm93bik7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxuICAvKiBmb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyAqL1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcbi5uZXh0LXF1ZXN0aW9uLWJ1dHRvbjpob3ZlcntcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG4ubmV3LWdhbWUtYnV0dG9uOjpob3ZlcntcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5sYWJlbHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhpZGRlbntcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5uZXctZ2FtZS1idXR0b24sIC5wbGF5LWFnYWluLWJ1dHRvbntcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNFQzk5MEU7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxuICAvKiBmb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyAqL1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcbi5wbGF5LWFnYWluLWJ1dHRvbntcXHJcXG4gIHdpZHRoOiAyNzBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGFsaWduLXNlbGY6ZmxleC1lbmQ7XFxyXFxufVxcclxcbi5uZXctZ2FtZS1idXR0b246aG92ZXIsIC5wbGF5LWFnYWluLWJ1dHRvbjpob3ZlcntcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgYm9yZGVyOiAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5nYW1lLWJ1dHRvbntcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxuICAvKiBmb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyAqL1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lIFxcclxcbn1cXHJcXG4uZ2FtZS1idXR0b246aG92ZXJ7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuLm9wdGlvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICB3aWR0aDogMjcwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5sMXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY29sb3ItZ3JheS1saWdodCk7XFxyXFxufVxcclxcbi5sMntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbWVkaXVtKTtcXHJcXG59XFxyXFxuLmwze1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93LWJyaWdodCk7XFxyXFxufVxcclxcbi5sNHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhciggLS1jb2xvci1tZWRpdW0pO1xcclxcbn1cXHJcXG4ubDV7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icm93bik7XFxyXFxufVxcclxcbi5sNntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xcclxcbn1cXHJcXG4ubDd7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG4uY29ycmVjdHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLWNvbW1vbik7XFxyXFxufVxcclxcbi53cm9uZ3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcbi8qIC5kaXYtcGxheXtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvUGxheS5wbmcnKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTo5OSUgOTklO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuKi9cXHJcXG4uZGl2LXBsYXk6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xcclxcbn1cXHJcXG4uZ2FtZS1wcm9ncmVzcy1iYXJ7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctYnJpZ2h0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2l6aW5nOiB1bnNldDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmxvYWRpbmd7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctYnJpZ2h0KTtcXHJcXG4gIGJveC1zaXppbmc6IHVuc2V0O1xcclxcbn1cXHJcXG4uZGlmLWNvbnRhaW5lcntcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5kaWYtY29udGFpbmVyID4gbGFiZWx7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICAvKiBmb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyAqL1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuLmdyaWQtc3RhdHVzLWNvbnRhaW5lcntcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTcwcHggNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNwYW4tbnVtYmVye1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgXFxyXFxufVxcclxcbi5zcGFuLXZhbHVle1xcclxcbiAgUG9pbnRlci1ldmVudHM6IG5vbmUgXFxyXFxufVxcclxcbi5kaXYtb3B0aW9uLWdyaWR7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggYXV0bztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvc3ZnL2F1ZGlvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTYsIDExNSwgMTE1LCAwLjQ2KTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA1cHggNDBweCA1cHggNDBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICB3aWR0aDogNjB2dztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbSA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jbG9zZSB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDYpO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY2xvc2U6aG92ZXIsXFxyXFxuLm1vZGFsLWNsb3NlOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2LXJlc3VsdC1mbGV4IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdi1yZXN1bHQtZmxleD5zcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC8qIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAqL1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLXNwYW4tY29ycmVjdCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1jb21tb24pO1xcclxcbiAgICBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLXNwYW4td3Jvbmcge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5hbnN3ZXItY29udGFpbmVyLWNvcnJlY3Q+ZGl2PnNwYW4sXFxyXFxuLmFuc3dlci1jb250YWluZXItd3Jvbmc+ZGl2PnNwYW4ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5zd2VyLWNvbnRhaW5lci1jb3JyZWN0PmRpdj5kaXYsXFxyXFxuLmFuc3dlci1jb250YWluZXItd3Jvbmc+ZGl2PmRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLWljb24ge1xcclxcbiAgICB3aWR0aDogMzdweDtcXHJcXG4gICAgaGVpZ2h0OiAyN3B4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbWVkaXVtKTtcXHJcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcclxcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uYXVkaW8taWNvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyb3duKTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLWljb24uZGlzYWJsZWQge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL2F1ZGlvLWNhbGwtcGFnZS9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7O0FBRUE7O0lBRUksMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsK0NBQStDO0lBQy9DLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQzs7SUFFaEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsbURBQTZDO0lBQzdDLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsMkRBQXFEO0lBQ3JELDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTYsIDExNSwgMTE1LCAwLjQ2KTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA1cHggNDBweCA1cHggNDBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICB3aWR0aDogNjB2dztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbSA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jbG9zZSB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDYpO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY2xvc2U6aG92ZXIsXFxyXFxuLm1vZGFsLWNsb3NlOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2LXJlc3VsdC1mbGV4IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdi1yZXN1bHQtZmxleD5zcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC8qIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAqL1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLXNwYW4tY29ycmVjdCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1jb21tb24pO1xcclxcbiAgICBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLXNwYW4td3Jvbmcge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5hbnN3ZXItY29udGFpbmVyLWNvcnJlY3Q+ZGl2PnNwYW4sXFxyXFxuLmFuc3dlci1jb250YWluZXItd3Jvbmc+ZGl2PnNwYW4ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5zd2VyLWNvbnRhaW5lci1jb3JyZWN0PmRpdj5kaXYsXFxyXFxuLmFuc3dlci1jb250YWluZXItd3Jvbmc+ZGl2PmRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLWljb24ge1xcclxcbiAgICB3aWR0aDogMzdweDtcXHJcXG4gICAgaGVpZ2h0OiAyN3B4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbWVkaXVtKTtcXHJcXG4gICAgbWFzay1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc3ZnL2F1ZGlvLnN2ZycpO1xcclxcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc3ZnL2F1ZGlvLnN2ZycpO1xcclxcbiAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLWljb246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icm93bik7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1pY29uLmRpc2FibGVkIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hdXRob3Jpc2F0aW9uLFxcclxcbi5yZWdpc3RyYXRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiA0NTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGgtdGl0bGUsXFxyXFxuLnJlZy10aXRsZSxcXHJcXG4uc2lnbi1pbi1idXR0b24sXFxyXFxuLnNpZ24tdXAtYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGgtdGl0bGUsXFxyXFxuLnJlZy10aXRsZSxcXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtc3BhbixcXHJcXG4uaGF2ZS1hY2NvdW50LXNwYW4ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5hdXRoLXRpdGxlIHtcXHJcXG4gIHdpZHRoOiAyMjJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtaW5wdXQsXFxyXFxuLmVtYWlsLWlucHV0LFxcclxcbi5wYXNzd29yZC1pbnB1dCxcXHJcXG4uc2lnbi1pbi1idXR0b24sXFxyXFxuLnNpZ24tdXAtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjN2JjYWI7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWlucHV0OmZvY3VzLXZpc2libGUsXFxyXFxuLmVtYWlsLWlucHV0OmZvY3VzLXZpc2libGUsXFxyXFxuLnBhc3N3b3JkLWlucHV0OmZvY3VzLXZpc2libGUsXFxyXFxuLnNpZ24taW4tYnV0dG9uLFxcclxcbi5zaWduLXVwLWJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjZWM5OTBlO1xcclxcbiAgb3V0bGluZTogI2VjOTkwZSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1pbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFzc3dvcmQtaW5wdXQge1xcclxcbiAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tYnV0dG9uLFxcclxcbi5zaWduLXVwLWJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA2NXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWJ1dHRvbjpob3ZlcixcXHJcXG4uc2lnbi11cC1idXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM5OTBlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQsXFxyXFxuLmhhdmUtYWNjb3VudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtc3BhbixcXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtYnV0dG9uLFxcclxcbi5oYXZlLWFjY291bnQtc3BhbixcXHJcXG4uaGF2ZS1hY2NvdW50LWJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhdmUtbm90LXlldC1hY2NvdW50LXNwYW4sXFxyXFxuLmhhdmUtYWNjb3VudC1zcGFuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5oYXZlLW5vdC15ZXQtYWNjb3VudC1idXR0b24sXFxyXFxuLmhhdmUtYWNjb3VudC1idXR0b24ge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGNvbG9yOiAjZWM5OTBlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtYnV0dG9uOmhvdmVyLFxcclxcbi5oYXZlLWFjY291bnQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2F1dGhvcmlzYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7Ozs7RUFJRSxlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOzs7OztFQUtFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBOzs7OztFQUtFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7RUFJRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNULGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hdXRob3Jpc2F0aW9uLFxcclxcbi5yZWdpc3RyYXRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiA0NTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGgtdGl0bGUsXFxyXFxuLnJlZy10aXRsZSxcXHJcXG4uc2lnbi1pbi1idXR0b24sXFxyXFxuLnNpZ24tdXAtYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGgtdGl0bGUsXFxyXFxuLnJlZy10aXRsZSxcXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtc3BhbixcXHJcXG4uaGF2ZS1hY2NvdW50LXNwYW4ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5hdXRoLXRpdGxlIHtcXHJcXG4gIHdpZHRoOiAyMjJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtaW5wdXQsXFxyXFxuLmVtYWlsLWlucHV0LFxcclxcbi5wYXNzd29yZC1pbnB1dCxcXHJcXG4uc2lnbi1pbi1idXR0b24sXFxyXFxuLnNpZ24tdXAtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjN2JjYWI7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWlucHV0OmZvY3VzLXZpc2libGUsXFxyXFxuLmVtYWlsLWlucHV0OmZvY3VzLXZpc2libGUsXFxyXFxuLnBhc3N3b3JkLWlucHV0OmZvY3VzLXZpc2libGUsXFxyXFxuLnNpZ24taW4tYnV0dG9uLFxcclxcbi5zaWduLXVwLWJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjZWM5OTBlO1xcclxcbiAgb3V0bGluZTogI2VjOTkwZSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1pbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFzc3dvcmQtaW5wdXQge1xcclxcbiAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tYnV0dG9uLFxcclxcbi5zaWduLXVwLWJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA2NXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWJ1dHRvbjpob3ZlcixcXHJcXG4uc2lnbi11cC1idXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM5OTBlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQsXFxyXFxuLmhhdmUtYWNjb3VudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtc3BhbixcXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtYnV0dG9uLFxcclxcbi5oYXZlLWFjY291bnQtc3BhbixcXHJcXG4uaGF2ZS1hY2NvdW50LWJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhdmUtbm90LXlldC1hY2NvdW50LXNwYW4sXFxyXFxuLmhhdmUtYWNjb3VudC1zcGFuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5oYXZlLW5vdC15ZXQtYWNjb3VudC1idXR0b24sXFxyXFxuLmhhdmUtYWNjb3VudC1idXR0b24ge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGNvbG9yOiAjZWM5OTBlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGF2ZS1ub3QteWV0LWFjY291bnQtYnV0dG9uOmhvdmVyLFxcclxcbi5oYXZlLWFjY291bnQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9hdWRpby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZHNfbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcm93LWdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDI4NXB4O1xcclxcbiAgaGVpZ2h0OiA1MTBweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweCAwcHggMHB4IDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2ltZyB7XFxyXFxuICBoZWlnaHQ6IDE5MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX3N0YXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDcwcHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICByaWdodDogLTNweDtcXHJcXG4gIHRvcDogLTNweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDIuMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbWVkaXVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX3N0YXQgc3BhbiB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICM3MjU3NDc7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX190ZXh0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgcGFkZGluZzogMTBweCA4cHg7XFxyXFxufVxcclxcblxcclxcbi53b3JkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZF9fZW5nbGlzaCB7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbWVkaXVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLWljb24ge1xcclxcbiAgd2lkdGg6IDM3cHg7XFxyXFxuICBoZWlnaHQ6IDI3cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG4gIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgbWFzay1zaXplOiBjb250YWluO1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLWljb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1pY29uLmRpc2FibGVkIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9fYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiAzM3B4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMnB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFyZF9fYnRuOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmVfX2J0bjpob3ZlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhyYXNlX19kZWZpbml0aW9uIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhyYXNlX19kZWZpbml0aW9uIGkge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZV9fZGVmaW5pdGlvbl9lbmdsaXNoIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5waHJhc2VfX2RlZmluaXRpb25fcnVzc2lhbiB7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhyYXNlX19leGFtcGxlIHtcXHJcXG4gIGNvbG9yOiAjOTE5MTkxO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhyYXNlX19leGFtcGxlX2VuZ2xpc2gge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZV9fZXhhbXBsZV9ydXNzaWFuIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0gaGFyZCBjYXJkcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uY2FyZC5oYXJkIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5oYXJkIC5jYXJkX19zdGF0IHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBsaW5lLWhlaWdodDogMi42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFyZCAuY2FyZF9fc3RhdCBzcGFuIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFyZCAud29yZF9fZW5nbGlzaCB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcmQgLmhhcmRfX2J0biB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0gZG9uZSBjYXJkcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uY2FyZC5kb25lIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZSAuY2FyZF9fc3RhdCB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5kb25lIC5jYXJkX19zdGF0IHNwYW4ge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZSAud29yZF9fZW5nbGlzaCB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxufVxcclxcblxcclxcbi5kb25lIC5kb25lX19idG4ge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0gd29yZCBwcm9ncmVzcyBiYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi5jYXJkX19wcm9ncmVzcy1iYXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxNzBweDtcXHJcXG4gIGhlaWdodDogNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2l6aW5nOiB1bnNldDtcXHJcXG4gIGJhY2tncm91bmQ6ICNkZmQ0ZDQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJweCkgdHJhbnNsYXRlWSgxMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2dyZXNzLWxvYWRpbmcge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NhcmRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHlDQUF5QztFQUN6QywrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHlDQUF5QztFQUN6QyxtREFBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwyREFBOEM7RUFDOUMsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLDBCQUEwQjtBQUM1Qjs7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLHdCQUF3QjtBQUMxQjs7QUFFQSwyREFBMkQ7QUFDM0Q7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLG1DQUFtQztFQUNuQyxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhcmRzX2xpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHJvdy1nYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAyODVweDtcXHJcXG4gIGhlaWdodDogNTEwcHg7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMHB4IDBweCAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pbWcge1xcclxcbiAgaGVpZ2h0OiAxOTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19zdGF0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiA3MHB4O1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgcmlnaHQ6IC0zcHg7XFxyXFxuICB0b3A6IC0zcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAyLjFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LW1lZGl1bSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19zdGF0IHNwYW4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjNzI1NzQ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9fdGV4dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmRfX2VuZ2xpc2gge1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LW1lZGl1bSk7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1pY29uIHtcXHJcXG4gIHdpZHRoOiAzN3B4O1xcclxcbiAgaGVpZ2h0OiAyN3B4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XFxyXFxuICBtYXNrLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9hdWRpby5zdmdcXFwiKTtcXHJcXG4gIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBtYXNrLXNpemU6IGNvbnRhaW47XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2F1ZGlvLnN2Z1xcXCIpO1xcclxcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLWljb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1pY29uLmRpc2FibGVkIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9fYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiAzM3B4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMnB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFyZF9fYnRuOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmVfX2J0bjpob3ZlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhyYXNlX19kZWZpbml0aW9uIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhyYXNlX19kZWZpbml0aW9uIGkge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZV9fZGVmaW5pdGlvbl9lbmdsaXNoIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5waHJhc2VfX2RlZmluaXRpb25fcnVzc2lhbiB7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhyYXNlX19leGFtcGxlIHtcXHJcXG4gIGNvbG9yOiAjOTE5MTkxO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhyYXNlX19leGFtcGxlX2VuZ2xpc2gge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBocmFzZV9fZXhhbXBsZV9ydXNzaWFuIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0gaGFyZCBjYXJkcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uY2FyZC5oYXJkIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5oYXJkIC5jYXJkX19zdGF0IHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBsaW5lLWhlaWdodDogMi42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFyZCAuY2FyZF9fc3RhdCBzcGFuIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFyZCAud29yZF9fZW5nbGlzaCB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcmQgLmhhcmRfX2J0biB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0gZG9uZSBjYXJkcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uY2FyZC5kb25lIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZSAuY2FyZF9fc3RhdCB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5kb25lIC5jYXJkX19zdGF0IHNwYW4ge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZSAud29yZF9fZW5nbGlzaCB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxufVxcclxcblxcclxcbi5kb25lIC5kb25lX19idG4ge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0gd29yZCBwcm9ncmVzcyBiYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi5jYXJkX19wcm9ncmVzcy1iYXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxNzBweDtcXHJcXG4gIGhlaWdodDogNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2l6aW5nOiB1bnNldDtcXHJcXG4gIGJhY2tncm91bmQ6ICNkZmQ0ZDQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJweCkgdHJhbnNsYXRlWSgxMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2dyZXNzLWxvYWRpbmcge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubGV2ZWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNjtcXHJcXG4gIGhlaWdodDogNjVweDtcXHJcXG4gIG1hcmdpbjogNTVweCBhdXRvIDMwcHg7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLWFjY2VudCk7ICovXFxyXFxuICAvKiBmb250LXNpemU6IDJyZW07ICovXFxyXFxufVxcclxcblxcclxcbi5sZXZlbCB7XFxyXFxuICB3aWR0aDogMTIlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWw6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsOmFjdGl2ZSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC5hY3RpdmUge1xcclxcbiAgcGFkZGluZzogMjBweCAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWxfbnVtYmVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTEge1xcclxcbiAgYmFja2dyb3VuZDogI2NkYzFhMjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjZGMxYTI7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC0xOmhvdmVyLFxcclxcbi5sZXZlbC0xLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogI2NkYzFhMjtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZ3JheS1tZWRpdW0pO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItZ3JheS1tZWRpdW0pO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtMjpob3ZlcixcXHJcXG4ubGV2ZWwtMi5hY3RpdmUge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbWVkaXVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTMge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmY2IwNTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmNiMDU7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC0zOmhvdmVyLFxcclxcbi5sZXZlbC0zLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogI2ZmY2IwNTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTQge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTQ6aG92ZXIsXFxyXFxuLmxldmVsLTQuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTUge1xcclxcbiAgYmFja2dyb3VuZDogIzcyNTc0NztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3MjU3NDc7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC01OmhvdmVyLFxcclxcbi5sZXZlbC01LmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogIzcyNTc0NztcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTYge1xcclxcbiAgYmFja2dyb3VuZDogIzQ5NDM0MztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0OTQzNDM7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC02OmhvdmVyLFxcclxcbi5sZXZlbC02LmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogIzQ5NDM0MztcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTcge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC03OmhvdmVyLFxcclxcbi5sZXZlbC03LmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9sZXZlbC1idXR0b25zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDBDQUEwQztFQUMxQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCwyQ0FBMkM7RUFDM0MsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBDQUEwQztBQUM1Qzs7QUFFQTs7RUFFRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUNBQW1DO0FBQ3JDOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixxQ0FBcUM7QUFDdkM7O0FBRUE7O0VBRUUsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sZXZlbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE2O1xcclxcbiAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgbWFyZ2luOiA1NXB4IGF1dG8gMzBweDtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY29sb3ItYWNjZW50KTsgKi9cXHJcXG4gIC8qIGZvbnQtc2l6ZTogMnJlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsIHtcXHJcXG4gIHdpZHRoOiAxMiU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWw6YWN0aXZlIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTVweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLmFjdGl2ZSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbF9udW1iZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtMSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjY2RjMWEyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2NkYzFhMjtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTE6aG92ZXIsXFxyXFxuLmxldmVsLTEuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjY2RjMWEyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtMiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ncmF5LW1lZGl1bSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LW1lZGl1bSk7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbC0yOmhvdmVyLFxcclxcbi5sZXZlbC0yLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheS1tZWRpdW0pO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtMyB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZjYjA1O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmY2IwNTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTM6aG92ZXIsXFxyXFxuLmxldmVsLTMuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjZmZjYjA1O1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtNCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtNDpob3ZlcixcXHJcXG4ubGV2ZWwtNC5hY3RpdmUge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtNSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNzI1NzQ3O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzcyNTc0NztcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTU6aG92ZXIsXFxyXFxuLmxldmVsLTUuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjNzI1NzQ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtNiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNDk0MzQzO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzQ5NDM0MztcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTY6aG92ZXIsXFxyXFxuLmxldmVsLTYuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjNDk0MzQzO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwtNyB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsLTc6aG92ZXIsXFxyXFxuLmxldmVsLTcuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2UgKiB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tcGFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDU1JTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDcwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tcGFnZV9fdGl0bGUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA3cmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2VfX3RleHQgcCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi42cmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9pbnRybyB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmFjdGl2ZSB7XFxyXFxuICBzY2FsZTogOTYlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX2NvbG9yZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9ib3JkZXJlZCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgY29sb3I6ICNlYzk5MGU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi1wYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2UgKiB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tcGFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDU1JTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDcwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tcGFnZV9fdGl0bGUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA3cmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2VfX3RleHQgcCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi42cmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9pbnRybyB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmFjdGl2ZSB7XFxyXFxuICBzY2FsZTogOTYlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX2NvbG9yZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9ib3JkZXJlZCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgY29sb3I6ICNlYzk5MGU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL3N0YXRpYy9SYWxld2F5LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL3N0YXRpYy9SYWxld2F5LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltZy9iZ19tYWluLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iZ19tYWluLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9zdmcvcnNfc2Nob29sX2pzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tY29sb3ItbWFpbjogI2VjOTkwZTtcXHJcXG4gIC0tY29sb3ItbWVkaXVtOiAjZjJiODU3O1xcclxcbiAgLS1jb2xvci1hY2NlbnQ6ICNhZTMxMmI7XFxyXFxuICAtLWNvbG9yLWdyYXktbGlnaHQ6ICNjN2JjYWI7XFxyXFxuICAtLWNvbG9yLWdyYXktbWVkaXVtOiAjYjU5NTY1O1xcclxcbiAgLS1jb2xvci1kYXJrOiAjNDk0MzQzO1xcclxcbiAgLS1jb2xvci1icm93biA6ICM3MjU3NDc7XFxyXFxuICAtLWNvbG9yLXllbGxvdy1icmlnaHQgOiNmZmNiMDU7XFxyXFxuICAtLWNvbG9yLWdyZWVuLWNvbW1vbiA6ICM2REEwNzA7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19sb2dvIGltZyB7XFxyXFxuICB3aWR0aDogMTMwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdF9faXRlbSB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxLjI3NXB4O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0X19pdGVtLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogI2M3YmNhYjtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3RfX2l0ZW06aG92ZXIge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3RfX2l0ZW06bGFzdC1vZi10eXBlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluIHtcXHJcXG4gIHBhZGRpbmc6IDZweCAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluOmhvdmVyIHtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW46YWN0aXZlIHtcXHJcXG4gIHNjYWxlOiA5NiU7XFxyXFxufVxcclxcblxcclxcbi5pbnRybyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAqL1xcclxcbiAgLyogbWFyZ2luLXRvcDogODBweDsgKi9cXHJcXG4gIG1heC13aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaDEge1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxMHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbnRyb19fdGV4dCBwIHtcXHJcXG4gIC8qIG1hcmdpbi10b3A6IDE2cHg7ICovXFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi42cmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgMzEsIDMxLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIuc2Vjb25kYXJ5IHtcXHJcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2JnX21haW4uanBnXFxcIik7ICovXFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX193cmFwcGVyIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJzcyB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBmaWx0ZXI6IGludmVydCgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9fdGVhbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZWFtX19saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBnYXA6IDA7XFxyXFxufVxcclxcblxcclxcbi50ZWFtX19tZW1iZXIgYSB7XFxyXFxuICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi44cmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZmZmZmZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbV9fbWVtYmVyIGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi50ZWFtX19tZW1iZXI6bGFzdC1vZi10eXBlIGEge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX195ZWFyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMHB4O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5naC1sb2dvIHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzOHB4O1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9fYnV0dG9ucyAuYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNTJweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAzMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDMuN3JlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtaWNvbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5ycy1sb2dvIHtcXHJcXG4gIHdpZHRoOiA5MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2hfbG9nbyB7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuLmZvb3Rlcl9fdGVhbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi50ZWFtX19saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBnYXA6IDA7XFxyXFxufVxcclxcblxcclxcbi50ZWFtX19tZW1iZXIgYSB7XFxyXFxuICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi44cmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZmZmZmZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbV9fbWVtYmVyIGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi50ZWFtX19tZW1iZXI6bGFzdC1vZi10eXBlIGEge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX195ZWFyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMHB4O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsK0RBQXlFO0VBQ3pFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsK0RBQXNFO0VBQ3RFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLDhCQUE4Qjs7RUFFOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNULGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyx5REFBa0Q7RUFDbEQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pC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QW1CO0VBQ25CLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xcclxcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9zdGF0aWMvUmFsZXdheS1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XFxyXFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL3N0YXRpYy9SYWxld2F5LUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tY29sb3ItbWFpbjogI2VjOTkwZTtcXHJcXG4gIC0tY29sb3ItbWVkaXVtOiAjZjJiODU3O1xcclxcbiAgLS1jb2xvci1hY2NlbnQ6ICNhZTMxMmI7XFxyXFxuICAtLWNvbG9yLWdyYXktbGlnaHQ6ICNjN2JjYWI7XFxyXFxuICAtLWNvbG9yLWdyYXktbWVkaXVtOiAjYjU5NTY1O1xcclxcbiAgLS1jb2xvci1kYXJrOiAjNDk0MzQzO1xcclxcbiAgLS1jb2xvci1icm93biA6ICM3MjU3NDc7XFxyXFxuICAtLWNvbG9yLXllbGxvdy1icmlnaHQgOiNmZmNiMDU7XFxyXFxuICAtLWNvbG9yLWdyZWVuLWNvbW1vbiA6ICM2REEwNzA7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWcvYmdfbWFpbi5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fbG9nbyBpbWcge1xcclxcbiAgd2lkdGg6IDEzMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3RfX2l0ZW0ge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMS4yNzVweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdF9faXRlbS5hY3RpdmUge1xcclxcbiAgY29sb3I6ICNjN2JjYWI7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0X19pdGVtOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0X19pdGVtOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbiB7XFxyXFxuICBwYWRkaW5nOiA2cHggMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbjpob3ZlciB7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluOmFjdGl2ZSB7XFxyXFxuICBzY2FsZTogOTYlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgKi9cXHJcXG4gIC8qIG1hcmdpbi10b3A6IDgwcHg7ICovXFxyXFxuICBtYXgtd2lkdGg6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmgxIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBmb250LXNpemU6IDZyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTByZW07XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm9fX3RleHQgcCB7XFxyXFxuICAvKiBtYXJnaW4tdG9wOiAxNnB4OyAqL1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDMxLCAzMSwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyLnNlY29uZGFyeSB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9iZ19tYWluLmpwZ1xcXCIpOyAqL1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSwgdXJsKFxcXCIuLi9hc3NldHMvYmdfbWFpbi5qcGdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9fd3JhcHBlciB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yc3Mge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciB1cmwoXFxcIi4uL2Fzc2V0cy9zdmcvcnNfc2Nob29sX2pzLnN2Z1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX3RlYW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbV9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZ2FwOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbV9fbWVtYmVyIGEge1xcclxcbiAgcGFkZGluZzogMCAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2ZmZmZmZjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYW1fX21lbWJlciBhOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbV9fbWVtYmVyOmxhc3Qtb2YtdHlwZSBhIHtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9feWVhciB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDBweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2gtbG9nbyB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX2J1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzhweDtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX2J1dHRvbnMgLmJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUycHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMzBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzLjdyZW07XFxyXFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWljb24ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtbG9nbyB7XFxyXFxuICB3aWR0aDogOTBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdoX2xvZ28ge1xcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcbi5mb290ZXJfX3RlYW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4udGVhbV9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZ2FwOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbV9fbWVtYmVyIGEge1xcclxcbiAgcGFkZGluZzogMCAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2ZmZmZmZjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYW1fX21lbWJlciBhOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbV9fbWVtYmVyOmxhc3Qtb2YtdHlwZSBhIHtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9feWVhciB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDBweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucGFnaW5hdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgbWFyZ2luOiA1NXB4IGF1dG8gMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2luYXRpb24tZWxlbWVudCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBwYWRkaW5nOiAzcHggNnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAyLjFyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5wYWdpbmF0aW9uLWVsZW1lbnQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICM3MjU3NDc7XFxyXFxufVxcclxcblxcclxcbi5wYWdpbmF0aW9uLWVsZW1lbnQuYWN0aXZlIHtcXHJcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogIzcyNTc0NztcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgY3Vyc29yOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnaW5hdGlvbi1lbGVtZW50LmRvbmUge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3BhZ2luYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBhZ2luYXRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIG1hcmdpbjogNTVweCBhdXRvIDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdpbmF0aW9uLWVsZW1lbnQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZzogM3B4IDZweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMi4xcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnaW5hdGlvbi1lbGVtZW50OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNzI1NzQ3O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnaW5hdGlvbi1lbGVtZW50LmFjdGl2ZSB7XFxyXFxuICBwYWRkaW5nOiAzcHggMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6ICM3MjU3NDc7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIGN1cnNvcjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2luYXRpb24tZWxlbWVudC5kb25lIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F1ZGlvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXVkaW8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F1dGhvcmlzYXRpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hdXRob3Jpc2F0aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmRzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sZXZlbC1idXR0b25zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGV2ZWwtYnV0dG9ucy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi1wYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi1wYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFnaW5hdGlvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2luYXRpb24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgYmFzZVVybCB9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzJztcclxuY2xhc3MgQXBpIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XHJcbiAgICAgICAgdGhpcy51c2VycyA9IGAke3RoaXMuYmFzZVVybH0vdXNlcnNgO1xyXG4gICAgICAgIHRoaXMuc2lnbkluID0gYCR7dGhpcy5iYXNlVXJsfS9zaWduaW5gO1xyXG4gICAgICAgIHRoaXMud29yZHMgPSBgJHt0aGlzLmJhc2VVcmx9L3dvcmRzYDtcclxuICAgIH1cclxuICAgIGNyZWF0ZVVzZXIodXNlcikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7dGhpcy51c2Vyc31gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0VXNlcihpZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7dGhpcy51c2Vyc30vJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbkluVXNlcih1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHt0aGlzLnNpZ25Jbn1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IHVzZXIuZW1haWwsIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkIH0pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlVXNlcihpZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7dGhpcy51c2Vyc30vJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0V29yZHMoZ3JvdXAsIHBhZ2UpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uY2UgPSB5aWVsZCBmZXRjaChgJHt0aGlzLndvcmRzfT9ncm91cD0ke2dyb3VwfSZwYWdlPSR7cGFnZX1gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZHMgPSB5aWVsZCByZXNwb25jZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FyZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0V29yZHNGb3JMZXZlbChncm91cCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25jZSA9IHlpZWxkIGZldGNoKGAke3RoaXMud29yZHN9P2dyb3VwPSR7Z3JvdXB9YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRzID0geWllbGQgcmVzcG9uY2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldE9uZVdvcmQoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uY2UgPSB5aWVsZCBmZXRjaChgJHt0aGlzLndvcmRzfS8ke2lkfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IHlpZWxkIHJlc3BvbmNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYXJkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcGk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgTWFpblBhZ2VDb250cm9sbGVyIGZyb20gJy4vcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS1jb250cm9sZXInO1xyXG5pbXBvcnQgQXVkaW9Db250cm9sbGVyIGZyb20gJy4vcGFnZXMvYXVkaW8tY2FsbC1wYWdlL2F1ZGlvLWNhbGwtY29udHJvbGxlcic7XHJcbmltcG9ydCBBdXRoQ29udHJvbGxlciBmcm9tICcuL3BhZ2VzL2F1dGgtcGFnZS9hdXRoLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgUmVnaXN0cmF0aW9uQ29udHJvbGxlciBmcm9tICcuL3BhZ2VzL3JlZ2lzdHJhdGlvbi1wYWdlL3JlZ2lzdHJhdGlvbi1jb250cm9sbGVyJztcclxuaW1wb3J0IEJvb2tDb250cm9sbGVyIGZyb20gJy4vcGFnZXMvYm9vay1wYWdlL2Jvb2stY29udHJvbGxlcic7XHJcbmltcG9ydCB7IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlLCByZW1vdmVEYXRhRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSwgfSBmcm9tICcuL2Z1bmN0aW9ucy9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBsb2dPdXRUZXh0LCBzaWduSW5CdXR0b25UZXh0IH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xyXG5jbGFzcyBBcHAge1xyXG4gICAgc3RhdGljIHNldENvbnRyb2xsZXIoY29udHJvbGxlcikge1xyXG4gICAgICAgIEFwcC5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgICAgICBBcHAubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICAgICAgaWYgKEFwcC5tYWluKSB7XHJcbiAgICAgICAgICAgIEFwcC5tYWluLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBBcHAubWFpbi5hcHBlbmRDaGlsZChBcHAuY29udHJvbGxlci5wYWdlVmlldy52aWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IHBhZ2VOYW1lIH0gPSBBcHAucGFnZUluZm87XHJcbiAgICAgICAgICAgIGlmIChwYWdlTmFtZSAhPT0gJ2Jvb2tQYWdlJykge1xyXG4gICAgICAgICAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgncGFnZUluZm8nLCBKU09OLnN0cmluZ2lmeShBcHAucGFnZUluZm8pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xyXG4gICAgc3RhdGljIHNpZ25JbihkYXRhKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXJEYXRhO1xyXG4gICAgICAgICAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKCdycy1sYW5nLXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xyXG4gICAgICAgICAgICBBcHAucmVuZGVyTWFpblBhZ2UoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2lnbkluQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ24taW4tcGFnZS1saW5rJyk7XHJcbiAgICAgICAgICAgIHNpZ25JbkJ1dHRvbi5pbm5lclRleHQgPSBsb2dPdXRUZXh0O1xyXG4gICAgICAgICAgICBzaWduSW5CdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBBcHAucmVuZGVyQXV0aFBhZ2UpO1xyXG4gICAgICAgICAgICBzaWduSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBBcHAubG9nT3V0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDQt9Cw0LzQtdC90LjRgtGMINCw0LvQtdGA0YIg0L3QsCDRh9GC0L4t0YLQviDRh9C10LvQvtCy0LXRh9C10YHQutC+0LVcclxuICAgICAgICBhbGVydChkYXRhKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBsb2dPdXQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2lnbkluQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ24taW4tcGFnZS1saW5rJyk7XHJcbiAgICAgICAgc2lnbkluQnV0dG9uLmlubmVyVGV4dCA9IHNpZ25JbkJ1dHRvblRleHQ7XHJcbiAgICAgICAgc2lnbkluQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLmxvZ091dCk7XHJcbiAgICAgICAgc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLnJlbmRlckF1dGhQYWdlKTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmVtb3ZlRGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3JzLWxhbmctdXNlcicpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNoYW5nZUFjdGl2ZUNsYXNzRm9yTmF2SXRlbUJ5RXZlbnQoZSkge1xyXG4gICAgICAgIEFwcC5jaGFuZ2VBY3RpdmVDbGFzc0Zvck5hdkl0ZW1CeUVsZW1lbnQoZS50YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNoYW5nZUFjdGl2ZUNsYXNzRm9yTmF2SXRlbUJ5RWxlbWVudChlbGVtKSB7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saXN0X19pdGVtJyk7XHJcbiAgICAgICAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbGVtID09PSBudWxsIHx8IGVsZW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVuZGVyTWFpblBhZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBNYWluUGFnZUNvbnRyb2xsZXIoKTtcclxuICAgICAgICBBcHAuc2V0Q29udHJvbGxlcihjb250cm9sbGVyKTtcclxuICAgICAgICBBcHAucGFnZUluZm8gPSB7IHBhZ2VOYW1lOiAnbWFpblBhZ2UnIH07XHJcbiAgICAgICAgQXBwLm1ha2VNYWluVHJhbnNwYXJlbnRBZ2FpbigpO1xyXG4gICAgICAgIGNvbnN0IG1haW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlLWxpbmsnKTtcclxuICAgICAgICBBcHAuY2hhbmdlQWN0aXZlQ2xhc3NGb3JOYXZJdGVtQnlFbGVtZW50KG1haW5CdXR0b24pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlbmRlckJvb2tQYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQm9va0NvbnRyb2xsZXIoKTtcclxuICAgICAgICBBcHAuc2V0Q29udHJvbGxlcihjb250cm9sbGVyKTtcclxuICAgICAgICBjb25zdCBtYWluQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stcGFnZS1saW5rJyk7XHJcbiAgICAgICAgQXBwLmNoYW5nZUFjdGl2ZUNsYXNzRm9yTmF2SXRlbUJ5RWxlbWVudChtYWluQnV0dG9uKTtcclxuICAgICAgICBBcHAucGFnZUluZm8gPSB7IHBhZ2VOYW1lOiAnYm9va1BhZ2UnIH07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVuZGVyQXV0aFBhZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBdXRoQ29udHJvbGxlcigpO1xyXG4gICAgICAgIEFwcC5zZXRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xyXG4gICAgICAgIC8vIGlmIChlKSB7XHJcbiAgICAgICAgLy8gICBBcHAuY2hhbmdlQWN0aXZlQ2xhc3NGb3JOYXZJdGVtQnlFdmVudChlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY29uc3QgbWFpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWduLWluLXBhZ2UtbGluaycpO1xyXG4gICAgICAgIEFwcC5jaGFuZ2VBY3RpdmVDbGFzc0Zvck5hdkl0ZW1CeUVsZW1lbnQobWFpbkJ1dHRvbik7XHJcbiAgICAgICAgQXBwLm1ha2VNYWluVHJhbnNwYXJlbnRBZ2FpbigpO1xyXG4gICAgICAgIEFwcC5wYWdlSW5mbyA9IHsgcGFnZU5hbWU6ICdhdXRoUGFnZScgfTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZW5kZXJSZWdQYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgUmVnaXN0cmF0aW9uQ29udHJvbGxlcigpO1xyXG4gICAgICAgIEFwcC5zZXRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIG1ha2VNYWluVHJhbnNwYXJlbnRBZ2FpbigpIHtcclxuICAgICAgICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX3dyYXBwZXInKTtcclxuICAgICAgICBtYWluV3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgfVxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BhZ2VJbmZvJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VJbmZvID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BhZ2VJbmZvJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2VOYW1lIH0gPSBwYWdlSW5mbztcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFnZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdtYWluUGFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5yZW5kZXJNYWluUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdib29rUGFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5yZW5kZXJCb29rUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhdXRoUGFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5yZW5kZXJBdXRoUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAucmVuZGVyTWFpblBhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBBcHAucmVuZGVyTWFpblBhZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3JzLWxhbmctdXNlcicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3JzLWxhbmctdXNlcicpO1xyXG4gICAgICAgICAgICAgICAgQXBwLnNpZ25Jbih1c2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvZ28nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLnJlbmRlck1haW5QYWdlKTtcclxuICAgICAgICAvLyBBcHAucmVuZGVyTWFpblBhZ2UoKTtcclxuICAgICAgICAoX2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlLWxpbmsnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLnJlbmRlck1haW5QYWdlKTtcclxuICAgICAgICAoX2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1wYWdlLWxpbmsnKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLnJlbmRlckJvb2tQYWdlKTtcclxuICAgICAgICAoX2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbi1pbi1wYWdlLWxpbmsnKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLnJlbmRlckF1dGhQYWdlKTtcclxuICAgICAgICAvLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3Jkcy1wYWdlLWxpbmsnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGFnZSA9IG5ldyBXb3Jkc1BhZ2UoKTtcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgIC8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXQtcGFnZS1saW5rJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBhZ2UgPSBuZXcgU3RhdFBhZ2UoKTtcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgIChfZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXBhZ2UtbGluaycpKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQXVkaW9Db250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIEFwcC5zZXRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIChfZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWduLWluLXBhZ2UtbGluaycpKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQXV0aENvbnRyb2xsZXIoKTtcclxuICAgICAgICAgICAgQXBwLnNldENvbnRyb2xsZXIoY29udHJvbGxlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgKF9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ24tdXAtcGFnZS1saW5rJykpID09PSBudWxsIHx8IF9nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBSZWdpc3RyYXRpb25Db250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIEFwcC5zZXRDb250cm9sbGVyKGNvbnRyb2xsZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtcGFnZS1saW5rJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBhZ2UgPSBuZXcgR2FtZVBhZ2UoKTtcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1lc2NhcGUgKi9cclxuZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsKSB7XHJcbiAgICByZXR1cm4gISFlbWFpbC5tYXRjaCgvXltcXHctXFwuXStAKFtcXHctXStcXC4pK1tcXHctXXsyLDR9JC9nKTsgLy8gdmFsaWRhdGlvbiBmb3IgZW1haWxcclxufVxyXG5mdW5jdGlvbiBpc1ZhbGlkUGFzc3dvcmQocGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAhIXBhc3N3b3JkLm1hdGNoKC9eW0EtWmEtelxcZF17OCx9JC9nKTsgLy8gbWluaW11bSBlaWdodCBjaGFyYWN0ZXJzLCBsZXR0ZXJzLCBudW1iZXJzIG9yIG1peFxyXG59XHJcbmZ1bmN0aW9uIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UobmFtZSwgZGF0YSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UobmFtZSkge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpICE9PSBudWxsID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSB8fCAnJykgOiBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZURhdGFGcm9tTG9jYWxTdG9yYWdlKG5hbWUpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpO1xyXG59XHJcbmZ1bmN0aW9uIGRpc2FibGVBdWRpb0J0bnMoKSB7XHJcbiAgICBjb25zdCBhdWRpb0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXVkaW8taWNvbicpO1xyXG4gICAgYXVkaW9CdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlQXVkaW9CdG5zKCkge1xyXG4gICAgY29uc3QgYXVkaW9CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1ZGlvLWljb24nKTtcclxuICAgIGF1ZGlvQnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgIH0pO1xyXG59XHJcbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xyXG5leHBvcnQgeyBpc1ZhbGlkRW1haWwsIGlzVmFsaWRQYXNzd29yZCwgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSwgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UsIGRpc2FibGVBdWRpb0J0bnMsIGVuYWJsZUF1ZGlvQnRucywgcmVtb3ZlRGF0YUZyb21Mb2NhbFN0b3JhZ2UsIH07XHJcbiIsImNsYXNzIEFwcGxpY2F0aW9uQ29udG9sbGVyIHtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvbkNvbnRvbGxlcjtcclxuIiwiY2xhc3MgQXBwbGljYXRpb25WaWV3IHtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvblZpZXc7XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCBBdWRpb01vZGVsIGZyb20gJy4vYXVkaW8tbW9kZWwnO1xyXG5pbXBvcnQgQXVkaW9WaWV3IGZyb20gJy4vYXVkaW8tdmlldyc7XHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vLi4vQXBpJztcclxuaW1wb3J0IEFwcGxpY2F0aW9uQ29udG9sbGVyIGZyb20gJy4uL2FwcGxpY2F0aW9uLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL0FwcCc7XHJcbmNsYXNzIEF1ZGlvQ29udHJvbGxlciBleHRlbmRzIEFwcGxpY2F0aW9uQ29udG9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHdvcmRzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFwaSA9IG5ldyBBcGkoKTtcclxuICAgICAgICB0aGlzLndvcmRzUGVyUGFnZSA9IDIwO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGJhclByb2dyZXNzID0gMztcclxuICAgICAgICB0aGlzLnBhZ2VzUGVyR2FtZSA9IDM7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2luZGVudCAqL1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIGltcGxpY2l0LWFycm93LWxpbmVicmVhayAqL1xyXG4gICAgICAgIHRoaXMuZ2V0d29yZHMgPSAoZ3JvdXAsIHBhZ2UpID0+IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaChgJHt0aGlzLmFwaS53b3Jkc30/Z3JvdXA9JHtncm91cH0mcGFnZT0ke3BhZ2V9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmRzID0gcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHJlcyh3b3Jkcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghd29yZHMpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldyA9IG5ldyBBdWRpb1ZpZXcoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBBdWRpb01vZGVsKHRoaXMucGFnZVZpZXcpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEtleUJvYXJkTGlzdGVuZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdvcmRzKSB7XHJcbiAgICAgICAgICAgIC8vLyDQv9C10YDQtdGF0L7QtCDRgdC+INGB0YLRgtGA0LDQvdC40YbRiyDRg9GH0LXQsdC90LjQutCwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBjb25zdCBidG5zID0gdGhpcy5wYWdlVmlldy52aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnRucy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBidG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdnYW1lLWJ1dHRvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5nYW1lU3RhdHVzID0gJ1NldCBMZXZlbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbGxXb3JkcyhOdW1iZXIodGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2VWaWV3LnZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgLy8gaWYgKHRhcmdldC5jbGFzc05hbWUgPT09ICdnYW1lLWJ1dHRvbiBvcHRpb24nKSB7XHJcbiAgICAgICAgICAgIC8vICAgdGhpcy5tb2RlbC51cGRhdGVHYW1lUHJvZ3Jlc3MoKTsvL9C+0LHQvdC+0LLQu9C10L3QuNC1INGB0YLQsNGC0LjRgdGC0LjQutC4XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5pZCA9PT0gJ25leHQtcXVlc3Rpb24tYnV0dG9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5uZXh0UXVlc3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2F1ZGlvLWljb24nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IHRhcmdldC5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGEgPSBuZXcgQXVkaW8oYXVkaW8uc3JjKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmlkID09PSAncGxheS1hZ2FpbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwucGxheUFnYWluKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT09ICdnYW1lLWJ1dHRvbiBvcHRpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmhhbmRsZUFuc3dlcih0YXJnZXQucXVlcnlTZWxlY3RvcignLnNwYW4tdmFsdWUnKS5pbm5lclRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSAnbW9kYWwtY2xvc2UnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmNsb3NlUmVzdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAoX2EgPSB0aGlzLnBhZ2VWaWV3LnZpZXcucXVlcnlTZWxlY3RvcignI25ldy1nYW1lJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5nYW1lU3RhdHVzID0gJ1NlbGVjdCBMZXZlbCc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRLZXlCb2FyZExpc3RlbmVyKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5rZXlQcmVzcyhlKSk7XHJcbiAgICB9XHJcbiAgICBrZXlQcmVzcyhlKSB7XHJcbiAgICAgICAgaWYgKEFwcC5jb250cm9sbGVyIGluc3RhbmNlb2YgQXVkaW9Db250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuaGFuZGxlUHJlc3NLZXkoZS5rZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEFsbFdvcmRzKGdyb3VwKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5zaG93UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5nYW1lU3RhdHVzID0gJ0xvYWRpbmcnO1xyXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB0aGlzLmluaXRpYWxiYXJQcm9ncmVzcztcclxuICAgICAgICAgICAgbGV0IHdvcmRzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21QYWdlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICB3aGlsZSAocmFuZG9tUGFnZXMubGVuZ3RoIDwgdGhpcy5wYWdlc1BlckdhbWUpIHtcclxuICAgICAgICAgICAgICAgIHJhbmRvbVBhZ2VzLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wYWdlc1BlckdhbWUgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICByYW5kb21QYWdlcyA9IHJhbmRvbVBhZ2VzLmZpbHRlcigoaXRlbSwgaW5kZXgsIGFycikgPT4gaW5kZXggPT09IGFyci5pbmRleE9mKGl0ZW0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLnBhZ2VzUGVyR2FtZTsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IChpIC8gdGhpcy5wYWdlc1BlckdhbWUpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5sb2FkaW5nU3RhdHVzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1hd2FpdC1pbi1sb29wICovXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHlpZWxkIHRoaXMuZ2V0d29yZHMoZ3JvdXAsIGkpO1xyXG4gICAgICAgICAgICAgICAgd29yZHMgPSB3b3Jkcy5jb25jYXQodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY3JlYXRlUXVpeih3b3JkcywgMjApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF1ZGlvQ29udHJvbGxlcjtcclxuIiwiaW1wb3J0IEF1ZGlvUXVlc3Rpb24gZnJvbSAnLi9hdWRpby1xdWVzdGlvbi1jb21wb25lbnQnO1xyXG5jbGFzcyBBdWRpb01vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhZ2VWaWV3KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSAtMTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdQcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5wYWdlVmlldyA9IHBhZ2VWaWV3O1xyXG4gICAgICAgIHRoaXMud3JvbmdBbnN3ZXJzID0gMDtcclxuICAgICAgICB0aGlzLmNvcnJyZWN0QW5zd2VycyA9IDA7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9hZGluZ1N0YXR1cyhsb2FkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nUHJvZ3Jlc3MgPSBsb2FkaW5nO1xyXG4gICAgICAgIHRoaXMucGFnZVZpZXcudXBkYXRlUHJvZ3Jlc3NCYXIodGhpcy5sb2FkaW5nUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG4gICAgc2V0IGdhbWVTdGF0dXMoc3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAnU2V0IExldmVsJykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VWaWV3LmhpZGVEaWZmaWN1bHR5U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuaGlkZUdhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUmVzdWx0cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdTZWxlY3QgTGV2ZWwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuc2hvd0xldmVsU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuaGlkZUdhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUmVzdWx0cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdHYW1lJykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VWaWV3LmhpZGVEaWZmaWN1bHR5U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuc2hvd0dhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUmVzdWx0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldCBRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24pIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IGN1cnJlbnRRdWVzdGlvbjtcclxuICAgICAgICB0aGlzLnBhZ2VWaWV3LnNob3dRdWVzdGlvbih0aGlzLmF1ZGlvVGVzdHNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLmF1ZGlvVGVzdFZpZXcpO1xyXG4gICAgfVxyXG4gICAgcGxheUFnYWluKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb1Rlc3RzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9UZXN0c1tpXS5pc0Fuc3dlcmVkID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1Rlc3RzW2ldLmlzQ29ycmVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvVGVzdHNbaV0ub3B0aW9ucyA9IHRoaXMuYXVkaW9UZXN0c1tpXS5vcHRpb25zLnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9UZXN0c1tpXS5yZW5kZXJBdWRpb1Rlc3RWaWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXVkaW9UZXN0cyA9IHRoaXMuYXVkaW9UZXN0cy5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMuUXVlc3Rpb24gPSAwO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9ICdHYW1lJztcclxuICAgIH1cclxuICAgIG5leHRRdWVzdGlvbigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbiA9PT0gdGhpcy5hdWRpb1Rlc3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VWaWV3LnNob3dHYW1lUmVzdWx0KHRoaXMuYXVkaW9UZXN0cyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuaGlkZUdhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuc2hvd1F1ZXN0aW9uKHRoaXMuYXVkaW9UZXN0c1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0uYXVkaW9UZXN0Vmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xvc2VSZXN1bHQoKSB7XHJcbiAgICAgICAgLy8g0LXRgdC70Lgg0LDQstGC0L7RgNC40LfQvtCy0LDQvdGLINC/0LXRgNC10YXQvtC00LjQvCDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0YPRh9C10LHQvdC40LrQsFxyXG4gICAgICAgIC8vIHRoaXMuYXVkaW9UZXN0cyA9IG5ldyBBcnJheTxBdWRpb1F1ZXN0aW9uPigpO1xyXG4gICAgICAgIHRoaXMud3JvbmdBbnN3ZXJzID0gMDtcclxuICAgICAgICB0aGlzLnJpZ3RoQW5zd2VycyA9IDA7XHJcbiAgICAgICAgdGhpcy5wYWdlVmlldy5oaWRlUmVzdWx0cygpO1xyXG4gICAgICAgIHRoaXMuYXVkaW9UZXN0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICAvLyDRgdGE0L7RgNC80LjRgNC+0LLQsNGC0Ywg0YHQv9C40YHQvtC6INCy0L7Qv9GA0L7RgdC+0LIg0Lgg0L3QsNGH0LDRgtGMINC40LPRgNGDXHJcbiAgICBjcmVhdGVRdWl6KHdvcmRzLCBjb3VudFF1ZXN0aW9ucykge1xyXG4gICAgICAgIGlmICh3b3Jkcy5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9ICdTZWxlY3QgTGV2ZWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdGVzdHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgY29uc3QgY291bnQgPSB3b3Jkcy5sZW5ndGggPCBjb3VudFF1ZXN0aW9ucyA/IHdvcmRzLmxlbmd0aCA6IGNvdW50UXVlc3Rpb25zO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAodGVzdHMubGVuZ3RoIDwgY291bnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSB3b3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3b3Jkcy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goY29ycmVjdEFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAob3B0aW9ucy5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29yZCA9IHdvcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdvcmRzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh3b3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucy5maWx0ZXIoKGl0ZW0sIGluZGV4LCBhcnIpID0+IGFyci5pbmRleE9mKGl0ZW0pID09PSBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucy5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9IG5ldyBBdWRpb1F1ZXN0aW9uKG9wdGlvbnMsIGNvcnJlY3RBbnN3ZXIsIGlkKTtcclxuICAgICAgICAgICAgICAgIHRlc3QucmVuZGVyQXVkaW9UZXN0VmlldygpO1xyXG4gICAgICAgICAgICAgICAgaWQgKz0gMTtcclxuICAgICAgICAgICAgICAgIHRlc3RzLnB1c2godGVzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hdWRpb1Rlc3RzID0gdGVzdHM7XHJcbiAgICAgICAgICAgIHRoaXMuUXVlc3Rpb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSAnR2FtZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQW5zd2VyKGFuc3dlcikge1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvVGVzdCA9IHRoaXMuYXVkaW9UZXN0c1t0aGlzLmN1cnJlbnRRdWVzdGlvbl07XHJcbiAgICAgICAgaWYgKCFhdWRpb1Rlc3QuaXNBbnN3ZXJlZCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhdWRpb1Rlc3QuY29ycmVjdEFuc3dlci53b3JkVHJhbnNsYXRlID09PSBhbnN3ZXI7XHJcbiAgICAgICAgICAgIGF1ZGlvVGVzdC5pc0NvcnJlY3QgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcucmVuZGVyQW5zd2VyUmVzdWx0KHJlc3VsdCwgYW5zd2VyLCBhdWRpb1Rlc3QuY29ycmVjdEFuc3dlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF1ZGlvVGVzdC5pc0Fuc3dlcmVkID0gJ1llcyc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXVkaW9Nb2RlbDtcclxuIiwiaW1wb3J0IEFwaSBmcm9tICcuLi8uLi9BcGknO1xyXG5jbGFzcyBBdWRpb1F1ZXN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGNvcnJlY3RBbnN3ZXIsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5pc0NvcnJlY3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFwaSA9IG5ldyBBcGkoKTtcclxuICAgICAgICB0aGlzLmF1ZGlvVGVzdFZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmlzQW5zd2VyZWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEFuc3dlciA9IGNvcnJlY3RBbnN3ZXI7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJWaWV3ID0gdGhpcy5yZW5kZXJBbnN3ZXJWaWV3KGNvcnJlY3RBbnN3ZXIpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQXVkaW9UZXN0VmlldygpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQW5zd2VyVmlldyhjb3JyZWN0QW5zd2VyKSB7XHJcbiAgICAgICAgY29uc3QgZGl2QW5zd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgZGl2YXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZhdWRpby5jbGFzc05hbWUgPSAnYXVkaW8taWNvbic7XHJcbiAgICAgICAgZGl2YXVkaW8uc2V0QXR0cmlidXRlKCdhdWRpbycsIGAke3RoaXMuYXBpLmJhc2VVcmx9LyR7Y29ycmVjdEFuc3dlci5hdWRpb31gKTtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgYXVkaW8uc3JjID0gYCR7dGhpcy5hcGkuYmFzZVVybH0vJHtjb3JyZWN0QW5zd2VyLmF1ZGlvfWA7XHJcbiAgICAgICAgZGl2YXVkaW8uYXBwZW5kQ2hpbGQoYXVkaW8pO1xyXG4gICAgICAgIHRoaXMuYXVkaW9BbnN3ZXIgPSBkaXZhdWRpbztcclxuICAgICAgICByZXR1cm4gZGl2QW5zd2VyO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQXVkaW9UZXN0VmlldygpIHtcclxuICAgICAgICBjb25zdCBkaXZRdWl6Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2UXVpekNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGl2LXF1aXotY29udGFpbmVyJztcclxuICAgICAgICBkaXZRdWl6Q29udGFpbmVyLmlkID0gdGhpcy5pZC50b1N0cmluZygpO1xyXG4gICAgICAgIC8vIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBkaXZQbGF5ID0gdGhpcy5hdWRpb0Fuc3dlcjtcclxuICAgICAgICBjb25zdCBxdWVzaW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcXVlc2lvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAncXVlc2lvbi1jb250YWluZXInO1xyXG4gICAgICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBuZXh0QnV0dG9uLmlubmVyVGV4dCA9ICfQn9GA0L7Qv9GD0YHRgtC40YLRjCAoU3BhY2UpJztcclxuICAgICAgICBuZXh0QnV0dG9uLmlkID0gJ25leHQtcXVlc3Rpb24tYnV0dG9uJztcclxuICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTmFtZSA9ICduZXh0LXF1ZXN0aW9uLWJ1dHRvbic7XHJcbiAgICAgICAgcXVlc2lvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZQbGF5KTtcclxuICAgICAgICBkaXZRdWl6Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXNpb25Db250YWluZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ2dhbWUtYnV0dG9uIG9wdGlvbic7XHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRoaXMub3B0aW9uc1tpXS53b3JkVHJhbnNsYXRlO1xyXG4gICAgICAgICAgICBjb25zdCBkaXZPcHRpb25ncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRpdk9wdGlvbmdyaWQuY2xhc3NOYW1lID0gJ2Rpdi1vcHRpb24tZ3JpZCc7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwYW5OdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHNwYW5OdW1iZXIudGV4dENvbnRlbnQgPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwYW5WYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgc3BhblZhbHVlLmNsYXNzTmFtZSA9ICdzcGFuLXZhbHVlJztcclxuICAgICAgICAgICAgc3BhblZhbHVlLnRleHRDb250ZW50ID0gdGhpcy5vcHRpb25zW2ldLndvcmRUcmFuc2xhdGU7XHJcbiAgICAgICAgICAgIGRpdk9wdGlvbmdyaWQuYXBwZW5kKHNwYW5OdW1iZXIsIHNwYW5WYWx1ZSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChkaXZPcHRpb25ncmlkKTtcclxuICAgICAgICAgICAgcXVlc2lvbkNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcXVlc2lvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXh0QnV0dG9uKTtcclxuICAgICAgICB0aGlzLmF1ZGlvVGVzdFZpZXcgPSBkaXZRdWl6Q29udGFpbmVyO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF1ZGlvUXVlc3Rpb247XHJcbiIsImltcG9ydCAnLi9hdWRpby5jc3MnO1xyXG5pbXBvcnQgJy4vbW9kYWwuY3NzJztcclxuaW1wb3J0IEFwaSBmcm9tICcuLi8uLi9BcGknO1xyXG5pbXBvcnQgKiBhcyBtb2RhbFJlc3VsdCBmcm9tICcuL21vZGFsLWNvbnRlbnQnO1xyXG5jbGFzcyBBdWRpb1ZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmFwaSA9IG5ldyBBcGkoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclZpZXcoKTtcclxuICAgIH1cclxuICAgIHJlbmRlclZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdhdWRpby1jYWxsLWNvbnRhaW5lcic7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uTmV3R2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbk5ld0dhbWUuaW5uZXJUZXh0ID0gJ9Cd0L7QstCw0Y8g0LjQs9GA0LAgKE4pJztcclxuICAgICAgICBidXR0b25OZXdHYW1lLmlkID0gJ25ldy1nYW1lJztcclxuICAgICAgICBidXR0b25OZXdHYW1lLmNsYXNzTmFtZSA9ICduZXctZ2FtZS1idXR0b24nO1xyXG4gICAgICAgIGNvbnN0IGRpdkJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZCdXR0b25zQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdidXR0b25zLWNvbnRhaW5lcic7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbk5ld0dhbWUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gYGdhbWUtYnV0dG9uIGwke2l9YDtcclxuICAgICAgICAgICAgYnV0dG9uLnZhbHVlID0gKGkgLSAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gYNCj0YDQvtCy0LXQvdGMICR7aX1gO1xyXG4gICAgICAgICAgICBkaXZCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxldmVsU2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxldmVsU2VsZWN0TGFiZWwuaW5uZXJUZXh0ID0gJ9CS0YvQsdC10YDQuNGC0LUg0YPRgNC+0LLQtdC90Ywg0YHQu9C+0LbQvdC+0YHRgtC4JztcclxuICAgICAgICBjb25zdCBkaXZEaWZmaWN1bHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2RGlmZmljdWx0eS5jbGFzc05hbWUgPSAnZGlmLWNvbnRhaW5lciBoaWRkZW4nO1xyXG4gICAgICAgIGRpdkRpZmZpY3VsdHkuYXBwZW5kKGxldmVsU2VsZWN0TGFiZWwsIGRpdkJ1dHRvbnNDb250YWluZXIpO1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgLy8gcHJvZ3Jlc3NCYXIuaW5uZXJIVE1MID0gJzxkaXYgaWQ9XCJsb2FkaW5nXCIgIGNsYXNzPVwibG9hZGluZ1wiPjwvZGl2Pic7XHJcbiAgICAgICAgY29uc3QgaW5uZXJkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbm5lcmRpdi5jbGFzc05hbWUgPSAnbG9hZGluZyc7XHJcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gJ2dhbWUtcHJvZ3Jlc3MtYmFyIGhpZGRlbic7XHJcbiAgICAgICAgcHJvZ3Jlc3NCYXIuaWQgPSAnYXVkaW8tcHJvZ3Jlc3MtYmFyJztcclxuICAgICAgICBwcm9ncmVzc0Jhci5hcHBlbmRDaGlsZChpbm5lcmRpdik7XHJcbiAgICAgICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ2dhbWUtcmVzdWx0IGhpZGRlbic7XHJcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gbW9kYWxSZXN1bHQubW9kYWxIdG1sO1xyXG4gICAgICAgIGdhbWVDb250YWluZXIuY2xhc3NOYW1lID0gJ2dhbWUtY29udGFpbmVyJztcclxuICAgICAgICBnYW1lQ29udGFpbmVyLmFwcGVuZChkaXZEaWZmaWN1bHR5LCBwcm9ncmVzc0Jhciwgc3RhdHVzQ29udGFpbmVyKTtcclxuICAgICAgICAvLyBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcclxuICAgICAgICAvLyBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXR1c0NvbnRhaW5lcik7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGdhbWVDb250YWluZXIpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gZGl2O1xyXG4gICAgfVxyXG4gICAgc2hvd0dhbWVSZXN1bHQoYXVkaW9UZXN0cykge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmdhbWUtcmVzdWx0JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBjb25zdCBjb3JyZWN0ZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuc3dlci1jb250YWluZXItY29ycmVjdCcpO1xyXG4gICAgICAgIGNvbnN0IHdyb25nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuc3dlci1jb250YWluZXItd3JvbmcnKTtcclxuICAgICAgICBjb3JyZWN0ZGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHdyb25nRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IGNvcnJlY3RzID0gYXVkaW9UZXN0cy5maWx0ZXIoKHApID0+IHAuaXNDb3JyZWN0KTtcclxuICAgICAgICBjb25zdCB3cm9uZ3MgPSBhdWRpb1Rlc3RzLmZpbHRlcigocCkgPT4gIXAuaXNDb3JyZWN0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdyb25ncy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBkaXZSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3QgZGl2YXVkaW9yZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2YXVkaW9yZXN1bHQuY2xhc3NOYW1lID0gJ2F1ZGlvLWljb24nO1xyXG4gICAgICAgICAgICBjb25zdCBhdWRpb3Jlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgICAgIGF1ZGlvcmVzdWx0LnNyYyA9IGAke3RoaXMuYXBpLmJhc2VVcmx9LyR7d3JvbmdzW2ldLmNvcnJlY3RBbnN3ZXIuYXVkaW99YDtcclxuICAgICAgICAgICAgZGl2YXVkaW9yZXN1bHQuYXBwZW5kQ2hpbGQoYXVkaW9yZXN1bHQpO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkVHJhbnNsYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGRhc2guaW5uZXJUZXh0ID0gJ+KAlCc7XHJcbiAgICAgICAgICAgIHdvcmQuaW5uZXJUZXh0ID0gd3JvbmdzW2ldLmNvcnJlY3RBbnN3ZXIud29yZDtcclxuICAgICAgICAgICAgd29yZFRyYW5zbGF0aW9uLmlubmVyVGV4dCA9IHdyb25nc1tpXS5jb3JyZWN0QW5zd2VyLndvcmRUcmFuc2xhdGU7XHJcbiAgICAgICAgICAgIGRpdlJlc3VsdC5hcHBlbmQoZGl2YXVkaW9yZXN1bHQsIHdvcmQsIGRhc2gsIHdvcmRUcmFuc2xhdGlvbik7XHJcbiAgICAgICAgICAgIHdyb25nRGl2LmFwcGVuZENoaWxkKGRpdlJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ycmVjdHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgZGl2UmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdmF1ZGlvcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRpdmF1ZGlvcmVzdWx0LmNsYXNzTmFtZSA9ICdhdWRpby1pY29uJztcclxuICAgICAgICAgICAgY29uc3QgYXVkaW9yZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgICAgICBhdWRpb3Jlc3VsdC5zcmMgPSBgJHt0aGlzLmFwaS5iYXNlVXJsfS8ke2NvcnJlY3RzW2ldLmNvcnJlY3RBbnN3ZXIuYXVkaW99YDtcclxuICAgICAgICAgICAgZGl2YXVkaW9yZXN1bHQuYXBwZW5kQ2hpbGQoYXVkaW9yZXN1bHQpO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkVHJhbnNsYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGRhc2guaW5uZXJUZXh0ID0gJ+KAlCc7XHJcbiAgICAgICAgICAgIHdvcmQuaW5uZXJUZXh0ID0gY29ycmVjdHNbaV0uY29ycmVjdEFuc3dlci53b3JkO1xyXG4gICAgICAgICAgICB3b3JkVHJhbnNsYXRpb24uaW5uZXJUZXh0ID0gY29ycmVjdHNbaV0uY29ycmVjdEFuc3dlci53b3JkVHJhbnNsYXRlO1xyXG4gICAgICAgICAgICBkaXZSZXN1bHQuYXBwZW5kKGRpdmF1ZGlvcmVzdWx0LCB3b3JkLCBkYXNoLCB3b3JkVHJhbnNsYXRpb24pO1xyXG4gICAgICAgICAgICBjb3JyZWN0ZGl2LmFwcGVuZENoaWxkKGRpdlJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zcGFuLXdyb25nJykuaW5uZXJUZXh0ID0gYNCd0LXQstC10YDQvdGL0LUg0L7RgtCy0LXRgtGLICgke3dyb25ncy5sZW5ndGh9KSA6IGA7XHJcbiAgICAgICAgdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXNwYW4tY29ycmVjdCcpLmlubmVyVGV4dCA9IGDQktC10YDQvdGL0LUg0L7RgtCy0LXRgtGLICgke2NvcnJlY3RzLmxlbmd0aH0pIDpgO1xyXG4gICAgfVxyXG4gICAgLy8gcmVuZGVyUmVzdWx0V2luZG93KCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIC8vIH1cclxuICAgIHNob3dMZXZlbFNlbGVjdGlvbigpIHtcclxuICAgICAgICB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmRpZi1jb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIHNob3dRdWVzdGlvbihhdWRpb1Rlc3RWaWV3KSB7XHJcbiAgICAgICAgY29uc3QgcXVzdGlvbkNvbnRhaW5lciA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZGl2LXF1aXotY29udGFpbmVyJyk7XHJcbiAgICAgICAgaWYgKHF1c3Rpb25Db250YWluZXIpIHtcclxuICAgICAgICAgICAgcXVzdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBhdWRpb1Rlc3RWaWV3LmlubmVySFRNTDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5hcHBlbmRDaGlsZChhdWRpb1Rlc3RWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGl2UGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1pY29uJyk7XHJcbiAgICAgICAgY29uc3QgYXVkaW8gPSBkaXZQbGF5ID09PSBudWxsIHx8IGRpdlBsYXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpdlBsYXkuZmlyc3RDaGlsZDtcclxuICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICB9XHJcbiAgICBzaG93RGlmZmljdWx0eVNlbGVjdGlvbigpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgKF9hID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5kaWYtY29udGFpbmVyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIGhpZGVEaWZmaWN1bHR5U2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmRpZi1jb250YWluZXInKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgc2hvd0dhbWUoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZGl2LXF1aXotY29udGFpbmVyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIGhpZGVHYW1lKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmRpdi1xdWl6LWNvbnRhaW5lcicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICBoaWRlUHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1wcm9ncmVzcy1iYXInKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgc2hvd1Byb2dyZXNzQmFyKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmdhbWUtcHJvZ3Jlc3MtYmFyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIHNob3dSZXN1bHRzKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmdhbWUtcmVzdWx0JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIGhpZGVSZXN1bHRzKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmdhbWUtcmVzdWx0JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICBjb25zdCBjb3JyZWN0ZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuc3dlci1jb250YWluZXItY29ycmVjdCcpO1xyXG4gICAgICAgIGNvbnN0IHdyb25nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuc3dlci1jb250YWluZXItd3JvbmcnKTtcclxuICAgICAgICBjb3JyZWN0ZGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHdyb25nRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlUHJvZ3Jlc3NCYXIobG9hZGluZykge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpO1xyXG4gICAgICAgIGRpdi5zdHlsZS53aWR0aCA9IGAke2xvYWRpbmd9JWA7XHJcbiAgICB9XHJcbiAgICByZW5kZXJBbnN3ZXJSZXN1bHQocmVzdWx0LCBhbnN3ZXIsIGNvcnJlY3RBbnN3ZXIpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb24nKTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCcuLi8uLi9hc3NldHMvYW5zd2VyLWNvcnJlY3Qud2F2Jyk7XHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCcuLi8uLi9hc3NldHMvYW5zd2VyLXdyb25nLndhdicpO1xyXG4gICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBvcHRpb25zW2ldO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5zcGFuLXZhbHVlJykuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICBpZiAodGV4dCA9PT0gY29ycmVjdEFuc3dlci53b3JkVHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dCA9PT0gYW5zd2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3dyb25nJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmV4dEJ1dHRvbiA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcjbmV4dC1xdWVzdGlvbi1idXR0b24nKTtcclxuICAgICAgICBuZXh0QnV0dG9uLmlubmVyVGV4dCA9ICfQlNCw0LvQtdC1IChTcGFjZSknO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlTmF2S2V5cyhwcmVzc2VkS2V5KSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICB0aGlzLmhhbmRsZUtleXNMZXZlbChwcmVzc2VkS2V5KTtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGkgPSBidXR0b25zLmxlbmd0aDtcclxuICAgICAgICBpZiAocHJlc3NlZEtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IHByZXNzZWRLZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRidXR0b24gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZm9jdXNlZGJ1dHRvbi50YWdOYW1lO1xyXG4gICAgICAgICAgICBpZiAobmFtZSAhPT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNbMF0uZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNJbmRleCA9IHRoaXMuZm9jdXNJbmRleCA9PT0gaSAtIDEgPyB0aGlzLmZvY3VzSW5kZXggOiAodGhpcy5mb2N1c0luZGV4ICs9IDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmID0gKF9hID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgICAgIGlmICgoZGlmID09PSBudWxsIHx8IGRpZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGlmLmNsYXNzTmFtZSkgPT09ICdkaWYtY29udGFpbmVyIGhpZGRlbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYnV0dG9uc1t0aGlzLmZvY3VzSW5kZXggLSAxXS5jbGFzc05hbWUuaW5jbHVkZXMoJ2dhbWUtYnV0dG9uIGwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzSW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidXR0b25zW3RoaXMuZm9jdXNJbmRleF0uZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJlc3NlZEtleSA9PT0gJ0Fycm93TGVmdCcgfHwgcHJlc3NlZEtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRidXR0b24gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZm9jdXNlZGJ1dHRvbi50YWdOYW1lO1xyXG4gICAgICAgICAgICBpZiAobmFtZSAhPT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNbMF0uZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNJbmRleCA9IHRoaXMuZm9jdXNJbmRleCA9PT0gMCA/ICh0aGlzLmZvY3VzSW5kZXggPSAwKSA6ICh0aGlzLmZvY3VzSW5kZXggLT0gMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWYgPSAoX2IgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAgICAgaWYgKChkaWYgPT09IG51bGwgfHwgZGlmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaWYuY2xhc3NOYW1lKSA9PT0gJ2RpZi1jb250YWluZXIgaGlkZGVuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChidXR0b25zW3RoaXMuZm9jdXNJbmRleF0uY2xhc3NOYW1lLmluY2x1ZGVzKCdnYW1lLWJ1dHRvbiBsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c0luZGV4IC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1t0aGlzLmZvY3VzSW5kZXhdLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zW3RoaXMuZm9jdXNJbmRleF0uZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJlc3NlZEtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkYnV0dG9uID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZvY3VzZWRidXR0b24udGFnTmFtZTtcclxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkYnV0dG9uLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVLZXlzTGV2ZWwocHJlc3NlZEtleSkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHByZXNzZWRLZXkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoa2V5ID09PSAnbicpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3R2FtZSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcubmV3LWdhbWUtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIG5ld0dhbWUuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ2EnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXlHYW1lID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWFnYWluLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICBwbGF5R2FtZS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTnVtYmVyKGtleSkgPiAwICYmIE51bWJlcihrZXkpIDw9IDcpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKGAubCR7a2V5fWApO1xyXG4gICAgICAgICAgICBkaWZmLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUtleXNPcHRpb24ocHJlc3NlZEtleSkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHByZXNzZWRLZXkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoa2V5ID09PSAnbicpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3R2FtZSA9IHRoaXMudmlldy5xdWVyeVNlbGVjdG9yKCcubmV3LWdhbWUtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIG5ld0dhbWUuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ2EnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXlHYW1lID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWFnYWluLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICBwbGF5R2FtZS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTnVtYmVyKGtleSkgPiAwICYmIE51bWJlcihrZXkpIDwgNykge1xyXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb24nKVtOdW1iZXIoa2V5KSAtIDFdO1xyXG4gICAgICAgICAgICBkaWZmLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXkgPT09ICcgJykge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcignLm5leHQtcXVlc3Rpb24tYnV0dG9uJykuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlUHJlc3NLZXkoa2V5KSB7XHJcbiAgICAgICAgaWYgKFsnbicsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJ2EnLCAnICddLmZpbmQoKHApID0+IHAgPT09IGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlmID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5kaWYtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGlmICgoZGlmID09PSBudWxsIHx8IGRpZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGlmLmNsYXNzTmFtZSkgPT09ICdkaWYtY29udGFpbmVyJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVLZXlzTGV2ZWwoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5c09wdGlvbihrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTmF2S2V5cyhrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdWRpb1ZpZXc7XHJcbiIsImV4cG9ydCBjb25zdCBtb2RhbEh0bWwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuPHNwYW4gY2xhc3M9XCJtb2RhbC1jbG9zZVwiPiZ0aW1lczs8L3NwYW4+ICBcclxuPGRpdiBjbGFzcz1cImRpdi1yZXN1bHQtZmxleFwiPlxyXG48c3Bhbj7QoNC10LfRg9C70YzRgtCw0YLRiyDQuNCz0YDRizwvU3Bhbj5cclxuIDxzcGFuIGNsYXNzPVwiZ2FtZS1zcGFuLXdyb25nXCI+0J3QtdCy0LXRgNC90YvQtSDQvtGC0LLQtdGC0Ys6PC9zcGFuPlxyXG4gPGRpdiBjbGFzcz1cImFuc3dlci1jb250YWluZXItd3JvbmdcIj48L2Rpdj5cclxuIDxzcGFuIGNsYXNzID1cImdhbWUtc3Bhbi1jb3JyZWN0XCI+0J/RgNCw0LLQuNC70YzQvdGL0LUg0L7RgtCy0LXRgtGLOjwvc3Bhbj5cclxuIDxkaXYgY2xhc3M9XCJhbnN3ZXItY29udGFpbmVyLWNvcnJlY3RcIj48L2Rpdj5cclxuPC9kaXY+ICAgIFxyXG48YnV0dG9uIGlkPVwicGxheS1hZ2FpblwiIGNsYXNzPVwicGxheS1hZ2Fpbi1idXR0b25cIj4g0JjQs9GA0LDRgtGMINC10YnQtSDRgNCw0LcgKEEpIDwvYnV0dG9uPlxyXG48L2Rpdj5gO1xyXG5leHBvcnQgZGVmYXVsdCBtb2RhbEh0bWw7XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCBBdXRoVmlldyBmcm9tICcuL2F1dGgtdmlldyc7XHJcbmltcG9ydCBBdXRoTW9kZWwgZnJvbSAnLi9hdXRoLW1vZGVsJztcclxuaW1wb3J0IEFwcGxpY2F0aW9uQ29udG9sbGVyIGZyb20gJy4uL2FwcGxpY2F0aW9uLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL0FwcCc7XHJcbmNsYXNzIEF1dGhDb250cm9sbGVyIGV4dGVuZHMgQXBwbGljYXRpb25Db250b2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNldFZpZXcoKTtcclxuICAgIH1cclxuICAgIHNldFZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoTW9kZWwgPSBuZXcgQXV0aE1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlVmlldyA9IG5ldyBBdXRoVmlldygpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xyXG4gICAgc2lnbkluVXNlcih1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgeWllbGQgdGhpcy5hdXRoTW9kZWxcclxuICAgICAgICAgICAgICAgIC5zaWduSW5Vc2VyKHVzZXIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0LnN0YXR1c30gJHtyZXN1bHQuc3RhdHVzVGV4dH1gO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IEFwcC5zaWduSW4oZGF0YSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnBhZ2VWaWV3LnZpZXdcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5zaWduLWluLWJ1dHRvbicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYiwgX2M7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gKChfYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1pbnB1dCcpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudmFsdWUpIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9ICgoX2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtaW5wdXQnKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnZhbHVlKSB8fCAnJztcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IHsgZW1haWwsIHBhc3N3b3JkIH07XHJcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuc2lnbkluVXNlcih1c2VyKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRyb2xsZXI7XHJcbiIsImltcG9ydCBBcGkgZnJvbSAnLi4vLi4vQXBpJztcclxuY2xhc3MgQXV0aE1vZGVsIGV4dGVuZHMgQXBpIHtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdXRoTW9kZWw7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL0FwcCc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2F1dGhvcmlzYXRpb24uY3NzJztcclxuaW1wb3J0IHsgZW1haWwsIGhhdmVOb3RZZXRBY2NvdW50VGV4dCwgcGFzc3dvcmQsIHNpZ25JblRpdGxlLCBzaWduVXBCdXR0b25UZXh0LCB1cHBlclNpZ25JbkJ1dHRvblRleHQsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IEFwcGxpY2F0aW9uVmlldyBmcm9tICcuLi9hcHBsaWNhdGlvbi12aWV3JztcclxuY2xhc3MgQXV0aFZpZXcgZXh0ZW5kcyBBcHBsaWNhdGlvblZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlbmRlckF1dGhCbG9jaygpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQXV0aEJsb2NrKCkge1xyXG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMudmlldy5jbGFzc0xpc3QuYWRkKCdhdXRob3Jpc2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnYXV0aC10aXRsZScpO1xyXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHNpZ25JblRpdGxlO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGVtYWlsSW5wdXQuY2xhc3NMaXN0LmFkZCgnZW1haWwtaW5wdXQnKTtcclxuICAgICAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xyXG4gICAgICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGVtYWlsKTtcclxuICAgICAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29uJyk7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dC5jbGFzc0xpc3QuYWRkKCdwYXNzd29yZC1pbnB1dCcpO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGFzc3dvcmQpO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb24nKTtcclxuICAgICAgICBjb25zdCBzaWduSW5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBzaWduSW5CdXR0b24uY2xhc3NMaXN0LmFkZCgnc2lnbi1pbi1idXR0b24nKTtcclxuICAgICAgICBzaWduSW5CdXR0b24uaW5uZXJUZXh0ID0gdXBwZXJTaWduSW5CdXR0b25UZXh0O1xyXG4gICAgICAgIGNvbnN0IGhhdmVOb3RZZXRBY2NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGF2ZU5vdFlldEFjY291bnQuY2xhc3NMaXN0LmFkZCgnaGF2ZS1ub3QteWV0LWFjY291bnQnKTtcclxuICAgICAgICBjb25zdCBoYXZlTm90WWV0QWNjb3VudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgaGF2ZU5vdFlldEFjY291bnRTcGFuLmNsYXNzTGlzdC5hZGQoJ2hhdmUtbm90LXlldC1hY2NvdW50LXNwYW4nKTtcclxuICAgICAgICBoYXZlTm90WWV0QWNjb3VudFNwYW4uaW5uZXJUZXh0ID0gaGF2ZU5vdFlldEFjY291bnRUZXh0O1xyXG4gICAgICAgIGNvbnN0IGhhdmVOb3RZZXRBY2NvdW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgaGF2ZU5vdFlldEFjY291bnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGF2ZS1ub3QteWV0LWFjY291bnQtYnV0dG9uJyk7XHJcbiAgICAgICAgaGF2ZU5vdFlldEFjY291bnRCdXR0b24uaW5uZXJUZXh0ID0gc2lnblVwQnV0dG9uVGV4dDtcclxuICAgICAgICBoYXZlTm90WWV0QWNjb3VudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFwcC5yZW5kZXJSZWdQYWdlKTtcclxuICAgICAgICBoYXZlTm90WWV0QWNjb3VudC5hcHBlbmQoaGF2ZU5vdFlldEFjY291bnRTcGFuLCBoYXZlTm90WWV0QWNjb3VudEJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy52aWV3LmFwcGVuZCh0aXRsZSwgZW1haWxJbnB1dCwgcGFzc3dvcmRJbnB1dCwgc2lnbkluQnV0dG9uLCBoYXZlTm90WWV0QWNjb3VudCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFZpZXc7XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvY2FyZHMuY3NzJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvbGV2ZWwtYnV0dG9ucy5jc3MnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL3BhZ2luYXRpb24uY3NzJztcclxuaW1wb3J0IEFwcGxpY2F0aW9uQ29udG9sbGVyIGZyb20gJy4uL2FwcGxpY2F0aW9uLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCb29rUGFnZVZpZXcgfSBmcm9tICcuL2Jvb2stdmlldyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IENhcmRWaWV3IGZyb20gJy4vY2FyZC12aWV3JztcclxuaW1wb3J0IEJvb2tNb2RlbCBmcm9tICcuL2Jvb2stbW9kZWwnO1xyXG5pbXBvcnQgeyBudW1iZXJPZkxldmVscywgYnRuSGFyZFRleHQsIGJ0bkxldmVsVGV4dCwgbnVtYmVyT2ZQYWdlc0luTGV2ZWwsIHNwcmludEdhbWVOYW1lLCBhdWRpb0dhbWVOYW1lLCBleHRyYUdhbWVOYW1lLCBpY29uU3ByaW50U3JjLCBpY29uQXVkaW9HYW1lU3JjLCBpY29uRXh0cmFHYW1lU3JjLCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGRpc2FibGVBdWRpb0J0bnMsIGVuYWJsZUF1ZGlvQnRucywgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UsIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2Z1bmN0aW9ucyc7XHJcbmNsYXNzIEJvb2tDb250cm9sbGVyIGV4dGVuZHMgQXBwbGljYXRpb25Db250b2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBhZ2VWaWV3ID0gbmV3IEJvb2tQYWdlVmlldygpO1xyXG4gICAgICAgIHRoaXMuYm9va01vZGVsID0gbmV3IEJvb2tNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMDtcclxuICAgICAgICBpZiAoZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BhZ2VJbmZvJykpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQYWdlSW5mb0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRWaWV3KCk7XHJcbiAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgncGFnZUluZm8nLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHBhZ2VOYW1lOiAnYm9va1BhZ2UnLFxyXG4gICAgICAgICAgICBsZXZlbDogdGhpcy5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgc2V0VmlldygpIHtcclxuICAgICAgICB0aGlzLnBhZ2VWaWV3ID0gbmV3IEJvb2tQYWdlVmlldygpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMucGFnZVZpZXcudmlldztcclxuICAgICAgICB0aGlzLmxldmVscyA9IHRoaXMucGFnZVZpZXcubGV2ZWxzO1xyXG4gICAgICAgIHRoaXMuY2FyZHNMaXN0ID0gdGhpcy5wYWdlVmlldy5jYXJkc0xpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0gdGhpcy5wYWdlVmlldy5wYWdpbmF0aW9uO1xyXG4gICAgICAgIHRoaXMuZ2FtZUJ1dHRvbnMgPSB0aGlzLnBhZ2VWaWV3LmdhbWVCdXR0b25zO1xyXG4gICAgICAgIHRoaXMucmVuZGVyTGV2ZWxzQnRucygpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ2FyZHModGhpcy5jdXJyZW50TGV2ZWwsIHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUGFnaW5hdGlvbkJsb2NrKHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyR2FtZUJ1dHRvbnMoKTtcclxuICAgIH1cclxuICAgIHJlbmRlckNhcmRzKGdyb3VwLCBwYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkc0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmRzID0geWllbGQgdGhpcy5ib29rTW9kZWwuZ2V0V29yZHMoZ3JvdXAsIHBhZ2UpO1xyXG4gICAgICAgICAgICB3b3Jkcy5mb3JFYWNoKCh3b3JkSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkVmlldyh3b3JkSW5mbyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzTGlzdC5hcHBlbmQoY2FyZC52aWV3KTtcclxuICAgICAgICAgICAgICAgIGNhcmQudmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEJvb2tDb250cm9sbGVyLnNldEV2ZW50TGlzdGVuZXJzRm9yQ2FyZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyTGV2ZWxzQnRucygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1iZXJPZkxldmVsczsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IEJvb2tQYWdlVmlldy5jcmVhdGVFbGVtZW50QnlQYXJhbXMoJ2RpdicsICdsZXZlbCcpO1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChgbGV2ZWwtJHtpfWApO1xyXG4gICAgICAgICAgICBidG4uZGF0YXNldC5sZXZlbCA9IGAke2l9YDtcclxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuY3VycmVudExldmVsICsgMSkge1xyXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpID09PSBudW1iZXJPZkxldmVscykge1xyXG4gICAgICAgICAgICAgICAgYnRuLmlubmVyVGV4dCA9IGJ0bkhhcmRUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IGJ0bkxldmVsVGV4dDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsTnVtYmVyID0gQm9va1BhZ2VWaWV3LmNyZWF0ZUVsZW1lbnRCeVBhcmFtcygnc3BhbicsICdsZXZlbF9udW1iZXInKTtcclxuICAgICAgICAgICAgICAgIGxldmVsTnVtYmVyLmlubmVySFRNTCA9IGAmbmJzcCR7aX1gO1xyXG4gICAgICAgICAgICAgICAgYnRuLmFwcGVuZChsZXZlbE51bWJlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMubGV2ZWxCdG5IYW5kbGVyKGUpKTtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbHMuYXBwZW5kKGJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV2ZWxCdG5IYW5kbGVyKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgbGV2ZWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxldmVsJyk7XHJcbiAgICAgICAgICAgIGxldmVsQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBjb25zdCBncm91cCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmxldmVsKSAtIDE7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExldmVsID0gZ3JvdXA7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRzTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDYXJkcyhncm91cCwgdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnaW5hdGlvbkJsb2NrKGdyb3VwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgncGFnZUluZm8nLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHBhZ2VOYW1lOiAnYm9va1BhZ2UnLFxyXG4gICAgICAgICAgICBsZXZlbDogdGhpcy5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldEV2ZW50TGlzdGVuZXJzRm9yQ2FyZChlKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGNvbnN0IGVUYXJnZXRDbGFzc0xpc3QgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XHJcbiAgICAgICAgLy8gaWYgKGVUYXJnZXRDbGFzc0xpc3QuY29udGFpbnMoJ2hhcmRfX2J0bicpKSB7fVxyXG4gICAgICAgIC8vIGlmIChlVGFyZ2V0Q2xhc3NMaXN0LmNvbnRhaW5zKCdkb25lX19idG4nKSkge31cclxuICAgICAgICBpZiAoZVRhcmdldENsYXNzTGlzdC5jb250YWlucygnYXVkaW8taWNvbicpKSB7XHJcbiAgICAgICAgICAgIGRpc2FibGVBdWRpb0J0bnMoKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZElkID0gKF9hID0gZS50YXJnZXQuY2xvc2VzdCgnLmNhcmQnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlkO1xyXG4gICAgICAgICAgICBpZiAoY2FyZElkKSB7XHJcbiAgICAgICAgICAgICAgICBCb29rQ29udHJvbGxlci5wbGF5QXVkaW8oY2FyZElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBwbGF5QXVkaW8oY2FyZElkKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2NhcmRJZH1gKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3JBbGwoJ2F1ZGlvJyk7XHJcbiAgICAgICAgaWYgKHRyYWNrcykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdHJhY2tzWzBdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IHRyYWNrcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrc1t0cmFja3MubGVuZ3RoIC0gMV0ub25lbmRlZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUF1ZGlvQnRucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrc1tpXS5vbmVuZGVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tzW2kgKyAxXS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChfYikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ9CS0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjQtSDQvtGC0LrQu9C+0L3QtdC90L4uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXJQYWdpbmF0aW9uQmxvY2soZ3JvdXApIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZQYWdlc0luTGV2ZWw7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IEJvb2tQYWdlVmlldy5jcmVhdGVFbGVtZW50QnlQYXJhbXMoJ3AnLCAncGFnaW5hdGlvbi1lbGVtZW50Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5jdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYWdlLmlubmVyVGV4dCA9IGAke2kgKyAxfWA7XHJcbiAgICAgICAgICAgICAgICBwYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMucGFnZUJ0bkhhbmRsZXIoZSwgZ3JvdXAsIGkpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5hcHBlbmQocGFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHBhZ2VCdG5IYW5kbGVyKGUsIGdyb3VwLCBwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDYXJkcyhncm91cCwgcGFnZSk7XHJcbiAgICAgICAgY29uc3QgcGFnZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2luYXRpb24tZWxlbWVudCcpO1xyXG4gICAgICAgIHBhZ2VJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgncGFnZUluZm8nLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHBhZ2VOYW1lOiAnYm9va1BhZ2UnLFxyXG4gICAgICAgICAgICBsZXZlbDogdGhpcy5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyR2FtZUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3ByaW50R2FtZUxpbmsgPSBCb29rUGFnZVZpZXcuY3JlYXRlRWxlbWVudEJ5UGFyYW1zKCdkaXYnLCAnYnRuJyk7XHJcbiAgICAgICAgc3ByaW50R2FtZUxpbmsuY2xhc3NMaXN0LmFkZCgnYnRuX2NvbG9yZWQnKTtcclxuICAgICAgICBzcHJpbnRHYW1lTGluay5pbm5lclRleHQgPSBzcHJpbnRHYW1lTmFtZTtcclxuICAgICAgICBjb25zdCBpY29uU3ByaW50ID0gQm9va1BhZ2VWaWV3LmNyZWF0ZUVsZW1lbnRCeVBhcmFtcygnaW1nJywgJ2dhbWUtaWNvbicpO1xyXG4gICAgICAgIGljb25TcHJpbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uU3ByaW50U3JjKTtcclxuICAgICAgICBzcHJpbnRHYW1lTGluay5wcmVwZW5kKGljb25TcHJpbnQpO1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvR2FtZUxpbmsgPSBCb29rUGFnZVZpZXcuY3JlYXRlRWxlbWVudEJ5UGFyYW1zKCdkaXYnLCAnYnRuJyk7XHJcbiAgICAgICAgYXVkaW9HYW1lTGluay5jbGFzc0xpc3QuYWRkKCdidG5fY29sb3JlZCcpO1xyXG4gICAgICAgIGF1ZGlvR2FtZUxpbmsuaW5uZXJUZXh0ID0gYXVkaW9HYW1lTmFtZTtcclxuICAgICAgICBjb25zdCBpY29uQXVkaW9HYW1lID0gQm9va1BhZ2VWaWV3LmNyZWF0ZUVsZW1lbnRCeVBhcmFtcygnaW1nJywgJ2dhbWUtaWNvbicpO1xyXG4gICAgICAgIGljb25BdWRpb0dhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uQXVkaW9HYW1lU3JjKTtcclxuICAgICAgICBhdWRpb0dhbWVMaW5rLnByZXBlbmQoaWNvbkF1ZGlvR2FtZSk7XHJcbiAgICAgICAgY29uc3QgZXh0cmFHYW1lTGluayA9IEJvb2tQYWdlVmlldy5jcmVhdGVFbGVtZW50QnlQYXJhbXMoJ2RpdicsICdidG4nKTtcclxuICAgICAgICBleHRyYUdhbWVMaW5rLmNsYXNzTGlzdC5hZGQoJ2J0bl9jb2xvcmVkJyk7XHJcbiAgICAgICAgZXh0cmFHYW1lTGluay5pbm5lclRleHQgPSBleHRyYUdhbWVOYW1lO1xyXG4gICAgICAgIGNvbnN0IGljb25FeHRyYUdhbWUgPSBCb29rUGFnZVZpZXcuY3JlYXRlRWxlbWVudEJ5UGFyYW1zKCdpbWcnLCAnZ2FtZS1pY29uJyk7XHJcbiAgICAgICAgaWNvbkV4dHJhR2FtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb25FeHRyYUdhbWVTcmMpO1xyXG4gICAgICAgIGV4dHJhR2FtZUxpbmsucHJlcGVuZChpY29uRXh0cmFHYW1lKTtcclxuICAgICAgICB0aGlzLmdhbWVCdXR0b25zLmFwcGVuZChleHRyYUdhbWVMaW5rLCBhdWRpb0dhbWVMaW5rLCBzcHJpbnRHYW1lTGluayk7XHJcbiAgICB9XHJcbiAgICBnZXRQYWdlSW5mb0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZUluZm8gPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgncGFnZUluZm8nKTtcclxuICAgICAgICBjb25zdCB7IGxldmVsLCBwYWdlTnVtYmVyIH0gPSBwYWdlSW5mbztcclxuICAgICAgICBpZiAodHlwZW9mIGxldmVsID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgcGFnZU51bWJlciA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2VOdW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tDb250cm9sbGVyO1xyXG4iLCJpbXBvcnQgQXBpIGZyb20gJy4uLy4uL0FwaSc7XHJcbmNsYXNzIEJvb2tNb2RlbCBleHRlbmRzIEFwaSB7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQm9va01vZGVsO1xyXG4iLCJpbXBvcnQgQXBwbGljYXRpb25WaWV3IGZyb20gJy4uL2FwcGxpY2F0aW9uLXZpZXcnO1xyXG5leHBvcnQgY2xhc3MgQm9va1BhZ2VWaWV3IGV4dGVuZHMgQXBwbGljYXRpb25WaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBCb29rUGFnZVZpZXcuY3JlYXRlRWxlbWVudEJ5UGFyYW1zKCdkaXYnLCAnbGV2ZWxzJyk7XHJcbiAgICAgICAgdGhpcy5jYXJkc0xpc3QgPSBCb29rUGFnZVZpZXcuY3JlYXRlRWxlbWVudEJ5UGFyYW1zKCdkaXYnLCAnY2FyZHNfbGlzdCcpO1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IEJvb2tQYWdlVmlldy5jcmVhdGVFbGVtZW50QnlQYXJhbXMoJ2RpdicsICdwYWdpbmF0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQnV0dG9ucyA9IEJvb2tQYWdlVmlldy5jcmVhdGVFbGVtZW50QnlQYXJhbXMoJ2RpdicsICdnYW1lX19idXR0b25zJyk7XHJcbiAgICAgICAgdGhpcy52aWV3LmFwcGVuZCh0aGlzLmxldmVscywgdGhpcy5jYXJkc0xpc3QsIHRoaXMucGFnaW5hdGlvbiwgdGhpcy5nYW1lQnV0dG9ucyk7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICAgICAgdGhpcy5tYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX3dyYXBwZXInKTtcclxuICAgICAgICB0aGlzLm1haW5XcmFwcGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmZmJztcclxuICAgICAgICB0aGlzLmZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeScpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyZWF0ZUVsZW1lbnRCeVBhcmFtcyh0YWcsIGNsYXNzTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZSlcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VWaWV3O1xyXG4iLCJpbXBvcnQgeyBiYXNlVXJsLCBkb25lQnV0dG9uVGV4dCwgaGFyZEJ1dHRvblRleHQgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vQXBwJztcclxuY2xhc3MgQ2FyZFZpZXcge1xyXG4gICAgY29uc3RydWN0b3Iod29yZEluZm8pIHtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xyXG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMudmlldy5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICAgICAgdGhpcy52aWV3LmlkID0gd29yZEluZm8uaWQ7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nUHJvZ3Jlc3MgPSAyMDtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNhcmQod29yZEluZm8pO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvYWRpbmdTdGF0dXMobG9hZGluZykge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1Byb2dyZXNzID0gbG9hZGluZztcclxuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKHRoaXMubG9hZGluZ1Byb2dyZXNzKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhcmQod29yZEluZm8pIHtcclxuICAgICAgICBjb25zdCB3b3JkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgd29yZEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke3RoaXMuYmFzZVVybH0vJHt3b3JkSW5mby5pbWFnZX1gKTtcclxuICAgICAgICB3b3JkSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2NhcmQgcGhvdG8nKTtcclxuICAgICAgICB3b3JkSW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2ltZycpO1xyXG4gICAgICAgIGNvbnN0IHN0YXRGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHN0YXRGcmFtZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19zdGF0Jyk7XHJcbiAgICAgICAgc3RhdEZyYW1lLmlubmVySFRNTCA9ICc8c3Bhbj4zPC9zcGFuPiB8IDE3JztcclxuICAgICAgICBjb25zdCBjYXJkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmRUZXh0LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX3RleHQnKTtcclxuICAgICAgICBjb25zdCB3b3JkQmxvY2sgPSB0aGlzLmNyZWF0ZVdvcmRCbG9jayh3b3JkSW5mbyk7XHJcbiAgICAgICAgY29uc3QgY2FyZEJ1dHRvbnMgPSB0aGlzLmNyZWF0ZUNhcmRCdXR0b25zKCk7XHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSB0aGlzLmNyZWF0ZVdvcmRQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgIGlmICghQXBwLnVzZXIpIHtcclxuICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgc3RhdEZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGNhcmRCdXR0b25zLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBocmFzZXNCbG9jayA9IHRoaXMuY3JlYXRlUGhyYXNlc0Jsb2NrKHdvcmRJbmZvKTtcclxuICAgICAgICBjYXJkVGV4dC5hcHBlbmQod29yZEJsb2NrLCBjYXJkQnV0dG9ucywgcGhyYXNlc0Jsb2NrKTtcclxuICAgICAgICB0aGlzLnZpZXcuYXBwZW5kKHdvcmRJbWcsIHN0YXRGcmFtZSwgcHJvZ3Jlc3NCYXIsIGNhcmRUZXh0KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVdvcmRCbG9jayh3b3JkSW5mbykge1xyXG4gICAgICAgIGNvbnN0IHdvcmRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdvcmRCbG9jay5jbGFzc0xpc3QuYWRkKCd3b3JkJyk7XHJcbiAgICAgICAgY29uc3Qgd29yZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3Qgd29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB3b3JkLmNsYXNzTGlzdC5hZGQoJ3dvcmRfX2VuZ2xpc2gnKTtcclxuICAgICAgICB3b3JkLmlubmVyVGV4dCA9IGAke3dvcmRJbmZvLndvcmR9IGA7XHJcbiAgICAgICAgY29uc3Qgd29yZFRyYW5zY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgd29yZFRyYW5zY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnd29yZF9fdHJhbnNjcmlwdGlvbicpO1xyXG4gICAgICAgIHdvcmRUcmFuc2NyaXB0aW9uLmlubmVyVGV4dCA9IHdvcmRJbmZvLnRyYW5zY3JpcHRpb247XHJcbiAgICAgICAgY29uc3QgYnJlYWtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcclxuICAgICAgICBjb25zdCB3b3JkVHJhbnNsYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgd29yZFRyYW5zbGF0aW9uLmlubmVyVGV4dCA9IHdvcmRJbmZvLndvcmRUcmFuc2xhdGU7XHJcbiAgICAgICAgd29yZFRyYW5zbGF0aW9uLmNsYXNzTGlzdC5hZGQoJ3dvcmRfX3RyYW5zbGF0aW9uJyk7XHJcbiAgICAgICAgd29yZFRleHQuYXBwZW5kKHdvcmQsIHdvcmRUcmFuc2NyaXB0aW9uLCBicmVha0l0ZW0sIHdvcmRUcmFuc2xhdGlvbik7XHJcbiAgICAgICAgY29uc3QgYXVkaW9JY29uID0gdGhpcy5jcmVhdGVBdWRpb0Jsb2NrKHdvcmRJbmZvKTtcclxuICAgICAgICB3b3JkQmxvY2suYXBwZW5kKHdvcmRUZXh0LCBhdWRpb0ljb24pO1xyXG4gICAgICAgIHJldHVybiB3b3JkQmxvY2s7XHJcbiAgICB9XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXHJcbiAgICBjcmVhdGVXb3JkUHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpbm5lcmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlubmVyZGl2LmNsYXNzTmFtZSA9ICdwcm9ncmVzcy1sb2FkaW5nJztcclxuICAgICAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSAnY2FyZF9fcHJvZ3Jlc3MtYmFyJztcclxuICAgICAgICBwcm9ncmVzc0Jhci5pZCA9ICdjYXJkX19wcm9ncmVzcy1iYXInO1xyXG4gICAgICAgIHByb2dyZXNzQmFyLmFwcGVuZENoaWxkKGlubmVyZGl2KTtcclxuICAgICAgICByZXR1cm4gcHJvZ3Jlc3NCYXI7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVQcm9ncmVzc0Jhcihsb2FkaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gdGhpcy52aWV3LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1sb2FkaW5nJyk7XHJcbiAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gYCR7bG9hZGluZ30lYDtcclxuICAgIH1cclxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuICAgIGNyZWF0ZUNhcmRCdXR0b25zKCkge1xyXG4gICAgICAgIGNvbnN0IGNhcmRCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnY2FyZF9fYnV0dG9ucycpO1xyXG4gICAgICAgIGNvbnN0IGhhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBoYXJkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdjYXJkX19idG4nLCAnaGFyZF9fYnRuJyk7XHJcbiAgICAgICAgaGFyZEJ1dHRvbi5pbm5lclRleHQgPSBoYXJkQnV0dG9uVGV4dDtcclxuICAgICAgICBoYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYXJkQnRuSGFuZGxlcik7XHJcbiAgICAgICAgY29uc3QgZG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRvbmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2NhcmRfX2J0bicsICdkb25lX19idG4nKTtcclxuICAgICAgICBkb25lQnV0dG9uLmlubmVyVGV4dCA9IGRvbmVCdXR0b25UZXh0O1xyXG4gICAgICAgIGRvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvbmVCdG5IYW5kbGVyKTtcclxuICAgICAgICBjYXJkQnV0dG9ucy5hcHBlbmQoaGFyZEJ1dHRvbiwgZG9uZUJ1dHRvbik7XHJcbiAgICAgICAgcmV0dXJuIGNhcmRCdXR0b25zO1xyXG4gICAgfVxyXG4gICAgaGFyZEJ0bkhhbmRsZXIoZSkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZS50YXJnZXQuY2xvc2VzdCgnLmNhcmQnKTtcclxuICAgICAgICAgICAgY29uc3QgaGFyZEJ1dHRvbiA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBkb25lQnV0dG9uID0gaGFyZEJ1dHRvbi5uZXh0U2libGluZztcclxuICAgICAgICAgICAgc3dpdGNoICgoX2EgPSBoYXJkQnV0dG9uLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAn0YHQu9C+0LbQvdC+0LUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQgPT09IG51bGwgfHwgY2FyZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZCA9PT0gbnVsbCB8fCBjYXJkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hhcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBoYXJkQnV0dG9uLmlubmVyVGV4dCA9ICfQvdC10YHQu9C+0LbQvdC+0LUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmVCdXR0b24uaW5uZXJUZXh0ID0gJ9C40LfRg9GH0LXQvdC+JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ9C90LXRgdC70L7QttC90L7QtSc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZCA9PT0gbnVsbCB8fCBjYXJkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBoYXJkQnV0dG9uLmlubmVyVGV4dCA9ICfRgdC70L7QttC90L7QtSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZUJ1dHRvbi5pbm5lclRleHQgPSAn0LjQt9GD0YfQtdC90L4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRvbmVCdG5IYW5kbGVyKGUpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jYXJkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvbmVCdXR0b24gPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgaGFyZEJ1dHRvbiA9IGRvbmVCdXR0b24ucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKChfYSA9IGRvbmVCdXR0b24udGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICfQuNC30YPRh9C10L3Qvic6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZCA9PT0gbnVsbCB8fCBjYXJkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkID09PSBudWxsIHx8IGNhcmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmQuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmVCdXR0b24uaW5uZXJUZXh0ID0gJ9C/0L7Rg9GH0LjRgtGMJztcclxuICAgICAgICAgICAgICAgICAgICBoYXJkQnV0dG9uLmlubmVyVGV4dCA9ICfRgdC70L7QttC90L7QtSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICfQv9C+0YPRh9C40YLRjCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZCA9PT0gbnVsbCB8fCBjYXJkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lQnV0dG9uLmlubmVyVGV4dCA9ICfQuNC30YPRh9C10L3Qvic7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFyZEJ1dHRvbi5pbm5lclRleHQgPSAn0YHQu9C+0LbQvdC+0LUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNyZWF0ZVBocmFzZXNCbG9jayh3b3JkSW5mbykge1xyXG4gICAgICAgIGNvbnN0IHBocmFzZXNCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBocmFzZXNCbG9jay5jbGFzc0xpc3QuYWRkKCdwaHJhc2VzJyk7XHJcbiAgICAgICAgY29uc3QgcGhyYXNlRGVmaW5pdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBocmFzZURlZmluaXRpb24uY2xhc3NMaXN0LmFkZCgncGhyYXNlX19kZWZpbml0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgcGhyYXNlRGVmaW5pdGlvbkVuZ2xpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcGhyYXNlRGVmaW5pdGlvbkVuZ2xpc2guY2xhc3NMaXN0LmFkZCgncGhyYXNlX19kZWZpbml0aW9uX2VuZ2xpc2gnKTtcclxuICAgICAgICBwaHJhc2VEZWZpbml0aW9uRW5nbGlzaC5pbm5lckhUTUwgPSB3b3JkSW5mby50ZXh0TWVhbmluZztcclxuICAgICAgICBjb25zdCBwaHJhc2VEZWZpbml0aW9uUnVzc2lhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwaHJhc2VEZWZpbml0aW9uUnVzc2lhbi5jbGFzc0xpc3QuYWRkKCdwaHJhc2VfX2RlZmluaXRpb25fcnVzc2lhbicpO1xyXG4gICAgICAgIHBocmFzZURlZmluaXRpb25SdXNzaWFuLmlubmVySFRNTCA9IHdvcmRJbmZvLnRleHRNZWFuaW5nVHJhbnNsYXRlO1xyXG4gICAgICAgIHBocmFzZURlZmluaXRpb24uYXBwZW5kKHBocmFzZURlZmluaXRpb25FbmdsaXNoLCBwaHJhc2VEZWZpbml0aW9uUnVzc2lhbik7XHJcbiAgICAgICAgY29uc3QgcGhyYXNlRXhhbXBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBocmFzZUV4YW1wbGUuY2xhc3NMaXN0LmFkZCgncGhyYXNlX19leGFtcGxlJyk7XHJcbiAgICAgICAgY29uc3QgcGhyYXNlRXhhbXBsZUVuZ2xpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcGhyYXNlRXhhbXBsZUVuZ2xpc2guY2xhc3NMaXN0LmFkZCgncGhyYXNlX19leGFtcGxlX2VuZ2xpc2gnKTtcclxuICAgICAgICBwaHJhc2VFeGFtcGxlRW5nbGlzaC5pbm5lckhUTUwgPSB3b3JkSW5mby50ZXh0RXhhbXBsZTtcclxuICAgICAgICBjb25zdCBwaHJhc2VFeGFtcGxlUnVzc2lhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwaHJhc2VFeGFtcGxlUnVzc2lhbi5jbGFzc0xpc3QuYWRkKCdwaHJhc2VfX2V4YW1wbGVfcnVzc2lhbicpO1xyXG4gICAgICAgIHBocmFzZUV4YW1wbGVSdXNzaWFuLmlubmVySFRNTCA9IHdvcmRJbmZvLnRleHRFeGFtcGxlVHJhbnNsYXRlO1xyXG4gICAgICAgIHBocmFzZUV4YW1wbGUuYXBwZW5kKHBocmFzZUV4YW1wbGVFbmdsaXNoLCBwaHJhc2VFeGFtcGxlUnVzc2lhbik7XHJcbiAgICAgICAgcGhyYXNlc0Jsb2NrLmFwcGVuZChwaHJhc2VEZWZpbml0aW9uLCBwaHJhc2VFeGFtcGxlKTtcclxuICAgICAgICByZXR1cm4gcGhyYXNlc0Jsb2NrO1xyXG4gICAgfVxyXG4gICAgLyogZXNsaW50LWVuYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXHJcbiAgICBjcmVhdGVBdWRpb0Jsb2NrKHdvcmRJbmZvKSB7XHJcbiAgICAgICAgY29uc3QgYXVkaW9JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYXVkaW9JY29uLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLWljb24nKTtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgYXVkaW8uc2V0QXR0cmlidXRlKCdzcmMnLCBgJHt0aGlzLmJhc2VVcmx9LyR7d29yZEluZm8uYXVkaW99YCk7XHJcbiAgICAgICAgY29uc3QgYXVkaW9NZWFuaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICBhdWRpb01lYW5pbmcuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHt0aGlzLmJhc2VVcmx9LyR7d29yZEluZm8uYXVkaW9NZWFuaW5nfWApO1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvRXhhbXBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgYXVkaW9FeGFtcGxlLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7dGhpcy5iYXNlVXJsfS8ke3dvcmRJbmZvLmF1ZGlvRXhhbXBsZX1gKTtcclxuICAgICAgICBhdWRpb0ljb24uYXBwZW5kKGF1ZGlvLCBhdWRpb01lYW5pbmcsIGF1ZGlvRXhhbXBsZSk7XHJcbiAgICAgICAgcmV0dXJuIGF1ZGlvSWNvbjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYXJkVmlldztcclxuIiwiaW1wb3J0IEFwcGxpY2F0aW9uQ29udG9sbGVyIGZyb20gJy4uL2FwcGxpY2F0aW9uLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgTWFpblBhZ2VWaWV3IGZyb20gJy4vbWFpbi1wYWdlLXZpZXcnO1xyXG5pbXBvcnQgQXBpIGZyb20gJy4uLy4uL0FwaSc7XHJcbmNsYXNzIE1haW5QYWdlQ29udHJvbGxlciBleHRlbmRzIEFwcGxpY2F0aW9uQ29udG9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRWaWV3KCk7XHJcbiAgICB9XHJcbiAgICBzZXRWaWV3KCkge1xyXG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFwaSgpO1xyXG4gICAgICAgIHRoaXMucGFnZVZpZXcgPSBuZXcgTWFpblBhZ2VWaWV3KCk7XHJcbiAgICAgICAgLy8gdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZUNvbnRyb2xsZXI7XHJcbiIsImltcG9ydCBBcHBsaWNhdGlvblZpZXcgZnJvbSAnLi4vYXBwbGljYXRpb24tdmlldyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL21haW4tcGFnZS5jc3MnO1xyXG4vKiBwcmV0dGllci1pZ25vcmUgKi9cclxuaW1wb3J0IHsgbWFpblBhZ2VUZXh0LCBsZWFybkJ1dHRvblRleHQsIHBsYXlCdXR0b25UZXh0LCByc0xhbmcsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuLyogcHJldHRpZXItaWdub3JlICovXHJcbmNsYXNzIE1haW5QYWdlVmlldyBleHRlbmRzIEFwcGxpY2F0aW9uVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyTWFpblBhZ2UoKTtcclxuICAgIH1cclxuICAgIHJlbmRlck1haW5QYWdlKCkge1xyXG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMudmlldy5jbGFzc0xpc3QuYWRkKCdtYWluLXBhZ2UnKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWFpbi1wYWdlX190aXRsZScpO1xyXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHJzTGFuZztcclxuICAgICAgICBjb25zdCBpbnRyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbnRyb1RleHQuY2xhc3NMaXN0LmFkZCgnbWFpbi1wYWdlX190ZXh0Jyk7XHJcbiAgICAgICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDEuaW5uZXJUZXh0ID0gbWFpblBhZ2VUZXh0O1xyXG4gICAgICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQyLmlubmVyVGV4dCA9IG1haW5QYWdlVGV4dDtcclxuICAgICAgICBpbnRyb1RleHQuYXBwZW5kKHRleHQxLCB0ZXh0Mik7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xyXG4gICAgICAgIGNvbnN0IGxlYXJuQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbGVhcm5CdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuX2ludHJvJywgJ2J0bicsICdidG5fY29sb3JlZCcpO1xyXG4gICAgICAgIGxlYXJuQnV0dG9uLmlubmVyVGV4dCA9IGxlYXJuQnV0dG9uVGV4dDtcclxuICAgICAgICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcGxheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG5faW50cm8nLCAnYnRuJywgJ2J0bl9ib3JkZXJlZCcpO1xyXG4gICAgICAgIHBsYXlCdXR0b24uaW5uZXJUZXh0ID0gcGxheUJ1dHRvblRleHQ7XHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmQobGVhcm5CdXR0b24sIHBsYXlCdXR0b24pO1xyXG4gICAgICAgIHRoaXMudmlldy5hcHBlbmQodGl0bGUsIGludHJvVGV4dCwgYnV0dG9ucyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2VWaWV3O1xyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGlzVmFsaWRFbWFpbCwgaXNWYWxpZFBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGludmFsaWRFbWFpbCwgaW52YWxpZFBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IEFwcGxpY2F0aW9uQ29udG9sbGVyIGZyb20gJy4uL2FwcGxpY2F0aW9uLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgUmVnTW9kZWwgZnJvbSAnLi9yZWdpc3RyYXRpb24tbW9kZWwnO1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IFJlZ2lzdHJhdGlvblZpZXcgZnJvbSAnLi9yZWdpc3RyYXRpb24tdmlldyc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vQXBwJztcclxuY2xhc3MgUmVnaXN0cmF0aW9uQ29udHJvbGxlciBleHRlbmRzIEFwcGxpY2F0aW9uQ29udG9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRWaWV3KCk7XHJcbiAgICB9XHJcbiAgICBzZXRWaWV3KCkge1xyXG4gICAgICAgIHRoaXMucmVnTW9kZWwgPSBuZXcgUmVnTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnBhZ2VWaWV3ID0gbmV3IFJlZ2lzdHJhdGlvblZpZXcoKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgc2lnblVwVXNlcih1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgeWllbGQgdGhpcy5yZWdNb2RlbFxyXG4gICAgICAgICAgICAgICAgLmNyZWF0ZVVzZXIodXNlcilcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQuc3RhdHVzfSAke3Jlc3VsdC5zdGF0dXNUZXh0fWA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMucmVnTW9kZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZ25JblVzZXIodXNlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0LnN0YXR1c30gJHtyZXN1bHQuc3RhdHVzVGV4dH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCh1c2VyRGF0YSkgPT4gQXBwLnNpZ25Jbih1c2VyRGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xyXG4gICAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSB0aGlzLnBhZ2VWaWV3LnZpZXdcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5zaWduLXVwLWJ1dHRvbicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYiwgX2MsIF9kO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gKChfYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLWlucHV0JykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi52YWx1ZSkgfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gKChfYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1pbnB1dCcpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudmFsdWUpIHx8ICcnO1xyXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWRFbWFpbChlbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke2ludmFsaWRFbWFpbH0gJHtlbWFpbH1gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9ICgoX2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtaW5wdXQnKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnZhbHVlKSB8fCAnJztcclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkUGFzc3dvcmQocGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChpbnZhbGlkUGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9O1xyXG4gICAgICAgICAgICB5aWVsZCB0aGlzLnNpZ25VcFVzZXIodXNlcik7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkNvbnRyb2xsZXI7XHJcbiIsImltcG9ydCBBcGkgZnJvbSAnLi4vLi4vQXBpJztcclxuY2xhc3MgUmVnTW9kZWwgZXh0ZW5kcyBBcGkge1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ01vZGVsO1xyXG4iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9hdXRob3Jpc2F0aW9uLmNzcyc7XHJcbmltcG9ydCBBcHBsaWNhdGlvblZpZXcgZnJvbSAnLi4vYXBwbGljYXRpb24tdmlldyc7XHJcbmltcG9ydCB7IGVtYWlsLCBoYXZlQWNjb3VudFRleHQsIG5hbWUsIHBhc3N3b3JkLCBzaWduSW5CdXR0b25UZXh0LCBzaWduVXBUaXRsZSwgdXBwZXJTaWduVXBCdXR0b25UZXh0LCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL0FwcCc7XHJcbmNsYXNzIFJlZ2lzdHJhdGlvblZpZXcgZXh0ZW5kcyBBcHBsaWNhdGlvblZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclJlZ0Jsb2NrKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJSZWdCbG9jaygpIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnZpZXcuY2xhc3NMaXN0LmFkZCgncmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncmVnLXRpdGxlJyk7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gc2lnblVwVGl0bGU7XHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnbmFtZS1pbnB1dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgbmFtZSk7XHJcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGVtYWlsSW5wdXQuY2xhc3NMaXN0LmFkZCgnZW1haWwtaW5wdXQnKTtcclxuICAgICAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xyXG4gICAgICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGVtYWlsKTtcclxuICAgICAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXQuY2xhc3NMaXN0LmFkZCgncGFzc3dvcmQtaW5wdXQnKTtcclxuICAgICAgICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBhc3N3b3JkKTtcclxuICAgICAgICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xyXG4gICAgICAgIGNvbnN0IHNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHNpZ25VcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaWduLXVwLWJ1dHRvbicpO1xyXG4gICAgICAgIHNpZ25VcEJ1dHRvbi5pbm5lclRleHQgPSB1cHBlclNpZ25VcEJ1dHRvblRleHQ7XHJcbiAgICAgICAgY29uc3QgaGF2ZUFjY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoYXZlQWNjb3VudC5jbGFzc0xpc3QuYWRkKCdoYXZlLWFjY291bnQnKTtcclxuICAgICAgICBjb25zdCBoYXZlQWNjb3VudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgaGF2ZUFjY291bnRTcGFuLmNsYXNzTGlzdC5hZGQoJ2hhdmUtYWNjb3VudC1zcGFuJyk7XHJcbiAgICAgICAgaGF2ZUFjY291bnRTcGFuLmlubmVyVGV4dCA9IGhhdmVBY2NvdW50VGV4dDtcclxuICAgICAgICBjb25zdCBoYXZlQWNjb3VudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGhhdmVBY2NvdW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hhdmUtYWNjb3VudC1idXR0b24nKTtcclxuICAgICAgICBoYXZlQWNjb3VudEJ1dHRvbi5pbm5lclRleHQgPSBzaWduSW5CdXR0b25UZXh0O1xyXG4gICAgICAgIGhhdmVBY2NvdW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLnJlbmRlckF1dGhQYWdlKTtcclxuICAgICAgICBoYXZlQWNjb3VudC5hcHBlbmQoaGF2ZUFjY291bnRTcGFuLCBoYXZlQWNjb3VudEJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy52aWV3LmFwcGVuZCh0aXRsZSwgbmFtZUlucHV0LCBlbWFpbElucHV0LCBwYXNzd29yZElucHV0LCBzaWduVXBCdXR0b24sIGhhdmVBY2NvdW50KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25WaWV3O1xyXG4iLCJjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vcnMtbGFuZy10ZWFtMTEyLmhlcm9rdWFwcC5jb20nO1xyXG5jb25zdCBzaWduSW5CdXR0b25UZXh0ID0gJ9CS0L7QudGC0LgnO1xyXG5jb25zdCB1cHBlclNpZ25JbkJ1dHRvblRleHQgPSAn0JLQntCZ0KLQmCc7XHJcbmNvbnN0IGxvZ091dFRleHQgPSAn0JLRi9C50YLQuCc7XHJcbmNvbnN0IHNpZ25JblRpdGxlID0gJ9Ch0LvQtdC00Lgg0LfQsCDRgdGC0LDRgtC40YHRgtC40LrQvtC5INCyINGB0LLQvtC10Lwg0LDQutC60LDRg9C90YLQtSc7XHJcbmNvbnN0IHNpZ25VcFRpdGxlID0gJ9Ch0L7Qt9C00LDQuSDRgdCy0L7QuSDQsNC60LrQsNGD0L3Rgic7XHJcbmNvbnN0IHNpZ25VcEJ1dHRvblRleHQgPSAn0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPJztcclxuY29uc3QgdXBwZXJTaWduVXBCdXR0b25UZXh0ID0gJ9CX0JDQoNCV0JPQmNCh0KLQoNCY0KDQntCS0JDQotCs0KHQryc7XHJcbmNvbnN0IG5hbWUgPSAn0JjQvNGPJztcclxuY29uc3QgZW1haWwgPSAn0J/QvtGH0YLQsCc7XHJcbmNvbnN0IHBhc3N3b3JkID0gJ9Cf0LDRgNC+0LvRjCc7XHJcbmNvbnN0IGhhdmVOb3RZZXRBY2NvdW50VGV4dCA9ICfQldGJ0ZEg0L3QtSDRg9GB0L/QtdC70Lgg0YHQvtC30LTQsNGC0Ywg0LDQutC60LDRg9C90YI/JztcclxuY29uc3QgaGF2ZUFjY291bnRUZXh0ID0gJ9Cj0LbQtSDQtdGB0YLRjCDQsNC60LrQsNGD0L3Rgj8nO1xyXG5jb25zdCBpbnZhbGlkRW1haWwgPSAnSW52YWxpZCBlbWFpbCc7XHJcbmNvbnN0IGludmFsaWRQYXNzd29yZCA9ICdQYXNzd29yZCBzaG91bGQgY29udGFpbiBkaWdpdHMsIGxldHRlcnMgb3IgYm90aCc7XHJcbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xyXG5jb25zdCBtYWluUGFnZVRleHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28uJztcclxuLyogcHJldHRpZXItaWdub3JlICovXHJcbmNvbnN0IHJzTGFuZyA9ICdSUyBMYW5nJztcclxuY29uc3QgbGVhcm5CdXR0b25UZXh0ID0gJ9Cj0YfQuNGC0YzRgdGPJztcclxuY29uc3QgcGxheUJ1dHRvblRleHQgPSAn0JjQs9GA0LDRgtGMJztcclxuY29uc3QgbnVtYmVyT2ZMZXZlbHMgPSA3OyAvLyA2ICsgMSjQstGB0LUg0YHQu9C+0LbQvdGL0LUg0YHQu9C+0LLQsClcclxuY29uc3QgbnVtYmVyT2ZQYWdlc0luTGV2ZWwgPSAzMDtcclxuY29uc3QgYnRuSGFyZFRleHQgPSAn0YHQu9C+0LbQvdGL0LUnO1xyXG5jb25zdCBidG5MZXZlbFRleHQgPSAn0YPRgNC+0LLQtdC90YwgJztcclxuY29uc3Qgc3ByaW50R2FtZU5hbWUgPSAn0KHQv9GA0LjQvdGCJztcclxuY29uc3QgYXVkaW9HYW1lTmFtZSA9ICfQkNGD0LTQuNC+0LLRi9C30L7Qsic7XHJcbmNvbnN0IGV4dHJhR2FtZU5hbWUgPSAn0K3QutGB0YLRgNCwJztcclxuY29uc3QgaGFyZEJ1dHRvblRleHQgPSAn0KHQu9C+0LbQvdC+0LUnO1xyXG5jb25zdCBkb25lQnV0dG9uVGV4dCA9ICfQmNC30YPRh9C10L3Qvic7XHJcbmNvbnN0IGljb25TcHJpbnRTcmMgPSAnLi9hc3NldHMvc3ZnL2ljb25fc3ByaW50LnN2Zyc7XHJcbmNvbnN0IGljb25BdWRpb0dhbWVTcmMgPSAnLi9hc3NldHMvc3ZnL2ljb25fYXVkaW9fZ2FtZS5zdmcnO1xyXG5jb25zdCBpY29uRXh0cmFHYW1lU3JjID0gJy4vYXNzZXRzL3N2Zy9pY29uX2F1ZGlvX2dhbWUuc3ZnJztcclxuZXhwb3J0IHsgYmFzZVVybCwgc2lnblVwQnV0dG9uVGV4dCwgc2lnbkluQnV0dG9uVGV4dCwgc2lnbkluVGl0bGUsIGVtYWlsLCBwYXNzd29yZCwgaGF2ZU5vdFlldEFjY291bnRUZXh0LCBoYXZlQWNjb3VudFRleHQsIGludmFsaWRFbWFpbCwgaW52YWxpZFBhc3N3b3JkLCBzaWduVXBUaXRsZSwgbmFtZSwgdXBwZXJTaWduVXBCdXR0b25UZXh0LCB1cHBlclNpZ25JbkJ1dHRvblRleHQsIG1haW5QYWdlVGV4dCwgcnNMYW5nLCBsZWFybkJ1dHRvblRleHQsIHBsYXlCdXR0b25UZXh0LCBudW1iZXJPZkxldmVscywgYnRuSGFyZFRleHQsIGJ0bkxldmVsVGV4dCwgc3ByaW50R2FtZU5hbWUsIGF1ZGlvR2FtZU5hbWUsIGV4dHJhR2FtZU5hbWUsIGxvZ091dFRleHQsIGhhcmRCdXR0b25UZXh0LCBkb25lQnV0dG9uVGV4dCwgbnVtYmVyT2ZQYWdlc0luTGV2ZWwsIGljb25TcHJpbnRTcmMsIGljb25BdWRpb0dhbWVTcmMsIGljb25FeHRyYUdhbWVTcmMsIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuYXBwLnN0YXJ0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==