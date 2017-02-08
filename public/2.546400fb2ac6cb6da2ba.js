webpackJsonp([2],{

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(21);

var _PageBar = __webpack_require__(82);

var _PageBar2 = _interopRequireDefault(_PageBar);

var _LeafletMap = __webpack_require__(605);

var _LeafletMap2 = _interopRequireDefault(_LeafletMap);

var _WalkList = __webpack_require__(608);

var _WalkList2 = _interopRequireDefault(_WalkList);

var _actions = __webpack_require__(55);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(616);

var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results(props) {
    _classCallCheck(this, Results);

    var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this, props));

    _this.state = {
      isFlipped: false
    };
    _this.flip = _this.flip.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }
  //grab router from context


  _createClass(Results, [{
    key: 'flip',
    value: function flip() {
      this.setState({ isFlipped: !this.state.isFlipped });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      var walkId = this._name.value;
      this.props.getWalkDetails(walkId, this.context.router);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'PAGE', key: 'results' },
        _react2.default.createElement(_PageBar2.default, { title: 'Find A Walk', leftIcon: 'goLeft', backTo: '/searchL', fwdTo: this.state.isFlipped ? "List" : "Map", onFlip: this.flip }),
        _react2.default.createElement(
          'div',
          { className: 'CONTENT' },
          _react2.default.createElement('input', { ref: function ref(input) {
              return _this2._name = input;
            }, id: 'walkId', className: 'hidden' }),
          _react2.default.createElement('button', { id: 'goToDetails', onClick: this.handleClick, className: 'hidden' }),
          _react2.default.createElement(
            'div',
            { className: this.state.isFlipped ? 'flip-container flip' : 'flip-container' },
            _react2.default.createElement(
              'div',
              { className: 'flipper' },
              _react2.default.createElement(
                'div',
                { className: 'front' },
                _react2.default.createElement(_WalkList2.default, null)
              ),
              _react2.default.createElement(
                'div',
                { className: 'back' },
                _react2.default.createElement(_LeafletMap2.default, null)
              )
            )
          )
        )
      );
    }
  }]);

  return Results;
}(_react.Component);

Results.contextTypes = {
  router: _react2.default.PropTypes.object
};
exports.default = (0, _reactRedux.connect)(null, actions)(Results);

// <div className="back-logo"></div>
//                <div className="back-title">@davidwalshblog</div>
//                <p>Mozilla Web Developer, MooTools & jQuery Consultant, MooTools Core Developer, Javascript Fanatic, CSS Tinkerer, PHP Hacker, and web lover.</p>

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _SvgIcon = __webpack_require__(560);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SvgIcon2.default;

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _shouldUpdate = __webpack_require__(565);

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _shallowEqual = __webpack_require__(136);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _createHelper = __webpack_require__(555);

var _createHelper2 = _interopRequireDefault(_createHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pure = (0, _shouldUpdate2.default)(function (props, nextProps) {
  return !(0, _shallowEqual2.default)(props, nextProps);
});

exports.default = (0, _createHelper2.default)(pure, 'pure', true, true);

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;
var createHelper = function createHelper(func, helperName) {
  var setDisplayName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var noArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (false) {
    var _ret = function () {
      /* eslint-disable global-require */
      var wrapDisplayName = require('./wrapDisplayName').default;
      /* eslint-enable global-require */

      if (noArgs) {
        return {
          v: function v(BaseComponent) {
            var Component = func(BaseComponent);
            Component.displayName = wrapDisplayName(BaseComponent, helperName);
            return Component;
          }
        };
      }

      return {
        v: function v() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return function (BaseComponent) {
            var Component = func.apply(undefined, args)(BaseComponent);
            Component.displayName = wrapDisplayName(BaseComponent, helperName);
            return Component;
          };
        }
      };
    }();

    if (typeof _ret === "object") return _ret.v;
  }

  return func;
};

exports.default = createHelper;

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _IconButton = __webpack_require__(559);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _IconButton2.default;

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(24);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _transitions = __webpack_require__(30);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var color = props.color,
      hoverColor = props.hoverColor;
  var baseTheme = context.muiTheme.baseTheme;

  var offColor = color || baseTheme.palette.textColor;
  var onColor = hoverColor || offColor;

  return {
    root: {
      color: state.hovered ? onColor : offColor,
      position: 'relative',
      fontSize: baseTheme.spacing.iconSize,
      display: 'inline-block',
      userSelect: 'none',
      transition: _transitions2.default.easeOut()
    }
  };
}

var FontIcon = function (_Component) {
  (0, _inherits3.default)(FontIcon, _Component);

  function FontIcon() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FontIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FontIcon.__proto__ || (0, _getPrototypeOf2.default)(FontIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      // hover is needed only when a hoverColor is defined
      if (_this.props.hoverColor !== undefined) {
        _this.setState({ hovered: false });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      // hover is needed only when a hoverColor is defined
      if (_this.props.hoverColor !== undefined) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FontIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hoverColor = _props.hoverColor,
          onMouseLeave = _props.onMouseLeave,
          onMouseEnter = _props.onMouseEnter,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement('span', (0, _extends3.default)({}, other, {
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
      }));
    }
  }]);
  return FontIcon;
}(_react.Component);

FontIcon.muiName = 'FontIcon';
FontIcon.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
};
FontIcon.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
 false ? FontIcon.propTypes = {
  /**
   * This is the font color of the font icon. If not specified,
   * this component will default to muiTheme.palette.textColor.
   */
  color: _react.PropTypes.string,
  /**
   * This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: _react.PropTypes.string,
  /** @ignore */
  onMouseEnter: _react.PropTypes.func,
  /** @ignore */
  onMouseLeave: _react.PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = FontIcon;

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FontIcon = __webpack_require__(557);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FontIcon2.default;

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(24);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _transitions = __webpack_require__(30);

var _transitions2 = _interopRequireDefault(_transitions);

var _propTypes = __webpack_require__(231);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedButton = __webpack_require__(137);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _FontIcon = __webpack_require__(558);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Tooltip = __webpack_require__(561);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _childUtils = __webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      position: 'relative',
      boxSizing: 'border-box',
      overflow: 'visible',
      transition: _transitions2.default.easeOut(),
      padding: baseTheme.spacing.iconSize / 2,
      width: baseTheme.spacing.iconSize * 2,
      height: baseTheme.spacing.iconSize * 2,
      fontSize: 0
    },
    tooltip: {
      boxSizing: 'border-box'
    },
    overlay: {
      position: 'relative',
      top: 0,
      width: '100%',
      height: '100%',
      background: baseTheme.palette.disabledColor
    },
    disabled: {
      color: baseTheme.palette.disabledColor,
      fill: baseTheme.palette.disabledColor,
      cursor: 'not-allowed'
    }
  };
}

