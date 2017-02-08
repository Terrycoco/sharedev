webpackJsonp([4],{

/***/ 549:
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

var _authActions = __webpack_require__(139);

var actions = _interopRequireWildcard(_authActions);

var _RaisedButton = __webpack_require__(138);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = __webpack_require__(234);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TextField = __webpack_require__(567);

var _TextField2 = _interopRequireDefault(_TextField);

var _PageBar = __webpack_require__(82);

var _PageBar2 = _interopRequireDefault(_PageBar);

var _reactRouter = __webpack_require__(67);

var _ErrorBox = __webpack_require__(577);

var _ErrorBox2 = _interopRequireDefault(_ErrorBox);

var _Loader = __webpack_require__(578);

var _Loader2 = _interopRequireDefault(_Loader);

var _theme = __webpack_require__(140);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(576);

var style = {
  color: _theme.theme.errorText,
  backgroundColor: _theme.theme.errorBackground,
  display: 'table'
};

var Signin = function (_Component) {
  _inherits(Signin, _Component);

  function Signin(props) {
    _classCallCheck(this, Signin);

    var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this, props));

    _this.state = {
      usernameOrEmail: '',
      password: '',
      toRoute: props.toRoute
    };

    _this.doSubmit = _this.doSubmit.bind(_this);
    _this.doCancel = _this.doCancel.bind(_this);
    return _this;
  }

  //grab router from context


  _createClass(Signin, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.clearError();
    }
  }, {
    key: 'doSubmit',
    value: function doSubmit() {
      var values = {
        usernameOrEmail: this.state.usernameOrEmail,
        password: this.state.password
      };
      this.props.signinUser(values, this.context.router);
    }
  }, {
    key: 'doCancel',
    value: function doCancel() {
      this.context.router.push('/');
    }
  }, {
    key: 'handleChange',
    value: function handleChange(name, e) {
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(name, e) {
      //clear out what's in there
      var field = {};
      field[name] = '';
      this.setState(field);
      this.props.clearError();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_PageBar2.default, { title: 'Signin', leftIcon: 'hamburger', backTo: '/' }),
        _react2.default.createElement(
          'div',
          { className: 'CONTENT center-children' },
          _react2.default.createElement(
            'div',
            { className: 'FORM' },
            _react2.default.createElement(
              'form',
              null,
              _react2.default.createElement(
                'div',
                { className: 'msg' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Sign in to ShareWalks to continue'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'linkDiv' },
                  'New User? ',
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: { pathname: "/signup" } },
                    'Sign Up Here'
                  )
                )
              ),
              _react2.default.createElement(_TextField2.default, {
                hintText: 'Username or Email',
                floatingLabelText: 'Username or Email',
                onFocus: this.handleFocus.bind(this, 'usernameOrEmail'),
                onChange: this.handleChange.bind(this, 'usernameOrEmail'),
                value: this.state.usernameOrEmail
              }),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_TextField2.default, {
                hintText: 'Password',
                floatingLabelText: 'Password',
                type: 'password',
                onFocus: this.handleFocus.bind(this, 'password'),
                onChange: this.handleChange.bind(this, 'password'),
                value: this.state.password
              }),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'left-children' },
                _react2.default.createElement(_RaisedButton2.default, { label: 'Sign In', secondary: true, onClick: this.doSubmit }),
                _react2.default.createElement(_FlatButton2.default, { label: 'Cancel', secondary: true, onClick: this.doCancel })
              ),
              this.props.loader ? _react2.default.createElement(_Loader2.default, null) : _react2.default.createElement('div', null),
              _react2.default.createElement(_ErrorBox2.default, { error: this.props.error }),
              _react2.default.createElement('br', null)
            )
          )
        )
      );
    }
  }]);

  return Signin;
}(_react.Component);

Signin.contextTypes = {
  router: _react2.default.PropTypes.object
};


function mapStateToProps(state) {
  return {
    error: state.auth.error,
    loader: state.auth.loader
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Signin);

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TextField = __webpack_require__(572);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TextField2.default;

/***/ },

/***/ 571:
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

var _reactEventListener = __webpack_require__(233);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowsHeight = 24;

function getStyles(props, context, state) {
  return {
    root: {
      position: 'relative' },
    textarea: {
      height: state.height,
      width: '100%',
      resize: 'none',
      font: 'inherit',
      padding: 0,
      cursor: 'inherit'
    },
    shadow: {
      resize: 'none',
      // Overflow also needed to here to remove the extra row
      // added to textareas in Firefox.
      overflow: 'hidden',
      // Visibility needed to hide the extra text area on ipads
      visibility: 'hidden',
      position: 'absolute',
      height: 'initial'
    }
  };
}

