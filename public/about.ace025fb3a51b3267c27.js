webpackJsonp([22,9],{

/***/ 506:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PageBar = __webpack_require__(115);

var _PageBar2 = _interopRequireDefault(_PageBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(506);

var About = function (_Component) {
  _inherits(About, _Component);

  function About(props) {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
  }

  _createClass(About, [{
    key: 'handleTouchTap',
    value: function handleTouchTap(e) {
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var style = { zIndex: this.props.zindex };
      return _react2.default.createElement(
        'div',
        { style: style, className: 'PAGE ABOUT', key: 'about' },
        _react2.default.createElement(_PageBar2.default, { title: 'About', leftIcon: 'hamburger', backTo: 'home' }),
        _react2.default.createElement(
          'div',
          { className: 'CONTENT' },
          _react2.default.createElement(
            'div',
            { className: 'COLUMN' },
            _react2.default.createElement(
              'div',
              { className: 'textbox' },
              _react2.default.createElement(
                'p',
                null,
                'Author: Terry Marr'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Built Using: React, Redux, Leaflet, Node, Postgres'
              ),
              _react2.default.createElement(
                'p',
                null,
                'This project is under construction.  If you like what you see, we\'d love to hear from you!'
              ),
              _react2.default.createElement(
                'p',
                null,
                '  ',
                _react2.default.createElement(
                  'a',
                  { href: 'mailto:sharewalks1@gmail.com' },
                  'Contact Us'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;

/***/ })

},[516]);