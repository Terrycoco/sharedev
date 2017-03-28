webpackJsonp([8,14],{

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var f,d=0;d<c.length;d++)f=c[d],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(7),_react2=_interopRequireDefault(_react),_PageBar=__webpack_require__(819),_PageBar2=_interopRequireDefault(_PageBar),_walkActions=__webpack_require__(325),actions=_interopRequireWildcard(_walkActions),_reactRedux=__webpack_require__(46),_MyWalkList=__webpack_require__(923),_MyWalkList2=_interopRequireDefault(_MyWalkList);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var MyWalks=function(a){function b(c){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c))}return _inherits(b,a),_createClass(b,[{key:'componentWillMount',value:function componentWillMount(){this.props.getMyWalks()}},{key:'handleTouchTap',value:function handleTouchTap(c){c.preventDefault()}},{key:'render',value:function render(){return _react2.default.createElement('div',{className:'PAGE',key:'mywalks'},_react2.default.createElement(_PageBar2.default,{title:'My Walks',iconLeft:'hamburger',onLeft:'home'}),_react2.default.createElement('div',{className:'CONTENT'},_react2.default.createElement('div',{className:'COLUMN-1'},_react2.default.createElement(_MyWalkList2.default,null))))}}]),b}(_react.Component);exports.default=(0,_reactRedux.connect)(null,actions)(MyWalks);

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

/***/ 832:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _extends2=__webpack_require__(54),_extends3=_interopRequireDefault(_extends2),_objectWithoutProperties2=__webpack_require__(61),_objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2),_simpleAssign=__webpack_require__(40),_simpleAssign2=_interopRequireDefault(_simpleAssign),_react=__webpack_require__(7),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var Divider=function(b,c){var d=b.inset,e=b.style,f=(0,_objectWithoutProperties3.default)(b,['inset','style']),g=c.muiTheme,h=g.baseTheme,i=g.prepareStyles,j={root:{margin:0,marginTop:-1,marginLeft:d?72:0,height:1,border:'none',backgroundColor:h.palette.borderColor}};return _react2.default.createElement('hr',(0,_extends3.default)({},f,{style:i((0,_simpleAssign2.default)(j.root,e))}))};Divider.muiName='Divider', true?void 0:Divider.propTypes={inset:_react.PropTypes.bool,style:_react.PropTypes.object},Divider.defaultProps={inset:!1},Divider.contextTypes={muiTheme:_react.PropTypes.object.isRequired},exports.default=Divider;

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.default=void 0;var _Divider=__webpack_require__(842),_Divider2=_interopRequireDefault(_Divider);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default=_Divider2.default;

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(7),_react2=_interopRequireDefault(_react),_Divider=__webpack_require__(843),_Divider2=_interopRequireDefault(_Divider),_actions=__webpack_require__(135),actions=_interopRequireWildcard(_actions),_reactRedux=__webpack_require__(46);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}__webpack_require__(832);var WalkItem=function(a){function b(c){_classCallCheck(this,b);var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return d.goToWalk=d.goToWalk.bind(d),d}return _inherits(b,a),_createClass(b,[{key:'goToWalk',value:function goToWalk(){this.props.getWalkSummary(this.props.walk.id)}},{key:'render',value:function render(){return _react2.default.createElement('div',null,_react2.default.createElement('div',{className:'walk-card',onClick:this.goToWalk},_react2.default.createElement('p',{className:'walk-title'},this.props.walk.title),_react2.default.createElement('p',{className:'walk-city'},this.props.walk.city),_react2.default.createElement('p',{className:'walk-start'},'Starts at '+this.props.walk.start_pt_text)),_react2.default.createElement(_Divider2.default,null))}}]),b}(_react.Component);exports.default=(0,_reactRedux.connect)(null,actions)(WalkItem);

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(7),_react2=_interopRequireDefault(_react),_reactRedux=__webpack_require__(46),_WalkItem=__webpack_require__(880),_WalkItem2=_interopRequireDefault(_WalkItem);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}__webpack_require__(832);var WalkList=function(a){function b(c){_classCallCheck(this,b);var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return d.renderItems=d.renderItems.bind(d),d}return _inherits(b,a),_createClass(b,[{key:'renderItems',value:function renderItems(){var c;return 0==this.props.mywalks.length?_react2.default.createElement('div',{className:'noresults'},_react2.default.createElement('p',null,'No Saved Walks')):(c=this.props.mywalks.map(function(d){if('LineString'!=d.geometry.type)return _react2.default.createElement(_WalkItem2.default,{key:'walksum'+d.properties.id,walk:d.properties,backTo:'mywalks'})}),c)}},{key:'render',value:function render(){return _react2.default.createElement('div',{className:'LIST'},this.renderItems())}}]),b}(_react.Component);function mapStateToProps(a){return{mywalks:a.walks.myWalks.features}}exports.default=(0,_reactRedux.connect)(mapStateToProps)(WalkList);

/***/ })

});