// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous values ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
         
          The Button has been clicked
          {count}
          times
        </h1>
        <p>Click the button to increase the count!</p>
        <button onClick={this.onIncrement}>Click Me</button>
      </div>
    )
  }
}
