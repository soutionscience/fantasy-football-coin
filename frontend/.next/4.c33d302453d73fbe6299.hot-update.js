webpackHotUpdate(4,{

/***/ "./components/showTeamPlayers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bloomer_lib_components_Panel_PanelBlock__ = __webpack_require__("./node_modules/bloomer/lib/components/Panel/PanelBlock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bloomer_lib_components_Panel_PanelBlock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bloomer_lib_components_Panel_PanelBlock__);
var _jsxFileName = "C:\\Users\\Solution Science\\Google Drive\\work2\\projects\\fantasy-football-coin\\frontend\\components\\showTeamPlayers.js";



var showTeamPlayers = function showTeamPlayers(_ref) {
  var players = _ref.players;

  if (!players) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, " Loading...");
  }

  players = players.map(function (player) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer_lib_components_Panel_PanelBlock__["PanelBlock"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      key: player._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, player.web_name, " | ", player.now_cost));
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "team players: ", players);
};

/* harmony default export */ __webpack_exports__["a"] = (showTeamPlayers);

/***/ })

})
//# sourceMappingURL=4.c33d302453d73fbe6299.hot-update.js.map