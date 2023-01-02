// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  renderAuthButton = () => {
    if (isSubscribed === true) {
      return (
        <button type="button" className="subscribe">
          Subscribed
        </button>
      )
    }
    return (
      <button type="button" className="subscribe">
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading"> Welcome </h1>
        <p className="description"> Thank you! Happy Learning </p>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default Welcome