var IconButton = function (_Component) {
  (0, _inherits3.default)(IconButton, _Component);

  function IconButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IconButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconButton.__proto__ || (0, _getPrototypeOf2.default)(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      // Not to be confonded with the touch property.
      // This state is to determined if it's a mobile device.
      touch: false,
      tooltipShown: false
    }, _this.handleBlur = function (event) {
      _this.hideTooltip();
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      _this.showTooltip();
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.button.isKeyboardFocused()) {
        _this.hideTooltip();
      }
      _this.setState({ hovered: false });
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseOut = function (event) {
      if (_this.props.disabled) _this.hideTooltip();
      if (_this.props.onMouseOut) _this.props.onMouseOut(event);
    }, _this.handleMouseEnter = function (event) {
      _this.showTooltip();

      // Cancel hover styles for touch devices
      if (!_this.state.touch) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });
      _this.props.onTouchStart(event);
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onKeyboardFocus = _this$props.onKeyboardFocus;

      if (isKeyboardFocused && !disabled) {
        _this.showTooltip();
        if (onFocus) {
          onFocus(event);
        }
      } else {
        _this.hideTooltip();
        if (onBlur) {
          onBlur(event);
        }
      }

      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      if (onKeyboardFocus) {
        onKeyboardFocus(event, isKeyboardFocused);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IconButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.disabled) {
        this.setState({ hovered: false });
      }
    }
  }, {
    key: 'setKeyboardFocus',
    value: function setKeyboardFocus() {
      this.button.setKeyboardFocus();
    }
  }, {
    key: 'showTooltip',
    value: function showTooltip() {
      if (this.props.tooltip) {
        this.setState({ tooltipShown: true });
      }
    }
  }, {
    key: 'hideTooltip',
    value: function hideTooltip() {
      if (this.props.tooltip) this.setState({ tooltipShown: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          hoveredStyle = _props.hoveredStyle,
          disableTouchRipple = _props.disableTouchRipple,
          children = _props.children,
          iconClassName = _props.iconClassName,
          style = _props.style,
          tooltip = _props.tooltip,
          tooltipPositionProp = _props.tooltipPosition,
          tooltipStyles = _props.tooltipStyles,
          touch = _props.touch,
          iconStyle = _props.iconStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'hoveredStyle', 'disableTouchRipple', 'children', 'iconClassName', 'style', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch', 'iconStyle']);

      var fonticon = void 0;

      var styles = getStyles(this.props, this.context);
      var tooltipPosition = tooltipPositionProp.split('-');

      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, hovered ? hoveredStyle : {}, style);

      var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
        label: tooltip,
        show: this.state.tooltipShown,
        touch: touch,
        style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyles),
        verticalPosition: tooltipPosition[0],
        horizontalPosition: tooltipPosition[1]
      }) : null;

      if (iconClassName) {
        var iconHoverColor = iconStyle.iconHoverColor,
            iconStyleFontIcon = (0, _objectWithoutProperties3.default)(iconStyle, ['iconHoverColor']);


        fonticon = _react2.default.createElement(
          _FontIcon2.default,
          {
            className: iconClassName,
            hoverColor: disabled ? null : iconHoverColor,
            style: (0, _simpleAssign2.default)({}, disabled && styles.disabled, iconStyleFontIcon),
            color: this.context.muiTheme.baseTheme.palette.textColor
          },
          children
        );
      }

      var childrenStyle = disabled ? (0, _simpleAssign2.default)({}, iconStyle, styles.disabled) : iconStyle;

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({
          ref: function ref(_ref2) {
            return _this2.button = _ref2;
          }
        }, other, {
          centerRipple: true,
          disabled: disabled,
          onTouchStart: this.handleTouchStart,
          style: mergedRootStyles,
          disableTouchRipple: disableTouchRipple,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onMouseLeave: this.handleMouseLeave,
          onMouseEnter: this.handleMouseEnter,
          onMouseOut: this.handleMouseOut,
          onKeyboardFocus: this.handleKeyboardFocus
        }),
        tooltipElement,
        fonticon,
        (0, _childUtils.extendChildren)(children, {
          style: childrenStyle
        })
      );
    }
  }]);
  return IconButton;
}(_react.Component);

IconButton.muiName = 'IconButton';
IconButton.defaultProps = {
  disabled: false,
  disableTouchRipple: false,
  iconStyle: {},
  tooltipPosition: 'bottom-center',
  touch: false
};
IconButton.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
 false ? IconButton.propTypes = {
  /**
   * Can be used to pass a `FontIcon` element as the icon for the button.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _react.PropTypes.bool,
  /**
   * If true, the element will be disabled.
   */
  disabled: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element when the component is hovered.
   */
  hoveredStyle: _react.PropTypes.object,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _react.PropTypes.string,
  /**
   * The CSS class name of the icon. Used for setting the icon with a stylesheet.
   */
  iconClassName: _react.PropTypes.string,
  /**
   * Override the inline-styles of the icon element.
   * Note: you can specify iconHoverColor as a String inside this object.
   */
  iconStyle: _react.PropTypes.object,
  /** @ignore */
  onBlur: _react.PropTypes.func,
  /** @ignore */
  onFocus: _react.PropTypes.func,
  /**
   * Callback function fired when the element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the element.
   * @param {boolean} keyboardFocused Indicates whether the element is focused.
   */
  onKeyboardFocus: _react.PropTypes.func,
  /** @ignore */
  onMouseEnter: _react.PropTypes.func,
  /** @ignore */
  onMouseLeave: _react.PropTypes.func,
  /** @ignore */
  onMouseOut: _react.PropTypes.func,
  /** @ignore */
  onTouchStart: _react.PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * The text to supply to the element's tooltip.
   */
  tooltip: _react.PropTypes.node,
  /**
   * The vertical and horizontal positions, respectively, of the element's tooltip.
   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
   * "bottom-left", and "top-left".
   */
  tooltipPosition: _propTypes2.default.cornersAndCenter,
  /**
   * Override the inline-styles of the tooltip element.
   */
  tooltipStyles: _react.PropTypes.object,
  /**
   * If true, increase the tooltip element's size. Useful for increasing tooltip
   * readability on mobile devices.
   */
  touch: _react.PropTypes.bool
} : void 0;
exports.default = IconButton;

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(24);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _transitions = __webpack_require__(30);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = function (_Component) {
  (0, _inherits3.default)(SvgIcon, _Component);

  function SvgIcon() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SvgIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleMouseEnter = function (event) {
      _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SvgIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          color = _props.color,
          hoverColor = _props.hoverColor,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          style = _props.style,
          viewBox = _props.viewBox,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
      var _context$muiTheme = this.context.muiTheme,
          svgIcon = _context$muiTheme.svgIcon,
          prepareStyles = _context$muiTheme.prepareStyles;


      var offColor = color ? color : 'currentColor';
      var onColor = hoverColor ? hoverColor : offColor;

      var mergedStyles = (0, _simpleAssign2.default)({
        display: 'inline-block',
        color: svgIcon.color,
        fill: this.state.hovered ? onColor : offColor,
        height: 24,
        width: 24,
        userSelect: 'none',
        transition: _transitions2.default.easeOut()
      }, style);

      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, other, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          style: prepareStyles(mergedStyles),
          viewBox: viewBox
        }),
        children
      );
    }
  }]);
  return SvgIcon;
}(_react.Component);

SvgIcon.muiName = 'SvgIcon';
SvgIcon.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  viewBox: '0 0 24 24'
};
SvgIcon.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
 false ? SvgIcon.propTypes = {
  /**
   * Elements passed into the SVG Icon.
   */
  children: _react.PropTypes.node,
  /**
   * This is the fill color of the svg icon.
   * If not specified, this component will default
   * to muiTheme.palette.textColor.
   */
  color: _react.PropTypes.string,
  /**
   * This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: _react.PropTypes.string,
  /** @ignore */
  onMouseEnter: _react.PropTypes.func,
  /** @ignore */
  onMouseLeave: _react.PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * Allows you to redefine what the coordinates
   * without units mean inside an svg element. For example,
   * if the SVG element is 500 (width) by 200 (height), and you
   * pass viewBox="0 0 50 20", this means that the coordinates inside
   * the svg will go from the top left corner (0,0) to bottom right (50,20)
   * and each unit will be worth 10px.
   */
  viewBox: _react.PropTypes.string
} : void 0;
exports.default = SvgIcon;

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(24);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _transitions = __webpack_require__(30);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var verticalPosition = props.verticalPosition;
  var horizontalPosition = props.horizontalPosition;
  var touchMarginOffset = props.touch ? 10 : 0;
  var touchOffsetTop = props.touch ? -20 : -10;
  var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;

  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      zIndex = _context$muiTheme.zIndex,
      tooltip = _context$muiTheme.tooltip;


  var styles = {
    root: {
      position: 'absolute',
      fontFamily: baseTheme.fontFamily,
      fontSize: '10px',
      lineHeight: '22px',
      padding: '0 8px',
      zIndex: zIndex.tooltip,
      color: tooltip.color,
      overflow: 'hidden',
      top: -10000,
      borderRadius: 2,
      userSelect: 'none',
      opacity: 0,
      right: horizontalPosition === 'left' ? 12 : null,
      left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : null,
      transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
    },
    label: {
      position: 'relative',
      whiteSpace: 'nowrap'
    },
    ripple: {
      position: 'absolute',
      left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
      top: verticalPosition === 'bottom' ? 0 : '100%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
    },
    rootWhenShown: {
      top: verticalPosition === 'top' ? touchOffsetTop : 36,
      opacity: 0.9,
      transform: 'translate(0px, ' + offset + 'px)',
      transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
    },
    rootWhenTouched: {
      fontSize: '14px',
      lineHeight: '32px',
      padding: '0 16px'
    },
    rippleWhenShown: {
      backgroundColor: tooltip.rippleBackgroundColor,
      transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
    }
  };

  return styles;
}

