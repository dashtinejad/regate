import React from 'react'
import ReactDOM from 'react-dom'

import separator from 'thousand-separator'

import { RegateEmail } from 'regate'
import * as x from 'regate'

console.log(separator(123456789))
console.log(RegateEmail)
console.log(x)

/*
class App extends React.Component {
  onEmailChange(email) {
    console.log(email);
  }

  render() {
    return (
      <div>
        <RegateEmail
          value="mojtaba@gmail.com"
          onChange={this.onEmailChange}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
/**/