var EnhancedTextarea = function (_Component) {
  (0, _inherits3.default)(EnhancedTextarea, _Component);

  function EnhancedTextarea() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedTextarea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedTextarea.__proto__ || (0, _getPrototypeOf2.default)(EnhancedTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: null
    }, _this.handleResize = function (event) {
      _this.syncHeightWithShadow(undefined, event);
    }, _this.handleChange = function (event) {
      _this.syncHeightWithShadow(event.target.value);

      if (_this.props.hasOwnProperty('valueLink')) {
        _this.props.valueLink.requestChange(event.target.value);
      }

      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnhancedTextarea, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        height: this.props.rows * rowsHeight
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.syncHeightWithShadow();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.syncHeightWithShadow(nextProps.value);
      }
    }
  }, {
    key: 'getInputNode',
    value: function getInputNode() {
      return this.refs.input;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getInputNode().value = value;
      this.syncHeightWithShadow(value);
    }
  }, {
    key: 'syncHeightWithShadow',
    value: function syncHeightWithShadow(newValue, event) {
      var shadow = this.refs.shadow;

      if (newValue !== undefined) {
        shadow.value = newValue;
      }

      var newHeight = shadow.scrollHeight;

      // Guarding for jsdom, where scrollHeight isn't present.
      // See https://github.com/tmpvar/jsdom/issues/1013
      if (newHeight === undefined) return;

      if (this.props.rowsMax >= this.props.rows) {
        newHeight = Math.min(this.props.rowsMax * rowsHeight, newHeight);
      }

      newHeight = Math.max(newHeight, rowsHeight);

      if (this.state.height !== newHeight) {
        this.setState({
          height: newHeight
        });

        if (this.props.onHeightChange) {
          this.props.onHeightChange(event, newHeight);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          onHeightChange = _props.onHeightChange,
          rows = _props.rows,
          rowsMax = _props.rowsMax,
          shadowStyle = _props.shadowStyle,
          style = _props.style,
          textareaStyle = _props.textareaStyle,
          valueLink = _props.valueLink,
          other = (0, _objectWithoutProperties3.default)(_props, ['onChange', 'onHeightChange', 'rows', 'rowsMax', 'shadowStyle', 'style', 'textareaStyle', 'valueLink']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var rootStyles = (0, _simpleAssign2.default)(styles.root, style);
      var textareaStyles = (0, _simpleAssign2.default)(styles.textarea, textareaStyle);
      var shadowStyles = (0, _simpleAssign2.default)({}, textareaStyles, styles.shadow, shadowStyle);

      if (this.props.hasOwnProperty('valueLink')) {
        other.value = this.props.valueLink.value;
      }

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(rootStyles) },
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
        _react2.default.createElement('textarea', {
          ref: 'shadow',
          style: prepareStyles(shadowStyles),
          tabIndex: '-1',
          rows: this.props.rows,
          defaultValue: this.props.defaultValue,
          readOnly: true,
          value: this.props.value,
          valueLink: this.props.valueLink
        }),
        _react2.default.createElement('textarea', (0, _extends3.default)({}, other, {
          ref: 'input',
          rows: this.props.rows,
          style: prepareStyles(textareaStyles),
          onChange: this.handleChange
        }))
      );
    }
  }]);
  return EnhancedTextarea;
}(_react.Component);

EnhancedTextarea.defaultProps = {
  rows: 1
};
EnhancedTextarea.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
 false ? EnhancedTextarea.propTypes = {
  defaultValue: _react.PropTypes.any,
  disabled: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  onHeightChange: _react.PropTypes.func,
  rows: _react.PropTypes.number,
  rowsMax: _react.PropTypes.number,
  shadowStyle: _react.PropTypes.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  textareaStyle: _react.PropTypes.object,
  value: _react.PropTypes.string,
  valueLink: _react.PropTypes.object
} : void 0;
exports.default = EnhancedTextarea;

/***/ },

/***/ 572:
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

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(136);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _transitions = __webpack_require__(30);

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedTextarea = __webpack_require__(571);

var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);

var _TextFieldHint = __webpack_require__(573);

var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

var _TextFieldLabel = __webpack_require__(574);

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _TextFieldUnderline = __webpack_require__(575);

var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);

