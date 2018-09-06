webpackHotUpdate(4,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_showTeamPlayers__ = __webpack_require__("./components/showTeamPlayers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bloomer__ = __webpack_require__("./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bloomer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bloomer__);

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
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: bg,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-3884668687"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Teams"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["Columns"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["Column"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "test"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["Column"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["Panel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["PanelHeading"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Select Team"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["PanelBlock"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["Control"], {
        hasIcons: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["Input"], {
        isSize: "small",
        placeholder: "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["Icon"], {
        isSize: "small",
        isAlign: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-3884668687" + " " + 'fa fa-search'
      })))), this.props.teams.map(function (index) {
        return (// <PanelTab key={index._id}>{index.name}</PanelTab>
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["PanelBlock"], {
            className: "panel_block",
            onClick: function onClick(e) {
              return _this2.selectedTeam(e, index.code);
            },
            isActive: true,
            key: index._id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["PanelIcon"], {
            className: "fa fa-book",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          }), index.name)
        );
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["Column"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["Panel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_bloomer__["PanelHeading"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Select Players"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_showTeamPlayers__["a" /* default */], {
        players: this.state.teamPlayers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3884668687",
        css: ".panel_block{cursor:pointer;}.panel_block:hover{background-color:grey;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0ZWFtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RzJCLEFBSVEsQUFFMkIsZUFGMUIsT0FLRCxZQUFDIiwiZmlsZSI6InBhZ2VzXFx0ZWFtcy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXFNvbHV0aW9uIFNjaWVuY2VcXEdvb2dsZSBEcml2ZVxcd29yazJcXHByb2plY3RzXFxmYW50YXN5LWZvb3RiYWxsLWNvaW5cXGZyb250ZW5kIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgU2hvd1RlYW1QbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaG93VGVhbVBsYXllcnMnO1xyXG5pbXBvcnQge0NvbnRhaW5lciwgUGFuZWxJY29uLCBDb250cm9sLCBcclxuICAgIElucHV0LCBJY29uLCBUaXRsZSwgUGFuZWwsIFBhbmVsQmxvY2ssXHJcbiAgICAgUGFuZWxIZWFkaW5nLCBQYW5lbFRhYiwgUGFuZWxUYWJzLFxyXG4gICAgQ29sdW1uLCBDb2x1bW5zfSBmcm9tICdibG9vbWVyJ1xyXG5cclxuXHJcblxyXG5jb25zdCBGRkNBcGkgPSdodHRwczovL2ZmYy1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9hcGkvdGVhbXMnO1xyXG5jb25zdCBGRkNMb2NhbCA9J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGVhbXMnXHJcbmNvbnN0IHBsYXllckxvY2FsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcGxheWVycydcclxuICAgLy9zdHlsZXNcclxuY29uc3QgYmcgPXtcclxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIG1hcmdpblRvcDogJzhweCcsXHJcbiAgICBwYWRkaW5nOiAnOHB4J1xyXG59O1xyXG5cclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFtcyBleHRlbmRzIENvbXBvbmVudHtcclxuIFxyXG5cclxuXHJcbiAgICAvL2FsbCBteSBzdGF0ZXNcclxuICAgIHN0YXRlPXtcclxuICAgICAgICBzZWxlY3RlZFRlYW06IDEsXHJcbiAgICAgICAgdGVhbVBsYXllcnM6ICcnXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEZGQ0FwaSk7XHJcbiAgICAgICAgY29uc3QgdGVhbURhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHt0ZWFtRGF0YS5sZW5ndGh9YClcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHByb3BzKVxyXG4gICAgICAgIC8vIGNvbnN0IHRlYW1VcmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wbGF5ZXJzLz90ZWFtX2NvZGU9MWBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGVzdCcpXHJcbiAgICAgICAgLy8gY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKHRlYW1VcmwpO1xyXG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMyLmpzb24oKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBTaG93IHBsYXllcnMgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcclxuICAgICAgICAvLyAvLyB0aGlzLnNldFN0YXRlKHt0ZWFtUGxheWVyczpkYXRhfSlcclxuICAgICAgICByZXR1cm4ge3RlYW1zOiB0ZWFtRGF0YX1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vc2hvdyBwbGF5ZXJzIGZyb20gc2VsZWN0ZWQgdGVhbVxyXG4gICAgc2VsZWN0ZWRUZWFtID0gYXN5bmMgKGUsIGlkKT0+e1xyXG4gICAgICAvL2UucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFRlYW06IGlkfSlcclxuICAgICAgY29uc3QgdGVhbVVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3BsYXllcnMvP3RlYW1fY29kZT0ke2lkfWBcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godGVhbVVybCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgIGNvbnNvbGUubG9nKGBTaG93IHBsYXllcnMgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGVhbVBsYXllcnM6ZGF0YX0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybig8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgc3R5bGUgPSB7Ymd9ID5cclxuICAgICAgICA8VGl0bGU+VGVhbXM8L1RpdGxlPlxyXG5cclxuICAgICAgICA8Q29sdW1ucz5cclxuICAgICAgICA8Q29sdW1uPnRlc3Q8L0NvbHVtbj5cclxuICAgICAgICA8Q29sdW1uPlxyXG4gICAgICAgIDxQYW5lbD5cclxuICAgICAgICAgICAgPFBhbmVsSGVhZGluZz5TZWxlY3QgVGVhbTwvUGFuZWxIZWFkaW5nPlxyXG4gICAgICAgICAgICA8UGFuZWxCbG9jaz5cclxuICAgICAgICA8Q29udHJvbCBoYXNJY29ucz0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJbnB1dCBpc1NpemU9J3NtYWxsJyBwbGFjZWhvbGRlcj0nU2VhcmNoJyAvPlxyXG4gICAgICAgICAgICA8SWNvbiBpc1NpemU9J3NtYWxsJyBpc0FsaWduPSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuICAgICAgICAgICAgPC9JY29uPlxyXG4gICAgICAgIDwvQ29udHJvbD5cclxuICAgIDwvUGFuZWxCbG9jaz5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAge3RoaXMucHJvcHMudGVhbXMubWFwKChpbmRleCk9PihcclxuICAgICAgICAgICAgLy8gPFBhbmVsVGFiIGtleT17aW5kZXguX2lkfT57aW5kZXgubmFtZX08L1BhbmVsVGFiPlxyXG4gICAgICAgICAgICA8UGFuZWxCbG9jayBjbGFzc05hbWUgPVwicGFuZWxfYmxvY2tcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZWxlY3RlZFRlYW0oZSwgaW5kZXguY29kZSl9XHJcbiAgICAgICAgICAgIGlzQWN0aXZlIGtleT17aW5kZXguX2lkfT5cclxuICAgICAgICA8UGFuZWxJY29uIGNsYXNzTmFtZT1cImZhIGZhLWJvb2tcIiAvPlxyXG4gICAgICAgIHtpbmRleC5uYW1lfVxyXG4gICAgPC9QYW5lbEJsb2NrPlxyXG5cclxuICAgICAgICApKX0gXHJcblxyXG4gIFxyXG5cclxuICAgICAgICA8L1BhbmVsPlxyXG4gICAgICAgIDwvQ29sdW1uPlxyXG4gICAgICAgIDxDb2x1bW4+XHJcbiAgICAgICAgPFBhbmVsPlxyXG4gICAgICAgIDxQYW5lbEhlYWRpbmc+U2VsZWN0IFBsYXllcnM8L1BhbmVsSGVhZGluZz5cclxuICAgICAgIDxTaG93VGVhbVBsYXllciAgcGxheWVycyA9e3RoaXMuc3RhdGUudGVhbVBsYXllcnN9Lz5cclxuICAgICAgIDwvUGFuZWw+XHJcbiAgICAgICAgPC9Db2x1bW4+XHJcbiAgICAgICAgPC9Db2x1bW5zPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgLnBhbmVsX2Jsb2NrIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYW5lbF9ibG9jazpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9MYXlvdXQ+KVxyXG5cclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=pages\\teams.js */"
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
//# sourceMappingURL=4.ea12468edf034d76ad95.hot-update.js.map