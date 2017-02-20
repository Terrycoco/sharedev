webpackJsonp([3],{

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

/***/ 316:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _PageBar = __webpack_require__(60);

var _PageBar2 = _interopRequireDefault(_PageBar);

var _LeafletMap = __webpack_require__(384);

var _LeafletMap2 = _interopRequireDefault(_LeafletMap);

var _WalkList = __webpack_require__(387);

var _WalkList2 = _interopRequireDefault(_WalkList);

var _actions = __webpack_require__(62);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(390);

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
      this.props.getWalkSummary(walkId, this.context.router);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'PAGE', key: 'results' },
        _react2.default.createElement(_PageBar2.default, { title: 'Find A Walk', leftIcon: 'goLeft', backTo: '/search', fwdTo: this.state.isFlipped ? "List" : "Map", onFlip: this.flip }),
        _react2.default.createElement(
          'div',
          { className: 'CONTENT center-children' },
          _react2.default.createElement('input', { ref: function ref(input) {
              return _this2._name = input;
            }, id: 'walkId', className: 'hidden' }),
          _react2.default.createElement('button', { id: 'goToSummary', onClick: this.handleClick, className: 'hidden' }),
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

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _actions = __webpack_require__(62);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(316);

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

      //init map 
      map = L.map('map').fitWorld();

      //add tile layer
      var KartoLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      //geolocate
      // map.locate({setView: true, maxZoom: 16});


      this.updateLayers();

      map.setView(myLayer.getBounds().getCenter(), 13);

      map.on('popupopen', function (e) {
        var source = e.popup._source;
        var feature = e.popup._source.feature;
      });
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
            var btn = document.getElementById('goToSummary').click();
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

/***/ 387:
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
              walk: walk.properties, backTo: 'results'
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

/***/ 390:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});