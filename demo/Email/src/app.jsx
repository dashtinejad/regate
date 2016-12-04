import React from 'react'
import ReactDOM from 'react-dom'

// import { RegateEmail } from '../../../distrubution/index.js'
import { RegateEmail } from 'regate'




//*
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