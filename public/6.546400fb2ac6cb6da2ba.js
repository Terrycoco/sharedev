webpackJsonp([6],{

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PageBar = __webpack_require__(82);

var _PageBar2 = _interopRequireDefault(_PageBar);

var _actions = __webpack_require__(55);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(21);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(614);

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
        _react2.default.createElement(_PageBar2.default, { title: 'About', leftIcon: 'hamburger', backTo: '/' }),
        _react2.default.createElement(
          'div',
          { className: 'CONTENT' },
          _react2.default.createElement(
            'p',
            null,
            'Author: Terry Marr'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Built Using: '
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, actions)(About);

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(547)();
exports.push([module.i, "", "", {"version":3,"file":"/home/terry/myProjects/PWA/apps-dev/node_modules/css-loader/index.js?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!/home/terry/myProjects/PWA/apps-dev/node_modules/sass-loader/index.js?sourceMap!/home/terry/myProjects/PWA/apps-dev/src/routes/About/about.scss","sources":["/./node_modules/sass-loader/index.js?sourceMap!/home/terry/myProjects/PWA/apps-dev/src/routes/About/about.scss"],"sourcesContent":[""],"mappings":"AAAA","sourceRoot":"webpack://"}]);

/***/ },

/***/ 614:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(611);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(548)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./about.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./about.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }

});