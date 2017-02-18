webpackJsonp([16],{

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _PageBar = __webpack_require__(88);

var _PageBar2 = _interopRequireDefault(_PageBar);

var _actions = __webpack_require__(103);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(40);

var _reactRouter = __webpack_require__(215);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(310);

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'testDetail',
    value: function testDetail() {
      this.props.getWalkDetails(4);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'HOME' },
        _react2.default.createElement(_PageBar2.default, { title: 'ShareWalks' }),
        _react2.default.createElement(
          'nav',
          { className: 'CONTENT center-children' },
          _react2.default.createElement(
            'ul',
            { className: 'main-menu' },
            _react2.default.createElement(
              'li',
              { key: 'search' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/search' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Find A Walk'
                ),
                _react2.default.createElement('img', { className: 'fade', src: '/images/right_arrow.png' })
              )
            ),
            _react2.default.createElement(
              'li',
              { key: 'create' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/create' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Create A Walk'
                ),
                _react2.default.createElement('img', { className: 'fade', src: '/images/right_arrow.png' })
              )
            ),
            _react2.default.createElement(
              'li',
              { key: 'mywalks' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/mywalks' },
                _react2.default.createElement(
                  'span',
                  null,
                  'My Walks'
                ),
                _react2.default.createElement('img', { className: 'fade', src: '/images/right_arrow.png' })
              )
            ),
            _react2.default.createElement(
              'li',
              { key: 'about' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/about' },
                _react2.default.createElement(
                  'span',
                  null,
                  'About ShareWalks'
                ),
                _react2.default.createElement('img', { className: 'fade', src: '/images/right_arrow.png' })
              )
            ),
            _react2.default.createElement(
              'li',
              { key: 'test' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/test' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Test'
                ),
                _react2.default.createElement('img', { className: 'fade', src: '/images/right_arrow.png' })
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, actions)(Home);

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[309]);