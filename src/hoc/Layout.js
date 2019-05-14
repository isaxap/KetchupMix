import React, {Component} from 'react'
import './layout.sass'
import Timer from '../containers//Timer/Timer'

class Layout extends Component {
  state = {
    control: {
      status: 'passive' //'active' || 'passive' || 'stop' || 'relax'
    }
  }

  changeBackground = (status) => {
    const control = this.state.control
    control.status = status
    this.setState ({control})
  }

  render() {
    return (
      <React.Fragment>
        <div className={"first-layout " + this.state.control.status}>
          <Timer changeBackground={this.changeBackground}/>
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