var _warning = __webpack_require__(18);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      _context$muiTheme$tex = _context$muiTheme.textField,
      floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
      focusColor = _context$muiTheme$tex.focusColor,
      textColor = _context$muiTheme$tex.textColor,
      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
      backgroundColor = _context$muiTheme$tex.backgroundColor,
      errorColor = _context$muiTheme$tex.errorColor;


  var styles = {
    root: {
      fontSize: 16,
      lineHeight: '24px',
      width: props.fullWidth ? '100%' : 256,
      height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
      display: 'inline-block',
      position: 'relative',
      backgroundColor: backgroundColor,
      fontFamily: baseTheme.fontFamily,
      transition: _transitions2.default.easeOut('200ms', 'height'),
      cursor: props.disabled ? 'not-allowed' : 'auto'
    },
    error: {
      position: 'relative',
      bottom: 2,
      fontSize: 12,
      lineHeight: '12px',
      color: errorColor,
      transition: _transitions2.default.easeOut()
    },
    floatingLabel: {
      color: props.disabled ? disabledTextColor : floatingLabelColor,
      pointerEvents: 'none'
    },
    input: {
      padding: 0,
      position: 'relative',
      width: '100%',
      border: 'none',
      outline: 'none',
      backgroundColor: 'rgba(0,0,0,0)',
      color: props.disabled ? disabledTextColor : textColor,
      cursor: 'inherit',
      font: 'inherit',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)' },
    inputNative: {
      appearance: 'textfield' }
  };

  styles.textarea = (0, _simpleAssign2.default)({}, styles.input, {
    marginTop: props.floatingLabelText ? 36 : 12,
    marginBottom: props.floatingLabelText ? -36 : -12,
    boxSizing: 'border-box',
    font: 'inherit'
  });

  // Do not assign a height to the textarea as he handles it on his own.
  styles.input.height = '100%';

  if (state.isFocused) {
    styles.floatingLabel.color = focusColor;
  }

  if (props.floatingLabelText) {
    styles.input.boxSizing = 'border-box';

    if (!props.multiLine) {
      styles.input.marginTop = 14;
    }

    if (state.errorText) {
      styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
    }
  }

  if (state.errorText) {
    if (state.isFocused) {
      styles.floatingLabel.color = styles.error.color;
    }
  }

  return styles;
};

/**
 * Check if a value is valid to be displayed inside an input.
 *
 * @param The value to check.
 * @returns True if the string provided is valid, false otherwise.
 */
function isValid(value) {
  return value !== '' && value !== undefined && value !== null;
}