var Tooltip = function (_Component) {
  (0, _inherits3.default)(Tooltip, _Component);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offsetWidth: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setRippleSize();
      this.setTooltipPosition();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setTooltipPosition();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setRippleSize();
    }
  }, {
    key: 'setRippleSize',
    value: function setRippleSize() {
      var ripple = this.refs.ripple;
      var tooltip = this.refs.tooltip;
      var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
      var tooltipHeight = parseInt(tooltip.offsetHeight, 10);

      var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
      if (this.props.show) {
        ripple.style.height = rippleDiameter + 'px';
        ripple.style.width = rippleDiameter + 'px';
      } else {
        ripple.style.width = '0px';
        ripple.style.height = '0px';
      }
    }
  }, {
    key: 'setTooltipPosition',
    value: function setTooltipPosition() {
      this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          horizontalPosition = _props.horizontalPosition,
          label = _props.label,
          show = _props.show,
          touch = _props.touch,
          verticalPosition = _props.verticalPosition,
          other = (0, _objectWithoutProperties3.default)(_props, ['horizontalPosition', 'label', 'show', 'touch', 'verticalPosition']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, {
          ref: 'tooltip',
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
        }),
        _react2.default.createElement('div', {
          ref: 'ripple',
          style: prepareStyles((0, _simpleAssign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
        }),
        _react2.default.createElement(
          'span',
          { style: prepareStyles(styles.label) },
          label
        )
      );
    }
  }]);
  return Tooltip;
}(_react.Component);

Tooltip.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
 false ? Tooltip.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  horizontalPosition: _react.PropTypes.oneOf(['left', 'right', 'center']),
  label: _react.PropTypes.node.isRequired,
  show: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  touch: _react.PropTypes.bool,
  verticalPosition: _react.PropTypes.oneOf(['top', 'bottom'])
} : void 0;
exports.default = Tooltip;

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _createEagerElementUtil = __webpack_require__(566);

var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);

var _isReferentiallyTransparentFunctionComponent = __webpack_require__(564);

var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFactory = function createFactory(type) {
  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
  return function (p, c) {
    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
  };
};

exports.default = createFactory;

/***/ },

/***/ 563:
/***/ function(module, exports) {

"use strict";
'use strict';

exports.__esModule = true;
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object');
};

exports.default = isClassComponent;

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _isClassComponent = __webpack_require__(563);

var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && ("production" === 'production' || !Component.propTypes));
};

exports.default = isReferentiallyTransparentFunctionComponent;

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _react = __webpack_require__(0);

var _createHelper = __webpack_require__(555);

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = __webpack_require__(562);

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    return function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      _class.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      _class.prototype.render = function render() {
        return factory(this.props);
      };

      return _class;
    }(_react.Component);
  };
};

exports.default = (0, _createHelper2.default)(shouldUpdate, 'shouldUpdate');

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
  if (!hasKey && isReferentiallyTransparent) {
    if (children) {
      return type(_extends({}, props, { children: children }));
    }
    return type(props);
  }

  var Component = type;

  if (children) {
    return _react2.default.createElement(
      Component,
      props,
      children
    );
  }

  return _react2.default.createElement(Component, props);
};

exports.default = createEagerElementUtil;

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _keyboardArrowUp = __webpack_require__(597);

var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);

var _keyboardArrowDown = __webpack_require__(596);

var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);

var _IconButton = __webpack_require__(556);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles() {
  return {
    root: {
      top: 0,
      bottom: 0,
      right: 4,
      margin: 'auto',
      position: 'absolute'
    }
  };
}

var CardExpandable = function (_Component) {
  (0, _inherits3.default)(CardExpandable, _Component);

  function CardExpandable() {
    (0, _classCallCheck3.default)(this, CardExpandable);
    return (0, _possibleConstructorReturn3.default)(this, (CardExpandable.__proto__ || (0, _getPrototypeOf2.default)(CardExpandable)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardExpandable, [{
    key: 'render',
    value: function render() {
      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        _IconButton2.default,
        {
          style: (0, _simpleAssign2.default)(styles.root, this.props.style),
          onTouchTap: this.props.onExpanding
        },
        this.props.expanded ? this.props.openIcon : this.props.closeIcon
      );
    }
  }]);
  return CardExpandable;
}(_react.Component);

CardExpandable.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
CardExpandable.defaultProps = {
  closeIcon: _react2.default.createElement(_keyboardArrowDown2.default, null),
  openIcon: _react2.default.createElement(_keyboardArrowUp2.default, null)
};
 false ? CardExpandable.propTypes = {
  closeIcon: _react.PropTypes.node,
  expanded: _react.PropTypes.bool,
  onExpanding: _react.PropTypes.func.isRequired,
  openIcon: _react.PropTypes.node,
  style: _react.PropTypes.object
} : void 0;
exports.default = CardExpandable;

/***/ },

/***/ 578:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(582);

var Loader = function (_Component) {
  _inherits(Loader, _Component);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
  }

  _createClass(Loader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'loader' },
        _react2.default.createElement(
          'svg',
          { viewBox: '0 0 32 32', width: '32', height: '32' },
          _react2.default.createElement('circle', { id: 'spinner', cx: '16', cy: '16', r: '14', fill: 'none' })
        )
      );
    }
  }]);

  return Loader;
}(_react.Component);

