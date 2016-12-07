'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegateEmail = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegateEmail = exports.RegateEmail = function (_React$Component) {
  _inherits(RegateEmail, _React$Component);

  _createClass(RegateEmail, null, [{
    key: 'defaultProps',
    get: function get() {
      return {
        value: '',
        onChange: function onChange(value) {},
        readOnly: false,
        disabled: false,
        required: false
      };
    }
  }]);

  function RegateEmail(props) {
    _classCallCheck(this, RegateEmail);

    var _this = _possibleConstructorReturn(this, (RegateEmail.__proto__ || Object.getPrototypeOf(RegateEmail)).call(this, props));

    _this.state = {
      value: _this.props.value
    };

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(RegateEmail, [{
    key: 'isValid',
    value: function isValid() {
      var _isValid = false;

      if (!this.props.required) {
        if (this.props.value === '') {
          _isValid = true;
        }
      }

      return _isValid;
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      var value = e.target.value;
      this.setState({ value: value });
      this.props.onChange(value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', _extends({ type: 'email'
      }, this.props, {
        value: this.state.value,
        onChange: this.onChange
      }));
    }
  }]);

  return RegateEmail;
}(_react2.default.Component);