var TextField = function (_Component) {
  (0, _inherits3.default)(TextField, _Component);

  function TextField() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isFocused: false,
      errorText: undefined,
      hasValue: false
    }, _this.handleInputBlur = function (event) {
      _this.setState({ isFocused: false });
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleInputChange = function (event) {
      _this.setState({ hasValue: isValid(event.target.value) });
      if (_this.props.onChange) {
        _this.props.onChange(event, event.target.value);
      }
    }, _this.handleInputFocus = function (event) {
      if (_this.props.disabled) {
        return;
      }
      _this.setState({ isFocused: true });
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleHeightChange = function (event, height) {
      var newHeight = height + 24;
      if (_this.props.floatingLabelText) {
        newHeight += 24;
      }
      _reactDom2.default.findDOMNode(_this).style.height = newHeight + 'px';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TextField, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          children = _props.children,
          name = _props.name,
          hintText = _props.hintText,
          floatingLabelText = _props.floatingLabelText,
          id = _props.id;


      var propsLeaf = children ? children.props : this.props;

      this.setState({
        errorText: this.props.errorText,
        hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
      });

       false ? (0, _warning2.default)(name || hintText || floatingLabelText || id, 'Material-UI: We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.') : void 0;

      var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
      this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.errorText !== this.props.errorText) {
        this.setState({
          errorText: nextProps.errorText
        });
      }

      if (nextProps.children && nextProps.children.props) {
        nextProps = nextProps.children.props;
      }

      if (nextProps.hasOwnProperty('value')) {
        var hasValue = isValid(nextProps.value);

        this.setState({
          hasValue: hasValue
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }
  }, {
    key: 'blur',
    value: function blur() {
      if (this.input) {
        this.getInputNode().blur();
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.input) {
        this.getInputNode().focus();
      }
    }
  }, {
    key: 'select',
    value: function select() {
      if (this.input) {
        this.getInputNode().select();
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.input ? this.getInputNode().value : undefined;
    }
  }, {
    key: 'getInputNode',
    value: function getInputNode() {
      return this.props.children || this.props.multiLine ? this.input.getInputNode() : _reactDom2.default.findDOMNode(this.input);
    }
  }, {
    key: '_isControlled',
    value: function _isControlled() {
      return this.props.hasOwnProperty('value');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          disabled = _props2.disabled,
          errorStyle = _props2.errorStyle,
          errorText = _props2.errorText,
          floatingLabelFixed = _props2.floatingLabelFixed,
          floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
          floatingLabelShrinkStyle = _props2.floatingLabelShrinkStyle,
          floatingLabelStyle = _props2.floatingLabelStyle,
          floatingLabelText = _props2.floatingLabelText,
          fullWidth = _props2.fullWidth,
          hintText = _props2.hintText,
          hintStyle = _props2.hintStyle,
          id = _props2.id,
          inputStyle = _props2.inputStyle,
          multiLine = _props2.multiLine,
          onBlur = _props2.onBlur,
          onChange = _props2.onChange,
          onFocus = _props2.onFocus,
          style = _props2.style,
          type = _props2.type,
          underlineDisabledStyle = _props2.underlineDisabledStyle,
          underlineFocusStyle = _props2.underlineFocusStyle,
          underlineShow = _props2.underlineShow,
          underlineStyle = _props2.underlineStyle,
          rows = _props2.rows,
          rowsMax = _props2.rowsMax,
          textareaStyle = _props2.textareaStyle,
          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelShrinkStyle', 'floatingLabelStyle', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'inputStyle', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax', 'textareaStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var inputId = id || this.uniqueId;

      var errorTextElement = this.state.errorText && _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.error, errorStyle)) },
        this.state.errorText
      );

      var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
        _TextFieldLabel2.default,
        {
          muiTheme: this.context.muiTheme,
          style: (0, _simpleAssign2.default)(styles.floatingLabel, floatingLabelStyle, this.state.isFocused ? floatingLabelFocusStyle : null),
          shrinkStyle: floatingLabelShrinkStyle,
          htmlFor: inputId,
          shrink: this.state.hasValue || this.state.isFocused || floatingLabelFixed,
          disabled: disabled
        },
        floatingLabelText
      );

      var inputProps = {
        id: inputId,
        ref: function ref(elem) {
          return _this2.input = elem;
        },
        disabled: this.props.disabled,
        onBlur: this.handleInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.handleInputFocus
      };

      var childStyleMerged = (0, _simpleAssign2.default)(styles.input, inputStyle);

      var inputElement = void 0;
      if (children) {
        inputElement = _react2.default.cloneElement(children, (0, _extends3.default)({}, inputProps, children.props, {
          style: (0, _simpleAssign2.default)(childStyleMerged, children.props.style)
        }));
      } else {
        inputElement = multiLine ? _react2.default.createElement(_EnhancedTextarea2.default, (0, _extends3.default)({
          style: childStyleMerged,
          textareaStyle: (0, _simpleAssign2.default)(styles.textarea, styles.inputNative, textareaStyle),
          rows: rows,
          rowsMax: rowsMax
        }, other, inputProps, {
          onHeightChange: this.handleHeightChange
        })) : _react2.default.createElement('input', (0, _extends3.default)({
          type: type,
          style: prepareStyles((0, _simpleAssign2.default)(styles.inputNative, childStyleMerged))
        }, other, inputProps));
      }

      var rootProps = {};

      if (children) {
        rootProps = other;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, rootProps, {
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }),
        floatingLabelTextElement,
        hintText ? _react2.default.createElement(_TextFieldHint2.default, {
          muiTheme: this.context.muiTheme,
          show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused) || !this.state.hasValue && floatingLabelText && floatingLabelFixed && !this.state.isFocused,
          style: hintStyle,
          text: hintText
        }) : null,
        inputElement,
        underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
          disabled: disabled,
          disabledStyle: underlineDisabledStyle,
          error: !!this.state.errorText,
          errorStyle: errorStyle,
          focus: this.state.isFocused,
          focusStyle: underlineFocusStyle,
          muiTheme: this.context.muiTheme,
          style: underlineStyle
        }) : null,
        errorTextElement
      );
    }
  }]);
  return TextField;
}(_react.Component);