exports.default = Loader;

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(547)();
exports.push([module.i, ".loader {\n  left: 50%;\n  top: 50%;\n  position: fixed;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n\n.loader #spinner {\n  box-sizing: border-box;\n  stroke: #673AB7;\n  stroke-width: 3px;\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-animation: line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1.6s linear infinite;\n  animation: line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1.6s linear infinite; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(450deg);\n    transform: rotate(450deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(450deg);\n    transform: rotate(450deg); } }\n\n@-webkit-keyframes line {\n  0% {\n    stroke-dasharray: 2, 85.964;\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  50% {\n    stroke-dasharray: 65.973, 21.9911;\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dasharray: 2, 85.964;\n    stroke-dashoffset: -65.973;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg); } }\n\n@keyframes line {\n  0% {\n    stroke-dasharray: 2, 85.964;\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  50% {\n    stroke-dasharray: 65.973, 21.9911;\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dasharray: 2, 85.964;\n    stroke-dashoffset: -65.973;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg); } }\n", "", {"version":3,"file":"/home/terry/myProjects/PWA/apps-dev/src/components/Loader/loader.scss","sources":["src/components/Loader/loader.scss"],"sourcesContent":[".loader {\n  left: 50%;\n  top: 50%;\n  position: fixed;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n  .loader #spinner {\n    box-sizing: border-box;\n    stroke: #673AB7;\n    stroke-width: 3px;\n    -webkit-transform-origin: 50%;\n            transform-origin: 50%;\n    -webkit-animation: line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1.6s linear infinite;\n            animation: line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1.6s linear infinite; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(450deg);\n            transform: rotate(450deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(450deg);\n            transform: rotate(450deg); } }\n\n@-webkit-keyframes line {\n  0% {\n    stroke-dasharray: 2, 85.964;\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    stroke-dasharray: 65.973, 21.9911;\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dasharray: 2, 85.964;\n    stroke-dashoffset: -65.973;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); } }\n\n@keyframes line {\n  0% {\n    stroke-dasharray: 2, 85.964;\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    stroke-dasharray: 65.973, 21.9911;\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dasharray: 2, 85.964;\n    stroke-dashoffset: -65.973;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); } }\n"],"mappings":"AAAA,AAAA,OAAO,CAAC;EACN,IAAI,EAAE,GAAI;EACV,GAAG,EAAE,GAAI;EACT,QAAQ,EAAE,KAAM;EAChB,iBAAiB,EAAE,qBAAS;EACpB,SAAS,EAAE,qBAAS,GAAe;;AAC3C,AAAQ,OAAD,CAAC,QAAQ,CAAC;EACf,UAAU,EAAE,UAAW;EACvB,MAAM,EAAE,OAAQ;EAChB,YAAY,EAAE,GAAI;EAClB,wBAAwB,EAAE,GAAI;EACtB,gBAAgB,EAAE,GAAI;EAC9B,iBAAiB,EAAE,IAAI,CAAC,IAAI,CAAC,4BAAY,CAAiB,QAAQ,EAAE,MAAM,CAAC,IAAI,CAAC,MAAM,CAAC,QAAQ;EACvF,SAAS,EAAE,IAAI,CAAC,IAAI,CAAC,4BAAY,CAAiB,QAAQ,EAAE,MAAM,CAAC,IAAI,CAAC,MAAM,CAAC,QAAQ,GAAG;;AAEtG,kBAAkB,CAAlB,MAAkB;EAChB,AAAA,IAAI;IACF,iBAAiB,EAAE,SAAM;IACjB,SAAS,EAAE,SAAM;EAC3B,AAAA,EAAE;IACA,iBAAiB,EAAE,cAAM;IACjB,SAAS,EAAE,cAAM;;AAE7B,UAAU,CAAV,MAAU;EACR,AAAA,IAAI;IACF,iBAAiB,EAAE,SAAM;IACjB,SAAS,EAAE,SAAM;EAC3B,AAAA,EAAE;IACA,iBAAiB,EAAE,cAAM;IACjB,SAAS,EAAE,cAAM;;AAE7B,kBAAkB,CAAlB,IAAkB;EAChB,AAAA,EAAE;IACA,gBAAgB,EAAE,SAAU;IAC5B,iBAAiB,EAAE,SAAM;IACjB,SAAS,EAAE,SAAM;EAC3B,AAAA,GAAG;IACD,gBAAgB,EAAE,eAAgB;IAClC,iBAAiB,EAAE,CAAE;EACvB,AAAA,IAAI;IACF,gBAAgB,EAAE,SAAU;IAC5B,iBAAiB,EAAE,OAAQ;IAC3B,iBAAiB,EAAE,aAAM;IACjB,SAAS,EAAE,aAAM;;AAE7B,UAAU,CAAV,IAAU;EACR,AAAA,EAAE;IACA,gBAAgB,EAAE,SAAU;IAC5B,iBAAiB,EAAE,SAAM;IACjB,SAAS,EAAE,SAAM;EAC3B,AAAA,GAAG;IACD,gBAAgB,EAAE,eAAgB;IAClC,iBAAiB,EAAE,CAAE;EACvB,AAAA,IAAI;IACF,gBAAgB,EAAE,SAAU;IAC5B,iBAAiB,EAAE,OAAQ;IAC3B,iBAAiB,EAAE,aAAM;IACjB,SAAS,EAAE,aAAM","names":[],"sourceRoot":""}]);

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(547)();
exports.push([module.i, ".center-children {\n  display: flex;\n  justify-content: center; }\n\n.left-children {\n  display: flex;\n  justify-content: flex-start; }\n\n.leaflet-container {\n  width: 100vw;\n  max-height: 88vh; }\n\n#map, .map-container {\n  top: 0;\n  height: 88vh;\n  width: 100vw; }\n\n.leaflet-div-icon .walk-icon {\n  background: green; }\n\n.custom .leaflet-popup-tip,\n.custom .leaflet-popup-content-wrapper {\n  background: white;\n  color: black;\n  font-weight: bold; }\n\n.popuplink {\n  text-decoration: none; }\n\n#snakemap {\n  height: 50%; }\n", "", {"version":3,"file":"/home/terry/myProjects/PWA/apps-dev/src/components/Maps/maps.scss","sources":["src/components/Maps/maps.scss","src/styles/_spacing.scss"],"sourcesContent":["@import '../../styles/_spacing';\n\n\n\n.leaflet-container {\n  width: 100vw;\n  max-height: 88vh;\n}\n\n//search map\n#map, .map-container {\n  top: 0;\n  height: 88vh;\n  width: 100vw;\n}\n\n.leaflet-div-icon .walk-icon  {\n  background: green;\n}\n\n.custom .leaflet-popup-tip,\n.custom .leaflet-popup-content-wrapper {\n    background: white;\n    color: black;\n    font-weight: bold;\n}\n\n.popuplink {\n  text-decoration: none;\n}\n\n//-----------SNAKE MAP --->\n#snakemap {\n  height: 50%;\n}","$pagebar_height_sm: 2em;\n$pagebar_height_md: 3em;\n\n\n.center-children {\n  display: flex;\n  justify-content: center;\n}\n\n.left-children {\n  display: flex;\n  justify-content: flex-start;\n}\n"],"mappings":"ACIA,AAAA,gBAAgB,CAAC;EACf,OAAO,EAAE,IAAK;EACd,eAAe,EAAE,MAAO,GACzB;;AAED,AAAA,cAAc,CAAC;EACb,OAAO,EAAE,IAAK;EACd,eAAe,EAAE,UAAW,GAC7B;;ADRD,AAAA,kBAAkB,CAAC;EACjB,KAAK,EAAE,KAAM;EACb,UAAU,EAAE,IAAK,GAClB;;AAGD,AAAA,IAAI,EAAE,AAAA,cAAc,CAAC;EACnB,GAAG,EAAE,CAAE;EACP,MAAM,EAAE,IAAK;EACb,KAAK,EAAE,KAAM,GACd;;AAED,AAAkB,iBAAD,CAAC,UAAU,CAAE;EAC5B,UAAU,EAAE,KAAM,GACnB;;AAED,AAAQ,OAAD,CAAC,kBAAkB;AAC1B,AAAQ,OAAD,CAAC,8BAA8B,CAAC;EACnC,UAAU,EAAE,KAAM;EAClB,KAAK,EAAE,KAAM;EACb,WAAW,EAAE,IAAK,GACrB;;AAED,AAAA,UAAU,CAAC;EACT,eAAe,EAAE,IAAK,GACvB;;AAGD,AAAA,SAAS,CAAC;EACR,MAAM,EAAE,GAAI,GACb","names":[],"sourceRoot":""}]);

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(580);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(548)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./loader.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./loader.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(581);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(548)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./maps.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./maps.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(24);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var backgroundColor = props.backgroundColor,
      color = props.color,
      size = props.size;
  var avatar = context.muiTheme.avatar;


  var styles = {
    root: {
      color: color || avatar.color,
      backgroundColor: backgroundColor || avatar.backgroundColor,
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size / 2,
      borderRadius: '50%',
      height: size,
      width: size
    },
    icon: {
      color: color || avatar.color,
      width: size * 0.6,
      height: size * 0.6,
      fontSize: size * 0.6,
      margin: size * 0.2
    }
  };

  return styles;
}

var Avatar = function (_Component) {
  (0, _inherits3.default)(Avatar, _Component);

  function Avatar() {
    (0, _classCallCheck3.default)(this, Avatar);
    return (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Avatar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          icon = _props.icon,
          src = _props.src,
          style = _props.style,
          className = _props.className,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'icon', 'src', 'style', 'className']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      if (src) {
        return _react2.default.createElement('img', (0, _extends3.default)({
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }, other, {
          src: src,
          className: className
        }));
      } else {
        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, other, {
            style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)),
            className: className
          }),
          icon && _react2.default.cloneElement(icon, {
            color: styles.icon.color,
            style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
          }),
          this.props.children
        );
      }
    }
  }]);
  return Avatar;
}(_react.Component);

