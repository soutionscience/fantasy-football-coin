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
      className: "jsx-704371340" + " " + ' web_name'
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      key: player._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      className: "jsx-704371340"
    }, player.web_name, " ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: "jsx-704371340" + " " + ' now_cost'
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      key: player._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      className: "jsx-704371340"
    }, player.now_cost / 100 * 2, " coins")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      className: "jsx-704371340" + " " + ' now_cost'
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      key: player._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      className: "jsx-704371340"
    }, player.pointsTotal, " Points")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "704371340",
      css: ".web_name.jsx-704371340{margin-right:grey solid 1px;background:#f5f5f5;width:45%;padding-right:2px;margin-right:4px;}.now_cost.jsx-704371340{padding-left:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNob3dUZWFtUGxheWVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qk8sQUFFcUMsQUFTWCxpQkFFbEIsV0FWb0IsbUJBQ1QsVUFDUSxrQkFDRCxpQkFFbEIiLCJmaWxlIjoiY29tcG9uZW50c1xcc2hvd1RlYW1QbGF5ZXJzLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcU29sdXRpb24gU2NpZW5jZVxcR29vZ2xlIERyaXZlXFx3b3JrMlxccHJvamVjdHNcXGZhbnRhc3ktZm9vdGJhbGwtY29pblxcZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhbmVsQmxvY2sgfSBmcm9tICdibG9vbWVyL2xpYi9jb21wb25lbnRzL1BhbmVsL1BhbmVsQmxvY2snO1xyXG5cclxuY29uc3Qgc2hvd1RlYW1QbGF5ZXJzID0gKHtwbGF5ZXJzfSkgPT4ge1xyXG5cclxuICBpZighcGxheWVycyl7XHJcbiAgICByZXR1cm4oPGRpdj4gTG9hZGluZy4uLjwvZGl2PilcclxuICB9XHJcbiAgcGxheWVycyA9IHBsYXllcnMubWFwKChwbGF5ZXIpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxQYW5lbEJsb2NrPlxyXG4gICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICcgd2ViX25hbWUnPlxyXG4gICAgICAgIDxkaXYga2V5PXtwbGF5ZXIuX2lkfT57cGxheWVyLndlYl9uYW1lfSA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIG5vd19jb3N0Jz5cclxuICAgICAgICA8ZGl2IGtleT17cGxheWVyLl9pZH0+e3BsYXllci5ub3dfY29zdC8xMDAgKjJ9IGNvaW5zPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBub3dfY29zdCc+XHJcbiAgICAgICAgPGRpdiBrZXk9e3BsYXllci5faWR9PntwbGF5ZXIucG9pbnRzVG90YWx9IFBvaW50czwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57XHJcbiAgICAgICBgLndlYl9uYW1le1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogZ3JleSBzb2xpZCAxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuXHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgLm5vd19jb3N0e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG5cclxuICAgICAgIH1cclxuICAgICAgICAgYFxyXG4gICAgIH1cclxuICAgICA8L3N0eWxlPlxyXG4gICAgICA8L1BhbmVsQmxvY2s+XHJcbiAgICApXHJcblxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgdGVhbSBwbGF5ZXJzOiB7cGxheWVyc31cclxuICAgICA8c3R5bGUganN4PntcclxuICAgICAgIGAud2ViX25hbWV7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL2JhY2tncm91bmQucG5nKSBjZW50ZXIgc2Nyb2xsO1xyXG5cclxuICAgICAgIH1cclxuICAgICAgICAgYFxyXG4gICAgIH1cclxuICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93VGVhbVBsYXllcnNcclxuIl19 */\n/*@ sourceURL=components\\showTeamPlayers.js */"
    }));
  });
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    className: "jsx-1582888334"
  }, "team players: ", players, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1582888334",
    css: ".web_name.jsx-1582888334{background:url(/static/images/background.png) center scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNob3dUZWFtUGxheWVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ08sQUFFcUUsNERBRTdEIiwiZmlsZSI6ImNvbXBvbmVudHNcXHNob3dUZWFtUGxheWVycy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXFNvbHV0aW9uIFNjaWVuY2VcXEdvb2dsZSBEcml2ZVxcd29yazJcXHByb2plY3RzXFxmYW50YXN5LWZvb3RiYWxsLWNvaW5cXGZyb250ZW5kIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQYW5lbEJsb2NrIH0gZnJvbSAnYmxvb21lci9saWIvY29tcG9uZW50cy9QYW5lbC9QYW5lbEJsb2NrJztcclxuXHJcbmNvbnN0IHNob3dUZWFtUGxheWVycyA9ICh7cGxheWVyc30pID0+IHtcclxuXHJcbiAgaWYoIXBsYXllcnMpe1xyXG4gICAgcmV0dXJuKDxkaXY+IExvYWRpbmcuLi48L2Rpdj4pXHJcbiAgfVxyXG4gIHBsYXllcnMgPSBwbGF5ZXJzLm1hcCgocGxheWVyKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8UGFuZWxCbG9jaz5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnIHdlYl9uYW1lJz5cclxuICAgICAgICA8ZGl2IGtleT17cGxheWVyLl9pZH0+e3BsYXllci53ZWJfbmFtZX0gPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBub3dfY29zdCc+XHJcbiAgICAgICAgPGRpdiBrZXk9e3BsYXllci5faWR9PntwbGF5ZXIubm93X2Nvc3QvMTAwICoyfSBjb2luczwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgbm93X2Nvc3QnPlxyXG4gICAgICAgIDxkaXYga2V5PXtwbGF5ZXIuX2lkfT57cGxheWVyLnBvaW50c1RvdGFsfSBQb2ludHM8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e1xyXG4gICAgICAgYC53ZWJfbmFtZXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGdyZXkgc29saWQgMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcblxyXG4gICAgICAgfVxyXG5cclxuICAgICAgIC5ub3dfY29zdHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuXHJcbiAgICAgICB9XHJcbiAgICAgICAgIGBcclxuICAgICB9XHJcbiAgICAgPC9zdHlsZT5cclxuICAgICAgPC9QYW5lbEJsb2NrPlxyXG4gICAgKVxyXG5cclxuICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgIHRlYW0gcGxheWVyczoge3BsYXllcnN9XHJcbiAgICAgPHN0eWxlIGpzeD57XHJcbiAgICAgICBgLndlYl9uYW1le1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZykgY2VudGVyIHNjcm9sbDtcclxuXHJcbiAgICAgICB9XHJcbiAgICAgICAgIGBcclxuICAgICB9XHJcbiAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd1RlYW1QbGF5ZXJzXHJcbiJdfQ== */\n/*@ sourceURL=components\\showTeamPlayers.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (showTeamPlayers);

/***/ })

})
//# sourceMappingURL=4.22a3c1c0869c4bda0acb.hot-update.js.map