TextField.defaultProps = {
  disabled: false,
  floatingLabelFixed: false,
  multiLine: false,
  fullWidth: false,
  type: 'text',
  underlineShow: true,
  rows: 1
};
TextField.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
 false ? TextField.propTypes = {
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The text string to use for the default value.
   */
  defaultValue: _react.PropTypes.any,
  /**
   * Disables the text field if set to true.
   */
  disabled: _react.PropTypes.bool,
  /**
   * The style object to use to override error styles.
   */
  errorStyle: _react.PropTypes.object,
  /**
   * The error content to display.
   */
  errorText: _react.PropTypes.node,
  /**
   * If true, the floating label will float even when there is no value.
   */
  floatingLabelFixed: _react.PropTypes.bool,
  /**
   * The style object to use to override floating label styles when focused.
   */
  floatingLabelFocusStyle: _react.PropTypes.object,
  /**
   * The style object to use to override floating label styles when shrunk.
   */
  floatingLabelShrinkStyle: _react.PropTypes.object,
  /**
   * The style object to use to override floating label styles.
   */
  floatingLabelStyle: _react.PropTypes.object,
  /**
   * The content to use for the floating label element.
   */
  floatingLabelText: _react.PropTypes.node,
  /**
   * If true, the field receives the property width 100%.
   */
  fullWidth: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the TextField's hint text element.
   */
  hintStyle: _react.PropTypes.object,
  /**
   * The hint content to display.
   */
  hintText: _react.PropTypes.node,
  /**
   * The id prop for the text field.
   */
  id: _react.PropTypes.string,
  /**
   * Override the inline-styles of the TextField's input element.
   * When multiLine is false: define the style of the input element.
   * When multiLine is true: define the style of the container of the textarea.
   */
  inputStyle: _react.PropTypes.object,
  /**
   * If true, a textarea element will be rendered.
   * The textarea also grows and shrinks according to the number of lines.
   */
  multiLine: _react.PropTypes.bool,
  /**
   * Name applied to the input.
   */
  name: _react.PropTypes.string,
  /** @ignore */
  onBlur: _react.PropTypes.func,
  /**
   * Callback function that is fired when the textfield's value changes.
   *
   * @param {object} event Change event targeting the text field.
   * @param {string} newValue The new value of the text field.
   */
  onChange: _react.PropTypes.func,
  /** @ignore */
  onFocus: _react.PropTypes.func,
  /**
   * Number of rows to display when multiLine option is set to true.
   */
  rows: _react.PropTypes.number,
  /**
   * Maximum number of rows to display when
   * multiLine option is set to true.
   */
  rowsMax: _react.PropTypes.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * Override the inline-styles of the TextField's textarea element.
   * The TextField use either a textarea or an input,
   * this property has effects only when multiLine is true.
   */
  textareaStyle: _react.PropTypes.object,
  /**
   * Specifies the type of input to display
   * such as "password" or "text".
   */
  type: _react.PropTypes.string,
  /**
   * Override the inline-styles of the
   * TextField's underline element when disabled.
   */
  underlineDisabledStyle: _react.PropTypes.object,
  /**
   * Override the inline-styles of the TextField's
   * underline element when focussed.
   */
  underlineFocusStyle: _react.PropTypes.object,
  /**
   * If true, shows the underline for the text field.
   */
  underlineShow: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the TextField's underline element.
   */
  underlineStyle: _react.PropTypes.object,
  /**
   * The value of the text field.
   */
  value: _react.PropTypes.any
} : void 0;
exports.default = TextField;

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _transitions = __webpack_require__(30);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  var hintColor = props.muiTheme.textField.hintColor,
      show = props.show;


  return {
    root: {
      position: 'absolute',
      opacity: show ? 1 : 0,
      color: hintColor,
      transition: _transitions2.default.easeOut(),
      bottom: 12
    }
  };
}

var TextFieldHint = function TextFieldHint(props) {
  var prepareStyles = props.muiTheme.prepareStyles,
      style = props.style,
      text = props.text;


  var styles = getStyles(props);

  return _react2.default.createElement(
    'div',
    { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
    text
  );
};

 false ? TextFieldHint.propTypes = {
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _react.PropTypes.object.isRequired,
  /**
   * True if the hint text should be visible.
   */
  show: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * The hint text displayed.
   */
  text: _react.PropTypes.node
} : void 0;

TextFieldHint.defaultProps = {
  show: true
};

exports.default = TextFieldHint;

/***/ },

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _transitions = __webpack_require__(30);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  var defaultStyles = {
    position: 'absolute',
    lineHeight: '22px',
    top: 38,
    transition: _transitions2.default.easeOut(),
    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
    transform: 'scale(1) translate(0, 0)',
    transformOrigin: 'left top',
    pointerEvents: 'auto',
    userSelect: 'none'
  };

  var shrinkStyles = props.shrink ? (0, _simpleAssign2.default)({
    transform: 'scale(0.75) translate(0, -28px)',
    pointerEvents: 'none'
  }, props.shrinkStyle) : null;

  return {
    root: (0, _simpleAssign2.default)(defaultStyles, props.style, shrinkStyles)
  };
}

