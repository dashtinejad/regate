import React from 'react'

/**
 * RegateEmail Component
 * December 2016
 */

// the CurrentFieldValue type
// which will be passed to `onInitialized` and `onChange` callbacks
class CurrentFieldValue {
  constructor({value, isValid}) {
    this.value = value
    this.isValid = isValid
  }
}

export class RegateEmail extends React.Component {
  // All available properties which can be passed to the Component
  // All these properties are optional and can be omitted
  static get defaultProps() {
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
        onChange: () => {},

        // {Function}
        // [x] [Standard React Prop]
        // the callback which will be invoked just once at initialized
        // the behaviour is exactly like the `onChange` callback
        // but will be used for the initializing phase
        onInitialized: () => {},
      }
  }

  constructor(props) {
    super(props)

    // the `value` of input will be changed during the program
    // so we changed it to local state
    this.state = {
      value: this.props.value
    }

    // we should call the onInitialized callback at the beginning
    this.props.onInitialized(
      new CurrentFieldValue({
        value: this.state.value,
        isValid: this._isValid()
      })
    )

    // binding `this` to needed methods
    this.onChange = this.onChange.bind(this)
  }

  /**
   * private method which return the validity of input
   * 
   * @return {Boolean} the validity of input
   */
  _isValid() {
    let _isValid = false

    if (! this.props.required) {
      if (this.state.value === '') {
        _isValid = true
      }
    }

    return _isValid
  }

  /**
   * the onChange callback
   * we change the value of field (via `setState`)
   * and execute the `onChange` callback explicitly
   */
  onChange(e) {
    const value = e.target.value
    this.setState({ value }, () => {
      this.props.onChange(
        new CurrentFieldValue({
          value,
          isValid: this._isValid()
        })
      )
    })
  }

  /**
   * render the input
   * it's a basic HTML input element
   * we append all the user specified properties to it
   * so the user can use any classes or attributes he wants
   */
  render() {
    // TODO: use Immutable.js
    let props = Object.assign({}, this.props)

    // the `onInitialized` property is not React Standard
    // so the React will throw an error:
    // > Warning: Unknown prop `onInitialized` on <input> tag.
    // > Remove this prop from the element.
    // > For details, see https://fb.me/react-unknown-prop
    // We'll delete it before append props to element
    delete props.onInitialized

    return <input type="email"
      {...props}
      value={this.state.value}
      onChange={this.onChange}
    />
  }
}