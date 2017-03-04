webpackJsonp([6],{

/***/ 355:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Divider = __webpack_require__(445);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Divider2.default;

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(14);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(13);

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

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Divider = __webpack_require__(444);

var _Divider2 = _interopRequireDefault(_Divider);

var _actions = __webpack_require__(48);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(44);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(355);

var WalkItem = function (_Component) {
  _inherits(WalkItem, _Component);

  function WalkItem(props) {
    _classCallCheck(this, WalkItem);

    var _this = _possibleConstructorReturn(this, (WalkItem.__proto__ || Object.getPrototypeOf(WalkItem)).call(this, props));

    _this.goToWalk = _this.goToWalk.bind(_this);
    return _this;
  }

  _createClass(WalkItem, [{
    key: 'goToWalk',
    value: function goToWalk(walkId) {
      this.props.getWalkSummary(this.props.walk.id);
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

exports.default = (0, _reactRedux.connect)(null, actions)(WalkItem);

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(44);

var _WalkItem = __webpack_require__(468);

var _WalkItem2 = _interopRequireDefault(_WalkItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(355);

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
            'No Saved Walks'
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
    mywalks: state.walks.myWalks.features
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(WalkList);

/***/ }),

/***/ 519:
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

var _actions = __webpack_require__(48);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(44);

var _MyWalkList = __webpack_require__(504);

var _MyWalkList2 = _interopRequireDefault(_MyWalkList);

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
      this.props.getMyWalks();
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
        _react2.default.createElement(_PageBar2.default, { title: 'My Walks', leftIcon: 'hamburger', backTo: 'home' }),
        _react2.default.createElement(
          'div',
          { className: 'CONTENT ' },
          _react2.default.createElement(
            'div',
            { className: 'COLUMN center-children' },
            _react2.default.createElement(_MyWalkList2.default, null)
          )
        )
      );
    }
  }]);

  return MyWalks;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, actions)(MyWalks);

/***/ })

});