'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegateEmail = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * RegateEmail Component
 * December 2016
 */

// the CurrentFieldValue type
// which will be passed to `onInitialized` and `onChange` callbacks
var CurrentFieldValue = function CurrentFieldValue(_ref) {
  var value = _ref.value,
      isValid = _ref.isValid;

  _classCallCheck(this, CurrentFieldValue);

  this.value = value;
  this.isValid = isValid;
};

var RegateEmail = exports.RegateEmail = function (_React$Component) {
  _inherits(RegateEmail, _React$Component);

  _createClass(RegateEmail, null, [{
    key: 'defaultProps',

    // All available properties which can be passed to the Component
    // All these properties are optional and can be omitted
    get: function get() {
      return {
        // {String}
        // [√] [Standard React Prop]
        // the initial value of input
        // by default it is an empty string
        //
        value: '',

        // {Boolean}
        // [√] [Standard React Prop]
        // determines if the input should be readonly or not
        // by default the input is not readonly (the user can change it)
        readOnly: false,

        // {Boolean}
        // [√] [Standard React Prop]
        // determines if the input should be disabled or not
        // by default the input is not disabled (the user can change it)
        disabled: false,

        // {Boolean}
        // [√] [Standard React Prop]
        // determines if the input should be required or not
        // by default the input is not required (it's optional)
        required: false,

        // {Function}
        // [√] [Standard React Prop]
        // the callback which will be invoked whenever the
        // user changes the input value
        // it will receive an object as parameter which contains
        // the current `value` and `isValid` state 
        onChange: function onChange() {},

        // {Function}
        // [x] [Standard React Prop]
        // the callback which will be invoked just once at initialized
        // the behaviour is exactly like the `onChange` callback
        // but will be used for the initializing phase
        onInitialized: function onInitialized() {}
      };
    }
  }]);

  function RegateEmail(props) {
    _classCallCheck(this, RegateEmail);

    // the `value` of input will be changed during the program
    // so we changed it to local state
    var _this = _possibleConstructorReturn(this, (RegateEmail.__proto__ || Object.getPrototypeOf(RegateEmail)).call(this, props));

    _this.state = {
      value: _this.props.value
    };

    // we should call the onInitialized callback at the beginning
    _this.props.onInitialized(new CurrentFieldValue({
      value: _this.state.value,
      isValid: _this._isValid()
    }));

    // binding `this` to needed methods
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  /**
   * private method which return the validity of input
   * 
   * @return {Boolean} the validity of input
   */


  _createClass(RegateEmail, [{
    key: '_isValid',
    value: function _isValid() {
      var _isValid = false;

      if (!this.props.required) {
        if (_validator2.default.isEmpty(this.state.value)) {
          _isValid = true;
        } else {
          _isValid = _validator2.default.isEmail(this.state.value);
        }
      } else {
        _isValid = _validator2.default.isEmail(this.state.value);
      }

      return _isValid;
    }

    /**
     * the onChange callback
     * we change the value of field (via `setState`)
     * and execute the `onChange` callback explicitly
     */

  }, {
    key: 'onChange',
    value: function onChange(e) {
      var _this2 = this;

      var value = e.target.value;
      this.setState({ value: value }, function () {
        _this2.props.onChange(new CurrentFieldValue({
          value: value,
          isValid: _this2._isValid()
        }));
      });
    }

    /**
     * render the input
     * it's a basic HTML input element
     * we append all the user specified properties to it
     * so the user can use any classes or attributes he wants
     */

  }, {
    key: 'render',
    value: function render() {
      // TODO: use Immutable.js
      var props = Object.assign({}, this.props);

      // the `onInitialized` property is not React Standard
      // so the React will throw an error:
      // > Warning: Unknown prop `onInitialized` on <input> tag.
      // > Remove this prop from the element.
      // > For details, see https://fb.me/react-unknown-prop
      // We'll delete it before append props to element
      delete props.onInitialized;

      return _react2.default.createElement('input', _extends({ type: 'email'
      }, props, {
        value: this.state.value,
        onChange: this.onChange
      }));
    }
  }]);

  return RegateEmail;
}(_react2.default.Component);