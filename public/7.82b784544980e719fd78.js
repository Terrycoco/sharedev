webpackJsonp([7,13],{

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var f,d=0;d<c.length;d++)f=c[d],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(5),_react2=_interopRequireDefault(_react),_PageBar=__webpack_require__(322),_PageBar2=_interopRequireDefault(_PageBar),_walkActions=__webpack_require__(324),actions=_interopRequireWildcard(_walkActions),_reactRedux=__webpack_require__(30),_MyWalkList=__webpack_require__(920),_MyWalkList2=_interopRequireDefault(_MyWalkList);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var MyWalks=function(a){function b(c){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c))}return _inherits(b,a),_createClass(b,[{key:'componentWillMount',value:function componentWillMount(){this.props.getMyWalks()}},{key:'handleTouchTap',value:function handleTouchTap(c){c.preventDefault()}},{key:'render',value:function render(){return _react2.default.createElement('div',{className:'PAGE',key:'mywalks'},_react2.default.createElement(_PageBar2.default,{title:'My Walks',iconLeft:'hamburger',onLeft:'home'}),_react2.default.createElement('div',{className:'CONTENT'},_react2.default.createElement('div',{className:'COLUMN-1'},_react2.default.createElement(_MyWalkList2.default,null))))}}]),b}(_react.Component);exports.default=(0,_reactRedux.connect)(null,actions)(MyWalks);

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _extends2=__webpack_require__(54),_extends3=_interopRequireDefault(_extends2),_objectWithoutProperties2=__webpack_require__(61),_objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2),_simpleAssign=__webpack_require__(41),_simpleAssign2=_interopRequireDefault(_simpleAssign),_react=__webpack_require__(5),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var Divider=function(b,c){var d=b.inset,e=b.style,f=(0,_objectWithoutProperties3.default)(b,['inset','style']),g=c.muiTheme,h=g.baseTheme,i=g.prepareStyles,j={root:{margin:0,marginTop:-1,marginLeft:d?72:0,height:1,border:'none',backgroundColor:h.palette.borderColor}};return _react2.default.createElement('hr',(0,_extends3.default)({},f,{style:i((0,_simpleAssign2.default)(j.root,e))}))};Divider.muiName='Divider', true?void 0:Divider.propTypes={inset:_react.PropTypes.bool,style:_react.PropTypes.object},Divider.defaultProps={inset:!1},Divider.contextTypes={muiTheme:_react.PropTypes.object.isRequired},exports.default=Divider;

/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.default=void 0;var _Divider=__webpack_require__(838),_Divider2=_interopRequireDefault(_Divider);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default=_Divider2.default;

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(5),_react2=_interopRequireDefault(_react),_Divider=__webpack_require__(839),_Divider2=_interopRequireDefault(_Divider),_actions=__webpack_require__(135),actions=_interopRequireWildcard(_actions),_reactRedux=__webpack_require__(30);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}__webpack_require__(831);var WalkItem=function(a){function b(c){_classCallCheck(this,b);var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return d.goToWalk=d.goToWalk.bind(d),d}return _inherits(b,a),_createClass(b,[{key:'goToWalk',value:function goToWalk(){this.props.getWalkSummary(this.props.walk.id)}},{key:'render',value:function render(){return _react2.default.createElement('div',null,_react2.default.createElement('div',{className:'walk-card',onClick:this.goToWalk},_react2.default.createElement('p',{className:'walk-title'},this.props.walk.title),_react2.default.createElement('p',{className:'walk-city'},this.props.walk.city),_react2.default.createElement('p',{className:'walk-start'},'Starts at '+this.props.walk.start_pt_text)),_react2.default.createElement(_Divider2.default,null))}}]),b}(_react.Component);exports.default=(0,_reactRedux.connect)(null,actions)(WalkItem);

/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(5),_react2=_interopRequireDefault(_react),_reactRedux=__webpack_require__(30),_WalkItem=__webpack_require__(875),_WalkItem2=_interopRequireDefault(_WalkItem);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}__webpack_require__(831);var WalkList=function(a){function b(c){_classCallCheck(this,b);var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return d.renderItems=d.renderItems.bind(d),d}return _inherits(b,a),_createClass(b,[{key:'renderItems',value:function renderItems(){var c;return 0==this.props.mywalks.length?_react2.default.createElement('div',{className:'noresults'},_react2.default.createElement('p',null,'No Saved Walks')):(c=this.props.mywalks.map(function(d){if('LineString'!=d.geometry.type)return _react2.default.createElement(_WalkItem2.default,{key:'walksum'+d.properties.id,walk:d.properties,backTo:'mywalks'})}),c)}},{key:'render',value:function render(){return _react2.default.createElement('div',{className:'LIST'},this.renderItems())}}]),b}(_react.Component);function mapStateToProps(a){return{mywalks:a.walks.myWalks.features}}exports.default=(0,_reactRedux.connect)(mapStateToProps)(WalkList);

/***/ })

});