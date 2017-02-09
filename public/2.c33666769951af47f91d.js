webpackJsonp([2],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Paper = __webpack_require__(237);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Paper2.default;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _IconButton = __webpack_require__(219);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _IconButton2.default;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(5);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _transitions = __webpack_require__(15);

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

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FontIcon = __webpack_require__(217);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FontIcon2.default;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(5);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _transitions = __webpack_require__(15);

var _transitions2 = _interopRequireDefault(_transitions);

var _propTypes = __webpack_require__(59);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedButton = __webpack_require__(64);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _FontIcon = __webpack_require__(218);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Tooltip = __webpack_require__(221);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _childUtils = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
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

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
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

      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style, hovered ? hoveredStyle : {});

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

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(5);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _transitions = __webpack_require__(15);

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

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(5);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _transitions = __webpack_require__(15);

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

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createEagerElementUtil = __webpack_require__(226);

var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);

var _isReferentiallyTransparentFunctionComponent = __webpack_require__(224);

var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFactory = function createFactory(type) {
  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
  return function (p, c) {
    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
  };
};

exports.default = createFactory;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object');
};

exports.default = isClassComponent;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isClassComponent = __webpack_require__(223);

var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && ("production" === 'production' || !Component.propTypes));
};

exports.default = isReferentiallyTransparentFunctionComponent;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _createHelper = __webpack_require__(101);

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = __webpack_require__(222);

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

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(5);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(59);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(15);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var rounded = props.rounded,
      circle = props.circle,
      transitionEnabled = props.transitionEnabled,
      zDepth = props.zDepth;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      paper = _context$muiTheme.paper;


  return {
    root: {
      color: paper.color,
      backgroundColor: paper.backgroundColor,
      transition: transitionEnabled && _transitions2.default.easeOut(),
      boxSizing: 'border-box',
      fontFamily: baseTheme.fontFamily,
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
      borderRadius: circle ? '50%' : rounded ? '2px' : '0px'
    }
  };
}

var Paper = function (_Component) {
  (0, _inherits3.default)(Paper, _Component);

  function Paper() {
    (0, _classCallCheck3.default)(this, Paper);
    return (0, _possibleConstructorReturn3.default)(this, (Paper.__proto__ || (0, _getPrototypeOf2.default)(Paper)).apply(this, arguments));
  }

  (0, _createClass3.default)(Paper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          circle = _props.circle,
          rounded = _props.rounded,
          style = _props.style,
          transitionEnabled = _props.transitionEnabled,
          zDepth = _props.zDepth,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        children
      );
    }
  }]);
  return Paper;
}(_react.Component);

Paper.defaultProps = {
  circle: false,
  rounded: true,
  transitionEnabled: true,
  zDepth: 1
};
Paper.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
 false ? Paper.propTypes = {
  /**
   * Children passed into the paper element.
   */
  children: _react.PropTypes.node,
  /**
   * Set to true to generate a circlular paper container.
   */
  circle: _react.PropTypes.bool,
  /**
   * By default, the paper container will have a border radius.
   * Set this to false to generate a container with sharp corners.
   */
  rounded: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * Set to false to disable CSS transitions for the paper element.
   */
  transitionEnabled: _react.PropTypes.bool,
  /**
   * This number represents the zDepth of the paper shadow.
   */
  zDepth: _propTypes2.default.zDepth
} : void 0;
exports.default = Paper;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(5);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _keyboardArrowUp = __webpack_require__(320);

var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);

var _keyboardArrowDown = __webpack_require__(319);

var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);

var _IconButton = __webpack_require__(104);

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

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CardExpandable = exports.CardActions = exports.CardText = exports.CardMedia = exports.CardTitle = exports.CardHeader = exports.Card = undefined;

var _Card2 = __webpack_require__(302);

var _Card3 = _interopRequireDefault(_Card2);

var _CardHeader2 = __webpack_require__(304);

var _CardHeader3 = _interopRequireDefault(_CardHeader2);