Avatar.muiName = 'Avatar';
Avatar.defaultProps = {
  size: 40
};
Avatar.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
 false ? Avatar.propTypes = {
  /**
   * The backgroundColor of the avatar. Does not apply to image avatars.
   */
  backgroundColor: _react.PropTypes.string,
  /**
   * Can be used, for instance, to render a letter inside the avatar.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root `div` or `img` element.
   */
  className: _react.PropTypes.string,
  /**
   * The icon or letter's color.
   */
  color: _react.PropTypes.string,
  /**
   * This is the SvgIcon or FontIcon to be used inside the avatar.
   */
  icon: _react.PropTypes.element,
  /**
   * This is the size of the avatar in pixels.
   */
  size: _react.PropTypes.number,
  /**
   * If passed in, this component will render an img element. Otherwise, a div will be rendered.
   */
  src: _react.PropTypes.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = Avatar;

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Avatar = __webpack_require__(584);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Avatar2.default;

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(24);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Paper = __webpack_require__(232);

var _Paper2 = _interopRequireDefault(_Paper);

var _CardExpandable = __webpack_require__(568);

var _CardExpandable2 = _interopRequireDefault(_CardExpandable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function (_Component) {
  (0, _inherits3.default)(Card, _Component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Card.__proto__ || (0, _getPrototypeOf2.default)(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: null
    }, _this.handleExpanding = function (event) {
      event.preventDefault();
      var newExpandedState = !_this.state.expanded;
      // no automatic state update when the component is controlled
      if (_this.props.expanded === null) {
        _this.setState({ expanded: newExpandedState });
      }
      if (_this.props.onExpandChange) {
        _this.props.onExpandChange(newExpandedState);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Card, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        expanded: this.props.expanded === null ? this.props.initiallyExpanded === true : this.props.expanded
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // update the state when the component is controlled.
      if (nextProps.expanded !== null) this.setState({ expanded: nextProps.expanded });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          containerStyle = _props.containerStyle,
          children = _props.children,
          expandable = _props.expandable,
          expandedProp = _props.expanded,
          initiallyExpanded = _props.initiallyExpanded,
          onExpandChange = _props.onExpandChange,
          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'containerStyle', 'children', 'expandable', 'expanded', 'initiallyExpanded', 'onExpandChange']);


      var lastElement = void 0;
      var expanded = this.state.expanded;
      var newChildren = _react2.default.Children.map(children, function (currentChild) {
        var doClone = false;
        var newChild = undefined;
        var newProps = {};
        var element = currentChild;
        if (!currentChild || !currentChild.props) {
          return null;
        }
        if (expanded === false && currentChild.props.expandable === true) return;
        if (currentChild.props.actAsExpander === true) {
          doClone = true;
          newProps.onTouchTap = _this2.handleExpanding;
          newProps.style = (0, _simpleAssign2.default)({ cursor: 'pointer' }, currentChild.props.style);
        }
        if (currentChild.props.showExpandableButton === true) {
          doClone = true;
          newChild = _react2.default.createElement(_CardExpandable2.default, {
            closeIcon: currentChild.props.closeIcon,
            expanded: expanded,
            onExpanding: _this2.handleExpanding,
            openIcon: currentChild.props.openIcon
          });
        }
        if (doClone) {
          element = _react2.default.cloneElement(currentChild, newProps, currentChild.props.children, newChild);
        }
        lastElement = element;
        return element;
      }, this);

      // If the last element is text or a title we should add
      // 8px padding to the bottom of the card
      var addBottomPadding = lastElement && (lastElement.type.muiName === 'CardText' || lastElement.type.muiName === 'CardTitle');

      var mergedStyles = (0, _simpleAssign2.default)({
        zIndex: 1
      }, style);
      var containerMergedStyles = (0, _simpleAssign2.default)({
        paddingBottom: addBottomPadding ? 8 : 0
      }, containerStyle);

      return _react2.default.createElement(
        _Paper2.default,
        (0, _extends3.default)({}, other, { style: mergedStyles }),
        _react2.default.createElement(
          'div',
          { style: containerMergedStyles },
          newChildren
        )
      );
    }
  }]);
  return Card;
}(_react.Component);

Card.defaultProps = {
  expandable: false,
  expanded: null,
  initiallyExpanded: false
};
 false ? Card.propTypes = {
  /**
   * Can be used to render elements inside the Card.
   */
  children: _react.PropTypes.node,
  /**
   * Override the inline-styles of the container element.
   */
  containerStyle: _react.PropTypes.object,
  /**
   * If true, this card component is expandable. Can be set on any child of the `Card` component.
   */
  expandable: _react.PropTypes.bool,
  /**
   * Whether this card is expanded.
   * If `true` or `false` the component is controlled.
   * if `null` the component is uncontrolled.
   */
  expanded: _react.PropTypes.bool,
  /**
   * Whether this card is initially expanded.
   */
  initiallyExpanded: _react.PropTypes.bool,
  /**
   * Callback function fired when the `expandable` state of the card has changed.
   *
   * @param {boolean} newExpandedState Represents the new `expanded` state of the card.
   */
  onExpandChange: _react.PropTypes.func,
  /**
   * If true, this card component will include a button to expand the card. `CardTitle`,
   * `CardHeader` and `CardActions` implement `showExpandableButton`. Any child component
   * of `Card` can implements `showExpandableButton` or forwards the property to a child
   * component supporting it.
   */
  showExpandableButton: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = Card;

/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(24);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles() {
  return {
    root: {
      padding: 8,
      position: 'relative'
    },
    action: {
      marginRight: 8
    }
  };
}

var CardActions = function (_Component) {
  (0, _inherits3.default)(CardActions, _Component);

  function CardActions() {
    (0, _classCallCheck3.default)(this, CardActions);
    return (0, _possibleConstructorReturn3.default)(this, (CardActions.__proto__ || (0, _getPrototypeOf2.default)(CardActions)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardActions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          actAsExpander = _props.actAsExpander,
          children = _props.children,
          expandable = _props.expandable,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'children', 'expandable', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var styledChildren = _react2.default.Children.map(children, function (child) {
        if (_react2.default.isValidElement(child)) {
          return _react2.default.cloneElement(child, {
            style: (0, _simpleAssign2.default)({}, styles.action, child.props.style)
          });
        }
      });

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        styledChildren
      );
    }
  }]);
  return CardActions;
}(_react.Component);

CardActions.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
 false ? CardActions.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _react.PropTypes.bool,
  /**
   * Can be used to render elements inside the Card Action.
   */
  children: _react.PropTypes.node,
  /**
   * If true, this card component is expandable.
   */
  expandable: _react.PropTypes.bool,
  /**
   * If true, this card component will include a button to expand the card.
   */
  showExpandableButton: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = CardActions;

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(24);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Avatar = __webpack_require__(585);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var card = context.muiTheme.card;


  return {
    root: {
      padding: 16,
      fontWeight: card.fontWeight,
      boxSizing: 'border-box',
      position: 'relative',
      whiteSpace: 'nowrap'
    },
    text: {
      display: 'inline-block',
      verticalAlign: 'top',
      whiteSpace: 'normal',
      paddingRight: '90px'
    },
    avatar: {
      marginRight: 16
    },
    title: {
      color: props.titleColor || card.titleColor,
      display: 'block',
      fontSize: 15
    },
    subtitle: {
      color: props.subtitleColor || card.subtitleColor,
      display: 'block',
      fontSize: 14
    }
  };
}

var CardHeader = function (_Component) {
  (0, _inherits3.default)(CardHeader, _Component);

  function CardHeader() {
    (0, _classCallCheck3.default)(this, CardHeader);
    return (0, _possibleConstructorReturn3.default)(this, (CardHeader.__proto__ || (0, _getPrototypeOf2.default)(CardHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          actAsExpander = _props.actAsExpander,
          avatarProp = _props.avatar,
          children = _props.children,
          closeIcon = _props.closeIcon,
          expandable = _props.expandable,
          openIcon = _props.openIcon,
          showExpandableButton = _props.showExpandableButton,
          style = _props.style,
          subtitle = _props.subtitle,
          subtitleColor = _props.subtitleColor,
          subtitleStyle = _props.subtitleStyle,
          textStyle = _props.textStyle,
          title = _props.title,
          titleColor = _props.titleColor,
          titleStyle = _props.titleStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'avatar', 'children', 'closeIcon', 'expandable', 'openIcon', 'showExpandableButton', 'style', 'subtitle', 'subtitleColor', 'subtitleStyle', 'textStyle', 'title', 'titleColor', 'titleStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var avatar = avatarProp;

      if ((0, _react.isValidElement)(avatarProp)) {
        avatar = _react2.default.cloneElement(avatar, {
          style: (0, _simpleAssign2.default)(styles.avatar, avatar.props.style)
        });
      } else if (avatar !== null) {
        avatar = _react2.default.createElement(_Avatar2.default, { src: avatarProp, style: styles.avatar });
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        avatar,
        _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _simpleAssign2.default)(styles.text, textStyle)) },
          _react2.default.createElement(
            'span',
            { style: prepareStyles((0, _simpleAssign2.default)(styles.title, titleStyle)) },
            title
          ),
          _react2.default.createElement(
            'span',
            { style: prepareStyles((0, _simpleAssign2.default)(styles.subtitle, subtitleStyle)) },
            subtitle
          )
        ),
        children
      );
    }
  }]);
  return CardHeader;
}(_react.Component);

