webpackHotUpdate(4,{

/***/ "./components/field.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\Solution Science\\Google Drive\\work2\\projects\\fantasy-football-coin\\frontend\\components\\field.js";


var field = function field() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "field");
};

/* harmony default export */ __webpack_exports__["a"] = (field);

/***/ }),

/***/ "./pages/teams.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Teams; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_field__ = __webpack_require__("./components/field.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_showTeamPlayers__ = __webpack_require__("./components/showTeamPlayers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bloomer__ = __webpack_require__("./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bloomer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bloomer__);

var _jsxFileName = "C:\\Users\\Solution Science\\Google Drive\\work2\\projects\\fantasy-football-coin\\frontend\\pages\\teams.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var FFCApi = 'https://ffc-server.herokuapp.com/api/teams';
var FFCLocal = 'http://localhost:3000/api/teams';
var playerLocal = 'http://localhost:3000/api/players'; //styles

var bg = {
  background: 'white',
  height: '100%',
  marginTop: '8px',
  padding: '8px'
};

var Teams =
/*#__PURE__*/
function (_Component) {
  _inherits(Teams, _Component);

  function Teams() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Teams);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Teams.__proto__ || Object.getPrototypeOf(Teams)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        selectedTeam: 1,
        teamPlayers: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "selectedTeam", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(e, id) {
          var teamUrl, res, data;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  //e.preventDefault()
                  _this.setState({
                    selectedTeam: id
                  });

                  teamUrl = "http://localhost:3000/api/players/?team_code=".concat(id);
                  _context.next = 4;
                  return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()(teamUrl);

                case 4:
                  res = _context.sent;
                  _context.next = 7;
                  return res.json();

                case 7:
                  data = _context.sent;
                  console.log("Show players fetched. Count: ".concat(data.length));

                  _this.setState({
                    teamPlayers: data
                  });

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x, _x2) {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(Teams, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: bg,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: "jsx-3884668687"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Teams"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["Columns"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["Column"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["Panel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["PanelHeading"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Your Team"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_field__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["Column"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["Panel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["PanelHeading"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Select Team"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["PanelBlock"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["Control"], {
        hasIcons: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["Input"], {
        isSize: "small",
        placeholder: "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["Icon"], {
        isSize: "small",
        isAlign: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-3884668687" + " " + 'fa fa-search'
      })))), this.props.teams.map(function (index) {
        return (// <PanelTab key={index._id}>{index.name}</PanelTab>
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["PanelBlock"], {
            className: "panel_block",
            onClick: function onClick(e) {
              return _this2.selectedTeam(e, index.code);
            },
            isActive: true,
            key: index._id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["PanelIcon"], {
            className: "fa fa-book",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            }
          }), index.name)
        );
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["Column"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["Panel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_bloomer__["PanelHeading"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, "Select Players"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_showTeamPlayers__["a" /* default */], {
        players: this.state.teamPlayers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      })))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3884668687",
        css: ".panel_block{cursor:pointer;}.panel_block:hover{background-color:grey;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0ZWFtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSDJCLEFBSVEsQUFFMkIsZUFGMUIsT0FLRCxZQUFDIiwiZmlsZSI6InBhZ2VzXFx0ZWFtcy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXFNvbHV0aW9uIFNjaWVuY2VcXEdvb2dsZSBEcml2ZVxcd29yazJcXHByb2plY3RzXFxmYW50YXN5LWZvb3RiYWxsLWNvaW5cXGZyb250ZW5kIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgRmllbGQgZnJvbSAnLi4vY29tcG9uZW50cy9maWVsZCc7XHJcbmltcG9ydCBTaG93VGVhbVBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL3Nob3dUZWFtUGxheWVycyc7XHJcbmltcG9ydCB7Q29udGFpbmVyLCBQYW5lbEljb24sIENvbnRyb2wsIFxyXG4gICAgSW5wdXQsIEljb24sIFRpdGxlLCBQYW5lbCwgUGFuZWxCbG9jayxcclxuICAgICBQYW5lbEhlYWRpbmcsIFBhbmVsVGFiLCBQYW5lbFRhYnMsXHJcbiAgICBDb2x1bW4sIENvbHVtbnN9IGZyb20gJ2Jsb29tZXInXHJcblxyXG5cclxuXHJcbmNvbnN0IEZGQ0FwaSA9J2h0dHBzOi8vZmZjLXNlcnZlci5oZXJva3VhcHAuY29tL2FwaS90ZWFtcyc7XHJcbmNvbnN0IEZGQ0xvY2FsID0naHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90ZWFtcydcclxuY29uc3QgcGxheWVyTG9jYWwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wbGF5ZXJzJ1xyXG4gICAvL3N0eWxlc1xyXG5jb25zdCBiZyA9e1xyXG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgbWFyZ2luVG9wOiAnOHB4JyxcclxuICAgIHBhZGRpbmc6ICc4cHgnXHJcbn07XHJcblxyXG5cclxuICAgICAgICBcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlYW1zIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gXHJcblxyXG5cclxuICAgIC8vYWxsIG15IHN0YXRlc1xyXG4gICAgc3RhdGU9e1xyXG4gICAgICAgIHNlbGVjdGVkVGVhbTogMSxcclxuICAgICAgICB0ZWFtUGxheWVyczogJydcclxuICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goRkZDQXBpKTtcclxuICAgICAgICBjb25zdCB0ZWFtRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke3RlYW1EYXRhLmxlbmd0aH1gKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICAgICAgLy8gY29uc3QgdGVhbVVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3BsYXllcnMvP3RlYW1fY29kZT0xYFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZXN0JylcclxuICAgICAgICAvLyBjb25zdCByZXMyID0gYXdhaXQgZmV0Y2godGVhbVVybCk7XHJcbiAgICAgICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHJlczIuanNvbigpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFNob3cgcGxheWVycyBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxyXG4gICAgICAgIC8vIC8vIHRoaXMuc2V0U3RhdGUoe3RlYW1QbGF5ZXJzOmRhdGF9KVxyXG4gICAgICAgIHJldHVybiB7dGVhbXM6IHRlYW1EYXRhfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9zaG93IHBsYXllcnMgZnJvbSBzZWxlY3RlZCB0ZWFtXHJcbiAgICBzZWxlY3RlZFRlYW0gPSBhc3luYyAoZSwgaWQpPT57XHJcbiAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkVGVhbTogaWR9KVxyXG4gICAgICBjb25zdCB0ZWFtVXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcGxheWVycy8/dGVhbV9jb2RlPSR7aWR9YFxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh0ZWFtVXJsKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgY29uc29sZS5sb2coYFNob3cgcGxheWVycyBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0ZWFtUGxheWVyczpkYXRhfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuKDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPGRpdiBzdHlsZSA9IHtiZ30gPlxyXG4gICAgICAgIDxUaXRsZT5UZWFtczwvVGl0bGU+XHJcblxyXG4gICAgICAgIDxDb2x1bW5zPlxyXG4gICAgICAgIDxDb2x1bW4+XHJcbiAgICAgICAgPFBhbmVsPlxyXG4gICAgICAgICAgICA8UGFuZWxIZWFkaW5nPllvdXIgVGVhbTwvUGFuZWxIZWFkaW5nPlxyXG4gICAgICAgICAgICA8RmllbGQvPlxyXG5cclxuICAgICAgICA8L1BhbmVsPlxyXG4gICAgICAgIDwvQ29sdW1uPlxyXG4gICAgICAgIDxDb2x1bW4+XHJcbiAgICAgICAgPFBhbmVsPlxyXG4gICAgICAgICAgICA8UGFuZWxIZWFkaW5nPlNlbGVjdCBUZWFtPC9QYW5lbEhlYWRpbmc+XHJcbiAgICAgICAgICAgIDxQYW5lbEJsb2NrPlxyXG4gICAgICAgIDxDb250cm9sIGhhc0ljb25zPSdsZWZ0Jz5cclxuICAgICAgICAgICAgPElucHV0IGlzU2l6ZT0nc21hbGwnIHBsYWNlaG9sZGVyPSdTZWFyY2gnIC8+XHJcbiAgICAgICAgICAgIDxJY29uIGlzU2l6ZT0nc21hbGwnIGlzQWxpZ249J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxyXG4gICAgICAgICAgICA8L0ljb24+XHJcbiAgICAgICAgPC9Db250cm9sPlxyXG4gICAgPC9QYW5lbEJsb2NrPlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB7dGhpcy5wcm9wcy50ZWFtcy5tYXAoKGluZGV4KT0+KFxyXG4gICAgICAgICAgICAvLyA8UGFuZWxUYWIga2V5PXtpbmRleC5faWR9PntpbmRleC5uYW1lfTwvUGFuZWxUYWI+XHJcbiAgICAgICAgICAgIDxQYW5lbEJsb2NrIGNsYXNzTmFtZSA9XCJwYW5lbF9ibG9ja1wiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNlbGVjdGVkVGVhbShlLCBpbmRleC5jb2RlKX1cclxuICAgICAgICAgICAgaXNBY3RpdmUga2V5PXtpbmRleC5faWR9PlxyXG4gICAgICAgIDxQYW5lbEljb24gY2xhc3NOYW1lPVwiZmEgZmEtYm9va1wiIC8+XHJcbiAgICAgICAge2luZGV4Lm5hbWV9XHJcbiAgICA8L1BhbmVsQmxvY2s+XHJcblxyXG4gICAgICAgICkpfSBcclxuXHJcbiAgXHJcblxyXG4gICAgICAgIDwvUGFuZWw+XHJcbiAgICAgICAgPC9Db2x1bW4+XHJcbiAgICAgICAgPENvbHVtbj5cclxuICAgICAgICA8UGFuZWw+XHJcbiAgICAgICAgPFBhbmVsSGVhZGluZz5TZWxlY3QgUGxheWVyczwvUGFuZWxIZWFkaW5nPlxyXG4gICAgICAgPFNob3dUZWFtUGxheWVyICBwbGF5ZXJzID17dGhpcy5zdGF0ZS50ZWFtUGxheWVyc30vPlxyXG4gICAgICAgPC9QYW5lbD5cclxuICAgICAgICA8L0NvbHVtbj5cclxuICAgICAgICA8L0NvbHVtbnM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAucGFuZWxfYmxvY2sge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsX2Jsb2NrOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICBcclxuICAgICAgICA8L0xheW91dD4pXHJcblxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=pages\\teams.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(props) {
        var res, teamData;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()(FFCApi);

              case 2:
                res = _context2.sent;
                _context2.next = 5;
                return res.json();

              case 5:
                teamData = _context2.sent;
                console.log("Show data fetched. Count: ".concat(teamData.length)); //console.log(props)
                // const teamUrl = `http://localhost:3000/api/players/?team_code=1`
                // console.log('test')
                // const res2 = await fetch(teamUrl);
                // const data = await res2.json()
                // console.log(`Show players fetched. Count: ${data.length}`)
                // // this.setState({teamPlayers:data})

                return _context2.abrupt("return", {
                  teams: teamData
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInitialProps(_x3) {
        return _getInitialProps.apply(this, arguments);
      };
    }() //show players from selected team

  }]);

  return Teams;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/teams")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.55cdd9411769d0039bde.hot-update.js.map