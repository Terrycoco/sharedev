webpackJsonp([8,13],{

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var f,d=0;d<c.length;d++)f=c[d],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(5),_react2=_interopRequireDefault(_react),_PageBar=__webpack_require__(322),_PageBar2=_interopRequireDefault(_PageBar),_actions=__webpack_require__(135),actions=_interopRequireWildcard(_actions),_reactRedux=__webpack_require__(30);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}__webpack_require__(935);var Test=function(a){function b(c){_classCallCheck(this,b);var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return d.handleClick=d.handleClick.bind(d),d}return _inherits(b,a),_createClass(b,[{key:'handleClick',value:function handleClick(c){c.preventDefault()}},{key:'render',value:function render(){return _react2.default.createElement('div',{className:'PAGE'},_react2.default.createElement(_PageBar2.default,{title:'Testing',iconLeft:'hamburger',onLeft:'home'}),_react2.default.createElement('div',{className:'CONTENT'},_react2.default.createElement('div',{className:'COLUMN'},_react2.default.createElement('div',{className:'textbox'},'Lorem ipsum dolor sit amet, rutrum tellus ut. Vel sem nisl, sapien mauris metus ante arcu bibendum blandit, id vitae hac, ullamcorper tincidunt egestas vivamus arcu id, pretium vel aenean. Arcu inceptos porttitor nascetur phasellus rutrum. Condimentum in, nec quam ut sed, ut id vel, faucibus faucibus. Arcu mauris mattis vel, arcu augue in in in in, erat in, blandit risus, magna elit in urna. Accumsan tincidunt cursus quisque suscipit, dui a. Semper quia enim porttitor id autem. Purus velit suscipit vivamus, elementum non est cras sem volutpat, et pretium et molestie. Feugiat quis tortor eget orci. Vel pretium ac pharetra libero quam pede, velit neque, suspendisse dolor fermentum amet, quisque consectetuer viverra nonummy dolor facilisi. Lorem elit lectus eget tempor sodales, non ut turpis venenatis volutpat ipsum. Lectus consequat urna ut neque fusce, eget massa ut integer est, ipsum suspendisse quisque sed a, sed mauris vitae enim tincidunt integer, dolor fringilla. In leo velit wisi quam integer, aliquam dolor enim sapien morbi lacinia non, non fermentum hendrerit, amet malesuada, ullamcorper amet. Varius integer interdum, amet non gravida ultrices pulvinar, mi lectus gravida, euismod risus placerat praesent arcu. Voluptatum mauris sit arcu, morbi phasellus a, vel integer elit. Sit nascetur porta morbi, porttitor augue ante dui et nulla rutrum, vivamus mollis massa, urna sem diam odio quisque. Vestibulum erat tristique praesent ornare risus, justo nam velit mus ac, ipsum dis. Non elit dui libero, aenean vivamus eros faucibus, leo et eu orci in sed nonummy, praesent curabitur turpis morbi ante parturient, eu odio risus consectetuer facilisis pellentesque. Sit tortor curabitur enim rutrum, suspendisse porta ipsum convallis dolor, libero laoreet tristique metus elit. Lectus perferendis ipsum lorem consequat. Tortor nulla lectus molestie donec metus, nisl vivamus aenean tellus eget nunc tempor. Non lorem proin augue potenti, elit ante tristique dolor vitae enim, sed erat ultricies elit nisl duis. Orci elit risus nulla et, ultricies felis malesuada vitae libero dignissim suspendisse. Ac etiam blandit volutpat nec diam, rutrum commodo laoreet, volutpat erat vestibulum eros exercitationem ridiculus pellentesque, dolor faucibus nascetur, porttitor duis accumsan eu ornare neque eleifend. Tincidunt convallis hendrerit eros, ut enim iaculis, velit massa magni erat magna hendrerit nam, cras turpis fermentum orci aliquam feugiat. Id nemo aliquip vel mauris semper.'),' '),_react2.default.createElement('div',{className:'COLUMN'},_react2.default.createElement('div',{className:'textbox'},'Lorem ipsum dolor sit amet, rutrum tellus ut. Vel sem nisl, sapien mauris metus ante arcu bibendum blandit, id vitae hac, ullamcorper tincidunt egestas vivamus arcu id, pretium vel aenean. Arcu inceptos porttitor nascetur phasellus rutrum. Condimentum in, nec quam ut sed, ut id vel, faucibus faucibus. Arcu mauris mattis vel, arcu augue in in in in, erat in, blandit risus, magna elit in urna. Accumsan tincidunt cursus quisque suscipit, dui a. Semper quia enim porttitor id autem. Purus velit suscipit vivamus, elementum non est cras sem volutpat, et pretium et molestie. Feugiat quis tortor eget orci. Vel pretium ac pharetra libero quam pede, velit neque, suspendisse dolor fermentum amet, quisque consectetuer viverra nonummy dolor facilisi. Lorem elit lectus eget tempor sodales, non ut turpis venenatis volutpat ipsum. Lectus consequat urna ut neque fusce, eget massa ut integer est, ipsum suspendisse quisque sed a, sed mauris vitae enim tincidunt integer, dolor fringilla. In leo velit wisi quam integer, aliquam dolor enim sapien morbi lacinia non, non fermentum hendrerit, amet malesuada, ullamcorper amet. Varius integer interdum, amet non gravida ultrices pulvinar, mi lectus gravida, euismod risus placerat praesent arcu. Voluptatum mauris sit arcu, morbi phasellus a, vel integer elit. Sit nascetur porta morbi, porttitor augue ante dui et nulla rutrum, vivamus mollis massa, urna sem diam odio quisque. Vestibulum erat tristique praesent ornare risus, justo nam velit mus ac, ipsum dis. Non elit dui libero, aenean vivamus eros faucibus, leo et eu orci in sed nonummy, praesent curabitur turpis morbi ante parturient, eu odio risus consectetuer facilisis pellentesque. Sit tortor curabitur enim rutrum, suspendisse porta ipsum convallis dolor, libero laoreet tristique metus elit. Lectus perferendis ipsum lorem consequat. Tortor nulla lectus molestie donec metus, nisl vivamus aenean tellus eget nunc tempor. Non lorem proin augue potenti, elit ante tristique dolor vitae enim, sed erat ultricies elit nisl duis. Orci elit risus nulla et, ultricies felis malesuada vitae libero dignissim suspendisse. Ac etiam blandit volutpat nec diam, rutrum commodo laoreet, volutpat erat vestibulum eros exercitationem ridiculus pellentesque, dolor faucibus nascetur, porttitor duis accumsan eu ornare neque eleifend. Tincidunt convallis hendrerit eros, ut enim iaculis, velit massa magni erat magna hendrerit nam, cras turpis fermentum orci aliquam feugiat. Id nemo aliquip vel mauris semper.'))))}}]),b}(_react.Component);exports.default=(0,_reactRedux.connect)(null,actions)(Test);

/***/ }),

/***/ 935:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});