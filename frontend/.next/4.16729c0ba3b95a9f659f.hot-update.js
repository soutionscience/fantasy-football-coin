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
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      className: "jsx-4131042669" + " " + ' web_name'
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      key: player._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      className: "jsx-4131042669"
    }, player.web_name, " ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: "jsx-4131042669" + " " + ' now_cost'
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      key: player._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      className: "jsx-4131042669"
    }, player.now_cost / 100 * 2, " coins")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      className: "jsx-4131042669" + " " + 'pointsTotal'
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      key: player._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      className: "jsx-4131042669"
    }, player.pointsTotal, " Points")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "4131042669",
      css: ".web_name.jsx-4131042669{margin-right:grey solid 1px;background:#f5f5f5;width:40%;padding-right:2px;margin-right:4px;}.now_cost.jsx-4131042669{width:30%;padding-left:2px;}.pointsTotal.jsx-4131042669{width:30%;background:#f5f5f5;padding-left:2px;margin-left:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNob3dUZWFtUGxheWVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qk8sQUFFcUMsQUFTbEIsQUFLQSxVQUpPLEFBS0UsaUJBSHBCLENBWG9CLENBZUYsaUJBQ0QsQ0FmTixVQUNRLEtBZW5CLGFBZGtCLGlCQUVsQiIsImZpbGUiOiJjb21wb25lbnRzXFxzaG93VGVhbVBsYXllcnMuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxTb2x1dGlvbiBTY2llbmNlXFxHb29nbGUgRHJpdmVcXHdvcmsyXFxwcm9qZWN0c1xcZmFudGFzeS1mb290YmFsbC1jb2luXFxmcm9udGVuZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGFuZWxCbG9jayB9IGZyb20gJ2Jsb29tZXIvbGliL2NvbXBvbmVudHMvUGFuZWwvUGFuZWxCbG9jayc7XHJcblxyXG5jb25zdCBzaG93VGVhbVBsYXllcnMgPSAoe3BsYXllcnN9KSA9PiB7XHJcblxyXG4gIGlmKCFwbGF5ZXJzKXtcclxuICAgIHJldHVybig8ZGl2PiBMb2FkaW5nLi4uPC9kaXY+KVxyXG4gIH1cclxuICBwbGF5ZXJzID0gcGxheWVycy5tYXAoKHBsYXllcik9PntcclxuICAgIHJldHVybihcclxuICAgICAgPFBhbmVsQmxvY2s+XHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJyB3ZWJfbmFtZSc+XHJcbiAgICAgICAgPGRpdiBrZXk9e3BsYXllci5faWR9PntwbGF5ZXIud2ViX25hbWV9IDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgbm93X2Nvc3QnPlxyXG4gICAgICAgIDxkaXYga2V5PXtwbGF5ZXIuX2lkfT57cGxheWVyLm5vd19jb3N0LzEwMCAqMn0gY29pbnM8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9pbnRzVG90YWwnPlxyXG4gICAgICAgIDxkaXYga2V5PXtwbGF5ZXIuX2lkfT57cGxheWVyLnBvaW50c1RvdGFsfSBQb2ludHM8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e1xyXG4gICAgICAgYC53ZWJfbmFtZXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGdyZXkgc29saWQgMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcblxyXG4gICAgICAgfVxyXG5cclxuICAgICAgIC5ub3dfY29zdHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG5cclxuICAgICAgIH1cclxuICAgICAgIC5wb2ludHNUb3RhbHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgIH1cclxuICAgICAgICAgYFxyXG4gICAgIH1cclxuICAgICA8L3N0eWxlPlxyXG4gICAgICA8L1BhbmVsQmxvY2s+XHJcbiAgICApXHJcblxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgdGVhbSBwbGF5ZXJzOiB7cGxheWVyc31cclxuICAgICA8c3R5bGUganN4PntcclxuICAgICAgIGAud2ViX25hbWV7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL2JhY2tncm91bmQucG5nKSBjZW50ZXIgc2Nyb2xsO1xyXG5cclxuICAgICAgIH1cclxuICAgICAgICAgYFxyXG4gICAgIH1cclxuICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93VGVhbVBsYXllcnNcclxuIl19 */\n/*@ sourceURL=components\\showTeamPlayers.js */"
    }));
  });
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    className: "jsx-1582888334"
  }, "team players: ", players, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1582888334",
    css: ".web_name.jsx-1582888334{background:url(/static/images/background.png) center scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNob3dUZWFtUGxheWVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRE8sQUFFcUUsNERBRTdEIiwiZmlsZSI6ImNvbXBvbmVudHNcXHNob3dUZWFtUGxheWVycy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXFNvbHV0aW9uIFNjaWVuY2VcXEdvb2dsZSBEcml2ZVxcd29yazJcXHByb2plY3RzXFxmYW50YXN5LWZvb3RiYWxsLWNvaW5cXGZyb250ZW5kIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQYW5lbEJsb2NrIH0gZnJvbSAnYmxvb21lci9saWIvY29tcG9uZW50cy9QYW5lbC9QYW5lbEJsb2NrJztcclxuXHJcbmNvbnN0IHNob3dUZWFtUGxheWVycyA9ICh7cGxheWVyc30pID0+IHtcclxuXHJcbiAgaWYoIXBsYXllcnMpe1xyXG4gICAgcmV0dXJuKDxkaXY+IExvYWRpbmcuLi48L2Rpdj4pXHJcbiAgfVxyXG4gIHBsYXllcnMgPSBwbGF5ZXJzLm1hcCgocGxheWVyKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8UGFuZWxCbG9jaz5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnIHdlYl9uYW1lJz5cclxuICAgICAgICA8ZGl2IGtleT17cGxheWVyLl9pZH0+e3BsYXllci53ZWJfbmFtZX0gPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBub3dfY29zdCc+XHJcbiAgICAgICAgPGRpdiBrZXk9e3BsYXllci5faWR9PntwbGF5ZXIubm93X2Nvc3QvMTAwICoyfSBjb2luczwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb2ludHNUb3RhbCc+XHJcbiAgICAgICAgPGRpdiBrZXk9e3BsYXllci5faWR9PntwbGF5ZXIucG9pbnRzVG90YWx9IFBvaW50czwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57XHJcbiAgICAgICBgLndlYl9uYW1le1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogZ3JleSBzb2xpZCAxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuXHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgLm5vd19jb3N0e1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcblxyXG4gICAgICAgfVxyXG4gICAgICAgLnBvaW50c1RvdGFse1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgfVxyXG4gICAgICAgICBgXHJcbiAgICAgfVxyXG4gICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvUGFuZWxCbG9jaz5cclxuICAgIClcclxuXHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICB0ZWFtIHBsYXllcnM6IHtwbGF5ZXJzfVxyXG4gICAgIDxzdHlsZSBqc3g+e1xyXG4gICAgICAgYC53ZWJfbmFtZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWFnZXMvYmFja2dyb3VuZC5wbmcpIGNlbnRlciBzY3JvbGw7XHJcblxyXG4gICAgICAgfVxyXG4gICAgICAgICBgXHJcbiAgICAgfVxyXG4gICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dUZWFtUGxheWVyc1xyXG4iXX0= */\n/*@ sourceURL=components\\showTeamPlayers.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (showTeamPlayers);

/***/ })

})
//# sourceMappingURL=4.16729c0ba3b95a9f659f.hot-update.js.map