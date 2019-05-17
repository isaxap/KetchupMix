import React, {Component} from 'react'
import './layout.sass'
import Timer from '../containers//Timer/Timer'
import SettingToggle from '../components/Setting/SettingToggle/SettingToggle'
import SettingDrover from '../components/Setting/SettingDrover/SettingDrover'
import CounterTomato from '../components/CounterTomato/CounterTomato'
import Graph from '../components/GraphDrover/Graph/Graph'

class Layout extends Component {
  state = {
    control: {
      status: 'passive', //'active' || 'passive' || 'stop' || 'relax'
      menuSetting: false
    }
  }

  settingMenuHandler = () => {
    const control = this.state.control
    control.menuSetting = !control.menuSetting
    this.setState ({control})
  }

  menuCloseHandler = () => {
    const control = this.state.control
    control.menuSetting = false
    this.setState ({control})
  }

  changeToRelax = () => {
    const control = this.state.control
    control.status = 'relax'
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
            isOpen={this.state.control.menuSetting}
          />
          <SettingDrover
            isOpen={this.state.control.menuSetting}
            onClose={this.menuCloseHandler}
          />
          <Timer
            changeBackground={this.changeBackground}
            changeToRelax={this.changeToRelax}
          />
          <CounterTomato />
          <Graph />
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
