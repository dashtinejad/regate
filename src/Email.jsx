import React from 'react'

export class RegateEmail extends React.Component {
  static get defaultProps() {
      return {
        value: '',
        onChange: value => {},
        readOnly: false,
        disabled: false,
        required: false,
      }
  }

  constructor(props) {
    super(props)

    this.state = {
      value: this.props.value
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const value = e.target.value
    this.setState({ value: value })
    this.props.onChange(value)
  }

  render() {
    return <input type="email"
      {...this.props}
      value={this.state.value}
      onChange={this.onChange}
    />
  }
}