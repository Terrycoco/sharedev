webpackJsonp([20],{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isProd = isProd;
exports.getApi = getApi;

var _config = __webpack_require__(70);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var envVar = process.env.OPENSHIFT_ENV_VAR;

function isProd() {
  if (true) {
    return true;
  }
  return false;
}

function getApi() {
  return isProd() ? _config2.default.production.api : _config2.default.development.api;
}

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _navActions = __webpack_require__(44);

var _reactRedux = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.requestRoute(this.props.to, this.props.fromDir);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { key: this.props.key, onClick: this.handleClick.bind(this) },
        this.props.children
      );
    }
  }]);

  return Link;
}(_react.Component);

Link.propTypes = {
  to: _react2.default.PropTypes.string.isRequired,
  fromDir: _react2.default.PropTypes.string,
  key: _react2.default.PropTypes.string.isRequired
};

exports.default = (0, _reactRedux.connect)(null, { requestRoute: _navActions.requestRoute })(Link);

/***/ }),

/***/ 463:
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

var _Link = __webpack_require__(353);

var _Link2 = _interopRequireDefault(_Link);

var _environment = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(465);

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
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
              null,
              _react2.default.createElement(
                _Link2.default,
                { key: 'search', to: 'search', fromDir: 'right' },
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
              null,
              _react2.default.createElement(
                _Link2.default,
                { key: 'create', to: 'create', fromDir: 'right' },
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
              null,
              _react2.default.createElement(
                _Link2.default,
                { key: 'mywalks', to: 'mywalks', fromDir: 'right' },
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
              null,
              _react2.default.createElement(
                _Link2.default,
                { key: 'about', to: 'about', fromDir: 'right' },
                _react2.default.createElement(
                  'span',
                  null,
                  'About ShareWalks'
                ),
                _react2.default.createElement('img', { className: 'fade', src: '/images/right_arrow.png' })
              )
            ),
            (0, _environment.isProd)() ? null : _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _Link2.default,
                { key: 'test', to: 'test', fromDir: 'right' },
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

exports.default = Home;

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  development: {
    api: 'http://localhost:3090'
  },

  production: {
    api: 'https://api-tmarr.rhcloud.com'
  },
  googleApiKey: 'AIzaSyDmE6MtwHWYwR1C-ketRL9vZcbrMlK0ps0',
  mapzenApiKey: 'mapzen-sAkpydF',
  mapboxApiKey: 'pk.eyJ1IjoidGVycnljb2NvIiwiYSI6ImNpd3VjZDg1djAwdTEydHFydDVhN3NmNXIifQ.mH05pbOoxVeyzPKas0Gbig',
  mapquestKey: 'GVTzKzwMDTCKBu1S2Vx0RaN0XaWUYTlj',
  mapquestSecret: 'uIigGYgRCE0XWs63'
};

exports.default = config;

/***/ })

},[463]);