CardHeader.muiName = 'CardHeader';
CardHeader.defaultProps = {
  avatar: null
};
CardHeader.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
 false ? CardHeader.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _react.PropTypes.bool,
  /**
   * This is the [Avatar](/#/components/avatar) element to be displayed on the Card Header.
   * If `avatar` is an `Avatar` or other element, it will be rendered.
   * If `avatar` is a string, it will be used as the image `src` for an `Avatar`.
   */
  avatar: _react.PropTypes.node,
  /**
   * Can be used to render elements inside the Card Header.
   */
  children: _react.PropTypes.node,
  /**
   * Can be used to pass a closeIcon if you don't like the default expandable close Icon.
   */
  closeIcon: _react.PropTypes.node,
  /**
   * If true, this card component is expandable.
   */
  expandable: _react.PropTypes.bool,
  /**
   * Can be used to pass a openIcon if you don't like the default expandable open Icon.
   */
  openIcon: _react.PropTypes.node,
  /**
   * If true, this card component will include a button to expand the card.
   */
  showExpandableButton: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * Can be used to render a subtitle in Card Header.
   */
  subtitle: _react.PropTypes.node,
  /**
   * Override the subtitle color.
   */
  subtitleColor: _react.PropTypes.string,
  /**
   * Override the inline-styles of the subtitle.
   */
  subtitleStyle: _react.PropTypes.object,
  /**
   * Override the inline-styles of the text.
   */
  textStyle: _react.PropTypes.object,
  /**
   * Can be used to render a title in Card Header.
   */
  title: _react.PropTypes.node,
  /**
   * Override the title color.
   */
  titleColor: _react.PropTypes.string,
  /**
   * Override the inline-styles of the title.
   */
  titleStyle: _react.PropTypes.object
} : void 0;
exports.default = CardHeader;

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(24);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var cardMedia = context.muiTheme.cardMedia;


  return {
    root: {
      position: 'relative'
    },
    overlayContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    overlay: {
      height: '100%',
      position: 'relative'
    },
    overlayContent: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      paddingTop: 8,
      background: cardMedia.overlayContentBackground
    },
    media: {},
    mediaChild: {
      verticalAlign: 'top',
      maxWidth: '100%',
      minWidth: '100%',
      width: '100%'
    }
  };
}

var CardMedia = function (_Component) {
  (0, _inherits3.default)(CardMedia, _Component);

  function CardMedia() {
    (0, _classCallCheck3.default)(this, CardMedia);
    return (0, _possibleConstructorReturn3.default)(this, (CardMedia.__proto__ || (0, _getPrototypeOf2.default)(CardMedia)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardMedia, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          actAsExpander = _props.actAsExpander,
          children = _props.children,
          expandable = _props.expandable,
          mediaStyle = _props.mediaStyle,
          overlay = _props.overlay,
          overlayContainerStyle = _props.overlayContainerStyle,
          overlayContentStyle = _props.overlayContentStyle,
          overlayStyle = _props.overlayStyle,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'children', 'expandable', 'mediaStyle', 'overlay', 'overlayContainerStyle', 'overlayContentStyle', 'overlayStyle', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var rootStyle = (0, _simpleAssign2.default)(styles.root, style);
      var extendedMediaStyle = (0, _simpleAssign2.default)(styles.media, mediaStyle);
      var extendedOverlayContainerStyle = (0, _simpleAssign2.default)(styles.overlayContainer, overlayContainerStyle);
      var extendedOverlayContentStyle = (0, _simpleAssign2.default)(styles.overlayContent, overlayContentStyle);
      var extendedOverlayStyle = (0, _simpleAssign2.default)(styles.overlay, overlayStyle);
      var titleColor = this.context.muiTheme.cardMedia.titleColor;
      var subtitleColor = this.context.muiTheme.cardMedia.subtitleColor;
      var color = this.context.muiTheme.cardMedia.color;

      var styledChildren = _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, {
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.mediaChild, child.props.style))
        });
      });

      var overlayChildren = _react2.default.Children.map(overlay, function (child) {
        if (child.type.muiName === 'CardHeader' || child.type.muiName === 'CardTitle') {
          return _react2.default.cloneElement(child, {
            titleColor: titleColor,
            subtitleColor: subtitleColor
          });
        } else if (child.type.muiName === 'CardText') {
          return _react2.default.cloneElement(child, {
            color: color
          });
        } else {
          return child;
        }
      });

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(rootStyle) }),
        _react2.default.createElement(
          'div',
          { style: prepareStyles(extendedMediaStyle) },
          styledChildren
        ),
        overlay ? _react2.default.createElement(
          'div',
          { style: prepareStyles(extendedOverlayContainerStyle) },
          _react2.default.createElement(
            'div',
            { style: prepareStyles(extendedOverlayStyle) },
            _react2.default.createElement(
              'div',
              { style: prepareStyles(extendedOverlayContentStyle) },
              overlayChildren
            )
          )
        ) : ''
      );
    }
  }]);
  return CardMedia;
}(_react.Component);

CardMedia.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
 false ? CardMedia.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _react.PropTypes.bool,
  /**
   * Can be used to render elements inside the Card Media.
   */
  children: _react.PropTypes.node,
  /**
   * If true, this card component is expandable.
   */
  expandable: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the Card Media.
   */
  mediaStyle: _react.PropTypes.object,
  /**
   * Can be used to render overlay element in Card Media.
   */
  overlay: _react.PropTypes.node,
  /**
   * Override the inline-styles of the overlay container.
   */
  overlayContainerStyle: _react.PropTypes.object,
  /**
   * Override the inline-styles of the overlay content.
   */
  overlayContentStyle: _react.PropTypes.object,
  /**
   * Override the inline-styles of the overlay element.
   */
  overlayStyle: _react.PropTypes.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = CardMedia;

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(24);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var cardText = context.muiTheme.cardText;


  return {
    root: {
      padding: 16,
      fontSize: 14,
      color: props.color || cardText.textColor
    }
  };
}

var CardText = function (_Component) {
  (0, _inherits3.default)(CardText, _Component);

  function CardText() {
    (0, _classCallCheck3.default)(this, CardText);
    return (0, _possibleConstructorReturn3.default)(this, (CardText.__proto__ || (0, _getPrototypeOf2.default)(CardText)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          actAsExpander = _props.actAsExpander,
          children = _props.children,
          color = _props.color,
          expandable = _props.expandable,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'children', 'color', 'expandable', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var rootStyle = (0, _simpleAssign2.default)(styles.root, style);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(rootStyle) }),
        children
      );
    }
  }]);
  return CardText;
}(_react.Component);

CardText.muiName = 'CardText';
CardText.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
 false ? CardText.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _react.PropTypes.bool,
  /**
   * Can be used to render elements inside the Card Text.
   */
  children: _react.PropTypes.node,
  /**
   * Override the CardText color.
   */
  color: _react.PropTypes.string,
  /**
   * If true, this card component is expandable.
   */
  expandable: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = CardText;

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(24);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var card = context.muiTheme.card;


  return {
    root: {
      padding: 16,
      position: 'relative'
    },
    title: {
      fontSize: 24,
      color: props.titleColor || card.titleColor,
      display: 'block',
      lineHeight: '36px'
    },
    subtitle: {
      fontSize: 14,
      color: props.subtitleColor || card.subtitleColor,
      display: 'block'
    }
  };
}

var CardTitle = function (_Component) {
  (0, _inherits3.default)(CardTitle, _Component);

  function CardTitle() {
    (0, _classCallCheck3.default)(this, CardTitle);
    return (0, _possibleConstructorReturn3.default)(this, (CardTitle.__proto__ || (0, _getPrototypeOf2.default)(CardTitle)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          actAsExpander = _props.actAsExpander,
          children = _props.children,
          expandable = _props.expandable,
          showExpandableButton = _props.showExpandableButton,
          style = _props.style,
          subtitle = _props.subtitle,
          subtitleColor = _props.subtitleColor,
          subtitleStyle = _props.subtitleStyle,
          title = _props.title,
          titleColor = _props.titleColor,
          titleStyle = _props.titleStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'children', 'expandable', 'showExpandableButton', 'style', 'subtitle', 'subtitleColor', 'subtitleStyle', 'title', 'titleColor', 'titleStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var rootStyle = (0, _simpleAssign2.default)({}, styles.root, style);
      var extendedTitleStyle = (0, _simpleAssign2.default)({}, styles.title, titleStyle);
      var extendedSubtitleStyle = (0, _simpleAssign2.default)({}, styles.subtitle, subtitleStyle);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(rootStyle) }),
        _react2.default.createElement(
          'span',
          { style: prepareStyles(extendedTitleStyle) },
          title
        ),
        _react2.default.createElement(
          'span',
          { style: prepareStyles(extendedSubtitleStyle) },
          subtitle
        ),
        children
      );
    }
  }]);
  return CardTitle;
}(_react.Component);

CardTitle.muiName = 'CardTitle';
CardTitle.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
 false ? CardTitle.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _react.PropTypes.bool,
  /**
   * Can be used to render elements inside the Card Title.
   */
  children: _react.PropTypes.node,
  /**
   * If true, this card component is expandable.
   */
  expandable: _react.PropTypes.bool,
  /**
   * If true, this card component will include a button to expand the card.
   */
  showExpandableButton: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * Can be used to render a subtitle in the Card Title.
   */
  subtitle: _react.PropTypes.node,
  /**
   * Override the subtitle color.
   */
  subtitleColor: _react.PropTypes.string,
  /**
   * Override the inline-styles of the subtitle.
   */
  subtitleStyle: _react.PropTypes.object,
  /**
   * Can be used to render a title in the Card Title.
   */
  title: _react.PropTypes.node,
  /**
   * Override the title color.
   */
  titleColor: _react.PropTypes.string,
  /**
   * Override the inline-styles of the title.
   */
  titleStyle: _react.PropTypes.object
} : void 0;
exports.default = CardTitle;

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CardExpandable = exports.CardActions = exports.CardText = exports.CardMedia = exports.CardTitle = exports.CardHeader = exports.Card = undefined;

