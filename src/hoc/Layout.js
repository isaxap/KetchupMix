import React, {Component} from 'react'
import './layout.sass'
import Timer from '../containers//Timer/Timer'
import SettingToggle from '../components/Setting/SettingToggle/SettingToggle'
import Drover from '../components/Setting/Drower/Drover'

class Layout extends Component {
  state = {
    control: {
      status: 'passive', //'active' || 'passive' || 'stop' || 'relax'
      menu: false
    }
  }

  settingMenuHandler = () => {
    const control = this.state.control
    control.menu = !control.menu
    this.setState ({control})
  }

  menuCloseHandler = () => {
    const control = this.state.control
    control.menu = false
    this.setState ({control})
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
          <SettingToggle
            onToggle={this.settingMenuHandler}
            isOpen={this.state.control.menu}
          />
          <Drover
            isOpen={this.state.control.menu}
            onClose={this.menuCloseHandler}
          />
          <Timer changeBackground={this.changeBackground}/>
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