var _CardTitle2 = __webpack_require__(307);

var _CardTitle3 = _interopRequireDefault(_CardTitle2);

var _CardMedia2 = __webpack_require__(305);

var _CardMedia3 = _interopRequireDefault(_CardMedia2);

var _CardText2 = __webpack_require__(306);

var _CardText3 = _interopRequireDefault(_CardText2);

var _CardActions2 = __webpack_require__(303);

var _CardActions3 = _interopRequireDefault(_CardActions2);

var _CardExpandable2 = __webpack_require__(261);

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

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(5);

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

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Avatar = __webpack_require__(300);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Avatar2.default;

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(5);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Paper = __webpack_require__(100);

var _Paper2 = _interopRequireDefault(_Paper);

var _CardExpandable = __webpack_require__(261);

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

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(5);

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

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(5);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Avatar = __webpack_require__(301);

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

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(5);

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

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(5);

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

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(5);

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

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(62);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(61);

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

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(62);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(61);

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

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(34);

var _PageBar = __webpack_require__(67);

var _PageBar2 = _interopRequireDefault(_PageBar);

var _LeafletMap = __webpack_require__(375);

var _LeafletMap2 = _interopRequireDefault(_LeafletMap);

var _WalkList = __webpack_require__(377);

var _WalkList2 = _interopRequireDefault(_WalkList);

var _actions = __webpack_require__(65);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(381);

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

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PageBar = __webpack_require__(67);

var _PageBar2 = _interopRequireDefault(_PageBar);

var _Loader = __webpack_require__(435);

var _Loader2 = _interopRequireDefault(_Loader);

var _reactRedux = __webpack_require__(34);

var _geo = __webpack_require__(329);

var _actions = __webpack_require__(65);

var actions = _interopRequireWildcard(_actions);

var _reactRouter = __webpack_require__(240);

var _geoJson = __webpack_require__(442);

var _geoJson2 = _interopRequireDefault(_geoJson);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(298);

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

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(34);

var _WalkItem = __webpack_require__(437);

var _WalkItem2 = _interopRequireDefault(_WalkItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(370);

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

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

__webpack_require__(436);

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

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(279);

var _FlatButton = __webpack_require__(324);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _searchActions = __webpack_require__(280);

var actions = _interopRequireWildcard(_searchActions);

var _reactRedux = __webpack_require__(34);

var _muiThemeable = __webpack_require__(441);

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(370);

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

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = muiThemeable;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getMuiTheme = __webpack_require__(330);

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

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

module.exports = {
	"type": "FeatureCollection",
	"features": [
		{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [
					-117.8532,
					33.78834
				]
			},
			"properties": {
				"title": "Walk Title",
				"descr": "I am a walk found here"
			}
		},
		{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [
					-117.8531,
					33.78833
				]
			},
			"properties": {
				"title": "Another Walk Title",
				"descr": "I am another walk found here"
			}
		}
	]
};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var horizontal = _react.PropTypes.oneOf(['left', 'middle', 'right']);
var vertical = _react.PropTypes.oneOf(['top', 'center', 'bottom']);

exports.default = {

  corners: _react.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

  horizontal: horizontal,

  vertical: vertical,

  origin: _react.PropTypes.shape({
    horizontal: horizontal,
    vertical: vertical
  }),

  cornersAndCenter: _react.PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

  stringOrNumber: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

  zDepth: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5])

};

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _SvgIcon = __webpack_require__(220);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SvgIcon2.default;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _shouldUpdate = __webpack_require__(225);

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _shallowEqual = __webpack_require__(33);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _createHelper = __webpack_require__(101);

var _createHelper2 = _interopRequireDefault(_createHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pure = (0, _shouldUpdate2.default)(function (props, nextProps) {
  return !(0, _shallowEqual2.default)(props, nextProps);
});

exports.default = (0, _createHelper2.default)(pure, 'pure', true, true);

/***/ })

});