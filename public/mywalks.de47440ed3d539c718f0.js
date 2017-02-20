webpackJsonp([18,4],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
module.exports = __webpack_require__(28).Object.assign;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(117)
  , gOPS     = __webpack_require__(222)
  , pIE      = __webpack_require__(216)
  , toObject = __webpack_require__(96)
  , IObject  = __webpack_require__(230)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(115)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(35);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(101)});

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(63);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Divider = __webpack_require__(285);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Divider2.default;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _simpleAssign = __webpack_require__(4);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider(props, context) {
  var inset = props.inset,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['inset', 'style']);
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      prepareStyles = _context$muiTheme.prepareStyles;


  var styles = {
    root: {
      margin: 0,
      marginTop: -1,
      marginLeft: inset ? 72 : 0,
      height: 1,
      border: 'none',
      backgroundColor: baseTheme.palette.borderColor
    }
  };

  return _react2.default.createElement('hr', (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }));
};

Divider.muiName = 'Divider';

 false ? Divider.propTypes = {
  /**
   * If true, the `Divider` will be indented.
   */
  inset: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;

Divider.defaultProps = {
  inset: false
};

Divider.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};

exports.default = Divider;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Divider = __webpack_require__(278);

var _Divider2 = _interopRequireDefault(_Divider);

var _walkActions = __webpack_require__(264);

var actions = _interopRequireWildcard(_walkActions);

var _reactRedux = __webpack_require__(27);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(217);

var WalkItem = function (_Component) {
  _inherits(WalkItem, _Component);

  function WalkItem(props) {
    _classCallCheck(this, WalkItem);

    var _this = _possibleConstructorReturn(this, (WalkItem.__proto__ || Object.getPrototypeOf(WalkItem)).call(this, props));

    _this.goToWalk = _this.goToWalk.bind(_this);
    return _this;
  }
  //grab router from context


  _createClass(WalkItem, [{
    key: 'goToWalk',
    value: function goToWalk(walkId) {
      this.props.getWalkSummary(this.props.walk.id, this.context.router, this.props.backTo);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'walk-card', onClick: this.goToWalk },
          _react2.default.createElement(
            'p',
            { className: 'walk-title' },
            this.props.walk.title
          ),
          _react2.default.createElement(
            'p',
            { className: 'walk-city' },
            this.props.walk.city
          ),
          _react2.default.createElement(
            'p',
            { className: 'walk-start' },
            'Starts at ' + this.props.walk.start_pt_text
          )
        ),
        _react2.default.createElement(_Divider2.default, null)
      );
    }
  }]);

  return WalkItem;
}(_react.Component);

WalkItem.contextTypes = {
  router: _react2.default.PropTypes.object
};
exports.default = (0, _reactRedux.connect)(null, actions)(WalkItem);

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PageBar = __webpack_require__(60);

var _PageBar2 = _interopRequireDefault(_PageBar);

var _actions = __webpack_require__(62);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(27);

var _MyWalkList = __webpack_require__(386);

var _MyWalkList2 = _interopRequireDefault(_MyWalkList);

var _reactRouter = __webpack_require__(107);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyWalks = function (_Component) {
  _inherits(MyWalks, _Component);

  function MyWalks(props) {
    _classCallCheck(this, MyWalks);

    return _possibleConstructorReturn(this, (MyWalks.__proto__ || Object.getPrototypeOf(MyWalks)).call(this, props));
  }

  _createClass(MyWalks, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //fetch mywalks 
      this.props.getMyWalks(_reactRouter.browserHistory);
    }
  }, {
    key: 'handleTouchTap',
    value: function handleTouchTap(e) {
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'PAGE MYWALKS', key: 'mywalks' },
        _react2.default.createElement(_PageBar2.default, { title: 'My Walks', leftIcon: 'hamburger', backTo: '/home' }),
        _react2.default.createElement(
          'div',
          { className: 'CONTENT center-children' },
          _react2.default.createElement(_MyWalkList2.default, null)
        )
      );
    }
  }]);

  return MyWalks;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, actions)(MyWalks);

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _WalkItem = __webpack_require__(315);

var _WalkItem2 = _interopRequireDefault(_WalkItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(217);

var WalkList = function (_Component) {
  _inherits(WalkList, _Component);

  function WalkList(props) {
    _classCallCheck(this, WalkList);

    var _this = _possibleConstructorReturn(this, (WalkList.__proto__ || Object.getPrototypeOf(WalkList)).call(this, props));

    _this.renderItems = _this.renderItems.bind(_this);
    return _this;
  }

  _createClass(WalkList, [{
    key: 'renderItems',
    value: function renderItems() {
      var items = void 0;
      if (this.props.mywalks.length == 0) {
        return _react2.default.createElement(
          'div',
          { className: 'noresults' },
          _react2.default.createElement(
            'p',
            null,
            'No Results Found'
          )
        );
      } else {
        items = this.props.mywalks.map(function (walk) {
          if (walk.geometry.type != "LineString") {
            return _react2.default.createElement(_WalkItem2.default, { key: 'walksum' + walk.properties.id,
              walk: walk.properties, backTo: 'mywalks'
            });
          }
        });
      }
      return items;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'walklist' },
        this.renderItems()
      );
    }
  }]);

  return WalkList;
}(_react.Component);

function mapStateToProps(state) {
  return {
    mywalks: state.search.myWalks.features
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(WalkList);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ })

},[348]);