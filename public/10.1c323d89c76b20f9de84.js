webpackJsonp([10,14],{

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var f,d=0;d<c.length;d++)f=c[d],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(7),_react2=_interopRequireDefault(_react),_PageBar=__webpack_require__(819),_PageBar2=_interopRequireDefault(_PageBar);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}__webpack_require__(936);var Coming=function(a){function b(c){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c))}return _inherits(b,a),_createClass(b,[{key:'handleTouchTap',value:function handleTouchTap(c){c.preventDefault()}},{key:'render',value:function render(){var c={zIndex:this.props.zindex};return _react2.default.createElement('div',{style:c,className:'PAGE',key:'about'},_react2.default.createElement(_PageBar2.default,{title:'Coming Soon',iconLeft:'hamburger',onLeft:'home'}),_react2.default.createElement('div',{className:'CONTENT center-children'},_react2.default.createElement('div',{className:'FORM'},_react2.default.createElement('div',{className:'textbox'},_react2.default.createElement('h4',{className:'header'},'Coming Soon'),_react2.default.createElement('p',null,'Hi and thanks for visiting ShareWalks!'),_react2.default.createElement('p',null,'We are hard at work finishing this feature.  If you like what you see, we\'d love to hear from you!'),_react2.default.createElement('p',null,_react2.default.createElement('a',{href:'mailto:sharewalks1@gmail.com'},'Send Feedback'))))))}}]),b}(_react.Component);exports.default=Coming;

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},_createClass=function(){function a(b,c){for(var f,d=0;d<c.length;d++)f=c[d],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(7),_react2=_interopRequireDefault(_react),_reactRedux=__webpack_require__(46),_navActions=__webpack_require__(110);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}__webpack_require__(820);var icons={hamburger:'/images/menu_white.png',goLeft:'/images/left_arrow.png',goRight:'/images/right_arrow.png',info:'/images/info.png'},PageBar=function(a){function b(c){_classCallCheck(this,b);var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return d.state={innerLeft:' ',innerRight:' '},d.getHandler=d.getHandler.bind(d),d.setInner=d.setInner.bind(d),d}return _inherits(b,a),_createClass(b,[{key:'componentDidMount',value:function componentDidMount(){this.setInner(this.props)}},{key:'setInner',value:function setInner(c){c.iconLeft&&icons[c.iconLeft]?this.setState({innerLeft:_react2.default.createElement('img',{src:icons[c.iconLeft]})}):this.setState({innerLeft:c.iconLeft}),c.iconRight&&icons[c.iconRight]?this.setState({innerRight:_react2.default.createElement('img',{src:icons[c.iconRight]})}):this.setState({innerRight:c.iconRight})}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(c){this.setInner(c)}},{key:'getHandler',value:function getHandler(c){var d=this;if(this.props['on'+c]){var f=function(){var g=d.props['on'+c];if('function'==typeof g)return{v:function v(){g()}};if('prev'===g){var h=function(){var k=d.props.prevRoute,l=d.props.requestRoute;return{v:{v:function handler(){l(k,'left')}}}}();if('object'===('undefined'==typeof h?'undefined':_typeof(h)))return h.v}else{var j=function(){var k=d.props.requestRoute;return{v:{v:function v(){k(g,c.toLowerCase())}}}}();if('object'===('undefined'==typeof j?'undefined':_typeof(j)))return j.v}}();if('object'===('undefined'==typeof f?'undefined':_typeof(f)))return f.v}else return function(){}}},{key:'render',value:function render(){return _react2.default.createElement('div',{className:'PageBar'},_react2.default.createElement('span',{className:'Left',onClick:this.getHandler('Left')},this.state.innerLeft),_react2.default.createElement('span',{className:'title'},this.props.title),_react2.default.createElement('span',{className:'Right',onClick:this.getHandler('Right')},this.state.innerRight))}}]),b}(_react.Component);function mapStateToProps(a){return{prevRoute:a.nav.prevRoute}}exports.default=(0,_reactRedux.connect)(mapStateToProps,{requestRoute:_navActions.requestRoute})(PageBar);

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 936:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});