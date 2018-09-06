webpackHotUpdate(4,{

/***/ "./components/showTeamPlayers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bloomer_lib_components_Panel_PanelBlock__ = __webpack_require__("./node_modules/bloomer/lib/components/Panel/PanelBlock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bloomer_lib_components_Panel_PanelBlock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bloomer_lib_components_Panel_PanelBlock__);
var _jsxFileName = "C:\\Users\\Solution Science\\Google Drive\\work2\\projects\\fantasy-football-coin\\frontend\\components\\showTeamPlayers.js";




var showTeamPlayers = function showTeamPlayers(_ref) {
  var players = _ref.players;

  if (!players) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, " Loading...");
  }

  players = players.map(function (player) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer_lib_components_Panel_PanelBlock__["PanelBlock"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "columns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: " web_name column is-half",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      key: player._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, player.web_name)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "column is-half",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      key: player._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, player.now_cost))));
  });
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-1582888334"
  }, "team players: ", players, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1582888334",
    css: ".web_name.jsx-1582888334{background:url(/static/images/background.png) center scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNob3dUZWFtUGxheWVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qk8sQUFFcUUsNERBRTdEIiwiZmlsZSI6ImNvbXBvbmVudHNcXHNob3dUZWFtUGxheWVycy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXFNvbHV0aW9uIFNjaWVuY2VcXEdvb2dsZSBEcml2ZVxcd29yazJcXHByb2plY3RzXFxmYW50YXN5LWZvb3RiYWxsLWNvaW5cXGZyb250ZW5kIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQYW5lbEJsb2NrIH0gZnJvbSAnYmxvb21lci9saWIvY29tcG9uZW50cy9QYW5lbC9QYW5lbEJsb2NrJztcclxuXHJcbmNvbnN0IHNob3dUZWFtUGxheWVycyA9ICh7cGxheWVyc30pID0+IHtcclxuXHJcbiAgaWYoIXBsYXllcnMpe1xyXG4gICAgcmV0dXJuKDxkaXY+IExvYWRpbmcuLi48L2Rpdj4pXHJcbiAgfVxyXG4gIHBsYXllcnMgPSBwbGF5ZXJzLm1hcCgocGxheWVyKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8UGFuZWxCbG9jaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucyc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnIHdlYl9uYW1lIGNvbHVtbiBpcy1oYWxmJz5cclxuICAgICAgICA8ZGl2IGtleT17cGxheWVyLl9pZH0+e3BsYXllci53ZWJfbmFtZX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGlzLWhhbGYnPlxyXG4gICAgICAgIDxkaXYga2V5PXtwbGF5ZXIuX2lkfT57cGxheWVyLm5vd19jb3N0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPC9QYW5lbEJsb2NrPlxyXG4gICAgKVxyXG5cclxuICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgIHRlYW0gcGxheWVyczoge3BsYXllcnN9XHJcbiAgICAgPHN0eWxlIGpzeD57XHJcbiAgICAgICBgLndlYl9uYW1le1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZykgY2VudGVyIHNjcm9sbDtcclxuXHJcbiAgICAgICB9XHJcbiAgICAgICAgIGBcclxuICAgICB9XHJcbiAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd1RlYW1QbGF5ZXJzXHJcbiJdfQ== */\n/*@ sourceURL=components\\showTeamPlayers.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (showTeamPlayers);

/***/ })

})
//# sourceMappingURL=4.8e08eb4b7ede7caa39b7.hot-update.js.map