var _Card2 = __webpack_require__(586);

var _Card3 = _interopRequireDefault(_Card2);

var _CardHeader2 = __webpack_require__(588);

var _CardHeader3 = _interopRequireDefault(_CardHeader2);

var _CardTitle2 = __webpack_require__(591);

var _CardTitle3 = _interopRequireDefault(_CardTitle2);

var _CardMedia2 = __webpack_require__(589);

var _CardMedia3 = _interopRequireDefault(_CardMedia2);

var _CardText2 = __webpack_require__(590);

var _CardText3 = _interopRequireDefault(_CardText2);

var _CardActions2 = __webpack_require__(587);

var _CardActions3 = _interopRequireDefault(_CardActions2);

var _CardExpandable2 = __webpack_require__(568);

var _CardExpandable3 = _interopRequireDefault(_CardExpandable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Card = _Card3.default;
exports.CardHeader = _CardHeader3.default;
exports.CardTitle = _CardTitle3.default;
exports.CardMedia = _CardMedia3.default;
exports.CardText = _CardText3.default;
exports.CardActions = _CardActions3.default;
exports.CardExpandable = _CardExpandable3.default;
exports.default = _Card3.default;

/***/ },

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(554);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(553);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HardwareKeyboardArrowDown = function HardwareKeyboardArrowDown(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
  );
};
HardwareKeyboardArrowDown = (0, _pure2.default)(HardwareKeyboardArrowDown);
HardwareKeyboardArrowDown.displayName = 'HardwareKeyboardArrowDown';
HardwareKeyboardArrowDown.muiName = 'SvgIcon';

exports.default = HardwareKeyboardArrowDown;

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(554);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(553);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HardwareKeyboardArrowUp = function HardwareKeyboardArrowUp(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' })
  );
};
HardwareKeyboardArrowUp = (0, _pure2.default)(HardwareKeyboardArrowUp);
HardwareKeyboardArrowUp.displayName = 'HardwareKeyboardArrowUp';
HardwareKeyboardArrowUp.muiName = 'SvgIcon';

exports.default = HardwareKeyboardArrowUp;

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(610);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(548)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./walklist.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./walklist.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 605:
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

var _Loader = __webpack_require__(578);

var _Loader2 = _interopRequireDefault(_Loader);

var _reactRedux = __webpack_require__(21);

var _geo = __webpack_require__(142);

var _actions = __webpack_require__(55);

var actions = _interopRequireWildcard(_actions);

var _reactRouter = __webpack_require__(67);

var _geoJson = __webpack_require__(245);

var _geoJson2 = _interopRequireDefault(_geoJson);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(583);

var map = void 0,
    myLayer = void 0;

var LeafletMap = function (_Component) {
  _inherits(LeafletMap, _Component);

  function LeafletMap(props) {
    _classCallCheck(this, LeafletMap);

    var _this = _possibleConstructorReturn(this, (LeafletMap.__proto__ || Object.getPrototypeOf(LeafletMap)).call(this, props));

    _this.state = {
      selectedWalkId: null
    };
    _this.updateLayers = _this.updateLayers.bind(_this);
    return _this;
  }

  _createClass(LeafletMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      //init map //TODO change default center
      map = L.map('map').setView([42.3575, -71.0635], 15);

      //add tile layer
      var KartoLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      map.on('popupopen', function (e) {
        var source = e.popup._source;
        console.log('source: ', source);
        var feature = e.popup._source.feature;
        console.log('feature: ', feature);
      });

      this.updateLayers();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateLayers();
    }
  }, {
    key: 'updateLayers',
    value: function updateLayers() {
      var features = this.props.features;

      // map.removeLayer(myLayer);

      //marker styles
      var geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };

      myLayer = L.geoJSON(features, {
        //only points here
        filter: function filter(feature, layer) {
          return feature.geometry.type == "Point";
        },
        //make each point a circle
        pointToLayer: function pointToLayer(feature, latlng) {
          return L.circleMarker(latlng, geojsonMarkerOptions);
        },
        onEachFeature: function onEachFeature(feature, layer) {

          var popupId = 'info' + feature.properties.id;

          var domElem = document.createElement('div');
          domElem.id = popupId;
          var newContent = document.createTextNode(feature.properties.title);
          domElem.appendChild(newContent); //add the text node to the newly created div. 
          domElem.onclick = function () {
            var target = document.getElementById('walkId');
            target.value = feature.properties.id;
            var btn = document.getElementById('goToDetails').click();
          };

          //create layer
          layer.bindPopup(domElem);
        }

      });
      myLayer.addTo(map);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      myLayer = null;
      map = null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'map', className: 'map-container' });
    }
  }]);

  return LeafletMap;
}(_react.Component);

function mapStateToProps(state) {
  return {
    here: state.geo.here,
    features: state.search.walks.features
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(LeafletMap);

//-----------------------------


// function onEachFeature(feature, layer) {
//     // does this feature have a property named start_pt?
//     if (feature.properties && feature.properties.start_pt) {
//         layer.bindPopup(feature.properties.title);
//     }
// }

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(592);

var _FlatButton = __webpack_require__(234);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _searchActions = __webpack_require__(235);

var actions = _interopRequireWildcard(_searchActions);

var _reactRedux = __webpack_require__(21);

var _muiThemeable = __webpack_require__(633);

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(600);

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
      this.props.getWalkDetails(this.props.walk.id, this.context.router);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Card.Card,
        null,
        _react2.default.createElement(_Card.CardHeader, {
          title: this.props.walk.title,
          subtitle: 'Starts at ' + this.props.walk.start_pt_text,
          actAsExpander: false,
          showExpandableButton: false,
          onClick: this.goToWalk
        })
      );
    }
  }]);

  return WalkItem;
}(_react.Component);

WalkItem.contextTypes = {
  router: _react2.default.PropTypes.object
};
exports.default = (0, _reactRedux.connect)(null, actions)(WalkItem);

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(21);

var _WalkItem = __webpack_require__(607);

