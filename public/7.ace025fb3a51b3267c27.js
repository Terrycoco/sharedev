webpackJsonp([7],{

/***/ 511:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 523:
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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(511);

var Test = function (_Component) {
  _inherits(Test, _Component);

  function Test(props) {
    _classCallCheck(this, Test);

    var _this = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Test, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'PAGE' },
        _react2.default.createElement(_PageBar2.default, { title: 'Testing', leftIcon: 'hamburger', backTo: 'home' }),
        _react2.default.createElement(
          'div',
          { className: 'CONTENT' },
          _react2.default.createElement(
            'div',
            { className: 'COLUMN' },
            _react2.default.createElement(
              'div',
              { className: 'textbox' },
              'Lorem ipsum dolor sit amet, rutrum tellus ut. Vel sem nisl, sapien mauris metus ante arcu bibendum blandit, id vitae hac, ullamcorper tincidunt egestas vivamus arcu id, pretium vel aenean. Arcu inceptos porttitor nascetur phasellus rutrum. Condimentum in, nec quam ut sed, ut id vel, faucibus faucibus. Arcu mauris mattis vel, arcu augue in in in in, erat in, blandit risus, magna elit in urna. Accumsan tincidunt cursus quisque suscipit, dui a. Semper quia enim porttitor id autem. Purus velit suscipit vivamus, elementum non est cras sem volutpat, et pretium et molestie. Feugiat quis tortor eget orci. Vel pretium ac pharetra libero quam pede, velit neque, suspendisse dolor fermentum amet, quisque consectetuer viverra nonummy dolor facilisi. Lorem elit lectus eget tempor sodales, non ut turpis venenatis volutpat ipsum. Lectus consequat urna ut neque fusce, eget massa ut integer est, ipsum suspendisse quisque sed a, sed mauris vitae enim tincidunt integer, dolor fringilla. In leo velit wisi quam integer, aliquam dolor enim sapien morbi lacinia non, non fermentum hendrerit, amet malesuada, ullamcorper amet. Varius integer interdum, amet non gravida ultrices pulvinar, mi lectus gravida, euismod risus placerat praesent arcu. Voluptatum mauris sit arcu, morbi phasellus a, vel integer elit. Sit nascetur porta morbi, porttitor augue ante dui et nulla rutrum, vivamus mollis massa, urna sem diam odio quisque. Vestibulum erat tristique praesent ornare risus, justo nam velit mus ac, ipsum dis. Non elit dui libero, aenean vivamus eros faucibus, leo et eu orci in sed nonummy, praesent curabitur turpis morbi ante parturient, eu odio risus consectetuer facilisis pellentesque. Sit tortor curabitur enim rutrum, suspendisse porta ipsum convallis dolor, libero laoreet tristique metus elit. Lectus perferendis ipsum lorem consequat. Tortor nulla lectus molestie donec metus, nisl vivamus aenean tellus eget nunc tempor. Non lorem proin augue potenti, elit ante tristique dolor vitae enim, sed erat ultricies elit nisl duis. Orci elit risus nulla et, ultricies felis malesuada vitae libero dignissim suspendisse. Ac etiam blandit volutpat nec diam, rutrum commodo laoreet, volutpat erat vestibulum eros exercitationem ridiculus pellentesque, dolor faucibus nascetur, porttitor duis accumsan eu ornare neque eleifend. Tincidunt convallis hendrerit eros, ut enim iaculis, velit massa magni erat magna hendrerit nam, cras turpis fermentum orci aliquam feugiat. Id nemo aliquip vel mauris semper.'
            ),
            ' '
          ),
          _react2.default.createElement(
            'div',
            { className: 'COLUMN' },
            _react2.default.createElement(
              'div',
              { className: 'textbox' },
              'Lorem ipsum dolor sit amet, rutrum tellus ut. Vel sem nisl, sapien mauris metus ante arcu bibendum blandit, id vitae hac, ullamcorper tincidunt egestas vivamus arcu id, pretium vel aenean. Arcu inceptos porttitor nascetur phasellus rutrum. Condimentum in, nec quam ut sed, ut id vel, faucibus faucibus. Arcu mauris mattis vel, arcu augue in in in in, erat in, blandit risus, magna elit in urna. Accumsan tincidunt cursus quisque suscipit, dui a. Semper quia enim porttitor id autem. Purus velit suscipit vivamus, elementum non est cras sem volutpat, et pretium et molestie. Feugiat quis tortor eget orci. Vel pretium ac pharetra libero quam pede, velit neque, suspendisse dolor fermentum amet, quisque consectetuer viverra nonummy dolor facilisi. Lorem elit lectus eget tempor sodales, non ut turpis venenatis volutpat ipsum. Lectus consequat urna ut neque fusce, eget massa ut integer est, ipsum suspendisse quisque sed a, sed mauris vitae enim tincidunt integer, dolor fringilla. In leo velit wisi quam integer, aliquam dolor enim sapien morbi lacinia non, non fermentum hendrerit, amet malesuada, ullamcorper amet. Varius integer interdum, amet non gravida ultrices pulvinar, mi lectus gravida, euismod risus placerat praesent arcu. Voluptatum mauris sit arcu, morbi phasellus a, vel integer elit. Sit nascetur porta morbi, porttitor augue ante dui et nulla rutrum, vivamus mollis massa, urna sem diam odio quisque. Vestibulum erat tristique praesent ornare risus, justo nam velit mus ac, ipsum dis. Non elit dui libero, aenean vivamus eros faucibus, leo et eu orci in sed nonummy, praesent curabitur turpis morbi ante parturient, eu odio risus consectetuer facilisis pellentesque. Sit tortor curabitur enim rutrum, suspendisse porta ipsum convallis dolor, libero laoreet tristique metus elit. Lectus perferendis ipsum lorem consequat. Tortor nulla lectus molestie donec metus, nisl vivamus aenean tellus eget nunc tempor. Non lorem proin augue potenti, elit ante tristique dolor vitae enim, sed erat ultricies elit nisl duis. Orci elit risus nulla et, ultricies felis malesuada vitae libero dignissim suspendisse. Ac etiam blandit volutpat nec diam, rutrum commodo laoreet, volutpat erat vestibulum eros exercitationem ridiculus pellentesque, dolor faucibus nascetur, porttitor duis accumsan eu ornare neque eleifend. Tincidunt convallis hendrerit eros, ut enim iaculis, velit massa magni erat magna hendrerit nam, cras turpis fermentum orci aliquam feugiat. Id nemo aliquip vel mauris semper.'
            )
          )
        )
      );
    }
  }]);

  return Test;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, actions)(Test);

/***/ })

});