var TextFieldLabel = function TextFieldLabel(props) {
  var muiTheme = props.muiTheme,
      className = props.className,
      children = props.children,
      htmlFor = props.htmlFor,
      onTouchTap = props.onTouchTap;
  var prepareStyles = muiTheme.prepareStyles;

  var styles = getStyles(props);

  return _react2.default.createElement(
    'label',
    {
      className: className,
      style: prepareStyles(styles.root),
      htmlFor: htmlFor,
      onTouchTap: onTouchTap
    },
    children
  );
};

 false ? TextFieldLabel.propTypes = {
  /**
   * The label contents.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Disables the label if set to true.
   */
  disabled: _react.PropTypes.bool,
  /**
   * The id of the target element that this label should refer to.
   */
  htmlFor: _react.PropTypes.string,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _react.PropTypes.object.isRequired,
  /**
   * Callback function for when the label is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the text field label.
   */
  onTouchTap: _react.PropTypes.func,
  /**
   * True if the floating label should shrink.
   */
  shrink: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element when shrunk.
   */
  shrinkStyle: _react.PropTypes.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;

TextFieldLabel.defaultProps = {
  disabled: false,
  shrink: false
};

exports.default = TextFieldLabel;

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(15);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _transitions = __webpack_require__(30);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * True if the parent `TextField` is disabled.
   */
  disabled: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` is disabled.
   */
  disabledStyle: _react.PropTypes.object,
  /**
   * True if the parent `TextField` has an error.
   */
  error: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` has an error.
   */
  errorStyle: _react.PropTypes.object,
  /**
   * True if the parent `TextField` is focused.
   */
  focus: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` is focused.
   */
  focusStyle: _react.PropTypes.object,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _react.PropTypes.object.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
};

var defaultProps = {
  disabled: false,
  disabledStyle: {},
  error: false,
  errorStyle: {},
  focus: false,
  focusStyle: {},
  style: {}
};

var TextFieldUnderline = function TextFieldUnderline(props) {
  var disabled = props.disabled,
      disabledStyle = props.disabledStyle,
      error = props.error,
      errorStyle = props.errorStyle,
      focus = props.focus,
      focusStyle = props.focusStyle,
      muiTheme = props.muiTheme,
      style = props.style;
  var errorStyleColor = errorStyle.color;
  var prepareStyles = muiTheme.prepareStyles,
      _muiTheme$textField = muiTheme.textField,
      borderColor = _muiTheme$textField.borderColor,
      disabledTextColor = _muiTheme$textField.disabledTextColor,
      errorColor = _muiTheme$textField.errorColor,
      focusColor = _muiTheme$textField.focusColor;


  var styles = {
    root: {
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderBottom: 'solid 1px',
      borderColor: borderColor,
      bottom: 8,
      boxSizing: 'content-box',
      margin: 0,
      position: 'absolute',
      width: '100%'
    },
    disabled: {
      borderBottom: 'dotted 2px',
      borderColor: disabledTextColor
    },
    focus: {
      borderBottom: 'solid 2px',
      borderColor: focusColor,
      transform: 'scaleX(0)',
      transition: _transitions2.default.easeOut()
    },
    error: {
      borderColor: errorStyleColor ? errorStyleColor : errorColor,
      transform: 'scaleX(1)'
    }
  };

  var underline = (0, _simpleAssign2.default)({}, styles.root, style);
  var focusedUnderline = (0, _simpleAssign2.default)({}, underline, styles.focus, focusStyle);

  if (disabled) underline = (0, _simpleAssign2.default)({}, underline, styles.disabled, disabledStyle);
  if (focus) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, { transform: 'scaleX(1)' });
  if (error) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, styles.error);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('hr', { style: prepareStyles(underline) }),
    _react2.default.createElement('hr', { style: prepareStyles(focusedUnderline) })
  );
};

 false ? TextFieldUnderline.propTypes = propTypes : void 0;
TextFieldUnderline.defaultProps = defaultProps;

exports.default = TextFieldUnderline;

/***/ },

/***/ 576:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(579);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(548)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./auth.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./auth.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(236);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(576);

var ErrorBox = exports.ErrorBox = function (_Component) {
  _inherits(ErrorBox, _Component);

  function ErrorBox(props) {
    _classCallCheck(this, ErrorBox);

    var _this = _possibleConstructorReturn(this, (ErrorBox.__proto__ || Object.getPrototypeOf(ErrorBox)).call(this, props));

    _this.renderError = _this.renderError.bind(_this);
    return _this;
  }

  _createClass(ErrorBox, [{
    key: 'renderError',
    value: function renderError() {
      if (this.props.error) {
        return _react2.default.createElement(
          'div',
          { key: 'errbox', className: 'form-error' },
          this.props.error
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          component: 'div',
          transitionName: 'fader',
          transitionEnter: true,
          transitionEnterTimeout: 650,
          transitionLeave: true,
          transitionLeaveTimeout: 1000 },
        this.renderError()
      );
    }
  }]);

  return ErrorBox;
}(_react.Component);

exports.default = ErrorBox;

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

/***/ 579:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(547)();
exports.push([module.i, "hr.accent {\n  border-top: 2px solid #fd8258; }\n\nhr.primary {\n  border-top: 2px solid #5C821A; }\n\n.linkDiv {\n  margin-top: 2rem;\n  font-size: .7em; }\n\n.linkDiv a {\n  text-decoration: none;\n  color: #fd8258; }\n\n.form-error {\n  display: flex;\n  justify-content: center;\n  vertical-align: center;\n  background: #C6D166;\n  color: #ffffff;\n  line-height: 2em;\n  height: 2em;\n  border-radius: .5em;\n  margin-top: 3em; }\n\n.msg {\n  margin-top: 1em; }\n\n.fader-enter {\n  opacity: 0; }\n\n.fader-enter.fader-enter-active {\n  opacity: 1;\n  transition: all 400ms ease-in-out; }\n\n.fader-leave {\n  opacity: 1; }\n\n.fader-leave.fader-leave-active {\n  opacity: 0;\n  transition: all 650ms ease-in-out; }\n", "", {"version":3,"file":"/home/terry/myProjects/PWA/apps-dev/src/components/Auth/auth.scss","sources":["src/components/Auth/auth.scss","src/styles/_colors.scss"],"sourcesContent":["@import '../../styles/_colors';\n\n\n\n.linkDiv {\n  margin-top: 2rem;\n  font-size: .7em;\n}\n\n.linkDiv a {\n  text-decoration: none;\n  color: #fd8258;\n}\n\n.form-error {\n  display: flex;\n  justify-content: center;\n  vertical-align: center;\n  background: $secondary;\n  color: $light;\n  line-height: 2em;\n  height: 2em;\n  border-radius: .5em;\n  margin-top: 3em;\n\n}\n\n.msg {\n  margin-top: 1em;\n}\n\n\n\n\n//fade in other components\n\n.fader-enter {\n  opacity: 0;\n}\n\n.fader-enter.fader-enter-active {\n   opacity: 1;\n   transition: all 400ms ease-in-out;\n  }\n\n\n.fader-leave  {\n  opacity: 1;\n}\n\n.fader-leave.fader-leave-active  {\n    opacity: 0;\n    transition: all 650ms ease-in-out;\n} ","$deep: #0F1B07;\n$light: #ffffff;\n$green: #5C821A;\n$brightgreen: #C6D166;\n$orange: #fd8258;\n\n\n$dark: $deep; \n$primary: $green; \n$secondary: $brightgreen;\n$accent: $orange;\n\nhr.accent {\n  border-top: 2px solid $accent;\n}\n\nhr.primary {\n  border-top: 2px solid $primary;\n}"],"mappings":"ACYA,AAAE,EAAA,AAAA,OAAO,CAAC;EACR,UAAU,EAAE,GAAG,CAAC,KAAK,CATd,OAAO,GAUf;;AAED,AAAE,EAAA,AAAA,QAAQ,CAAC;EACT,UAAU,EAAE,GAAG,CAAC,KAAK,CAff,OAAO,GAgBd;;ADdD,AAAA,QAAQ,CAAC;EACP,UAAU,EAAE,IAAK;EACjB,SAAS,EAAE,IAAK,GACjB;;AAED,AAAS,QAAD,CAAC,CAAC,CAAC;EACT,eAAe,EAAE,IAAK;EACtB,KAAK,EAAE,OAAQ,GAChB;;AAED,AAAA,WAAW,CAAC;EACV,OAAO,EAAE,IAAK;EACd,eAAe,EAAE,MAAO;EACxB,cAAc,EAAE,MAAO;EACvB,UAAU,ECfE,OAAO;EDgBnB,KAAK,EClBC,OAAO;EDmBb,WAAW,EAAE,GAAI;EACjB,MAAM,EAAE,GAAI;EACZ,aAAa,EAAE,IAAK;EACpB,UAAU,EAAE,GAAI,GAEjB;;AAED,AAAA,IAAI,CAAC;EACH,UAAU,EAAE,GAAI,GACjB;;AAOD,AAAA,YAAY,CAAC;EACX,OAAO,EAAE,CAAE,GACZ;;AAED,AAAY,YAAA,AAAA,mBAAmB,CAAC;EAC7B,OAAO,EAAE,CAAE;EACX,UAAU,EAAE,qBAAsB,GAClC;;AAGH,AAAA,YAAY,CAAE;EACZ,OAAO,EAAE,CAAE,GACZ;;AAED,AAAY,YAAA,AAAA,mBAAmB,CAAE;EAC7B,OAAO,EAAE,CAAE;EACX,UAAU,EAAE,qBAAsB,GACrC","names":[],"sourceRoot":""}]);

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(547)();
exports.push([module.i, ".loader {\n  left: 50%;\n  top: 50%;\n  position: fixed;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n\n.loader #spinner {\n  box-sizing: border-box;\n  stroke: #673AB7;\n  stroke-width: 3px;\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-animation: line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1.6s linear infinite;\n  animation: line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1.6s linear infinite; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(450deg);\n    transform: rotate(450deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(450deg);\n    transform: rotate(450deg); } }\n\n@-webkit-keyframes line {\n  0% {\n    stroke-dasharray: 2, 85.964;\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  50% {\n    stroke-dasharray: 65.973, 21.9911;\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dasharray: 2, 85.964;\n    stroke-dashoffset: -65.973;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg); } }\n\n@keyframes line {\n  0% {\n    stroke-dasharray: 2, 85.964;\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  50% {\n    stroke-dasharray: 65.973, 21.9911;\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dasharray: 2, 85.964;\n    stroke-dashoffset: -65.973;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg); } }\n", "", {"version":3,"file":"/home/terry/myProjects/PWA/apps-dev/src/components/Loader/loader.scss","sources":["src/components/Loader/loader.scss"],"sourcesContent":[".loader {\n  left: 50%;\n  top: 50%;\n  position: fixed;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n  .loader #spinner {\n    box-sizing: border-box;\n    stroke: #673AB7;\n    stroke-width: 3px;\n    -webkit-transform-origin: 50%;\n            transform-origin: 50%;\n    -webkit-animation: line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1.6s linear infinite;\n            animation: line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1.6s linear infinite; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(450deg);\n            transform: rotate(450deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(450deg);\n            transform: rotate(450deg); } }\n\n@-webkit-keyframes line {\n  0% {\n    stroke-dasharray: 2, 85.964;\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    stroke-dasharray: 65.973, 21.9911;\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dasharray: 2, 85.964;\n    stroke-dashoffset: -65.973;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); } }\n\n@keyframes line {\n  0% {\n    stroke-dasharray: 2, 85.964;\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    stroke-dasharray: 65.973, 21.9911;\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dasharray: 2, 85.964;\n    stroke-dashoffset: -65.973;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); } }\n"],"mappings":"AAAA,AAAA,OAAO,CAAC;EACN,IAAI,EAAE,GAAI;EACV,GAAG,EAAE,GAAI;EACT,QAAQ,EAAE,KAAM;EAChB,iBAAiB,EAAE,qBAAS;EACpB,SAAS,EAAE,qBAAS,GAAe;;AAC3C,AAAQ,OAAD,CAAC,QAAQ,CAAC;EACf,UAAU,EAAE,UAAW;EACvB,MAAM,EAAE,OAAQ;EAChB,YAAY,EAAE,GAAI;EAClB,wBAAwB,EAAE,GAAI;EACtB,gBAAgB,EAAE,GAAI;EAC9B,iBAAiB,EAAE,IAAI,CAAC,IAAI,CAAC,4BAAY,CAAiB,QAAQ,EAAE,MAAM,CAAC,IAAI,CAAC,MAAM,CAAC,QAAQ;EACvF,SAAS,EAAE,IAAI,CAAC,IAAI,CAAC,4BAAY,CAAiB,QAAQ,EAAE,MAAM,CAAC,IAAI,CAAC,MAAM,CAAC,QAAQ,GAAG;;AAEtG,kBAAkB,CAAlB,MAAkB;EAChB,AAAA,IAAI;IACF,iBAAiB,EAAE,SAAM;IACjB,SAAS,EAAE,SAAM;EAC3B,AAAA,EAAE;IACA,iBAAiB,EAAE,cAAM;IACjB,SAAS,EAAE,cAAM;;AAE7B,UAAU,CAAV,MAAU;EACR,AAAA,IAAI;IACF,iBAAiB,EAAE,SAAM;IACjB,SAAS,EAAE,SAAM;EAC3B,AAAA,EAAE;IACA,iBAAiB,EAAE,cAAM;IACjB,SAAS,EAAE,cAAM;;AAE7B,kBAAkB,CAAlB,IAAkB;EAChB,AAAA,EAAE;IACA,gBAAgB,EAAE,SAAU;IAC5B,iBAAiB,EAAE,SAAM;IACjB,SAAS,EAAE,SAAM;EAC3B,AAAA,GAAG;IACD,gBAAgB,EAAE,eAAgB;IAClC,iBAAiB,EAAE,CAAE;EACvB,AAAA,IAAI;IACF,gBAAgB,EAAE,SAAU;IAC5B,iBAAiB,EAAE,OAAQ;IAC3B,iBAAiB,EAAE,aAAM;IACjB,SAAS,EAAE,aAAM;;AAE7B,UAAU,CAAV,IAAU;EACR,AAAA,EAAE;IACA,gBAAgB,EAAE,SAAU;IAC5B,iBAAiB,EAAE,SAAM;IACjB,SAAS,EAAE,SAAM;EAC3B,AAAA,GAAG;IACD,gBAAgB,EAAE,eAAgB;IAClC,iBAAiB,EAAE,CAAE;EACvB,AAAA,IAAI;IACF,gBAAgB,EAAE,SAAU;IAC5B,iBAAiB,EAAE,OAAQ;IAC3B,iBAAiB,EAAE,aAAM;IACjB,SAAS,EAAE,aAAM","names":[],"sourceRoot":""}]);

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

/***/ }

});