var _WalkItem2 = _interopRequireDefault(_WalkItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(600);

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
      console.log('props;', this.props);
      var items = void 0;
      if (this.props.walks.length == 0) {
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
        items = this.props.walks.map(function (walk) {
          if (walk.geometry.type != "LineString") {
            return _react2.default.createElement(_WalkItem2.default, { key: 'walksum' + walk.properties.id,
              walk: walk.properties
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
    walks: state.search.walks.features
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(WalkList);

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(547)();
exports.push([module.i, ".center-children {\n  display: flex;\n  justify-content: center; }\n\n.left-children {\n  display: flex;\n  justify-content: flex-start; }\n\n.walklist {\n  background: white;\n  min-height: 90vh; }\n\n.listdescr {\n  white-space: pre-line; }\n\n.noresults {\n  min-height: 90vh; }\n", "", {"version":3,"file":"/home/terry/myProjects/PWA/apps-dev/src/components/Walks/walklist.scss","sources":["src/components/Walks/walklist.scss","src/styles/_spacing.scss"],"sourcesContent":["@import '../../styles/_spacing';\n\n.walklist {\n  background: white;\n  min-height: 90vh;\n}\n\n.listdescr {\n  white-space: pre-line;\n}\n\n\n.noresults {\n  min-height: 90vh;\n}","$pagebar_height_sm: 2em;\n$pagebar_height_md: 3em;\n\n\n.center-children {\n  display: flex;\n  justify-content: center;\n}\n\n.left-children {\n  display: flex;\n  justify-content: flex-start;\n}\n"],"mappings":"ACIA,AAAA,gBAAgB,CAAC;EACf,OAAO,EAAE,IAAK;EACd,eAAe,EAAE,MAAO,GACzB;;AAED,AAAA,cAAc,CAAC;EACb,OAAO,EAAE,IAAK;EACd,eAAe,EAAE,UAAW,GAC7B;;ADVD,AAAA,SAAS,CAAC;EACR,UAAU,EAAE,KAAM;EAClB,UAAU,EAAE,IAAK,GAClB;;AAED,AAAA,UAAU,CAAC;EACT,WAAW,EAAE,QAAS,GACvB;;AAGD,AAAA,UAAU,CAAC;EACT,UAAU,EAAE,IAAK,GAClB","names":[],"sourceRoot":""}]);

/***/ },

/***/ 613:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(547)();
exports.push([module.i, "hr.accent {\n  border-top: 2px solid #fd8258; }\n\nhr.primary {\n  border-top: 2px solid #5C821A; }\n\n.center-children {\n  display: flex;\n  justify-content: center; }\n\n.left-children {\n  display: flex;\n  justify-content: flex-start; }\n\n.flip-container {\n  -webkit-perspective: 1000;\n  -moz-perspective: 1000;\n  -o-perspective: 1000;\n  perspective: 1000;\n  border: 1px solid #ccc; }\n\n.flip-container.flip .flipper {\n  -webkit-transform: rotateY(180deg);\n  -moz-transform: rotateY(180deg);\n  -o-transform: rotateY(180deg);\n  transform: rotateY(180deg); }\n\n.flip-container, .front, .back {\n  width: 100%;\n  height: 90vh; }\n\n.flipper {\n  -webkit-transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n  -moz-transition: 0.6s;\n  -moz-transform-style: preserve-3d;\n  -o-transition: 0.6s;\n  -o-transform-style: preserve-3d;\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative; }\n\n.front, .back {\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -o-backface-visibility: hidden;\n  backface-visibility: hidden;\n  min-height: 90vh;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.front {\n  z-index: 2; }\n\n.back {\n  -webkit-transform: rotateY(180deg);\n  -moz-transform: rotateY(180deg);\n  -o-transform: rotateY(180deg);\n  transform: rotateY(180deg);\n  background: #ffffff;\n  overflow-y: scroll; }\n\n.hidden {\n  display: none; }\n", "", {"version":3,"file":"/home/terry/myProjects/PWA/apps-dev/src/routes/Results/results.scss","sources":["src/routes/Results/results.scss","src/styles/_colors.scss","src/styles/_spacing.scss"],"sourcesContent":["@import '../../styles/_colors';\n@import '../../styles/_spacing';\n\n.flip-container {\n  -webkit-perspective: 1000;\n  -moz-perspective: 1000;\n  -o-perspective: 1000;\n  perspective: 1000;\n\n  border: 1px solid #ccc;\n}\n\n  // .flip-container:hover .flipper,  \n  // .flip-container.hover .flipper,\n  .flip-container.flip .flipper {\n    -webkit-transform: rotateY(180deg);\n    -moz-transform: rotateY(180deg);\n    -o-transform: rotateY(180deg);\n    transform: rotateY(180deg);\n  }\n\n.flip-container, .front, .back {\n  width: 100%;\n  height: 90vh;\n}\n\n.flipper {\n  -webkit-transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n\n  -moz-transition: 0.6s;\n  -moz-transform-style: preserve-3d;\n  \n  -o-transition: 0.6s;\n  -o-transform-style: preserve-3d;\n\n  transition: 0.6s;\n  transform-style: preserve-3d;\n\n  position: relative;\n}\n\n.front, .back {\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -o-backface-visibility: hidden;\n  backface-visibility: hidden;\n  min-height: 90vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n}\n\n.front {\n  z-index: 2;\n}\n\n.back {\n  -webkit-transform: rotateY(180deg);\n  -moz-transform: rotateY(180deg);\n  -o-transform: rotateY(180deg);\n  transform: rotateY(180deg);\n\n  background: $light;\n  overflow-y: scroll;\n}\n\n.hidden {\n  display: none;\n}","$deep: #0F1B07;\n$light: #ffffff;\n$green: #5C821A;\n$brightgreen: #C6D166;\n$orange: #fd8258;\n\n\n$dark: $deep; \n$primary: $green; \n$secondary: $brightgreen;\n$accent: $orange;\n\nhr.accent {\n  border-top: 2px solid $accent;\n}\n\nhr.primary {\n  border-top: 2px solid $primary;\n}","$pagebar_height_sm: 2em;\n$pagebar_height_md: 3em;\n\n\n.center-children {\n  display: flex;\n  justify-content: center;\n}\n\n.left-children {\n  display: flex;\n  justify-content: flex-start;\n}\n"],"mappings":"ACYA,AAAE,EAAA,AAAA,OAAO,CAAC;EACR,UAAU,EAAE,GAAG,CAAC,KAAK,CATd,OAAO,GAUf;;AAED,AAAE,EAAA,AAAA,QAAQ,CAAC;EACT,UAAU,EAAE,GAAG,CAAC,KAAK,CAff,OAAO,GAgBd;;ACdD,AAAA,gBAAgB,CAAC;EACf,OAAO,EAAE,IAAK;EACd,eAAe,EAAE,MAAO,GACzB;;AAED,AAAA,cAAc,CAAC;EACb,OAAO,EAAE,IAAK;EACd,eAAe,EAAE,UAAW,GAC7B;;AFTD,AAAA,eAAe,CAAC;EACd,mBAAmB,EAAE,IAAK;EAC1B,gBAAgB,EAAE,IAAK;EACvB,cAAc,EAAE,IAAK;EACrB,WAAW,EAAE,IAAK;EAElB,MAAM,EAAE,cAAe,GACxB;;AAIC,AAAqB,eAAN,AAAA,KAAK,CAAC,QAAQ,CAAC;EAC5B,iBAAiB,EAAE,eAAO;EAC1B,cAAc,EAAE,eAAO;EACvB,YAAY,EAAE,eAAO;EACrB,SAAS,EAAE,eAAO,GACnB;;AAEH,AAAA,eAAe,EAAE,AAAA,MAAM,EAAE,AAAA,KAAK,CAAC;EAC7B,KAAK,EAAE,IAAK;EACZ,MAAM,EAAE,IAAK,GACd;;AAED,AAAA,QAAQ,CAAC;EACP,kBAAkB,EAAE,IAAK;EACzB,uBAAuB,EAAE,WAAY;EAErC,eAAe,EAAE,IAAK;EACtB,oBAAoB,EAAE,WAAY;EAElC,aAAa,EAAE,IAAK;EACpB,kBAAkB,EAAE,WAAY;EAEhC,UAAU,EAAE,IAAK;EACjB,eAAe,EAAE,WAAY;EAE7B,QAAQ,EAAE,QAAS,GACpB;;AAED,AAAA,MAAM,EAAE,AAAA,KAAK,CAAC;EACZ,2BAA2B,EAAE,MAAO;EACpC,wBAAwB,EAAE,MAAO;EACjC,sBAAsB,EAAE,MAAO;EAC/B,mBAAmB,EAAE,MAAO;EAC5B,UAAU,EAAE,IAAK;EACjB,QAAQ,EAAE,QAAS;EACnB,GAAG,EAAE,CAAE;EACP,IAAI,EAAE,CAAE,GAET;;AAED,AAAA,MAAM,CAAC;EACL,OAAO,EAAE,CAAE,GACZ;;AAED,AAAA,KAAK,CAAC;EACJ,iBAAiB,EAAE,eAAO;EAC1B,cAAc,EAAE,eAAO;EACvB,YAAY,EAAE,eAAO;EACrB,SAAS,EAAE,eAAO;EAElB,UAAU,EC/DJ,OAAO;EDgEb,UAAU,EAAE,MAAO,GACpB;;AAED,AAAA,OAAO,CAAC;EACN,OAAO,EAAE,IAAK,GACf","names":[],"sourceRoot":""}]);

/***/ },

/***/ 616:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(613);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(548)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./results.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./results.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = muiThemeable;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getMuiTheme = __webpack_require__(143);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_THEME = void 0;

function getDefaultTheme() {
  if (!DEFAULT_THEME) {
    DEFAULT_THEME = (0, _getMuiTheme2.default)();
  }
  return DEFAULT_THEME;
}

function muiThemeable() {
  return function (Component) {
    var MuiComponent = function MuiComponent(props, context) {
      var _context$muiTheme = context.muiTheme,
          muiTheme = _context$muiTheme === undefined ? getDefaultTheme() : _context$muiTheme;


      return _react2.default.createElement(Component, (0, _extends3.default)({ muiTheme: muiTheme }, props));
    };

    MuiComponent.contextTypes = {
      muiTheme: _react.PropTypes.object.isRequired
    };

    return MuiComponent;
  };
}

/***/ }

});